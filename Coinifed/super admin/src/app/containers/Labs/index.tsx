import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
// For Redux Action
import {
  getLabRequest,
  deleteLabRequest,
  statusLabRequest,
  BulkLabRequest,
} from "../../../actions";
// For Interface
import { ILabModel } from "../../../interfaces";
import { ConfirmBox } from "../../../helper";
import { AppRoutes } from "../../../config";
import PaginationComponent from "../../components/Pagination";
import { ImageBaseUrl } from "../../../helper/ComanFunctions";

import {
  Table,
  Button,
  Card,
  Row,
  Col,
  Form,
  InputGroup,
  FormControl,
  Dropdown,
} from "react-bootstrap";
import { Trash2, Edit } from "react-feather";
import { toast } from "react-toastify";
import defaultImage from "../../../assets/avatars/user-default.svg";
import { labReducer } from "../../../reducers/Lab";

const Lab = (props: any) => {
  // For search & pagination object
  const defaultForm = {
    skip: 1,
    limit: 10,
    searchValue: "",
    isActive: "",
    fromDate: "",
    toDate: "",
  };
  // Set state for search and pagination
  const [form, setForm] = useState(defaultForm);
  // For get reducer data
  const { LabData, totalRecords } = useSelector(
    (state: any) => state.labReducer
  );
  // For Call redux action
  const dispatch = useDispatch();
  const [minusSign, setminusSign] = useState(false);
  const [checkboxStatus, setcheckboxStatus] = useState(true)

  // For get User Data
  useEffect(() => {
    try {
      // For Decode Pagination
      if (props.location.search.substr(1)) {
        let queryDecode = JSON.parse(atob(props.location.search.substr(1)));
        setForm({ ...form, ...queryDecode });
        handleQueryParams(queryDecode);
      } else {
        handleQueryParams(form);
      }
    } catch (err) {
      handleQueryParams(form);
    }
  }, []);

  // For Get User Date With pagination & Search
  const handleQueryParams = (params: object) => {
    dispatch(getLabRequest(params));
  };

  // For Status Change
  const handleStatus = async (id: string, isActive: boolean) => {
    const { value } = await ConfirmBox({
      title: "Are you sure?",
      text: isActive
        ? "Do you want to activate this lab?"
        : "Do you want to deactivate this lab?",
      confirmButtonText: isActive ? `Yes, deactivate!` : `Yes, activate!`,
    });
    if (!value) {
      return;
    } else {
      dispatch(
        statusLabRequest({
          id,
          isActive: !isActive,
        })
      );
    }
  };

  const pageChanged = (page: number) => {
    setForm({ ...form, skip: page });
    handleQueryParams({ ...form, skip: page });
    // For Encoded
    let queryEncode: any = { ...form, skip: page };
    props.history.push(
      `${AppRoutes.LAB}?${btoa(JSON.stringify(queryEncode))}`
    );
  };

  // For Search
  const handleChange = ({ target }: any) => {
    const { name, value } = target;
    setForm({ ...form, [name]: value });
    if (name === "isActive") {
      handleQueryParams({ ...form, isActive: value });
      props.history.push(
        `${AppRoutes.LAB}?${btoa(
          JSON.stringify({ ...form, isActive: value })
        )}`
      );
    }
  };
  // For Search Record
  const searchRecord = () => {
    setForm({ ...form, skip: 1 });
    handleQueryParams({ ...form, skip: 1 });
    // For Encoded
    props.history.push(
      `${AppRoutes.LAB}?${btoa(JSON.stringify({ ...form, skip: 1 }))}`
    );
  };

  // For Reset Search
  const handleReset = () => {
    const params = {
      ...form,
      searchValue: "",
      skip: 1,
      limit: 10,
      isActive: "",
    };
    setForm(params);
    handleQueryParams(params);
    props.history.push(AppRoutes.LAB);
  };

  // For Delete Corporate
  const handleDelete = async (id: any) => {
    const { value } = await ConfirmBox({
      title: "Are you sure?",
      text: "Do you want to delete this lab",
      confirmButtonText: "Yes, delete!"
    });
    if (value) {
      dispatch(deleteLabRequest(id));
    }
  };

  // For Bulk Action
  const [selectedUser, setSelectedUser] = useState([]);
  // For All Check
  const handleAllCheck = (event: any) => {
    const { target } = event;
    const { checked } = target;
    // const { userReducer } = this.props;
    const selectedUser: any = [];
    if (LabData.length && checked) {
      LabData.forEach((user: any) => {
        selectedUser.push(user._id);
      });
    }
    setSelectedUser(selectedUser);
    setminusSign(false);
    setcheckboxStatus(checked ? false : true)
  };

  // For Single Check
  const handleSingleCheck = (event: any, id: string) => {
    const { target } = event;
    const { checked } = target;
    let selectedList: any = [...selectedUser];
    if (checked) {
      selectedList = [...selectedList, id];
    } else {
      let index = selectedList.indexOf(id as never);
      if (index > -1) {
        selectedList = selectedList.filter((user: string) => user !== id);
      }
    }
    setSelectedUser(selectedList);
  };
  useEffect(() => {
    if (selectedUser.length) {
      setminusSign(true);
      setcheckboxStatus(false)
    }
    else {
      setminusSign(false);
      setcheckboxStatus(true)
    }
  }, [selectedUser])

  // For Bulk Action :- Active, Deactivate and Delete
  const bulkAction = async (action: any) => {
    let msg = "Do you want to delete this selected lab!";
    let confirmButtonText = "Yes, delete!"
    if (action === "Active") {
      msg =
        "Do you want to change status active of this selected lab!";
      confirmButtonText = "Yes, activate!"
    }

    if (action === "Deactive") {
      msg =
        "Do you want to  change status deactive of this selected lab!";
      confirmButtonText = "Yes, deactivate!"
    }

    if (selectedUser.length === 0) {
      toast.error("Please select user");
      return false;
    }
    const { value } = await ConfirmBox({
      title: "Are you sure?",
      text: msg,
      confirmButtonText: confirmButtonText
    });
    if (!value) {
      return;
    } else {
      dispatch(
        BulkLabRequest({
          ids: selectedUser,
          type: action,
        })
      );
    }
  };

  // For Table Index
  let count = (form.skip - 1) * form.limit + 1;

  // For Check Sub Admin Edit
  const [editAccess, setEditAccess] = useState("");

  useEffect(() => {
    let getSubAdmin: any = localStorage.getItem("SubAdminCheck");
    let checkSubAdmin: any = JSON.parse(getSubAdmin);
    let getViewRoute: any;
    if (checkSubAdmin.length) {
      // "SubAdminEdit" this string is for edit access
      // Note This string change for according page
      getViewRoute = checkSubAdmin.find((e: any) => e === "CourseEdit");
    } else {
      getViewRoute = "SuperAdmin";
    }
    setEditAccess(getViewRoute);
  }, []);

  return (
    <div>
      <Card className={"mb-0"}>
        <Card.Body className={""}>
          <Row className={"page-header-panel"}>
            {/* <Col md='2'>
              <h3 className={"page-header"}>Lab</h3>
            </Col> */}
            <Col md='6' className='margin_sm_top'>
              <div className={"d-flex"}>
                <InputGroup>
                  <FormControl
                    placeholder='Search Category name/title'
                    aria-label='Search user'
                    name='searchValue'
                    value={form.searchValue}
                    onChange={handleChange}
                    className='modified_placeholders'
                  />
                  <Button
                    variant='primary'
                    id='button-addon2'
                    className={"mr-2"}
                    onClick={searchRecord}
                  >
                    Search
                  </Button>
                  <Button
                    variant='outline-secondary'
                    id='button-addon2'
                    onClick={handleReset}
                  >
                    Reset
                  </Button>
                </InputGroup>
              </div>
            </Col>
            <Col md='3' className='margin_sm_top'>
              <div className={"filter-block"}>
                <label className={"pt-2 mr-2"}>Status:</label>
                <Form.Control
                  as='select'
                  custom
                  onChange={handleChange}
                  name='isActive'
                  value={form.isActive}
                >
                  <option value=''>All</option>
                  <option value='true'>Active</option>
                  <option value='false'>Inactive</option>
                </Form.Control>
              </div>
            </Col>
            <Col md='3' className='margin_sm_top'>
              {editAccess === "CourseEdit" ||
                editAccess === "SuperAdmin" ? (
                <div className={"filter-block"}>
                  <Link to={AppRoutes.ADD_LAB} className={"btn btn-success"}>
                    <i className='fa fa-plus' /> Add Lab
                  </Link>
                </div>)
                : null
              }
            </Col>
          </Row>
        </Card.Body>
      </Card>
      <Table striped bordered hover responsive>
        <thead>
          <tr>
            <th>
              <Form.Group className='col-sm-12 mb-0'>
                <div className='checkbox'>
                  {editAccess === "CourseEdit" ||
                    editAccess === "SuperAdmin" ? (
                    <div className="d-flex justify-content-center align-items-center">
                      <label
                        htmlFor={"userall"}
                        className='d-flex justify-content-center align-items-center'
                      >
                        <input
                          type='checkbox'
                          name={"selectUser"}
                          id={"userall"}
                          checked={
                            LabData && selectedUser.length === LabData.length
                          }
                          onChange={handleAllCheck}
                          className='checkbox-defaults'
                        />
                        <span className='checkbox-material'>
                          <span className='check' />
                        </span>
                        {
                          minusSign ? <span className="minusSign">-</span> : null
                        }
                      </label>
                      <div className="mb-2">

                        <Dropdown className='mt-3'>
                          <Dropdown.Toggle
                            variant='success'
                            id='dropdown-basic'
                            className='dropdown_toogle background_remove'
                          ></Dropdown.Toggle>
                          <Dropdown.Menu className='dropdown_toggle_menu'>
                            <Dropdown.Item
                              href='#'
                              onClick={() => bulkAction("Active")}
                              disabled={checkboxStatus}
                            >
                              Activate
                            </Dropdown.Item>
                            <Dropdown.Item
                              href='#'
                              onClick={() => bulkAction("Deactive")}
                              disabled={checkboxStatus}
                            >
                              Deactivate
                            </Dropdown.Item>
                            <Dropdown.Item
                              href='#'
                              onClick={() => bulkAction("Delete")}
                              disabled={checkboxStatus}
                            >
                              Delete
                            </Dropdown.Item>
                          </Dropdown.Menu>
                        </Dropdown>
                      </div>
                    </div>
                  ) : (
                    "#"
                  )}
                </div>
              </Form.Group>
            </th>
            <th>Course Name</th>
            <th>Lab Image</th>
            <th>Title</th>
            <th>Lab Link</th>
            <th>Amount(USD)</th>
            <th>Status</th>
            {editAccess === "CourseEdit" ||
              editAccess === "SuperAdmin" ? (
              <th>Actions</th>
            ) : null}
          </tr>
        </thead>
        <tbody>

          {LabData.map((labList: ILabModel, index: number) => {
            return (
              <tr key={labList._id}>
                <td>
                  <Form.Group className='col-sm-12 mb-0'>
                    <div className='checkbox'>
                      {editAccess === "CourseEdit" ||
                        editAccess === "SuperAdmin" ? (
                        <label className='d-flex justify-content-center align-items-center'>
                          <input
                            type='checkbox'
                            name='user'
                            checked={
                              selectedUser.indexOf(labList._id as never) > -1
                                ? true
                                : false
                            }
                            onChange={(e) =>
                              handleSingleCheck(
                                e,
                                labList._id ? labList._id : ""
                              )
                            }
                            id={`user${index}`}
                            className='checkbox-defaults'
                          />
                          <span className='checkbox-material'>
                            <span className='check' />
                          </span>
                          {count + index}.
                        </label>
                      ) : (
                        `${count + index}.`
                      )}
                    </div>
                  </Form.Group>
                </td>
                <td className={"text-capitalize"}>
                  {labList.courseName}
                </td>
                <td> {labList.labsImage &&
                  labList.labsImage.length ? (
                  <img
                    src={ImageBaseUrl(labList.labsImage)}
                    alt='Profile'
                    className='list-view-img'
                    width={100}
                  />
                ) : (
                  <img
                    src={defaultImage}
                    alt='Profile'
                    className='teamProfile'
                  />
                )}</td>
                <td className={"text-capitalize"}>{labList.title}</td>
                <td>
                  <a href={`${labList.link}`} target="_blank">{labList.link ? labList.link : "" }</a>
                </td>
                <td>{labList.amount}</td>
                <td>
                  <Button
                    type='button'
                    color={labList.isActive ? "primary" : "danger"}
                    className=
                    {`
                      ${labList.isActive
                        ? "btn btn-sm btn-primary"
                        : "btn btn-sm btn-danger"
                      }
                      ${editAccess === "CourseEdit" ||
                        editAccess === "SuperAdmin"
                        ? null
                        : "btn-disabled"
                      }`}
                    onClick={() =>
                      handleStatus(labList._id, labList.isActive)
                    }
                    disabled={
                      editAccess === "CourseEdit" ||
                        editAccess === "SuperAdmin"
                        ? false
                        : true
                    }
                  >
                    {labList.isActive ? "Active" : "Inactive"}
                  </Button>
                </td>
                {editAccess === "CourseEdit" ||
                  editAccess === "SuperAdmin" ? (
                  <td className='overflow-hidden'>
                    <div className='action-buttons d-flex align-items-center'>
                      <Link
                        className='btn edit-icon'
                        to={`${AppRoutes.EDIT_LAB}/${labList._id}`}
                      >
                        <Edit />
                      </Link>
                      <button
                        data-toggle='tooltip'
                        data-placement='bottom'
                        title='Delete'
                        type='button'
                        className='btn'
                        onClick={() => handleDelete(labList._id)}
                      >
                        <Trash2 />
                      </button>
                    </div>
                  </td>) :
                  null
                }
              </tr>
            );
          })}
          {!LabData.length ? (
            <tr>
              <td colSpan={10} className='text-center'>
                No User found
              </td>
            </tr>
          ) : null}
        </tbody>
      </Table>
      {totalRecords > form.limit ? (
        <PaginationComponent
          totalRecords={totalRecords}
          pageLimit={form.limit}
          currentPage={form.skip}
          onPageChanged={pageChanged}
        />
      ) : null}
    </div>
  );
};

export default Lab;
