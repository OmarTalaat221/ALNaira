import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import {
  Card,
  CardBody,
  CloseButton,
  Col,
  Container,
  Input,
  Modal,
  ModalBody,
  Row,
} from "reactstrap";

// Import Flatepicker
import "flatpickr/dist/themes/material_blue.css";
import "./examqeustion.css";
// Breadcrumb
// import Breadcrumbs from "../../../components/Common/Breadcrumb";
// import CourseListTable from "./CourseTable/courseListTable";
import axios from "axios";
import { useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import { Loader } from "rsuite";
import Breadcrumbs from "../../components/Common/Breadcrumb";
import QuestionTableList from "./QuestionExamList/QuestionTableList";
// import Select from "react-select";
import { MenuItem, Select } from "@mui/material";
import { deleteQ } from "../../assets/images/deleteQ";
// import { userData } from "../../store/getProfileData";
const ExamQuestion = () => {
  document.title = "Courses | Matary - ";

  const location = useLocation();
  const { examdata } = location.state;
  // console.log(examdata)
  const [selectedquestiondata, setselectedquestiondata] = useState({});
  const navigate = useNavigate();
  const [showImportModal, setshowImportModal] = useState(false);
  const [Courses, setCourses] = useState([]);
  const [selectedCourse, setSelectCourse] = useState("");
  const [loading, setLoading] = useState(false);
  const [selectedUnits, setSelectedUnits] = useState([]);
  const [autoUnits, setAutoUnits] = useState([]);
  const [autoCourses, setAutoCourses] = useState([]);
  const [selectedCourses, setSelectedCourses] = useState([]);
  const [selectedTopics, setSelectedTopics] = useState([]);
  const [autoTopics, setAutoTopics] = useState([]);
  const [units, setunits] = useState([]);
  const [selecteduni, setselecteduni] = useState("");
  const [unitquestions, setunitquestions] = useState([]);
  const [selectedquestion, setselectedquestion] = useState("");
  const [topics, setTopics] = useState([]);
  const [selectedTopic, setSelectedTopic] = useState("");
  const [universities, setUniversities] = useState([]);
  const [selecteduniversity, setSelecteduniversity] = useState("");
  const [grades, setGrades] = useState([]);
  const [selecedGrade, setSelectedGrade] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [questions, setquestions] = useState(null);

  const [answerlist, setanswerlist] = useState([
    { question_id: 0, answer_text: "", answer_check: false },
  ]);

  const [videos, setvideos] = useState([]);
  const localdata = localStorage.getItem("elmatary_admin");
  let adminData = localdata && JSON.parse(localdata);
  const [image, setimage] = useState(null);
  const [help_pdf, sethelp_pdf] = useState(null);
  const [answersArray, setanswersArray] = useState([]);
  const [addquestiondata, setaddquestiondata] = useState({
    question_text: "",
    help_text: "",
    help_pdf: "",
    help_video: "",
    valid_answer: "",
    question_image: "",
    unit_id: "0",
  });

  const getUniversities = () => {
    setLoading("univ");
    axios
      .post(
        "https://camp-coding.online/Teacher_App_2025/elnaira_jor/admin/universities/select_universities_grade.php",
        {
          admin_id: adminData.admin_id,
          access_token: adminData.access_token,
        }
      )
      .then((res) => {
        if (Array.isArray(res.message)) setUniversities(res.message);
        // setSelecteduniversity(res?.message[0]?.university_id);
      })
      .catch((err) => console.log(err))
      .finally(() => {
        setLoading(false);
      });
  };
  const getCourses = async () => {
    try {
      setLoading("course");
      const courses = await axios.post(
        "https://camp-coding.online/Teacher_App_2025/elnaira_jor/admin/courses/select_courses.php",
        {
          grade_id: selecedGrade,

          admin_id: adminData.admin_id,
          access_token: adminData.access_token,
        }
      );
      // setCourses([...courses]);
      let pushedCourses = courses?.message?.filter(
        (item) => item.grade_id == selecedGrade
      );
      setCourses((prev) => pushedCourses);
      setLoading("false");
    } catch (err) {
      setLoading("false");

      return err;
    }
    // setSelectCourse(pushedCourses[0]?.course_id);
  };
  const getGrades = () => {
    setLoading("grade");
    axios
      .post(
        "https://camp-coding.online/Teacher_App_2025/elnaira_jor/admin/universities/select_universities_grade.php",
        {
          admin_id: adminData.admin_id,
          access_token: adminData.access_token,
        }
      )
      .then((res) => {
        if (Array.isArray(res.message)) {
          let AllGrades = [...res.message];
          let newGrade = AllGrades.filter(
            (item) => item.university_id == selecteduniversity
          );
          let grades = [newGrade[0]?.grades];
          setGrades(grades[0]);
          setLoading(false);

          // setSelectedGrade(grades[0].grade_id);
        }
      })
      .catch((err) => err)
      .finally(() => {
        setLoading(false);
      });
  };
  useEffect(() => {
    if (selecteduniversity) {
      setGrades((prev) => []);
      setCourses((prev) => []);
      setunits((prev) => []);
      setTopics((prev) => []);
      setunitquestions((prev) => []);

      setSelectCourse(null);
      setSelectedGrade(null);
      setselecteduni(null);
      setSelectedTopic(null);
      setselectedquestion(null);
      getGrades();
    }
  }, [selecteduniversity]);
  const getUnits = () => {
    setLoading("unit");
    const data_send = {
      course_id: selectedCourse,
      admin_id: adminData.admin_id,
      access_token: adminData.access_token,
    };
    axios
      .post(
        "https://camp-coding.online/Teacher_App_2025/elnaira_jor/admin/courses/select_course_units.php",
        JSON.stringify(data_send)
      )
      .then((res) => {
        //
        if (Array.isArray(res?.message)) {
          setunits((prev) => res?.message);
        }
        // setselecteduni(res[0]?.unit_id);
      })
      .catch((err) => err)
      .finally(() => {
        setLoading("false");
      });
  };
  useEffect(() => {
    if (showImportModal) getUniversities();
  }, [showImportModal]);
  useEffect(() => {}, []);
  useEffect(() => {
    if (selectedCourse) {
      setselecteduni(null);
      setSelectedTopic(null);
      setselectedquestion(null);
      setunits((prev) => []);
      setTopics((prev) => []);
      setunitquestions((prev) => []);
      getUnits();
    }
  }, [selectedCourse]);
  const [selectedChoice, setSelectedChoice] = useState([]);
  const getTopics = () => {
    setLoading("topic");
    const data_send = {
      course_id: selectedCourse,
      unit_id: selecteduni,
      admin_id: adminData.admin_id,
      access_token: adminData.access_token,
    };
    axios
      .post(
        "https://camp-coding.online/Teacher_App_2025/elnaira_jor/admin/Exams/select_questions.php",
        JSON.stringify(data_send)
      )
      .then((res) => {
        if (Array.isArray(res?.message)) {
          setTopics((prev) => res?.message);
        }
        // setSelectedTopic(res?.message[0]?.topic_id);
      })
      .catch((err) => err)
      .finally(() => {
        setLoading("false");
      });
  };
  const getTopicQuestions = () => {
    setLoading("question");
    const data_send = {
      topic_id: selectedTopic,
      admin_id: adminData.admin_id,
      access_token: adminData.access_token,
    };
    axios
      .post(
        "https://camp-coding.online/Teacher_App_2025/elnaira_jor/admin/mcq/new_mcq/select_topic_mcqs.php",
        JSON.stringify(data_send)
      )
      .then((res) => {
        if (Array.isArray(res.message)) {
          setunitquestions((prev) => res.message);
        }
      })
      .catch((err) => err)
      .finally(() => {
        setLoading("false");
      });
  };
  useEffect(() => {
    if (selectedTopic) {
      setunitquestions((prev) => []);

      getTopicQuestions();
    }
  }, [selectedTopic]);
  useEffect(() => {
    if (selecteduni) {
      setSelectedTopic(null);
      setselectedquestion(null);
      setTopics((prev) => []);
      setunitquestions((prev) => []);
      getTopics();
    }
  }, [selecteduni]);

  const showHideCourse = async (send_data) => {
    //
    const courses = await axios.post(
      "https://camp-coding.online/Teacher_App_2025/elnaira_jor/admin/courses/show_hide_course.php",
      JSON.stringify({
        ...send_data,
        admin_id: adminData.admin_id,
        access_token: adminData.access_token,
      })
    );
    //
    if (courses.status == "success") {
      toast.success(courses.message);
      getCourses();
      // console.log("getCourses");
    } else if (courses.status == "error") {
      toast.error(courses.message);
    } else {
      toast.error("Something Went Error");
    }
  };
  const handlesavetxt = (e, i, id) => {
    // console.log(i)
    // console.log(txt)
    // ;
    const list = [...answerlist];
    if (id == "answer") {
      list[i]["answer_text"] = e.target.value;
    } else if (id == "exp") {
      list[i]["answer_exp"] = e.target.value;
    }
    setanswersArray(list);
  };

  const getexamQuestion = () => {
    const data_send = {
      exam_id: examdata?.exam_id,
      admin_id: adminData.admin_id,
      access_token: adminData.access_token,
    };
    axios
      .post(
        "https://camp-coding.online/Teacher_App_2025/elnaira_jor/admin/Exams/select_exam_ques.php",
        JSON.stringify(data_send)
      )
      .then((res) => {
        setquestions(res?.message);
      });
  };

  const [img, setimg] = useState(null);

  const [uploadloading, setuploadloading] = useState(false);
  const handleuploadimg = () => {
    setuploadloading(true);
    const formdata = new FormData();
    formdata.append("image", img);
    axios
      .post(
        "https://camp-coding.online/Teacher_App_2025/elnaira_jor/admin/image_uplouder.php",
        formdata
      )
      .then((res) => {
        setaddquestiondata({ ...addquestiondata, question_image: res });
      })
      .catch((err) => console.log(err))
      .finally(() => {
        setuploadloading(false);
      });
  };

  const handleaddquestion = () => {
    let answerslistarr = [...answerlist];

    let answers = "";
    let valid_answer = "";
    answers = answerlist
      .map((answer) => answer?.answer_check)
      .join("******matary***");
    for (let i = 0; i < answerslistarr.length; i++) {
      if (answerslistarr[i].answer_check) {
        valid_answer = answerslistarr[i].answer_text;
      }
    }
    //
    const data_send = {
      question_id: addquestiondata.question_id,
      exam_id: examdata?.exam_id,
    };

    axios
      .post(
        "https://camp-coding.online/Teacher_App_2025/elnaira_jor/admin/Exams/assign_ques_to_exam.php",
        JSON.stringify(data_send)
      )
      .then((res) => {
        if (res.status == "success") {
          getexamQuestion();
          toast.success("Question has added successfully");
        } else if (res.status == "error") {
          toast.error("Question has not added");
        } else {
          toast.error("Something Went Error");
        }
      })
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    if (selecedGrade) {
      setCourses((prev) => []);
      setunits((prev) => []);
      setTopics((prev) => []);
      setunitquestions((prev) => []);
      setSelectCourse(null);
      setselecteduni(null);
      setSelectedTopic(null);
      setselectedquestion(null);
      getCourses();
    }
  }, [selecedGrade]);

  useEffect(() => {
    getexamQuestion();
  }, []);
  const [autoGenerate, setAutoGenerate] = useState(false);
  // const permissions = userData?.permissions;
  const getAutoCourses = async () => {
    try {
      const courses = await axios.get(
        "https://camp-coding.online/Teacher_App_2025/elnaira_jor/admin/courses/select_courses.php"
      );

      console.log(courses);

      setAutoCourses(courses);
    } catch (err) {
      return err;
    }
    // setSelectCourse(pushedCourses[0]?.course_id);
  };

  const getAutoUnits = async () => {
    const allUnits = [];
    const data_send = {
      course_id: selectedCourses?.value,
    };
    await Promise.all(
      await axios
        .post(
          "https://camp-coding.online/Teacher_App_2025/elnaira_jor/admin/select_course_units.php",
          JSON.stringify(data_send)
        )
        .then((res) => {
          //
          if (Array.isArray(res)) {
            setAutoUnits([...res]);
          }
          // setselecteduni(res[0]?.unit_id);
        })
        .catch((err) => err)
        .finally(() => {})
    );
    console.log(allUnits);
  };

  const getAutoTopics = () => {
    const data_send = {
      course_id: selectedCourses,
      unit_id: selectedUnits,
    };
    axios
      .post(
        "https://camp-coding.online/Teacher_App_2025/elnaira_jor/admin/Exams/ds/select_questions.php",
        JSON.stringify(data_send)
      )
      .then((res) => {
        if (Array.isArray(res?.message)) {
          setAutoTopics((prev) => res?.message);
        }
        // setSelectedTopic(res?.message[0]?.topic_id);
      })
      .catch((err) => err)
      .finally(() => {});
  };
  const [numberOfQuestion, setNumberOfQuestions] = useState(0);
  const handlegeneratequestion = () => {
    const data_send = {
      question_number: numberOfQuestion,
      topics: selectedChoice
        ?.map((item) => item?.topic_label + "__" + item?.unit_id)
        .join("**"),
      exam_id: examdata.exam_id,
    };

    axios
      .post(
        "https://camp-coding.online/Teacher_App_2025/elnaira_jor/admin/Exams/auto_generate_exam_ques.php",
        JSON.stringify(data_send)
      )
      .then((res) => {
        if (res.status == "success") {
          getexamQuestion();
          toast.success("Questions has added successfully");
        } else if (res.status == "error") {
          toast.error("Question has not added");
        } else {
          toast.error("Something Went Error");
        }
      })
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    if (selectedCourses) {
      getAutoUnits();
    } else {
      setSelectedUnits([]);
    }
  }, [selectedCourses]);
  useEffect(() => {
    if (autoGenerate) {
      getAutoCourses();
    }
  }, [autoGenerate]);
  useEffect(() => {
    if (selectedTopics) {
      getAutoTopics();
    } else {
      setSelectedTopics([]);
    }
  }, [selectedUnits]);

  return (
    <React.Fragment>
      <div className="page-content">
        <Container fluid={true}>
          <Breadcrumbs title="Questions" breadcrumbItem="" />
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
                                setIsModalOpen(true);
                              }}
                            >
                              <i className="mdi mdi-plus me-1"></i>
                              Add Question
                            </button>
                            {/* {
                              <button
                                type="button"
                                className="btn btn-success mb-4"
                                data-bs-toggle="modal"
                                data-bs-target="#addCourseModal"
                                onClick={() => {
                                  setAutoGenerate(true);
                                }}
                              >
                                <i className="mdi mdi-plus me-1"></i>
                                Auto Generate Question
                              </button>
                            } */}
                          </div>
                        </Col>
                      </Row>
                    </div>
                  </div>
                  <div id="table-invoices-list">
                    {!questions ? (
                      <Loader />
                    ) : questions?.length ? (
                      <QuestionTableList
                        updatemcq={() => {
                          getexamQuestion();
                        }}
                        Questions={questions}
                        showHideCourse={showHideCourse}
                        getCourses={getCourses}
                      />
                    ) : (
                      "No Questions"
                    )}
                  </div>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
        <ToastContainer />
      </div>
      <Modal title="Add question" isOpen={isModalOpen}>
        <button
          onClick={() => {
            setshowImportModal(true);
          }}
          style={{ width: "fit-content" }}
          className="btn btn-primary"
        >
          import
        </button>
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
            // setIsModalOpen(false);
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
              value={addquestiondata.question_text}
              onChange={(e) => {
                setaddquestiondata({
                  ...addquestiondata,
                  question_text: e.target.value,
                });
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
            <label className="form-label">ebook file</label>
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
          </div>

          <div className="inputField withtext">
            <label htmlFor="help_text">Help Video</label>
            <select
              className="form-control"
              onChange={(e) => {
                setaddquestiondata({
                  ...addquestiondata,
                  help_video: e.target.value,
                });
              }}
              value={addquestiondata.help_video}
              name=""
              id=""
            >
              {videos.map((item, index) => {
                return (
                  <option value={item.video_id}>{item.video_title}</option>
                );
              })}
            </select>
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
                    {
                      unit_qs_answer_id: answerlist.length,
                      answer_text: "",
                      answer_exp: "",
                      answer_check: false,
                    },
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
                  <span
                    style={{ margin: "0 5px", color: "red", cursor: "pointer" }}
                    onClick={() => {
                      setanswerlist(
                        answerlist?.filter(
                          (filtered_item) =>
                            filtered_item.answer_text !== item.answer_text
                        )
                      );
                    }}
                  >
                    {deleteQ}
                  </span>
                  <input
                    onClick={() => {
                      // setanswerlist([...ans]);
                      let answerarr = [...answerlist];

                      setanswerlist(
                        answerarr.map((it, index) => {
                          if (item.answer_text == it.answer_text) {
                            return { ...it, answer_check: true };
                          } else return { ...it, answer_check: false };
                        })
                      );
                      setaddquestiondata({
                        ...addquestiondata,
                        valid_answer: item.answer_text,
                      });
                    }}
                    checked={item.answer_check}
                    type="checkbox"
                    name=""
                    id=""
                  />
                </div>
              );
            })}
          </div>
          <div className="actions">
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
          </div>
        </form>
      </Modal>
      <Modal title="Import question" isOpen={showImportModal}>
        <ModalBody>
          {/* {loading == "univ" ? (
            <Loader />
          ) : ( */}
          <div>
            {" "}
            <label style={{ fontSize: "22px" }} htmlFor="">
              Universities
            </label>
            <Select
              style={{
                width: "100%",
                borderRadius: "4px",
                margin: "10px 0",
              }}
              type="text"
              name="unit_id"
              id="unit_id"
              value={selecteduniversity}
              placeholder="Choose Unit"
              onChange={(e) => {
                setSelecteduniversity(e.target.value);
              }}
              // onChange={(e) => setSelectedUnit(e.target.value)}
              required
            >
              {universities &&
                universities?.map((item, index) => {
                  return (
                    <MenuItem value={item.university_id} key={index}>
                      {item?.university_name}
                    </MenuItem>
                  );
                })}
            </Select>
          </div>
          {/* )} */}

          {loading == "grade" ? (
            <div>
              <Loader />
            </div>
          ) : grades && grades?.length ? (
            <div>
              {" "}
              <label style={{ fontSize: "22px" }} htmlFor="">
                Grades
              </label>
              <Select
                style={{
                  width: "100%",
                  borderRadius: "4px",
                  margin: "10px 0",
                }}
                type="text"
                name="unit_id"
                id="unit_id"
                value={selecedGrade}
                placeholder="Choose Unit"
                onChange={(e) => {
                  setSelectedGrade(e.target.value);
                }}
                // onChange={(e) => setSelectedUnit(e.target.value)}
                required
              >
                {grades &&
                  grades?.map((item, index) => {
                    return (
                      <MenuItem value={item.grade_id} key={index}>
                        {item?.grade_name}
                      </MenuItem>
                    );
                  })}
              </Select>
            </div>
          ) : null}
          {loading == "course" ? (
            <div>
              <Loader />
            </div>
          ) : Courses && Courses?.length ? (
            <div>
              {" "}
              <label style={{ fontSize: "22px" }} htmlFor="">
                Courses
              </label>
              <Select
                style={{
                  width: "100%",
                  borderRadius: "4px",
                  margin: "10px 0",
                }}
                type="text"
                name="unit_id"
                id="unit_id"
                value={selectedCourse}
                placeholder="Choose Unit"
                onChange={(e) => {
                  setSelectCourse(e.target.value);
                }}
                // onChange={(e) => setSelectedUnit(e.target.value)}
                required
              >
                {Courses &&
                  Courses?.map((item, index) => {
                    return (
                      <MenuItem value={item.course_id} key={index}>
                        {item?.course_name}
                      </MenuItem>
                    );
                  })}
              </Select>
            </div>
          ) : null}
          {loading == "unit" ? (
            <div>
              <Loader />
            </div>
          ) : units && units?.length ? (
            <div>
              {" "}
              <label style={{ fontSize: "22px" }} htmlFor="">
                Units
              </label>
              <Select
                style={{
                  width: "100%",
                  borderRadius: "4px",
                  margin: "10px 0",
                }}
                value={selecteduni}
                type="text"
                name="unit_id"
                id="unit_id"
                placeholder="Choose Unit"
                onChange={(e) => {
                  setselecteduni(e.target.value);
                }}
                required
              >
                {units &&
                  units?.map((item, index) => {
                    return (
                      <MenuItem value={item.unit_id} key={index}>
                        {item?.unit_name}
                      </MenuItem>
                    );
                  })}
              </Select>
            </div>
          ) : null}
          {loading == "topic" ? (
            <div>
              <Loader />
            </div>
          ) : topics && topics?.length ? (
            <div>
              <label style={{ fontSize: "22px" }} htmlFor="">
                Questions
              </label>
              <Select
                style={{
                  width: "100%",
                  borderRadius: "4px",
                  margin: "10px 0",
                }}
                type="text"
                name="unit_id"
                id="unit_id"
                onChange={(e) => {
                  setselectedquestion(e.target.value);
                  const selectedques = e.target.value;
                  const alldata = topics.filter(
                    (it) => it.question_id == selectedques
                  );
                  //
                  console.log(alldata);
                  setselectedquestiondata(alldata[0]);
                  setaddquestiondata({ ...alldata[0] });
                  setanswerlist(alldata[0]?.question_answers);
                }}
                // placeholder="Choose Unit"
                // onChange={(e) => setSelectedUnit(e.target.value)}
                required
              >
                {topics?.map((item, index) => {
                  return (
                    <MenuItem value={item.question_id} key={index}>
                      {item?.question_text}
                    </MenuItem>
                  );
                })}
              </Select>
            </div>
          ) : null}
          {loading == "question" ? (
            <div>
              <Loader />
            </div>
          ) : unitquestions && unitquestions?.length ? (
            <div>
              {" "}
              <label style={{ fontSize: "22px" }} htmlFor="">
                َQuestions
              </label>
              <Select
                style={{
                  width: "100%",
                  borderRadius: "4px",
                  margin: "10px 0",
                }}
                type="text"
                name="unit_id"
                id="unit_id"
                onChange={(e) => {
                  setselectedquestion(e.target.value);
                  const selectedques = e.target.value;
                  const alldata = unitquestions.filter(
                    (it) => it.question_id == selectedques
                  );
                  //
                  setselectedquestiondata(alldata[0]);
                  setaddquestiondata({ ...alldata[0] });
                  setanswerlist(alldata[0]?.arrAns);
                }}
                // placeholder="Choose Unit"
                // onChange={(e) => setSelectedUnit(e.target.value)}
                required
              >
                {unitquestions.map((item, index) => {
                  return (
                    <MenuItem value={item.question_id} key={index}>
                      {item?.question_text}
                    </MenuItem>
                  );
                })}
              </Select>
            </div>
          ) : null}
          <button
            className="btn btn-danger"
            onClick={() => {
              setshowImportModal(false);
            }}
          >
            done
          </button>
          {/* {console.log(selectedquestiondata)} */}
        </ModalBody>
      </Modal>

      <Modal
        title="Auto Generate question"
        isOpen={autoGenerate}
        toggle={() => setAutoGenerate(null)}
      >
        <ModalBody>
          <div>
            {" "}
            <label style={{ fontSize: "22px" }} htmlFor="">
              Courses
            </label>
            <Select
              style={{
                width: "100%",
                borderRadius: "4px",
                margin: "10px 0",
              }}
              type="text"
              name="unit_id"
              id="unit_id"
              value={selectedCourse}
              placeholder="Choose Unit"
              onChange={(e) => {
                setSelectCourse(e.target.value);
              }}
              // onChange={(e) => setSelectedUnit(e.target.value)}
              required
            >
              {autoCourses &&
                autoCourses?.map((item, index) => {
                  return (
                    <MenuItem value={item.course_id} key={index}>
                      {item?.course_name}
                    </MenuItem>
                  );
                })}
            </Select>
          </div>
          {loading == "unit" ? (
            <div>
              <Loader />
            </div>
          ) : units && units?.length ? (
            <div>
              {" "}
              <label style={{ fontSize: "22px" }} htmlFor="">
                Units
              </label>
              <Select
                style={{
                  width: "100%",
                  borderRadius: "4px",
                  margin: "10px 0",
                }}
                value={selecteduni}
                type="text"
                name="unit_id"
                id="unit_id"
                placeholder="Choose Unit"
                onChange={(e) => {
                  setselecteduni(e.target.value);
                }}
                required
              >
                {units &&
                  units?.map((item, index) => {
                    return (
                      <MenuItem value={item.unit_id} key={index}>
                        {item?.unit_name}
                      </MenuItem>
                    );
                  })}
              </Select>
            </div>
          ) : null}
          {loading == "topic" ? (
            <div>
              <Loader />
            </div>
          ) : topics && topics?.length ? (
            <div>
              <label style={{ fontSize: "22px" }} htmlFor="">
                Questions
              </label>
              <Select
                style={{
                  width: "100%",
                  borderRadius: "4px",
                  margin: "10px 0",
                }}
                value={selectedTopics}
                type="text"
                name="unit_id"
                id="unit_id"
                placeholder="Choose Unit"
                onChange={(e) => {
                  setSelectedTopics((prev) => e.target.value);
                  setSelectedChoice((prev) => [
                    ...prev,
                    {
                      course_name: autoCourses?.filter(
                        (item) => item?.course_id == selectedCourse
                      )[0]?.course_name,
                      course_id: autoCourses?.filter(
                        (item) => item?.course_id == selectedCourse
                      )[0]?.course_id,
                      unit_name: units?.filter(
                        (item) => item?.unit_id == selecteduni
                      )[0]?.unit_name,
                      unit_id: units?.filter(
                        (item) => item?.unit_id == selecteduni
                      )[0]?.unit_id,
                      topic_id: topics?.filter(
                        (item) => item?.topic_id == e.target.value
                      )[0]?.topic_id,
                      topic_label: topics?.filter(
                        (item) => item?.topic_id == e.target.value
                      )[0]?.topic_label,
                      id: topics?.filter(
                        (item) => item?.topic_id == e.target.value
                      )[0]?.topic_id,
                    },
                  ]);
                }}
                required
              >
                {topics &&
                  topics?.map((item, index) => {
                    if (
                      !selectedChoice.filter(
                        (f_item) => f_item?.topic_id == item?.topic_id
                      )?.length
                    )
                      return (
                        <MenuItem value={item.topic_id} key={index}>
                          {item?.topic_label}
                        </MenuItem>
                      );
                  })}
              </Select>
            </div>
          ) : null}
          {/* <TagsInput tagifies={selectedChoice} set/Tagifies={setSelectedChoice} /> */}
          <div className="inputField withtext">
            Number Of Questions
            <input
              type="number"
              onWheel={(e) => console.log(e.target.blur())}
              onChange={(e) => setNumberOfQuestions(e.target.value)}
            />
          </div>
          <div className="tags-list">
            {selectedChoice.map((tag, index) => (
              <span key={index} className="tag">
                {tag?.course_name +
                  " - " +
                  tag?.unit_name +
                  " - " +
                  tag?.topic_label}
                <button
                  type="button"
                  onClick={() =>
                    setSelectedChoice(
                      selectedChoice?.filter(
                        (item) => item?.topic_id != tag?.topic_id
                      )
                    )
                  }
                  className="tag-delete-button"
                >
                  x
                </button>
              </span>
            ))}
          </div>
          <button
            className="btn btn-success"
            style={{ margin: "40px 40px 0 40px" }}
            onClick={() => handlegeneratequestion()}
          >
            Generate
          </button>
        </ModalBody>
      </Modal>
    </React.Fragment>
  );
};

export default ExamQuestion;
