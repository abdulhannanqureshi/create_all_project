import React, { useState, useEffect, useRef } from "react";
import { Button, Card, Row, Col, Form, InputGroup } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { enterprisePageValidator } from "../../../validator";
import {
    viewFrontendPagesRequest,
    editEnterprisePagesRequest,
} from "../../../actions";
const EditMarketingPage = (props: any) => {
    const dispatch = useDispatch();

    const defaultForm: any = {
        blockTitle1: "",
        blockTitle2: "",
        blockTitle3: "",
        blockTitle4: "",
        blockTitle5: "",
        blockTitle6: "",
        id: props.match.params.id,
    };
    const defaultError = {
        blockTitle1: "",
        blockTitle2: "",
        blockTitle3: "",
        blockTitle4: "",
        blockTitle5: "",
        blockTitle6: "",
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
            setForm({
                ...form,
                blockTitle1: frontendTemplateView.blockTitle1,
                blockTitle2: frontendTemplateView.blockTitle2,
                blockTitle3: frontendTemplateView.blockTitle3,
                blockTitle4: frontendTemplateView.blockTitle4,
                blockTitle5: frontendTemplateView.blockTitle5,
                blockTitle6: frontendTemplateView.blockTitle6
            });
        }
    }, [frontendTemplateView]);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setForm({ ...form, [name]: value });
        setError({ ...error, [name]: "" });
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        // To validate form fields
        const { isValid, errors } = enterprisePageValidator({
            ...form
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
    return (
        <div className='cr-page px-3 min-height650 my-profile-section'>
            <Row>
                <Col xs='12' sm='12' lg='12'>
                    <Card>
                        <Card.Header>
                            <h4>
                                <i className='icon-note' />
                                Edit Footer Page
                            </h4>
                        </Card.Header>
                        <Card.Body>
                            <Form onSubmit={handleSubmit} className="custom-editor">
                                <div className='cms-section'>
                                    <h4 className='cms-title'>Footer Top Block</h4>
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
                                        <Form.Group className='col-sm-6'>
                                            <Form.Label className='floating-label'>
                                                Button Text Title<span className={"mandatory"}>*</span>
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
                                    {/* card one editing starts here */}
                                    <h4 className='cms-title'>Footer Middle Block</h4>
                                    <div className='row'>
                                        <Form.Group className='col-sm-6'>
                                            <Form.Label className='floating-label'>
                                                Title 1<span className={"mandatory"}>*</span>
                                                &nbsp;
                                            </Form.Label>
                                            <InputGroup>
                                                <input
                                                    type={"text"}
                                                    name={"blockTitle3"}
                                                    value={form.blockTitle3}
                                                    className={"form-control floating-input"}
                                                    placeholder={" "}
                                                    onChange={handleChange}
                                                />
                                            </InputGroup>
                                            <div className={"text-danger error-text"}>
                                                {error && error.blockTitle3}
                                            </div>
                                        </Form.Group>
                                        <Form.Group className='col-sm-6'>
                                            <Form.Label className='floating-label'>
                                                 Title 2<span className={"mandatory"}>*</span>
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
                                        <Form.Group className='col-sm-6'>
                                            <Form.Label className='floating-label'>
                                                Title 3<span className={"mandatory"}>*</span>
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
                                    {/* card two editing starts here */}
                                    <h4 className='cms-title'>Footer Bottom Block</h4>
                                    <div className='row'>                                       
                                        <Form.Group className='col-sm-6'>
                                            <Form.Label className='floating-label'>
                                                 Title <span className={"mandatory"}>*</span>
                                                &nbsp;
                                            </Form.Label>
                                            <InputGroup>
                                                <input
                                                    type={"text"}
                                                    name={"blockTitle6"}
                                                    value={form.blockTitle6}
                                                    className={"form-control floating-input"}
                                                    placeholder={" "}
                                                    onChange={handleChange}
                                                />
                                            </InputGroup>
                                            <div className={"text-danger error-text"}>
                                                {error && error.blockTitle6}
                                            </div>
                                        </Form.Group>
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
                                </div>
                            </Form>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </div>
    );
};

export default EditMarketingPage;
