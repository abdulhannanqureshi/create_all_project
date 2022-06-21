import React, { useState, useEffect } from "react";
import { Button, Card, Row, Col, Form, InputGroup } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";

import { EditorState, convertToRaw, ContentState } from "draft-js";
import draftToHtml from "draftjs-to-html";
import { FrontendTemplateValidator } from "../../../validator";
import {
  viewFrontendTemplateRequest,
  editFrontendTemplateRequest,
} from "../../../actions";

import htmlToDraft from "html-to-draftjs";
import { Editor } from "react-draft-wysiwyg";

const EditFrontTemplate = (props: any) => {
  const dispatch = useDispatch();

  const defaultForm: any = {
    title: "",
    content: "",
    editorState: EditorState.createEmpty(),
    id: props.match.params.id,
  };
  const defaultError = {
    title: "",
    content: "",
  };
  const [form, setForm] = useState(defaultForm);
  const [error, setError] = useState(defaultError);

  useEffect(() => {
    dispatch(viewFrontendTemplateRequest(defaultForm.id));
  }, []);

  const { frontendTemplateView } = useSelector(
    (state: any) => state.FrontendTemplateReducer
  );
  useEffect(() => {
    if (frontendTemplateView) {
      const contentBlock = htmlToDraft(
        frontendTemplateView.content ? frontendTemplateView.content : "<p></p>"
      );
      const contentState = ContentState.createFromBlockArray(
        contentBlock.contentBlocks
      );
      const mainSectionContent = EditorState.createWithContent(contentState);
      setForm({
        ...form,
        title: frontendTemplateView.title,
        content: frontendTemplateView.content,
        editorState: mainSectionContent,
      });
    }
  }, [frontendTemplateView]);

  const handleChangeEditor = (editorState: any) => {
    setForm({
      ...form,
      editorState,
      content: draftToHtml(convertToRaw(editorState.getCurrentContent())),
    });
    setError({
      ...error,
      content: "",
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // To validate form fields
    const { isValid, errors } = FrontendTemplateValidator({
      ...form,
    });
    if (isValid) {
      dispatch(
        editFrontendTemplateRequest({
          ...form,
          props,
        })
      );
    } else {
      setError({ ...error, ...errors });
      return;
    }
  };
  return (
    <div className='cr-page px-3 min-height650 my-profile-section'>
      <Row>
        <Col xs='12' sm='12' lg='12'>
          <Card>
            <Card.Header>
              <h4>
                <i className='icon-note' />
                Edit Policy Pages
              </h4>
            </Card.Header>
            <Card.Body>
              <div className='row'>
                <div className='col-md-12  my-4'>
                  <Form onSubmit={handleSubmit} className='row custom-editor'>
                    <Form.Group className='col-sm-6'>
                      <Form.Label className='floating-label'>
                        Pages Name<span className={"mandatory"}>*</span>
                        &nbsp;
                      </Form.Label>
                      <InputGroup>
                        <input
                          type={"text"}
                          name={"title"}
                          value={form.title}
                          className={"form-control floating-input"}
                          placeholder={" "}
                          disabled={true}
                        />
                      </InputGroup>
                      <div className={"text-danger error-text"}>
                        {error && error.title}
                      </div>
                    </Form.Group>
                    <Form.Group className='col-sm-12'>
                      <Form.Label className='floating-label'>
                        Pages Body
                        <span className={"mandatory"}>*</span>
                        &nbsp;
                      </Form.Label>
                      <Editor
                        toolbarClassName='toolbarClassName'
                        wrapperClassName='demo-wrapper'
                        editorClassName='demo-home-editor'
                        editorState={form.editorState}
                        onEditorStateChange={handleChangeEditor}
                      />
                      <div className={"text-danger error-text"}>
                        {error && error.content}
                      </div>
                    </Form.Group>

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
                  </Form>
                </div>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default EditFrontTemplate;
