import React, { useCallback, useEffect, useState } from "react";
import {
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Modal,
  ModalBody,
  ModalHeader,
  UncontrolledDropdown,
} from "reactstrap";
import { useNavigate } from "react-router-dom";
import TableContainer from "../../../components/Common/TableContainer";
import { CourseData } from "../../../CommonData/Data/Course";
import { LessonsData } from "../../../CommonData/Data/Lesson";
import { Loader } from "rsuite";
import axios from "axios";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { ToastContainer, toast } from "react-toastify";

import {
  Row,
  Col,
  Container,
  TabContent,
  TabPane,
  Tooltip,
  Card,
  CardBody,
  Form,
  Label,
  Input,
  FormFeedback,
} from "reactstrap";
import { Icon } from "@iconify/react";
import { AiOutlinePlusCircle } from "react-icons/ai";
const MCQTableList = ({ video_id, self }) => {
  const navigate = useNavigate();
  const [inputList, setinputList] = useState([
    { answer: "", explanation: "", id: 1 },
  ]);
  const [rowdata, setrowdata] = useState({});
  const [selectanswer, setselectanswer] = useState("");
  const [answerlist, setanswerlist] = useState([
    // {id:0,answer:'',checked:false}
  ]);
  const handleaddansex = (e, i) => {
    const { name, value } = e.target;
    const list = [...inputList];
    list[i][name] = value;
    setinputList(list);
  };

  const [msqs, setMsqs] = useState(false);
  const [loading, setLoading] = useState(false);
  const getQuestions = async () => {
    setLoading(true);
    console.log(video_id);
    const mcqs = await axios.post(
      "https://camp-coding.online/Teacher_App_2025/elnaira_jor/admin/videos/select_video_data.php",
      { video_id: video_id }
    );
    console.log(mcqs);
    setMsqs(mcqs?.message?.question_video);
    setLoading(false);
  };

  const [item, setItem] = useState(false);
  const [showChange, setShowChange] = useState(false);
  const [showEdit, setShowEdit] = useState(false);
  const toggleEdit = useCallback(() => {
    if (showEdit) {
      setShowEdit(false);
    } else {
      setShowEdit(true);
    }
  }, [showEdit]);
  const changeStatus = async () => {
    console.log(item);
    await axios
      .post(
        "https://camp-coding.online/Teacher_App_2025/elnaira_jor/admin/Exams/update_ques_hidden.php",
        {
          question_id: item.item.question_id,
          hidden_value: item.hidden_value == "no" ? "yes" : "no",
        }
      )
      .then((res) => {
        console.log(res);
        if (res.status == "success") {
          toast.success("Updated");
          setShowChange(false);
          getQuestions();
        } else {
          toast.error(res.message);
        }
      })
      .catch((err) => toast.error(err.message));
  };
  useEffect(() => {
    getQuestions();
  }, [self]);
  const toggle = useCallback(() => {
    if (showChange) {
      setShowChange(false);
    } else {
      setShowChange(true);
    }
  }, [showChange]);
  const [send_data, setSendData] = useState();
  // useEffect(() => {
  //     if (item && !item.item) {
  //         setinputList(item?.answers?.map((item, index) => {
  //             setselectanswer(item.answer_check ? index + 1 : null);
  //             setValidAnswer(item);
  //             return { answer_text: item.answer_text, explanation: "", id: index + 1 }
  //         }))
  //     }
  // }, [showEdit, item]);
  const editQuestion = () => {
    setShowEdit(false);
    console.log(item);
    let answerslistarr = [...answerlist];
    // console.log(answerslistarr)
    let answers = "";
    let valid_answer = "";
    for (let i = 0; i < answerslistarr.length; i++) {
      if (i == 0) {
        answers += answerslistarr[i].answer;
      } else {
        answers += "******matary***" + answerslistarr[i].answer;
      }
      if (answerslistarr[i].checked) {
        valid_answer = answerslistarr[i].answer;
      }
    }
    const data_send = {
      question_id: item.question_id,
      question_text: item.question_text,
      answers,
      valid_answer,
      question_image_url: "",
      help_text: "",
      help_pdf: "",
      help_video: "",
    };
    console.log(data_send);
    axios
      .post(
        "https://camp-coding.online/Teacher_App_2025/elnaira_jor/admin/mcq/update_mcq.php",
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
        getQuestions();
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    if (item && !item.item) {
      console.log(item?.answers?.length);
      setSendData({
        course_id: "1",
        unit_id: "video_" + video_id,
        question_text: item?.question_text,
        question_image_url: item?.question_image_url,
        help_video: "0",
        answers: item?.answerlist
          ?.map((item, index) =>
            index != item?.answerlist?.length - 1
              ? item?.answer_text?.trim() + "***" + "matary" + "***"
              : item?.answer_text?.trim()
          )
          ?.join(""),
      });
    }
  }, [inputList]);
  const [upLoading, setUpLoading] = useState(false);
  const [image, setImage] = useState(false);
  const [validAnswer, setValidAnswer] = useState(false);

  const uploadFile = async () => {
    setUpLoading(true);

    const formData = new FormData();
    if (image) {
      formData.append("image", image);
      const url = await axios.post(
        "https://camp-coding.online/Teacher_App_2025/elnaira_jor/admin/image_uplouder.php",
        formData
      );
      console.log(url);
      if (url && url?.length) {
        toast.success("Image Uploaded Successfully");
        setSendData({
          ...send_data,
          question_image_url: url,
        });
      } else {
        toast.error(url.message);
      }
    } else {
      toast.error("Please Upload File");
    }
    setUpLoading(false);
  };
  const handlesavetxt = (e, i, id) => {
    const list = [...answerlist];
    list[i]["answer"] = e.target.value;
    // setanswersArray(list);
    setanswerlist(list);
  };

  const columns = [
    {
      Header: "No",
      Cell: (cell) => {
        return <span>{cell.cell.row.index + 1}</span>;
      },
    },
    {
      Header: "Question Id",
      accessor: "question_id",
      Filter: false,
    },
    {
      Header: "Title",
      accessor: "question_text",
      Filter: false,
    },

    {
      Header: "Status",
      accessor: "hidden",
      Filter: false,
      Cell: (cell) => {
        return (
          <button
            className="btn"
            onClick={() => {
              setShowChange(true);
              setItem({
                item: cell.cell.row.original,
                hidden_value: cell.cell.row.original.hidden,
              });
            }}
          >
            {cell.cell.row.original.hidden == "yes" ? (
              <VisibilityOff className="hidden" />
            ) : (
              <Visibility className="shown" />
            )}
          </button>
        );
      },
    },
    {
      Header: "Action",
      Cell: (cell) => {
        return (
          <>
            <button
              className="btn btn-primary"
              onClick={() => {
                setShowEdit(true);
                setItem(cell.cell.row.original);
                let alldatapushed = [];
                // setrowdata();
                setrowdata(cell.cell.row.original);
                // setanswerlist(cell.cell.row.original?.answers)
                // console.log(cell.cell.row.original?.answers?.length)
                for (
                  let i = 0;
                  i < cell.cell.row.original?.answers?.length;
                  i++
                ) {
                  let obj = {
                    id: i + 1,
                    answer: cell.cell.row.original?.answers[i].answer_text,
                    checked:
                      cell.cell.row.original?.answers[i].answer_check == "true"
                        ? true
                        : false,
                  };
                  alldatapushed.push(obj);
                  // console.log(alldatapushed)
                  // console.log(obj)
                  setanswerlist([...alldatapushed]);
                }
              }}
            >
              Edit
            </button>
          </>
        );
      },
    },
  ];
  return (
    <React.Fragment>
      {loading ? (
        <Loader />
      ) : !msqs ? (
        <h4>No Questions</h4>
      ) : (
        <TableContainer
          columns={columns}
          data={msqs}
          isGlobalFilter={true}
          customPageSize={10}
          className="Invoice table"
        />
      )}
      <Modal isOpen={showChange} toggle={toggle}>
        <ModalHeader toggle={toggle} tag="h4">
          Edit MCQ Question Status
        </ModalHeader>
        <ModalBody>
          <div className="text-end">
            <button
              type="submit"
              className="btn btn-success save-user"
              onClick={() => {
                changeStatus();
              }}
            >
              {item.hidden_value == "yes" ? "Show" : "Hide"}
            </button>
          </div>
        </ModalBody>
      </Modal>

      <Modal isOpen={showEdit} toggle={toggleEdit}>
        <ModalHeader toggle={toggleEdit} tag="h4">
          Edit MCQ Question
        </ModalHeader>
        <ModalBody>
          <Row>
            <Col lg={12}>
              <div className="custom-accordion" id="addcourse-accordion">
                <Card>
                  <div className="p-4 border-top">
                    <form>
                      <Col md={12}>
                        <div className="mb-3">
                          <h3 className="form-label">question image</h3>
                          <div
                            style={{
                              display: "flex",
                              width: "100%",
                              justifyContent: "space-between",
                              alignItems: "center",
                            }}
                          >
                            <input
                              type="file"
                              id="ImageInput"
                              disabled={upLoading ? true : false}
                              onChange={(e) =>
                                setImage(e.currentTarget.files[0])
                              }
                            />{" "}
                            {!upLoading ? (
                              <span
                                className="btn btn-primary"
                                onClick={() => uploadFile()}
                              >
                                <Icon icon="solar:upload-bold-duotone" />
                              </span>
                            ) : (
                              <Loader size="sm" />
                            )}
                          </div>
                        </div>
                      </Col>
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
                          onChange={(e) => {
                            setItem({ ...item, question_text: e.target.value });
                            setSendData({
                              ...send_data,
                              question_text: e?.currentTarget?.value,
                            });
                          }}
                          value={item.question_text}
                          // defaultValue={send_data?.question_text}
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
                          onClick={() => {
                            setanswerlist([
                              ...answerlist,
                              { id: answerlist.length + 1, answer: "" },
                            ]);
                          }}
                          style={{ fontSize: "30px", cursor: "pointer" }}
                        />
                      </div>
                      <Row>
                        {answerlist?.map((item, index) => {
                          // console.log(item)
                          return (
                            <div
                              style={{
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "space-between",
                              }}
                            >
                              <textarea
                                value={item.answer}
                                onChange={(e) => {
                                  handlesavetxt(e, index);
                                }}
                                style={{ marginBottom: "10px", width: "90%" }}
                                className="form-control"
                              ></textarea>
                              <input
                                onClick={() => {
                                  // setanswerlist([...ans]);
                                  let answerarr = [...answerlist];
                                  setanswerlist(
                                    answerarr.map((it, index) => {
                                      if (item.id == it.id) {
                                        return { ...it, checked: true };
                                      } else return { ...it, checked: false };
                                    })
                                  );
                                  // for(let i=0;i<answerarr.length;i++){
                                  //   if()
                                  // }
                                  // setaddquestiondata({...addquestiondata,valid_answer:item.answer})
                                }}
                                checked={item.checked == true ? true : false}
                                type="checkbox"
                                name=""
                                id=""
                              />
                            </div>
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
                                                            console.log(selectanswer);
                                                            return (
                                                                <div
                                                                    onClick={() => {
                                                                        setselectanswer(item.id);
                                                                        setValidAnswer(item)
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
                    </form>
                  </div>
                </Card>
              </div>
            </Col>
          </Row>
          <Row>
            <Col>
              <div className="text-end">
                <button
                  type="submit"
                  className="btn btn-success save-user"
                  onClick={() => {
                    // console.log(inputList);
                    editQuestion();
                  }}
                >
                  Save
                </button>
              </div>
            </Col>
          </Row>
        </ModalBody>
      </Modal>
      <ToastContainer />
    </React.Fragment>
  );
};

export default MCQTableList;
