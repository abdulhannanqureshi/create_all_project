import React, { Component } from "react";
import { Button, Card, Row, Col, Form, InputGroup } from "react-bootstrap";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import {
  IAddCourseState,
  IAddCourseProps,
  IRootState,
  ICourseData,
  ICategoryData,
} from "../../../interfaces";
import { AppRoutes } from "../../../config";
import {
  getCategoryRequest,
  addCourseRequest,
  courseInfoRequest,
  updateCourseRequest,
} from "../../../actions";
import { courseValidator } from "../../../validator";

class AddCourse extends Component<IAddCourseProps, IAddCourseState> {
  constructor(props: IAddCourseProps) {
    super(props);
    this.state = {
      title: "",
      price: "",
      topic: "",
      isActive: true,
      errors: {
        title: "",
        price: "",
        topic: "",
      },
      isEditable: false,
      _id: "",
    };
  }

  componentDidMount = () => {
    const data = this.props.match.params as any;
    if (data.id) {
      this.props.viewCourse(data);
      this.setState({
        isEditable: true,
      });
    }
    this.props.getCategory({skip: 1, limit: 'all'});
  };

  componentDidUpdate = (prevProps: IAddCourseProps) => {
    const { courseReducer } = prevProps;
    const data = this.props.match.params as any;
    if (
      courseReducer.isLoading !== this.props.courseReducer.isLoading &&
      this.props.courseReducer.courseInfo &&
      data.id
    ) {
      const { courseInfo } = this.props.courseReducer;

      const {
        title,
        price,
        topic,
        _id,
      } = courseInfo;

      this.setState({
        title,
        price,
        topic,
        _id: _id ? _id : "",
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
      title,
      price,
      topic,
      isEditable,
      _id,
    } = this.state;

    const data = {
      title,
      price,
      topic,
      _id: _id,
    };

    // To validate form fields
    const { isValid, errors } = courseValidator({
      ...data,
    });
    if (isValid) {
      if (isEditable) {
        this.props.updateCourse({ ...data });
      } else {
        this.props.addCourse(data);
      }
    } else {
      this.setState({
        errors,
      });
      return;
    }
  };

  render() {
    const { title, price, topic, errors, isEditable } = this.state;
    return (
      <div className="cr-page px-3 min-height650 my-profile-section">
        <Row>
          <Col xs="12" sm="12" lg="12">
            <Card>
              <Card.Header>
                <h4>
                  <i className="icon-note" />
                  &nbsp;{!isEditable ? "Add" : "Update"} Course
                </h4>
              </Card.Header>
              <Card.Body>
                <div className="row">
                  <div className="col-md-12  my-4">
                    <Form onSubmit={this.handleSubmit} className="row">
                      <Form.Group className="col-sm-6">
                        <Form.Label className="floating-label">
                          Course Name<span className={"mandatory"}>*</span>
                          &nbsp;
                        </Form.Label>
                        <InputGroup>
                          <input
                            type={"text"}
                            name={"title"}
                            value={title}
                            className={"form-control floating-input"}
                            placeholder={" "}
                            onChange={this.handleChange}
                          />
                        </InputGroup>
                        <div className={"text-danger error-text"}>
                          {errors && errors.title}
                        </div>
                      </Form.Group>

                      <Form.Group className="col-sm-6">
                        <Form.Label className="floating-label">
                          Amount<span className={"mandatory "}>*</span>
                          &nbsp;
                        </Form.Label>
                        <InputGroup>
                          <input
                            type={"text"}
                            name={"price"}
                            value={price}
                            className={"form-control floating-input"}
                            placeholder={" "}
                            onChange={this.handleChange}
                          />
                        </InputGroup>
                        <div className={"text-danger error-text"}>
                          {errors && errors.price}
                        </div>
                      </Form.Group>
                      <Form.Group className="col-sm-6">
                        <Form.Label className="floating-label">
                          Category<span className={"mandatory "}>*</span>
                          &nbsp;
                        </Form.Label>
                        <Form.Control
                          as="select"
                          aria-label="Default select example"
                          name={"topic"}
                          value={topic}
                          onChange={this.handleChange}
                          defaultValue={topic}
                        >
                          <option value="">Select Course</option>
                          {this.props.categoryReducer &&
                            this.props.categoryReducer.categoryData &&
                            this.props.categoryReducer.categoryData.length ? (
                              this.props.categoryReducer.categoryData.map(
                                (item: ICategoryData, index: number) => {
                                  return (
                                    <option value={item._id}>{item.topicName}</option>
                                  );
                                }
                              )
                            ) : ''
                          }
                        </Form.Control>
                        <div className={"text-danger error-text"}>
                          {errors && errors.topic}
                        </div>
                      </Form.Group>
                      <Col xs="12" className="text-right">
                        <Button
                          variant="button"
                          className="btn btn-danger"
                          onClick={() => {
                            this.props.history.push(AppRoutes.COURSE);
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
  categoryReducer: state.categoryReducer,
  courseReducer: state.courseReducer,
});

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    getCategory: (data: any) => {
      dispatch(getCategoryRequest(data));
    },
    addCourse: (data: any) => {
      dispatch(addCourseRequest(data));
    },
    updateCourse: (data: any) => {
      dispatch(updateCourseRequest(data));
    },
    viewCourse: (data: ICourseData) => {
      dispatch(courseInfoRequest(data));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AddCourse);
