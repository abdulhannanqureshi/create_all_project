import React, { Component } from "react";
import {
  IRootState,
  ITransactionProps,
  ITransactionState,
  ITransactionData,

} from "../../../interfaces";
import { Dropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Modal } from "react-bootstrap";
// import ModalHeader from "react-bootstrap/ModalHeader";
import { Dispatch } from "redux";
import { connect } from "react-redux";
import * as qs from "query-string";
import { paginationLimit } from "../../common/constant";
import {
  Table,
  Button,
  Card,
  FormControl,
  Row,
  Col,
} from "react-bootstrap";
import PaginationComponent from "../../components/Pagination";
import { getTransactionRequest, getTransactionReportRequest, redirectTo } from "../../../actions";
import { DateFormat } from "../../../config";
import moment from "moment";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { transactionValidator } from "../../../validator";
import { toast } from "react-toastify";

class Transaction extends Component<ITransactionProps, ITransactionState> {
  constructor(props: ITransactionProps) {
    super(props);
    this.state = {
      // For Pagination
      totalRecords: 0,
      currentPage: 1,
      pageNeighbours: 1,
      selectedTransaction: [],
      // search
      search: "",
      promoCode: "",
      status: "",
      //For modal
      showModal: false,
      startDate: null,
      endDate: null,
      errors: {
        startDate: "",
        endDate: "",
      }
    };
  }

  componentDidMount = () => {
    this.handleQueryParams();
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
      errors: {
        ...this.state.errors,
        [name]: "",
      },
    });
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
    let promoCode: any;
    if (query) {
      skip = query.skip ? parseInt(query.skip as string) : 1;
      searchValue = query.searchValue || "";
      startDate = query.startDate || null;
      endDate = query.endDate || null;
      promoCode = query.promoCode || "";
    }
    this.setState(
      {
        currentPage: query.skip ? parseInt(query.skip as string) : 1,
        search: searchValue,
        startDate: startDate ? new Date(startDate) : null,
        endDate: endDate ? new Date(endDate) : null,
        promoCode: promoCode,
      },
      () =>
        this.props.getTransactions({
          searchValue: searchValue,
          fromDate: startDate ? startDate : "",
          toDate: endDate ? endDate : "",
          promoCode: promoCode,
          skip: skip,
          limit: paginationLimit,

        })
    );
  };
  promoFilter = (event: any) => {

    this.setState(
      {
        ...this.state,
        promoCode: event.target.name
      },
      () => this.handleSearchSubmit(event)
    )

  }

  // To apply search filter on list
  handleSearchSubmit = (event: any) => {
    event.preventDefault();
    const {
      location: { pathname },
    } = this.props;
    // To push data in query param
    let params: any = {};
    params.skip = 1;
    const { search, startDate, endDate, promoCode } = this.state;

    if (search) {
      params.searchValue = search;
    }
    if (startDate) {
      params.startDate = moment(startDate).format("L");
    }
    if (endDate) {
      params.endDate = moment(endDate).format("L");
    }
    if (promoCode) {
      params.promoCode = promoCode;
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
  handleclose = () => {
    this.setState({
      ...this.state,
      showModal: false,
    });
  };
  handleReset = () => {
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

  viewModuleDetails = (data: any) => {
    console.log(data, "data")
    this.setState(
      {
        selectedTransaction: [data],
      },
      () =>
        this.setState({
          ...this.state,
          showModal: true,
        })
    );
  };


  render() {
    const { search, selectedTransaction, startDate, endDate } = this.state;
    const {
      transactionReducer: {
        transactionData = [],
        totalRecords,
        currentPage,
      },
      location
    } = this.props;
    let count = (currentPage - 1) * paginationLimit + 1;
    let promoArray = transactionData.filter((data) => data.promoCode)
    console.log(promoArray)

    return (
      <div>
        <Card className={"mb-0"}>
          <Card.Body className={""}>
            <Row className={"page-header-panel"}>
              <Col md={2}>
                <Dropdown className="">
                  {promoArray.length ?
                    <>
                      <Dropdown.Toggle
                        variant=" "
                        id="dropdown-basic"
                        className="dropdown_toogle_button "
                      >Select promo code</Dropdown.Toggle>
                      <Dropdown.Menu className="dropdown_toggle_menu">
                        {
                          promoArray.map((promoData) => {
                            return (
                              <>
                                <Dropdown.Item
                                  href="#"
                                  onClick={this.promoFilter}
                                  value={promoData.promoCode}
                                  name={promoData.promoCode}

                                >
                                  {promoData.promoCode}
                                </Dropdown.Item>
                              </>
                            )
                          })
                        }

                      </Dropdown.Menu>
                    </>
                    :
                    <>
                      <Dropdown.Toggle
                        variant=" "
                        id="dropdown-basic"
                        disabled
                        className="dropdown_toogle_button "
                      >Select promo code</Dropdown.Toggle>
                    </>
                  }
                </Dropdown>
              </Col>
              <Col md={8}>
                <div className="d-flex justify-content-center">
                  <DatePicker
                    className={"form-control floating-input font-size-sm"}
                    selected={startDate}
                    placeholderText="Start date"
                    maxDate={new Date()}
                    onChange={(date) => {
                      this.setState({
                        startDate: date,
                      });
                    }}
                  />
                  <DatePicker
                    className={"form-control floating-input font-size-sm"}
                    selected={endDate}
                    placeholderText="End date"
                    maxDate={new Date()}
                    onChange={(date) => {
                      this.setState({
                        endDate: date,
                      });
                    }}
                  />
                  <FormControl
                    className="font-size-sm width-small"
                    placeholder="Search transaction id/ promo codes/ user details"
                    aria-label="Search transaction"
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
                </div>
              </Col>
              <Col md={2}>
                <Button

                  id="button-addon2"
                  onClick={this.props.getTransactionsReport}
                  className={"mr-2 download_button"}
                >
                  Download csv <span className="ml-2"><i className="fa fa-download" aria-hidden="true"></i></span>
                </Button>
              </Col>
            </Row>
          </Card.Body>
        </Card>
        <Table striped bordered hover responsive>
          <thead>
            <tr>
              <th>#</th>
              <th>Txn ID/ Txn Date</th>
              <th>Promo Codes</th>
              <th>Txn Details</th>
              <th>User Details</th>
            </tr>
          </thead>
          <tbody>
            {transactionData.length ? (
              transactionData.map(
                (item: ITransactionData, index: number) => {
                  return (
                    <tr key={item._id}>
                      <td>{count + index}</td>
                      <td>
                        {item.transactionId}
                        <br />
                        {moment(item.createdAt).format(DateFormat)}
                        <br />
                        <Link
                          to={`${location.pathname}${location.search}`}
                          onClick={() => this.viewModuleDetails(item)}
                        >
                          View transaction details
                        </Link>
                      </td>
                      <td>{item.promoCode ? item.promoCode : "NA"}</td>
                      <td>
                        Sub Total: ${item.subTotal}
                        <br />
                        Discount: ${item.siteDiscount ? item.siteDiscount : "0.00"}
                        <br/>
                        Coupan Discount:{" "}
                        {`${item.discountedAmount === "" ||
                          item.discountedAmount === "0"
                          ? ""
                          : `$${item.discountedAmount}`
                          }`}{" "}
                        <br />
                        Grand Total: ${item.grandTotal}
                      </td>
                      <td>
                        Name: {`${item.user.firstName} ${item.user.lastName}`}
                        <br />
                        Email: {item.user.email}
                      </td>
                    </tr>
                  );
                }
              )
            ) : (
              <tr>
                <td colSpan={10} className="text-center">
                  No transaction found
                </td>
              </tr>
            )}
          </tbody>
        </Table>
        <Modal show={this.state.showModal} onClick={this.handleclose}>
          <Modal.Header translate closeButton>
            <Modal.Title>Module List</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {console.log(selectedTransaction, "length")}
            <ul>
              {selectedTransaction.length && selectedTransaction[0].module[0].map(function (value: any, key: any) {
                return <li key={key}>{value.moduleName}</li>;
              })}
            </ul>
          </Modal.Body>
          {/* <Modal.Footer>
              <Button variant="secondary" onClick={this.handleclose}>
                Close
              </Button>
              <Button variant="primary" onClick={this.handleclose}>
                Save Changes
              </Button>
            </Modal.Footer> */}
        </Modal>
        {totalRecords > paginationLimit ? (
          <PaginationComponent
            totalRecords={
              totalRecords ? totalRecords : 0
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
  transactionReducer: state.transactionReducer,
});

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    getTransactions: (data: any) => {
      dispatch(getTransactionRequest(data));
    },
    getTransactionsReport: () => {
      dispatch(getTransactionReportRequest());
    },
    redirectTo: (data: any) => {
      dispatch(redirectTo(data));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Transaction);