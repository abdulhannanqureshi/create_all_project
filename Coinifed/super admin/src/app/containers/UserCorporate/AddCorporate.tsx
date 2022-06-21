import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Card, Row, Col } from "react-bootstrap";
import { corporateValidator } from "../../../validator";
import { addCorporateRequest } from "../../../actions";
import CorporateForm from "./CorporateForm";

const AddCorporate = (props: any) => {
  const dispatch = useDispatch();

  const defaultForm = {
    name: "",
  };
  const defaultError = {
    name: "",
  };
  const [form, setForm] = useState(defaultForm);
  const [error, setError] = useState(defaultError);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setForm({ ...form, [name]: value });
    setError({ ...error, [name]: "" });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // To validate form fields
    const { isValid, errors } = corporateValidator({
      ...form,
    });
    if (isValid) {
      dispatch(addCorporateRequest(form));
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
                <i className='icon-note' /> Add Corporation
              </h4>
            </Card.Header>
            <Card.Body>
              <div className='row'>
                <div className='col-md-12  my-4'>
                  <CorporateForm
                    form={form}
                    handleChange={handleChange}
                    error={error}
                    handleSubmit={handleSubmit}
                    {...props}
                  />
                </div>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default AddCorporate;
