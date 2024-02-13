import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  Row,
  Col,
  Container,
  Modal,
  TabContent,
  TabPane,
  Tooltip,
  Card,
  CardBody,
  UncontrolledDropdown,
  DropdownMenu,
  DropdownItem,
  DropdownToggle,
  ModalHeader,
  ModalBody,
  Form,
  Label,
  Input,
  FormFeedback,
} from "reactstrap";
import Breadcrumbs from "../../components/Common/Breadcrumb";
import "flatpickr/dist/themes/material_blue.css";
import Flatpickr from "react-flatpickr";
import LessonsTableList from "../Lessons/LessonsTabel/LessonsTableList";
import { useCallback } from "react";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { Icon } from "@iconify/react";
import { Loader } from "rsuite";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import MCQTableList from "../Lessons/LessonsTabel/mcqlisttable";
import { base_url } from "../../constants";
const VideoMCQQuestions = ({ CourseId }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const [type, setType] = useState(false);
  const [videoLink, setVideoLink] = useState(false);


  const [modal, setModal] = useState(false);
  const toggle = useCallback(() => {
    if (modal) {
      setModal(false);
    } else {
      setModal(true);
    }
  }, [modal]);
  const [selectedFiles, setselectedFiles] = useState([]);

  const [inputList, setinputList] = useState([
    { answer: "", explanation: "", id: 1 },
  ]);
  const [selectanswer, setselectanswer] = useState("");

  const handleaddansex = (e, i) => {
    const { name, value } = e.target;
    const list = [...inputList];
    list[i][name] = value;
    setinputList(list);
  };

  const handleaddanans = (e, i) => {
    const { name, value } = e.target;
    const list = [...inputList];
    list[i][name] = value;
    setinputList(list);
  };

  const video = location?.state?.videoData;
  useEffect(() => {
    if (!location?.state?.videoData) {
      return navigate("/videos");
    }
  }, [])

  const [send_data, setSendData] = useState(
    {
      "course_id": "1",
      "unit_id": "video_" + video?.video_id,
      "question_text": null,
      "question_image_url": null,
      "help_video": "0",
      "answers": null,
      "valid_answer": null,
      // "ans***des1***matary***ans2***des2***matary***ans3***des3"
    }
  );
  const [validAnswer, setValidAnswer] = useState(false);
  const [uploadImage, setUploadImage] = useState(false);
  const [numberOfPages, setNumberOfPages] = useState(false);
  const handleFileSelect = async (event) => {
    const file = event.target.files[0];
    if (!file && !file?.length) {
      setNumberOfPages(false);
      return setBook(false);
    }
    setBook(file);
    var reader = new FileReader();
    reader.readAsBinaryString(event.target.files[0]);
    reader.onloadend = function () {
      var count = reader.result.match(/\/Type[\s]*\/Page[^s]/g)?.length;
      if (count) {
        setNumberOfPages(count);
      } else {
        setNumberOfPages(false);
      }
    }

  };
  const [book, setBook] = useState(false);
  const [loading, setLoading] = useState(false);
  const uploadPdf = async () => {
    setLoading(true)
    const formData = new FormData();
    if (book) {
      formData.append("file_attachment", book)
      const url = await axios.post(base_url+"/admin/uploud_pdf.php", formData);
      console.log(url);
      if (url.status == "success") {
        toast.success("File Uploaded Successfully");
        setSendData({
          ...send_data,
          help_pdf: url?.message
        })
      } else {
        toast.error(url.message)
      }
    } else { toast.error("Please Upload File") }
    setLoading(false);

  }

  const [upLoading, setUpLoading] = useState(false);
  const [image, setImage] = useState(false);

  const uploadFile = async () => {
    setUpLoading(true);

    const formData = new FormData();
    if (image) {
      formData.append("image", image)
      const url = await axios.post(base_url+"/admin/image_uplouder.php", formData);
      console.log(url);
      if (url && url?.length) {
        toast.success("Image Uploaded Successfully");
        setSendData({
          ...send_data,
          question_image_url: url
        })
      } else {
        toast.error(url.message)
      }
    } else { toast.error("Please Upload File") }
    setUpLoading(false);

  }

  const [self, setSelf] = useState(false)

  const addMCQ = async () => {
    const answers = inputList?.map(
      (item, index) =>
        index != inputList?.length - 1 ? item?.answer?.trim() + "***" + "matary" + "***" : item?.answer?.trim())
      ?.join("");

    setSendData({
      ...send_data,
      "answers": answers,
      "valid_answer": validAnswer?.answer?.trim()
    });

    await axios.post(base_url+"/admin/videos/insert_question.php", send_data).then((res) => {
      console.log(res);
      if (res.status == "success") {
        toast.success("Added");
        setSelf(!self);
      } else {
        toast.error(res.message);
      }
    })

    console.log(send_data);

  }


  return (
    <React.Fragment>
      <Container fluid={true}>
        <Breadcrumbs title="MCQ Questions" breadcrumbItem="MCQ Questions List" />

        <Row style={{ margin: "19px 0" }}>
          <Col lg={12}>
            <Card>
              <CardBody>
                <div className="position-relative">
                  <div className="modal-button mt-2">
                    <Row className="align-items-start">
                      <Col className="col-sm">
                        <div>
                          <button
                            type="button"
                            className="btn btn-success mb-4"
                            data-bs-toggle="modal"
                            data-bs-target="#addCourseModal"
                            onClick={() => {
                              setModal(true);
                            }}
                          >
                            <i
                              onClick={() => {
                                setModal(true);
                              }}
                              className="mdi mdi-plus me-1"
                            ></i>{" "}
                            Add MCQ Question
                          </button>
                        </div>
                      </Col>

                    </Row>
                  </div>
                </div>
                <div id="table-invoices-list">
                  <MCQTableList updatedata={()=>{

                  }} video_id={video?.video_id} self={self}/>
                </div>
              </CardBody>
            </Card>
          </Col>
        </Row>


      </Container>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle} tag="h4">
          Add New MCQ Question
        </ModalHeader>
        <ModalBody>

          <Row>
            <Col lg={12}>
              <div className="custom-accordion" id="addcourse-accordion">
                <Card>

                  <div className="p-4 border-top">
                    <form>
                      <Col md={12}>
                        <div className="mb-3">
                          <h3 className="form-label">question image</h3>
                          <div style={{ "display": "flex", width: "100%", justifyContent: "space-between", alignItems: "center" }}>
                            <input type="file" id="ImageInput" disabled={upLoading ? true : false} onChange={(e) => setImage(e.currentTarget.files[0])} />  {!upLoading ? <span className="btn btn-primary" onClick={() => uploadFile()}>
                              <Icon icon="solar:upload-bold-duotone" />
                            </span> : <Loader size="sm" />}</div>
                        </div>
                      </Col>
                      <div className="mb-3">
                        <label className="form-label" htmlFor="coursename">
                          question title
                        </label>
                        <textarea
                          style={{ height: "100px" }}
                          id="coursename"
                          name="coursename"
                          placeholder="Enter Question Title"
                          type="text"
                          className="form-control"
                          onChange={(e) => {
                            setSendData({ ...send_data, question_text: e?.currentTarget?.value })
                          }}
                        ></textarea>
                      </div>

                      <div
                        onClick={() => {
                          setinputList([
                            ...inputList,
                            {
                              answer: "",
                              explanation: "",
                              id: inputList[inputList.length - 1].id + 1,
                            },
                          ]);
                        }}
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "10px",
                          cursor: "pointer",
                          marginBottom: "10px",
                        }}
                      >
                        <h5
                          style={{
                            fontSize: "24px",
                            textTransform: "capitalize",
                          }}
                        >
                          add answer
                        </h5>
                        <AiOutlinePlusCircle
                          style={{ fontSize: "30px", cursor: "pointer" }}
                        />
                      </div>
                      <Row>
                        {inputList.map((item, i) => {
                          return (
                            <>
                              <Col lg={6}>
                                <div className="mb-4">
                                  <label
                                    className="form-label"
                                    htmlFor="price"
                                  >
                                    Answer_{i + 1}
                                  </label>
                                  <Input
                                    onChange={(e) => handleaddansex(e, i)}
                                    name="answer"
                                    placeholder="Enter Answer"
                                    type="text"
                                    className="form-control"
                                  />


                                  {
                                    /*
                                    <Col lg={6}>
                                <div className="mb-3">
                                  <label className="form-label" htmlFor="hours">
                                    Answer Explanation
                                  </label
                                     <textarea
                                    style={{ height: "100px", width: "100%" }}
                                    name="explanation"
                                    placeholder="Enter Explanation"
                                    type="number"
                                    className="form-control"
                                    onChange={(e) => handleaddanans(e, i)}
                                  ></textarea>
                                   </div>
                              </Col>
                                    */
                                  }

                                </div>
                              </Col>
                            </>
                          );
                        })}
                        {/*
                   <Col md={12}>
                          <div className="mb-3">
                            <h3 className="form-label">Help PDF</h3>
                            <div style={{ "display": "flex", width: "100%", justifyContent: "space-between", alignItems: "center" }}>
                              <input type="file" id="pdfInput" accept=".pdf" disabled={loading ? true : false} onChange={handleFileSelect} />  {!loading ? <span className="btn btn-primary" onClick={() => uploadPdf()}>
                                <Icon icon="solar:upload-bold-duotone" />
                              </span> : <Loader size="sm" />}</div>
                            <h4>{numberOfPages ? <span>numberOfPages : {numberOfPages}</span> : null}</h4>
                          </div>
                        </Col>
                   */}


                        <h5>select correct answer</h5>
                        <Col lg={12}>
                          <div
                            style={{
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                              gap: "4px",
                              flexWrap: "wrap",
                            }}
                          >
                            {inputList.map((item, index) => {
                              return (
                                <div
                                  onClick={() => {
                                    setselectanswer(item.id);
                                    setValidAnswer(item)
                                  }}
                                  className={
                                    selectanswer == item.id
                                      ? "selectedques active"
                                      : "selectedques"
                                  }
                                >
                                  {item.id}
                                </div>
                              );
                            })}
                          </div>

                        </Col>
                      </Row>
                    </form>
                  </div>
                </Card>
              </div>
            </Col>
          </Row>
          <Row>
            <Col>
              <div className="text-end">
                <button type="submit" className="btn btn-success save-user"
                  onClick={() => {
                    console.log(inputList)
                    addMCQ();
                  }}
                >
                  Save
                </button>
              </div>
            </Col>
          </Row>

        </ModalBody>
      </Modal>


      <ToastContainer />
    </React.Fragment>
  );
};

export default VideoMCQQuestions;
