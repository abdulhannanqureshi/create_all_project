import React, { Component } from "react";
import { Link } from "react-router-dom";
import {
  IRootState,
  IBlogCategoryProps,
  IBlogCategoryState,
  IBlogCategoryData,
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
  getBlogCategoryRequest,
  blogCategoryStatusRequest,
  blogCategoryDeleteRequest,
  redirectTo,
} from "../../../actions";
import { AppRoutes } from "../../../config";
import { Trash2, Edit } from "react-feather";

class BlogCategory extends Component<IBlogCategoryProps, IBlogCategoryState> {
  constructor(props: IBlogCategoryProps) {
    super(props);
    this.state = {
      // For Pagination
      totalRecords: 0,
      currentPage: 1,
      pageNeighbours: 1,
      selectedBlogCategory: [],
      // search
      search: "",
      status: "",
      editAccess: "",
    };
  }

  componentDidMount = () => {
    //this.props.getBlogCategory();
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
      // errors: {
      //   ...this.state.errors,
      //   [name]: '',
      // },
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
        this.props.getBlogCategory({
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

    const { blogCategoryReducer } = this.props;
    const selectedBlogCategory: any = [];
    if (
      blogCategoryReducer &&
      blogCategoryReducer.blogCategoryData &&
      blogCategoryReducer.blogCategoryData.length &&
      checked
    ) {
      const { blogCategoryData } = blogCategoryReducer;
      blogCategoryData.forEach((user: any) => {
        selectedBlogCategory.push(user._id);
      });
    }
    this.setState({
      selectedBlogCategory,
    });
  };

  handleSingleCheck = (
    event: React.ChangeEvent<HTMLInputElement>,
    id: string
  ) => {
    const { target } = event;
    const { checked } = target;
    let selectedBlogCategory = [...this.state.selectedBlogCategory];
    if (checked) {
      selectedBlogCategory = [...selectedBlogCategory, id];
    } else {
      let index = selectedBlogCategory.indexOf(id);
      if (index > -1) {
        selectedBlogCategory = selectedBlogCategory.filter(
          (user: string) => user !== id
        );
      }
    }
    this.setState({
      selectedBlogCategory,
    });
  };

  handleStatus = async (id: string, isActive: boolean) => {
    const { value } = await ConfirmBox({
      title: "Are you sure?",
      text: isActive
        ? "Do you want to activate this blog category?"
        : "Do you want to deactivate this blog category?",
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
      this.props.updateBlogCategoryStatus({
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
      text: "Do you want to delete this blog category?",
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
      this.props.deleteBlogCategory({ id, skip: page, limit: paginationLimit });
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

  // onChangeStatus =(e)=>{
  //   this.setState({
  //     status : e.target.value
  //   })
  // }

  render() {
    const { currentPage, search, editAccess } = this.state;
    const { blogCategoryReducer } = this.props;
    // const { totalRecords } = this.props;
    let count = (currentPage - 1) * paginationLimit + 1;

    return (
      <div>
        <Card className={"mb-0"}>
          <Card.Body className={""}>
            <Row className={"page-header-panel"}>
              {/* <Col md="6" lg="6" xl="2">
                <h3 className={"page-header"}>Blog Category</h3>
              </Col> */}
              <Col md="6" lg='6' xl="6" className="margin_sm_top">
                <div className={"d-flex"}>
                  <InputGroup className="">
                    <FormControl
                    className="modified_placeholders"
                      placeholder="Search blog category"
                      aria-label="Search blog category"
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
              <Col className="margin_sm_top">
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
                  {editAccess === "BlogEdit" ||
                  editAccess === "SuperAdmin" ? (
                  <Link
                    to={AppRoutes.ADD_BLOG_CATEGORY}
                    className={"btn btn-success"}
                  >
                    <i className="fa fa-plus" /> Add blog category
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
              {editAccess === "BlogEdit" ||
                  editAccess === "SuperAdmin" ? (
              <th>Actions</th>
              ) : null}
            </tr>
          </thead>
          <tbody>
            {this.props.blogCategoryReducer &&
            this.props.blogCategoryReducer.blogCategoryData &&
            this.props.blogCategoryReducer.blogCategoryData.length
              ? this.props.blogCategoryReducer.blogCategoryData.map(
                  (item: IBlogCategoryData, index: number) => {
                    return (
                      <tr key={item._id}>
                        <td>
                          <Form.Group className='col-sm-12 mb-0'>
                            <div className='checkbox'>{count++}</div>
                          </Form.Group>
                        </td>
                        <td className={"text-capitalize"}>
                          {item.categoryName}
                        </td>
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
                                editAccess === "BlogEdit" ||
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
                        <td className="overflow-hidden">
                          <div className="action-buttons d-flex  align-items-center">
                            <button title="edit"
                              type="button"
                              className="btn edit-icon "
                              onClick={() => {
                                if (item && item._id) {
                                  this.props.history.push(
                                    AppRoutes.EDIT_BLOG_CATEGORY.replace(
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
              : ""}
            {this.props.blogCategoryReducer &&
            !this.props.blogCategoryReducer.isLoading &&
            this.props.blogCategoryReducer.blogCategoryData &&
            !this.props.blogCategoryReducer.blogCategoryData.length ? (
              <tr>
                <td colSpan={10} className="text-center">
                  No data found
                </td>
              </tr>
            ) : (
              ""
            )}
          </tbody>
        </Table>
        {blogCategoryReducer &&
        blogCategoryReducer.totalRecords > paginationLimit ? (
          <PaginationComponent
            totalRecords={
              blogCategoryReducer ? blogCategoryReducer.totalRecords : 0
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
  blogCategoryReducer: state.blogCategoryReducer,
});

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    getBlogCategory: (data: any) => {
      dispatch(getBlogCategoryRequest(data));
    },
    updateBlogCategoryStatus: (data: any) => {
      dispatch(blogCategoryStatusRequest(data));
    },
    deleteBlogCategory: (data: any) => {
      dispatch(blogCategoryDeleteRequest(data));
    },
    redirectTo: (data: any) => {
      dispatch(redirectTo(data));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(BlogCategory);
