import React from "react";
import { Button, Col, Form, InputGroup } from "react-bootstrap";
import Select from "react-select";
import makeAnimated from "react-select/animated";
import rolePermission from "./rolePermission";

const animatedComponents = makeAnimated();

const SubAdminForm = (props: any) => {
  const getOptions = (roles: any) => {
    if (props.form.rolesPermission.length === roles.length - 1) {
      return [];
    }
    return roles;
  };

  return (
    <Form onSubmit={props.handleSubmit} className='row'>
      <Form.Group className='col-sm-6'>
        <Form.Label className='floating-label'>
          First Name<span className={"mandatory"}>*</span>
          &nbsp;
        </Form.Label>
        <InputGroup>
          <input
            type={"text"}
            name={"firstName"}
            value={props.form.firstName}
            className={"form-control floating-input"}
            placeholder={" "}
            onChange={props.handleChange}
          />
        </InputGroup>
        <div className={"text-danger error-text"}>
          {props.error && props.error.firstName}
        </div>
      </Form.Group>
      <Form.Group className='col-sm-6'>
        <Form.Label className='floating-label'>
          Last Name<span className={"mandatory"}>*</span>
          &nbsp;
        </Form.Label>
        <InputGroup>
          <input
            type={"text"}
            name={"lastName"}
            value={props.form.lastName}
            className={"form-control floating-input"}
            placeholder={" "}
            onChange={props.handleChange}
          />
        </InputGroup>
        <div className={"text-danger error-text"}>
          {props.error && props.error.lastName}
        </div>
      </Form.Group>
      <Form.Group className='col-sm-6'>
        <Form.Label className='floating-label'>
          Email<span className={"mandatory"}>*</span>
          &nbsp;
        </Form.Label>
        <InputGroup>
          <input
            type={"text"}
            name={"email"}
            value={props.form.email}
            className={"form-control floating-input"}
            disabled={props.editStatus ? false : true}
            placeholder={" "}
            onChange={props.handleChange}
          />
        </InputGroup>
        <div className={"text-danger error-text"}>
          {props.error && props.error.email}
        </div>
      </Form.Group>
      {props.editStatus ? (
        <Form.Group className='col-sm-6'>
          <Form.Label className='floating-label'>
            Password<span className={"mandatory"}>*</span>
            &nbsp;
          </Form.Label>
          <InputGroup>
            <input
              type={"password"}
              name={"password"}
              value={props.form.password}
              className={"form-control floating-input"}
              placeholder={" "}
              onChange={props.handleChange}
            />
          </InputGroup>
          <div className={"text-danger error-text"}>
            {props.error && props.error.password}
          </div>
        </Form.Group>
      ) : null}
      <Form.Group className='col-sm-6'>
        <Form.Label className='floating-label'>
          Role Name<span className={"mandatory"}>*</span>
          &nbsp;
        </Form.Label>
        <InputGroup>
          <input
            type={"text"}
            name={"roleName"}
            value={props.form.roleName}
            className={"form-control floating-input"}
            placeholder={" "}
            onChange={props.handleChange}
          />
        </InputGroup>
        <div className={"text-danger error-text"}>
          {props.error && props.error.roleName}
        </div>
      </Form.Group>
      <Form.Group className='col-sm-6' controlId='my_multiselect_field'>
        <Form.Label className='floating-label'>
          Roles Permission<span className={"mandatory"}>*</span>
          &nbsp;
        </Form.Label>
        <InputGroup>
          <InputGroup>
            <Select
              closeMenuOnSelect={false}
              options={getOptions(rolePermission)}
              placeholder='Select Roles'
              isMulti
              name='rolesPermission'
              components={animatedComponents}
              // defaultValue={props.form.rolesPermission}
              value={props.form.rolesPermission}
              onChange={props.handleCategoryChange}
              className='w-100'
              noOptionsMessage={() => "No More Option"}
            />
          </InputGroup>
        </InputGroup>
        <div className={"text-danger error-text"}>
          {props.error && props.error.rolesPermission}
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

export default SubAdminForm;
