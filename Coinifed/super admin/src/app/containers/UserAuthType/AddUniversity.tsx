import React, { Component } from "react";
import { Button, Card, Row, Col, Form, InputGroup } from "react-bootstrap";

import {
  IUniversityState,
  IUniversityProps,
  IRootState,
  IUniversityData,
  // ICorporateData,
  // IUniversityData,
} from "../../../interfaces";
import { AppRoutes } from "../../../config";
import { universityValidator } from "../../../validator";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import {
  addUniversityRequest,
  updateUniversityRequest,
  getUniversityInfoRequest
} from "../../../actions";

class AddUniversity extends Component<IUniversityProps, IUniversityState> {
  constructor(props: IUniversityProps) {
    super(props);
    this.state = {
      name: "",
      isEditable:false,
      id:"",
      errors: {
        name: "",
      }
    };
  }
  componentDidMount = () => {
    const data = this.props.match.params as any;
    if (data.id) {
      this.props.viewUniversity(data);
      this.setState({
        isEditable: true,
        id:data.id
      });
    }

  };
  componentDidUpdate = (prevProps: IUniversityProps) => {
    console.log("checking updatae");
    const { universityReducer } = prevProps;  
    const data = this.props.match.params as any;
    if (
      universityReducer !== this.props.universityReducer
    ) {
      const { universityInfo } = this.props.universityReducer;
      const {
       name,
        _id,
      } = universityInfo;

      this.setState({
        ...this.state,
        name,
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
    // const { state } = location;
    const {
      name, 
      id,
      isEditable
    } = this.state;
    const data = {
      name,id
    };
    // To validate form fields
    const { isValid, errors } = universityValidator({
      ...data,
    });
    const props=this.props
    console.log(isEditable)
    if (isValid) {
      if (isEditable) {
        this.props.updateUniversity({ ...data ,props});
      } else {
         this.props.addUser(data);
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
      name,
      errors,
      isEditable,
    } = this.state;
    // console.log(this.props.universityReducer.universityInfo.name,"check raj")
    
    return (
      <div className="cr-page px-3 min-height650 my-profile-section">
        <Row>
          <Col xs="12" sm="12" lg="12">
            <Card>
              <Card.Header>
                <h4>
                  <i className="icon-note" />
                  &nbsp;{!isEditable ? "Add" : "Update"} University
                </h4>
              </Card.Header>
              <Card.Body>
                <div className="row">
                  <div className="col-md-12  my-4">
                    <Form onSubmit={this.handleSubmit} className="row">
                      <Form.Group className="col-sm-6">
                        <Form.Label className="floating-label">
                          University Name<span className={"mandatory"}>*</span>
                          &nbsp;
                        </Form.Label>
                        <InputGroup>
                          <input
                            type={"text"}
                            name={"name"}
                            value={name}
                            className={"form-control floating-input"}
                            placeholder={" "}
                            onChange={this.handleChange}
                          />
                        </InputGroup>
                        <div className={"text-danger error-text"}>
                          {errors && errors.name}
                        </div>
                      </Form.Group>                 
          
                      <Col xs="12" className="text-right">
                        <Button
                          variant="button"
                          className="btn btn-danger"
                          onClick={() => {
                            this.props.history.push(AppRoutes.UNIVERSITY);
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
  universityReducer: state.universityReducer,
});
const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
  
    addUser: (data: any) => {
      dispatch(addUniversityRequest(data));
    },
    updateUniversity: (data: any) => {
      dispatch(updateUniversityRequest(data));
    },
    viewUniversity: (data: IUniversityData) => {
      dispatch(getUniversityInfoRequest(data));
    },
  };
};

export default connect(mapStateToProps,mapDispatchToProps)(AddUniversity);

