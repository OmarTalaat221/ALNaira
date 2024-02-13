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
  Input,
  CloseButton,
} from "reactstrap";

//Import Flatepicker
import "flatpickr/dist/themes/material_blue.css";
import Flatpickr from "react-flatpickr";
import "./exam.css";
// Breadcrumb
import Breadcrumbs from "../../components/Common/Breadcrumb";
import CourseListTable from "../Courses/CoursesList/CourseTable/courseListTable";
import QuestionListTable from "./ExamTable/QuestionTableList";
import { Slider, Stack } from "@mui/material";
// import CourseListTable from "../CourseTable/courseListTable";
import { questions } from "../../CommonData/Data/questions";
import CreatableSelect from "react-select/creatable";
import { UnitData } from "../../CommonData/Data/Units";

const Question = () => {
  document.title = "Courses | Matary - React Admin & Dashboard Template";

  const location = useLocation();
  // const {state}=location;
  // const { data } = useLocation().state;
  // console.log(data)
  const [choice, setChoice] = useState("units");
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);
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
  const [selectedUnit, setSelectedUnit] = useState(null);
  const [selectedQuestion, setSelectedQuestion] = useState(null);
  // deadLineChecked
  return (
    <React.Fragment>
      <div className="page-content">
        <Container fluid={true}>
          <Breadcrumbs title="Questions" breadcrumbItem="Question List" />

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
                                showModal();
                              }}
                            >
                              <i className="mdi mdi-plus me-1"></i> Add Question
                            </button>
                          </div>
                        </Col>
                      
                      </Row>
                    </div>
                  </div>
                  <div id="table-invoices-list">
                    <QuestionListTable />
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
              setIsModalOpen(false);
            }}
          >
            <CloseButton
              onClick={() => setIsModalOpen(false)}
              style={{ marginLeft: "auto" }}
            />
            <div className="tabs-switch" style={{ padding: "11px" }}>
              {" "}
              <span
                id="units"
                className={choice == "units" ? "btn btn-success" : "btn"}
                onClick={() => setChoice("units")}
              >
                Units
              </span>
              <span
                id="questions"
                className={choice == "questions" ? "btn btn-success" : "btn"}
                onClick={() => setChoice("questions")}
              >
                Questions
              </span>
            </div>

            <div
              className="inputField withtext"
              style={{ display: choice !== "units" ? "none" : "flex" }}
            >
              <label htmlFor="unit_id">Select Unit</label>
              <CreatableSelect
                style={{
                  width: "100%",
                  padding: "10px",
                  borderRadius: "4px",
                }}
                type="text"
                name="unit_id"
                id="unit_id"
                placeholder="unit"
                required
                value={selectedUnit}
                onChange={(selectedOption) =>
                  setSelectedUnit(selectedOption)
                }
                options={UnitData.map((item, index) => {
                  return { label: item?.unit_name, value: item?.id };
                })}
              />
            </div>

            <div
              className="inputField withtext"
              style={{ display: choice !== "questions" ? "none" : "flex" }}
            >
              <label htmlFor="question_id">Select Question</label>
              <CreatableSelect
                style={{
                  width: "100%",
                  padding: "10px",
                  borderRadius: "4px",
                }}
                type="text"
                name="question_id"
                id="question_id"
                placeholder="question"
                required
                value={selectedQuestion}
                onChange={(selectedOption) =>
                  setSelectedQuestion(selectedOption)
                }
                options={questions.map((item, index) => {
                  return { label: item.question, value: index };
                })}
              />
            </div>

            <button
              className="btn btn-success"
              style={{ margin: "10px 0 0 auto" }}
            >
              {" "}
              Add Question{" "}
            </button>
          </form>
        </Modal>
      </div>
    </React.Fragment>
  );
};

export default Question;
