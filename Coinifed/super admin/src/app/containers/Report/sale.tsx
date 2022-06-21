import React, { Component } from "react";
import { IRootState, ISaleReportProps, ISaleReportState, ISaleReportData } from "../../../interfaces";
import { Dispatch } from "redux";
import { connect } from "react-redux";
import * as qs from 'query-string';
import { paginationLimit } from "../../common/constant";
import { Table, Button, Card, InputGroup, FormControl, Row, Col } from "react-bootstrap";
import PaginationComponent from "../../components/Pagination";
import { getSaleReportRequest, redirectTo} from "../../../actions";
import { DateFormat } from '../../../config';
import moment from 'moment';



class Sale extends Component<ISaleReportProps, ISaleReportState> {
  constructor(props: ISaleReportProps) {
    super(props);
    this.state = {
      // For Pagination
      totalRecords: 0,
      currentPage: 1,
      pageNeighbours: 1,
      selectedSaleReport:[],
      search:'',
      status: ''
    };
  }

  componentDidMount = () => {
    this.handleQueryParams();
  };

  componentDidUpdate = (prevProps:any) => {
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

  handleQueryParams = () => {
    const {
      location: { search },
    } = this.props;
    const query = qs.parse(search);
    let searchValue : any;
    let skip: number = 1;
    if (query) {
      skip = query.skip ? parseInt(query.skip as string) : 1;
      searchValue = query.searchValue || '';
    }
    
    this.setState(
      {
        currentPage: query.skip ? parseInt(query.skip as string) : 1,
        search: searchValue,
      },
      () =>
        this.props.getSaleReport({
          searchValue: searchValue,
          skip : skip,
          limit : paginationLimit,
        })
    );
  };


   // To apply search filter on list
   handleSearchSubmit = (event:any) => {
    event.preventDefault();
    const {
      location: { pathname },
    } = this.props;
    // To push data in query param
    let params:any = {};
    params.skip = 1;
    const {
      search,
    } = this.state;
    
    if (search) {
      params.searchValue = search;
    }
    if (this.props.redirectTo) {
      this.props.redirectTo({
        path: [pathname, qs.stringify(params)].join('?'),
      });
    }
  };

  onPageChanged = (page: number) => {
    const { location } = this.props;
    const { search, pathname } = location;
    const query = qs.parse(search);
    if (this.props.redirectTo) {
      this.props.redirectTo({
        path: [pathname, qs.stringify({ ...query, skip:page })].join('?'),
      });
    }
  };


  handleReset = () => {
    const {
      location: { pathname },
    } = this.props;
    this.props.history.push(pathname);
  };

  render() {
    const { currentPage, search } = this.state;
    const { saleReportReducer } = this.props;
    // const { totalRecords } = this.props;
    let count = (currentPage - 1) * paginationLimit + 1;    
    
    return (
      <div>
        <Card className={"mb-0"}>
          <Card.Body className={""}>
          <Row className={"page-header-panel"}>
            <Col>
              <h3 className={'page-header'}>
               Sale Report
              </h3>
            </Col>
            <Col>
            <div className={"d-flex"}>
            <InputGroup className="">
              <FormControl
              className="modified_placeholders"
                placeholder="Search UserName"
                aria-label="Search transaction"
                name={'search'}
                value={search}
                onChange={this.handleChange}
              />
              <Button variant="primary" id="button-addon2"
              onClick={this.handleSearchSubmit}
              className={"mr-2"}
              >
                Search
              </Button>
              <Button variant="outline-secondary" id="button-addon2"
              onClick={this.handleReset}
              >
                Reset
              </Button>
            </InputGroup>
            </div>            
            </Col>
          </Row>
          </Card.Body>
        </Card>
        <Table striped bordered hover responsive>
          <thead>
            <tr>
              <th>#</th>
              <th>Txn ID</th>
              <th>User Name</th>
              <th>Txn Date</th>
              <th>Promo Code</th>
              <th>Amout</th>
            </tr>
          </thead>
          <tbody>
            {this.props.saleReportReducer &&
            this.props.saleReportReducer.saleReportData &&
            this.props.saleReportReducer.saleReportData.length ? (
              this.props.saleReportReducer.saleReportData.map(
                (item: ISaleReportData, index: number) => {
                  return (
                    <tr key={item._id}>
                      <td>{count++}</td>
                      <td>{item.transactionId}</td>
                      <td className={"text-capitalize"}>{item.fullName}</td>
                      <td>{moment(item.createdAt).format(DateFormat)}</td>
                      <td>{item.promoCode ? item.promoCode : 'NA'}</td>
                      <td>${item.grandTotal}</td>
                      </tr>
                  );
                }
              )
            ) : (
              <tr>
                <td colSpan={6} className="text-center">
                  No record found
                </td>
              </tr>
            )}
          </tbody>
        </Table>
        {saleReportReducer && saleReportReducer.totalRecords > paginationLimit   ? (<PaginationComponent 
        totalRecords={saleReportReducer ? saleReportReducer.totalRecords:0}
        pageLimit={paginationLimit}
        currentPage={currentPage}
        onPageChanged={this.onPageChanged}
        />):null}
      </div>
    );
  }
}

const mapStateToProps: any = (state: IRootState) => ({
  saleReportReducer: state.saleReportReducer
});

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    
    getSaleReport: (data:any) => {
      dispatch(getSaleReportRequest(data));
    },
    redirectTo: (data:any) => {
      dispatch(redirectTo(data));
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Sale);
