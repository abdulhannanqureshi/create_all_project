import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  getCorporateRequest,
  statusCorporateRequest,
  deleteCorporateRequest,
} from "../../../actions";
import { ICorporateGetData } from "../../../interfaces";
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
} from "react-bootstrap";
import { Trash2, Edit } from "react-feather";

const UserCorporate = (props: any) => {
  const defaultForm = {
    skip: 1,
    limit: 10,
    searchValue: "",
    isActive: "",
    fromDate: "",
    toDate: "",
  };

  const [form, setForm] = useState(defaultForm);

  const { corporateData, totalRecords } = useSelector(
    (state: any) => state.corporateReducer
  );
  const dispatch = useDispatch();

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
    dispatch(getCorporateRequest(params));
  };

  // For Status Change
  const handleStatus = async (id: string, isActive: boolean) => {
    const { value } = await ConfirmBox({
      title: "Are you sure?",
      text: isActive
        ? "Do you want to deactivate this Corporate?"
        : "Do you want to activate this Corporate?",
      confirmButtonText: isActive ? `Yes, deactivate!` : `Yes, activate!`,
    });

    if (!value) {
      return;
    } else {
      dispatch(
        statusCorporateRequest({
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
      `${AppRoutes.CORPORATE}?${btoa(JSON.stringify(queryEncode))}`
    );
  };
  // For Search
  const handleChange = ({ target }: any) => {
    const { name, value } = target;
    setForm({ ...form, [name]: value });
    if (name === "isActive") {
      handleQueryParams({ ...form, isActive: value });
      props.history.push(
        `${AppRoutes.CORPORATE}?${btoa(
          JSON.stringify({ ...form, isActive: value })
        )}`
      );
    }
  };

  const searchRecord = () => {
    setForm({ ...form, skip: 1 });
    handleQueryParams({ ...form, skip: 1 });
    // For Encoded
    props.history.push(
      `${AppRoutes.CORPORATE}?${btoa(JSON.stringify({ ...form, skip: 1 }))}`
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
    props.history.push(AppRoutes.CORPORATE);
  };

  // For Delete Corporate
  const handleDelete = async (id: any) => {
    const { value } = await ConfirmBox({
      title: "Are you sure?",
      text: "Do you want to delete this Corporate",
      confirmButtonText: "Yes Delete",
    });
    if (value) {
      dispatch(deleteCorporateRequest(id));
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
      // "CorporateEdit" this string is for edit access
      // Note This string change for according page
      getViewRoute = checkSubAdmin.find((e: any) => e === "CorporateEdit");
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
            {/* <Col xl='2' md='2' sm='2'>
              <h3 className={"page-header"}>Corporation</h3>
            </Col> */}
            <Col xl='6' sm='10' className='margin_sm_top'>
              <div className={"d-flex"}>
                <InputGroup>
                  <FormControl
                    placeholder='Search corporation name'
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
            <Col xl='3' lg='6' md='10' sm='5' className='margin_sm_top'>
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
            <Col xl='3' lg='6' md='2' sm='6' className='margin_sm_top'>
              <div className={"filter-block"}>
                {editAccess === "CorporateEdit" ||
                editAccess === "SuperAdmin" ? (
                  <Link
                    to={AppRoutes.ADD_CORPORATE}
                    className={"btn btn-success"}
                  >
                    <i className='fa fa-plus' /> Add Corporation
                  </Link>
                ) : null}
              </div>
            </Col>
          </Row>
        </Card.Body>
      </Card>
      <Table striped bordered hover responsive>
        <thead>
          <tr>
            <th>
              <Form.Group className='col-sm-12 mb-0'>
                <div className='checkbox'>#</div>
              </Form.Group>
            </th>
            <th>Corporation Name</th>
            <th>Status</th>
            {editAccess === "CorporateEdit" || editAccess === "SuperAdmin" ? (
              <th>Actions</th>
            ) : null}
          </tr>
        </thead>
        <tbody>
          {corporateData.map(
            (corporateList: ICorporateGetData, index: number) => {
              return (
                <tr key={corporateList._id}>
                  <td>
                    <Form.Group className='col-sm-12 mb-0'>
                      <div className='checkbox'>{index + count}</div>
                    </Form.Group>
                  </td>
                  <td className={"text-capitalize"}>{corporateList.name}</td>
                  <td>
                    <Button
                      type='button'
                      color={corporateList.isActive ? "primary" : "danger"}
                      className={`
                    ${
                      corporateList.isActive
                        ? "btn btn-sm btn-primary"
                        : "btn btn-sm btn-danger"
                    }
                      ${
                        editAccess === "CorporateEdit" ||
                        editAccess === "SuperAdmin"
                          ? null
                          : "btn-disabled"
                      }`}
                      onClick={() =>
                        handleStatus(corporateList._id, corporateList.isActive)
                      }
                      disabled={
                        editAccess === "CorporateEdit" ||
                        editAccess === "SuperAdmin"
                          ? false
                          : true
                      }
                    >
                      {corporateList.isActive ? "Active" : "Inactive"}
                    </Button>
                  </td>
                  {editAccess === "CorporateEdit" ||
                  editAccess === "SuperAdmin" ? (
                    <td className='overflow-hidden'>
                      <div className='action-buttons d-flex align-items-center'>
                        <Link
                          className='btn edit-icon'
                          to={`${AppRoutes.EDIT_CORPORATE}/${corporateList._id}`}
                        >
                          <Edit />
                        </Link>
                        <button
                          data-toggle='tooltip'
                          data-placement='bottom'
                          title='Delete'
                          type='button'
                          className='btn'
                          onClick={() => handleDelete(corporateList._id)}
                        >
                          <Trash2 />
                        </button>
                      </div>
                    </td>
                  ) : null}
                </tr>
              );
            }
          )}

          {!corporateData.length ? (
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

export default UserCorporate;
