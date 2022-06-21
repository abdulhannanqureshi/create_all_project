import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Dropdown } from "react-bootstrap";
import {
  IRootState,
  IUniversityListingProps,
  IUniversityListingState,
  IUniversityListingData,
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
  getUniversityListRequest,
  deleteUniversityRequest,
  updateUniversityStatusRequest,
  redirectTo
} from "../../../actions";
import { AppRoutes } from "../../../config";
import { Trash2, Edit } from "react-feather";
import { toast } from "react-toastify";

class University extends Component<IUniversityListingProps, IUniversityListingState> {
  constructor(props: IUniversityListingProps) {
    super(props);
    this.state = {
      // For Pagination
      totalRecords: 0,
      currentPage: 1,
      pageNeighbours: 1,
      selectedUser: [],
      // search
      search: "",
      status: "",
      editAccess: "",
    };
  }

  componentDidMount = () => {
    //this.props.getUsers();
    this.handleQueryParams();

    // For Check Sub Admin Edit
    let getSubAdmin: any = localStorage.getItem("SubAdminCheck");
    let checkSubAdmin: any = JSON.parse(getSubAdmin);
    let getViewRoute: any;
    if (checkSubAdmin.length) {
      // "UniversityEdit" this string is for edit access
      // Note This String change for every page
      getViewRoute = checkSubAdmin.find((e: any) => e === "UniversityEdit");
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
        this.props.getUniversityList({
          searchValue: searchValue,
          skip: page,
          limit: paginationLimit,
          isActive: query.status ? query.status : this.state.status,
        })
    );
    console.log("thi")
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
  handleReset = () => {
    this.setState({
      status: "",
    });
    const {
      location: { pathname },
    } = this.props;
    this.props.history.push(pathname);
  };
  handleStatus = async (id: string, isActive: boolean) => {
    const { value } = await ConfirmBox({
      title: "Are you sure?",
      text: isActive
        ? "Do you want to activate this user?"
        : "Do you want to deactivate this user?",
      confirmButtonText: isActive ? `Yes, activate!` : `Yes, deactivate!`,
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
      this.props.updateUniversityStatus({
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
      text: "Do you want to delete this university?",
      confirmButtonText: "Yes, delete!",
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
      await this.props.deleteUniversity({ id, skip: page, limit: paginationLimit });
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


  render() {
    const { selectedUser, search,editAccess } = this.state;
    console.log(this.props,"check")
    const {
      universityReducer: {  totalRecords, currentPage,universityData=[] },
    } = this.props;
    let count = (currentPage - 1) * paginationLimit + 1;
    console.log(universityData,"this is check")
    return (
      <div>
        <Card className={"mb-0"}>
          <Card.Body className={""}>
            <Row className={"page-header-panel"}>
              {/* <Col md="4">
                <h3 className={"page-header"}>University</h3>
              </Col> */}

              <Col md="6" className="margin_sm_top">
                <div className={"d-flex"}>
                  <InputGroup className="">
                    <FormControl
                      placeholder="Search university name"
                      aria-label="Search user"
                      name={"search"}
                      value={search}
                      onChange={this.handleChange}
                      className="modified_placeholders"
                    />
                    <Button
                      variant="primary"
                      id="button-addon2"
                      onClick={this.handleSearchSubmit}
                      className={"mr-2"}
                    >
                      Search
                    </Button>
                    <Button
                      variant="outline-secondary"
                      id="button-addon2"
                      onClick={this.handleReset}
                    >
                      Reset
                    </Button>
                  </InputGroup>
                </div>
              </Col>
              <Col xl="6" lg="6" md="10" sm="5" className="margin_sm_top">
                <div className={"filter-block"}>
                <label className={"pt-2 mr-2"}>Status:</label>
                  <Form.Control
                    as="select"
                    custom
                    onChange={this.handleStatusChange}
                    name={"status"}
                    value={this.state.status}
                  >
                    <option value="">All</option>
                    <option value="true">Active</option>
                    <option value="false">Inactive</option>
                  </Form.Control>
                  {editAccess === "UniversityEdit" ||
                  editAccess === "SuperAdmin" ? (
                  <Link to={AppRoutes.ADD_UNIVERSITY} className={"btn btn-success"}>
                    <i className="fa fa-plus" /> Add university
                  </Link>
                   ) : null}
                </div>
              </Col>
            </Row>
          </Card.Body>
        </Card>
        <Table striped bordered hover responsive >
          <thead>
            <tr>
              <th><Form.Group className='col-sm-12 mb-0'>
                <div className='checkbox'>#</div>
              </Form.Group></th>
              <th>University Name</th>
              <th>Status</th>
              {editAccess === "UniversityEdit" ||
                  editAccess === "SuperAdmin" ? (
              <th>Actions</th>
              ) : null}
            </tr>
          </thead>
          <tbody>
            {universityData.length ? (
              universityData.map((user: IUniversityListingData, index: number) => {
                console.log(user,"this is user please")
                return (
                  <tr key={user._id}>
                    <td>
                      <Form.Group className='col-sm-12 mb-0'>
                        <div className='checkbox'>{count + index}</div>
                      </Form.Group>
                    </td>
                    <td className={"text-capitalize"}>{user.name}</td>
                    {/* <td className={"text-capitalize"}>
                      {user.country ? user.country : "N.A"}
                    </td>
                    <td className={"text-capitalize"}>
                      {user.url ? user.url : "N.A"}
                    </td> */}
                    <td>
                      <Button
                        type='button'
                        color={user.isActive ? "primary" : "danger"}
                        className={`
                    ${
                      user.isActive
                        ? "btn btn-sm btn-primary"
                        : "btn btn-sm btn-danger"
                    }
                      ${
                        editAccess === "UniversityEdit" ||
                        editAccess === "SuperAdmin"
                          ? null
                          : "btn-disabled"
                      }`}
                        onClick={() =>
                          this.handleStatus(
                            user && user._id ? user._id : "",
                            !user.isActive
                          )
                        }
                        disabled={
                          editAccess === "UniversityEdit" ||
                          editAccess === "SuperAdmin"
                            ? false
                            : true
                        }
                      >
                        {user.isActive ? "Active" : "Inactive"}
                      </Button>
                    </td>
                    {editAccess === "UniversityEdit" ||
                    editAccess === "SuperAdmin" ? (
                      <td className='overflow-hidden'>
                        <div className='action-buttons d-flex align-items-center'>
                          <button
                            data-toggle='tooltip'
                            data-placement='bottom'
                            title='Edit'
                            type='button'
                            className='btn edit-icon '
                            onClick={() => {
                              if (user && user._id) {
                                this.props.history.push(
                                  AppRoutes.EDIT_UNIVERSITY.replace(
                                    ":id",
                                    user._id
                                  )
                                );
                              }
                            }}
                          >
                            <Edit />
                          </button>
                          <button
                            data-toggle='tooltip'
                            data-placement='bottom'
                            title='Delete'
                            type='button'
                            className='btn'
                            onClick={() =>
                              this.handleDelete(
                                user && user._id ? user._id : "",
                                !user.isActive
                              )
                            }
                          >
                            <Trash2 />
                          </button>
                        </div>
                      </td>
                    ) : null}
                  </tr>
                );
              })
            ) : (
              <tr>
                <td colSpan={10} className="text-center">
                  No User found
                </td>
              </tr>
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
  universityReducer: state.universityReducer,
});

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    getUniversityList: (data: any) => {
      dispatch(getUniversityListRequest(data));
    },
    deleteUniversity: (data: any) => {
      dispatch(deleteUniversityRequest(data));
    },
    updateUniversityStatus: (data: any) => {
      dispatch(updateUniversityStatusRequest(data));
    },
    redirectTo: (data: any) => {
      dispatch(redirectTo(data));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(University);
