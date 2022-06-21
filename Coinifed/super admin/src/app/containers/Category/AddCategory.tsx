import React, { Component } from 'react';
import { Button, Card, Row, Col, Form, InputGroup } from 'react-bootstrap';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { IAddCategoryState, IAddCategoryProps, IRootState, ICategoryData } from '../../../interfaces';
import { AppRoutes, AcceptedImageFormat } from '../../../config';
import { addCategoryRequest, categoryInfoRequest, updateCategoryRequest } from '../../../actions';
import { categoryValidator } from '../../../validator';
import { Editor } from "react-draft-wysiwyg";
import { EditorState, convertToRaw, ContentState } from "draft-js";
import draftToHtml from 'draftjs-to-html';
import htmlToDraft from 'html-to-draftjs';
import { ImageURL } from "../../../config/AppConfig";
import defaultImage from "../../../assets/img/default_image.jpg";
import certificateDemo from "../../../assets/img/certificate_demo.png";


class AddCategory extends Component<IAddCategoryProps, IAddCategoryState> {
  constructor(props: IAddCategoryProps) {
    super(props);
    this.state = {
      title: "",
      subTitle: "",
      topicName: "",
      media: "",
      bannerImage: "",
      dropBannerImage: false,
      dropBodySectionImage1: false,
      dropBodySectionImage2: false,
      dropBodySectionImage3: false,
      dropBodySectionImage4: false,
      dropcertificateImage: false,
      description: "",
      bodySection1: "",
      bodySection2: "",
      bodySection3: "",
      bodySection4: "",
      bodySectionImage1: "",
      bodySectionImage2: "",
      bodySectionImage3: "",
      bodySectionImage4: "",
      certificateImage: "",
      bannerImageUrl: "",
      bodySectionImageUrl1: "",
      bodySectionImageUrl2: "",
      bodySectionImageUrl3: "",
      bodySectionImageUrl4: "",
      certificateImageUrl5: "",
      isActive: true,
      errors: {
        title: "",
        subTitle: "",
        topicName: "",
        media: "",
        bannerImage: "",
        description: "",
        bodySection1: "",
        bodySection2: "",
        bodySection3: "",
        bodySection4: "",
        bodySectionImage1: "",
        bodySectionImage2: "",
        bodySectionImage3: "",
        bodySectionImage4: "",
        certificateImage: "",
      },
      isEditable: false,
      id: "",
      editorState: EditorState.createEmpty(),
      editorState1: EditorState.createEmpty(),
      editorState2: EditorState.createEmpty(),
      editorState3: EditorState.createEmpty(),
      editorState4: EditorState.createEmpty(),
    };
  }

  componentDidMount = () => {
    const data = this.props.match.params as any;
    if (data.id) {
      this.props.viewCategory(data);
      this.setState({
        isEditable: true,
      });
    }
  };

  componentDidUpdate = (prevProps: IAddCategoryProps) => {
    const { categoryReducer } = prevProps;
    const data = this.props.match.params as any;
    if (
      categoryReducer.isLoading !== this.props.categoryReducer.isLoading &&
      this.props.categoryReducer.categoryInfo &&
      data.id
    ) {
      const { categoryInfo } = this.props.categoryReducer;

      const {
        title,
        subTitle,
        topicName,
        media,
        description,
        bodySection1,
        bodySection2,
        bodySection3,
        bodySection4,
        bannerImage,
        bodySectionImage1,
        bodySectionImage2,
        bodySectionImage3,
        bodySectionImage4,
        certificateImage,
        _id,
      } = categoryInfo;

      const contentBlock = htmlToDraft(description ? description : "<p></p>");
      const contentState = ContentState.createFromBlockArray(
        contentBlock.contentBlocks
      );
      const mainSectioncontent = EditorState.createWithContent(contentState);

      const contentBlock1 = htmlToDraft(
        bodySection1 ? bodySection1 : "<p></p>"
      );
      const contentState1 = ContentState.createFromBlockArray(
        contentBlock1.contentBlocks
      );
      const mainSectioncontent1 = EditorState.createWithContent(contentState1);

      const contentBlock2 = htmlToDraft(
        bodySection2 ? bodySection2 : "<p></p>"
      );
      const contentState2 = ContentState.createFromBlockArray(
        contentBlock2.contentBlocks
      );
      const mainSectioncontent2 = EditorState.createWithContent(contentState2);

      const contentBlock3 = htmlToDraft(
        bodySection3 ? bodySection3 : "<p></p>"
      );
      const contentState3 = ContentState.createFromBlockArray(
        contentBlock3.contentBlocks
      );
      const mainSectioncontent3 = EditorState.createWithContent(contentState3);

      const contentBlock4 = htmlToDraft(
        bodySection4 ? bodySection4 : "<p></p>"
      );
      const contentState4 = ContentState.createFromBlockArray(
        contentBlock4.contentBlocks
      );
      const mainSectioncontent4 = EditorState.createWithContent(contentState4);

      this.setState({
        title,
        subTitle,
        topicName,
        media,
        description,
        bodySection1,
        bodySection2,
        bodySection3,
        bodySection4,
        bannerImageUrl: bannerImage,
        bodySectionImageUrl1: bodySectionImage1,
        bodySectionImageUrl2: bodySectionImage2,
        bodySectionImageUrl3: bodySectionImage3,
        bodySectionImageUrl4: bodySectionImage4,
        certificateImage,
        certificateImageUrl5: certificateImage,
        editorState: mainSectioncontent,
        editorState1: mainSectioncontent1,
        editorState2: mainSectioncontent2,
        editorState3: mainSectioncontent3,
        editorState4: mainSectioncontent4,
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

  handleChangeEditor = (editorState: any) => {
    this.setState({
      editorState,
      description: draftToHtml(convertToRaw(editorState.getCurrentContent())),
    });
  };
  handleChangeEditor1 = (editorState1: any) => {
    this.setState({
      editorState1,
      bodySection1: draftToHtml(convertToRaw(editorState1.getCurrentContent())),
    });
  };
  handleChangeEditor2 = (editorState2: any) => {
    this.setState({
      editorState2,
      bodySection2: draftToHtml(convertToRaw(editorState2.getCurrentContent())),
    });
  };
  handleChangeEditor3 = (editorState3: any) => {
    this.setState({
      editorState3,
      bodySection3: draftToHtml(convertToRaw(editorState3.getCurrentContent())),
    });
  };
  handleChangeEditor4 = (editorState4: any) => {
    this.setState({
      editorState4,
      bodySection4: draftToHtml(convertToRaw(editorState4.getCurrentContent())),
    });
  };

  handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const {
      title,
      subTitle,
      topicName,
      media,
      bannerImage,
      dropBannerImage,
      dropBodySectionImage1,
      dropBodySectionImage2,
      dropBodySectionImage3,
      dropBodySectionImage4,
      description,
      bodySection1,
      bodySection2,
      bodySection3,
      bodySection4,
      bodySectionImage1,
      bodySectionImage2,
      bodySectionImage3,
      bodySectionImage4,
      certificateImage,
      isEditable,
      id,
    } = this.state;

    const data = {
      title,
      subTitle,
      topicName,
      media,
      bannerImage,
      dropBannerImage,
      dropBodySectionImage1,
      dropBodySectionImage2,
      dropBodySectionImage3,
      dropBodySectionImage4,
      description,
      bodySection1,
      bodySection2,
      bodySection3,
      bodySection4,
      bodySectionImage1,
      bodySectionImage2,
      bodySectionImage3,
      bodySectionImage4,
      certificateImage,
      _id: id,
    };

    // To validate form fields
    const { isValid, errors } = categoryValidator({
      ...data,
      certificateImage: data.certificateImage ? "certificateImage" : "",
    });

    if (isValid) {
      if (isEditable) {
        this.props.updateCategory({ ...data });
      } else {
        this.props.addCategory(data);
      }
    } else {
      this.setState({
        errors,
      });
      return;
    }
  };

  /**
   * Upload Section Image
   */
  uploadImage = (
    e: React.ChangeEvent<HTMLInputElement | HTMLImageElement | any>
  ) => {
    if (e.target.files.length === 0) return;

    if (AcceptedImageFormat.indexOf(e.target.files[0].type) === -1) {
      this.setState({
        errors: {
          ...this.state.errors,
          bannerImage:
            "Uploaded file is not a valid image. Only JPG, PNG and GIF files are allowed",
        },
      });
      return;
    }
    let reader = new FileReader();
    let file = e.target.files[0];

    reader.onloadend = () => {
      this.setState({
        bannerImage: file,
        bannerImageUrl: reader.result,
        dropBannerImage: false,
      });
    };
    reader.readAsDataURL(file);
    e.target.value = null;
  };
  removeImage = () => {
    this.setState({
      ...this.state,
      bannerImage: "",
      bannerImageUrl: "",
      dropBannerImage: true,
    });
  };

  /**
   * Upload Section Image
   */
  uploadImage1 = (
    e: React.ChangeEvent<HTMLInputElement | HTMLImageElement | any>
  ) => {
    if (e.target.files.length === 0) return;

    if (AcceptedImageFormat.indexOf(e.target.files[0].type) === -1) {
      this.setState({
        errors: {
          ...this.state.errors,
          bannerImage:
            "Uploaded file is not a valid image. Only JPG, PNG and GIF files are allowed",
        },
      });
      return;
    }
    let reader = new FileReader();
    let file = e.target.files[0];

    reader.onloadend = () => {
      this.setState({
        bodySectionImage1: file,
        bodySectionImageUrl1: reader.result,
        dropBodySectionImage1: false,
      });
    };
    reader.readAsDataURL(file);
  };
  removeImage1 = () => {
    this.setState({
      ...this.state,
      bodySectionImage1: "",
      bodySectionImageUrl1: "",
      dropBodySectionImage1: true,
    });
  };
  /**
   * Upload Section Image
   */
  uploadImage2 = (
    e: React.ChangeEvent<HTMLInputElement | HTMLImageElement | any>
  ) => {
    if (e.target.files.length === 0) return;

    if (AcceptedImageFormat.indexOf(e.target.files[0].type) === -1) {
      this.setState({
        errors: {
          ...this.state.errors,
          bannerImage:
            "Uploaded file is not a valid image. Only JPG, PNG and GIF files are allowed",
        },
      });
      return;
    }
    let reader = new FileReader();
    let file = e.target.files[0];

    reader.onloadend = () => {
      this.setState({
        bodySectionImage2: file,
        bodySectionImageUrl2: reader.result,
        dropBodySectionImage2: false,
      });
    };
    reader.readAsDataURL(file);
  };
  removeImage2 = () => {
    this.setState({
      ...this.state,
      bodySectionImage2: "",
      bodySectionImageUrl2: "",
      dropBodySectionImage2: true,
    });
  };
  /**
   * Upload Section Image
   */
  uploadImage3 = (
    e: React.ChangeEvent<HTMLInputElement | HTMLImageElement | any>
  ) => {
    if (e.target.files.length === 0) return;

    if (AcceptedImageFormat.indexOf(e.target.files[0].type) === -1) {
      this.setState({
        errors: {
          ...this.state.errors,
          bannerImage:
            "Uploaded file is not a valid image. Only JPG, PNG and GIF files are allowed",
        },
      });
      return;
    }
    let reader = new FileReader();
    let file = e.target.files[0];

    reader.onloadend = () => {
      this.setState({
        bodySectionImage3: file,
        bodySectionImageUrl3: reader.result,
        dropBodySectionImage3: false,
      });
    };
    reader.readAsDataURL(file);
  };
  removeImage3 = () => {
    this.setState({
      ...this.state,
      bodySectionImage3: "",
      bodySectionImageUrl3: "",
      dropBodySectionImage3: true,
    });
  };
  /**
   * Upload Section Image
   */
  uploadImage4 = (
    e: React.ChangeEvent<HTMLInputElement | HTMLImageElement | any>
  ) => {
    if (e.target.files.length === 0) return;

    if (AcceptedImageFormat.indexOf(e.target.files[0].type) === -1) {
      this.setState({
        errors: {
          ...this.state.errors,
          bannerImage:
            "Uploaded file is not a valid image. Only JPG, PNG and GIF files are allowed",
        },
      });
      return;
    }
    let reader = new FileReader();
    let file = e.target.files[0];

    reader.onloadend = () => {
      this.setState({
        bodySectionImage4: file,
        bodySectionImageUrl4: reader.result,
        dropBodySectionImage4: false,
      });
    };
    reader.readAsDataURL(file);
  };
  removeImage4 = () => {
    this.setState({
      ...this.state,
      bodySectionImage4: "",
      bodySectionImageUrl4: "",
      dropBodySectionImage4: true,
    });
  };
  /**
   * Upload Section Image
   */
  uploadImage5 = (
    e: React.ChangeEvent<HTMLInputElement | HTMLImageElement | any>
  ) => {
    if (e.target.files.length === 0) return;

    if (AcceptedImageFormat.indexOf(e.target.files[0].type) === -1) {
      this.setState({
        errors: {
          ...this.state.errors,
          bannerImage:
            "Uploaded file is not a valid image. Only JPG, PNG and GIF files are allowed",
        },
      });
      return;
    }
    let reader = new FileReader();
    let file = e.target.files[0];

    reader.onloadend = () => {
      this.setState({
        certificateImage: file,
        certificateImageUrl5: reader.result,
        dropcertificateImage: false,
      });
    };
    reader.readAsDataURL(file);
  };
  removeImage5 = () => {
    this.setState({
      ...this.state,
      certificateImage: "",
      certificateImageUrl5: "",
      dropcertificateImage: true,
    });
  };

  render() {
    const {
      title,
      subTitle,
      topicName,
      media,
      bannerImageUrl,
      bodySectionImageUrl1,
      bodySectionImageUrl2,
      bodySectionImageUrl3,
      bodySectionImageUrl4,
      certificateImageUrl5,
      errors,
      isEditable,
    } = this.state;
    const toolbar = {
      options: ["inline", "list", "textAlign", "blockType"],
      blockType: {
        inDropdown: true,
        options: ["Normal", "H1"],
      },
      inline: {
        inDropdown: false,
        options: ["bold", "italic", "underline"],
      },
      list: {
        inDropdown: false,
        options: ["unordered", "ordered"],
      },
      textAlign: { inDropdown: false },
    };
    return (
      <div className='cr-page px-3 min-height650 my-profile-section'>
        <Row>
          <Col xs='12' sm='12' lg='12'>
            <Card>
              <Card.Header>
                <h4>
                  <i className='icon-note' />
                  &nbsp;{!isEditable ? "Add" : "Update"} Category
                </h4>
              </Card.Header>
              <Card.Body>
                <div className='row'>
                  <div className='col-md-12  my-4'>
                    <Form onSubmit={this.handleSubmit} className='row'>
                      <Form.Group className='col-sm-6'>
                        <Form.Label className='floating-label'>
                          Category Name<span className={"mandatory"}>*</span>
                          &nbsp;
                        </Form.Label>
                        <InputGroup>
                          <input
                            type={"text"}
                            name={"topicName"}
                            value={topicName}
                            className={"form-control floating-input"}
                            placeholder={" "}
                            onChange={this.handleChange}
                          />
                        </InputGroup>
                        <div className={"text-danger error-text"}>
                          {errors && errors.topicName}
                        </div>
                      </Form.Group>
                      <Form.Group className='col-sm-6'>
                        <Form.Label className='floating-label'>
                          Title<span className={"mandatory"}>*</span>
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

                      <Form.Group className='col-sm-6'>
                        <Form.Label className='floating-label'>
                          Sub Title<span className={"mandatory "}>*</span>
                          &nbsp;
                        </Form.Label>
                        <InputGroup>
                          <input
                            type={"text"}
                            name={"subTitle"}
                            value={subTitle}
                            className={"form-control floating-input"}
                            placeholder={" "}
                            onChange={this.handleChange}
                          />
                        </InputGroup>
                        <div className={"text-danger error-text"}>
                          {errors && errors.subTitle}
                        </div>
                      </Form.Group>
                      <Form.Group className='col-sm-6'>
                        <Form.Label className='floating-label'>
                          Media<span className={"mandatory"}>*</span>
                          &nbsp;
                        </Form.Label>
                        <InputGroup>
                          <input
                            type={"media"}
                            name={"media"}
                            value={media}
                            className={"form-control floating-input"}
                            placeholder={" "}
                            onChange={this.handleChange}
                          />
                        </InputGroup>
                        <div className={"text-danger error-text"}>
                          {errors && errors.media}
                        </div>
                      </Form.Group>
                      <Form.Group className='col-sm-8'>
                        <Form.Label className='floating-label'>
                          Description<span className={"mandatory"}>*</span>
                          &nbsp;
                        </Form.Label>
                        <Editor
                          toolbar={toolbar}
                          toolbarClassName='toolbarClassName'
                          wrapperClassName='demo-wrapper'
                          editorClassName='demo-home-editor'
                          editorState={this.state.editorState}
                          onEditorStateChange={this.handleChangeEditor}
                        />
                        <div className={"text-danger error-text"}>
                          {errors && errors.description}
                        </div>
                      </Form.Group>
                      <Form.Group className='col-sm-4'>
                        <Form.Label className='floating-label'>
                          Banner Image&nbsp; (Resolution 350px * 300px)
                        </Form.Label>
                        <div
                          className='fileinput-preview'
                          style={{ width: "auto" }}
                        >
                          <img
                            src={
                              bannerImageUrl
                                ? bannerImageUrl.startsWith("data")
                                  ? bannerImageUrl
                                  : `${ImageURL}/${bannerImageUrl}`
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
                              onChange={this.uploadImage}
                              id={`feature-image`}
                            />
                          </div>
                          {this.state.bannerImage ||
                          this.state.bannerImageUrl ? (
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
                          {errors && errors.bannerImage}
                        </div>
                      </Form.Group>
                      <Form.Group className='col-sm-8'>
                        <Form.Label className='floating-label'>
                          Section 1<span className={"mandatory"}>*</span>
                          &nbsp;
                        </Form.Label>
                        <Editor
                          toolbar={toolbar}
                          toolbarClassName='toolbarClassName'
                          wrapperClassName='demo-wrapper'
                          editorClassName='demo-home-editor'
                          editorState={this.state.editorState1}
                          onEditorStateChange={this.handleChangeEditor1}
                        />
                        <div className={"text-danger error-text"}>
                          {errors && errors.bodySection1}
                        </div>
                      </Form.Group>
                      <Form.Group className='col-sm-4'>
                        <Form.Label className='floating-label'>
                          &nbsp;
                        </Form.Label>
                        <div
                          className='fileinput-preview'
                          style={{ width: "auto" }}
                        >
                          <img
                            src={
                              bodySectionImageUrl1
                                ? bodySectionImageUrl1.startsWith("data")
                                  ? bodySectionImageUrl1
                                  : `${ImageURL}/${bodySectionImageUrl1}`
                                : defaultImage
                            }
                            alt={""}
                          />
                          <div className='file-upload'>
                            <label
                              htmlFor={`feature-image1`}
                              className='file-upload-label'
                            >
                              Choose Image
                            </label>
                            <input
                              className='file-upload-input'
                              type='file'
                              accept='image/*'
                              onChange={this.uploadImage1}
                              id={`feature-image1`}
                            />
                          </div>
                          {this.state.bodySectionImage1 ||
                          this.state.bodySectionImageUrl1 ? (
                            <div className='remove_icon_wrapper'>
                              <i
                                className='fa fa-trash-o trash_icon'
                                onClick={this.removeImage1}
                                aria-hidden='true'
                              />
                            </div>
                          ) : null}
                        </div>
                        <div className={"text-danger error-text"}>
                          {errors && errors.bodySectionImage1}
                        </div>
                      </Form.Group>
                      <Form.Group className='col-sm-8'>
                        <Form.Label className='floating-label'>
                          Section 2<span className={"mandatory"}>*</span>
                          &nbsp;
                        </Form.Label>
                        <Editor
                          toolbar={toolbar}
                          toolbarClassName='toolbarClassName'
                          wrapperClassName='demo-wrapper'
                          editorClassName='demo-home-editor'
                          editorState={this.state.editorState2}
                          onEditorStateChange={this.handleChangeEditor2}
                        />
                        <div className={"text-danger error-text"}>
                          {errors && errors.bodySection2}
                        </div>
                      </Form.Group>
                      <Form.Group className='col-sm-4'>
                        <Form.Label className='floating-label'>
                          &nbsp;
                        </Form.Label>
                        <div
                          className='fileinput-preview'
                          style={{ width: "auto" }}
                        >
                          <img
                            src={
                              bodySectionImageUrl2
                                ? bodySectionImageUrl2.startsWith("data")
                                  ? bodySectionImageUrl2
                                  : `${ImageURL}/${bodySectionImageUrl2}`
                                : defaultImage
                            }
                            alt={""}
                          />
                          <div className='file-upload'>
                            <label
                              htmlFor={`feature-image2`}
                              className='file-upload-label'
                            >
                              Choose Image
                            </label>
                            <input
                              className='file-upload-input'
                              type='file'
                              accept='image/*'
                              onChange={this.uploadImage2}
                              id={`feature-image2`}
                            />
                          </div>
                          {this.state.bodySectionImage2 ||
                          this.state.bodySectionImageUrl2 ? (
                            <div className='remove_icon_wrapper'>
                              <i
                                className='fa fa-trash-o trash_icon'
                                onClick={this.removeImage2}
                                aria-hidden='true'
                              />
                            </div>
                          ) : null}
                        </div>
                        <div className={"text-danger error-text"}>
                          {errors && errors.bodySectionImage2}
                        </div>
                      </Form.Group>
                      <Form.Group className='col-sm-8'>
                        <Form.Label className='floating-label'>
                          Section 3<span className={"mandatory"}>*</span>
                          &nbsp;
                        </Form.Label>
                        <Editor
                          toolbar={toolbar}
                          toolbarClassName='toolbarClassName'
                          wrapperClassName='demo-wrapper'
                          editorClassName='demo-home-editor'
                          editorState={this.state.editorState3}
                          onEditorStateChange={this.handleChangeEditor3}
                        />
                        <div className={"text-danger error-text"}>
                          {errors && errors.bodySection3}
                        </div>
                      </Form.Group>
                      <Form.Group className='col-sm-4'>
                        <Form.Label className='floating-label'>
                          &nbsp;
                        </Form.Label>
                        <div
                          className='fileinput-preview'
                          style={{ width: "auto" }}
                        >
                          <img
                            src={
                              bodySectionImageUrl3
                                ? bodySectionImageUrl3.startsWith("data")
                                  ? bodySectionImageUrl3
                                  : `${ImageURL}/${bodySectionImageUrl3}`
                                : defaultImage
                            }
                            alt={""}
                          />
                          <div className='file-upload'>
                            <label
                              htmlFor={`feature-image3`}
                              className='file-upload-label'
                            >
                              Choose Image
                            </label>
                            <input
                              className='file-upload-input'
                              type='file'
                              accept='image/*'
                              onChange={this.uploadImage3}
                              id={`feature-image3`}
                            />
                          </div>
                          {this.state.bodySectionImage3 ||
                          this.state.bodySectionImageUrl3 ? (
                            <div className='remove_icon_wrapper'>
                              <i
                                className='fa fa-trash-o trash_icon'
                                onClick={this.removeImage3}
                                aria-hidden='true'
                              />
                            </div>
                          ) : null}
                        </div>
                        <div className={"text-danger error-text"}>
                          {errors && errors.bodySectionImage3}
                        </div>
                      </Form.Group>
                      <Form.Group className='col-sm-8'>
                        <Form.Label className='floating-label'>
                          Section 4<span className={"mandatory"}>*</span>
                          &nbsp;
                        </Form.Label>
                        <Editor
                          toolbar={toolbar}
                          toolbarClassName='toolbarClassName'
                          wrapperClassName='demo-wrapper'
                          editorClassName='demo-home-editor'
                          editorState={this.state.editorState4}
                          onEditorStateChange={this.handleChangeEditor4}
                        />
                        <div className={"text-danger error-text"}>
                          {errors && errors.bodySection4}
                        </div>
                      </Form.Group>
                      <Form.Group className='col-sm-4'>
                        <Form.Label className='floating-label'>
                          &nbsp;
                        </Form.Label>
                        <div
                          className='fileinput-preview'
                          style={{ width: "auto" }}
                        >
                          <img
                            src={
                              bodySectionImageUrl4
                                ? bodySectionImageUrl4.startsWith("data")
                                  ? bodySectionImageUrl4
                                  : `${ImageURL}/${bodySectionImageUrl4}`
                                : defaultImage
                            }
                            alt={""}
                          />
                          <div className='file-upload'>
                            <label
                              htmlFor={`feature-image4`}
                              className='file-upload-label'
                            >
                              Choose Image
                            </label>
                            <input
                              className='file-upload-input'
                              type='file'
                              accept='image/*'
                              onChange={this.uploadImage4}
                              id={`feature-image4`}
                            />
                          </div>
                          {this.state.bodySectionImage4 ||
                          this.state.bodySectionImageUrl4 ? (
                            <div className='remove_icon_wrapper'>
                              <i
                                className='fa fa-trash-o trash_icon'
                                onClick={this.removeImage4}
                                aria-hidden='true'
                              />
                            </div>
                          ) : null}
                        </div>
                        <div className={"text-danger error-text"}>
                          {errors && errors.bodySectionImage4}
                        </div>
                      </Form.Group>
                      <Form.Group className='col-sm-8'>
                        <Form.Label className='floating-label'>
                          Certificate Image (Please upload editable image and
use only JPG & PNG format, Resolution 2084 * 2084, <a href={certificateDemo} target='_blank'>See example</a>)

                          <span className={"mandatory"}>*</span>
                          &nbsp;
                        </Form.Label>

                        <div
                          className='fileinput-preview'
                          style={{ width: "auto" }}
                        >
                          <img
                            src={
                              certificateImageUrl5
                                ? certificateImageUrl5.startsWith("data")
                                  ? certificateImageUrl5
                                  : `${ImageURL}/${certificateImageUrl5}`
                                : defaultImage
                            }
                            alt={""}
                          />
                          <div className='file-upload'>
                            <label
                              htmlFor={`feature-image5`}
                              className='file-upload-label'
                            >
                              Choose Image
                            </label>
                            <input
                              className='file-upload-input'
                              type='file'
                              accept='image/*'
                              name='certificateImage'
                              onChange={this.uploadImage5}
                              id={`feature-image5`}
                            />
                          </div>
                          {this.state.certificateImageUrl5 ||
                          this.state.certificateImageUrl5 ? (
                            <div className='remove_icon_wrapper'>
                              <i
                                className='fa fa-trash-o trash_icon'
                                onClick={this.removeImage5}
                                aria-hidden='true'
                              />
                            </div>
                          ) : null}
                        </div>
                        <div className={"text-danger error-text"}>
                          {errors && errors.certificateImage}
                        </div>
                      </Form.Group>

                      <Col xs='12' className='text-right'>
                        <Button
                          variant='button'
                          className='btn btn-danger'
                          onClick={() => {
                            this.props.history.push(AppRoutes.CATEGORY);
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
  categoryReducer: state.categoryReducer,
});

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    addCategory: (data: any) => {
      dispatch(addCategoryRequest(data));
    },
    viewCategory: (data: ICategoryData) => {
      dispatch(categoryInfoRequest(data));
    },
    updateCategory: (data: any) => {
      dispatch(updateCategoryRequest(data));
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(AddCategory);
