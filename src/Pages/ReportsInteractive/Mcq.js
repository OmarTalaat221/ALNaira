import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import MCQTableList from "../Lessons/LessonsTabel/mcqlisttable";
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
  CloseButton,
  Spinner,
} from "reactstrap";
import Breadcrumbs from "../../components/Common/Breadcrumb";
import "flatpickr/dist/themes/material_blue.css";
import Flatpickr from "react-flatpickr";
import LessonsTableList from "../Lessons/LessonsTabel/LessonsTableList";
import { useCallback } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import FlashCardsTableList from "../Lessons/LessonsTabel/FlashCardsTableList";
import "./interactive.css";
import { Visibility, VisibilityOff, WhatsApp } from "@mui/icons-material";
import Confirm from "../../components/ConfComp/Confirm";
import { MenuItem, Select } from "@mui/material";
import { Loader } from "rsuite";
// import MCQTableList from "../Lessons/LessonsTabel/mcqlisttable";
import { Icon } from "@iconify/react";

const Mcq = ({ CourseId, unitId, cd }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [numberOfPages, setNumberOfPages] = useState(false);
  const [loading, setLoading] = useState(false);
  const [img, setimg] = useState(null);
  const [type, setType] = useState(false);
  const [videoLink, setVideoLink] = useState(false);
  const [modal, setModal] = useState(false);
  const toggle = useCallback(() => {
    if (modal) {
      setModal(false);
    } else {
      setModal(true);
    }
  }, [modal]);
  const [answers, setanswers] = useState([]);
  const [flashCard_data, setFlashCardData] = useState(false);
  const [edit, setEdit] = useState(false);
  const [showconf, setshowconf] = useState(false);
  const [rowdata, setrowdata] = useState({});
  const [flashCards, setFlashCards] = useState(false);
  const [item, setItem] = useState(false);
  const [itemLoader, setItemLoader] = useState(false);
  const getFlashCards = async () => {
    setItemLoader(true);
    const data_send = {
      course_id: CourseId,
      unit_id: unitId,
    };
    const get = await axios.post(
      "https://camp-coding.online/Teacher_App_2025/elnaira_jor/admin/flash_cards/select_unit_flash_cards.php",
      data_send
    );
    setFlashCards(get.message.flash_card);
    setItemLoader(false);
  };
  const addFlashCard = async (e) => {
    const data_send = {
      flash_card_side_1: e.currentTarget.flashCard_title.value,
      flash_card_side_2: e.currentTarget.flashCard_value.value,
      course_id: CourseId,
      unit_id: unitId,
      author: "",
    };
    const add = await axios.post(
      "https://camp-coding.online/Teacher_App_2025/elnaira_jor/admin/flash_cards/add_flash_cards.php",
      data_send
    );
    if (add.status == "success") {
      toast.success("Added");
      await getFlashCards();
      setSide1(false);
      setSide2(false);
      setIsBack(false);
      setModal(false);
    } else {
      toast.error(add.message);
    }
  };
  const showHideFlashCards = async (send_data) => {
    const flashCards_1 = await axios.post(
      "https://camp-coding.online/Teacher_App_2025/elnaira_jor/admin/flash_cards/update_flash_cards_hidden.php",
      send_data
    );
    if (flashCards_1.status == "success") {
      toast.success(flashCards_1.message);
      await getFlashCards();
      setEdit(false);
    } else {
      toast.error(flashCards_1.message);
    }
  };
  const editFlashCard = async (e) => {
    const data_send = {
      course_id: CourseId,
      // "unit_id": unitId,
      flash_card_side_2: e.currentTarget.flashCard_answar.value,
      flash_card_side_1: e.currentTarget.flashCard_title.value,
      flash_card_id: item.flash_card_id,
    };
    // console.log(data_send);
    const edit = await axios.post(
      "https://camp-coding.online/Teacher_App_2025/elnaira_jor/admin/flash_cards/update_flash_cards_info.php",
      data_send
    );
    // console.log(data_send);
    if (edit.status == "success") {
      toast.success(edit.message);
      await getFlashCards();
      setSide3(false);
      setSide4(false);
      setIsEditBack(false);
      setEdit(false);
      getReports();
    } else {
      toast.error(edit.message);
    }
  };

  const [Courses, setCourses] = useState(false);
  const [showCopy, setsetShowCopy] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState(false);
  const [selectedUnit, setSelectedUnit] = useState(false);
  const [selectedFlashCard, setFlashCard] = useState(false);
  const [Units, setUnits] = useState(false);
  const [itemReport, setItemReport] = useState(false);
  const getReports = async () => {
    setItemLoader(true);
    const reports = await axios.post(
      "https://camp-coding.online/Teacher_App_2025/elnaira_jor/admin/reports/select_reports.php",
      {
        report_for: "mcqs",
        course_id: CourseId,
      }
    );
    setItemReport(reports.message);
    // console.log(reports.message);
    // console.log(CourseId)
    // setItemReport(reports?.message?.filter(item => item?.course_id == CourseId)?.filter(item => item?.status == "pending"));
    // setItemReport(reports);
    setItemLoader(false);
  };
  useEffect(() => {
    getReports();
  }, []);
  const getCourses = async () => {
    const courses = await axios.get(
      "https://camp-coding.online/Teacher_App_2025/elnaira_jor/admin/courses/select_courses.php"
    );
    setCourses([...courses]);
  };
  useEffect(() => {
    getCourses();
  }, []);
  const getUnits = async () => {
    const send_data = {
      course_id: selectedCourse,
    };
    try {
      const units = await axios.post(
        "https://camp-coding.online/Teacher_App_2025/elnaira_jor/admin/courses/select_course_units.php",
        send_data
      );
      // console.log(units);
      // console.log(selectedCourse);
      setUnits([...units]);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    getUnits();
  }, [selectedCourse]);

  const handlecopyitem = (data) => {
    const data_send = {
      flash_card_id: selectedFlashCard,
      course_id: selectedCourse,
      unit_id: selectedUnit,
    };
    // console.log(data_send)
    axios
      .post(
        "https://camp-coding.online/Teacher_App_2025/elnaira_jor/admin/flash_cards/make_copy_from_flash_cards.php",
        JSON.stringify(data_send)
      )
      .then((res) => {
        if (res.status == "success") {
          toast.success("Copied");
          getFlashCards();
        } else if (res.status == "error") {
          toast.error(res.message);
        } else {
          toast.error("Something Went Error");
        }
      });
  };
  // editFlashCard
  const [allanswers, setallanswers] = useState([]);
  useEffect(() => {
    getFlashCards();
  }, []);
  const [side1, setSide1] = useState(false);
  const [side2, setSide2] = useState(false);
  const [isBack, setIsBack] = useState(false);
  const [side3, setSide3] = useState(false);
  const [side4, setSide4] = useState(false);
  const [isEditBack, setIsEditBack] = useState(false);

  const [studentdata, setstudentdata] = useState({});

  useEffect(() => {
    setIsBack(true);
  }, [side2]);
  useEffect(() => {
    setIsBack(false);
  }, [side1]);
  useEffect(() => {
    setIsEditBack(true);
  }, [side4]);
  useEffect(() => {
    setIsEditBack(false);
  }, [side3]);
  const [view, setView] = useState(false);
  const [showSolve, setShowSolve] = useState(false);
  const handleSolveReport = () => {
    axios
      .post(
        "https://camp-coding.online/Teacher_App_2025/elnaira_jor/admin/reports/update_report_status.php",
        { report_id: item.report_id }
      )
      .then((res) => {
        if (res.status == "success") {
          toast.success("Solved");
          getReports();
          setShowSolve(false);
        } else {
          toast.error(res.message);
        }
      })
      .catch((err) => {
        toast.error(err.message);
      });
  };

  const getstudentdata = (id) => {
    // console.log(id)
    const data_send = {
      student_id: id,
    };
    axios
      .post(
        "https://camp-coding.online/Teacher_App_2025/elnaira_jor/admin/students/select_studnet_info.php",
        JSON.stringify(data_send)
      )
      .then((res) => {
        // console.log(res);
        setstudentdata(res.message);
      })
      .catch((err) => console.log(err));
  };

  const handleaddquestion = () => {
    let answerslistarr = [...allanswers];
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
    // console.log(answers);
    const data_send = {
      question_id: rowdata.question_id,
      unit_id: rowdata.unit_id,
      question_text: rowdata.question_text,
      answers,
      valid_answer,
      exam_id: rowdata.exam_id,
      course_id: rowdata.course_id,
      question_image_url: rowdata.question_image_url,
      help_text: "",
      help_pdf: rowdata.help_pdf,
      help_video: rowdata.help_video,
    };
    console.log(data_send);
    axios
      .post(
        "https://camp-coding.online/Teacher_App_2025/elnaira_jor/admin/mcq/update_mcq.php",
        JSON.stringify(data_send)
      )
      .then((res) => {
        if (res.status == "success") {
          // updatemcq();
          getReports();
          toast.success("Question has added successfully");
        } else if (res.status == "error") {
          toast.error("Question has not added");
        } else {
          toast.error("Something Went Error");
        }
      })
      .catch((err) => console.log(err));
  };

  const columns = [
    {
      Header: "No",
      Cell: (cell) => {
        return <b>{cell.cell.row.index + 1}</b>;
      },
    },
    {
      Header: "Report Type",
      accessor: "report_type",
    },
    {
      Header: "View Student",
      Cell: (cell) => {
        return (
          <button
            className="btn btn-primary"
            onClick={() => {
              console.log(cell.cell.row.original?.student_data);
              setView(true);
              setItem(cell.cell.row.original?.student_data);
              getstudentdata(cell.cell.row.original?.student_data?.student_id);
            }}
          >
            View
          </button>
        );
      },
    },
    {
      Header: "Status",
      Cell: (cell) => {
        switch (cell.cell.row.original.hidden) {
          case "pending":
            return <div style={{ cursor: "pointer" }}>Pending</div>;
          case "solved":
            return <div style={{ cursor: "pointer" }}>Solved</div>;

          default:
            return (
              <span className="badge badge-pill badge-soft-success font-size-12">
                {cell.cell.row.original.status}
              </span>
            );
        }
      },
    },
    {
      Header: "contact With Student",
      Cell: (cell) => {
        return (
          <a
            href={
              "https://wa.me/+2" +
              cell?.cell?.row?.original?.student_data?.phone
            }
            target="_blank"
            style={{
              color: "green",
              display: "block",
              width: "100%",
              textAlign: "center",
              fontSize: "22px",
              height: "100%",
            }}
          >
            <WhatsApp />
          </a>
        );
      },
    },
    {
      Header: "Action",
      Cell: (cell) => {
        return (
          <>
            <UncontrolledDropdown>
              <DropdownToggle
                className="btn btn-light btn-sm"
                tag="button"
                data-bs-toggle="dropdown"
                direction="start"
              >
                <i className="bx bx-dots-horizontal-rounded"></i>
              </DropdownToggle>
              <DropdownMenu className="dropdown-menu-end">
                <DropdownItem
                  onClick={() => {
                    setShowSolve(true);
                    setItem(cell.cell.row.original);
                    setanswers(cell.cell.row.original.answers);
                    // console.log(cell.cell.row.original.answers)
                  }}
                >
                  Set As Solved
                </DropdownItem>
                <DropdownItem
                  onClick={() => {
                    setrowdata({
                      ...rowdata,
                      question_id:
                        cell.cell.row.original.report_item_data.question_id,
                    });
                    // console.log(cell.cell.row.original.report_item_data)
                    // console.log(cell.cell.row.original)
                    // setEdit(true);
                    setItem(cell.cell.row.original?.report_item_data);
                    setIsModalOpen(true);
                    let alldatapushed = [];
                    // setallanswers([...cell.cell.row.original.arrAns]);
                    for (
                      let i = 0;
                      i <
                      cell.cell.row.original?.report_item_data?.answers?.length;
                      i++
                    ) {
                      let obj = {
                        id: i + 1,
                        answer:
                          cell.cell.row.original?.report_item_data?.answers[i]
                            .answer_text,
                        checked:
                          cell.cell.row.original?.report_item_data?.answers[i]
                            .answer_check == "true"
                            ? true
                            : false,
                      };
                      // console.log(cell.cell.row.original?.answers)
                      alldatapushed.push(obj);
                      // console.log(alldatapushed)
                      // console.log("reerer")
                      // console.log(obj)
                      setallanswers([...alldatapushed]);
                      // console.log(alldatapushed)
                    }
                  }}
                >
                  Edit
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </>
        );
      },
    },
  ];
  const [videos, setvideos] = useState([]);
  const getvideos = () => {
    axios
      .get(
        "https://camp-coding.online/Teacher_App_2025/elnaira_jor/admin/videos/select_videos.php"
      )
      .then((res) => {
        // console.log(res);
        setvideos(res);
        // setaddquestiondata({...addquestiondata,help_video:res[0].video_id})
      });
  };
  const [book_url, setBookUrl] = useState(false);
  const [uploadloading, setuploadloading] = useState(false);
  const [book, setBook] = useState(false);

  const uploadPdf = async () => {
    setLoading(true);
    const formData = new FormData();
    if (book) {
      formData.append("file_attachment", book);
      // console.log(book);
      const url = await axios.post(
        "https://camp-coding.online/Teacher_App_2025/elnaira_jor/admin/uploud_pdf.php",
        formData
      );
      // console.log(url);
      if (url.status == "success") {
        setBookUrl(url.message);
        setrowdata({ ...rowdata, help_pdf: url.message });
        toast.success("File Uploaded Successfully");
      } else {
        toast.error(url.message);
      }
    }
    setLoading(false);
  };

  const handleuploadimg = () => {
    setuploadloading(true);
    const formdata = new FormData();
    formdata.append("image", img);
    axios
      .post(
        "https://camp-coding.online/Teacher_App_2025/elnaira_jor/admin/image_uplouder.php",
        formdata
      )
      .then((res) => {
        // console.log(res);
        setrowdata({ ...rowdata, question_image_url: res });
      })
      .catch((err) => console.log(err))
      .finally(() => {
        setuploadloading(false);
      });
  };

  const handlesavetxt = (e, i, id) => {
    const list = [...allanswers];
    list[i]["answer"] = e.target.value;
    // setanswersArray(list);
    setallanswers(list);
  };

  const handleFileSelect = async (event) => {
    const file = event.target.files[0];
    if (!file) {
      // No file selected
      return;
    }
    setBook(file);
    var reader = new FileReader();
    reader.readAsBinaryString(event.target.files[0]);
    reader.onloadend = function () {
      var count = reader.result.match(/\/Type[\s]*\/Page[^s]/g)?.length;
      if (count) {
        setNumberOfPages(count);
      } else {
        setNumberOfPages(false);
      }
    };
  };

  useEffect(() => {
    getvideos();
  }, []);

  return (
    <React.Fragment>
      <Container fluid={true}>
        <Breadcrumbs
          title={cd?.course_name}
          breadcrumbItem={"Flash Cards List"}
        />

        <Row>
          <Col lg={12}>
            <Card>
              <CardBody>
                <div className="position-relative">
                  <div className="modal-button mt-2">
                    <Row className="align-items-start"></Row>
                  </div>
                </div>
                <div id="table-invoices-list">
                  {itemLoader ? (
                    <Loader />
                  ) : (
                    <>
                      {itemReport && itemReport.length > 0 ? (
                        <FlashCardsTableList
                          showHideFlashCard={showHideFlashCards}
                          data={itemReport}
                          columns={columns}
                        />
                      ) : (
                        <h4>No Reports</h4>
                      )}
                    </>
                  )}
                </div>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle} tag="h4">
          Add New Flash Card
        </ModalHeader>
        <ModalBody>
          <Form
            onSubmit={(e) => {
              e.preventDefault();
              addFlashCard(e);
              return false;
            }}
          >
            <Row>
              <Col md={12}>
                <div class={isBack ? "card-flid back" : "card-flid"}>
                  <div class="card-inner">
                    <div class="card-front">{side1}</div>

                    <div class="card-back">{side2}</div>
                  </div>
                </div>
                <div className="mb-3">
                  <Label className="form-label">Side 1</Label>
                  <Input
                    name="flashCard_title"
                    type="text"
                    onChange={(e) => setSide1(e.currentTarget.value)}
                    onFocus={() => {
                      setIsBack(false);
                    }}
                  />
                </div>
                <div className="mb-3">
                  <Label className="form-label">Side 2</Label>
                  <Input
                    name="flashCard_value"
                    type="text"
                    onChange={(e) => setSide2(e.currentTarget.value)}
                    onFocus={() => {
                      setIsBack(true);
                    }}
                  />
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

      <Modal isOpen={edit} toggle={() => setEdit(false)}>
        <ModalHeader toggle={() => setEdit(false)} tag="h4">
          Edit Flash Card
        </ModalHeader>
        <ModalBody>
          <Form
            onSubmit={(e) => {
              e.preventDefault();
              editFlashCard(e);
              return false;
            }}
          >
            <Row>
              <Col md={12}>
                <div className="mb-3">
                  <Label className="form-label">Mcq Question</Label>
                  <textarea
                    className="form-control"
                    defaultValue={item?.question_text}
                    onChange={(e) => setSide3(e.currentTarget.value)}
                    name=""
                    id=""
                    cols="30"
                    rows="10"
                  ></textarea>
                  {/* <Input type="text" name="flashCard_title" defaultValue={item?.question_text} onChange={(e) => setSide3(e.currentTarget.value)} onFocus={() => { setIsEditBack(false); }} /> */}
                </div>
                {/* <div className="mb-3">
                  <Label className="form-label">flash card side 2</Label>
                  <Input type="text" name="flashCard_answar" defaultValue={item?.flash_card_side_2} onChange={(e) => setSide4(e.currentTarget.value)} onFocus={() => { setIsEditBack(true); }} />
                </div> */}
              </Col>
              {answers.map((item, index) => {
                return (
                  <textarea
                    style={{
                      width: "100%",
                    }}
                    name=""
                    id=""
                    cols="30"
                    rows="10"
                  ></textarea>
                );
              })}
            </Row>
            <Row>
              <Col md={12}>
                <div className="mb-3">
                  <Label></Label>
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

      <Modal
        className="modelflash"
        style={{
          minHeight: "300px",
        }}
        isOpen={view}
        toggle={() => setView(false)}
      >
        <ModalHeader toggle={() => setView(false)} tag="h4">
          Flash Card
        </ModalHeader>
        <ModalBody>
          <Form
            onSubmit={(e) => {
              e.preventDefault();
            }}
          >
            <Row>
              <Col md={12}>
                <h3
                  style={{
                    width: "fit-content",
                    padding: "-8px 18px 5px 0",
                    borderBottom: ".4px solid #80808054",
                  }}
                >
                  Report Type : {item?.report_type}
                </h3>
                <div>
                  <h5
                    style={{
                      width: "fit-content",
                      padding: "10px 18px 10px 0",
                      borderBottom: ".4px solid #80808054",
                    }}
                  >
                    Student Details{" "}
                  </h5>
                  <div className="student_infoflash">
                    <img src={studentdata?.student_avater_url} alt="" />
                    <div>
                      <h4>{studentdata?.student_name}</h4>
                      <p>{studentdata?.student_email}</p>
                      <p
                        style={{
                          display: "flex",
                          alignItems: "center",
                          flexDirection: "column",
                        }}
                      >
                        {studentdata?.phone}
                      </p>
                      {studentdata?.university_name &&
                      studentdata?.grade_title ? (
                        <p style={{ marginTop: "-4px" }}>
                          {studentdata?.university_name} -{" "}
                          {studentdata?.grade_title}
                        </p>
                      ) : null}

                      <a
                        href={"https://wa.me/" + studentdata?.phone}
                        style={{
                          color: "green",
                          display: "block",
                          margin: "0px",
                          width: "100%",
                          textAlign: "center",
                          fontSize: "22px",
                          height: "100%",
                        }}
                        target="_blanck"
                      >
                        <WhatsApp />
                      </a>
                    </div>
                    {/* <div class="card-inner">
                      <div class="card-front">
                        {item?.flash_card_side_1}
                      </div>
                      <div class="card-back">
                        {item?.flash_card_side_2}
                      </div>
                    </div> */}
                  </div>
                </div>
              </Col>
            </Row>
          </Form>
        </ModalBody>
      </Modal>

      {showconf ? (
        <Confirm
          id={rowdata.number}
          cancleoper={() => {
            setshowconf(false);
          }}
          confirmoper={() => {
            const send_data = {
              hidden_value: rowdata.hidden == "no" ? "yes" : "no",
              flash_card_id: rowdata.flash_card_id,
            };
            showHideFlashCards(send_data);
            setshowconf(false);
          }}
          status={rowdata.hidden == "no" ? "hide" : "show"}
          comp={"unit"}
        />
      ) : null}
      <Modal isOpen={showCopy}>
        <ModalHeader tag="h4">
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              width: "100%",
              alignItems: "center",
            }}
          >
            <h4> Copy Flash Card To Unit </h4>
            <CloseButton
              onClick={() => {
                setsetShowCopy(false);
                setSelectedCourse(false);
                setUnits(false);
              }}
              style={{ marginLeft: "auto" }}
            />
          </div>
        </ModalHeader>
        <ModalBody>
          <form
            action="#"
            style={{
              padding: "15px",
              display: "flex",
              flexDirection: "column",
            }}
            onSubmit={(e) => {
              e.preventDefault();
              handlecopyitem(e);
            }}
          >
            <div className="input_Field">
              <Select
                style={{
                  width: "100%",
                  borderRadius: "4px",
                  margin: "10px 0",
                }}
                type="text"
                name="course_id"
                id="course_id"
                placeholder="Choose Course"
                onChange={(e) => setSelectedCourse(e.target.value)}
                required
              >
                {Courses && Courses.length ? (
                  Courses.map((item, index) => {
                    return (
                      <MenuItem value={item?.course_id} key={index}>
                        {item?.course_name} - {item.university_name} -{" "}
                        {item.grade_name}
                      </MenuItem>
                    );
                  })
                ) : (
                  <h3>No Courses</h3>
                )}
              </Select>
            </div>
            {selectedCourse && Units && Units.length ? (
              <div className="input_Field">
                <Select
                  style={{
                    width: "100%",
                    borderRadius: "4px",
                    margin: "10px 0",
                  }}
                  type="text"
                  name="unit_id"
                  id="unit_id"
                  placeholder="Choose Unit"
                  onChange={(e) => setSelectedUnit(e.target.value)}
                  required
                >
                  {Units.map((item, index) => {
                    return (
                      <MenuItem value={item?.unit_id} key={index}>
                        {item?.unit_name}
                      </MenuItem>
                    );
                  })}
                </Select>
              </div>
            ) : (
              <h3>No Units In Course</h3>
            )}
            <button
              className="btn btn-success"
              style={{ margin: "10px 0 0 auto" }}
            >
              {" "}
              Assign To Unit{" "}
            </button>
          </form>
        </ModalBody>
      </Modal>

      <Modal isOpen={showSolve}>
        <ModalHeader tag="h4">
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              width: "100%",
              alignItems: "center",
            }}
          >
            <h4> Solve Reports </h4>
            <CloseButton
              onClick={() => {
                setShowSolve(false);
              }}
              style={{ marginLeft: "auto" }}
            />
          </div>
        </ModalHeader>
        <ModalBody>
          <form
            action="#"
            style={{
              padding: "15px",
              display: "flex",
              flexDirection: "column",
            }}
            onSubmit={(e) => {
              e.preventDefault();
              handleSolveReport(e);
            }}
          >
            <h3 style={{ textAlign: "center" }}>
              {" "}
              Are You sure Solve This Report ?{" "}
            </h3>

            <button
              className="btn btn-success"
              style={{ margin: "10px 0 0 auto" }}
            >
              {" "}
              Set As Solved{" "}
            </button>
          </form>
        </ModalBody>
      </Modal>
      <Modal title="Edit question" isOpen={isModalOpen}>
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
            handleaddquestion();
            setIsModalOpen(false);
          }}
        >
          <CloseButton
            onClick={() => setIsModalOpen(false)}
            style={{ marginLeft: "auto" }}
          />

          <div className="inputField withtext">
            <label htmlFor="exam_name">Question Text</label>
            <Input
              style={{
                width: "100%",
                padding: "10px",
                borderRadius: "4px",
              }}
              type="text"
              name="exam_name"
              id="exam_name"
              placeholder="question text"
              // required
              value={rowdata.question_text}
              onChange={(e) => {
                setrowdata({ ...rowdata, question_text: e.target.value });
                // setexamdata({...examdata,exam_name:e.target.value})
              }}
            />
          </div>

          <div className="inputField withtext upimgdiv">
            <label htmlFor="exam_img">Question image</label>
            <Input
              style={{
                width: "100%",
                padding: "10px",
                borderRadius: "4px",
              }}
              type="file"
              name="exam_img"
              id="exam_img"
              placeholder="question text"
              // required
              onChange={(e) => {
                setimg(e.target.files[0]);
                // setaddquestiondata({...addquestiondata,question_text:e.target.value})
                // setexamdata({...examdata,exam_name:e.target.value})
              }}
            />
            {uploadloading ? (
              <Spinner />
            ) : (
              <img
                onClick={() => {
                  handleuploadimg();
                }}
                className="up_img"
                src={require("../../assets/images/upload.png")}
                alt=""
              />
            )}
          </div>
          {/* <div className="mb-3">
              <Label className="form-label">ebook file</Label>
              <div className="form-control" style={{ "display": "flex", width: "100%", justifyContent: "space-between", alignItems: "center" }}>  <input type="file" id="pdfInput" accept=".pdf" onChange={handleFileSelect} /> <span className="btn btn-primary" onClick={() => uploadPdf()}>
                {!loading ? <Icon icon="solar:upload-bold-duotone" /> : <Loader size="sm" />}
              </span></div>
              <h4>{numberOfPages ? <span>numberOfPages : {numberOfPages}</span> : null}</h4>
            </div>


            <div className="inputField withtext">
              <label htmlFor="exam_name">Help Video</label>
              <select onChange={(e)=>{
                setrowdata({...rowdata,help_video:e.target.value})
              }} value={rowdata.help_video} className="form-control">
                {
                  videos.map((item)=>{
                    return(
                      <option value={item.video_id}>{item.video_title}</option>
                    )
                  })
                }
              </select>
            </div> */}

          <div className="inputField withtext">
            <label
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
              htmlFor="exam_name"
            >
              <span>answers Video</span>
              <span
                style={{
                  fontSize: "30px",
                  cursor: "pointer",
                }}
                onClick={() => {
                  setallanswers([
                    ...allanswers,
                    {
                      id: allanswers.length + 1,
                      checked: false,
                      answer_text: "",
                    },
                  ]);
                }}
              >
                +
              </span>
            </label>
            {allanswers?.map((item, index) => {
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
                      let answerarr = [...allanswers];
                      setallanswers(
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
            {/* {
                allanswers.map((item,index)=>{
                  return(
                    <div style={{
                      display:'flex',
                      alignItems:'center',
                      justifyContent:'space-between',
                      flexWrap:'wrap',
                      marginBottom:'10px'
                    }}>
                      <textarea onChange={(e)=>{
                      handlesavetxt(e,index)
                    }} style={{ width:'96%' }} value={item.answer_text} className='form-control' name="" id="" cols="30" rows="10"></textarea>
                      <input style={{ width:'fit-content' }} type="checkbox" checked={item.answer_check=="true"}/>
                    </div>
                  )
                })
              } */}
          </div>
          <button
            onClick={() => {}}
            className="btn btn-success"
            style={{ margin: "10px 0 0 auto" }}
          >
            {" "}
            Edit Question{" "}
          </button>
        </form>
      </Modal>
    </React.Fragment>
  );
};

export default Mcq;
