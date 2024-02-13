import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "./interactive.css";
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
import Flash_Cards from "./flashcards";
//Import Flatepicker
import "flatpickr/dist/themes/material_blue.css";
import Flatpickr from "react-flatpickr";

// Breadcrumb
import Breadcrumbs from "../../components/Common/Breadcrumb";
import CourseListTable from "../Courses/CoursesList/CourseTable/courseListTable";
import UnitListTable from "../Units/UnitTable/UnitTableList";
// import LessonsTableList from "./LessonsTabel/LessonsTableList";
import { useCallback } from "react";
import LessonsTableList from "../Lessons/LessonsTabel/LessonsTableList";
import Tweets from "./tweets";
import WrittenQuestions from "./writtenquestion";

// import CourseListTable from "../CourseTable/courseListTable";

const Interactive = () => {
  const [title, setTitle] = useState("Flash Cards");

  document.title = title + " | Matary - React Admin & Dashboard Template";

  const [type, setType] = useState("FlashCards");

  return (
    <React.Fragment>
      <div className="page-content">
        <Container fluid={true}>
          <Breadcrumbs title="Courses" breadcrumbItem="Ineractive" />

          <Row>
            <Col lg={12}>
              <div className="header-btns">
                <button
                  className="btn btn-success"
                  onClick={() => {
                    setType("FlashCards");
                    setTitle("Flash Cards");
                  }}
                >
                  Flash Cards
                </button>
                <button
                  className="btn btn-success"
                  onClick={() => {
                    setType("Tweets");
                    setTitle("Tweets");
                  }}
                >
                  Tweets
                </button>
                <button
                  className="btn btn-success"
                  onClick={() => {
                    setType("writtenquestion");
                    setTitle("Written Questions");
                  }}
                >
                  Written Questions
                </button>
              </div>
              <Card>
                <CardBody>
                  <div id="table-invoices-list">
                    {type == "FlashCards" ? (
                      <Flash_Cards />
                    ) : type == "Tweets" ? (
                      <Tweets />
                    ) : type == "writtenquestion" ? (
                      <WrittenQuestions />
                    ) : null}
                  </div>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </React.Fragment>
  );
};

export default Interactive;
