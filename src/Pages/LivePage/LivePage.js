import React, { useEffect, useState } from "react";
import { ToastContainer } from "react-toastify";
import { Container, Row, Col, Card, Collapse } from "reactstrap";
import Breadcrumbs from "../../components/Common/Breadcrumb";
import "./livepage.css";
import axios from "axios";
const LivePage = () => {
  const [questions, setquestions] = useState([]);
  const [showmodel, setshowmodel] = useState(false);
  const [questiondata, setquestiondata] = useState({});
  const getlivequestions = () => {
    const data_send = {
      live_id: "1",
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
        <Breadcrumbs title="Live" breadcrumbItem="Home" />
        <Container>
          <Row>
            <div
              className="custom-accordion live_page_content"
              id="addcourse-accordion"
            >
              <div className="live_content"></div>
              <div className="aside">
                {questions.map((item, index) => {
                  return (
                    <div className="aside_question">
                      <p>{item.qustion_text}</p>
                      <button
                        onClick={() => {
                          setquestiondata(item);
                          setshowmodel(true);
                        }}
                        className="btn btn-primary"
                      >
                        View
                      </button>
                    </div>
                  );
                })}
              </div>
            </div>
          </Row>
        </Container>
      </div>
      {showmodel ? (
        <div className="text_data_modal">
          <h3>Question Title</h3>
          <h4>{questiondata.qustion_text}</h4>
          <h5>Question Answers</h5>
          <div className="text_data_answers">
            {questiondata?.arrAns?.map((item, index) => {
              return <p>{item.answer_text}</p>;
            })}
          </div>
          <div className="actions">
            <button className="btn btn-success">result</button>
            <button className="btn btn-primary">send</button>
            <button
              onClick={() => {
                setshowmodel(false);
              }}
              className="btn btn-danger"
            >
              cancel
            </button>
          </div>
        </div>
      ) : null}
      <ToastContainer />
    </React.Fragment>
  );
};

export default LivePage;
