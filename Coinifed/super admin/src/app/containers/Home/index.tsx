import React, { Component } from "react";
import { IRootState, IDashboardProps, IDashboardState } from "../../../interfaces";
import { Dispatch } from "redux";
import { connect } from "react-redux";
import { Card, Col, Row, Form } from "react-bootstrap";
import { Pie, Line, Bar} from 'react-chartjs-2';
import { CustomTooltips } from '@coreui/coreui-plugin-chartjs-custom-tooltips';
import { getStyle, hexToRgba } from '@coreui/coreui/dist/js/coreui-utilities';
import { AppRoutes } from "../../../config";
import { getDashboardRequest, redirectTo } from "../../../actions";

/* const brandPrimary = getStyle('--primary') */
const brandSuccess = getStyle('--success')
const brandInfo = getStyle('--info')
const brandWarning = getStyle('--warning')
//const brandDanger = getStyle('--danger')

//Random Numbers
function random(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

var elements = 27;
var data1 = [];
var data2 = [];
var data3 = [];

for (var i = 0; i <= elements; i++) {
  data1.push(random(50, 200));
  data2.push(random(15000, 25000));
  data3.push(15000);
}

class Dashboard extends Component<IDashboardProps, IDashboardState> {
  constructor(props: IDashboardProps) {
    super(props);
    this.state = {
      type: '',
      availableCourse: '',
      registeredUser: '',
      purchasedCourses: '',
      totalSales: '',
      yearlySales: '',
      todaySales: '',
      monthlySales: '',
      weeklySales: '',
      graphOfSales:[]
    };
  }

  handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState(
      {
        type: event.target.value
      },
      () =>
        this.props.getDashboard({})
    );
  };

  componentDidMount = () => {
   let token=window.localStorage.getItem('token');
    if(token !== null)
    {
      this.setState(
        {
          type: ''
        },
        () =>
          this.props.getDashboard({})
      );

    }
  };

  componentDidUpdate = (prevProps: IDashboardProps) => {
    const { dashboardReducer } = prevProps;
    if (
      dashboardReducer?.isLoading !== this.props.dashboardReducer?.isLoading &&
      this.props.dashboardReducer?.dashboardData
    )
    {
      const { dashboardData } = this.props.dashboardReducer;
      const {
        availableCourse,
        registeredUser,
        purchasedCourses,
        totalSales,
        yearlySales,
        todaySales,
        monthlySales,
        weeklySales,
        graphOfSales
      } = dashboardData;

      this.setState({
        availableCourse,
        registeredUser,
        purchasedCourses,
        totalSales,
        yearlySales,
        todaySales,
        monthlySales,
        weeklySales,
        graphOfSales
      });
    }
  };
  render() {

    const { availableCourse,
      registeredUser,
      purchasedCourses,
      totalSales,
      yearlySales,
      todaySales,
      monthlySales,
      weeklySales,
      graphOfSales,
      type } = this.state;
    const { dashboardReducer } = this.props;
    let labelArray=[];
    let valueArray=[];
    for(let x in graphOfSales)
    {
      labelArray.push(graphOfSales[x].label);
      valueArray.push(graphOfSales[x].value)
    }
    let poppedlables = labelArray.pop();
    let poppedValues = valueArray.pop();
    const mainChart = {
      labels:labelArray,
      datasets: [
        {
          label: "Purchased Courses",
          data: valueArray,
          fill: true,
          backgroundColor: "rgba(53, 158, 206,0.5)",
          borderColor: "rgba(75,192,192,1)"
        }
      ]
    };

    const mainChartOpts: any = {
      type:"bar",
      maintainAspectRatio: false,
      legend: {
        display: false,
      },
      scales: {
        xAxes: [
          {
            // gridLines: {
            //   drawOnChartArea: false,
            // },
            scaleLabel: {
              display: true,
              labelString: 'category name'
            }
          }],
        yAxes: [
          {
            // ticks: {
            //   beginAtZero: true,
            //   maxTicksLimit: 5,
            //   stepSize: Math.ceil(250 / 5),
            //   max: 40000,
            // },
            scaleLabel: {
              display: true,
              labelString: 'number of purchase'
            }
          }],
      },
      elements: {
        point: {
          radius: 0,
          hitRadius: 10,
          hoverRadius: 4,
          hoverBorderWidth: 3,
        },
      },
    };

    const pie = {
      labels: [`Active`, `Inactive`],
      datasets: [
        {
          data: [2, 4],
          backgroundColor: [
            '#359ece',
            '#f55346'
            //'#36A2EB',
          ],
        }],
    };

    const vendorPie = {
      labels: [`Active`, `Inactive`],
      datasets: [
        {
          data: [2, 4],
          backgroundColor: [
            '#359ece',
            '#f55346',
          ],
        }],
    };


    return (
      <div className="animated fadeIn">
        <Row>
          <Col xs="12" sm="12" lg="12">
            <Card>
              {/* <Card.Header>
                <h4>
                  <i className="fa fa-dashboard" /> Dashboard
                </h4>
              </Card.Header> */}
              <Card.Body>
                <Row>
                  <Col md="6">
                    <Row>
                      <Col md="6">
                        <Card className="text-white fixed_height_card_md" style={{ background: "#48a36f" }}>
                          <Card.Body className="pb-0">
                            <div className="text-value">{availableCourse}<i className="fa fa-list pull-right"></i></div>
                            {/* <div>Procurement Managers</div> */}
                          </Card.Body>
                          <div className="chart-wrapper mx-3" style={{ height: '50px' }}>
                            <div className={"view-link"} style={{ marginTop: '15px' }}
                              onClick={() => {
                                this.props.history.push(
                                  AppRoutes.COURSE
                                );
                              }}>Total Available Courses</div>
                          </div>
                        </Card>
                      </Col>
                      <Col md="6">
                        <Card className="text-white fixed_height_card_md" style={{ background: "#359ece" }}>
                          <Card.Body className="pb-0">
                            <div className="text-value ">{purchasedCourses}<i className="fa fa-graduation-cap pull-right"></i></div>
                            {/* <div>Vendors</div> */}

                          </Card.Body>
                          <div className="chart-wrapper mx-3" style={{ height: '50px' }}>
                            <div className={"view-link"} style={{ marginTop: '15px' }}
                              onClick={() => {
                                this.props.history.push(
                                  AppRoutes.TRANSACTION
                                );
                              }}
                            >Courses Purchased</div>
                          </div>
                        </Card>
                      </Col>
                    </Row>

                    <Card className="text-white fixed_height_card_lg" style={{ background: "#d08f31" }}>
                      <Card.Body className="pb-0">
                        <div className="text-value height_fixed">{registeredUser}<i className="fa fa-users pull-right"></i></div>
                        {/* <div>Companies</div> */}
                      </Card.Body>
                      <div className="chart-wrapper mx-3" style={{ height: '50px' }}>
                        <div className={"view-link"} style={{ marginTop: '15px' }}
                          onClick={() => {
                            this.props.history.push(
                              AppRoutes.USER
                            );
                          }}
                        >Registered Users</div>
                      </div>
                    </Card>
                  </Col>
                  <Col md="6">
                    <Card className="text-white" style={{ background: "#f55346" }}>
                      <Card.Body className="">

                        <div className="d-flex justify-content-between mt-2">
                          <div className="chart-wrapper mx-3" >
                            <div className={"view-link"}
                              onClick={() => {
                                this.props.history.push(
                                  AppRoutes.TRANSACTION);
                              }}
                            ><h4>Total Sales</h4></div>
                          </div>
                          <div className="text-value fixed_height"><i className="fa fa-dollar mr-2"></i>{totalSales}</div>
                          {/* <div>Vendors</div> */}
                        </div>
                        <div className="d-flex justify-content-between mt-2">
                          <div className="chart-wrapper mx-3">
                            <div className={"view-link"}
                              onClick={() => {
                                this.props.history.push(
                                  AppRoutes.TRANSACTION);
                              }}
                            ><h4>Today's Sales</h4></div>
                          </div>
                          <div className="text-value dollar_division"><i className="fa fa-dollar mr-2"></i>{todaySales}</div>
                          {/* <div>Procurement Managers</div> */}
                        </div>
                        <div className="d-flex justify-content-between mt-2">
                          <div className="chart-wrapper mx-3" >
                            <div className={"view-link"}
                              onClick={() => {
                                this.props.history.push(
                                  AppRoutes.COURSE
                                );
                              }}><h4>Weekly Sales</h4></div>
                          </div>
                          <div className="text-value"><i className="fa fa-dollar mr-2"></i>{weeklySales}</div>
                          {/* <div>Procurement Managers</div> */}
                        </div>
                        <div className="d-flex justify-content-between mt-2">
                          <div className="chart-wrapper mx-3">
                            <div className={"view-link"}
                              onClick={() => {
                                this.props.history.push(
                                  AppRoutes.TRANSACTION
                                );
                              }}
                            ><h4>Monthly Sales</h4></div>
                          </div>
                          <div className="text-value"><i className="fa fa-dollar mr-2"></i>{monthlySales}</div>
                          {/* <div>Procurement Managers</div> */}
                        </div>
                        <div className="d-flex justify-content-between mt-2">
                          <div className="chart-wrapper mx-3">
                            <div className={"view-link"}
                              onClick={() => {
                                this.props.history.push(
                                  AppRoutes.USER
                                );
                              }}
                            ><h4>Yearly Sales</h4></div>
                          </div>
                          <div className="text-value"><i className="fa fa-dollar mr-2"></i>{yearlySales}</div>
                          {/* <div>Procurement Managers</div> */}
                        </div>


                      </Card.Body>
                    </Card>
                  </Col>
                </Row>
                <Row className="mt-3">
                  {/* <Col sm={"6"}>
                    <Card>
                      <Card.Header>
                        <h4>
                          <i className="fa fa-users" /> Users
                        </h4>
                      </Card.Header>
                      <Card.Body>
                        <div className="chart-wrapper">
                          <Pie data={pie} options={{ legend: { display: true, position: "bottom" } }} />
                        </div>
                      </Card.Body>
                    </Card>
                  </Col>

                  <Col sm={"6"}>
                    <Card>
                      <Card.Header>
                        <h4>
                          <i className="fa fa-users" /> Vendors
                        </h4>
                      </Card.Header>
                      <Card.Body>
                        {vendorPie ?
                          <div className="chart-wrapper">
                            <Pie data={vendorPie} options={{ legend: { display: true, position: "bottom" } }} />
                          </div>
                          : <div> No Vendors found </div>}
                      </Card.Body>
                    </Card>
                  </Col>*/}

                  <Col sm="12">
                    <Card>
                      <Card.Body>
                        <Row>
                          <Col sm="5">
                            <Card.Title className="mb-0">Course purchase history</Card.Title>
                          </Col>
                        </Row>
                        <div className="chart-wrapper" style={{ marginTop: 40 + 'px' }}>
                          <Bar data={mainChart} options={mainChartOpts} />
                        </div>
                      </Card.Body>
                    </Card>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}


const mapStateToProps: any = (state: IRootState) => ({
  dashboardReducer: state.dashboardReducer
});

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {

    getDashboard: (data: any) => {
      dispatch(getDashboardRequest(data));
    },
    redirectTo: (data: any) => {
      dispatch(redirectTo(data));
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Dashboard);