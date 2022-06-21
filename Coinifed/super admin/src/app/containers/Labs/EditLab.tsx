import React, { useState, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Card, Row, Col } from "react-bootstrap";
import { Labs } from "../../../validator";
import { viewLabRequest, editLabRequest, getCategoryRequest } from "../../../actions";
import LabForm from "./LabForm";
// For Text Editor
import { EditorState, convertToRaw, ContentState } from "draft-js";
import draftToHtml from "draftjs-to-html";
import htmlToDraft from "html-to-draftjs";

const EditLab = (props: any) => {
  const imgRef = useRef<HTMLInputElement>(null);
  const dispatch = useDispatch();

  const defaultForm = {
    title: "",
    course: "",
    link: "",
    amount: "",
    labsImage: "",
    description: "",
    courseName:"",
    id: props.match.params.id,
    // For Text Editor
    editorState: EditorState.createEmpty(),
  };
  const defaultError = {
    title: "",
    course: "",
    link: "",
    amount: "",
    labsImage: "",
    description: ""
  };
  const [form, setForm] = useState(defaultForm);
  const [error, setError] = useState(defaultError);

  useEffect(() => {
    dispatch(viewLabRequest(defaultForm.id));
  }, []);

  const { labView } = useSelector((state: any) => state.labReducer);
  useEffect(() => {
    if (labView) {
      const contentBlock = htmlToDraft(
        labView.description ? labView.description : "<p></p>"
      );
      const contentState = ContentState.createFromBlockArray(
        contentBlock.contentBlocks
      );
      const mainSectionContent = EditorState.createWithContent(contentState);
      console.log(labView.labsImage,"this is image of the lab")
      setForm({
        ...form,
        title: labView.title,
        course: labView.course,
        amount: labView.amount,
        link: labView.link,
        description: labView.description,
        labsImage: labView.labsImage,
        editorState: mainSectionContent,
        courseName:labView.courseName
      });
      setImagePreview(labView.labsImage);
    }
  }, [labView]);

  ///Geting catergory listings
  useEffect(() => {
    handleQueryParams();
    console.log(defaultForm)
  }, [])
  const handleQueryParams = () => {
    const data = {
      limit: "all",
    }
    dispatch(getCategoryRequest(data));
    console.log(data, "this is props")
  };
  // For get reducer data
  const { categoryData } = useSelector(
    (state: any) => state.categoryReducer
  );

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setForm({ ...form, [name]: value });
    setError({ ...error, [name]: "" });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // To validate form fields
    const { isValid, errors } = Labs({
      ...form,
      labsImage: form.labsImage ? "labsImage" : "",
    });
    if (isValid) {
      dispatch(editLabRequest({ ...form, props }));
    } else {
      setError({ ...error, ...errors });
      return;
    }
  };

  // For Preview
  const [imagePreview, setImagePreview] = useState("");

  const handleFile = (e: any) => {
    let file = e.target.files[0];
    setForm({ ...form, [e.target.name]: file });
    setError({ ...error, [e.target.name]: "" });
    let reader: any = new FileReader();
    reader.onloadend = () => {
      setImagePreview(reader.result);
    };
    reader.readAsDataURL(file);
  };
  // for remove preview image
  const removeImage = () => {
    setImagePreview("");
    setForm({ ...form, labsImage: "" });
    let selectFile: any = imgRef.current;
    selectFile.value = "";
  };
  // For Text Editor
  const handleChangeEditor = (editorState: any) => {
    setForm({
      ...form,
      editorState,
      description: draftToHtml(convertToRaw(editorState.getCurrentContent())),
    });
    setError({
      ...error,
      description: "",
    });
  };

  return (
    <div className='cr-page px-3 min-height650 my-profile-section'>
      <Row>
        <Col xs='12' sm='12' lg='12'>
          <Card>
            <Card.Header>
              <h4>
                <i className='icon-note' /> Edit Lab
              </h4>
            </Card.Header>
            <Card.Body>
              <div className='row'>
                <div className='col-md-12  my-4'>
                  <LabForm
                    form={form}
                    imagePreview={imagePreview}
                    handleChange={handleChange}
                    error={error}
                    handleSubmit={handleSubmit}
                    handleFile={handleFile}
                    removeImage={removeImage}
                    category={categoryData}
                    handleChangeEditor={handleChangeEditor}
                    useRef={imgRef}
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

export default EditLab;
