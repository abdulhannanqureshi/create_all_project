import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Dropdown } from "react-bootstrap";
import {
  IRootState,
  ICategoryProps,
  ICategoryState,
  ICategoryData,
} from "../../../interfaces";
import { Dispatch } from "redux";
import { connect } from "react-redux";
import * as qs from "query-string";
import { ConfirmBox } from "../../../helper";
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
import {
  getCategoryRequest,
  categoryStatusRequest,
  categoryDeleteRequest,
  bulkCategoryActionRequest,
  redirectTo,
} from "../../../actions";
import { AppRoutes } from "../../../config";
import { Trash2, Edit } from "react-feather";
import { toast } from "react-toastify";

class Category extends Component<ICategoryProps, ICategoryState> {
  constructor(props: ICategoryProps) {
    super(props);
    this.state = {
      // For Pagination
      totalRecords: 0,
      currentPage: 1,
      pageNeighbours: 1,
      selectedCategory: [],
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
    console.log(this.props,"props of category")
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
        this.props.getCategory({
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

    const { categoryReducer } = this.props;
    const selectedCategory: any = [];
    if (
      categoryReducer &&
      categoryReducer.categoryData &&
      categoryReducer.categoryData.length &&
      checked
    ) {
      const { categoryData } = categoryReducer;
      categoryData.forEach((category: any) => {
        selectedCategory.push(category._id);
      });
    }
    this.setState({
      selectedCategory,
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
    let selectedCategory = [...this.state.selectedCategory];
    if (checked) {
      selectedCategory = [...selectedCategory, id];
    } else {
      let index = selectedCategory.indexOf(id);
      if (index > -1) {
        selectedCategory = selectedCategory.filter((user: string) => user !== id);
      }
    }
    this.setState({
      selectedCategory,
    },()=>
    {
      if(this.state.selectedCategory.length)
      {
        this.setState(
          {
            ...this.state,
            selectedCategory:selectedCategory,
            minusSign: true,
            checkboxStatus:false
          }
        )
      }
      else
      {
        this.setState(
          {
            ...this.state,
            selectedCategory:selectedCategory,
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
        ? "Do you want to activate this category?"
        : "Do you want to deactivate this category?",
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
      this.props.updateCategoryStatus({
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
      text: "Do you want to delete this category?",
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
      await this.props.deleteCategory({ id, skip: page, limit: paginationLimit });
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
    const { selectedCategory } = this.state;
    let msg = "Do you want to delete this selected category!";
    let confirmButtonText = "yes, delete!"
    if (action === "Active") {
      msg = "Do you want to  change status active of this selected category!";
      confirmButtonText = "yes, active!"
    }
    if (action === "Deactive") {
      msg = "Do you want to  change status deactive of this selected category!";
      confirmButtonText = "yes, deactivate!"
    }
    if (selectedCategory.length === 0) {
      toast.error("Please select category");
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
      const {
        location: { search },
      } = this.props;
      const query = qs.parse(search);
      let page: number = 1;
      if (query) {
        page = query.page ? parseInt(query.page as string) : 1;
      }
      this.props.bulkAction({
        ids: selectedCategory,
        type: action,
        skip: page,
        limit: paginationLimit,
      });
    }
  };

  render() {
    const { selectedCategory, search, editAccess } = this.state;
    const {
      categoryReducer: { categoryData = [], isLoading, totalRecords, currentPage },
    } = this.props;
    let count = (currentPage - 1) * paginationLimit + 1;

    return (
      <div>
        <Card className={"mb-0"}>
          <Card.Body className={""}>
            <Row className={"page-header-panel"}>
              {/* <Col md={3}>
                <h3 className={"page-header"}>Category</h3>
              </Col> */}
              <Col md={6}>
                <div className={"d-flex"}>
                  <InputGroup className="">
                    <FormControl
                      placeholder="Search category name/ title/ subtitle"
                      aria-label="Search category"
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
              <Col md="4">
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
                  {/* <Link to={AppRoutes.ADD_CATEGORY} className={"btn btn-success"}>
                    <i className="fa fa-plus" /> Add Category
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
                <Form.Group className="col-sm-12 mb-0">
                  <div className="checkbox">
                    {editAccess === "CourseEdit" ||
                      editAccess === "SuperAdmin" ? (
                      <div className="d-flex justify-content-center align-items-center">
                        <label htmlFor={"categoryAll"} className="d-flex justify-content-center align-items-center">
                          <input
                            type="checkbox"
                            name={"selectUser"}
                            id={"categoryAll"}
                            checked={
                              selectedCategory.length ===
                              categoryData.length
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
                              className="dropdown_toogle background_remove"
                            ></Dropdown.Toggle>
                            <Dropdown.Menu className="dropdown_toggle_menu">
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

                    ) : "#"}
                  </div>
                </Form.Group>
              </th>
              <th>Category Name</th>
              <th>Title</th>
              <th>Sub Title</th>
              <th>Status</th>
              {editAccess === "CourseEdit" ||
                editAccess === "SuperAdmin" ? (
                <th>Actions</th>
              ) : null}
            </tr>
          </thead>
          <tbody>
            {categoryData.length ? (
              categoryData.map(
                (item: ICategoryData, index: number) => {
                  return (
                    <tr key={item._id}>
                      <td>
                        <Form.Group className="col-sm-12 mb-0">
                          <div className="checkbox">
                            {editAccess === "CourseEdit" ||
                              editAccess === "SuperAdmin" ? (
                              <label className="d-flex justify-content-center align-items-center">
                                <input
                                  type="checkbox"
                                  name={"module"}
                                  checked={
                                    selectedCategory.indexOf(item._id) > -1
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
                                  id={`item${index}`}
                                />
                                <span className="checkbox-material">
                                  <span className="check" />
                                </span>
                                {count + index}
                              </label>
                            ) : (
                              `${count + index}.`
                            )}
                          </div>
                        </Form.Group>
                      </td>
                      <td className={"text-capitalize"}>{item.topicName}</td>
                      <td className={"text-capitalize"}>{item.title}</td>
                      <td className={"text-capitalize"}>{item.subTitle}</td>
                      <td>
                        <Button
                          type="button"
                          color={item.isActive ? "primary" : "danger"}
                          className=
                          {`
                    ${item.isActive
                              ? "btn btn-sm btn-primary"
                              : "btn btn-sm btn-danger"
                            }
                      ${editAccess === "CourseEdit" ||
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
                      {editAccess === "CourseEdit" ||
                        editAccess === "SuperAdmin" ? (
                        <td className="overflow-hidden">
                          <div className="action-buttons d-flex  align-items-center">
                            <button title="edit"
                              type="button"
                              className="btn edit-icon "
                              onClick={() => {
                                if (item && item._id) {
                                  this.props.history.push(
                                    AppRoutes.EDIT_CATEGORY.replace(
                                      ":id",
                                      item._id
                                    )
                                  );
                                }
                              }}
                            >
                              <Edit />
                            </button>
                          </div>
                        </td>
                        /* <button title="delete"
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
                         </button>  */
                      ) : null}
                    </tr>
                  );
                }
              )
            ) : ''}
            {!isLoading && !categoryData.length ? <tr>
              <td colSpan={10} className="text-center">
                No data found
              </td>
            </tr> : ''}
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
  categoryReducer: state.categoryReducer,
});

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    getCategory: (data: any) => {
      dispatch(getCategoryRequest(data));
    },
    updateCategoryStatus: (data: any) => {
      dispatch(categoryStatusRequest(data));
    },
    deleteCategory: (data: any) => {
      dispatch(categoryDeleteRequest(data));
    },
    bulkAction: (data: any) => {
      dispatch(bulkCategoryActionRequest(data));
    },
    redirectTo: (data: any) => {
      dispatch(redirectTo(data));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Category);
