import React, { useEffect, useState } from "react";
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
  CloseButton,
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

const Flash_Cards = ({ CourseId, unitId, cd }) => {
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
  // console.log(CourseId)
  const editFlashCard = async (e) => {
    const data_send = {
      course_id: CourseId,
      // "unit_id": unitId,
      flash_card_side_2: e.currentTarget.flashCard_answar.value,
      flash_card_side_1: e.currentTarget.flashCard_title.value,
      flash_card_id: item.flash_card_id,
    };
    const edit = await axios.post(
      "https://camp-coding.online/Teacher_App_2025/elnaira_jor/admin/flash_cards/update_flash_cards_info.php",
      data_send
    );
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
        report_for: "flash_cards",
        course_id: CourseId,
      }
    );
    setItemReport(reports.message);
    // console.log(reports.message)
    // setItemReport(reports?.message?.filter(item => item?.course_id == CourseId)?.filter(item => item?.status == "pending"));
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
    const data_send = {
      student_id: id,
    };
    axios
      .post(
        "https://camp-coding.online/Teacher_App_2025/elnaira_jor/admin/students/select_studnet_info.php",
        JSON.stringify(data_send)
      )
      .then((res) => {
        setstudentdata(res.message);
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
                  }}
                >
                  Set As Solved
                </DropdownItem>
                <DropdownItem
                  onClick={() => {
                    setEdit(true);
                    setItem(cell.cell.row.original?.report_item_data);
                    // console.log(cell.cell.row.original?.report_item_data)
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
                      {itemReport && itemReport.length ? (
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
                <div class={isEditBack ? "card-flid back" : "card-flid"}>
                  <div class="card-inner">
                    <div class="card-front">
                      {side3 ? side3 : item?.flash_card_side_1}
                    </div>

                    <div class="card-back">
                      {side4 ? side4 : item?.flash_card_side_2}
                    </div>
                  </div>
                </div>
                <div className="mb-3">
                  <Label className="form-label">flash card side 1</Label>
                  <Input
                    type="text"
                    name="flashCard_title"
                    defaultValue={item?.flash_card_side_1}
                    onChange={(e) => setSide3(e.currentTarget.value)}
                    onFocus={() => {
                      setIsEditBack(false);
                    }}
                  />
                </div>
                <div className="mb-3">
                  <Label className="form-label">flash card side 2</Label>
                  <Input
                    type="text"
                    name="flashCard_answar"
                    defaultValue={item?.flash_card_side_2}
                    onChange={(e) => setSide4(e.currentTarget.value)}
                    onFocus={() => {
                      setIsEditBack(true);
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
    </React.Fragment>
  );
};

export default Flash_Cards;
