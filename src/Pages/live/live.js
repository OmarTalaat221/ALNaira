import React, { useState, useRef } from "react";
import { ToastContainer, toast } from "react-toastify";
import CopyToClipboard from "react-copy-to-clipboard";
import {
  Container,
  Row,
  Col,
  Card,
  Collapse,
  Form,
  Modal,
  CloseButton,
} from "reactstrap";
import { ZegoUIKitPrebuilt } from "@zegocloud/zego-uikit-prebuilt";
import { ZIM } from "zego-zim-web";
// Breadcrumb
import Breadcrumbs from "../../components/Common/Breadcrumb";
import "./addquestion.css";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import { useEffect } from "react";

// function randomID(len) {
//   let result = "";
//   if (result) return result;
//   var chars = "12345qwertyuiopasdfgh67890jklmnbvcxzMNBVCZXASDQWERTYHGFUIOLKJP",
//     maxPos = chars.length,
//     i;
//   len = len || 5;
//   for (i = 0; i < len; i++) {
//     result += chars.charAt(Math.floor(Math.random() * maxPos));
//   }
//   return result;
// }

export function getUrlParams(url = window.location.href) {
  let urlStr = url.split("?")[1];
  return new URLSearchParams(urlStr);
}

const Live = () => {
  document.title = "Live";
  const location = useLocation();
  const channel_id = location?.state?.channel_id;
  const live_id = location?.state?.live_id;
  // const roomID = getUrlParams().get("roomID") || randomID(5);
  let role_str = getUrlParams(window.location.href).get("role") || "Host";
  const role =
    role_str === "Host"
      ? ZegoUIKitPrebuilt.Host
      : role_str === "Cohost"
      ? ZegoUIKitPrebuilt.Cohost
      : ZegoUIKitPrebuilt.Audience;

  let sharedLinks = [];
  if (role === ZegoUIKitPrebuilt.Host || role === ZegoUIKitPrebuilt.Cohost) {
    sharedLinks.push({
      name: "Join as co-host",
      url:
        window.location.protocol +
        "//" +
        window.location.host +
        window.location.pathname +
        "?roomID=" +
        channel_id +
        "&role=Cohost",
    });
  }
  sharedLinks.push({
    name: "Join as audience",
    url:
      window.location.protocol +
      "//" +
      window.location.host +
      window.location.pathname +
      "?roomID=" +
      channel_id +
      "&role=Audience",
  });

  const zpRef = useRef();
  // generate Kit Token
  const appID = 196975329;

  const serverSecret = "22c385924f61dd1bf82ac393918526f8";
  const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(
    appID,
    serverSecret,
    channel_id,
    channel_id,
    "DR.Elmatary"
  );

  // start the call
  let myMeeting = async (element) => {
    const zp = ZegoUIKitPrebuilt.create(kitToken);

    zpRef.current = zp;

    // start the call
    zp.addPlugins({ ZIM });

    // Make sure you only call joinRoom once for a specific room
    zp.joinRoom({
      container: element,
      scenario: {
        mode: ZegoUIKitPrebuilt.LiveStreaming,
        config: {
          role: ZegoUIKitPrebuilt.Host,
        },
      },
      sharedLinks,
    });
  };

  const [showPoll, setShowPolls] = useState(false);
  const [selectedPoll, setselectedPoll] = useState(false);
  const [livePolls, setLivePolls] = useState(false);
  const [poll, setPoll] = useState(false);
  const [showResults, setShowResults] = useState(false);
  const [selectedResultPoll, setselectedResultPoll] = useState(false);
  const [resultPoll, setResultPoll] = useState(false);
  const [poll_code, setPollCode] = useState(false);

  const getPolls = async () => {
    const polls = await axios.post(
      "https://camp-coding.online/Teacher_App_2025/elnaira_jor/admin/live_poll/select_live_poll_question.php",
      { live_id: live_id }
    );
    setLivePolls(polls?.message);
  };
  const getPollResult = async () => {
    const polls = await axios.post(
      "https://camp-coding.online/Teacher_App_2025/elnaira_jor/admin/live_poll/select_question_result.php",
      { question_id: selectedResultPoll }
    );
    console.log(polls, selectedResultPoll);
    setResultPoll(polls?.message);
  };
  const getSelectedPoll = async () => {
    if (livePolls && livePolls?.length && selectedPoll) {
      setPoll(livePolls?.filter((item) => item?.poll_code == selectedPoll));
    }
  };
  useEffect(() => {
    getPolls();
    return () => {
      zpRef?.current?.destroy();
    };
  }, []);

  useEffect(() => {
    getSelectedPoll();
  }, [selectedPoll]);

  useEffect(() => {
    getPollResult();
  }, [selectedResultPoll]);
  const navigate = useNavigate();

  useEffect(() => {
    if (poll && poll?.length) {
      if (document.querySelector(".xM8CBkrn0wtFOdOP84Bb input")) {
        document.querySelector(".xM8CBkrn0wtFOdOP84Bb input").value =
          poll[0]?.qustion_id;
      }
    }
  }, [poll]);
  const sendMessage = () => {
    if (document.querySelector(".xM8CBkrn0wtFOdOP84Bb button")) {
      document.querySelector(".xM8CBkrn0wtFOdOP84Bb button").click();
    }
  };
  useEffect(() => {
    return () => zpRef?.current?.destroy();
  }, []);
  return (
    <React.Fragment>
      <div className="page-content">
        <Container fluid={true}>
          <Breadcrumbs title="Live" breadcrumbItem="Live" />
          <Row>
            <Col>
              {/* <button
                className="btn btn-primary"
                style={{ margin: "20px 0" }}
                onClick={() => {
                  setShowPolls(true);
                  setselectedPoll(
                    livePolls && livePolls?.length
                      ? livePolls[0]?.poll_code
                      : false
                  );
                }}
              >
                Polls
              </button> */}
              {/* <button
                className="btn btn-primary"
                style={{ margin: "20px 0" }}
                onClick={() => {
                  setShowResults(true);
                  setselectedPoll(
                    livePolls && livePolls?.length
                      ? livePolls[0]?.poll_code
                      : false
                  );
                }}
              >
                Results
              </button> */}
            </Col>
            <Col lg={12}>
              <div
                className="custom-accordion live-custom"
                id="addcourse-accordion"
              >
                <Card>
                  <div
                    className="myCallContainer"
                    ref={myMeeting}
                    style={{ width: "100%", height: "100vh" }}
                  ></div>
                </Card>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <Modal title="Add Live" isOpen={showPoll}>
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
          }}
        >
          <CloseButton
            onClick={() => setShowPolls(false)}
            style={{ marginLeft: "auto" }}
          />
          <div className="inputField withtext">
            <select
              onChange={(e) => {
                setselectedPoll(e.target.value);
              }}
              value={selectedPoll}
              className="form-control"
              name=""
              id=""
            >
              {livePolls && livePolls.length
                ? livePolls.map((item, index) => {
                    console.log(item);
                    return (
                      <option value={item.poll_code}>
                        {item.qustion_text}
                      </option>
                    );
                  })
                : null}
            </select>
          </div>
          {poll && poll.length
            ? poll.map((item, index) => {
                return (
                  <ul key={index}>
                    <li>{item?.qustion_text}</li>
                    {item?.arrAns && item?.arrAns?.length ? (
                      <ul>
                        {item?.arrAns.map((item, index) => {
                          return <li>{item?.answer_text}</li>;
                        })}
                      </ul>
                    ) : null}
                  </ul>
                );
              })
            : null}
          <button
            onClick={() => {
              sendMessage();
            }}
            className="btn btn-success"
            style={{ margin: "10px 0 0 auto" }}
          >
            <CopyToClipboard
              style={{
                padding: "0 14px",
                cursor: "pointer",
                width: "100%",
                display: "flex",
                gap: "10px",
                alignItems: "center",
              }}
              text={selectedPoll}
              onCopy={() => toast.success("Copied")}
            >
              <span
                style={{
                  width: "100%",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <b
                  style={{
                    fontSize: "17px",
                    fontWeight: "700",
                    color: "white",
                  }}
                >
                  ( You Selected Poll with id : {selectedPoll})
                </b>
                <em style={{ fontStyle: "normal" }}>Copy</em>
              </span>
            </CopyToClipboard>
          </button>
        </form>
      </Modal>
      <Modal title="Show Results" isOpen={showResults}>
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
          }}
        >
          <CloseButton
            onClick={() => setShowResults(false)}
            style={{ marginLeft: "auto" }}
          />
          <div className="inputField withtext">
            <select
              onChange={(e) => {
                console.log("eee", e.target.value);
                setselectedResultPoll(e.target.value);
              }}
              value={selectedResultPoll}
              className="form-control"
              name=""
              id=""
            >
              {livePolls && livePolls.length
                ? livePolls.map((item, index) => {
                    console.log("iii", item.question_id);

                    return (
                      <option value={item.question_id}>
                        {item.qustion_text}
                      </option>
                    );
                  })
                : null}
            </select>
          </div>
          <ul style={{ listStyle: "none" }}>
            {resultPoll && resultPoll.length ? (
              resultPoll.map((item, index) => {
                return (
                  <li
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "30px",
                      fontSize: "22px",
                      flexWrap: "wrap",
                    }}
                  >
                    <span>{item?.answer_text}</span> -{" "}
                    <span>{item?.count + " Votes"}</span>
                  </li>
                );
              })
            ) : (
              <h4>No Votes</h4>
            )}
          </ul>
        </form>
      </Modal>
      <ToastContainer />
    </React.Fragment>
  );
};

export default Live;
