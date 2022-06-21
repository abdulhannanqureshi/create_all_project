import React, { useEffect } from "react";
import { Button, Col, Form, InputGroup } from "react-bootstrap";
import defaultImage from "../../../assets/img/default_image.jpg";
import { ImageURL } from "../../../config/AppConfig";
import { Editor } from "react-draft-wysiwyg";

const LabForm = (props: any) => {
  const { category, error, form } = props
  console.log(form,"check form")
  return (
    <Form onSubmit={props.handleSubmit} className="custom-editor">
      <div className='row'>
        <Form.Group className="col-sm-6">
          <Form.Label className="floating-label">
            Select Course<span className={"mandatory "}>*</span>
            &nbsp;
          </Form.Label>
          {
            props.form.courseName && props.form.courseName.length ?
              <>
                <Form.Control
                  as="select"
                  aria-label="Default select example"
                  name={"course"}
                  disabled
                  onChange={props.handleChange}
                >
                  <option value={props.form.courseName} disabled >Select Course</option>
                  <option value={props.form.id} selected>
                    {props.form.courseName}
                  </option>
                </Form.Control>
              </>

              :
              <>
                <Form.Control
                  as="select"
                  aria-label="Default select example"
                  name={"course"}
                  onChange={props.handleChange}
                >
                  <option value={props.form.courseName} selected disabled>Select Course</option>
                  {category && category.length ? category.map(
                    (data: any, index: number) => {
                      return (
                        <option value={data._id}>
                          {data.title}
                        </option>
                      );
                    }
                  )
                    : ""}
                </Form.Control>
              </>
          }

          <div className={"text-danger error-text"}>
            {error && error.course}
          </div>
        </Form.Group>
        <Form.Group className='col-sm-6'>
          <Form.Label className='floating-label'>
            Lab Title<span className={"mandatory"}>*</span>
            &nbsp;
          </Form.Label>
          <InputGroup>
            <input
              type='text'
              name='title'
              value={props.form.title}
              className={"form-control floating-input"}
              placeholder={" "}
              onChange={props.handleChange}
            />
          </InputGroup>
          <div className={"text-danger error-text"}>
            {props.error && props.error.title}
          </div>
        </Form.Group>
        <Form.Group className='col-sm-6'>
          <Form.Label className='floating-label'>
            Lab Link<span className={"mandatory"}>*</span>
            &nbsp;
          </Form.Label>
          <InputGroup>
            <input
              type='text'
              name='link'
              value={props.form.link}
              className={"form-control floating-input"}
              placeholder={" "}
              onChange={props.handleChange}
            />
          </InputGroup>
          <div className={"text-danger error-text"}>
            {props.error && props.error.link}
          </div>
        </Form.Group>
        <Form.Group className='col-sm-6'>
          <Form.Label className='floating-label'>
            Lab amount<span className={"mandatory"}>*</span>
            &nbsp;
          </Form.Label>
          <InputGroup>
            <input
              type='text'
              name='amount'
              value={props.form.amount}
              className={"form-control floating-input"}
              placeholder={" "}
              onChange={props.handleChange}
            />
          </InputGroup>
          <div className={"text-danger error-text"}>
            {props.error && props.error.amount}
          </div>
        </Form.Group>
        <Form.Group className='col-sm-6'>
          <Form.Label className='floating-label'>
            Upload Lab Image
          </Form.Label>
          <InputGroup>
            <div className='fileinput-preview team-img-upload'>
              <img
                src={
                  props.imagePreview
                    ? props.imagePreview.startsWith("data")
                      ? props.imagePreview
                      : `${ImageURL}/${props.imagePreview}`
                    : defaultImage
                }

                alt={"lab image"}
              />
              {
                console.log(props.imagePreview, "this is all the props")
              }
              <div className='file-upload'>
                <label htmlFor={`feature-image`} className='file-upload-label'>
                  Choose Image
                </label>
                <input
                  className='file-upload-input'
                  type='file'
                  accept='image/*'
                  name='labsImage'
                  ref={props.useRef}
                  id={`feature-image`}
                  onChange={props.handleFile}
                />
              </div>
              {props.imagePreview && props.imagePreview.length ? (
                <div className='remove_icon_wrapper'>
                  <i
                    className='fa fa-trash-o trash_icon'
                    onClick={props.removeImage}
                    aria-hidden='true'
                  />
                </div>
              ) : null}
            </div>
          </InputGroup>
          <div className={"text-danger error-text"}>
            {props.error && props.error.labsImage}
          </div>
        </Form.Group>
        <Form.Group className='col-sm-6'>
          <Form.Label className='floating-label'>
            Description<span className={"mandatory"}>*</span>
            &nbsp;
          </Form.Label>
          <InputGroup>
            <Editor
              toolbarClassName='toolbarClassName'
              wrapperClassName='demo-wrapper'
              editorClassName='demo-home-editor'
              editorState={props.form.editorState}
              onEditorStateChange={props.handleChangeEditor}
            />
          </InputGroup>
          <div className={"text-danger error-text"}>
            {props.error && props.error.description}
          </div>
        </Form.Group>
      </div>
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
        <Button variant='button' type={"submit"} className='btn btn-primary'>
          Submit
        </Button>
      </Col>
    </Form>
  );
};

export default LabForm;
