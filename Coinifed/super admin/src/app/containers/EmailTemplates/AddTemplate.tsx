import React, { Component } from "react";
import { Button, Card, Row, Col, Form, InputGroup } from "react-bootstrap";
import {
  ITemplateState,
  IRootState,
  ITemplateProps,
} from "../../../interfaces";
import { Dispatch } from "redux";
import {
  addTemplateRequest,
  viewTemplateRequest,
  updateTemplateRequest,
} from "../../../actions";
import { connect } from "react-redux";
import { EditorState, convertToRaw, ContentState } from "draft-js";
import draftToHtml from "draftjs-to-html";
import htmlToDraft from "html-to-draftjs";
import { Editor } from "react-draft-wysiwyg";
import { AppRoutes } from "../../../config";
import { emailTemplateValidator } from "../../../validator";

class AddTemplate extends Component<ITemplateProps, ITemplateState> {
  editor: any;
  constructor(props: ITemplateProps) {
    super(props);
    this.editor = null;
    this.state = {
      name: "",
      subject: "",
      content: "",
      isEditable: false,
      errors: {
        name: "",
        subject: "",
        content: "",
      },
      id: "",
      editorState: EditorState.createEmpty(),
    };
  }
  componentDidMount = () => {
    const { match } = this.props;
    const { params } = match;
    if (params && params.id) {
      const { id } = params;
      this.setState({
        isEditable: true,
      });
      this.props.viewTemplate({ id });
    }
  };
  componentDidUpdate = (prevProps: any) => {
    const { templateReducer } = prevProps;
    if (
      templateReducer.isLoading !== this.props.templateReducer.isLoading &&
      this.props.templateReducer.templateInfo
    ) {
      const { templateInfo } = this.props.templateReducer;
      const { templateName, subject, htmlContent, _id } = templateInfo;
      const { isEditable } = this.state;
      if (isEditable) {
        /* this.setState(
          {
            name: templateName,
            subject,
            content: htmlContent,
            id: _id,
          },
          () => this.onLoad()
        ); */

        const contentBlock = htmlToDraft(
          htmlContent ? htmlContent : "<p></p>"
        );
        const contentState = ContentState.createFromBlockArray(
          contentBlock.contentBlocks
        );
        const mainSectioncontent = EditorState.createWithContent(contentState);

        this.setState({
          name: templateName,
          subject,
          content: htmlContent,
          editorState: mainSectioncontent,
          id: _id ? _id : "",
        });
      }
      console.log(subject,"check this")
    }
  };
  handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    this.setState({
      ...this.state,
      [name]: value,
    });
  };
  handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { name, subject, content, isEditable, id } = this.state;
    const data: any = {
      templateName: name,
      subject,
      htmlContent: content,
    };

    // To validate form fields
    const { isValid, errors } = emailTemplateValidator({
      ...data,
    });
    if (isValid) {
      if (isEditable) {
        this.props.updateTemplate({ ...data, id });
      } else {
        this.props.addTemplate(data);
      }
    } else {
      this.setState({
        errors,
      });
      return;
    }
  };

  handleChangeEditor = (editorState: any) => {
    this.setState({
      editorState,
      content: draftToHtml(convertToRaw(editorState.getCurrentContent())),
    });
  };
  render() {
    const { name, subject, errors, isEditable } = this.state;
    return (
      <div className="cr-page px-3 min-height650 my-profile-section">
        <Row>
          <Col xs="12" sm="12" lg="12">
            <Card>
              <Card.Header>
                <h4>
                  <i className="icon-note" />
                  &nbsp;{!isEditable ? "Add" : "Update"} Email Template
                </h4>
              </Card.Header>
              <Card.Body>
                <div className="row">
                  <div className="col-md-12  my-4">
                    <Form onSubmit={this.handleSubmit} className="row custom-editor-email">
                      <Form.Group className="col-sm-6">
                        <Form.Label className="floating-label">
                          Template Name<span className={"mandatory"}>*</span>
                          &nbsp;
                        </Form.Label>
                        <InputGroup>
                          <input
                            type={"text"}
                            name={"name"}
                            value={name}
                            className={"form-control floating-input"}
                            placeholder={" "}
                            disabled={true}
                          />
                        </InputGroup>
                        <div className={"text-danger error-text"}>
                          {errors && errors.name}
                        </div>
                      </Form.Group>

                      <Form.Group className="col-sm-6">
                        <Form.Label className="floating-label">
                          Template Subject
                          <span className={"mandatory "}>*</span>
                          &nbsp;
                        </Form.Label>
                        <InputGroup>
                          <input
                            type={"text"}
                            name={"subject"}
                            value={subject}
                            className={"form-control floating-input"}
                            placeholder={" "}
                            onChange={this.handleChange}
                          />
                        </InputGroup>
                        <div className={"text-danger error-text"}>
                          {errors && errors.subject}
                        </div>
                      </Form.Group>

                      <Form.Group className="col-sm-12">
                        <Form.Label className="floating-label">
                          Email Template Body
                          <span className={"mandatory"}>*</span>
                          &nbsp;
                        </Form.Label>
                        <Editor
                          toolbarClassName="toolbarClassName"
                          wrapperClassName="demo-wrapper"
                          editorClassName="demo-home-editor"
                          editorState={this.state.editorState}
                          onEditorStateChange={this.handleChangeEditor}
                        />
                        <div className={"text-danger error-text"}>
                          {errors && errors.content}
                        </div>
                      </Form.Group>

                      <Col xs="12" className="text-right">
                        <Button
                          variant="button"
                          className="btn btn-danger"
                          onClick={() => {
                            this.props.history.push(AppRoutes.EMAILTEMPLATE);
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
  templateReducer: state.TemplateReducer,
});

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    addTemplate: (data: any) => {
      dispatch(addTemplateRequest(data));
    },
    updateTemplate: (data: any) => {
      dispatch(updateTemplateRequest(data));
    },
    viewTemplate: (data: any) => {
      dispatch(viewTemplateRequest(data));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AddTemplate);
