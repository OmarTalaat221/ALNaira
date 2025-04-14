import React, { useState } from "react";
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
  CloseButton,
  Spinner,
} from "reactstrap";

import Breadcrumbs from "../../components/Common/Breadcrumb";
import "flatpickr/dist/themes/material_blue.css";
import Flatpickr from "react-flatpickr";
import LessonsTableList from "../Lessons/LessonsTabel/LessonsTableList";
import { useCallback } from "react";
import { AiOutlinePlusCircle } from "react-icons/ai";
import axios from "axios";
import { toast } from "react-toastify";
import { useEffect } from "react";
import "./mcqquestion.css";
import { Icon } from "@iconify/react";
import { Loader } from "rsuite";
import McqQuestionList from "./McqQuestionList/McqQuestionList";
import { uploadFile } from "../../utils";
const MCQQuestions = ({ CourseId, allunitdata }) => {
  const [type, setType] = useState(false);
  const location = useLocation();
  console.log(location);
  const [videoLink, setVideoLink] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [img, setimg] = useState("");
  const [answersArray, setanswersArray] = useState([]);
  const [videos, setvideos] = useState([]);
  const [answerlist, setanswerlist] = useState([
    { id: 0, answer: "", checked: false },
  ]);
  const [numberOfPages, setNumberOfPages] = useState(false);
  const [loading, setLoading] = useState(false);
  const [book_url, setBookUrl] = useState(false);
  const [mcqquestions, setmcqquestions] = useState([]);
  const [addquestiondata, setaddquestiondata] = useState({
    question_text: "",
    help_video: "",
    valid_answer: "",
    question_image_url: "",
    help_pdf: "",
    unit_id: "0",
    pdf_page: "",
    video_time: "",
    help_text: "",
  });

  const [getLoading, setGetLoading] = useState(false);

  const getmcqQuestions = () => {
    // alert("asd")
    const data_send = {
      unit_id: location?.state?.unitdata?.unit_id,
      course_id: location?.state?.unitdata?.course_id,
    };

    setGetLoading(true);
    axios
      .post(
        "https://camp-coding.online/Teacher_App_2025/elnaira_jor/admin/Exams/select_questions.php",
        JSON.stringify(data_send)
      )
      .then((res) => {
        setmcqquestions(res?.message);
      })
      .finally(() => {
        setGetLoading(false);
      });
  };

  const getvideos = () => {
    axios
      .get(
        "https://camp-coding.online/Teacher_App_2025/elnaira_jor/admin/videos/select_videos.php"
      )
      .then((res) => {
        setvideos(res);
        setaddquestiondata({ ...addquestiondata, help_video: res[0].video_id });
      });
  };

  useEffect(() => {
    getvideos();
    getmcqQuestions();
  }, []);

  //
  const [modal, setModal] = useState(false);
  const toggle = useCallback(() => {
    if (modal) {
      // setModal(false);
      setIsModalOpen(false);
    } else {
      // setModal(true);
      setIsModalOpen(false);
    }
  }, [modal]);
  const [selectedFiles, setselectedFiles] = useState([]);
  const [book, setBook] = useState(false);
  const [uploadloading, setuploadloading] = useState(false);

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

  const handlesavetxt = (e, i, id) => {
    // console.log(i)
    // console.log(txt)
    // ;
    const list = [...answerlist];
    if (id == "answer") {
      list[i]["answer"] = e.target.value;
    } else if (id == "exp") {
      list[i]["answer_exp"] = e.target.value;
    }
    setanswersArray(list);
  };

  const handleaddquestion = () => {
    let answerslistarr = [...answerlist];
    //
    let answers = "";
    let valid_answer = "";
    for (let i = 0; i < answerslistarr.length; i++) {
      if (i == 0) {
        answers += answerslistarr[i].answer;
      } else {
        answers += "******matary***" + answerslistarr[i].answer;
      }
      if (answerslistarr[i].checked) {
        valid_answer = answerslistarr[i].answer;
      }
    }
    //
    const data_send = {
      unit_id: location?.state?.unitdata?.unit_id,
      question_text: addquestiondata.question_text,
      question_answers: answerslistarr
        ?.map((item) => item?.answer + "/**exp**/" + item?.answer_exp)
        ?.join("//CAMP//"),
      question_valid_answer: valid_answer,
      exam_id: "0",
      course_id: location?.state?.unitdata?.course_id,
      question_image: addquestiondata.question_image_url?.length
        ? addquestiondata.question_image_url
        : null,
      help_text: addquestiondata.help_text,
      help_pdf: addquestiondata.help_pdf,
      help_video: addquestiondata.help_video,
      pdf_page: addquestiondata.pdf_page,
      video_time: addquestiondata.video_time,
      explain: addquestiondata.explain,
    };
    console.log(addquestiondata);
    axios
      .post(
        "https://camp-coding.online/Teacher_App_2025/elnaira_jor/admin/Exams/add_ques.php",
        JSON.stringify(data_send)
      )
      .then((res) => {
        if (res.status == "success") {
          getmcqQuestions();
          toast.success("Question has added successfully");
        } else if (res.status == "error") {
          toast.error("Question has not added");
        } else {
          toast.error("Something Went Error");
        }
      })
      .catch((err) => console.log(err));
  };

  const handleuploadimg = async () => {
    setuploadloading(true);
    const res = await uploadFile(img);
    setaddquestiondata({ ...addquestiondata, question_image_url: res });
    // setaddquestiondata({ ...addquestiondata, question_image_url: res });
    const formdata = new FormData();
    formdata.append("image", img);
    axios
      .post(
        "https://camp-coding.online/Teacher_App_2025/elnaira_jor/admin/image_uplouder.php",
        formdata
      )
      .then((res) => {})
      .catch((err) => console.log(err))
      .finally(() => {
        setuploadloading(false);
      });
  };

  const handleFileSelect = async (event) => {
    const file = event.target.files[0];
    if (!file) {
      // No file selected
      return;
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
    };
  };

  const uploadPdf = async () => {
    setLoading(true);
    const formData = new FormData();
    if (book) {
      formData.append("file_attachment", book);
      console.log(book);
      const url = await axios.post(
        "https://camp-coding.online/Teacher_App_2025/elnaira_jor/admin/uploud_pdf.php",
        formData
      );
      console.log(url);
      if (url.status == "success") {
        setBookUrl(url.message);
        setaddquestiondata({ ...addquestiondata, help_pdf: url.message });
        toast.success("File Uploaded Successfully");
      } else {
        toast.error(url.message);
      }
    }
    setLoading(false);
  };

  return (
    <React.Fragment>
      <Container fluid={true}>
        <Breadcrumbs
          title="MCQ Questions"
          breadcrumbItem="MCQ Questions List"
        />

        <Row>
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
                              // showModal()
                              // setModal(true);
                              setIsModalOpen(true);
                            }}
                          >
                            <i
                              onClick={() => {
                                // setModal(true);
                                setIsModalOpen(true);
                              }}
                              className="mdi mdi-plus me-1"
                            ></i>{" "}
                            Add MCQQuestion
                          </button>
                        </div>
                      </Col>
                    </Row>
                  </div>
                </div>
                <div id="table-invoices-list">
                  {getLoading ? (
                    <Loader />
                  ) : (
                    <McqQuestionList
                      updatemcq={() => {
                        getmcqQuestions();
                      }}
                      Units={
                        mcqquestions && mcqquestions?.length ? mcqquestions : []
                      }
                    />
                  )}
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
          <Form
            onSubmit={(e) => {
              e.preventDefault();
              // validation.handleSubmit();
              return false;
            }}
          >
            <Row>
              <Col lg={12}>
                <div className="custom-accordion" id="addcourse-accordion">
                  <Card>
                    <div className="p-4 border-top">
                      <form>
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
                                      id="price"
                                      name="answer"
                                      placeholder="Enter Answer"
                                      type="text"
                                      className="form-control"
                                    />
                                  </div>
                                </Col>
                              </>
                            );
                          })}

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
                            <Col lg={6}>
                              <div className="mb-3">
                                <label className="form-label" htmlFor="hours">
                                  Correct Answer Explanation
                                </label>
                                <textarea
                                  style={{ height: "100px", width: "100%" }}
                                  id="hours"
                                  name="explanation"
                                  placeholder="Enter Explanation"
                                  type="number"
                                  className="form-control"
                                ></textarea>
                              </div>
                            </Col>
                          </Col>
                        </Row>
                        <button className="btn btn-success">
                          Add Question
                        </button>
                      </form>
                    </div>
                  </Card>
                </div>
              </Col>
            </Row>
            <Row>
              <Col>
                <div className="text-end">
                  <button type="submit" className="btn btn-success save-user">
                    Save
                  </button>
                </div>
              </Col>
            </Row>
          </Form>
        </ModalBody>
      </Modal>
      <Modal title="add question" isOpen={isModalOpen}>
        <form
          action="#"
          style={{
            padding: "15px",
            display: "flex",
            flexDirection: "column",
            gap: "13px",
          }}
          onSubmit={(e) => {
            e.preventDefault();
            handleaddquestion();
            setIsModalOpen(false);
          }}
        >
          <CloseButton
            onClick={() => setIsModalOpen(false)}
            style={{ marginLeft: "auto" }}
          />

          <div className="inputField withtext">
            <label htmlFor="exam_name">Question Text</label>
            <Input
              style={{
                width: "100%",
                padding: "10px",
                borderRadius: "4px",
              }}
              type="text"
              name="exam_name"
              id="exam_name"
              placeholder="question text"
              required
              onChange={(e) => {
                setaddquestiondata({
                  ...addquestiondata,
                  question_text: e.target.value,
                });
                // setexamdata({...examdata,exam_name:e.target.value})
              }}
            />
          </div>

          <div className="inputField withtext upimgdiv">
            <label htmlFor="exam_img">Question image</label>
            <Input
              style={{
                width: "100%",
                padding: "10px",
                borderRadius: "4px",
              }}
              type="file"
              name="exam_img"
              id="exam_img"
              placeholder="question text"
              // required
              onChange={(e) => {
                setimg(e.target.files[0]);
                // setaddquestiondata({...addquestiondata,question_text:e.target.value})
                // setexamdata({...examdata,exam_name:e.target.value})
              }}
            />
            {uploadloading ? (
              <Loader />
            ) : (
              <img
                onClick={() => {
                  handleuploadimg();
                }}
                className="up_img"
                src={require("../../assets/images/upload.png")}
                alt=""
              />
            )}
          </div>
          {/* <div className="mb-3">
            <Label className="form-label">ebook file</Label>
            <div
              className="form-control"
              style={{
                display: "flex",
                width: "100%",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              {" "}
              <input
                type="file"
                id="pdfInput"
                accept=".pdf"
                onChange={handleFileSelect}
              />{" "}
              <span className="btn btn-primary" onClick={() => uploadPdf()}>
                {!loading ? (
                  <Icon icon="solar:upload-bold-duotone" />
                ) : (
                  <Loader size="sm" />
                )}
              </span>
            </div>
            <h4>
              {numberOfPages ? (
                <span>numberOfPages : {numberOfPages}</span>
              ) : null}
            </h4>
          </div> */}

          {/* <div className="inputField withtext">
            <label htmlFor="exam_name">Help Video</label>
            <select
              onChange={(e) => {
                setaddquestiondata({
                  ...addquestiondata,
                  help_video: e.target.value,
                });
              }}
              value={addquestiondata.help_video}
              className="form-control"
            >
              {videos.map((item) => {
                return (
                  <option value={item.video_id}>{item.video_title}</option>
                );
              })}
            </select>
          </div>

          <div className="mb-3">
            <label className="form-label" htmlFor="coursename">
              help page
            </label>
            <input
              id="pdf_page"
              name="pdf_page"
              type="text"
              className="form-control"
              onChange={(e) => {
                console.log("Help", e.target.value);
                setaddquestiondata({
                  ...addquestiondata,
                  pdf_page: e.target.value,
                });
              }}
            />
          </div>

          <div className="mb-3">
            <label className="form-label" htmlFor="coursename">
              help minute
            </label>
            <input
              id="video_time"
              name="video_time"
              type="text"
              className="form-control"
              onChange={(e) => {
                setaddquestiondata({
                  ...addquestiondata,
                  video_time: e.target.value,
                });
              }}
            />
          </div> */}

          <div className="add_answer_question">
            <label
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <span>Add Answer</span>
              <span
                onClick={() => {
                  setanswerlist([
                    ...answerlist,
                    { id: answerlist.length, answer: "" },
                  ]);
                }}
                style={{ cursor: "pointer", fontSize: "26px" }}
              >
                +
              </span>
            </label>
            {answerlist.map((item, index) => {
              return (
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <textarea
                    value={item.answer_text}
                    onChange={(e) => {
                      handlesavetxt(e, index, "answer");
                    }}
                    style={{ marginBottom: "10px", width: "90%" }}
                    className="form-control"
                  ></textarea>
                  <textarea
                    value={item.answer_exp}
                    onChange={(e) => {
                      handlesavetxt(e, index, "exp");
                    }}
                    style={{ marginBottom: "10px", width: "90%" }}
                    className="form-control"
                  ></textarea>
                  <input
                    onClick={() => {
                      // setanswerlist([...ans]);
                      let answerarr = [...answerlist];
                      setanswerlist(
                        answerarr.map((it, index) => {
                          if (item.id == it.id) {
                            return { ...it, checked: true };
                          } else return { ...it, checked: false };
                        })
                      );
                      // for(let i=0;i<answerarr.length;i++){
                      //   if()
                      // }
                      setaddquestiondata({
                        ...addquestiondata,
                        valid_answer: item.answer,
                      });
                    }}
                    checked={item.checked}
                    type="checkbox"
                    name=""
                    id=""
                  />
                </div>
              );
            })}
          </div>
          {/* <div className="mb-3">
            <label className="form-label" htmlFor="coursename">
              explain
            </label>
            <textarea
              style={{ height: "100px" }}
              id="explain"
              name="explain"
              type="text"
              className="form-control"
              onChange={(e) => {
                setaddquestiondata({
                  ...addquestiondata,
                  explain: e.target.value,
                });
              }}
            ></textarea>
          </div> */}
          <button
            onClick={() => {
              // console.log("es")
              // setIsModalOpen(true);
            }}
            className="btn btn-success"
            style={{ margin: "10px 0 0 auto" }}
          >
            {" "}
            Add Question{" "}
          </button>
        </form>
      </Modal>
    </React.Fragment>
  );
};

export default MCQQuestions;
