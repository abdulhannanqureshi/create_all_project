import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  getSubAdminRequest,
  statusSubAdminRequest,
  deleteSubAdminRequest,
  reportSubAdminRequest,
  bulkActionSubAdminRequest,
} from "../../../actions";
import { ISubAdminModel } from "../../../interfaces";
import { ConfirmBox } from "../../../helper";
import { AppRoutes } from "../../../config";
import PaginationComponent from "../../components/Pagination";
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

const SubAdmin = (props: any) => {
  // Object for api list params and body
  const defaultForm = {
    searchValue: "",
    isActive: "",
    skip: 1,
    limit: 10,
    fromDate: "",
    toDate: "",
  };
  const [form, setForm] = useState(defaultForm);
  // For Get Redux Data and post
  const { subAdminData, totalRecords } = useSelector(
    (state: any) => state.subAdminReducer
  );
  const dispatch = useDispatch();
  const [minusSign, setminusSign] = useState(false);
  const [checkboxStatus, setcheckboxStatus] = useState(true)

  // For get Corporate Data
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

  // For Get Corporate Date With pagination & Search
  const handleQueryParams = (params: object) => {
    dispatch(getSubAdminRequest(params));
  };

  // For Status Change
  const handleStatus = async (id: string, isActive: boolean) => {
    const { value } = await ConfirmBox({
      title: "Are you sure?",
      text: isActive
        ? "Do you want to deactivate this Sub Admin?"
        : "Do you want to activate this Sub Admin?",
      confirmButtonText: isActive ? `Yes, deactivate!` : `Yes, activate!`,
    });
    if (!value) {
      return;
    } else {
      dispatch(
        statusSubAdminRequest({
          id,
          isActive: !isActive,
        })
      );
    }
  };
  // For Pagination
  const pageChanged = (page: number) => {
    setForm({ ...form, skip: page });
    handleQueryParams({ ...form, skip: page });
    // For Encoded
    let queryEncode: any = { ...form, skip: page };
    props.history.push(
      `${AppRoutes.SUB_ADMIN}?${btoa(JSON.stringify(queryEncode))}`
    );
  };
  // For Search by Active Dropdown
  const handleChange = ({ target }: any) => {
    const { name, value } = target;
    setForm({ ...form, [name]: value });
    if (name === "isActive") {
      handleQueryParams({ ...form, isActive: value });
      props.history.push(
        `${AppRoutes.SUB_ADMIN}?${btoa(
          JSON.stringify({ ...form, isActive: value })
        )}`
      );
    }
  };
  // For Search by Search Field
  const searchRecord = () => {
    setForm({ ...form, skip: 1 });
    handleQueryParams({ ...form, skip: 1 });
    // For Encoded
    props.history.push(
      `${AppRoutes.SUB_ADMIN}?${btoa(JSON.stringify({ ...form, skip: 1 }))}`
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
    props.history.push(AppRoutes.SUB_ADMIN);
  };

  // For Delete Corporate
  const handleDelete = async (id: any) => {
    const { value } = await ConfirmBox({
      title: "Are you sure?",
      text: "Do you want to delete this Sub Admin",
      confirmButtonText: "Yes, delete!",
    });
    if (value) {
      dispatch(deleteSubAdminRequest(id));
    }
  };

  // For Download List CSV File
  const downloadList = () => {
    dispatch(reportSubAdminRequest());
  };

  // For Bulk Action
  const [selectedUser, setSelectedUser] = useState([]);
  // For All Check
  const handleAllCheck = (event: any) => {
    const { target } = event;
    const { checked } = target;
    // const { userReducer } = this.props;
    const selectedUser: any = [];
    if (subAdminData.length && checked) {
      subAdminData.forEach((user: any) => {
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
    let msg = "Do you want to delete this selected sub admin!";
    let confirmButtonText = "Yes, delete!"
    if (action === "Active"){
      msg = "Do you want to change status active of this selected sub admin!";
      confirmButtonText = "Yes, activate!"
    }
    if (action === "Deactive"){
      msg =
        "Do you want to  change status deactive of this selected sub admin!";
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
        bulkActionSubAdminRequest({
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
      getViewRoute = checkSubAdmin.find((e: any) => e === "SubAdminEdit");
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
            {/* <Col xl='2' lg='2' md='2' sm='2'>
              <h3 className={"page-header"}>Sub Admin</h3>
            </Col> */}
            <Col xl='6' lg='10' md='10' sm='10' className='margin_sm_top'>
              <div className={"d-flex"}>
                <InputGroup>
                  <FormControl
                    placeholder='Search first name/ last name/ email'
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
            <Col xl='4' lg='6' md='10' sm='5' className='margin_sm_top'>
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
                  <option value='false'>Deactive</option>
                </Form.Control>
                {editAccess === "SubAdminEdit" ||
                  editAccess === "SuperAdmin" ? (
                  <Link
                    to={AppRoutes.ADD_SUB_ADMIN}
                    className={"btn btn-success"}
                  >
                    <i className='fa fa-plus' /> Add Sub Admin
                  </Link>
                ) : null}
              </div>
            </Col>
            <Col
              xl='2'
              lg='6'
              md='2'
              sm={6}
              className='margin_sm_top text-right'
            >
              <Button
                id='button-addon2'
                onClick={downloadList}
                className={"mr-2 download_button"}
              >
                Download csv{" "}
                <span className='ml-2'>
                  <i className='fa fa-download' aria-hidden='true'></i>
                </span>
              </Button>
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
                  {editAccess === "SubAdminEdit" ||
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
                            subAdminData &&
                            selectedUser.length === subAdminData.length
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
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email Address</th>
            <th>Role Name</th>
            {/* <th>Role</th> */}
            <th>Created By</th>
            {/* <th>Roles Permission</th> */}
            <th>Status</th>
            {editAccess === "SubAdminEdit" || editAccess === "SuperAdmin" ? (
              <th>Actions</th>
            ) : null}
          </tr>
        </thead>
        <tbody>
          {subAdminData.map((subAdminList: ISubAdminModel, index: number) => {
            return (
              <tr key={subAdminList._id}>
                <td>
                  <Form.Group className='col-sm-12 mb-0'>
                    <div className='checkbox'>
                      {editAccess === "SubAdminEdit" ||
                        editAccess === "SuperAdmin" ? (
                        <label className='d-flex justify-content-center align-items-center'>
                          <input
                            type='checkbox'
                            name='user'
                            checked={
                              selectedUser.indexOf(subAdminList._id as never) >
                                -1
                                ? true
                                : false
                            }
                            onChange={(e) =>
                              handleSingleCheck(
                                e,
                                subAdminList._id ? subAdminList._id : ""
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
                <td className={"text-capitalize"}>{subAdminList.firstName}</td>
                <td className={"text-capitalize"}>{subAdminList.lastName}</td>
                <td>{subAdminList.email}</td>
                <td className={"text-capitalize"}>{subAdminList.roleName}</td>
                <td className={"text-capitalize"}>
                  {subAdminList.createdBy.replace(/-/g, " ")}
                </td>
                {/* <td className={"text-capitalize"}>
                  {subAdminList.rolesPermission.map((role: any) => (
                    <span className='role-list'>
                      {role.replace(/([a-z](?=[A-Z]))/g, "$1 ")}
                    </span>
                  ))}
                </td> */}
                <td>
                  <Button
                    type='button'
                    color={subAdminList.isActive ? "primary" : "danger"}
                    className={`
                    ${subAdminList.isActive
                        ? "btn btn-sm btn-primary"
                        : "btn btn-sm btn-danger"
                      }
                      ${editAccess === "SubAdminEdit" ||
                        editAccess === "SuperAdmin"
                        ? null
                        : "btn-disabled"
                      }`}
                    onClick={() =>
                      handleStatus(subAdminList._id, subAdminList.isActive)
                    }
                    disabled={
                      editAccess === "SubAdminEdit" ||
                        editAccess === "SuperAdmin"
                        ? false
                        : true
                    }
                  >
                    {subAdminList.isActive ? "Active" : "Inactive"}
                  </Button>
                </td>
                {editAccess === "SubAdminEdit" ||
                  editAccess === "SuperAdmin" ? (
                  <td className='overflow-hidden'>
                    <div className='action-buttons d-flex align-items-center'>
                      <Link
                        className='btn edit-icon'
                        to={`${AppRoutes.EDIT_SUB_ADMIN}/${subAdminList._id}`}
                      >
                        <Edit />
                      </Link>
                      <button
                        data-toggle='tooltip'
                        data-placement='bottom'
                        title='Delete'
                        type='button'
                        className='btn'
                        onClick={() => handleDelete(subAdminList._id)}
                      >
                        <Trash2 />
                      </button>
                    </div>
                  </td>
                ) : null}
              </tr>
            );
          })}
          {!subAdminData.length ? (
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

export default SubAdmin;
