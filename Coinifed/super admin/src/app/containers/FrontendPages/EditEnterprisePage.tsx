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

const EditEnterprisePage = (props: any) => {
  const ref1 = useRef<HTMLInputElement>(null);
  const ref2 = useRef<HTMLInputElement>(null);
  const ref3 = useRef<HTMLInputElement>(null);
  const ref5 = useRef<HTMLInputElement>(null);
  const ref6 = useRef<HTMLInputElement>(null);
  const ref7 = useRef<HTMLInputElement>(null);



  const dispatch = useDispatch();

  const defaultForm: any = {
    blockImage1: "",
    block1: "",
    blockImage2: "",
    block2: "",
    blockImage3: "",
    block3: "",
    blockTitle4: "",
    block4: "",
    blockTitle5: "",
    blockImage5: "",
    block5: "",
    blockImage6: "",
    block6: "",
    blockImage7: "",
    block7: "",

    editorState1: EditorState.createEmpty(),
    editorState2: EditorState.createEmpty(),
    editorState3: EditorState.createEmpty(),
    editorState4: EditorState.createEmpty(),
    editorState5: EditorState.createEmpty(),
    editorState6: EditorState.createEmpty(),
    editorState7: EditorState.createEmpty(),

    id: props.match.params.id,
  };
  const defaultError = {
    blockImage1: "",
    block1: "",
    blockImage2: "",
    block2: "",
    blockImage3: "",
    block3: "",
    blockTitle4: "",
    block4: "",
    blockTitle5: "",
    blockImage5: "",
    block5: "",
    blockImage6: "",
    block6: "",
    blockImage7: "",
    block7: "",
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
       // For Five Text editor
       const contentBlock5 = htmlToDraft(
        frontendTemplateView.block5 ? frontendTemplateView.block5 : "<p></p>"
      );
      const contentState5 = ContentState.createFromBlockArray(
        contentBlock5.contentBlocks
      );
      const mainSectionContent5 = EditorState.createWithContent(contentState5);
       // For Six Text editor
       const contentBlock6 = htmlToDraft(
        frontendTemplateView.block6 ? frontendTemplateView.block6 : "<p></p>"
      );
      const contentState6 = ContentState.createFromBlockArray(
        contentBlock6.contentBlocks
      );
      const mainSectionContent6 = EditorState.createWithContent(contentState6);
       // For Seven Text editor
       const contentBlock7 = htmlToDraft(
        frontendTemplateView.block7 ? frontendTemplateView.block7 : "<p></p>"
      );
      const contentState7 = ContentState.createFromBlockArray(
        contentBlock7.contentBlocks
      );
      const mainSectionContent7 = EditorState.createWithContent(contentState7);
      setForm({
        ...form,

        blockImage1: frontendTemplateView.blockImage1,
        block1: frontendTemplateView.block1,
        blockImage2: frontendTemplateView.blockImage2,
        block2: frontendTemplateView.block2,
        blockImage3: frontendTemplateView.blockImage3,
        block3: frontendTemplateView.block3,
        blockTitle4: frontendTemplateView.blockTitle4,
        block4: frontendTemplateView.block4,
        blockTitle5: frontendTemplateView.blockTitle5,
        blockImage5: frontendTemplateView.blockImage5,
        block5: frontendTemplateView.block5,
        blockImage6: frontendTemplateView.blockImage6,
        block6: frontendTemplateView.block6,
        blockImage7: frontendTemplateView.blockImage7,
        block7: frontendTemplateView.block7,

        editorState1: mainSectionContent1,
        editorState2: mainSectionContent2,
        editorState3: mainSectionContent3,
        editorState4: mainSectionContent4,
        editorState5: mainSectionContent5,
        editorState6: mainSectionContent6,
        editorState7: mainSectionContent7,
      });
      // For set Preview
      setImagePreview({
        ...imagePreview,
        blockImage1: frontendTemplateView.blockImage1,
        blockImage2: frontendTemplateView.blockImage2,
        blockImage3: frontendTemplateView.blockImage3,
        blockImage5: frontendTemplateView.blockImage5,
        blockImage6: frontendTemplateView.blockImage6,
        blockImage7: frontendTemplateView.blockImage7,
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
  const handleChangeEditor5 = (editorState5: any) => {
    setForm({
      ...form,
      editorState5,
      block5: draftToHtml(convertToRaw(editorState5.getCurrentContent())),
    });
    setError({
      ...error,
      block5: "",
    });
  };
  const handleChangeEditor6 = (editorState6: any) => {
    setForm({
      ...form,
      editorState6,
      block6: draftToHtml(convertToRaw(editorState6.getCurrentContent())),
    });
    setError({
      ...error,
      block6: "",
    });
  };
  const handleChangeEditor7 = (editorState7: any) => {
    setForm({
      ...form,
      editorState7,
      block7: draftToHtml(convertToRaw(editorState7.getCurrentContent())),
    });
    setError({
      ...error,
      block7: "",
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // To validate form fields
    const { isValid, errors } = enterprisePageValidator({
      ...form,
      blockImage1: form.blockImage1 ? "blockImage1" : "",
      blockImage2: form.blockImage2 ? "blockImage2" : "",
      blockImage3: form.blockImage3 ? "blockImage3" : "",
      blockImage5: form.blockImage5 ? "blockImage5" : "",
      blockImage6: form.blockImage6 ? "blockImage6" : "",
      blockImage7: form.blockImage7 ? "blockImage7" : "",
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
    blockImage3: "",
    blockImage5: "",
    blockImage6: "",
    blockImage7: "",
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
    let selectFile1: any = ref1.current;
    let selectFile2: any = ref2.current;
    let selectFile3: any = ref3.current;
    let selectFile5: any = ref5.current;
    let selectFile6: any = ref6.current;
    let selectFile7: any = ref7.current;
    selectFile1.value = "";
    selectFile2.value = "";
    selectFile3.value = "";
    selectFile5.value = "";
    selectFile6.value = "";
    selectFile7.value = "";
  };
  return (
    <div className='cr-page px-3 min-height650 my-profile-section'>
      <Row>
        <Col xs='12' sm='12' lg='12'>
          <Card>
            <Card.Header>
              <h4>
                <i className='icon-note' />
                Edit Enterprise Page
              </h4>
            </Card.Header>
            <Card.Body>
              <Form onSubmit={handleSubmit} className="custom-editor">
              <div className='cms-section'>
                  <h4 className='cms-title'>Block Zero</h4>
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
                              imagePreview.blockImage5
                                ? imagePreview.blockImage5.startsWith("data")
                                  ? imagePreview.blockImage5
                                  : `${ImageURL}/${imagePreview.blockImage5}`
                                : defaultImage
                            }
                            alt={"Profile Preview"}
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
                              ref={ref5}
                              name='blockImage5'
                              id={`feature-image5`}
                              onChange={handleFile}
                            />
                          </div>
                          {imagePreview.blockImage5 &&
                          imagePreview.blockImage5.length ? (
                            <div className='remove_icon_wrapper'>
                              <i
                                className='fa fa-trash-o trash_icon'
                                onClick={() => removeImage("blockImage5")}
                                aria-hidden='true'
                              />
                            </div>
                          ) : null}
                        </div>
                      </InputGroup>
                      <div className={"text-danger error-text"}>
                        {error && error.blockImage5}
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
                        editorState={form.editorState5}
                        onEditorStateChange={handleChangeEditor5}
                      />
                      <div className={"text-danger error-text"}>
                        {error && error.block5}
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
                              imagePreview.blockImage6
                                ? imagePreview.blockImage6.startsWith("data")
                                  ? imagePreview.blockImage6
                                  : `${ImageURL}/${imagePreview.blockImage6}`
                                : defaultImage
                            }
                            alt={"Profile Preview"}
                          />
                          <div className='file-upload'>
                            <label
                              htmlFor={`feature-image6`}
                              className='file-upload-label'
                            >
                              Choose Image
                            </label>
                            <input
                              className='file-upload-input'
                              type='file'
                              accept='image/*'
                              ref={ref5}
                              name='blockImage6'
                              id={`feature-image6`}
                              onChange={handleFile}
                            />
                          </div>
                          {imagePreview.blockImage6 &&
                          imagePreview.blockImage6.length ? (
                            <div className='remove_icon_wrapper'>
                              <i
                                className='fa fa-trash-o trash_icon'
                                onClick={() => removeImage("blockImage6")}
                                aria-hidden='true'
                              />
                            </div>
                          ) : null}
                        </div>
                      </InputGroup>
                      <div className={"text-danger error-text"}>
                        {error && error.blockImage6}
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
                        editorState={form.editorState6}
                        onEditorStateChange={handleChangeEditor6}
                      />
                      <div className={"text-danger error-text"}>
                        {error && error.block6}
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
                              imagePreview.blockImage7
                                ? imagePreview.blockImage7.startsWith("data")
                                  ? imagePreview.blockImage7
                                  : `${ImageURL}/${imagePreview.blockImage7}`
                                : defaultImage
                            }
                            alt={"Profile Preview"}
                          />
                          <div className='file-upload'>
                            <label
                              htmlFor={`feature-image7`}
                              className='file-upload-label'
                            >
                              Choose Image
                            </label>
                            <input
                              className='file-upload-input'
                              type='file'
                              accept='image/*'
                              ref={ref7}
                              name='blockImage7'
                              id={`feature-image7`}
                              onChange={handleFile}
                            />
                          </div>
                          {imagePreview.blockImage7 &&
                          imagePreview.blockImage7.length ? (
                            <div className='remove_icon_wrapper'>
                              <i
                                className='fa fa-trash-o trash_icon'
                                onClick={() => removeImage("blockImage7")}
                                aria-hidden='true'
                              />
                            </div>
                          ) : null}
                        </div>
                      </InputGroup>
                      <div className={"text-danger error-text"}>
                        {error && error.blockImage7}
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
                        editorState={form.editorState7}
                        onEditorStateChange={handleChangeEditor7}
                      />
                      <div className={"text-danger error-text"}>
                        {error && error.block7}
                      </div>
                    </Form.Group>
                  </div>
                </div>
                <div className='cms-section'>
                  <h4 className='cms-title'>Block One</h4>
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
                              ref={ref1}
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
                  <h4 className='cms-title'>Block Two</h4>
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
                              ref={ref2}
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
                  <h4 className='cms-title'>Block Three</h4>
                  <div className='row'>
                    <Form.Group className='col-sm-6'>
                      <Form.Label className='floating-label'>
                        Upload Image
                      </Form.Label>
                      <InputGroup>
                        <div className='fileinput-preview team-img-upload'>
                          <img
                            src={
                              imagePreview.blockImage3
                                ? imagePreview.blockImage3.startsWith("data")
                                  ? imagePreview.blockImage3
                                  : `${ImageURL}/${imagePreview.blockImage3}`
                                : defaultImage
                            }
                            alt={"Profile Preview"}
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
                              ref={ref3}
                              name='blockImage3'
                              id={`feature-image3`}
                              onChange={handleFile}
                            />
                          </div>
                          {imagePreview.blockImage3 &&
                          imagePreview.blockImage3.length ? (
                            <div className='remove_icon_wrapper'>
                              <i
                                className='fa fa-trash-o trash_icon'
                                onClick={() => removeImage("blockImage3")}
                                aria-hidden='true'
                              />
                            </div>
                          ) : null}
                        </div>
                      </InputGroup>
                      <div className={"text-danger error-text"}>
                        {error && error.blockImage3}
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
                        editorState={form.editorState3}
                        onEditorStateChange={handleChangeEditor3}
                      />
                      <div className={"text-danger error-text"}>
                        {error && error.block3}
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
                        editorState={form.editorState4}
                        onEditorStateChange={handleChangeEditor4}
                      />
                      <div className={"text-danger error-text"}>
                        {error && error.block4}
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

export default EditEnterprisePage;
