import React, { useState } from "react";
import classnames from "classnames";
import { Container, Row, Col, Card, Collapse, Form, Modal, Input } from "reactstrap";
import { Link } from "react-router-dom";
import Dropzone from "react-dropzone";
import { AiOutlinePlusCircle } from "react-icons/ai";
// Breadcrumb
import Breadcrumbs from "../../components/Common/Breadcrumb";
import "./addquestion.css";
const AddQuestions = () => {
  document.title = "Add Qustion";

  const [col1, setcol1] = useState(true);
  const [col2, setcol2] = useState(false);
  const [col3, setcol3] = useState(false);

  const t_col1 = () => {
    setcol1(!col1);
    setcol2(false);
    setcol3(false);
  };

  const t_col2 = () => {
    setcol2(!col2);
    setcol1(false);
    setcol3(false);
  };

  const [selectedFiles, setselectedFiles] = useState([]);

  function handleAcceptedFiles(files) {
    files.map((file) =>
      Object.assign(file, {
        preview: URL.createObjectURL(file),
        formattedSize: formatBytes(file.size),
      })
    );
    setselectedFiles(files);
  }

  /**
   * Formats the size
   */
  function formatBytes(bytes, decimals = 2) {
    if (bytes === 0) return "0 Bytes";
    const k = 1024;
    const dm = decimals < 0 ? 0 : decimals;
    const sizes = ["Bytes", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"];

    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + " " + sizes[i];
  }

  const [modal, setmodal] = useState(false);

  function tog_mod() {
    setmodal(!modal);
  }

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
      <div className="page-content">
        <Container fluid={true}>
          <Breadcrumbs title="Ecommerce" breadcrumbItem="Add Course" />
          <Row>
            <Col lg={12}>
              <div className="custom-accordion" id="addcourse-accordion">
                <Card>
                  <Link
                    to="#addcourse-courseinfo-collapse"
                    className={classnames("text-dark", { collapsed: !col1 })}
                    type="button"
                    onClick={t_col1}
                    style={{ cursor: "pointer" }}
                  >
                    <div className="p-4">
                      <div className="d-flex align-items-center">
                        <div className="flex-shrink-0 me-3">
                          <div className="avatar-sm">
                            <div className="avatar-title rounded-circle bg-soft-primary text-primary">
                              01
                            </div>
                          </div>
                        </div>
                        <div className="flex-grow-1 overflow-hidden">
                          <h5 className="font-size-16 mb-1">
                            add new question
                          </h5>
                          <p className="text-muted text-truncate mb-0">
                            Fill all information below
                          </p>
                        </div>
                        <div className="flex-shrink-0">
                          <i className="mdi mdi-chevron-up accor-down-icon font-size-24"></i>
                        </div>
                      </div>
                    </div>
                  </Link>
                  <Collapse isOpen={col1} id="checkout-billinginfo-collapse">
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
                          style={{
                            display: "flex",
                            flexDirection: "column",
                          }}
                          className="mb-3"
                        >
                          <label className="form-label" htmlFor="courseimage">
                            Question Image
                          </label>
                          <input
                            className="form-control"
                            type="file"
                            id="courseimage"
                          />
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
                                      Answer
                                    </label>
                                    <Input
                                      onChange={(e) => handleaddansex(e, i)}
                                      style={{ height: "100px" }}
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
                  </Collapse>
                </Card>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <Modal
        isOpen={modal}
        toggle={() => {
          tog_mod();
        }}
        id="success-btn"
        centered
      >
        <div className="modal-content">
          <div className="modal-body">
            <div className="text-center">
              <i className="bx bx-check-circle display-1 text-success"></i>
              <h3 className="mt-3">Course Added Successfully</h3>
            </div>
          </div>
        </div>
      </Modal>
    </React.Fragment>
  );
};

export default AddQuestions;
