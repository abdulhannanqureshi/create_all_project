import React, { useState, useRef, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Card, Row, Col } from "react-bootstrap";
import { Labs } from "../../../validator";
import { addLabRequest } from "../../../actions";
import LabForm from "./LabForm";
// For Text Editor
import { EditorState, convertToRaw, ContentState } from "draft-js";
import draftToHtml from "draftjs-to-html";
import {
  getCourseRequest
} from "../../../actions";
import {
  IRootState,
  ICategoryProps,
  ICategoryState,
  ICategoryData,
} from "../../../interfaces";


const AddLab = (props: ICategoryProps) => {
  const imgRef = useRef<HTMLInputElement>(null);
  const dispatch = useDispatch();

  const defaultForm = {
    title: "",
    course: "",
    link: "",
    amount: "",
    labsImage: "",
    description: "",
    // For Text Editor
    editorState: EditorState.createEmpty(),
  };
  const defaultError = {
    title: "",
    course: "",
    link: "",
    amount: "",
    labsImage: "",
    description: "",
  };
  ///Geting catergory listings
  useEffect(() => {
    handleQueryParams();
   
  }, [])
  const handleQueryParams = () => {
    const data = {
      limit: "all",
    }
    dispatch(getCourseRequest(data));
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
    const { isValid, errors } = Labs({
      ...form,
      labsImage: form.labsImage ? "labsImage" : "",
    });
    console.log(error,"this is error")
    if (isValid) {
      dispatch(addLabRequest(form));
    } else {
      setError({ ...error, ...errors });
      return;
    }
  };
  // For get reducer data
  const  courseData  = useSelector(
    (state: any) => state.courseReducer.courseData
  );
  const [imagePreview, setImagePreview] = useState("");

  const handleFile = (e: any) => {
    let file = e.target.files[0];
    setForm({ ...form, [e.target.name]: file });
    setError({ ...error, [e.target.name]: "" });
    // For Preview
    let reader: any = new FileReader();
    reader.onloadend = () => {
      setImagePreview(reader.result);
    };
    reader.readAsDataURL(file);
  };

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
                <i className='icon-note' /> Add Lab
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
                    handleChangeEditor={handleChangeEditor}
                    useRef={imgRef}
                    category={courseData}
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

export default AddLab;
