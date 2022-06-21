import React from "react";
import { Button, Col, Form, InputGroup } from "react-bootstrap";

const CorporateForm = (props: any) => {
  return (
    <Form onSubmit={props.handleSubmit} className='row'>
      <Form.Group className='col-sm-6'>
        <Form.Label className='floating-label'>
          Corporate Name<span className={"mandatory"}>*</span>
          &nbsp;
        </Form.Label>
        <InputGroup>
          <input
            type={"text"}
            name={"name"}
            value={props.form.name}
            className={"form-control floating-input"}
            placeholder={" "}
            onChange={props.handleChange}
          />
        </InputGroup>
        <div className={"text-danger error-text"}>
          {props.error && props.error.name}
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
        <Button variant='button' type={"submit"} className='btn btn-primary'>
          Submit
        </Button>
      </Col>
    </Form>
  );
};

export default CorporateForm;
