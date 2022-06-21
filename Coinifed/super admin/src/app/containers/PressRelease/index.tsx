import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Dropdown } from "react-bootstrap";
import {
  IRootState,
  IPressReleaseProps,
  IPressReleaseState,
  IPressReleaseData,
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
  getPressReleaseRequest,
  pressReleaseStatusRequest,
  pressReleaseDeleteRequest,
  bulkPressReleaseActionRequest,
  redirectTo,
} from "../../../actions";
import { AppRoutes } from "../../../config";
import { Trash2, Edit } from "react-feather";
import dummyclient from "../../../assets/img/noimage.jpeg";
import { ImageURL } from "../../../config/AppConfig";
import { toast } from "react-toastify";

class PressRelease extends Component<IPressReleaseProps, IPressReleaseState> {
  constructor(props: IPressReleaseProps) {
    super(props);
    this.state = {
      // For Pagination
      totalRecords: 0,
      currentPage: 1,
      pageNeighbours: 1,
      selectedPressRelease: [],
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
      // status = query.status ? query.status : '';
    }
    this.setState(
      {
        currentPage: query.skip ? parseInt(query.skip as string) : 1,
        search: searchValue,
      },
      () =>
        this.props.getPressRelease({
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

    const { pressReleaseReducer } = this.props;
    const selectedPressRelease: any = [];
    if (
      pressReleaseReducer &&
      pressReleaseReducer.pressReleaseData &&
      pressReleaseReducer.pressReleaseData.length &&
      checked
    ) {
      const { pressReleaseData } = pressReleaseReducer;
      pressReleaseData.forEach((user: any) => {
        selectedPressRelease.push(user._id);
      });
    }
    this.setState({
      selectedPressRelease,
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
    let selectedPressRelease = [...this.state.selectedPressRelease];
    if (checked) {
      selectedPressRelease = [...selectedPressRelease, id];
    } else {
      let index = selectedPressRelease.indexOf(id);
      if (index > -1) {
        selectedPressRelease = selectedPressRelease.filter(
          (user: string) => user !== id
        );
      }
    }
    this.setState({
      selectedPressRelease,
    },()=>
    {
      if (this.state.selectedPressRelease.length) {
        this.setState(
          {
            ...this.state,
            selectedPressRelease: selectedPressRelease,
            minusSign: true,
            checkboxStatus:false
          }
        )
      }
      else {
        this.setState(
          {
            ...this.state,
            selectedPressRelease: selectedPressRelease,
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
        ? "Do you want to activate this press release?"
        : "Do you want to deactivate this press release?",
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
      this.props.updatePressReleaseStatus({
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
      text: "Do you want to delete this press release?",
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
      this.props.deletePressRelease({ id, skip: page, limit: paginationLimit });
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
    const { selectedPressRelease } = this.state;
    let msg = "Do you want to delete this selected press release!";
    let confirmButtonText="Yes, delete!"
    if (action === "Active")
    {
      msg = "Do you want to  change status active of this selected press release!";
       confirmButtonText="Yes, activate!"
    }
    if (action === "Deactive"){
      msg = "Do you want to  change status deactive of this selected press release!";
       confirmButtonText="Yes, deactivate!"
    }
    if (selectedPressRelease.length === 0) {
      toast.error("Please select press release");
      return false;
    }
    const { value } = await ConfirmBox({
      title: "Are you sure?",
      text: msg,
      confirmButtonText:confirmButtonText
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
        ids: selectedPressRelease,
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
    const { currentPage, selectedPressRelease, search,editAccess } = this.state;
    const { pressReleaseReducer } = this.props;
    // const { totalRecords } = this.props;
    let count = (currentPage - 1) * paginationLimit + 1;

    return (
      <div>
        <Card className={"mb-0"}>
          <Card.Body className={""}>
            <Row className={"page-header-panel"}>
              {/* <Col>
                <h3 className={"page-header"}>Press Release</h3>
              </Col> */}
              <Col>
                <div className={"d-flex"}>
                  <InputGroup className="">
                    <FormControl
                    className="modified_placeholders"
                      placeholder="Search category/ title"
                      aria-label="Search press release"
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
              <Col>
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
                    to={AppRoutes.ADD_PRESS_RELEASE}
                    className={"btn btn-success"}
                  >
                    <i className="fa fa-plus" /> Add press release
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
                <Form.Group className="col-sm-12 mb-0">
                  <div className="checkbox">
                  {editAccess === "PressReleaseEdit" ||
                  editAccess === "SuperAdmin" ? (
                    <div className="d-flex justify-content-center align-items-center">
                    <label htmlFor={"userall"} className="d-flex justify-content-center align-items-center">
                      <input
                        type="checkbox"
                        name={"selectUser"}
                        id={"userall"}
                        checked={
                          pressReleaseReducer &&
                          pressReleaseReducer.pressReleaseData &&
                          selectedPressRelease.length ===
                            pressReleaseReducer.pressReleaseData.length
                        }
                        onChange={this.handleAllCheck}
                      />
                      <span className="checkbox-material">
                        <span className="check" />
                      </span>
                      {
                            this.state.minusSign ? <span className="minusSign">-</span> : null
                          }
                      
                    </label>
                    <div className="mb-2">
                    <Dropdown className="mt-3">
                        <Dropdown.Toggle
                        variant="success"
                        id="dropdown-basic"
                        className="dropdown_toogle background_remove">
                        </Dropdown.Toggle>
                        <Dropdown.Menu className="dropdown_toggle_menu">
                          {/* <Dropdown.Item href="#">All</Dropdown.Item> */}
                          <Dropdown.Item
                            href="#"
                            onClick={() => this.bulkAction("Active")}
                            disabled={this.state.checkboxStatus}
                          >
                            Activate
                          </Dropdown.Item>
                          <Dropdown.Item
                            href="#"
                            onClick={() => this.bulkAction("Deactive")}
                            disabled={this.state.checkboxStatus}
                          >
                            Deactivate
                          </Dropdown.Item>
                          <Dropdown.Item
                            href="#"
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
              <th>Feature Image</th>
              <th>Category</th>
              <th>Title</th>
              <th>Status</th>
              {editAccess === "PressReleaseEdit" ||
                  editAccess === "SuperAdmin" ? (
              <th>Actions</th>
              ) : null}
            </tr>
          </thead>
          <tbody>
            {this.props.pressReleaseReducer &&
            this.props.pressReleaseReducer.pressReleaseData &&
            this.props.pressReleaseReducer.pressReleaseData.length ? (
              this.props.pressReleaseReducer.pressReleaseData.map(
                (item: IPressReleaseData, index: number) => {
                  return (
                    <tr key={item._id}>
                      <td>
                        <Form.Group className="col-sm-12 mb-0">
                          <div className="checkbox">
                          {editAccess === "PressReleaseEdit" ||
                          editAccess === "SuperAdmin" ? (
                            <label className="d-flex justify-content-center align-items-center">
                              <input
                                type="checkbox"
                                name={"user"}
                                checked={
                                  selectedPressRelease.indexOf(item._id) > -1
                                    ? true
                                    : false
                                }
                                onChange={(
                                  e: React.ChangeEvent<HTMLInputElement>
                                ) =>
                                  this.handleSingleCheck(
                                    e,
                                    item._id ? item._id : ""
                                  )
                                }
                                id={`user${index}`}
                              />
                              <span className="checkbox-material">
                                <span className="check" />
                              </span>
                              {count++}
                            </label>
                             ) : (
                              `${count + index}.`
                            )}
                          </div>
                        </Form.Group>
                      </td>
                      <td>
                        <img
                          className="list-view-img"
                          src={
                            item.pressFeatureImage
                              ? item.pressFeatureImage.startsWith("https://")
                                ? item.pressFeatureImage
                                : `${ImageURL}/${item.pressFeatureImage}`
                              : dummyclient
                          }
                          onError={(e) => {
                            const target = e.target as any;
                            target.onerror = null;
                            target.src = dummyclient;
                          }}
                          alt={item.pressFeatureImage}
                          width={100}
                        />
                      </td>
                      <td className={"text-capitalize"}>{item.categoryName}</td>
                      <td className={"text-capitalize"}>{item.title}</td>
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
                                  AppRoutes.EDIT_PRESS_RELEASE.replace(
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
                  No User found
                </td>
              </tr>
            )}
          </tbody>
        </Table>
        {pressReleaseReducer &&
        pressReleaseReducer.totalRecords > paginationLimit ? (
          <PaginationComponent
            totalRecords={
              pressReleaseReducer ? pressReleaseReducer.totalRecords : 0
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
  pressReleaseReducer: state.pressReleaseReducer,
});

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    getPressRelease: (data: any) => {
      dispatch(getPressReleaseRequest(data));
    },
    updatePressReleaseStatus: (data: any) => {
      dispatch(pressReleaseStatusRequest(data));
    },
    deletePressRelease: (data: any) => {
      dispatch(pressReleaseDeleteRequest(data));
    },
    bulkAction: (data: any) => {
      dispatch(bulkPressReleaseActionRequest(data));
    },
    redirectTo: (data: any) => {
      dispatch(redirectTo(data));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PressRelease);
