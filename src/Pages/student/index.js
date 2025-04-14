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

// Import Flatepicker
import "flatpickr/dist/themes/material_blue.css";

// Breadcrumb
import axios from "axios";
import { useEffect } from "react";
import { ToastContainer } from "react-toastify";
import Breadcrumbs from "../../components/Common/Breadcrumb";
import StudntListTable from "./StudentTable/StudntTable";
import "./style.css";
const Student = () => {
  document.title = "Courses | ALNaierh";
  const navigate = useNavigate();
  const localdata = localStorage.getItem("elmatary_admin");
  let adminData = localdata && JSON.parse(localdata);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [student, setStudent] = useState(false);
  const [university, setUniversity] = useState(false);
  const [grades, setGrades] = useState(false);
  const getUnversity = async () => {
    const univ = await axios.post(
      "https://camp-coding.online/Teacher_App_2025/elnaira_jor/admin/universities/select_universities_grade.php",
      {
        admin_id: adminData.admin_id,
        access_token: adminData.access_token,
      }
    );
    setUniversity(univ?.message);
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

  return (
    <React.Fragment>
      <div className="page-content">
        <Container fluid={true}>
          <Breadcrumbs title="Employees" breadcrumbItem="Employees List" />
          <Row>
            <Col lg={12}>
              <Card>
                <CardBody>
                  <div className="filter_stu">
                    <div>
                      <Form
                        className="stu_her"
                        onChange={(formValue) => formValue}
                      >
                        {university && university.length ? (
                          <Form.Group controlId="inputPicker">
                            <Form.ControlLabel>Company:</Form.ControlLabel>
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
                      <button
                        className="btn btn-success"
                        onClick={() => getStudents()}
                      >
                        Show Employees
                      </button>
                    </div>
                  </div>
                  <div id="table-invoices-list">
                    {student && student.length ? (
                      <StudntListTable
                        Units={student}
                        getStudents={() => getStudents()}
                      />
                    ) : null}
                  </div>
                </CardBody>
              </Card>
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

export default Student;
