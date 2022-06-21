import React, { useState, useEffect, useRef } from "react";
import { Button, Card, Row, Col, Form, InputGroup } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";

import { EditorState, convertToRaw, ContentState } from "draft-js";
import draftToHtml from "draftjs-to-html";
import { enterprisePageValidator } from "../../../validator";
import {
  viewFrontendPagesRequest,
  editEnterprisePagesRequest,
} from "../../../actions";

import htmlToDraft from "html-to-draftjs";
import { Editor } from "react-draft-wysiwyg";
import { ImageURL } from "../../../config/AppConfig";
import defaultImage from "../../../assets/img/default_image.jpg";

const EditCertificationPage = (props: any) => {
  const imgRef1 = useRef<HTMLInputElement>(null);
  const imgRef2 = useRef<HTMLInputElement>(null);
  const dispatch = useDispatch();

  const defaultForm: any = {
    blockTitle1: "",
    blockImage1: "",
    block1: "",
    blockTitle2: "",
    blockImage2: "",
    block2: "",
    blockTitle4: "",
    block3: "",
    blockTitle5: "",
    block4: "",
    editorState1: EditorState.createEmpty(),
    editorState2: EditorState.createEmpty(),
    editorState3: EditorState.createEmpty(),
    editorState4: EditorState.createEmpty(),
    id: props.match.params.id,
  };
  const defaultError = {
    blockTitle1: "",
    blockImage1: "",
    block1: "",
    blockTitle2: "",
    blockImage2: "",
    block2: "",
    blockTitle4: "",
    block3: "",
    blockTitle5: "",
    block4: "",
  };
  const [form, setForm] = useState(defaultForm);
  const [error, setError] = useState(defaultError);

  useEffect(() => {
    dispatch(viewFrontendPagesRequest(defaultForm.id));
  }, []);

  const { frontendTemplateView } = useSelector(
    (state: any) => state.FrontendPagesReducer
  );
  useEffect(() => {
    if (frontendTemplateView) {
      // For One Text editor
      const contentBlock1 = htmlToDraft(
        frontendTemplateView.block1 ? frontendTemplateView.block1 : "<p></p>"
      );
      const contentState1 = ContentState.createFromBlockArray(
        contentBlock1.contentBlocks
      );
      const mainSectionContent1 = EditorState.createWithContent(contentState1);
      // For Two Text editor
      const contentBlock2 = htmlToDraft(
        frontendTemplateView.block2 ? frontendTemplateView.block2 : "<p></p>"
      );
      const contentState2 = ContentState.createFromBlockArray(
        contentBlock2.contentBlocks
      );
      const mainSectionContent2 = EditorState.createWithContent(contentState2);
      // For Three Text editor
      const contentBlock3 = htmlToDraft(
        frontendTemplateView.block3 ? frontendTemplateView.block3 : "<p></p>"
      );
      const contentState3 = ContentState.createFromBlockArray(
        contentBlock3.contentBlocks
      );
      const mainSectionContent3 = EditorState.createWithContent(contentState3);

      // For Four Text editor
      const contentBlock4 = htmlToDraft(
        frontendTemplateView.block4 ? frontendTemplateView.block4 : "<p></p>"
      );
      const contentState4 = ContentState.createFromBlockArray(
        contentBlock4.contentBlocks
      );
      const mainSectionContent4 = EditorState.createWithContent(contentState4);

      setForm({
        ...form,
        blockTitle1: frontendTemplateView.blockTitle1,
        blockImage1: frontendTemplateView.blockImage1,
        block1: frontendTemplateView.block1,
        blockTitle2: frontendTemplateView.blockTitle2,
        blockImage2: frontendTemplateView.blockImage2,
        block2: frontendTemplateView.block2,
        blockTitle4: frontendTemplateView.blockTitle4,
        block3: frontendTemplateView.block3,
        blockTitle5: frontendTemplateView.blockTitle5,
        block4: frontendTemplateView.block4,

        editorState1: mainSectionContent1,
        editorState2: mainSectionContent2,
        editorState3: mainSectionContent3,
        editorState4: mainSectionContent4,
      });
      // For set Preview
      setImagePreview({
        ...imagePreview,
        blockImage1: frontendTemplateView.blockImage1,
        blockImage2: frontendTemplateView.blockImage2,
      });
    }
  }, [frontendTemplateView]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setForm({ ...form, [name]: value });
    setError({ ...error, [name]: "" });
  };

  const handleChangeEditor1 = (editorState1: any) => {
    setForm({
      ...form,
      editorState1,
      block1: draftToHtml(convertToRaw(editorState1.getCurrentContent())),
    });
    setError({
      ...error,
      block1: "",
    });
  };
  const handleChangeEditor2 = (editorState2: any) => {
    setForm({
      ...form,
      editorState2,
      block2: draftToHtml(convertToRaw(editorState2.getCurrentContent())),
    });
    setError({
      ...error,
      block2: "",
    });
  };
  const handleChangeEditor3 = (editorState3: any) => {
    setForm({
      ...form,
      editorState3,
      block3: draftToHtml(convertToRaw(editorState3.getCurrentContent())),
    });
    setError({
      ...error,
      block3: "",
    });
  };
  const handleChangeEditor4 = (editorState4: any) => {
    setForm({
      ...form,
      editorState4,
      block4: draftToHtml(convertToRaw(editorState4.getCurrentContent())),
    });
    setError({
      ...error,
      block4: "",
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // To validate form fields
    const { isValid, errors } = enterprisePageValidator({
      ...form,
      blockImage1: form.blockImage1 ? "blockImage1" : "",
      blockImage2: form.blockImage2 ? "blockImage2" : "",
    });
    if (isValid) {
      dispatch(
        editEnterprisePagesRequest({
          ...form,
          props,
        })
      );
    } else {
      setError({ ...error, ...errors });
      return;
    }
  };
  // For image Preview
  const imageList = {
    blockImage1: "",
    blockImage2: "",
  };
  const [imagePreview, setImagePreview] = useState(imageList);
  const handleFile = (e: any) => {
    let file = e.target.files[0];
    let fileName = e.target.name;
    setForm({ ...form, [e.target.name]: file });
    setError({ ...error, [fileName]: "" });
    // For Preview
    let reader: any = new FileReader();
    reader.onloadend = () => {
      setImagePreview({ ...imagePreview, [fileName]: reader.result });
    };
    reader.readAsDataURL(file);
  };
  // For Image Remove
  const removeImage = (event: string) => {
    setImagePreview({ ...imagePreview, [event]: "" });
    setForm({ ...form, [event]: "" });
    let selectFile1: any = imgRef1.current;
    let selectFile2: any = imgRef2.current;
    selectFile1.value = "";
    selectFile2.value = "";
  };
  return (
    <div className='cr-page px-3 min-height650 my-profile-section'>
      <Row>
        <Col xs='12' sm='12' lg='12'>
          <Card>
            <Card.Header>
              <h4>
                <i className='icon-note' />
                Edit Certification Page
              </h4>
            </Card.Header>
            <Card.Body>
              <Form onSubmit={handleSubmit} className="custom-editor">
              <div className='cms-section'>
                  <h4 className='cms-title'>Block One</h4>
                  <div className='row'>
                    <Form.Group className='col-sm-6'>
                      <Form.Label className='floating-label'>
                        Title<span className={"mandatory"}>*</span>
                        &nbsp;
                      </Form.Label>
                      <InputGroup>
                        <input
                          type={"text"}
                          name={"blockTitle5"}
                          value={form.blockTitle5}
                          className={"form-control floating-input"}
                          placeholder={" "}
                          onChange={handleChange}
                        />
                      </InputGroup>
                      <div className={"text-danger error-text"}>
                        {error && error.blockTitle5}
                      </div>
                    </Form.Group>
                    <Form.Group className='col-sm-12'>
                      <Form.Label className='floating-label'>
                        Content
                        <span className={"mandatory"}>*</span>
                        &nbsp;
                      </Form.Label>
                      <Editor
                        toolbarClassName='toolbarClassName'
                        wrapperClassName='demo-wrapper'
                        editorClassName='demo-home-editor'
                        editorState={form.editorState4}
                        onEditorStateChange={handleChangeEditor4}
                      />
                      <div className={"text-danger error-text"}>
                        {error && error.block4}
                      </div>
                    </Form.Group>
                  </div>
                </div>

                <div className='cms-section'>
                  <h4 className='cms-title'>Block Two</h4>
                  <div className='row'>
                    <Form.Group className='col-sm-6'>
                      <Form.Label className='floating-label'>
                        Title<span className={"mandatory"}>*</span>
                        &nbsp;
                      </Form.Label>
                      <InputGroup>
                        <input
                          type={"text"}
                          name={"blockTitle1"}
                          value={form.blockTitle1}
                          className={"form-control floating-input"}
                          placeholder={" "}
                          onChange={handleChange}
                        />
                      </InputGroup>
                      <div className={"text-danger error-text"}>
                        {error && error.blockTitle1}
                      </div>
                    </Form.Group>
                  </div>
                  <div className='row'>
                    <Form.Group className='col-sm-6'>
                      <Form.Label className='floating-label'>
                        Upload Image
                      </Form.Label>
                      <InputGroup>
                        <div className='fileinput-preview team-img-upload'>
                          <img
                            src={
                              imagePreview.blockImage1
                                ? imagePreview.blockImage1.startsWith("data")
                                  ? imagePreview.blockImage1
                                  : `${ImageURL}/${imagePreview.blockImage1}`
                                : defaultImage
                            }
                            alt={"Profile Preview"}
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
                              ref={imgRef1}
                              name='blockImage1'
                              id={`feature-image1`}
                              onChange={handleFile}
                            />
                          </div>
                          {imagePreview.blockImage1 &&
                          imagePreview.blockImage1.length ? (
                            <div className='remove_icon_wrapper'>
                              <i
                                className='fa fa-trash-o trash_icon'
                                onClick={() => removeImage("blockImage1")}
                                aria-hidden='true'
                              />
                            </div>
                          ) : null}
                        </div>
                      </InputGroup>
                      <div className={"text-danger error-text"}>
                        {error && error.blockImage1}
                      </div>
                    </Form.Group>
                    <Form.Group className='col-sm-6'>
                      <Form.Label className='floating-label'>
                        Content
                        <span className={"mandatory"}>*</span>
                        &nbsp;
                      </Form.Label>
                      <Editor
                        toolbarClassName='toolbarClassName'
                        wrapperClassName='demo-wrapper'
                        editorClassName='demo-home-editor'
                        editorState={form.editorState1}
                        onEditorStateChange={handleChangeEditor1}
                      />
                      <div className={"text-danger error-text"}>
                        {error && error.block1}
                      </div>
                    </Form.Group>
                  </div>
                </div>
                <div className='cms-section'>
                  <h4 className='cms-title'>Block Three</h4>
                  <div className='row'>
                    <Form.Group className='col-sm-6'>
                      <Form.Label className='floating-label'>
                        Title<span className={"mandatory"}>*</span>
                        &nbsp;
                      </Form.Label>
                      <InputGroup>
                        <input
                          type={"text"}
                          name={"blockTitle2"}
                          value={form.blockTitle2}
                          className={"form-control floating-input"}
                          placeholder={" "}
                          onChange={handleChange}
                        />
                      </InputGroup>
                      <div className={"text-danger error-text"}>
                        {error && error.blockTitle2}
                      </div>
                    </Form.Group>
                  </div>
                  <div className='row'>
                    <Form.Group className='col-sm-6'>
                      <Form.Label className='floating-label'>
                        Content
                        <span className={"mandatory"}>*</span>
                        &nbsp;
                      </Form.Label>
                      <Editor
                        toolbarClassName='toolbarClassName'
                        wrapperClassName='demo-wrapper'
                        editorClassName='demo-home-editor'
                        editorState={form.editorState2}
                        onEditorStateChange={handleChangeEditor2}
                      />
                      <div className={"text-danger error-text"}>
                        {error && error.block2}
                      </div>
                    </Form.Group>
                    <Form.Group className='col-sm-6'>
                      <Form.Label className='floating-label'>
                        Upload Image
                      </Form.Label>
                      <InputGroup>
                        <div className='fileinput-preview team-img-upload'>
                          <img
                            src={
                              imagePreview.blockImage2
                                ? imagePreview.blockImage2.startsWith("data")
                                  ? imagePreview.blockImage2
                                  : `${ImageURL}/${imagePreview.blockImage2}`
                                : defaultImage
                            }
                            alt={"Profile Preview"}
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
                              ref={imgRef2}
                              name='blockImage2'
                              id={`feature-image2`}
                              onChange={handleFile}
                            />
                          </div>
                          {imagePreview.blockImage2 &&
                          imagePreview.blockImage2.length ? (
                            <div className='remove_icon_wrapper'>
                              <i
                                className='fa fa-trash-o trash_icon'
                                onClick={() => removeImage("blockImage2")}
                                aria-hidden='true'
                              />
                            </div>
                          ) : null}
                        </div>
                      </InputGroup>
                      <div className={"text-danger error-text"}>
                        {error && error.blockImage2}
                      </div>
                    </Form.Group>
                  </div>
                </div>
                <div className='cms-section'>
                  <h4 className='cms-title'>Block Four</h4>
                  <div className='row'>
                    <Form.Group className='col-sm-6'>
                      <Form.Label className='floating-label'>
                        Title<span className={"mandatory"}>*</span>
                        &nbsp;
                      </Form.Label>
                      <InputGroup>
                        <input
                          type={"text"}
                          name={"blockTitle4"}
                          value={form.blockTitle4}
                          className={"form-control floating-input"}
                          placeholder={" "}
                          onChange={handleChange}
                        />
                      </InputGroup>
                      <div className={"text-danger error-text"}>
                        {error && error.blockTitle4}
                      </div>
                    </Form.Group>
                    <Form.Group className='col-sm-12'>
                      <Form.Label className='floating-label'>
                        Content
                        <span className={"mandatory"}>*</span>
                        &nbsp;
                      </Form.Label>
                      <Editor
                        toolbarClassName='toolbarClassName'
                        wrapperClassName='demo-wrapper'
                        editorClassName='demo-home-editor'
                        editorState={form.editorState3}
                        onEditorStateChange={handleChangeEditor3}
                      />
                      <div className={"text-danger error-text"}>
                        {error && error.block3}
                      </div>
                    </Form.Group>
                  </div>
                </div>
                <div className='row'>
                  <Col xs='12' className='text-right'>
                    <Button
                      variant='button'
                      className='btn btn-danger'
                      onClick={() => {
                        props.history.go(-1);
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
                      Update
                    </Button>
                  </Col>
                </div>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default EditCertificationPage;
