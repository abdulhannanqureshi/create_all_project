import React, { Component } from 'react';
import { Button, Card, Row, Col, Form, InputGroup } from 'react-bootstrap';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { IAddPressReleaseCategoryState, IAddPressReleaseCategoryProps, IRootState, IPressReleaseCategoryData } from '../../../interfaces';
import { AppRoutes } from '../../../config';
import { addPressReleaseCategoryRequest, pressReleaseCategoryInfoRequest, updatePressReleaseCategoryRequest } from '../../../actions';
import { pressReleaseCategoryValidator } from '../../../validator';

class AddPressReleaseCategory extends Component<IAddPressReleaseCategoryProps, IAddPressReleaseCategoryState> {
  constructor(props: IAddPressReleaseCategoryProps) {
    super(props);
    this.state = {
      categoryName: '',
      errors: {
        categoryName: '',
      },
      isEditable: false,
      id: '',
    };
  }

  componentDidMount = () => {
    const data = this.props.match.params as any;
    if (data.id) {
      this.props.viewPressReleaseCategory(data);
      this.setState({
        isEditable: true,
      });
    }
  };
  componentDidUpdate = (prevProps: IAddPressReleaseCategoryProps) => {
    const { pressReleaseCategoryReducer } = prevProps;
    const data = this.props.match.params as any;
    if (
      pressReleaseCategoryReducer.isLoading !== this.props.pressReleaseCategoryReducer.isLoading &&
      this.props.pressReleaseCategoryReducer.pressReleaseCategoryInfo && data.id
    ) {
      const { pressReleaseCategoryInfo } = this.props.pressReleaseCategoryReducer;
      const {
        categoryName,
        _id,
      } = pressReleaseCategoryInfo;

      this.setState({
        categoryName,
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
    // const { location } = this.props;
    // const { state } = location;
    const {
      categoryName,
      id,
      isEditable
    } = this.state;

    const data = {
      categoryName,
      _id:id,
    };

    // To validate form fields
    const { isValid, errors } = pressReleaseCategoryValidator({
      ...data,
    });
    if (isValid) {
      if (isEditable) {
        this.props.updatePressReleaseCategory({ ...data});
      } else {
        this.props.addPressReleaseCategory(data);
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
      categoryName,
      errors,
      isEditable,
    } = this.state;

    return (
      <div className='cr-page px-3 min-height650 my-profile-section'>
        <Row>
          <Col xs='12' sm='12' lg='12'>
            <Card>
              <Card.Header>
                <h4>
                  <i className='icon-note' />
                  &nbsp;{!isEditable ? 'Add' : 'Update'} Press Release Category
                </h4>
              </Card.Header>
              <Card.Body>
                <div className='row'>
                  <div className='col-md-12  my-4'>
                    <Form onSubmit={this.handleSubmit} className='row'>
                      <Form.Group className='col-sm-6'>
                        <Form.Label className='floating-label'>
                          Category Name<span className={'mandatory'}>*</span>
                          &nbsp;
                        </Form.Label>
                        <InputGroup>
                          <input
                            type={'text'}
                            name={'categoryName'}
                            value={categoryName}
                            className={'form-control floating-input'}
                            placeholder={' '}
                            onChange={this.handleChange}
                          />
                        </InputGroup>
                        <div className={'text-danger error-text'}>
                          {errors && errors.categoryName}
                        </div>
                      </Form.Group>
                      <Col xs='12' className='text-right'>
                        <Button
                          variant="button"
                          className="btn btn-danger"
                          onClick={() => {
                            this.props.history.push(AppRoutes.PRESS_RELEASE_CATEGORY);
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
  pressReleaseCategoryReducer: state.pressReleaseCategoryReducer,
});

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    addPressReleaseCategory: (data: any) => {
      dispatch(addPressReleaseCategoryRequest(data));
    },
    viewPressReleaseCategory: (data: IPressReleaseCategoryData) => {
      dispatch(pressReleaseCategoryInfoRequest(data));
    },
    updatePressReleaseCategory: (data: any) => {
      dispatch(updatePressReleaseCategoryRequest(data));
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(AddPressReleaseCategory);
