import React, { Component } from "react";
import { Button, Card, Row, Col, Form, InputGroup } from "react-bootstrap";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import {
  IAddPromoCodeState,
  IAddPromoCodeProps,
  IRootState,
  IPromoCodeData,
  ICourseData,
} from "../../../interfaces";
import { AppRoutes } from "../../../config";
import {
  addPromoCodeRequest,
  promoCodeInfoRequest,
  updatePromoCodeRequest,
  getCourseRequest,
} from "../../../actions";
import { promoCodeValidator } from "../../../validator";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

class AddPromoCode extends Component<IAddPromoCodeProps, IAddPromoCodeState> {
  constructor(props: IAddPromoCodeProps) {
    super(props);
    this.state = {
      courseId: "",
      promoTitle: "",
      promoCode: "",
      startDate: new Date(),
      endDate: new Date(),
      percentOff: "",
      errors: {
        courseId: "",
        promoTitle: "",
        promoCode: "",
        startDate: "",
        endDate: "",
        percentOff: "",
      },
      isEditable: false,
      id: "",
    };
  }

  componentDidMount = () => {
    const data = this.props.match.params as any;
    if (data.id) {
      this.props.viewPromoCode(data);
      this.setState({
        isEditable: true,
      });
    }
    this.props.getCourses();
  };
  componentDidUpdate = (prevProps: IAddPromoCodeProps) => {
    const { promoCodeReducer } = prevProps;
    const data = this.props.match.params as any;
    if (
      promoCodeReducer.isLoading !== this.props.promoCodeReducer.isLoading &&
      this.props.promoCodeReducer.promoCodeInfo &&
      data.id
    ) {
      const { promoCodeInfo } = this.props.promoCodeReducer;
      const {
        courseId,
        promoTitle,
        promoCode,
        startDate,
        endDate,
        percentOff,
        _id,
      } = promoCodeInfo;

      this.setState({
        courseId,
        promoTitle,
        promoCode,
        startDate: startDate ? new Date(startDate) : null,
        endDate: endDate ? new Date(endDate) : null,
        percentOff,
        id: _id ? _id : "",
      });
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

  handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const {
      courseId,
      promoTitle,
      promoCode,
      startDate,
      endDate,
      percentOff,
      id,
      isEditable,
    } = this.state;

    const data = {
      courseId:courseId ==="" ? null :courseId,
      promoTitle,
      promoCode,
      startDate: startDate,
      endDate:  endDate,
      percentOff,
      _id: id,
    };
    // To validate form fields
    const { isValid, errors } = promoCodeValidator({
      ...data,
      startDate: startDate ? "startDate" : "",
      endDate:  endDate ? "endDate" : "",
    });
    if (isValid) {
      if (isEditable) {
        this.props.updatePromoCode({ ...data });
      } else {
        this.props.addPromoCode(data);
      }
    } else {
      this.setState({
        errors,
      });
      return;
    }
  };

  render() {
    const {
      courseId,
      promoTitle,
      promoCode,
      startDate,
      endDate,
      percentOff,
      errors,
      isEditable,
    } = this.state;

    return (
      <div className="cr-page px-3 min-height650 my-profile-section">
        <Row>
          <Col xs="12" sm="12" lg="12">
            <Card>
              <Card.Header>
                <h4>
                  <i className="icon-note" />
                  &nbsp;{!isEditable ? "Add" : "Update"} Promo Code
                </h4>
              </Card.Header>
              <Card.Body>
                <div className="row">
                  <div className="col-md-12  my-4">
                    <Form onSubmit={this.handleSubmit} className="row">
                      <Form.Group className="col-sm-6">
                        <Form.Label className="floating-label">
                          Select Course<span className={"mandatory "}></span>
                          &nbsp;
                        </Form.Label>
                        <Form.Control
                          as="select"
                          aria-label="Default select example"
                          name={"courseId"}
                          value={courseId}
                          onChange={this.handleChange}
                        >
                          <option value="">Select Course</option>
                          {this.props.courseReducer &&
                          this.props.courseReducer.courseData &&
                          this.props.courseReducer.courseData.length
                            ? this.props.courseReducer.courseData.map(
                                (course: ICourseData, index: number) => {
                                  return (
                                    <option value={course._id}>
                                      {course.title}
                                    </option>
                                  );
                                }
                              )
                            : ""}
                        </Form.Control>
                        <div className={"text-danger error-text"}>
                          {errors && errors.courseId}
                        </div>
                      </Form.Group>

                      <Form.Group className="col-sm-6">
                        <Form.Label className="floating-label">
                          Promo Title<span className={"mandatory "}>*</span>
                          &nbsp;
                        </Form.Label>
                        <InputGroup>
                          <input
                            type={"text"}
                            name={"promoTitle"}
                            value={promoTitle}
                            className={"form-control floating-input"}
                            placeholder={"Promo Title"}
                            onChange={this.handleChange}
                          />
                        </InputGroup>
                        <div className={"text-danger error-text"}>
                          {errors && errors.promoTitle}
                        </div>
                      </Form.Group>
                      <Form.Group className="col-sm-6">
                        <Form.Label className="floating-label">
                          Promo Code<span className={"mandatory"}>*</span>
                          &nbsp;
                        </Form.Label>
                        <InputGroup>
                          <input
                            type={"text"}
                            name={"promoCode"}
                            value={promoCode}
                            className={"form-control floating-input"}
                            placeholder={"Promo Code"}
                            onChange={this.handleChange}
                          />
                        </InputGroup>
                        <div className={"text-danger error-text"}>
                          {errors && errors.promoCode}
                        </div>
                      </Form.Group>
                      <Form.Group className="col-sm-6">
                        <Form.Label className="floating-label">
                          Percent Off<span className={"mandatory"}>*</span>
                          &nbsp;
                        </Form.Label>
                        <InputGroup>
                          <input
                            type={"text"}
                            name={"percentOff"}
                            value={percentOff}
                            className={"form-control floating-input"}
                            placeholder={"Percent Off"}
                            onChange={this.handleChange}
                          />
                        </InputGroup>
                        <div className={"text-danger error-text"}>
                          {errors && errors.percentOff}
                        </div>
                      </Form.Group>
                      <Form.Group className="col-sm-6">
                        <Form.Label className="floating-label">
                          Start Date<span className={"mandatory"}>*</span>
                          &nbsp;
                        </Form.Label>
                        <InputGroup>
                          <DatePicker
                            className={"form-control floating-input"}
                            placeholderText={"Start Date"}
                            minDate={new Date()}
                            selected={startDate}
                            onChange={(date) => {
                              this.setState({
                                startDate: date,
                              });
                            }}
                          />
                        </InputGroup>
                        <div className={"text-danger error-text"}>
                          {errors && errors.startDate}
                        </div>
                      </Form.Group>
                      <Form.Group className="col-sm-6">
                        <Form.Label className="floating-label">
                          End Date<span className={"mandatory"}>*</span>
                          &nbsp;
                        </Form.Label>
                        <InputGroup>
                          <DatePicker
                            className={"form-control floating-input"}
                            selected={endDate}
                            placeholderText={"End Date"}
                            minDate={new Date()}
                            onChange={(date) => {
                              this.setState({
                                endDate: date,
                              });
                            }}
                          />
                        </InputGroup>
                        <div className={"text-danger error-text"}>
                          {errors && errors.endDate}
                        </div>
                      </Form.Group>
                      <Col xs="12" className="text-right">
                        <Button
                          variant="button"
                          className="btn btn-danger"
                          onClick={() => {
                            this.props.history.push(AppRoutes.PROMO_CODE);
                          }}
                        >
                          {" "}
                          Cancel
                        </Button>
                        &nbsp;
                        <Button
                          variant="button"
                          type={"submit"}
                          className="btn btn-primary"
                        >
                          {!isEditable ? "Save" : "Update"}
                        </Button>
                      </Col>
                    </Form>
                  </div>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}

const mapStateToProps: any = (state: IRootState) => ({
  promoCodeReducer: state.promoCodeReducer,
  courseReducer: state.courseReducer,
});

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    getCourses: () => {
      dispatch(getCourseRequest({ skip: 1, limit: "all" }));
    },
    addPromoCode: (data: any) => {
      dispatch(addPromoCodeRequest(data));
    },
    viewPromoCode: (data: IPromoCodeData) => {
      dispatch(promoCodeInfoRequest(data));
    },
    updatePromoCode: (data: any) => {
      dispatch(updatePromoCodeRequest(data));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AddPromoCode);
