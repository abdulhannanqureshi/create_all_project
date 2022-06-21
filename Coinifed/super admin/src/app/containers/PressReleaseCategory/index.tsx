import React, { Component } from "react";
import { Link } from "react-router-dom";
import {
  IRootState,
  IPressReleaseCategoryProps,
  IPressReleaseCategoryState,
  IPressReleaseCategoryData,
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
  getPressReleaseCategoryRequest,
  pressReleaseCategoryStatusRequest,
  pressReleaseCategoryDeleteRequest,
  redirectTo,
} from "../../../actions";
import { AppRoutes } from "../../../config";
import { Trash2, Edit } from "react-feather";

class PressReleaseCategory extends Component<
  IPressReleaseCategoryProps,
  IPressReleaseCategoryState
> {
  constructor(props: IPressReleaseCategoryProps) {
    super(props);
    this.state = {
      // For Pagination
      totalRecords: 0,
      currentPage: 1,
      pageNeighbours: 1,
      selectedPressReleaseCategory: [],
      // search
      search: "",
      status: "",
      editAccess: "",
    };
  }

  componentDidMount = () => {
    //this.props.getPressReleaseCategory();
    this.handleQueryParams();

    // For Check Sub Admin Edit
    let getSubAdmin: any = localStorage.getItem("SubAdminCheck");
    let checkSubAdmin: any = JSON.parse(getSubAdmin);
    let getViewRoute: any;
    if (checkSubAdmin.length) {
      // "PressReleaseEdit" this string is for edit access
      // Note This String change for every page
      getViewRoute = checkSubAdmin.find((e: any) => e === "PressReleaseEdit");
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
    let skip: number = 1;
    // let status: any = null;
    if (query) {
      skip = query.skip ? parseInt(query.skip as string) : 1;
      searchValue = query.searchValue || "";
      // status = query.status ? query.status : "";
    }
    this.setState(
      {
        currentPage: query.skip ? parseInt(query.skip as string) : 1,
        search: searchValue,
      },
      () =>
        this.props.getPressReleaseCategory({
          searchValue: searchValue,
          skip: skip,
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
    params.skip = 1;
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
        path: [pathname, qs.stringify({ ...query, skip: page })].join("?"),
      });
    }
  };

  handleAllCheck = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { target } = event;
    const { checked } = target;

    const { pressReleaseCategoryReducer } = this.props;
    const selectedPressReleaseCategory: any = [];
    if (
      pressReleaseCategoryReducer &&
      pressReleaseCategoryReducer.pressReleaseCategoryData &&
      pressReleaseCategoryReducer.pressReleaseCategoryData.length &&
      checked
    ) {
      const { pressReleaseCategoryData } = pressReleaseCategoryReducer;
      pressReleaseCategoryData.forEach((user: any) => {
        selectedPressReleaseCategory.push(user._id);
      });
    }
    this.setState({
      selectedPressReleaseCategory,
    });
  };

  handleSingleCheck = (
    event: React.ChangeEvent<HTMLInputElement>,
    id: string
  ) => {
    const { target } = event;
    const { checked } = target;
    let selectedPressReleaseCategory = [
      ...this.state.selectedPressReleaseCategory,
    ];
    if (checked) {
      selectedPressReleaseCategory = [...selectedPressReleaseCategory, id];
    } else {
      let index = selectedPressReleaseCategory.indexOf(id);
      if (index > -1) {
        selectedPressReleaseCategory = selectedPressReleaseCategory.filter(
          (user: string) => user !== id
        );
      }
    }
    this.setState({
      selectedPressReleaseCategory,
    });
  };

  handleStatus = async (id: string, isActive: boolean) => {
    const { value } = await ConfirmBox({
      title: "Are you sure?",
      text: isActive
        ? "Do you want to activate this press release category?"
        : "Do you want to deactivate this press release category?",
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
      this.props.updatePressReleaseCategoryStatus({
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
      text: "Do you want to delete this press release category?",
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
      this.props.deletePressReleaseCategory({
        id,
        skip: page,
        limit: paginationLimit,
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

  // onChangeStatus =(e)=>{
  //   this.setState({
  //     status : e.target.value
  //   })
  // }

  render() {
    const { currentPage, search, editAccess } = this.state;
    const { pressReleaseCategoryReducer } = this.props;
    // const { totalRecords } = this.props;
    let count = (currentPage - 1) * paginationLimit + 1;

    return (
      <div>
        <Card className={"mb-0"}>
          <Card.Body className={""}>
            <Row className={"page-header-panel"}>
              {/* <Col>
                <h3 className={"page-header"}>Press Release Category</h3>
              </Col> */}
              <Col md={6}>
                <div className={"d-flex"}>
                  <InputGroup className="">
                    <FormControl
                    className="modified_placeholders"
                      placeholder="Search press release category name"
                      aria-label="Search press release category"
                      name={"search"}
                      value={search}
                      onChange={this.handleChange}
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
              <Col md={6}>
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
                  {editAccess === "PressReleaseEdit" ||
                  editAccess === "SuperAdmin" ? (
                  <Link
                    to={AppRoutes.ADD_PRESS_RELEASE_CATEGORY}
                    className={"btn btn-success"}
                  >
                    <i className="fa fa-plus" /> Add press category
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
              <th>Category Name</th>
              <th>Status</th>
              {editAccess === "PressReleaseEdit" ||
                  editAccess === "SuperAdmin" ? (
                <th>Actions</th>
              ) : null}
            </tr>
          </thead>
          <tbody>
            {this.props.pressReleaseCategoryReducer &&
            this.props.pressReleaseCategoryReducer.pressReleaseCategoryData &&
            this.props.pressReleaseCategoryReducer.pressReleaseCategoryData
              .length ? (
              this.props.pressReleaseCategoryReducer.pressReleaseCategoryData.map(
                (item: IPressReleaseCategoryData, index: number) => {
                  return (
                    <tr key={item._id}>
                      <td><Form.Group className='col-sm-12 mb-0'>
                          <div className='checkbox'>{count++}</div>
                        </Form.Group>
                      </td>
                      <td className={"text-capitalize"}>{item.categoryName}</td>
                      <td>
                        <Button
                          type="button"
                          color={item.isActive ? "primary" : "danger"}
                          className=
                          {`
                          ${
                            item.isActive
                              ? "btn btn-sm btn-primary"
                              : "btn btn-sm btn-danger"
                          }
                            ${
                              editAccess === "PressReleaseEdit" ||
                              editAccess === "SuperAdmin"
                                ? null
                                : "btn-disabled"
                            }`}
                          onClick={() =>
                            this.handleStatus(
                              item && item._id ? item._id : "",
                              !item.isActive
                            )
                          }
                          disabled={
                            editAccess === "PressReleaseEdit" ||
                            editAccess === "SuperAdmin"
                              ? false
                              : true
                          }
                        >
                          {item.isActive ? "Active" : "Inactive"}
                        </Button>
                      </td>
                      {editAccess === "PressReleaseEdit" ||
                      editAccess === "SuperAdmin" ? (
                      <td className="overflow-hidden">
                        <div className="action-buttons d-flex align-items-center">
                          <button title="edit"
                            type="button"
                            className="btn edit-icon "
                            onClick={() => {
                              if (item && item._id) {
                                this.props.history.push(
                                  AppRoutes.EDIT_PRESS_RELEASE_CATEGORY.replace(
                                    ":id",
                                    item._id
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
                                item && item._id ? item._id : "",
                                !item.isActive
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
                }
              )
            ) : (
              <tr>
                <td colSpan={10} className="text-center">
                  No data found
                </td>
              </tr>
            )}
          </tbody>
        </Table>
        {pressReleaseCategoryReducer &&
        pressReleaseCategoryReducer.totalRecords > paginationLimit ? (
          <PaginationComponent
            totalRecords={
              pressReleaseCategoryReducer
                ? pressReleaseCategoryReducer.totalRecords
                : 0
            }
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
  pressReleaseCategoryReducer: state.pressReleaseCategoryReducer,
});

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    getPressReleaseCategory: (data: any) => {
      dispatch(getPressReleaseCategoryRequest(data));
    },
    updatePressReleaseCategoryStatus: (data: any) => {
      dispatch(pressReleaseCategoryStatusRequest(data));
    },
    deletePressReleaseCategory: (data: any) => {
      dispatch(pressReleaseCategoryDeleteRequest(data));
    },
    redirectTo: (data: any) => {
      dispatch(redirectTo(data));
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PressReleaseCategory);
