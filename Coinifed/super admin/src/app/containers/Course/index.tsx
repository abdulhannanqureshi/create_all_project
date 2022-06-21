import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Dropdown } from "react-bootstrap";
import {
  IRootState,
  ICourseProps,
  ICourseState,
  ICourseData,
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
  getCourseRequest,
  courseStatusRequest,
  courseDeleteRequest,
  bulkCourseActionRequest,
  redirectTo,
} from "../../../actions";
import { AppRoutes } from "../../../config";
import { Trash2, Edit } from "react-feather";
import { toast } from "react-toastify";
class Course extends Component<ICourseProps, ICourseState> {
  constructor(props: ICourseProps) {
    super(props);
    this.state = {
      // For Pagination
      totalRecords: 0,
      currentPage: 1,
      pageNeighbours: 1,
      selectedCourse: [],
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
        this.props.getCourses({
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

    const { courseReducer } = this.props;
    const selectedCourse: any = [];
    if (
      courseReducer &&
      courseReducer.courseData &&
      courseReducer.courseData.length &&
      checked
    ) {
      const { courseData } = courseReducer;
      courseData.forEach((course: any) => {
        selectedCourse.push(course._id);
      });
    }
    this.setState({
      selectedCourse,
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
    let selectedCourse = [...this.state.selectedCourse];
    if (checked) {
      selectedCourse = [...selectedCourse, id];
    } else {
      let index = selectedCourse.indexOf(id);
      if (index > -1) {
        selectedCourse = selectedCourse.filter(
          (course: string) => course !== id
        );
      }
    }
    this.setState({
      selectedCourse,
    },()=>
    {
      if (this.state.selectedCourse.length) {
        this.setState(
          {
            ...this.state,
            selectedCourse: selectedCourse,
            minusSign: true,
            checkboxStatus:false
          }
        )
      }
      else {
        this.setState(
          {
            ...this.state,
            selectedCourse: selectedCourse,
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
        ? "Do you want to activate this course?"
        : "Do you want to deactivate this course?",
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
      this.props.updateCourseStatus({
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
      text: "Do you want to delete this course?",
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
      await this.props.deleteCourse({ id, skip: page, limit: paginationLimit });
      //alert(id)
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
    const { selectedCourse } = this.state;
    let msg = "Do you want to delete this selected course!";
    let confirmButtonText = "Yes, delete!";
    if (action === "Active") {
      msg = "Do you want to  change status active of this selected course!";
      confirmButtonText = "Yes, activate!";
    }
    if (action === "Deactive") {
      msg = "Do you want to  change status deactive of this selected course!";
      confirmButtonText = "Yes, deactivate!";
    }
    if (selectedCourse.length === 0) {
      toast.error("Please select course");
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
        ids: selectedCourse,
        type: action,
        skip: page,
        limit: paginationLimit,
      });
    }
  };

  render() {
    const { currentPage, selectedCourse, search, editAccess } = this.state;
    const { courseReducer } = this.props;
    let count = (currentPage - 1) * paginationLimit + 1;

    return (
      <div>
        <Card className={"mb-0"}>
          <Card.Body className={""}>
            <Row className={"page-header-panel"}>
              {/* <Col>
                <h3 className={"page-header"}>Courses</h3>
              </Col> */}
              <Col md={6}>
                <div className={"d-flex"}>
                  <InputGroup className=''>
                    <FormControl
                      placeholder='Search category name/ course name/ amount'
                      aria-label='Search course'
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
              <Col md={4}>
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
                  {/* <Link to={AppRoutes.ADD_COURSE} className={"btn btn-success"}>
                    <i className="fa fa-plus" /> Add Course
                  </Link> */}
                </div>
              </Col>
            </Row>
          </Card.Body>
        </Card>
        <Table striped bordered hover responsive>
          <thead>
            <tr>
              <th>
                <Form.Group className='col-sm-12  mb-0'>
                  <div className='checkbox'>
                    {editAccess === "CourseEdit" ||
                    editAccess === "SuperAdmin" ? (
                      <div className='d-flex justify-content-center align-items-center'>
                        <label
                          htmlFor={"courseAll"}
                          className='d-flex justify-content-center align-items-center'
                        >
                          <input
                            type='checkbox'
                            name={"selectCourse"}
                            id={"courseAll"}
                            checked={
                              courseReducer &&
                              courseReducer.courseData &&
                              selectedCourse.length ===
                                courseReducer.courseData.length
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
              <th>Category Name</th>
              <th>Course Name</th>
              <th>Course Code</th>
              <th>Amount</th>
              <th>Status</th>
              {/* <th>Actions</th> */}
            </tr>
          </thead>
          <tbody>
            {this.props.courseReducer &&
            this.props.courseReducer.courseData &&
            this.props.courseReducer.courseData.length ? (
              this.props.courseReducer.courseData.map(
                (item: ICourseData, index: number) => {
                  return (
                    <tr key={item._id}>
                      <td>
                        <Form.Group className='col-sm-12  mb-0'>
                          <div className='checkbox'>
                            {editAccess === "CourseEdit" ||
                            editAccess === "SuperAdmin" ? (
                              <label className='d-flex align-items-center justify-content-center'>
                                <input
                                  type='checkbox'
                                  name={"course"}
                                  checked={
                                    selectedCourse.indexOf(item._id) > -1
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
                                  id={`course${index}`}
                                />
                                <span className='checkbox-material'>
                                  <span className='check' />
                                </span>
                                {count++}
                              </label>
                            ) : (
                              `${count + index}.`
                            )}
                          </div>
                        </Form.Group>
                      </td>
                      <td className={"text-capitalize"}>{item.topicName}</td>
                      <td className={"text-capitalize"}>{item.title}</td>
                      <td className={"text-capitalize"}>{item.code}</td>
                      <td>{`${item.price ? `$${item.price}` : ""} `}</td>
                      <td>
                        <Button
                          type='button'
                          color={item.isActive ? "primary" : "danger"}
                          className={`
                        ${
                          item.isActive
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
                              item && item._id ? item._id : "",
                              !item.isActive
                            )
                          }
                          disabled={
                            editAccess === "CourseEdit" ||
                            editAccess === "SuperAdmin"
                              ? false
                              : true
                          }
                        >
                          {item.isActive ? "Active" : "Inactive"}
                        </Button>
                      </td>
                      {/* <td className="overflow-hidden">
                        <div className="action-buttons d-flex align-items-center ">
                          <button title="edit"
                            type="button"
                            className="btn edit-icon "
                            onClick={() => {
                              if (item && item._id) {
                                this.props.history.push(
                                  AppRoutes.EDIT_COURSE.replace(
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
                      </td> */}
                    </tr>
                  );
                }
              )
            ) : (
              <tr>
                <td colSpan={10} className='text-center'>
                  No course found
                </td>
              </tr>
            )}
          </tbody>
        </Table>
        {courseReducer && courseReducer.totalRecords > paginationLimit ? (
          <PaginationComponent
            totalRecords={courseReducer ? courseReducer.totalRecords : 0}
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
  courseReducer: state.courseReducer,
});

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    getCourses: (data: any) => {
      dispatch(getCourseRequest(data));
    },
    updateCourseStatus: (data: any) => {
      dispatch(courseStatusRequest(data));
    },
    deleteCourse: (data: any) => {
      dispatch(courseDeleteRequest(data));
    },
    bulkAction: (data: any) => {
      dispatch(bulkCourseActionRequest(data));
    },
    redirectTo: (data: any) => {
      dispatch(redirectTo(data));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Course);
