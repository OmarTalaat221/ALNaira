import React, { useEffect, useState } from "react";
import { Container, Row, Col, Card, Collapse } from "reactstrap";
import Breadcrumbs from "../../components/Common/Breadcrumb";
import { AiOutlinePlus, AiOutlinePlusCircle } from "react-icons/ai";
import "./livequesmcq.css";
import {
  CloseButton,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Input,
  Modal,
  ModalBody,
  ModalHeader,
  UncontrolledDropdown,
} from "reactstrap";
import LiveQuestionTable from "./LiveQuestionTable/LiveQuestionTable";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import { useLocation } from "react-router-dom";
const LiveQuesMcq = () => {
  const location = useLocation();
  const { live_id } = location.state;
  // console.log(live_id)
  const [questions, setquestions] = useState([]);
  const [showaddmcq, setshowaddmcq] = useState(false);
  const [inputList, setinputList] = useState([
    { answer: "", explanation: "", id: 1 },
  ]);
  const [selectanswer, setselectanswer] = useState("");
  const [ques_title, setquestitle] = useState("");
  const handleaddansex = (e, i) => {
    const { name, value } = e.target;
    const list = [...inputList];
    list[i][name] = value;
    setinputList(list);
  };

  const addlivequestion = () => {
    console.log(inputList);
    let answers = "";
    for (let i = 0; i < inputList?.length; i++) {
      if (i == 0) {
        answers += inputList[i].answer;
      } else {
        answers += "***matary***" + inputList[i].answer;
      }
    }
    const data_send = {
      question_text: ques_title,
      answers,
      live_id: live_id,
    };

    axios
      .post(
        "https://camp-coding.online/Teacher_App_2025/elnaira_jor/admin/live_poll/insert_live_poll_question.php",
        JSON.stringify(data_send)
      )
      .then((res) => {
        console.log(res);
        if (res.status == "success") {
          toast.success("Question Has Added Successfully");
          setshowaddmcq(false);
        } else if (res.status == "error") {
          toast.error("Opps Question Has not Added");
        } else {
          toast.error("Something Went Error");
        }
      })
      .catch((err) => console.log(err));
  };

  const getlivequestions = () => {
    const data_send = {
      live_id: live_id,
    };
    axios
      .post(
        "https://camp-coding.online/Teacher_App_2025/elnaira_jor/admin/live_poll/select_live_poll_question.php",
        data_send
      )
      .then((res) => {
        console.log(res.message);
        setquestions(res.message);
      });
  };

  useEffect(() => {
    getlivequestions();
  }, []);

  return (
    <React.Fragment>
      <div className="page-content">
        <Container fluid={true}>
          <Breadcrumbs title="Live Mcq Question" breadcrumbItem="Home" />
          <Row>
            <Col lg={12}>
              <div className="custom-accordion" id="addcourse-accordion">
                <Card>
                  <div className="addquestionmcq">
                    <h4>Add new question</h4>
                    <AiOutlinePlus
                      onClick={() => {
                        setshowaddmcq(true);
                      }}
                      className="text-success"
                    />
                  </div>
                </Card>
              </div>
            </Col>
          </Row>
          <LiveQuestionTable
            handleupdate={() => {
              getlivequestions();
            }}
            questions={questions}
          />
          <Modal isOpen={showaddmcq}>
            <ModalHeader tag="h4">
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  width: "100%",
                  alignItems: "center",
                }}
              >
                <h4>Update Course Data</h4>
                <CloseButton
                  onClick={() => {
                    setshowaddmcq(false);
                  }}
                  style={{ marginLeft: "auto" }}
                />
              </div>
            </ModalHeader>
            <ModalBody>
              <form
                style={{
                  padding: "15px",
                  display: "flex",
                  flexDirection: "column",
                }}
                onSubmit={(e) => {
                  e.preventDefault();
                  addlivequestion();
                }}
              >
                <div className="input_Field">
                  <label htmlFor="">Question Title</label>
                  <Input
                    style={{
                      width: "100%",
                      borderRadius: "4px",
                      margin: "10px 0",
                    }}
                    onChange={(e) => {
                      setquestitle(e.target.value);
                    }}
                    type="text"
                    name="new_title"
                    id="new_title"
                    placeholder="Enter Question Title"
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
                            <label className="form-label" htmlFor="price">
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

                  {/* <h5>select correct answer</h5>
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
              </Col> */}
                </Row>
                <button
                  className="btn btn-success"
                  style={{ margin: "10px 0 0 auto" }}
                >
                  {" "}
                  Add{" "}
                </button>
              </form>
            </ModalBody>
          </Modal>
        </Container>
      </div>
      <ToastContainer />
    </React.Fragment>
  );
};

export default LiveQuesMcq;
