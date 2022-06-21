import React, { Component } from "react";
import {
  IRootState,
  IEnterpriseProps,
  IEnterpriseState,
  IEnterpriseData,
} from "../../../interfaces";
import { Dispatch } from "redux";
import { connect } from "react-redux";
import * as qs from "query-string";
// import TooltipComponent from "../../components/ToolTipComponent";
import { paginationLimit } from "../../common/constant";
import {
  Table,
  Button,
  Card,
  InputGroup,
  FormControl,
  Row,
  Col,
} from "react-bootstrap";
import PaginationComponent from "../../components/Pagination";
// import { Camera } from "react-feather";
import { getEnterpriseRequest, redirectTo } from "../../../actions";

class Enterprise extends Component<IEnterpriseProps, IEnterpriseState> {
  constructor(props: IEnterpriseProps) {
    super(props);
    this.state = {
      // For Pagination
      totalRecords: 0,
      currentPage: 1,
      pageNeighbours: 1,
      selectedEnterprise: [],
      // search
      search: "",
      status: "",
    };
  }

  componentDidMount = () => {
    // this.props.getEnterprises("");
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
    });
  };

  handleQueryParams = () => {
    const {
      location: { search },
    } = this.props;
    const query = qs.parse(search);
    let searchValue: any;
    let skip: number = 1;
    if (query) {
      skip = query.skip ? parseInt(query.skip as string) : 1;
      searchValue = query.searchValue || "";
    }
    this.setState(
      {
        currentPage: query.skip ? parseInt(query.skip as string) : 1,
        search: searchValue,
      },
      () =>
        this.props.getEnterprises({
          searchValue: searchValue,
          skip: skip,
          limit: paginationLimit,
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
    const { search } = this.state;

    if (search) {
      params.searchValue = search;
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

  handleReset = () => {
    const {
      location: { pathname },
    } = this.props;
    this.props.history.push(pathname);
  };

  render() {
    const { search } = this.state;
    const {
      enterpriseReducer: {
        enterpriseData = [],
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
            {/* <Col>
              <h3 className={'page-header'}>
              Customer Enterprise Solution
              </h3>
            </Col> */}
            <Col md="6">
            <div className={"d-flex"}>
            <InputGroup className="">
              <FormControl
                placeholder="Search first name/ last name/ email/ contact number"
                aria-label="Search enterprise"
                name={'search'}
                value={search}
                onChange={this.handleChange}
                className="modified_placeholders"
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
              <th>Contact Number</th>
              <th>Topic</th>
              <th>Message</th>
            </tr>
          </thead>
          <tbody>
            {enterpriseData.length
              ? enterpriseData.map((item: IEnterpriseData, index: number) => {
                  return (
                    <tr key={item._id}>
                      <td>{count + index}</td>
                      <td className={"text-capitalize"}>{item.firstName}</td>
                      <td className={"text-capitalize"}>{item.lastName}</td>
                      <td>{item.email}</td>
                      <td>{item.contactNumber}</td>
                      <td>{item.topics}</td>
                      <td>{item.message}</td>
                    </tr>
                  );
                })
              : ""}
            {!isLoading && !enterpriseData.length ? (
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
  enterpriseReducer: state.enterpriseReducer,
});

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    getEnterprises: (data: any) => {
      dispatch(getEnterpriseRequest(data));
    },
    redirectTo: (data: any) => {
      dispatch(redirectTo(data));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Enterprise);
