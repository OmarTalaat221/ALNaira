import React, { useEffect, useState } from "react";
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
  Input,
  CloseButton,
  Spinner,
} from "reactstrap";
import Select from "react-select";
//Import Flatepicker
import "flatpickr/dist/themes/material_blue.css";
import Flatpickr from "react-flatpickr";
import "./exam.css";
// Breadcrumb
import Breadcrumbs from "../../components/Common/Breadcrumb";
import CourseListTable from "../Courses/CoursesList/CourseTable/courseListTable";
import ExamListTable from "./ExamTable/ExamTableList";
import { Slider, Stack } from "@mui/material";
import axios from "axios";
import { SelectPicker } from "rsuite";
import { ToastContainer, toast } from "react-toastify";
import moment from "moment";
// import CourseListTable from "../CourseTable/courseListTable";

const Exam = () => {
  document.title = "Courses | ALNaierh  ";

  const location = useLocation();
  // const {state}=location;
  // const { data } = useLocation().state;
  // console.log(data)

  const { course_data } = location.state;
  // console.log(course_id)

  const navigate = useNavigate();

  const [examdata, setexamdata] = useState({
    exam_name: "",
    timer: "",
    end_date: "",
    start_date: "",
  });
  const [courses, setcourses] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [assignexamshow, setassignexamshow] = useState(false);
  const [addloading, setaddloading] = useState(false);
  const [exams, setexams] = useState([]);

  const [selectedexam, setselectedexam] = useState("");

  const [coursesassined, setcoursesassined] = useState([]);

  const [assignloading, setassignloading] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  const [timerChecked, setChecked] = useState(false);
  const [deadLineChecked, setDeadLineChecked] = useState(false);
  // deadLineChecked

  const getExams = () => {
    const data_send = {
      course_id: course_data.course_id,
    };
    // console.log(data_send)

    axios
      .post(
        "https://camp-coding.online/Teacher_App_2025/elnaira_jor/admin/Exams/select_exam.php",
        JSON.stringify(data_send)
      )
      .then((res) => {
        console.log(res);
        setexams(res.message);
        setselectedexam(res?.message[0]?.exam_id);
      })
      .catch((err) => console.log(err));
  };

  const getcourses = () => {
    axios
      .get(
        "https://camp-coding.online/Teacher_App_2025/elnaira_jor/admin/courses/select_courses.php"
      )
      .then((res) => {
        // console.log(res);
        setcourses(res);
        setexamdata({ ...examdata, course_id: res[0].course_id });
      });
  };

  const handleaddexam = () => {
    setaddloading(true);
    const datasend = {
      ...examdata,
      course_id: course_data.course_id,
    };
    console.log(datasend);
    axios
      .post(
        "https://camp-coding.online/Teacher_App_2025/elnaira_jor/admin/Exams/add_exam.php",
        JSON.stringify(datasend)
      )
      .then((res) => {
        console.log(res);
        if (res.status == "success") {
          toast.success("exam has added successfully");
        } else if (res.status == "error") {
          toast.error(res.message);
        } else {
          toast.error("SomeThing Went Error");
        }
        getExams();
      })
      .catch((err) => console.log(err))
      .finally(() => {
        setaddloading(false);
      });
  };

  const hanldeassign = () => {
    setassignexamshow(false);
    setassignloading(true);

    const coursesdata = [...coursesassined];
    console.log(coursesdata);
    let courses_data = "";
    for (let i = 0; i < coursesdata.length; i++) {
      if (i == 0) {
        courses_data += coursesdata[i].value;
      } else {
        courses_data += "***matary***" + coursesdata[i].value;
      }
    }
    console.log(courses_data);

    const data_send = {
      exam_id: selectedexam,
      courses_data,
    };
    axios
      .post(
        "https://camp-coding.online/Teacher_App_2025/elnaira_jor/admin/Exams/assign_exam_to_course.php",
        JSON.stringify(data_send)
      )
      .then((res) => {
        console.log(res);
        if (res.status == "success") {
          toast.success(res.message);
        } else if (res.status == "error") {
          toast.error(res.message);
        } else {
          toast.error("Something Went Error");
        }
      })
      .catch((err) => console.log(err))
      .finally(() => {
        setassignloading(false);
      });
  };

  useEffect(() => {
    getcourses();
    getExams();
  }, []);
  return (
    <React.Fragment>
      <div className="page-content">
        <Container fluid={true}>
          <Breadcrumbs title="Exams" breadcrumbItem="Exam List" />

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
                              className="btn btn-success"
                              data-bs-toggle="modal"
                              data-bs-target="#addCourseModal"
                              style={{
                                whiteSpace: "nowrap",
                                width: "fit-content",
                              }}
                              onClick={() => {
                                showModal();
                              }}
                            >
                              <i className="mdi mdi-plus me-1"></i> Add Exam
                            </button>
                          </div>
                        </Col>
                        <Col className="col-sm">
                          <div>
                            <button
                              type="button"
                              className="btn btn-success mb-4"
                              data-bs-toggle="modal"
                              data-bs-target="#addCourseModal"
                              onClick={() => {
                                // showModal();
                                setassignexamshow(true);
                              }}
                            >
                              Assign Exam
                            </button>
                          </div>
                        </Col>
                      </Row>
                    </div>
                  </div>
                  <div id="table-invoices-list">
                    <ExamListTable exams={exams} />
                  </div>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>

        <Modal title="add exam" isOpen={isModalOpen}>
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
              handleaddexam();
              setIsModalOpen(false);
            }}
          >
            <CloseButton
              onClick={() => setIsModalOpen(false)}
              style={{ marginLeft: "auto" }}
            />

            <div className="inputField withtext">
              <label htmlFor="exam_name">Exam Name</label>
              <Input
                style={{
                  width: "100%",
                  padding: "10px",
                  borderRadius: "4px",
                }}
                type="text"
                name="exam_name"
                id="exam_name"
                placeholder="exam name"
                required
                onChange={(e) => {
                  setexamdata({ ...examdata, exam_name: e.target.value });
                }}
              />
            </div>
            {/* <div className="inputField withtext">
              <label htmlFor="exam_details">courses</label>
              <select value={examdata.course_id} onChange={(e)=>{
                setexamdata({...examdata,course_id:e.target.value})
              }} className="form-select" name="" id="">
                {
                  courses.map((item)=>{
                    return (
                      <option value={item.course_id}>{item.course_name}</option>
                    )
                  })
                }
              </select>
            </div> */}
            {/* <div className="inputField withtext">
              <label htmlFor="exam_details">Exam Details</label>
              <textarea
                style={{ height: "100px" }}
                id="hours"
                name="explanation"
                placeholder="Enter Explanation"
                type="number"
                className="form-control"
              ></textarea>
            </div> */}
            {/* <div className="inputField withtext">
              <label htmlFor="exam_degree">Exam Degree</label>
              <Input
                style={{
                  width: "100%",
                  padding: "10px",
                  borderRadius: "4px",
                }}
                type="text"
                name="exam_degree"
                id="exam_degree"
                placeholder="exam_degree"
                required
              />
            </div> */}
            <div className="checkedBoxes">
              <div className="inputField">
                <label
                  className={timerChecked ? "active" : null}
                  htmlFor="exam_istimed"
                >
                  {" "}
                  With timer ?
                </label>
                <Input
                  style={{
                    padding: "10px",
                    borderRadius: "4px",
                    display: "none",
                  }}
                  type="checkbox"
                  name="exam_istimed"
                  id="exam_istimed"
                  placeholder="exam_istimed"
                  required
                  checked={timerChecked}
                  onChange={(e) => setChecked(e.currentTarget.checked)}
                />
                {timerChecked ? (
                  <div className="inputField withtext">
                    <label htmlFor="time">Minutes</label>
                    <Stack
                      spacing={2}
                      direction="row"
                      sx={{ mb: 1 }}
                      alignItems="center"
                      style={{
                        padding: "0.47rem 0.75rem",
                      }}
                    >
                      <Slider
                        aria-label="time"
                        min={0}
                        max={200}
                        valueLabelDisplay="auto"
                        onChange={(e) => {
                          // console.log(e.target.value)
                          setexamdata({ ...examdata, timer: e.target.value });
                        }}
                      />
                    </Stack>
                  </div>
                ) : null}
              </div>

              <div className="inputField">
                <label
                  className={deadLineChecked ? "active" : null}
                  htmlFor="exam_isDeadLined"
                >
                  {" "}
                  start date ?
                </label>
                <Input
                  style={{
                    padding: "10px",
                    borderRadius: "4px",

                    display: "none",
                  }}
                  type="checkbox"
                  name="exam_isDeadLined"
                  id="exam_isDeadLined"
                  placeholder="exam_isDeadLined"
                  required
                  checked={deadLineChecked}
                  onChange={(e) => setDeadLineChecked(e.currentTarget.checked)}
                />
                {deadLineChecked ? (
                  <div className="inputField withtext">
                    <label htmlFor="time">Start Date</label>
                    <Input
                      onChange={(e) => {
                        // console.log(moment(e.timeStamp).format('Y-M-D H:m:s'))
                        setexamdata({
                          ...examdata,
                          start_date: moment(Date.now()).format("Y-M-D H:m:s"),
                        });
                      }}
                      type="date"
                    />
                  </div>
                ) : null}
              </div>
              <div className="inputField">
                <label
                  className={deadLineChecked ? "active" : null}
                  htmlFor="exam_end"
                >
                  {" "}
                  end date ?
                </label>
                <Input
                  style={{
                    padding: "10px",
                    borderRadius: "4px",

                    display: "none",
                  }}
                  type="checkbox"
                  name="exam_end"
                  id="exam_end"
                  placeholder="end exam"
                  required
                  checked={deadLineChecked}
                  // onChange={(e) => setDeadLineChecked(e.currentTarget.checked)}
                />
                {deadLineChecked ? (
                  <div className="inputField withtext">
                    <label htmlFor="time">end Date</label>
                    <Input
                      onChange={(e) => {
                        // console.log(e)
                        // console.log(moment(Date.now()).format('Y-M-D H:m:s'));
                        setexamdata({
                          ...examdata,
                          end_date: moment(Date.now()).format("Y-M-D H:m:s"),
                        });
                      }}
                      type="date"
                    />
                  </div>
                ) : null}
              </div>
            </div>
            {addloading ? (
              <div
                style={{
                  textAlign: "end",
                }}
              >
                <Spinner style={{ color: "blue" }} />
              </div>
            ) : (
              <button
                className="btn btn-success"
                style={{ margin: "10px 0 0 auto" }}
              >
                {" "}
                Add Exam{" "}
              </button>
            )}
          </form>
        </Modal>

        <Modal title="assign exam" isOpen={assignexamshow}>
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
              hanldeassign();
              // setassignexamshow(false);
            }}
          >
            <CloseButton
              onClick={() => setassignexamshow(false)}
              style={{ marginLeft: "auto" }}
            />

            <div className="inputField withtext">
              <label htmlFor="exam_name">Exam Name</label>
              <select
                onChange={(e) => {
                  // set
                  setselectedexam(e.target.value);
                }}
                value={selectedexam}
                className="form-control"
                name=""
                id=""
              >
                {exams.map((item) => {
                  return <option value={item.exam_id}>{item.exam_name}</option>;
                })}
              </select>
            </div>

            <div className="inputField withtext">
              <label htmlFor="exam_name">Course</label>
              <Select
                onChange={(e) => {
                  console.log(e);
                  setcoursesassined(e);
                }}
                // defaultValue={[...courses]}
                isMulti
                name="colors"
                options={courses.map((item) => {
                  return {
                    label: `${item?.course_name} - ${item?.university_name} -{" "}
                ${item?.grade_name}`,
                    value: item.course_id,
                  };
                })}
                className="basic-multi-select"
                classNamePrefix="select"
              />
            </div>
            <div style={{ marginTop: "30px", textAlign: "end" }}>
              {assignloading ? (
                <Spinner style={{ color: "blue" }} />
              ) : (
                <button className="btn btn-success">assign</button>
              )}
            </div>
          </form>
        </Modal>
      </div>
      <ToastContainer />
    </React.Fragment>
  );
};

export default Exam;
