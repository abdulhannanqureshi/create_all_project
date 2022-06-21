import React, { Component } from "react";
import { IRootState, IUserReportProps, IUserReportState, IUserReportData } from "../../../interfaces";
import { Dispatch } from "redux";
import { connect } from "react-redux";
import * as qs from 'query-string';
// import TooltipComponent from "../../components/ToolTipComponent";
import { paginationLimit } from "../../common/constant";
import { Table, Button, Card, InputGroup, FormControl, Row, Col } from "react-bootstrap";
import PaginationComponent from "../../components/Pagination";
// import { Camera } from "react-feather";
import { getUserReportRequest, redirectTo} from "../../../actions";



class User extends Component<IUserReportProps, IUserReportState> {
  constructor(props: IUserReportProps) {
    super(props);
    this.state = {
      // For Pagination
      totalRecords: 0,
      currentPage: 1,
      pageNeighbours: 1,
      selectedUserReport:[],
      // search 
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
        this.props.getUserReport({
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
    const { userReportReducer } = this.props;
    // const { totalRecords } = this.props;
    let count = (currentPage - 1) * paginationLimit + 1;    
    
    return (
      <div>
        <Card className={"mb-0"}>
          <Card.Body className={""}>
          <Row className={"page-header-panel"}>
            <Col>
              <h3 className={'page-header'}>
               User Report
              </h3>
            </Col>
            <Col>
            <div className={"d-flex"}>
            <InputGroup className="">
              <FormControl
              className="modified_placeholders"
                placeholder="Search FirstName/LastName/Email"
                aria-label="Search user"
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
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email Address</th>
            </tr>
          </thead>
          <tbody>
            {this.props.userReportReducer &&
            this.props.userReportReducer.userReportData &&
            this.props.userReportReducer.userReportData.length ? (
              this.props.userReportReducer.userReportData.map(
                (item: IUserReportData, index: number) => {
                  return (
                    <tr key={item._id}>
                      <td>{count++}</td>
                      <td className={"text-capitalize"}>{item.firstName}</td>
                      <td className={"text-capitalize"}>{item.lastName}</td>
                      <td>{item.email}</td>
                      </tr>
                  );
                }
              )
            ) : (
              <tr>
                <td colSpan={4} className="text-center">
                  No user found
                </td>
              </tr>
            )}
          </tbody>
        </Table>
        {userReportReducer && userReportReducer.totalRecords > paginationLimit   ? (<PaginationComponent 
        totalRecords={userReportReducer ? userReportReducer.totalRecords:0}
        pageLimit={paginationLimit}
        currentPage={currentPage}
        onPageChanged={this.onPageChanged}
        />):null}
      </div>
    );
  }
}

const mapStateToProps: any = (state: IRootState) => ({
  userReportReducer: state.userReportReducer
});

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    
    getUserReport: (data:any) => {
      dispatch(getUserReportRequest(data));
    },
    redirectTo: (data:any) => {
      dispatch(redirectTo(data));
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(User);
