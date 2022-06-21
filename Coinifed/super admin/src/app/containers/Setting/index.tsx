import React, { Component } from "react";
import { Button, Card, Row, Col, Form, InputGroup } from "react-bootstrap";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import {
  ISettingState,
  IAddSettingProps,
  IRootState,
} from "../../../interfaces";
import { settingInfoRequest, updateSettingRequest } from "../../../actions";
import { settingValidator } from "../../../validator";

class Setting extends Component<IAddSettingProps, ISettingState> {
  constructor(props: IAddSettingProps) {
    super(props);
    this.state = {
      courseDuration: "",
      moduleDuration:"",
      certificateAmount:"",
      facebook: "",
      twitter: "",
      linkedin: "",
      pinterest: "",
      phone: "",
      email: "",
      headOfficeAddress: "",
      editAccess: "",
      errors: {
        courseDuration: "",
        moduleDuration:"",
        certificateAmount:"",
        facebook: "",
        twitter: "",
        linkedin: "",
        pinterest: "",
        phone: "",
        email: "",
        headOfficeAddress: "",
      },
      isEditable: false,
      id: "",
    };
  }

  componentDidMount = () => {
    this.props.viewSetting("");

     // For Check Sub Admin Edit
     let getSubAdmin: any = localStorage.getItem("SubAdminCheck");
     let checkSubAdmin: any = JSON.parse(getSubAdmin);
     let getViewRoute: any;
     if (checkSubAdmin.length) {
       // "SettingsEdit" this string is for edit access
       // Note This String change for every page
       getViewRoute = checkSubAdmin.find((e: any) => e === "SettingsEdit");
     } else {
       getViewRoute = "SuperAdmin";
     }
     this.setState({
       editAccess: getViewRoute,
     });
  };
  componentDidUpdate = (prevProps: IAddSettingProps) => {
    const { settingReducer } = prevProps;
    if (
      settingReducer.isLoading !== this.props.settingReducer.isLoading &&
      this.props.settingReducer.settingInfo
    ) {
      const { settingInfo } = this.props.settingReducer;

      const {
        courseDuration,
        moduleDuration,
        certificateAmount,
        facebook,
        twitter,
        linkedin,
        pinterest,
        phone,
        email,
        headOfficeAddress,
        _id,
      } = settingInfo;

      this.setState({
        courseDuration,
        moduleDuration,
        certificateAmount,
        facebook,
        twitter,
        linkedin,
        pinterest,
        phone,
        email,
        headOfficeAddress,
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
    // const { state } = location;
    const {
      courseDuration,
      moduleDuration,
      certificateAmount,
      facebook,
      twitter,
      linkedin,
      pinterest,
      phone,
      email,
      headOfficeAddress,
      id,
    } = this.state;

    const data = {
      courseDuration,
      moduleDuration,
      certificateAmount,
      facebook,
      twitter,
      linkedin,
      pinterest,
      phone,
      email,
      headOfficeAddress,
      _id: id,
    };

    // To validate form fields
    const { isValid, errors } = settingValidator({
      ...data,
    });
    if (isValid) {
      this.props.updateSetting({ ...data });
    } else {
      this.setState({
        errors,
      });
      return;
    }
  };

  render() {
    const {
      courseDuration,
      moduleDuration,
      certificateAmount,
      facebook,
      twitter,
      linkedin,
      pinterest,
      phone,
      email,
      headOfficeAddress,
      errors,
      editAccess
    } = this.state;

    return (
      <div className='cr-page px-3  my-profile-section'>
        <Row>
          <Col xs='12' sm='12' lg='12'>
            <Card>
              {/* <Card.Header>
                <h4>
                  <i className="fa fa-cogs" />
                  &nbsp; Settings
                </h4>
              </Card.Header> */}
              <Card.Body>
                <div className='row'>
                  <div className='col-md-12  my-4'>
                    <Form onSubmit={this.handleSubmit} className='row'>
                      <Form.Group className='col-sm-6'>
                        <Form.Label className='floating-label'>
                          Master Course Validity Duration (Days)
                          <span className={"mandatory"}>*</span>
                          &nbsp;
                        </Form.Label>
                        <InputGroup>
                          <input
                            type={"text"}
                            name={"courseDuration"}
                            value={courseDuration}
                            className={"form-control floating-input"}
                            placeholder={" "}
                            onChange={this.handleChange}
                            disabled={
                              editAccess === "SettingsEdit" ||
                              editAccess === "SuperAdmin"
                                ? false
                                : true
                            }
                          />
                        </InputGroup>
                        <div className={"text-danger error-text"}>
                          {errors && errors.courseDuration}
                        </div>
                      </Form.Group>

                      <Form.Group className='col-sm-6'>
                        <Form.Label className='floating-label'>
                          Linkedin<span className={"mandatory "}>*</span>
                          &nbsp;
                        </Form.Label>
                        <InputGroup>
                          <input
                            type={"text"}
                            name={"linkedin"}
                            value={linkedin}
                            className={"form-control floating-input"}
                            placeholder={" "}
                            onChange={this.handleChange}
                            disabled={
                              editAccess === "SettingsEdit" ||
                              editAccess === "SuperAdmin"
                                ? false
                                : true
                            }
                          />
                        </InputGroup>
                        <div className={"text-danger error-text"}>
                          {errors && errors.linkedin}
                        </div>
                      </Form.Group>

                      <Form.Group className='col-sm-6'>
                        <Form.Label className='floating-label'>
                          Micro Course Validity Duration (Days)
                          <span className={"mandatory"}>*</span>
                          &nbsp;
                        </Form.Label>
                        <InputGroup>
                          <input
                            type={"text"}
                            name={"moduleDuration"}
                            value={moduleDuration}
                            className={"form-control floating-input"}
                            placeholder={" "}
                            onChange={this.handleChange}
                            disabled={
                              editAccess === "SettingsEdit" ||
                              editAccess === "SuperAdmin"
                                ? false
                                : true
                            }
                          />
                        </InputGroup>
                        <div className={"text-danger error-text"}>
                          {errors && errors.moduleDuration}
                        </div>
                      </Form.Group>

                      <Form.Group className='col-sm-6'>
                        <Form.Label className='floating-label'>
                          Phone<span className={"mandatory"}>*</span>
                          &nbsp;
                        </Form.Label>
                        <InputGroup>
                          <input
                            type={"text"}
                            name={"phone"}
                            value={phone}
                            className={"form-control floating-input"}
                            placeholder={" "}
                            onChange={this.handleChange}
                            disabled={
                              editAccess === "SettingsEdit" ||
                              editAccess === "SuperAdmin"
                                ? false
                                : true
                            }
                          />
                        </InputGroup>
                        <div className={"text-danger error-text"}>
                          {errors && errors.phone}
                        </div>
                      </Form.Group>

                      <Form.Group className='col-sm-6'>
                        <Form.Label className='floating-label'>
                          Facebook<span className={"mandatory"}>*</span>
                          &nbsp;
                        </Form.Label>
                        <InputGroup>
                          <input
                            type={"text"}
                            name={"facebook"}
                            value={facebook}
                            className={"form-control floating-input"}
                            placeholder={" "}
                            onChange={this.handleChange}
                            disabled={
                              editAccess === "SettingsEdit" ||
                              editAccess === "SuperAdmin"
                                ? false
                                : true
                            }
                          />
                        </InputGroup>
                        <div className={"text-danger error-text"}>
                          {errors && errors.facebook}
                        </div>
                      </Form.Group>
                      <Form.Group className='col-sm-6'>
                        <Form.Label className='floating-label'>
                          Email<span className={"mandatory"}>*</span>
                          &nbsp;
                        </Form.Label>
                        <InputGroup>
                          <input
                            type={"text"}
                            name={"email"}
                            value={email}
                            className={"form-control floating-input"}
                            placeholder={" "}
                            onChange={this.handleChange}
                            disabled={
                              editAccess === "SettingsEdit" ||
                              editAccess === "SuperAdmin"
                                ? false
                                : true
                            }
                          />
                        </InputGroup>
                        <div className={"text-danger error-text"}>
                          {errors && errors.email}
                        </div>
                      </Form.Group>

                      <Form.Group className='col-sm-6'>
                        <Form.Label className='floating-label'>
                          Twitter<span className={"mandatory"}>*</span>
                          &nbsp;
                        </Form.Label>
                        <InputGroup>
                          <input
                            type={"text"}
                            name={"twitter"}
                            value={twitter}
                            className={"form-control floating-input"}
                            placeholder={" "}
                            onChange={this.handleChange}
                            disabled={
                              editAccess === "SettingsEdit" ||
                              editAccess === "SuperAdmin"
                                ? false
                                : true
                            }
                          />
                        </InputGroup>
                        <div className={"text-danger error-text"}>
                          {errors && errors.twitter}
                        </div>
                      </Form.Group>

                      <Form.Group className='col-sm-6'>
                        <Form.Label className='floating-label'>
                          Head Office Address
                          <span className={"mandatory"}>*</span>
                          &nbsp;
                        </Form.Label>
                        <InputGroup>
                          <input
                            type={"text"}
                            name={"headOfficeAddress"}
                            value={headOfficeAddress}
                            className={"form-control floating-input"}
                            placeholder={" "}
                            onChange={this.handleChange}
                            disabled={
                              editAccess === "SettingsEdit" ||
                              editAccess === "SuperAdmin"
                                ? false
                                : true
                            }
                          />
                        </InputGroup>
                        <div className={"text-danger error-text"}>
                          {errors && errors.headOfficeAddress}
                        </div>
                      </Form.Group>

                      <Form.Group className='col-sm-6'>
                        <Form.Label className='floating-label'>
                          Certificate amount (USD)
                          <span className={"mandatory"}>*</span>
                          &nbsp;
                        </Form.Label>
                        <InputGroup>
                          <input
                            type={"text"}
                            name={"certificateAmount"}
                            value={certificateAmount}
                            className={"form-control floating-input"}
                            placeholder={" "}
                            onChange={this.handleChange}
                            disabled={
                              editAccess === "SettingsEdit" ||
                              editAccess === "SuperAdmin"
                                ? false
                                : true
                            }
                          />
                        </InputGroup>
                        <div className={"text-danger error-text"}>
                          {errors && errors.certificateAmount}
                        </div>
                      </Form.Group>
                      {/* <Form.Group className="col-sm-6">
                        <Form.Label className="floating-label">
                          Pinterest<span className={"mandatory"}>*</span>
                          &nbsp;
                        </Form.Label>
                        <InputGroup>
                          <input
                            type={"text"}
                            name={"pinterest"}
                            value={pinterest}
                            className={"form-control floating-input"}
                            placeholder={" "}
                            onChange={this.handleChange}
                          />
                        </InputGroup>
                        <div className={"text-danger error-text"}>
                          {errors && errors.pinterest}
                        </div>
                      </Form.Group> */}
                      {editAccess === "SettingsEdit" ||
                      editAccess === "SuperAdmin" ? (
                        <Col xs='12' className='text-right'>
                          <Button
                            variant='button'
                            className='btn btn-primary text-white'
                            type={"submit"}
                          >
                            Update
                          </Button>
                        </Col>
                      ) : null}
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
  settingReducer: state.settingReducer,
});

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    viewSetting: () => {
      dispatch(settingInfoRequest(""));
    },
    updateSetting: (data: any) => {
      dispatch(updateSettingRequest(data));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Setting);
