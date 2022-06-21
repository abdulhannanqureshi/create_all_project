import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Dropdown } from "react-bootstrap";
import {
  IRootState,
  IModuleProps,
  IModuleState,
  IModuleData,
} from "../../../interfaces";
import { Dispatch } from "redux";
import { connect } from "react-redux";
import * as qs from "query-string";
import { ConfirmBox } from "../../../helper";
// import TooltipComponent from "../../components/ToolTipComponent";
import { paginationLimit } from "../../common/constant";
import {
  Table,
  Button,
  Card,
  Form,
  InputGroup,
  FormControl,
  Row,
  Col,
} from "react-bootstrap";
import PaginationComponent from "../../components/Pagination";
// import { Camera } from "react-feather";
import {
  getModuleRequest,
  moduleStatusRequest,
  moduleDeleteRequest,
  TalentLmsApiRequest,
  bulkModuleActionRequest,
  redirectTo,
} from "../../../actions";
import { AppRoutes } from "../../../config";
import { Trash2, Edit } from "react-feather";
import { toast } from "react-toastify";

class Module extends Component<IModuleProps, IModuleState> {
  constructor(props: IModuleProps) {
    super(props);
    this.state = {
      // For Pagination
      totalRecords: 0,
      currentPage: 1,
      pageNeighbours: 1,
      selectedModule: [],
      // search
      search: "",
      status: "",
      editAccess: "",
       minusSign: false,
      checkboxStatus:true
    };
  }

  componentDidMount = () => {
    this.handleQueryParams();

    // For Check Sub Admin Edit
    let getSubAdmin: any = localStorage.getItem("SubAdminCheck");
    let checkSubAdmin: any = JSON.parse(getSubAdmin);
    let getViewRoute: any;
    if (checkSubAdmin.length) {
      // "CourseEdit" this string is for edit access
      // Note This String change for every page
      getViewRoute = checkSubAdmin.find((e: any) => e === "CourseEdit");
    } else {
      getViewRoute = "SuperAdmin";
    }
    this.setState({
      editAccess: getViewRoute,
    });
  };

  componentDidUpdate = (prevProps: any) => {
    const { location } = prevProps;
    if (location.search !== this.props.location.search) {
      this.handleQueryParams();
    }
  };

  handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    this.setState({
      ...this.state,
      [name]: value,
    });
  };

  handleStatusChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({
      ...this.state,
      status: event.target.value,
    });
    this.handleQueryParams();
  };

  handleQueryParams = () => {
    const {
      location: { search },
    } = this.props;
    const query = qs.parse(search);
    let searchValue: any;
    let page: number = 1;
    // let status: any = null;
    if (query) {
      page = query.page ? parseInt(query.page as string) : 1;
      searchValue = query.searchValue || "";
      // status = query.status ? query.status : "";
    }
    this.setState(
      {
        currentPage: query.page ? parseInt(query.page as string) : 1,
        search: searchValue,
      },
      () =>
        this.props.getModules({
          searchValue: searchValue,
          skip: page,
          limit: paginationLimit,
          isActive: query.status ? query.status : this.state.status,
        })
    );
  };

  // To apply search filter on list
  handleSearchSubmit = (event: any) => {
    event.preventDefault();
    const {
      location: { pathname },
    } = this.props;
    // To push data in query param
    let params: any = {};
    params.page = 1;
    const { search, status } = this.state;

    if (search) {
      params.searchValue = search;
    }
    if (status && status.value !== "") {
      params.status = status.value;
    }
    if (this.props.redirectTo) {
      this.props.redirectTo({
        path: [pathname, qs.stringify(params)].join("?"),
      });
    }
  };

  onPageChanged = (page: number) => {
    const { location } = this.props;
    const { search, pathname } = location;
    const query = qs.parse(search);
    if (this.props.redirectTo) {
      this.props.redirectTo({
        path: [pathname, qs.stringify({ ...query, page: page })].join("?"),
      });
    }
  };

  handleAllCheck = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { target } = event;
    const { checked } = target;

    const { moduleReducer } = this.props;
    const selectedModule: any = [];
    if (
      moduleReducer &&
      moduleReducer.moduleData &&
      moduleReducer.moduleData.length &&
      checked
    ) {
      const { moduleData } = moduleReducer;
      moduleData.forEach((module: any) => {
        selectedModule.push(module._id);
      });
    }
    this.setState({
      selectedModule,
      minusSign: false,
      checkboxStatus:checked ? false : true
    });
  };

  handleSingleCheck = (
    event: React.ChangeEvent<HTMLInputElement>,
    id: string
  ) => {
    const { target } = event;
    const { checked } = target;
    let selectedModule = [...this.state.selectedModule];
    if (checked) {
      selectedModule = [...selectedModule, id];
    } else {
      let index = selectedModule.indexOf(id);
      if (index > -1) {
        selectedModule = selectedModule.filter((user: string) => user !== id);
      }
    }
    this.setState({
      selectedModule,
    },()=>
    {
      if (this.state.selectedModule.length) {
        this.setState(
          {
            ...this.state,
            selectedModule: selectedModule,
            minusSign: true,
            checkboxStatus:false
          }
        )
      }
      else {
        this.setState(
          {
            ...this.state,
            selectedModule: selectedModule,
            minusSign: false,
            checkboxStatus:true
          }
        )
      }
    });
  };

  handleStatus = async (id: string, isActive: boolean) => {
    const { value } = await ConfirmBox({
      title: "Are you sure?",
      text: isActive
        ? "Do you want to activate this module?"
        : "Do you want to deactivate this module?",
      confirmButtonText: isActive
        ? `Yes, activate!`
        : `Yes, deactivate!`
    });
    if (!value) {
      return;
    } else {
      const {
        location: { search },
      } = this.props;
      const query = qs.parse(search);
      let page: number = 1;
      if (query) {
        page = query.page ? parseInt(query.page as string) : 1;
      }
      this.props.updateModuleStatus({
        id,
        isActive,
        skip: page,
        limit: paginationLimit,
      });
    }
  };

  handleDelete = async (id: string, isActive: boolean) => {
    const { value } = await ConfirmBox({
      title: "Are you sure?",
      text: "Do you want to delete this module?",
      confirmButtonText: "Yes, delete!"
    });
    if (!value) {
      return;
    } else {
      const {
        location: { search },
      } = this.props;
      const query = qs.parse(search);
      let page: number = 1;
      if (query) {
        page = query.page ? parseInt(query.page as string) : 1;
      }
      await this.props.deleteModule({ id, skip: page, limit: paginationLimit });
      // alert(id)
    }
  };

  handleReset = () => {
    this.setState({
      status: "",
    });
    const {
      location: { pathname },
    } = this.props;
    this.props.history.push(pathname);
  };
  bulkAction = async (action: any) => {
    const { selectedModule } = this.state;
    let msg = "Do you want to delete this selected blog!";
    let confirmButtonText = "Yes, delete!"
    if (action === "Active") {
      msg = "Do you want to  change status active of this selected module!";
      confirmButtonText = "Yes, activate!"
    }
    if (action === "Deactive") {
      msg = "Do you want to  change status deactive of this selected module!";
      confirmButtonText = "Yes, deactivate!"
    }
    if (selectedModule.length === 0) {
      toast.error("Please select module");
      return false;
    }
    const { value } = await ConfirmBox({
      title: "Are you sure?",
      text: msg,
      confirmButtonText: confirmButtonText,
    });
    if (!value) {
      return;
    } else {
      const {
        location: { search },
      } = this.props;
      const query = qs.parse(search);
      let page: number = 1;
      if (query) {
        page = query.page ? parseInt(query.page as string) : 1;
      }
      this.props.bulkAction({
        ids: selectedModule,
        type: action,
        skip: page,
        limit: paginationLimit,
      });
    }
  };

  // onChangeStatus =(e)=>{
  //   this.setState({
  //     status : e.target.value
  //   })
  // }

  render() {
    const { selectedModule, search, editAccess } = this.state;
    const {
      moduleReducer: { moduleData = [], isLoading, totalRecords, currentPage },
    } = this.props;
    let count = (currentPage - 1) * paginationLimit + 1;

    return (
      <div>
        <Card className={"mb-0"}>
          <Card.Body className={""}>
            <Row className={"page-header-panel"}>
              {/* <Col md={2}>
                <h3 className={"page-header"}>Modules</h3>
              </Col> */}
              <Col md={6}>
                <div className={"d-flex"}>
                  <InputGroup className=''>
                    <FormControl
                      placeholder='Search module name/ course name'
                      aria-label='Search module'
                      name={"search"}
                      value={search}
                      onChange={this.handleChange}
                      className='modified_placeholders'
                    />
                    <Button
                      variant='primary'
                      id='button-addon2'
                      onClick={this.handleSearchSubmit}
                      className={"mr-2"}
                    >
                      Search
                    </Button>
                    <Button
                      variant='outline-secondary'
                      id='button-addon2'
                      onClick={this.handleReset}
                    >
                      Reset
                    </Button>
                  </InputGroup>
                </div>
              </Col>
              <Col md='6' className='d-flex justify-content-end'>
                <div className={"filter-block"}>
                  <label className={"pt-2 mr-2"}>Status:</label>
                  <Form.Control
                    as='select'
                    custom
                    onChange={this.handleStatusChange}
                    name={"status"}
                    value={this.state.status}
                  >
                    <option value=''>All</option>
                    <option value='true'>Active</option>
                    <option value='false'>Inactive</option>
                  </Form.Control>
                  {/* <Link to={AppRoutes.ADD_MODULE} className={"btn btn-success"}>
                    <i className="fa fa-plus" /> Add Module
                  </Link> */}
                </div>
              </Col>
              {/* <Col md={3} className='d-flex justify-content-end'>
                <Button
                  id='button-addon2'
                  onClick={this.props.talentlms}
                  className={"mr-2 btn btn-success"}
                >
                  Sync with talent lms{" "}
                  <span className='ml-2'>
                    <i className='fa fa-refresh' aria-hidden='true'></i>
                  </span>
                </Button>
              </Col> */}
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
                      <div className='d-flex justify-content-center align-items-center'>
                        <label
                          htmlFor={"moduleall"}
                          className='d-flex justify-content-center align-items-center'
                        >
                          <input
                            type='checkbox'
                            name={"selectUser"}
                            id={"moduleall"}
                            checked={
                              selectedModule.length === moduleData.length
                            }
                            onChange={this.handleAllCheck}
                          />
                          <span className='checkbox-material'>
                            <span className='check' />
                          </span>
                          {this.state.minusSign ? (
                            <span className='minusSign'>-</span>
                          ) : null}
                        </label>
                        <div className='mb-2'>
                          <Dropdown className='mt-3'>
                            <Dropdown.Toggle
                              variant='success'
                              id='dropdown-basic'
                              className='dropdown_toogle background_remove'
                            ></Dropdown.Toggle>
                            <Dropdown.Menu className='dropdown_toggle_menu'>
                              {/* <Dropdown.Item href="#">All</Dropdown.Item> */}
                              <Dropdown.Item
                                href='#'
                                onClick={() => this.bulkAction("Active")}
                                disabled={this.state.checkboxStatus}
                              >
                                Activate
                              </Dropdown.Item>
                              <Dropdown.Item
                                href='#'
                                onClick={() => this.bulkAction("Deactive")}
                                disabled={this.state.checkboxStatus}
                              >
                                Deactivate
                              </Dropdown.Item>
                              <Dropdown.Item
                                href='#'
                                onClick={() => this.bulkAction("Delete")}
                                disabled={this.state.checkboxStatus}
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
              <th>Module Name</th>
              <th>Course</th>
              <th>Course Code</th>
              <th>Amount</th>
              <th>Status</th>
              {/* <th>Actions</th> */}
            </tr>
          </thead>
          <tbody>
            {moduleData.length
              ? moduleData.map((module: IModuleData, index: number) => {
                  return (
                    <tr key={module._id}>
                      <td>
                        <Form.Group className='col-sm-12 mb-0'>
                          <div className='checkbox'>
                            {editAccess === "CourseEdit" ||
                            editAccess === "SuperAdmin" ? (
                              <label className='d-flex justify-content-center align-items-center'>
                                <input
                                  type='checkbox'
                                  name={"module"}
                                  checked={
                                    selectedModule.indexOf(module._id) > -1
                                      ? true
                                      : false
                                  }
                                  onChange={(
                                    e: React.ChangeEvent<HTMLInputElement>
                                  ) =>
                                    this.handleSingleCheck(
                                      e,
                                      module._id ? module._id : ""
                                    )
                                  }
                                  id={`module${index}`}
                                />
                                <span className='checkbox-material'>
                                  <span className='check' />
                                </span>
                                {count + index}
                              </label>
                            ) : (
                              `${count + index}.`
                            )}
                          </div>
                        </Form.Group>
                      </td>
                      <td className={"text-capitalize"}>{module.moduleName}</td>
                      <td className={"text-capitalize"}>{module.courseName}</td>
                      <td className={"text-capitalize"}>{module.code}</td>
                      <td>${module.amount}</td>
                      <td>
                        <Button
                          type='button'
                          color={module.isActive ? "primary" : "danger"}
                          className={`
                    ${
                      module.isActive
                        ? "btn btn-sm btn-primary"
                        : "btn btn-sm btn-danger"
                    }
                      ${
                        editAccess === "CourseEdit" ||
                        editAccess === "SuperAdmin"
                          ? null
                          : "btn-disabled"
                      }`}
                          onClick={() =>
                            this.handleStatus(
                              module && module._id ? module._id : "",
                              !module.isActive
                            )
                          }
                          disabled={
                            editAccess === "CourseEdit" ||
                            editAccess === "SuperAdmin"
                              ? false
                              : true
                          }
                        >
                          {module.isActive ? "Active" : "Inactive"}
                        </Button>
                      </td>
                      {/* <td className="overflow-hidden">
                        <div className="action-buttons d-flex  align-items-center">
                          <button title="edit"
                            type="button"
                            className="btn edit-icon "
                            onClick={() => {
                              if (module && module._id) {
                                this.props.history.push(
                                  AppRoutes.EDIT_MODULE.replace(
                                    ":id",
                                    module._id
                                  )
                                );
                              }
                            }}
                          >
                            <Edit />
                          </button>
                          <button title="delete"
                             type="button"
                             className="btn edit-icon "
                            onClick={() =>
                              this.handleDelete(
                                module && module._id ? module._id : "",
                                !module.isActive
                              )
                            }
                          >
                            <Trash2 />
                          </button>
                        </div>
                      </td> */}
                    </tr>
                  );
                })
              : ""}
            {!isLoading && !moduleData.length ? (
              <tr>
                <td colSpan={10} className='text-center'>
                  No module found
                </td>
              </tr>
            ) : (
              ""
            )}
          </tbody>
        </Table>
        {totalRecords > paginationLimit ? (
          <PaginationComponent
            totalRecords={totalRecords ? totalRecords : 0}
            pageLimit={paginationLimit}
            currentPage={currentPage}
            onPageChanged={this.onPageChanged}
          />
        ) : null}
      </div>
    );
  }
}

const mapStateToProps: any = (state: IRootState) => ({
  moduleReducer: state.moduleReducer,
});

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    getModules: (data: any) => {
      dispatch(getModuleRequest(data));
    },
    updateModuleStatus: (data: any) => {
      dispatch(moduleStatusRequest(data));
    },
    deleteModule: (data: any) => {
      dispatch(moduleDeleteRequest(data));
    },
    talentlms: (data: any) => {
      dispatch(TalentLmsApiRequest(data));
    },
    bulkAction: (data: any) => {
      dispatch(bulkModuleActionRequest(data));
    },
    redirectTo: (data: any) => {
      dispatch(redirectTo(data));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Module);
