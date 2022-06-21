import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Card, Row, Col } from "react-bootstrap";
import { subAdminValidator } from "../../../validator";
import SubAdminForm from "./SubAdminForm";
import { addSubAdminRequest } from "../../../actions";
import rolePermission from "./rolePermission";

const AddSubAdmin = (props: any) => {
  const dispatch = useDispatch();

  const defaultForm = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    roleName: "",
    rolesPermission: [] as any,
  };
  const defaultError = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    roleName: "",
    rolesPermission: "",
  };
  const [form, setForm] = useState(defaultForm);
  const [error, setError] = useState(defaultError);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setForm({ ...form, [name]: value });
    setError({ ...error, [name]: "" });
  };
  // For Handle Change Role
  const handleCategoryChange = (target: any) => {
    const isSelectAll = target.find((e: any) => e.value === "AllSelected");
    if (isSelectAll) {
      let roles: any = rolePermission.filter((e) => e.value !== "AllSelected");
      setForm({
        ...form,
        rolesPermission: roles,
      });
    } else {
      setForm({
        ...form,
        rolesPermission: [...target],
      });
    }
    setError({ ...error, rolesPermission: "" });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // To validate form fields
    let checkRole: any = form.rolesPermission;
    if (checkRole.length) {
      checkRole = "Roles";
    } else {
      checkRole = "";
    }
    const { isValid, errors } = subAdminValidator({
      ...form,
      rolesPermission: checkRole,
    });
    let rolesArray: any = [];
    if (isValid) {
      form.rolesPermission.map((e: any) => rolesArray.push(e.value));
      dispatch(addSubAdminRequest({ ...form, rolesPermission: rolesArray }));
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
                <i className='icon-note' /> Add Sub Admin
              </h4>
            </Card.Header>
            <Card.Body>
              <div className='row'>
                <div className='col-md-12  my-4'>
                  <SubAdminForm
                    form={form}
                    handleChange={handleChange}
                    handleCategoryChange={handleCategoryChange}
                    error={error}
                    handleSubmit={handleSubmit}
                    editStatus={true}
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

export default AddSubAdmin;
