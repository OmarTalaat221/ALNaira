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
} from "reactstrap";
import Breadcrumbs from "../../components/Common/Breadcrumb";
import "flatpickr/dist/themes/material_blue.css";
import Flatpickr from "react-flatpickr";
import LessonsTableList from "../Lessons/LessonsTabel/LessonsTableList";
import { useCallback } from "react";
import { AiOutlinePlusCircle } from "react-icons/ai";
const MCQQuestions = ({ CourseId }) => {
  const [type, setType] = useState(false);
  const [videoLink, setVideoLink] = useState(false);

  // console.log(data)
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

  return (
    <React.Fragment>
      <Container fluid={true}>
        <Breadcrumbs title="MCQ Questions" breadcrumbItem="MCQ Questions List" />

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
                              setModal(true);
                            }}
                          >
                            <i
                              onClick={() => {
                                setModal(true);
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
                  <LessonsTableList />
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
                                    Answer_{i+1}
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
                                    console.log(item);
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
                      <button className="btn btn-success">Add Question</button>
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
    </React.Fragment>
  );
};

export default MCQQuestions;
