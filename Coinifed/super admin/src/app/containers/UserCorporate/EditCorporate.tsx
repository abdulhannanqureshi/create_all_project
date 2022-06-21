import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Card, Row, Col } from "react-bootstrap";
import { corporateValidator } from "../../../validator";
import { editCorporateRequest, viewCorporateRequest } from "../../../actions";
import CorporateForm from "./CorporateForm";

const EditCorporate = (props: any) => {
  const dispatch = useDispatch();

  const defaultForm: any = {
    name: "",
    id: props.match.params.id,
  };
  const defaultError = {
    name: "",
  };
  const [form, setForm] = useState(defaultForm);
  const [error, setError] = useState(defaultError);

  useEffect(() => {
    dispatch(viewCorporateRequest(defaultForm.id));
  }, []);
  const { corporateView } = useSelector((state: any) => state.corporateReducer);
  useEffect(() => {
    if (corporateView) {
      setForm({ ...form, name: corporateView.name });
    }
  }, [corporateView]);

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
      dispatch(editCorporateRequest({ form, props }));
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
                <i className='icon-note' /> Edit Corporation
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

export default EditCorporate;
