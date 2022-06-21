import React, { useState, useEffect, useRef } from "react";
import { Button, Card, Row, Col, Form, InputGroup } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";

import { EditorState, convertToRaw, ContentState } from "draft-js";
import draftToHtml from "draftjs-to-html";
import { aboutPageValidator } from "../../../validator";
import {
  viewFrontendPagesRequest,
  editAboutPagesRequest,
} from "../../../actions";

import htmlToDraft from "html-to-draftjs";
import { Editor } from "react-draft-wysiwyg";
import { ImageURL } from "../../../config/AppConfig";
import defaultImage from "../../../assets/img/default_image.jpg";

const EditAboutPage = (props: any) => {
  const ref = useRef<HTMLInputElement>(null);
  const dispatch = useDispatch();

  const defaultForm: any = {
    title: "",
    bannerTitle: "",
    blockTitle1: "",
    blockImage1: "",
    block1: "",
    blockTitle2: "",
    block2: "",

    editorState1: EditorState.createEmpty(),
    editorState2: EditorState.createEmpty(),
    id: props.match.params.id,
  };
  const defaultError = {
    title: "",
    bannerTitle: "",
    blockTitle1: "",
    blockImage1: "",
    block1: "",
    blockTitle2: "",
    block2: "",
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
      // For Banner Text editor
      const contentBlock1 = htmlToDraft(
        frontendTemplateView.block1 ? frontendTemplateView.block1 : "<p></p>"
      );
      const contentState1 = ContentState.createFromBlockArray(
        contentBlock1.contentBlocks
      );
      const mainSectionContent1 = EditorState.createWithContent(contentState1);
      // For Our Story Text editor
      const contentBlock2 = htmlToDraft(
        frontendTemplateView.block2 ? frontendTemplateView.block2 : "<p></p>"
      );
      const contentState2 = ContentState.createFromBlockArray(
        contentBlock2.contentBlocks
      );
      const mainSectionContent2 = EditorState.createWithContent(contentState2);
      setForm({
        ...form,
        title: frontendTemplateView.title,
        bannerTitle: frontendTemplateView.bannerTitle,
        blockTitle1: frontendTemplateView.blockTitle1,
        blockImage1: frontendTemplateView.blockImage1,
        block1: frontendTemplateView.block1,
        blockTitle2: frontendTemplateView.blockTitle2,
        block2: frontendTemplateView.block2,
        editorState1: mainSectionContent1,
        editorState2: mainSectionContent2,
      });
      setImagePreview(frontendTemplateView.blockImage1);
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

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // To validate form fields
    const { isValid, errors } = aboutPageValidator({
      ...form,
      blockImage1: form.blockImage1 ? "blockImage1" : "",
    });
    if (isValid) {
      dispatch(
        editAboutPagesRequest({
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
  const [imagePreview, setImagePreview] = useState("");
  const handleFile = (e: any) => {
    let file = e.target.files[0];
    setForm({ ...form, [e.target.name]: file });
    setError({ ...error, [e.target.name]: "" });
    // For Preview
    let reader: any = new FileReader();
    reader.onloadend = () => {
      setImagePreview(reader.result);
    };
    reader.readAsDataURL(file);
  };
  const removeImage = (event: string) => {
    setImagePreview("");
    setForm({ ...form, [event]: "" });
    let selectFile: any = ref.current;
    selectFile.value = "";
  };
  return (
    <div className='cr-page px-3 min-height650 my-profile-section'>
      <Row>
        <Col xs='12' sm='12' lg='12'>
          <Card>
            <Card.Header>
              <h4>
                <i className='icon-note' />
                Edit About Page
              </h4>
            </Card.Header>
            <Card.Body>
              <Form onSubmit={handleSubmit} className="custom-editor">
                {/* <div className='cms-section'>
                  <h4 className='cms-title'>Banner Section</h4>
                  <div className='row'>
                    <Form.Group className='col-sm-6'>
                      <Form.Label className='floating-label'>
                        Title<span className={"mandatory"}>*</span>
                        &nbsp;
                      </Form.Label>
                      <InputGroup>
                        <input
                          type={"text"}
                          name={"title"}
                          value={form.title}
                          className={"form-control floating-input"}
                          placeholder={" "}
                          onChange={handleChange}
                        />
                      </InputGroup>
                      <div className={"text-danger error-text"}>
                        {error && error.title}
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
                        editorState={form.editorState1}
                        onEditorStateChange={handleChangeEditor1}
                      />
                      <div className={"text-danger error-text"}>
                        {error && error.bannerTitle}
                      </div>
                    </Form.Group>
                  </div>
                </div> */}
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
                              imagePreview
                                ? imagePreview.startsWith("data")
                                  ? imagePreview
                                  : `${ImageURL}/${imagePreview}`
                                : defaultImage
                            }
                            alt={"Profile Preview"}
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
                              ref={ref}
                              name='blockImage1'
                              id={`feature-image`}
                              onChange={handleFile}
                            />
                          </div>
                          {imagePreview && imagePreview.length ? (
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
                        editorState={form.editorState2}
                        onEditorStateChange={handleChangeEditor2}
                      />
                      <div className={"text-danger error-text"}>
                        {error && error.block2}
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

export default EditAboutPage;
