import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Card,
  CardBody,
  CloseButton,
  Col,
  Container,
  Input,
  Modal,
  Row,
} from "reactstrap";
import { Form, InputPicker, Radio, RadioGroup } from "rsuite";
import Select from "react-select";

// Import Flatepicker
import "flatpickr/dist/themes/material_blue.css";

// Breadcrumb
import axios from "axios";
import { useEffect } from "react";
import { toast, ToastContainer } from "react-toastify";
import Breadcrumbs from "../../components/Common/Breadcrumb";
import "./style.css";
import { base_url } from "../../constants";
const ManualSubscription = () => {
  document.title = "Courses | ALNaierh";
  const navigate = useNavigate();
  const localdata = localStorage.getItem("elmatary_admin");
  let adminData = localdata && JSON.parse(localdata);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [student, setStudent] = useState(false);
  const [university, setUniversity] = useState(false);
  const [grades, setGrades] = useState(false);
  const [tabs, setTabs] = useState([
    { id: 1, title: "Select Students" },
    { id: 2, title: "Type Emails" },
  ]);
  const [activeTab, setActiveTab] = useState(1);
  const getUnversity = async () => {
    const univ = await axios.post(
      "https://camp-coding.online/Teacher_App_2025/elnaira_jor/admin/universities/select_universities_grade.php",
      {
        admin_id: adminData.admin_id,
        access_token: adminData.access_token,
      }
    );
    setUniversity(univ?.message);
    setDataSend({
      ...data_send,
      university_id: univ?.message[0]?.university_id,
    });
    console.log(univ);
  };

  useEffect(() => {
    getUnversity();
  }, []);
  const [univ_id, setUnivId] = useState();
  const [data_send, setDataSend] = useState({
    university_id: "all", //all - 1
    grade_id: "all", //all - 1
    have_sub: "all", //all - yes - no

    admin_id: adminData.admin_id,
    access_token: adminData.access_token,
  });
  useEffect(() => {
    if (university && university.length) {
      setGrades(
        university.filter((item) => item.university_id == univ_id)[0]?.grades
      );
      setDataSend({
        ...data_send,
        university_id: univ_id ? univ_id : "all",
      });
    }
  }, [univ_id]);

  const getStudents = async (e) => {
    data_send.grade_id =
      data_send.university_id != "all"
        ? data_send.grade_id
          ? data_send.grade_id
          : "all"
        : "all";
    const student = await axios.post(
      "https://camp-coding.online/Teacher_App_2025/elnaira_jor/admin/subscription/select_students.php",
      data_send
    );
    setStudent(student?.message);
    console.log(data_send);
  };

  const [Courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(false);
  const [univs, setUnivs] = useState(false);
  const [filteredCourses, setFilteredCourses] = useState();
  const getCourses = async () => {
    setLoading(true);
    const data_send = {
      admin_id: adminData.admin_id,
      access_token: adminData.access_token,
    };
    const courses = await axios.post(
      base_url + "/admin/courses/select_courses.php",
      JSON.stringify(data_send)
    );
    console.log(courses);
    setCourses(courses.message);

    if (courses.status == "success") {
      toast.success("Success To Get Courses");
    }
    if (courses.message == "Session Expired") {
      localStorage.removeItem("elmatary_admin");
      navigate("/login", { replace: true });
    }

    // console.log(courses);
    setLoading(false);
  };
  useEffect(() => {
    getCourses();
  }, []);
  const [selectedCourses, setSelectedCourses] = useState([]);
  const [emails, setEmails] = useState([]);
  const [selectedStudents, setSelectedStudents] = useState([]);
  const submitSubscribe = async () => {
    const data_send = {
      admin_id: adminData.admin_id,
      access_token: adminData.access_token,
      courses_ids: selectedCourses?.map((item) => item?.value)?.join("**"),
      emails:
        activeTab == 1
          ? selectedStudents?.map((item) => item?.value)?.join(",")
          : emails,
      endDate,
    };
    await axios
      .post(
        base_url + "/admin/subscription/manualsubscripe.php",
        JSON.stringify(data_send)
      )
      .then((res) => {
        toast?.dark(res?.message);
        if (res.success) {
          window.location.reload();
        }
      });
  };
  const [endDate, setEndDate] = useState(0);
  return (
    <React.Fragment>
      <div className="page-content">
        <Container fluid={true}>
          <Breadcrumbs title="Students" breadcrumbItem="Students List" />
          <div className="my-3">
            {" "}
            {tabs?.map((item) => {
              return (
                <button
                  className={`btn btn-${
                    item?.id == activeTab ? "success" : ""
                  }`}
                  onClick={() => setActiveTab(item?.id)}
                >
                  {item?.title}
                </button>
              );
            })}
          </div>
          <Row>
            <Col lg={12}>
              <CardBody>
                <Card>
                  {activeTab == 1 ? (
                    <CardBody>
                      <div className="filter_stu">
                        <div>
                          <Form
                            className="stu_her"
                            onChange={(formValue) => formValue}
                          >
                            {university && university.length ? (
                              <Form.Group controlId="inputPicker">
                                <Form.ControlLabel>
                                  Unversity:
                                </Form.ControlLabel>
                                <Form.Control
                                  name="university_id"
                                  accepter={InputPicker}
                                  data={university.map((item) => {
                                    return {
                                      label: item.university_name,
                                      value: item.university_id,
                                    };
                                  })}
                                  onChange={(e) => setUnivId(e)}
                                />
                              </Form.Group>
                            ) : null}
                            {grades && grades.length ? (
                              <Form.Group controlId="inputPicker">
                                <Form.ControlLabel>Grades:</Form.ControlLabel>
                                <Form.Control
                                  name="grade_id"
                                  accepter={InputPicker}
                                  data={grades.map((item) => {
                                    return {
                                      label: item.grade_name,
                                      value: item.grade_id,
                                    };
                                  })}
                                  onChange={(e) => {
                                    setDataSend({
                                      ...data_send,
                                      grade_id: e ? e : "all",
                                    });
                                  }}
                                />
                              </Form.Group>
                            ) : null}
                            <Form.Group controlId="radio">
                              <Form.ControlLabel>have_sub :</Form.ControlLabel>
                              <Form.Control
                                name="have_sub"
                                onChange={(e) => {
                                  setDataSend({
                                    ...data_send,
                                    have_sub: e ? e : "all",
                                  });
                                }}
                                accepter={RadioGroup}
                              >
                                <Radio value="all">All</Radio>
                                <Radio value="yes">Yes</Radio>
                                <Radio value="no">No</Radio>
                              </Form.Control>
                            </Form.Group>
                          </Form>
                          <br />
                          <br />
                          {student && student?.length ? (
                            <>
                              <label>Student</label>
                              <Select
                                isMulti={true}
                                options={
                                  student && student?.length
                                    ? student?.map((item) => ({
                                        value: item?.student_email,
                                        label: item?.student_name,
                                      }))
                                    : []
                                }
                                classNamePrefix="select2-selection"
                                onChange={(e) => setSelectedStudents(e)}
                              />
                            </>
                          ) : null}
                          <br />
                          <br />
                          <button
                            className="btn btn-success"
                            onClick={() => getStudents()}
                          >
                            Show Students
                          </button>
                          <br />
                          <br />
                          <label>Courses</label>
                          <Select
                            isMulti={true}
                            options={
                              Courses && Courses?.length
                                ? Courses?.map((item) => ({
                                    value: item?.course_id,
                                    label: item?.course_name,
                                  }))
                                : []
                            }
                            onChange={(e) => setSelectedCourses(e)}
                            classNamePrefix="select2-selection"
                          />

                          <br />
                          <label>End Date</label>
                          <br />
                          <input
                            type="datetime-local"
                            onChange={(e) => setEndDate(e.target.value)}
                          />

                          <br />
                          <br />
                        </div>
                      </div>
                    </CardBody>
                  ) : null}

                  {activeTab == 2 ? (
                    <CardBody>
                      <div className="filter_stu">
                        <div>
                          <label> Emails </label>
                          <textarea
                            cols={30}
                            rows={10}
                            style={{ width: "100%", outline: "none" }}
                            onChange={(e) => setEmails(e?.target?.value)}
                          />
                        </div>
                      </div>

                      <br />
                      <br />
                      <label>Courses</label>
                      <Select
                        isMulti={true}
                        options={
                          Courses && Courses?.length
                            ? Courses?.map((item) => ({
                                value: item?.course_id,
                                label: item?.course_name,
                              }))
                            : []
                        }
                        classNamePrefix="select2-selection"
                        onChange={(e) => setSelectedCourses(e)}
                      />

                      <br />
                      <label>End Date</label>

                      <br />
                      <input
                        type="datetime-local"
                        onChange={(e) => setEndDate(e.target.value)}
                      />

                      <br />
                      <br />
                    </CardBody>
                  ) : null}
                </Card>

                <button
                  className="btn btn-success"
                  onClick={() => submitSubscribe()}
                >
                  Subscribe
                </button>
              </CardBody>
            </Col>
          </Row>
        </Container>

        <Modal title="add unit" isOpen={isModalOpen}>
          <form
            action="#"
            style={{
              padding: "15px",
              display: "flex",
              flexDirection: "column",
            }}
            onSubmit={(e) => {
              e.preventDefault();
              setIsModalOpen(false);
            }}
          >
            <CloseButton
              onClick={() => setIsModalOpen(false)}
              style={{ marginLeft: "auto" }}
            />

            <div className="input_Field">
              <label forHtml="unit_name">Unit Name</label>
              <Input
                style={{
                  width: "100%",
                  padding: "10px",
                  borderRadius: "4px",
                }}
                type="text"
                name="unit_name"
                id="unit_name"
                placeholder="unit_name"
                required
              />
            </div>
            <button
              className="btn btn-success"
              style={{ margin: "10px 0 0 auto" }}
            >
              {" "}
              Add Unit{" "}
            </button>
          </form>
        </Modal>
        <ToastContainer />
      </div>
    </React.Fragment>
  );
};

export default ManualSubscription;
