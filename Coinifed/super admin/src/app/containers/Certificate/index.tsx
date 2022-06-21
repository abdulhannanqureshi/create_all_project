import React, { Component } from "react";
import {
  IRootState,
  ICertificateProps,
  ICertificateState,
  ICertificateData,
} from "../../../interfaces";
import { Dispatch } from "redux";
import { connect } from "react-redux";
import * as qs from "query-string";
import { paginationLimit } from "../../common/constant";
import {
  Table,
  Button,
  Card,
  InputGroup,
  FormControl,
  Row,
  Col,
  Form,
} from "react-bootstrap";
import PaginationComponent from "../../components/Pagination";
import {
  getCertificateRequest,
  certificateStatusRequest,
  redirectTo,
} from "../../../actions";
import moment from "moment";
import { DateTimeFormat } from "../../../config";
import Swal from "sweetalert2";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { transactionValidator } from "../../../validator";
import { toast } from "react-toastify";

class Certificate extends Component<ICertificateProps, ICertificateState> {
  constructor(props: ICertificateProps) {
    super(props);
    this.state = {
      // For Pagination
      totalRecords: 0,
      currentPage: 1,
      pageNeighbours: 1,
      selectedCertificate: [],
      // search
      search: "",
      status: "",
      startDate: null,
      endDate: null,
      editAccess: "",
      todaysDate:""
    };
  }

  componentDidMount = () => {
    this.handleQueryParams();

    // For Check Sub Admin Edit
    let getSubAdmin: any = localStorage.getItem("SubAdminCheck");
    let checkSubAdmin: any = JSON.parse(getSubAdmin);
    let getViewRoute: any;
    if (checkSubAdmin.length) {
      // "CertificateEdit" this string is for edit access
      // Note This String change for every page
      getViewRoute = checkSubAdmin.find((e: any) => e === "CertificateEdit");
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
    if (query) {
      skip = query.skip ? parseInt(query.skip as string) : 1;
      searchValue = query.searchValue || "";
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
        this.props.getCertificate({
          searchValue: searchValue,
          fromDate: startDate ? startDate : "",
          toDate: endDate ? endDate : "",
          skip: skip,
          limit: paginationLimit,
          status: query.status ? query.status : this.state.status,
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
    if(this.state.startDate || this.state.endDate)
    {
      const data = { startDate, endDate }

      const { isValid, errors } = transactionValidator({
        ...data,
        startDate: startDate ? "startDate" : "",
        endDate: endDate ? "endDate" : "",
      });
   
      if (isValid) {
        if (this.props.redirectTo) {
          this.props.redirectTo({
            path: [pathname, qs.stringify(params)].join("?"),
          });
        }
       
      }
      else {
       
        toast.error(errors.startDate || errors.endDate)
      }
    }
    else 
    {
      if (this.props.redirectTo) {
        this.props.redirectTo({
          path: [pathname, qs.stringify(params)].join("?"),
        });
      }
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
    this.setState(
      {
        ...this.state,
        startDate:null,
        endDate:null
      }
    )
  };

  handleStatus = async (id: string) => {
    const {
      location: { search },
    } = this.props;
    const query = qs.parse(search);
    let skip: number = 1;
    if (query) {
      skip = query.skip ? parseInt(query.skip as string) : 1;
    }
    const { value } = await Swal.fire({
      title: "Are you sure?",
      text: "You want to change the status!",
      showDenyButton: true,
      showCancelButton: true,
      // confirmButtonText: `Approve`,
      confirmButtonText: `Send Payment Link`,
      denyButtonText: `Deny`,
    });
    if (value === true)
      this.props.updateCertificateStatus({
        id,
        status: "PaymentLink",
        skip: skip,
        limit: paginationLimit,
      });
    if (value === false)
      this.props.updateCertificateStatus({
        id,
        status: "Deny",
        skip: skip,
        limit: paginationLimit,
      });
  };

  render() {
    const { search, startDate, endDate, editAccess } = this.state;
    const {
      certificateReducer: { certificateData = [], totalRecords, currentPage },
    } = this.props;
    let count = (currentPage - 1) * paginationLimit + 1;
    let Currentdate=new Date().toISOString()

    return (
      <div>
        <Card className={"mb-0"}>
          <Card.Body className={""}>
            <Row className={"page-header-panel"}>
              {/* <Col md='3'>
                <h3 className={"page-header"}>Certificate Requests</h3>
              </Col> */}
              <Col md='7'>
                <div className='d-flex justify-content-center'>
                  <DatePicker
                    className={"form-control floating-input font-size-sm "}
                    selected={startDate}
                    maxDate={new Date()}
                    placeholderText='Start date'
                    onChange={(date) => {
                      this.setState({
                        startDate: date,
                      });
                    }}
                  />
                  <DatePicker
                    className={"form-control floating-input font-size-sm "}
                    selected={endDate}
                    placeholderText='End date'
                    maxDate={new Date()}
                    onChange={(date) => {
                      this.setState({
                        endDate: date,
                      });
                    }}
                  />
                  <InputGroup className=''>
                    <FormControl
                      placeholder='Search name/ email address/ course name'
                      aria-label='Search certificate request'
                      className='modified_placeholders'
                      name={"search"}
                      value={search}
                      onChange={this.handleChange}
                    />
                  </InputGroup>
                  <Button
                    variant='primary'
                    id='button-addon2'
                    onClick={this.handleSearchSubmit}
                    className={"mr-2 "}
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
                </div>
              </Col>
              <Col md='5'>
                <div className={"filter-block-modified"}>
                  <label className={"pt-2 mr-2"}>Status:</label>
                  <Form.Control
                    as='select'
                    custom
                    onChange={this.handleStatusChange}
                    name={"status"}
                    value={this.state.status}
                    className="modified_filter_block"
                   
                  >
                    <option value=''>All</option>
                    <option value='Pending'>Pending</option>
                    <option value='Approve'>Approved</option>
                    <option value='Deny'>Denied</option>
                    <option value='Expired'>Expired</option>
                    <option value='Awaiting Payment'>Awaiting payment</option>
                  </Form.Control>
                </div>
              </Col>
            </Row>
          </Card.Body>
        </Card>
        <Table striped bordered hover responsive>
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Email Address</th>
              <th>Course Name</th>
              <th>Requested Date</th>
              <th>Payment Date</th>
              <th>Expiry Date</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {certificateData.length ? (
              certificateData.map((item: ICertificateData, index: number) => {
                return (
                  <tr key={item._id}>
                    <td>{count + index}</td>
                    <td
                      className={"text-capitalize"}
                    >{`${item.firstName} ${item.lastName}`}</td>
                    <td>{item.email}</td>
                    <td className={"text-capitalize"}>{item.courseName}</td>
                    <td>{moment(item.createdAt).format(DateTimeFormat)}</td>
                    <td>
                      {item.validTo
                        ? moment(item.validFrom).format(DateTimeFormat)
                        : "N.A"}
                    </td>
                    <td>
                      {item.validTo
                        ? moment(item.validTo).format(DateTimeFormat)
                        : "N.A"}
                    </td>
                    <td className='approve_button'>
                      {item.status === "Pending" ? (
                        <Button
                          type='button'
                          color='primary'
                          className={`btn btn-sm btn-primary ${
                            editAccess === "CertificateEdit" ||
                            editAccess === "SuperAdmin"
                              ? null
                              : "btn-disabled"
                          }`}
                          onClick={() =>
                            this.handleStatus(item && item._id ? item._id : "")
                          }
                          disabled={
                            editAccess === "CertificateEdit" ||
                            editAccess === "SuperAdmin"
                              ? false
                              : true
                          }
                        >
                          Pending
                        </Button>
                      ) : (
                        ""
                      )}
                      {item.status === "Approve" ? (
                        <Button
                          type='button'
                          className={`btn btn-sm btn-success ${
                            editAccess === "CertificateEdit" ||
                            editAccess === "SuperAdmin"
                              ? null
                              : "btn-disabled"
                          }`}
                          style={{ cursor: "initial" }}
                          disabled={
                            editAccess === "CertificateEdit" ||
                            editAccess === "SuperAdmin"
                              ? false
                              : true
                          }
                        >
                          Approved
                        </Button>
                      ) : (
                        ""
                      )}
                      {item.status === "Deny" ? (
                        <Button
                          type='button'
                          className={`btn btn-sm btn-danger ${
                            editAccess === "CertificateEdit" ||
                            editAccess === "SuperAdmin"
                              ? null
                              : "btn-disabled"
                          }`}
                          style={{ cursor: "initial" }}
                          disabled={
                            editAccess === "CertificateEdit" ||
                            editAccess === "SuperAdmin"
                              ? false
                              : true
                          }
                        >
                          Denied
                        </Button>
                      ) : (
                        ""
                      )}
                      {item.status === "Awaiting Payment" ? (
                        <Button
                          type='button'
                          className={`btn btn-sm btn-primary ${
                            editAccess === "CertificateEdit" ||
                            editAccess === "SuperAdmin"
                              ? null
                              : "btn-disabled"
                          }`}
                          style={{ cursor: "initial" }}
                          disabled={
                            editAccess === "CertificateEdit" ||
                            editAccess === "SuperAdmin"
                              ? false
                              : true
                          }
                        >
                          Awaiting Payment
                        </Button>
                      ) : (
                        ""
                      )}
                       {item.status === "Expired" ? (
                        <Button
                          type='button'
                          className={`btn btn-sm btn-danger ${
                            editAccess === "CertificateEdit" ||
                            editAccess === "SuperAdmin"
                              ? null
                              : "btn-disabled"
                          }`}
                          style={{ cursor: "initial" }}
                          disabled={
                            editAccess === "CertificateEdit" ||
                            editAccess === "SuperAdmin"
                              ? false
                              : true
                          }
                        >
                          Expired
                        </Button>
                      ) : (
                        ""
                      )}

                    </td>
                  </tr>
                );
              })
            ) : (
              <tr>
                <td colSpan={10} className='text-center'>
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
  certificateReducer: state.certificateReducer,
});

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    getCertificate: (data: any) => {
      dispatch(getCertificateRequest(data));
    },
    updateCertificateStatus: (data: any) => {
      dispatch(certificateStatusRequest(data));
    },
    redirectTo: (data: any) => {
      dispatch(redirectTo(data));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Certificate);
