import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Dropdown } from "react-bootstrap";
import {
  IRootState,
  IBlogProps,
  IBlogState,
  IBlogData,
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
  getBlogRequest,
  blogStatusRequest,
  blogDeleteRequest,
  bulkBlogActionRequest,
  redirectTo,
} from "../../../actions";
import { AppRoutes } from "../../../config";
import { Trash2, Edit } from "react-feather";
import dummyclient from "../../../assets/img/noimage.jpeg";
import { ImageURL } from "../../../config/AppConfig";
import { toast } from "react-toastify";

class Blog extends Component<IBlogProps, IBlogState> {
  constructor(props: IBlogProps) {
    super(props);
    this.state = {
      // For Pagination
      totalRecords: 0,
      currentPage: 1,
      pageNeighbours: 1,
      selectedBlog: [],
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
      // "BlogEdit" this string is for edit access
      // Note This String change for every page
      getViewRoute = checkSubAdmin.find((e: any) => e === "BlogEdit");
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
        this.props.getBlog({
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

    const { blogReducer } = this.props;
    const selectedBlog: any = [];
    if (
      blogReducer &&
      blogReducer.blogData &&
      blogReducer.blogData.length &&
      checked
    ) {
      const { blogData } = blogReducer;
      blogData.forEach((user: any) => {
        selectedBlog.push(user._id);
      });
    }
    this.setState({
      selectedBlog,
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
    let selectedBlog = [...this.state.selectedBlog];
    if (checked) {
      selectedBlog = [...selectedBlog, id];
    } else {
      let index = selectedBlog.indexOf(id);
      if (index > -1) {
        selectedBlog = selectedBlog.filter((user: string) => user !== id);
      }
    }
    this.setState({
      selectedBlog,
    },()=>
    {
      if (this.state.selectedBlog.length) {
        this.setState(
          {
            ...this.state,
            selectedBlog: selectedBlog,
            minusSign: true,
            checkboxStatus:false
          }
        )
      }
      else {
        this.setState(
          {
            ...this.state,
            selectedBlog: selectedBlog,
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
        ? "Do you want to activate this blog?"
        : "Do you want to deactivate this blog?",
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
      this.props.updateBlogStatus({
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
      text: "Do you want to delete this blog?",
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
      this.props.deleteBlog({ id, skip: page, limit: paginationLimit });
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
    const { selectedBlog } = this.state;
    let msg = "Do you want to delete this selected blog!";
    let confirmButtonText = "Yes, delete!";
    if (action === "Active") {
      msg = "Do you want to  change status active of this selected blog!";
      confirmButtonText = "Yes, activate!";
    }
    if (action === "Deactive") {
      msg = "Do you want to  change status deactive of this selected blog!";
      confirmButtonText = "Yes, deactivate!";
    }
    if (selectedBlog.length === 0) {
      toast.error("Please select blog");
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
        ids: selectedBlog,
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
    const { currentPage, selectedBlog, search, editAccess } = this.state;
    const { blogReducer } = this.props;
    // const { totalRecords } = this.props;
    let count = (currentPage - 1) * paginationLimit + 1;

    return (
      <div>
        <Card className={"mb-0"}>
          <Card.Body className={""}>
            <Row className={"page-header-panel"}>
              {/* <Col lg='6' xl='2'>
                <h3 className={"page-header"}>Blog</h3>
              </Col> */}
              <Col lg='6' xl='6' className='margin_sm_top'>
                <div className={"d-flex"}>
                  <InputGroup className=''>
                    <FormControl
                      placeholder='Search category/ title'
                      className='modified_placeholders'
                      aria-label='Search blog'
                      name={"search"}
                      value={search}
                      onChange={this.handleChange}
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
              <Col className='margin_sm_top'>
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
                  {editAccess === "BlogEdit" || editAccess === "SuperAdmin" ? (
                    <Link to={AppRoutes.ADD_BLOG} className={"btn btn-success"}>
                      <i className='fa fa-plus' /> Add blog
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
                  <div className='checkbox'>
                    {editAccess === "BlogEdit" ||
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
                            blogReducer &&
                            blogReducer.blogData &&
                            selectedBlog.length === blogReducer.blogData.length
                          }
                          onChange={this.handleAllCheck}
                        />
                        <span className='checkbox-material'>
                          <span className='check' />
                        </span>
                        {
                            this.state.minusSign ? <span className="minusSign">-</span> : null
                          }
                      </label>
                      <div className="mb-2"><Dropdown className='mt-3'>
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
                        </Dropdown></div>
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
              {editAccess === "BlogEdit" || editAccess === "SuperAdmin" ? (
                <th>Actions</th>
              ) : null}
            </tr>
          </thead>
          <tbody>
            {this.props.blogReducer &&
            this.props.blogReducer.blogData &&
            this.props.blogReducer.blogData.length ? (
              this.props.blogReducer.blogData.map(
                (item: IBlogData, index: number) => {
                  console.log("item", item);

                  return (
                    <tr key={item._id}>
                      <td>
                        <Form.Group className='col-sm-12 mb-0'>
                          <div className='checkbox'>
                            {editAccess === "BlogEdit" ||
                            editAccess === "SuperAdmin" ? (
                              <label className='d-flex justify-content-center align-items-center'>
                                <input
                                  type='checkbox'
                                  name={"user"}
                                  checked={
                                    selectedBlog.indexOf(item._id) > -1
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
                      <td>
                        <img
                          className='list-view-img'
                          src={
                            item.blogFeatureImage
                              ? item.blogFeatureImage.startsWith("https://")
                                ? item.blogFeatureImage
                                : `${ImageURL}/${item.blogFeatureImage}`
                              : dummyclient
                          }
                          onError={(e) => {
                            const target = e.target as any;
                            target.onerror = null;
                            target.src = dummyclient;
                          }}
                          alt={item.blogFeatureImage}
                          width={100}
                        />
                      </td>
                      <td className={"text-capitalize"}>{item.categoryName}</td>
                      <td className={"text-capitalize"}>{item.title}</td>
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
                        editAccess === "BlogEdit" || editAccess === "SuperAdmin"
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
                            editAccess === "BlogEdit" ||
                            editAccess === "SuperAdmin"
                              ? false
                              : true
                          }
                        >
                          {item.isActive ? "Active" : "Inactive"}
                        </Button>
                      </td>
                      {editAccess === "BlogEdit" ||
                      editAccess === "SuperAdmin" ? (
                        <td className='overflow-hidden'>
                          <div className='action-buttons d-flex  align-items-center'>
                            <button
                              title='edit'
                              type='button'
                              className='btn edit-icon '
                              onClick={() => {
                                if (item && item._id) {
                                  this.props.history.push(
                                    AppRoutes.EDIT_BLOG.replace(":id", item._id)
                                  );
                                }
                              }}
                            >
                              <Edit />
                            </button>
                            <button
                              title='delete'
                              type='button'
                              className='btn edit-icon '
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
                <td colSpan={10} className='text-center'>
                  No data found
                </td>
              </tr>
            )}
          </tbody>
        </Table>
        {blogReducer && blogReducer.totalRecords > paginationLimit ? (
          <PaginationComponent
            totalRecords={blogReducer ? blogReducer.totalRecords : 0}
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
  blogReducer: state.blogReducer,
});

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    getBlog: (data: any) => {
      dispatch(getBlogRequest(data));
    },
    updateBlogStatus: (data: any) => {
      dispatch(blogStatusRequest(data));
    },
    deleteBlog: (data: any) => {
      dispatch(blogDeleteRequest(data));
    },
    bulkAction: (data: any) => {
      dispatch(bulkBlogActionRequest(data));
    },
    redirectTo: (data: any) => {
      dispatch(redirectTo(data));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Blog);
