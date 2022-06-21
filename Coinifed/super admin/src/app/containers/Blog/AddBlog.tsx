import React, { Component } from "react";
import { Button, Card, Row, Col, Form, InputGroup } from "react-bootstrap";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import {
  IAddBlogState,
  IAddBlogProps,
  IRootState,
  IBlogData,
  IBlogCategoryData,
} from "../../../interfaces";
import { AppRoutes, AcceptedImageFormat } from "../../../config";
import {
  addBlogRequest,
  blogInfoRequest,
  updateBlogRequest,
  getBlogCategoryRequest,
} from "../../../actions";
import { blogValidator } from "../../../validator";
import { Editor } from "react-draft-wysiwyg";
import draftToHtml from "draftjs-to-html";
import htmlToDraft from "html-to-draftjs";
import { EditorState, convertToRaw, ContentState } from "draft-js";
import { ImageURL } from "../../../config/AppConfig";
import defaultImage from "../../../assets/img/default_image.jpg";

class AddBlog extends Component<IAddBlogProps, IAddBlogState> {
  constructor(props: IAddBlogProps) {
    super(props);
    this.state = {
      category: "",
      title: "",
      description: "",
      metaTitle: "",
      metaDescriptin: "",
      metaKeyword: "",
      blogFeatureImageUrl: "",
      dropBlogFeatureImage:false,
      blogFeatureImage: "",
      errors: {
        category: "",
        title: "",
        description: "",
        blogFeatureImage: "",
      },
      isEditable: false,
      id: "",
      editorState1: EditorState.createEmpty(),
    };
  }

  componentDidMount = () => {
    const data = this.props.match.params as any;
    if (data.id) {
      this.props.viewBlog(data);
      this.setState({
        isEditable: true,
      });
    }
    this.props.getBlogCategory({ skip: 1, limit: "all" });
  };
  componentDidUpdate = (prevProps: IAddBlogProps) => {
    const { blogReducer } = prevProps;
    const data = this.props.match.params as any;
    if (
      blogReducer.isLoading !== this.props.blogReducer.isLoading &&
      this.props.blogReducer.blogInfo && data.id
    ) {
      const { blogInfo } = this.props.blogReducer;
      const {
        category,
        title,
        description,
        metaTitle,
        metaDescriptin,
        metaKeyword,
        blogFeatureImage,
        _id,
      } = blogInfo;

      const contentBlock = htmlToDraft(description ? description : "<p></p>");
      const contentState = ContentState.createFromBlockArray(
        contentBlock.contentBlocks
      );
      const mainSectioncontent = EditorState.createWithContent(contentState);

      this.setState({
        category,
        title,
        description,
        metaTitle,
        metaDescriptin,
        metaKeyword,
        id: _id ? _id : "",
        editorState1: mainSectioncontent,
        blogFeatureImageUrl: blogFeatureImage
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
      category,
      title,
      description,
      metaTitle,
      metaDescriptin,
      metaKeyword,
      id,
      isEditable,
      blogFeatureImage,
      dropBlogFeatureImage
    } = this.state;

    const data = {
      category,
      title,
      description,
      metaTitle,
      metaDescriptin,
      metaKeyword,
      blogFeatureImage,
      dropBlogFeatureImage,
      _id: id,
    };

    // To validate form fields
    const { isValid, errors } = blogValidator({
      ...data,
    });
    if (isValid) {
      if (isEditable) {
        this.props.updateBlog({ ...data });
      } else {
        this.props.addBlog(data);
      }
    } else {
      this.setState({
        errors,
      });
      return;
    }
  };

  handleChangeEditor1 = (editorState1: any) => {
    this.setState({
      editorState1,
      description: draftToHtml(convertToRaw(editorState1.getCurrentContent())),
    });
  };

  /**
   * Upload Why Section Image
   */
  uploadWhyImage = (
    e: React.ChangeEvent<HTMLInputElement | HTMLImageElement | any>
  ) => {
    if (e.target.files.length === 0) return;

    if (AcceptedImageFormat.indexOf(e.target.files[0].type) === -1) {
      this.setState({
        errors: {
          ...this.state.errors,
          blogFeatureImage:
            "Uploaded file is not a valid image. Only JPG, PNG and GIF files are allowed",
        },
      });
      return;
    }
    let reader = new FileReader();
    let file = e.target.files[0];

    reader.onloadend = () => {
      this.setState({
        blogFeatureImage: file,
        dropBlogFeatureImage:false,
        blogFeatureImageUrl: reader.result,
      });
    };
    reader.readAsDataURL(file);
    e.target.value=null
  };
  removeImage=()=>
  {
    this.setState(
      {
        ...this.state,
        dropBlogFeatureImage:true,
        blogFeatureImage:'',
        blogFeatureImageUrl:''
      }
    )
  }
  render() {
    const {
      category,
      title,
      metaTitle,
      metaDescriptin,
      metaKeyword,
      errors,
      isEditable,
      blogFeatureImageUrl,
      dropBlogFeatureImage
    } = this.state;

    return (
      <div className='cr-page px-3 min-height650 my-profile-section'>
        <Row>
          <Col xs='12' sm='12' lg='12'>
            <Card>
              <Card.Header>
                <h4>
                  <i className='icon-note' />
                  &nbsp;{!isEditable ? "Add" : "Update"} Blog
                </h4>
              </Card.Header>
              <Card.Body>
                <div className='row'>
                  <div className='col-md-12  my-4'>
                    <Form onSubmit={this.handleSubmit} className='row custom-editor blog-editor'>
                      <Form.Group className='col-sm-6'>
                        <Form.Label className='floating-label'>
                          Category<span className={"mandatory"}>*</span>
                          &nbsp;
                        </Form.Label>
                        <Form.Control
                          as='select'
                          aria-label='Select category'
                          name={"category"}
                          value={category}
                          onChange={this.handleChange}
                        >
                          <option value=''>Select category</option>
                          {this.props.blogCategoryReducer &&
                          this.props.blogCategoryReducer.blogCategoryData &&
                          this.props.blogCategoryReducer.blogCategoryData.length
                            ? this.props.blogCategoryReducer.blogCategoryData.map(
                                (item: IBlogCategoryData, index: number) => {
                                  return (
                                    <option value={item._id}>
                                      {item.categoryName}
                                    </option>
                                  );
                                }
                              )
                            : ""}
                        </Form.Control>
                        <div className={"text-danger error-text"}>
                          {errors && errors.category}
                        </div>
                      </Form.Group>

                      <Form.Group className='col-sm-6'>
                        <Form.Label className='floating-label'>
                          Title<span className={"mandatory "}>*</span>
                          &nbsp;
                        </Form.Label>
                        <InputGroup>
                          <input
                            type={"text"}
                            name={"title"}
                            value={title}
                            className={"form-control floating-input"}
                            placeholder={""}
                            onChange={this.handleChange}
                          />
                        </InputGroup>
                        <div className={"text-danger error-text"}>
                          {errors && errors.title}
                        </div>
                      </Form.Group>

                      <Form.Group className='col-sm-12'>
                        <Form.Label className='floating-label'>
                          Description<span className={"mandatory"}>*</span>
                          &nbsp;
                        </Form.Label>
                        <Editor
                          toolbarClassName='toolbarClassName'
                          wrapperClassName='demo-wrapper'
                          editorClassName='demo-home-editor'
                          editorState={this.state.editorState1}
                          onEditorStateChange={this.handleChangeEditor1}
                          toolbar={{
                            image:{ uploadEnabled: true ,urlEnabled: true, previewImage: true,},
                          }}
                        />
                        <div className={"text-danger error-text"}>
                          {errors && errors.description}
                        </div>
                      </Form.Group>
                      <Form.Group className='col-sm-6'>
                        <Form.Label className='floating-label'>
                          Meta Title &nbsp;
                        </Form.Label>
                        <InputGroup>
                          <input
                            type={"text"}
                            name={"metaTitle"}
                            value={metaTitle}
                            className={"form-control floating-input"}
                            placeholder={" "}
                            onChange={this.handleChange}
                          />
                        </InputGroup>
                      </Form.Group>
                      <Form.Group className='col-sm-6'>
                        <Form.Label className='floating-label'>
                          Meta Description &nbsp;
                        </Form.Label>
                        <InputGroup>
                          <input
                            type={"text"}
                            name={"metaDescriptin"}
                            value={metaDescriptin}
                            className={"form-control floating-input"}
                            placeholder={" "}
                            onChange={this.handleChange}
                          />
                        </InputGroup>
                      </Form.Group>
                      <Form.Group className='col-sm-6'>
                        <Form.Label className='floating-label'>
                          Meta Keyword &nbsp;
                        </Form.Label>
                        <InputGroup>
                          <input
                            type={"text"}
                            name={"metaKeyword"}
                            value={metaKeyword}
                            className={"form-control floating-input"}
                            placeholder={" "}
                            onChange={this.handleChange}
                          />
                        </InputGroup>
                      </Form.Group>
                      <Form.Group className='col-sm-6'>
                        <Form.Label className='floating-label'>
                          Feature Image &nbsp;
                        </Form.Label>
                        <div className='fileinput-preview'>
                          <img
                            src={
                              blogFeatureImageUrl
                                ? blogFeatureImageUrl.startsWith("data")
                                  ? blogFeatureImageUrl
                                  : `${ImageURL}/${blogFeatureImageUrl}`
                                : defaultImage
                            }
                            alt={""}
                          />
                          <div className='file-upload'>
                            <label
                              htmlFor={`feature-image`}
                              className='file-upload-label'
                            >
                              Choose Image
                            </label>
                            <input
                              className='file-upload-input'
                              type='file'
                              accept='image/*'
                              onChange={this.uploadWhyImage}
                              id={`feature-image`}
                            />
                          </div>
                          {this.state.blogFeatureImage ||
                          this.state.blogFeatureImageUrl ? (
                            <div className='remove_icon_wrapper'>
                              <i
                                className='fa fa-trash-o trash_icon'
                                onClick={this.removeImage}
                                aria-hidden='true'
                              />
                            </div>
                          ) : null}
                        </div>
                        <div className={"text-danger error-text"}>
                          {errors && errors.blogFeatureImage}
                        </div>
                      </Form.Group>
                      <Col xs='12' className='text-right'>
                        <Button
                          variant='button'
                          className='btn btn-danger'
                          onClick={() => {
                            this.props.history.push(AppRoutes.BLOG);
                          }}
                        >
                          {" "}
                          Cancel
                        </Button>
                        &nbsp;
                        <Button
                          variant='button'
                          type={"submit"}
                          className='btn btn-primary'
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
  blogReducer: state.blogReducer,
  blogCategoryReducer: state.blogCategoryReducer,
});

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    getBlogCategory: (data: any) => {
      dispatch(getBlogCategoryRequest(data));
    },
    addBlog: (data: any) => {
      dispatch(addBlogRequest(data));
    },
    viewBlog: (data: IBlogData) => {
      dispatch(blogInfoRequest(data));
    },
    updateBlog: (data: any) => {
      dispatch(updateBlogRequest(data));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AddBlog);
