import React, { useState, useEffect, useRef } from "react";
import { Button, Card, Row, Col, Form, InputGroup } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";

import { EditorState, convertToRaw, ContentState } from "draft-js";
import draftToHtml from "draftjs-to-html";
import { enterprisePageValidator } from "../../../validator";
import {
    viewFrontendPagesRequest,
    editEnterprisePagesRequest,
} from "../../../actions";

import htmlToDraft from "html-to-draftjs";
import { Editor } from "react-draft-wysiwyg";
import { ImageURL } from "../../../config/AppConfig";
import defaultImage from "../../../assets/img/default_image.jpg";

const EditMarketingPage = (props: any) => {
    const ref1 = useRef<HTMLInputElement>(null);
    const ref2 = useRef<HTMLInputElement>(null);
    const ref3 = useRef<HTMLInputElement>(null);
    const ref4 = useRef<HTMLInputElement>(null);
    const ref5 = useRef<HTMLInputElement>(null);
    const ref6 = useRef<HTMLInputElement>(null);

    const dispatch = useDispatch();

    const defaultForm: any = {
        blockTitle1: "",
        blockTitle2: "",
        blockTitle3: "",
        blockTitle4: "",
        blockTitle5: "",
        blockTitle6: "",
        blockTitle7: "",
        blockTitle8: "",
        blockTitle9: "",
        blockTitle10: "",
        blockTitle12: "",
        blockTitle13: "",
        blockImage1: "",
        block1: "",
        blockImage2: "",
        block2: "",
        blockImage3: "",
        block3: "",
        blockImage4: "",
        block4: "",
        blockImage5: "",
        block5: "",
        // blockImage6: "",
        block6: "",

        editorState1: EditorState.createEmpty(),
        editorState2: EditorState.createEmpty(),
        editorState3: EditorState.createEmpty(),
        editorState4: EditorState.createEmpty(),
        editorState5: EditorState.createEmpty(),
        editorState6: EditorState.createEmpty(),
        id: props.match.params.id,
    };
    const defaultError = {
        blockTitle1: "",
        blockTitle2: "",
        blockTitle3: "",
        blockTitle4: "",
        blockTitle5: "",
        blockTitle6: "",
        blockTitle7: "",
        blockTitle8: "",
        blockTitle9: "",
        blockTitle10: "",
        blockTitle12: "",
        blockTitle13: "",
        blockImage1: "",
        block1: "",
        blockImage2: "",
        block2: "",
        blockImage3: "",
        block3: "",
        blockImage4: "",
        block4: "",
        blockImage5: "",
        block5: "",
        // blockImage6: "",
        block6: "",
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
            // For One Text editor
            const contentBlock1 = htmlToDraft(
                frontendTemplateView.block1 ? frontendTemplateView.block1 : "<p></p>"
            );
            const contentState1 = ContentState.createFromBlockArray(
                contentBlock1.contentBlocks
            );
            const mainSectionContent1 = EditorState.createWithContent(contentState1);
            // For Two Text editor
            const contentBlock2 = htmlToDraft(
                frontendTemplateView.block2 ? frontendTemplateView.block2 : "<p></p>"
            );
            const contentState2 = ContentState.createFromBlockArray(
                contentBlock2.contentBlocks
            );
            const mainSectionContent2 = EditorState.createWithContent(contentState2);
            // For Three Text editor
            const contentBlock3 = htmlToDraft(
                frontendTemplateView.block3 ? frontendTemplateView.block3 : "<p></p>"
            );
            const contentState3 = ContentState.createFromBlockArray(
                contentBlock3.contentBlocks
            );
            const mainSectionContent3 = EditorState.createWithContent(contentState3);
            // For Four Text editor
            const contentBlock4 = htmlToDraft(
                frontendTemplateView.block4 ? frontendTemplateView.block4 : "<p></p>"
            );
            const contentState4 = ContentState.createFromBlockArray(
                contentBlock4.contentBlocks
            );
            const mainSectionContent4 = EditorState.createWithContent(contentState4);
            // For Five Text editor
            const contentBlock5 = htmlToDraft(
                frontendTemplateView.block5 ? frontendTemplateView.block5 : "<p></p>"
            );
            const contentState5 = ContentState.createFromBlockArray(
                contentBlock5.contentBlocks
            );
            const mainSectionContent5 = EditorState.createWithContent(contentState5);
            // For Six Text editor
            const contentBlock6 = htmlToDraft(
                frontendTemplateView.block6 ? frontendTemplateView.block6 : "<p></p>"
            );
            const contentState6 = ContentState.createFromBlockArray(
                contentBlock6.contentBlocks
            );
            const mainSectionContent6 = EditorState.createWithContent(contentState6);

            setForm({
                ...form,
                blockTitle1: frontendTemplateView.blockTitle1,
                blockTitle2: frontendTemplateView.blockTitle2,
                blockTitle3: frontendTemplateView.blockTitle3,
                blockTitle4: frontendTemplateView.blockTitle4,
                blockTitle5: frontendTemplateView.blockTitle5,
                blockTitle6: frontendTemplateView.blockTitle6,
                blockTitle7: frontendTemplateView.blockTitle7,
                blockTitle8: frontendTemplateView.blockTitle8,
                blockTitle9: frontendTemplateView.blockTitle9,
                blockTitle10: frontendTemplateView.blockTitle10,
                blockTitle12: frontendTemplateView.blockTitle12,
                blockTitle13: frontendTemplateView.blockTitle13,
                blockImage1: frontendTemplateView.blockImage1,
                block1: frontendTemplateView.block1,
                blockImage2: frontendTemplateView.blockImage2,
                block2: frontendTemplateView.block2,
                blockImage3: frontendTemplateView.blockImage3,
                block3: frontendTemplateView.block3,
                blockImage4: frontendTemplateView.blockImage4,
                block4: frontendTemplateView.block4,
                blockImage5: frontendTemplateView.blockImage5,
                block5: frontendTemplateView.block5,
                // blockImage6: frontendTemplateView.blockImage6,
                block6: frontendTemplateView.block6,


                editorState1: mainSectionContent1,
                editorState2: mainSectionContent2,
                editorState3: mainSectionContent3,
                editorState4: mainSectionContent4,
                editorState5: mainSectionContent5,
                editorState6: mainSectionContent6,
            });
            // For set Preview
            setImagePreview({
                ...imagePreview,
                blockImage1: frontendTemplateView.blockImage1,
                blockImage2: frontendTemplateView.blockImage2,
                blockImage3: frontendTemplateView.blockImage3,
                blockImage4: frontendTemplateView.blockImage4,
                blockImage5: frontendTemplateView.blockImage5,
                // blockImage6: frontendTemplateView.blockImage6,
            });
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
    const handleChangeEditor3 = (editorState3: any) => {
        setForm({
            ...form,
            editorState3,
            block3: draftToHtml(convertToRaw(editorState3.getCurrentContent())),
        });
        setError({
            ...error,
            block3: "",
        });
    };
    const handleChangeEditor4 = (editorState4: any) => {
        setForm({
            ...form,
            editorState4,
            block4: draftToHtml(convertToRaw(editorState4.getCurrentContent())),
        });
        setError({
            ...error,
            block4: "",
        });
    };
    const handleChangeEditor5 = (editorState5: any) => {
        setForm({
            ...form,
            editorState5,
            block5: draftToHtml(convertToRaw(editorState5.getCurrentContent())),
        });
        setError({
            ...error,
            block5: "",
        });
    };
    const handleChangeEditor6 = (editorState6: any) => {
        setForm({
            ...form,
            editorState6,
            block6: draftToHtml(convertToRaw(editorState6.getCurrentContent())),
        });
        setError({
            ...error,
            block6: "",
        });
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        // To validate form fields
        const { isValid, errors } = enterprisePageValidator({
            ...form,
            blockImage1: form.blockImage1 ? "blockImage1" : "",
            blockImage2: form.blockImage2 ? "blockImage2" : "",
            blockImage3: form.blockImage3 ? "blockImage3" : "",
            blockImage4: form.blockImage4 ? "blockImage4" : "",
            blockImage5: form.blockImage5 ? "blockImage5" : "",
            // blockImage6: form.blockImage6 ? "blockImage6" : "",
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
    // For image Preview
    const imageList = {
        blockImage1: "",
        blockImage2: "",
        blockImage3: "",
        blockImage4: "",
        blockImage5: "",
        // blockImage6: "",
    };

    const [imagePreview, setImagePreview] = useState(imageList);
    const handleFile = (e: any) => {
        let file = e.target.files[0];
        let fileName = e.target.name;
        setForm({ ...form, [e.target.name]: file });
        setError({ ...error, [fileName]: "" });
        // For Preview
        let reader: any = new FileReader();
        reader.onloadend = () => {
            setImagePreview({ ...imagePreview, [fileName]: reader.result });
        };
        reader.readAsDataURL(file);
    };
    // For Image Remove
    const removeImage = (event: string) => {
        setImagePreview({ ...imagePreview, [event]: "" });
        setForm({ ...form, [event]: "" });
        let selectFile1: any = ref1.current;
        let selectFile2: any = ref2.current;
        let selectFile3: any = ref3.current;
        let selectFile4: any = ref4.current;
        let selectFile5: any = ref5.current;
        // let selectFile6: any = ref6.current;

        selectFile1.value = "";
        selectFile2.value = "";
        selectFile3.value = "";
        selectFile4.value = "";
        selectFile5.value = "";
        // selectFile6.value = "";

    };
    return (
        <div className='cr-page px-3 min-height650 my-profile-section'>
            <Row>
                <Col xs='12' sm='12' lg='12'>
                    <Card>
                        <Card.Header>
                            <h4>
                                <i className='icon-note' />
                                Edit Marketing Page
                            </h4>
                        </Card.Header>
                        <Card.Body>
                            <Form onSubmit={handleSubmit} className="custom-editor">
                                <div className='cms-section'>
                                    <h4 className='cms-title'>Main Card Heading Block</h4>
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
                                                Sub Title<span className={"mandatory"}>*</span>
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
                                    <h4 className='cms-title'>Card 1 Block</h4>
                                    <div className='row'>
                                        <Form.Group className='col-sm-6'>
                                            <Form.Label className='floating-label'>
                                                Title<span className={"mandatory"}>*</span>
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
                                                Sub Title<span className={"mandatory"}>*</span>
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
                                                            imagePreview.blockImage1
                                                                ? imagePreview.blockImage1.startsWith("data")
                                                                    ? imagePreview.blockImage1
                                                                    : `${ImageURL}/${imagePreview.blockImage1}`
                                                                : defaultImage
                                                        }
                                                        alt={"Profile Preview"}
                                                    />
                                                    <div className='file-upload'>
                                                        <label
                                                            htmlFor={`feature-image1`}
                                                            className='file-upload-label'
                                                        >
                                                            Choose Image
                                                        </label>
                                                        <input
                                                            className='file-upload-input'
                                                            type='file'
                                                            accept='image/*'
                                                            ref={ref1}
                                                            name='blockImage1'
                                                            id={`feature-image1`}
                                                            onChange={handleFile}
                                                        />
                                                    </div>
                                                    {imagePreview.blockImage1 &&
                                                        imagePreview.blockImage1.length ? (
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
                                     {/* card two editing starts here */}
                                    <h4 className='cms-title'>Card 2 Block</h4>
                                    <div className='row'>
                                        <Form.Group className='col-sm-6'>
                                            <Form.Label className='floating-label'>
                                                Title<span className={"mandatory"}>*</span>
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
                                        <Form.Group className='col-sm-6'>
                                            <Form.Label className='floating-label'>
                                                Sub Title<span className={"mandatory"}>*</span>
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
                                                editorState={form.editorState2}
                                                onEditorStateChange={handleChangeEditor2}
                                            />
                                            <div className={"text-danger error-text"}>
                                                {error && error.block2}
                                            </div>
                                        </Form.Group>
                                        <Form.Group className='col-sm-6'>
                                            <Form.Label className='floating-label'>
                                                Upload Image
                                            </Form.Label>
                                            <InputGroup>
                                                <div className='fileinput-preview team-img-upload'>
                                                    <img
                                                        src={
                                                            imagePreview.blockImage2
                                                                ? imagePreview.blockImage2.startsWith("data")
                                                                    ? imagePreview.blockImage2
                                                                    : `${ImageURL}/${imagePreview.blockImage2}`
                                                                : defaultImage
                                                        }
                                                        alt={"Profile Preview"}
                                                    />
                                                    <div className='file-upload'>
                                                        <label
                                                            htmlFor={`feature-image2`}
                                                            className='file-upload-label'
                                                        >
                                                            Choose Image
                                                        </label>
                                                        <input
                                                            className='file-upload-input'
                                                            type='file'
                                                            accept='image/*'
                                                            ref={ref2}
                                                            name='blockImage2'
                                                            id={`feature-image2`}
                                                            onChange={handleFile}
                                                        />
                                                    </div>
                                                    {imagePreview.blockImage2 &&
                                                        imagePreview.blockImage2.length ? (
                                                        <div className='remove_icon_wrapper'>
                                                            <i
                                                                className='fa fa-trash-o trash_icon'
                                                                onClick={() => removeImage("blockImage2")}
                                                                aria-hidden='true'
                                                            />
                                                        </div>
                                                    ) : null}
                                                </div>
                                            </InputGroup>
                                            <div className={"text-danger error-text"}>
                                                {error && error.blockImage2}
                                            </div>
                                        </Form.Group>
                                    </div>
                                     {/* card three editing starts here */}
                                     <h4 className='cms-title'>Card 3 Block</h4>
                                    <div className='row'>
                                        <Form.Group className='col-sm-6'>
                                            <Form.Label className='floating-label'>
                                                Title<span className={"mandatory"}>*</span>
                                                &nbsp;
                                            </Form.Label>
                                            <InputGroup>
                                                <input
                                                    type={"text"}
                                                    name={"blockTitle7"}
                                                    value={form.blockTitle7}
                                                    className={"form-control floating-input"}
                                                    placeholder={" "}
                                                    onChange={handleChange}
                                                />
                                            </InputGroup>
                                            <div className={"text-danger error-text"}>
                                                {error && error.blockTitle7}
                                            </div>
                                        </Form.Group>
                                        <Form.Group className='col-sm-6'>
                                            <Form.Label className='floating-label'>
                                                Sub Title<span className={"mandatory"}>*</span>
                                                &nbsp;
                                            </Form.Label>
                                            <InputGroup>
                                                <input
                                                    type={"text"}
                                                    name={"blockTitle8"}
                                                    value={form.blockTitle8}
                                                    className={"form-control floating-input"}
                                                    placeholder={" "}
                                                    onChange={handleChange}
                                                />
                                            </InputGroup>
                                            <div className={"text-danger error-text"}>
                                                {error && error.blockTitle8}
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
                                                            imagePreview.blockImage3
                                                                ? imagePreview.blockImage3.startsWith("data")
                                                                    ? imagePreview.blockImage3
                                                                    : `${ImageURL}/${imagePreview.blockImage3}`
                                                                : defaultImage
                                                        }
                                                        alt={"Profile Preview"}
                                                    />
                                                    <div className='file-upload'>
                                                        <label
                                                            htmlFor={`feature-image3`}
                                                            className='file-upload-label'
                                                        >
                                                            Choose Image
                                                        </label>
                                                        <input
                                                            className='file-upload-input'
                                                            type='file'
                                                            accept='image/*'
                                                            ref={ref3}
                                                            name='blockImage3'
                                                            id={`feature-image3`}
                                                            onChange={handleFile}
                                                        />
                                                    </div>
                                                    {imagePreview.blockImage3 &&
                                                        imagePreview.blockImage3.length ? (
                                                        <div className='remove_icon_wrapper'>
                                                            <i
                                                                className='fa fa-trash-o trash_icon'
                                                                onClick={() => removeImage("blockImage3")}
                                                                aria-hidden='true'
                                                            />
                                                        </div>
                                                    ) : null}
                                                </div>
                                            </InputGroup>
                                            <div className={"text-danger error-text"}>
                                                {error && error.blockImage3}
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
                                                editorState={form.editorState3}
                                                onEditorStateChange={handleChangeEditor3}
                                            />
                                            <div className={"text-danger error-text"}>
                                                {error && error.block3}
                                            </div>
                                        </Form.Group>
                                    </div>
                                     {/* card four editing starts here */}
                                     <h4 className='cms-title'>Card 4 Block</h4>
                                    <div className='row'>
                                        <Form.Group className='col-sm-6'>
                                            <Form.Label className='floating-label'>
                                                Title<span className={"mandatory"}>*</span>
                                                &nbsp;
                                            </Form.Label>
                                            <InputGroup>
                                                <input
                                                    type={"text"}
                                                    name={"blockTitle9"}
                                                    value={form.blockTitle9}
                                                    className={"form-control floating-input"}
                                                    placeholder={" "}
                                                    onChange={handleChange}
                                                />
                                            </InputGroup>
                                            <div className={"text-danger error-text"}>
                                                {error && error.blockTitle9}
                                            </div>
                                        </Form.Group>
                                        <Form.Group className='col-sm-6'>
                                            <Form.Label className='floating-label'>
                                                Sub Title<span className={"mandatory"}>*</span>
                                                &nbsp;
                                            </Form.Label>
                                            <InputGroup>
                                                <input
                                                    type={"text"}
                                                    name={"blockTitle10"}
                                                    value={form.blockTitle10}
                                                    className={"form-control floating-input"}
                                                    placeholder={" "}
                                                    onChange={handleChange}
                                                />
                                            </InputGroup>
                                            <div className={"text-danger error-text"}>
                                                {error && error.blockTitle10}
                                            </div>
                                        </Form.Group>
                                    </div>
                                    <div className='row'>
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
                                                editorState={form.editorState4}
                                                onEditorStateChange={handleChangeEditor4}
                                            />
                                            <div className={"text-danger error-text"}>
                                                {error && error.block4}
                                            </div>
                                        </Form.Group>
                                        <Form.Group className='col-sm-6'>
                                            <Form.Label className='floating-label'>
                                                Upload Image
                                            </Form.Label>
                                            <InputGroup>
                                                <div className='fileinput-preview team-img-upload'>
                                                    <img
                                                        src={
                                                            imagePreview.blockImage4
                                                                ? imagePreview.blockImage4.startsWith("data")
                                                                    ? imagePreview.blockImage4
                                                                    : `${ImageURL}/${imagePreview.blockImage4}`
                                                                : defaultImage
                                                        }
                                                        alt={"Profile Preview"}
                                                    />
                                                    <div className='file-upload'>
                                                        <label
                                                            htmlFor={`feature-image4`}
                                                            className='file-upload-label'
                                                        >
                                                            Choose Image
                                                        </label>
                                                        <input
                                                            className='file-upload-input'
                                                            type='file'
                                                            accept='image/*'
                                                            ref={ref4}
                                                            name='blockImage4'
                                                            id={`feature-image4`}
                                                            onChange={handleFile}
                                                        />
                                                    </div>
                                                    {imagePreview.blockImage4 &&
                                                        imagePreview.blockImage4.length ? (
                                                        <div className='remove_icon_wrapper'>
                                                            <i
                                                                className='fa fa-trash-o trash_icon'
                                                                onClick={() => removeImage("blockImage4")}
                                                                aria-hidden='true'
                                                            />
                                                        </div>
                                                    ) : null}
                                                </div>
                                            </InputGroup>
                                            <div className={"text-danger error-text"}>
                                                {error && error.blockImage4}
                                            </div>
                                        </Form.Group>
                                    </div>
                                </div>

                                <div className='cms-section'>
                                    <h4 className='cms-title'>Block Three</h4>
                                    <div className='row'>
                                        <Form.Group className='col-sm-6'>
                                            <Form.Label className='floating-label'>
                                                Upload Image
                                            </Form.Label>
                                            <InputGroup>
                                                <div className='fileinput-preview team-img-upload'>
                                                    <img
                                                        src={
                                                            imagePreview.blockImage5
                                                                ? imagePreview.blockImage5.startsWith("data")
                                                                    ? imagePreview.blockImage5
                                                                    : `${ImageURL}/${imagePreview.blockImage5}`
                                                                : defaultImage
                                                        }
                                                        alt={"Profile Preview"}
                                                    />
                                                    <div className='file-upload'>
                                                        <label
                                                            htmlFor={`feature-image5`}
                                                            className='file-upload-label'
                                                        >
                                                            Choose Image
                                                        </label>
                                                        <input
                                                            className='file-upload-input'
                                                            type='file'
                                                            accept='image/*'
                                                            ref={ref5}
                                                            name='blockImage5'
                                                            id={`feature-image5`}
                                                            onChange={handleFile}
                                                        />
                                                    </div>
                                                    {imagePreview.blockImage5 &&
                                                        imagePreview.blockImage5.length ? (
                                                        <div className='remove_icon_wrapper'>
                                                            <i
                                                                className='fa fa-trash-o trash_icon'
                                                                onClick={() => removeImage("blockImage5")}
                                                                aria-hidden='true'
                                                            />
                                                        </div>
                                                    ) : null}
                                                </div>
                                            </InputGroup>
                                            <div className={"text-danger error-text"}>
                                                {error && error.blockImage5}
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
                                                editorState={form.editorState5}
                                                onEditorStateChange={handleChangeEditor5}
                                            />
                                            <div className={"text-danger error-text"}>
                                                {error && error.block5}
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
                                                editorState={form.editorState6}
                                                onEditorStateChange={handleChangeEditor6}
                                            />
                                            <div className={"text-danger error-text"}>
                                                {error && error.block6}
                                            </div>
                                        </Form.Group>
                                        {/* <Form.Group className='col-sm-6'>
                                            <Form.Label className='floating-label'>
                                                Upload Image
                                            </Form.Label>
                                            <InputGroup>
                                                <div className='fileinput-preview team-img-upload'>
                                                    <img
                                                        src={
                                                            imagePreview.blockImage6
                                                                ? imagePreview.blockImage6.startsWith("data")
                                                                    ? imagePreview.blockImage6
                                                                    : `${ImageURL}/${imagePreview.blockImage6}`
                                                                : defaultImage
                                                        }
                                                        alt={"Profile Preview"}
                                                    />
                                                    <div className='file-upload'>
                                                        <label
                                                            htmlFor={`feature-image6`}
                                                            className='file-upload-label'
                                                        >
                                                            Choose Image
                                                        </label>
                                                        <input
                                                            className='file-upload-input'
                                                            type='file'
                                                            accept='image/*'
                                                            ref={ref6}
                                                            name='blockImage6'
                                                            id={`feature-image6`}
                                                            onChange={handleFile}
                                                        />
                                                    </div>
                                                    {imagePreview.blockImage6 &&
                                                        imagePreview.blockImage6.length ? (
                                                        <div className='remove_icon_wrapper'>
                                                            <i
                                                                className='fa fa-trash-o trash_icon'
                                                                onClick={() => removeImage("blockImage6")}
                                                                aria-hidden='true'
                                                            />
                                                        </div>
                                                    ) : null}
                                                </div>
                                            </InputGroup>
                                            <div className={"text-danger error-text"}>
                                                {error && error.blockImage6}
                                            </div>
                                        </Form.Group> */}
                                    </div>
                                </div>
                                <div className='cms-section'>
                                    <h4 className='cms-title'>News letter block</h4>
                                    <div className='row'>
                                        <Form.Group className='col-sm-6'>
                                            <Form.Label className='floating-label'>
                                                Title<span className={"mandatory"}>*</span>
                                                &nbsp;
                                            </Form.Label>
                                            <InputGroup>
                                                <input
                                                    type={"text"}
                                                    name={"blockTitle12"}
                                                    value={form.blockTitle12}
                                                    className={"form-control floating-input"}
                                                    placeholder={" "}
                                                    onChange={handleChange}
                                                />
                                            </InputGroup>
                                            <div className={"text-danger error-text"}>
                                                {error && error.blockTitle12}
                                            </div>
                                        </Form.Group>
                                        <Form.Group className='col-sm-6'>
                                            <Form.Label className='floating-label'>
                                                Sub Title<span className={"mandatory"}>*</span>
                                                &nbsp;
                                            </Form.Label>
                                            <InputGroup>
                                                <input
                                                    type={"text"}
                                                    name={"blockTitle13"}
                                                    value={form.blockTitle13}
                                                    className={"form-control floating-input"}
                                                    placeholder={" "}
                                                    onChange={handleChange}
                                                />
                                            </InputGroup>
                                            <div className={"text-danger error-text"}>
                                                {error && error.blockTitle13}
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

export default EditMarketingPage;
