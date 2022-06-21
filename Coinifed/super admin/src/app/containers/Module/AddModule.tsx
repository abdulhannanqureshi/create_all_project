import React, { Component } from 'react';
import { Button, Card, Row, Col, Form, InputGroup } from 'react-bootstrap';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { IAddModuleState, IAddModuleProps, IRootState, IModuleData, ICourseData } from '../../../interfaces';
import { AppRoutes } from '../../../config';
import { addModuleRequest, moduleInfoRequest, updateModuleRequest, getCourseRequest } from '../../../actions';
import { moduleValidator } from '../../../validator';

class AddModule extends Component<IAddModuleProps, IAddModuleState> {
  constructor(props: IAddModuleProps) {
    super(props);
    this.state = {
      moduleName:'',
      course:'',
      category:'',
      amount: '',
      errors: {
        moduleName:'',
        course:'',
        category:'',
        amount: '',
      },
      isEditable: false,
      id: '',
    };
  }

  componentDidMount = () => {
    const data = this.props.match.params as any;
    if (data.id) {
      this.props.viewModule(data);
      this.setState({
        isEditable: true,
      });
    }
    this.props.getCourses()
  };
  
  componentDidUpdate = (prevProps: IAddModuleProps) => {
    const { moduleReducer } = prevProps;
    const data = this.props.match.params as any;
    if (
      moduleReducer.isLoading !== this.props.moduleReducer.isLoading &&
      this.props.moduleReducer.moduleInfo && data.id
    ) {
      const { moduleInfo } = this.props.moduleReducer;
   
      const {
        moduleName,
        course,
        category,
        amount,
        _id,
      } = moduleInfo;

      this.setState({
        moduleName,
        course,
        category,
        amount,
        id:_id ? _id : '',
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
        [name]: '',
      },
    });
  };

  handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const {
      moduleName,
      course,
      amount,
      isEditable,
      id,
    } = this.state;

    const data = {
      moduleName,
      course,
      amount,
      _id:id,
    };

    // To validate form fields
    const { isValid, errors } = moduleValidator({
      ...data,
    });
    
    if (isValid) {
      if (isEditable) {
        this.props.updateModule({ ...data});
      } else {
        this.props.addModule(data);
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
      moduleName,
      course,
      category,
      amount,
      errors,
      isEditable,
    } = this.state;
    //const courseData = this.props.courseReducer
    return (
      <div className='cr-page px-3 min-height650 my-profile-section'>
        <Row>
          <Col xs='12' sm='12' lg='12'>
            <Card>
              <Card.Header>
                <h4>
                  <i className='icon-note' />
                  &nbsp;{!isEditable ? 'Add' : 'Update'} Module
                </h4>
              </Card.Header>
              <Card.Body>
                <div className='row'>
                  <div className='col-md-12  my-4'>
                    <Form onSubmit={this.handleSubmit} className='row'>
                      <Form.Group className='col-sm-6'>
                        <Form.Label className='floating-label'>
                          Module Name<span className={'mandatory'}>*</span>
                          &nbsp;
                        </Form.Label>
                        <InputGroup>
                          <input
                            type={'text'}
                            name={'moduleName'}
                            value={moduleName}
                            className={'form-control floating-input'}
                            placeholder={' '}
                            onChange={this.handleChange}
                          />
                        </InputGroup>
                        <div className={'text-danger error-text'}>
                          {errors && errors.moduleName}
                        </div>
                      </Form.Group>

                      <Form.Group className='col-sm-6'>
                        <Form.Label className='floating-label'>
                          Select Course<span className={'mandatory '}>*</span>
                          &nbsp;
                        </Form.Label>
                        <Form.Control 
                          as="select" 
                          aria-label="Default select example"
                          name={'course'}
                          value={course}
                          onChange={this.handleChange}           
                        >
                          <option value="">Select Course</option>
                          {this.props.courseReducer &&
                            this.props.courseReducer.courseData &&
                            this.props.courseReducer.courseData.length ? (
                              this.props.courseReducer.courseData.map(
                                (course: ICourseData, index: number) => {
                                  return (
                                    <option value={course._id}>{course.title}</option>
                                  );
                                }
                              )
                            ) : ''
                          }
                          
                        </Form.Control>
                        <div className={'text-danger error-text'}>
                          {errors && errors.course}
                        </div>
                      </Form.Group>
                      <Form.Group className='col-sm-6'>
                        <Form.Label className='floating-label'>
                          Amount<span className={'mandatory'}>*</span>
                          &nbsp;
                        </Form.Label>
                        <InputGroup>
                          <input
                            type={'text'}
                            name={'amount'}
                            value={amount}
                            className={'form-control floating-input'}
                            placeholder={' '}
                            onChange={this.handleChange}
                          />
                        </InputGroup>
                        <div className={'text-danger error-text'}>
                          {errors && errors.amount}
                        </div>
                      </Form.Group>
                      <Col xs='12' className='text-right'>
                        <Button
                          variant="button"
                          className="btn btn-danger"
                          onClick={() => {
                            this.props.history.push(AppRoutes.MODULE);
                          }}
                        >
                          {' '}
                          Cancel
                        </Button>
                        &nbsp;
                        <Button
                          variant='button'
                          type={'submit'}
                          className="btn btn-primary"
                        >
                          {!isEditable ? 'Save' : 'Update'}
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
  moduleReducer: state.moduleReducer,
  courseReducer: state.courseReducer,
});

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    getCourses: () => {
      dispatch(getCourseRequest({skip: 1, limit: 'all'}));
    },
    addModule: (data: any) => {
      dispatch(addModuleRequest(data));
    },
    viewModule: (data: IModuleData) => {
      dispatch(moduleInfoRequest(data));
    },
    updateModule: (data: any) => {
      dispatch(updateModuleRequest(data));
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(AddModule);
