import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Dropdown } from "react-bootstrap";
import {
  IRootState,
  IPromoCodeProps,
  IPromoCodeState,
  IPromoCodeData,
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
  getPromoCodeRequest,
  promoCodeStatusRequest,
  promoCodeDeleteRequest,
  redirectTo,
  bulkPromoCodeActionRequest
} from "../../../actions";
import { AppRoutes, DateFormat } from "../../../config";
import { Trash2, Edit } from "react-feather";
import moment from "moment";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { toast } from "react-toastify";

class PromoCode extends Component<IPromoCodeProps, IPromoCodeState> {
  constructor(props: IPromoCodeProps) {
    super(props);
    this.state = {
      // For Pagination
      totalRecords: 0,
      currentPage: 1,
      pageNeighbours: 1,
      selectedPromoCode: [],
      // search
      search: "",
      status: "",
      startDate: null,
      endDate: null,
      editAccess: "",
      minusSign: false,
      checkboxStatus: true
    };
  }

  componentDidMount = () => {
    this.handleQueryParams();

    // For Check Sub Admin Edit
    let getSubAdmin: any = localStorage.getItem("SubAdminCheck");
    let checkSubAdmin: any = JSON.parse(getSubAdmin);
    let getViewRoute: any;
    if (checkSubAdmin.length) {
      // "PromoCodesEdit" this string is for edit access
      // Note This String change for every page
      getViewRoute = checkSubAdmin.find((e: any) => e === "PromoCodesEdit");
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
    let startDate: any;
    let endDate: any;
    let skip: number = 1;
    // let status: any = null;
    if (query) {
      skip = query.skip ? parseInt(query.skip as string) : 1;
      searchValue = query.searchValue || "";
      // status = query.status ? query.status : '';
      startDate = query.startDate || null;
      endDate = query.endDate || null;
    }
    this.setState(
      {
        currentPage: query.skip ? parseInt(query.skip as string) : 1,
        search: searchValue,
        startDate: startDate ? new Date(startDate) : null,
        endDate: endDate ? new Date(endDate) : null,
      },
      () =>
        this.props.getPromoCode({
          searchValue: searchValue || "",
          startDate: startDate,
          endDate: endDate,
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
    const { search, status, startDate, endDate } = this.state;

    if (search) {
      params.searchValue = search;
    }
    if (startDate) {
      params.startDate = moment(startDate).format("L");
    }
    if (endDate) {
      params.endDate = moment(endDate).format("L");
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

    const { promoCodeReducer } = this.props;
    const selectedPromoCode: any = [];
    if (
      promoCodeReducer &&
      promoCodeReducer.promoCodeData &&
      promoCodeReducer.promoCodeData.length &&
      checked
    ) {
      const { promoCodeData } = promoCodeReducer;
      promoCodeData.forEach((user: any) => {
        selectedPromoCode.push(user._id);
      });
    }
    this.setState({
      selectedPromoCode,
      minusSign: false,
      checkboxStatus: checked ? false : true
    });
  };

  handleSingleCheck = (
    event: React.ChangeEvent<HTMLInputElement>,
    id: string
  ) => {
    const { target } = event;
    const { checked } = target;
    let selectedPromoCode = [...this.state.selectedPromoCode];
    if (checked) {
      selectedPromoCode = [...selectedPromoCode, id];
    } else {
      let index = selectedPromoCode.indexOf(id);
      if (index > -1) {
        selectedPromoCode = selectedPromoCode.filter(
          (user: string) => user !== id
        );
      }
    }
    this.setState({
      selectedPromoCode,
    }, () => {
      if (this.state.selectedPromoCode.length) {
        this.setState(
          {
            ...this.state,
            selectedPromoCode: selectedPromoCode,
            minusSign: true,
            checkboxStatus: false
          }
        )
      }
      else {
        this.setState(
          {
            ...this.state,
            selectedPromoCode: selectedPromoCode,
            minusSign: false,
            checkboxStatus: true
          }
        )
      }
    });
  };

  handleStatus = async (id: string, isActive: boolean) => {
    const { value } = await ConfirmBox({
      title: "Are you sure?",
      text: isActive
        ? "Do you want to activate this promo code?"
        : "Do you want to deactivate this promo code?",
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
      this.props.updatePromoCodeStatus({
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
      text: "Do you want to delete this promo code?",
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
      this.props.deletePromoCode({ id, skip: page, limit: paginationLimit });
    }
  };

  handleReset = () => {
    this.setState({
      status: "",
      startDate: null,
      endDate: null,
    });
    const {
      location: { pathname },
    } = this.props;
    this.props.history.push(pathname);
  };
  bulkAction = async (action: any) => {
    const { selectedPromoCode } = this.state;
    let msg = "Do you want to delete this selected promo code!";
    let confirmButtonText = "Yes, delete!"
    if (action === "Active") {
      msg = "Do you want to  change status active of this selected promo code!";
      confirmButtonText = "Yes, activate!"
    }
    if (action === "Deactive") {
      msg = "Do you want to  change status deactive of this selected promo code!";
      confirmButtonText = "Yes, deactivate!"
    }
    if (selectedPromoCode.length === 0) {
      toast.error("Please select promo code");
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
        ids: selectedPromoCode,
        type: action,
        skip: page,
        limit: paginationLimit,
      });
    }
  };
  calculatorDate = (dateComing:any) => {
    var temp = dateComing.slice(0,10);
    let d = new Date(temp)
    var str = d.toDateString() + // Tue Aug 10 2010
      ' ' + d.toTimeString().split(' ')[0] + // 12:34:56, GMT+0x00 (GMT+0x:00)
      ' ' + (d.getMonth() + 101) + // 108
      ' ' + d.getMilliseconds(); // 789
    let stringCoverting = JSON.stringify(str) // Tue Aug 10 2010 12:34:56 108 789
    let trimming = stringCoverting.slice(1,16)
    return trimming
  }

  render() {
    const { selectedPromoCode, search, startDate, endDate, editAccess } = this.state;
    const {
      promoCodeReducer: {
        promoCodeData = [],
        isLoading,
        totalRecords,
        currentPage,
      },
    } = this.props;
    let count = (currentPage - 1) * paginationLimit + 1;

    return (
      <div>
        <Card className={"mb-0"}>
          <Card.Body className={""}>
            <Row className={"page-header-panel"}>
              {/* <Col md="2">
                <h3 className={"page-header"}>Promo Code</h3>
              </Col> */}
              <Col md="8">
                <div className="d-flex justify-content-center">
                  <DatePicker
                    className={"form-control floating-input fixed-height-inputs font-size-sm"}
                    selected={startDate}
                    placeholderText="Start date"
                    onChange={(date) => {
                      this.setState({
                        startDate: date,
                      });
                    }}
                  />
                  <DatePicker
                    className={"form-control floating-input fixed-height-inputs font-size-sm"}
                    selected={endDate}
                    placeholderText="End date"
                    onChange={(date) => {
                      this.setState({
                        endDate: date,
                      });
                    }}
                  />
                  <InputGroup className="">
                    <FormControl
                      className="fixed-height-inputs sm-font"
                      placeholder="Search promo title/ promocode/ discount(%)"
                      aria-label="Search promo code"
                      name={"search"}
                      value={search}
                      onChange={this.handleChange}

                    />
                  </InputGroup>
                  <Button
                    variant="primary"
                    id="button-addon2"
                    onClick={this.handleSearchSubmit}
                    className={"mr-2 "}
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
                  {editAccess === "PromoCodesEdit" ||
                    editAccess === "SuperAdmin" ? (
                    <Link
                      to={AppRoutes.ADD_PROMO_CODE}
                      className={"btn btn-success"}
                    >
                      <i className="fa fa-plus" /> Add promo code
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
                    {editAccess === "PromoCodesEdit" ||
                      editAccess === "SuperAdmin" ? (
                      <div className="d-flex justify-content-center align-items-center">
                        <label
                          htmlFor={"userall"}
                          className="d-flex justify-content-around align-items-center"
                        >
                          <input
                            type="checkbox"
                            name={"selectUser"}
                            id={"userall"}
                            checked={
                              promoCodeData &&
                              selectedPromoCode.length === promoCodeData.length
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
              <th>Course Title</th>
              <th>Promo Title</th>
              <th>Promo Code</th>
              <th>Start Date</th>
              <th>End Date</th>
              <th>Discount (%)</th>
              <th>Status</th>
              {editAccess === "PromoCodesEdit" ||
                editAccess === "SuperAdmin" ? (
                <th>Actions</th>
              ) : null}
            </tr>
          </thead>
          <tbody>
            {promoCodeData.length ? (
              this.props.promoCodeReducer.promoCodeData.map(
                (item: IPromoCodeData, index: number) => {
                  return (
                    <tr key={item._id}>
                      <td>
                        <Form.Group className='col-sm-12 mb-0'>
                          <div className='checkbox'>
                            {editAccess === "PromoCodesEdit" ||
                              editAccess === "SuperAdmin" ? (
                              <label className='d-flex align-items-center'>
                                <input
                                  type='checkbox'
                                  name={"user"}
                                  checked={
                                    selectedPromoCode.indexOf(item._id) > -1
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
                      <td className={"text-capitalize"}>{item.courseName ? item.courseName : "N.A"}</td>
                      <td >{item.promoTitle}</td>
                      <td >{item.promoCode}</td>
                      <td>{this.calculatorDate(item.startDate)}</td>
                      <td>{this.calculatorDate(item.endDate)}</td>
                      <td>{item.percentOff}%</td>
                      <td>
                        <Button
                          type='button'
                          color={item.isActive ? "primary" : "danger"}
                          className={`
                    ${item.isActive
                              ? "btn btn-sm btn-primary"
                              : "btn btn-sm btn-danger"
                            }
                      ${editAccess === "PromoCodesEdit" ||
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
                            editAccess === "PromoCodesEdit" ||
                              editAccess === "SuperAdmin"
                              ? false
                              : true
                          }
                        >
                          {item.isActive ? "Active" : "Inactive"}
                        </Button>
                      </td>
                      {editAccess === "PromoCodesEdit" ||
                        editAccess === "SuperAdmin" ? (
                        <td className='overflow-hidden'>
                          <div className='action-buttons d-flex  align-items-center'>
                            <button
                              data-toggle='tooltip'
                              data-placement='bottom'
                              title='Edit'
                              type='button'
                              className='btn edit-icon '
                              onClick={() => {
                                if (item && item._id) {
                                  this.props.history.push(
                                    AppRoutes.EDIT_PROMO_CODE.replace(
                                      ":id",
                                      item._id
                                    )
                                  );
                                }
                              }}
                            >
                              <Edit />
                            </button>
                            <button
                              type='button'
                              className='btn edit-icon '
                              data-toggle='tooltip'
                              data-placement='bottom'
                              title='Delete'
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
  promoCodeReducer: state.promoCodeReducer,
});

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    getPromoCode: (data: any) => {
      dispatch(getPromoCodeRequest(data));
    },
    updatePromoCodeStatus: (data: any) => {
      dispatch(promoCodeStatusRequest(data));
    },
    deletePromoCode: (data: any) => {
      dispatch(promoCodeDeleteRequest(data));
    },
    bulkAction: (data: any) => {
      dispatch(bulkPromoCodeActionRequest(data));
    },
    redirectTo: (data: any) => {
      dispatch(redirectTo(data));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PromoCode);
