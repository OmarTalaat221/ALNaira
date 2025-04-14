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
  CloseButton,
} from "reactstrap";
import { Form as FormT } from "rsuite";
import axios from "axios";
//Import Flatepicker
import "flatpickr/dist/themes/material_blue.css";
import Flatpickr from "react-flatpickr";

// Breadcrumb
import Breadcrumbs from "../../components/Common/Breadcrumb";
import CourseListTable from "../Courses/CoursesList/CourseTable/courseListTable";
import UnitListTable from "../Units/UnitTable/UnitTableList";
import LessonsTableList from "./LessonsTabel/LessonsTableList";
import { useCallback } from "react";
import { Fragment } from "react";
import Flash_Cards from "../ReportsInteractive/flashcards";
import Tweets from "../ReportsInteractive/tweets";
import WrittenQuestions from "../ReportsInteractive/writtenquestion";
import MCQQuestions from "./mcqquestion";
// import VideoListTable from "../video/BooksList/VideoTable/bookListTable";
import { MenuItem, Select } from "@mui/material";
import { useEffect } from "react";
import { Loader, Radio, RadioGroup, SelectPicker } from "rsuite";
import VideoListTable from "../video/VideosList/VideoTable/videoListTable";
import { ToastContainer, toast } from "react-toastify";
import Ebooks from "../ReportsInteractive/ebooks";
import { TbFreeRights } from "react-icons/tb";
import { MdOutlinePaid } from "react-icons/md";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import Mcq from "../ReportsInteractive/Mcq";
// import Mcq from "../ReportsInteractive/Mcq";

// import CourseListTable from "../CourseTable/courseListTable";

const Lessons = () => {
  document.title = "Courses | ALNaierh  ";

  const location = useLocation();
  // const {state}=location;
  const [type_2, setType_2] = useState(false);
  const [videoLink, setVideoLink] = useState(false);

  const [modal, setModal] = useState(false);
  const toggle = useCallback(() => {
    if (modal) {
      setModal(false);
    } else {
      setModal(true);
    }
  }, [modal]);

  const navigate = useNavigate();

  function handelType_2Change(type_2_2) {
    setType_2(type_2_2);
  }
  function handelVideoLink(link) {
    setVideoLink(link);
  }
  const [title, setTitle] = useState("FlashCards");
  const [type, setType] = useState("FlashCards");

  document.title = title + " | ALNaierh  ";

  const buttons = [
    // { type: "Lessons", title: "Lessons" },
    { type: "FlashCards", title: "Flash Cards" },
    { type: "Tweets", title: "Tweets" },
    { type: "writtenquestion", title: "Written Questions" },
    { type: "mcq", title: "MCQ" },
    // { type: "mcqquestion", title: "MCQ Questions" },
    // { type: "ebooks", title: "Ebooks" },
    // ebooks
  ];
  const [Videos, setVideos] = useState([]);
  const [showAssign, setShowAssign] = useState(false);
  const [item, setItem] = useState(false);
  const [showEdit, setShowEdit] = useState(false);
  const [selectedUnit, setSelectedUnit] = useState(false);
  const [videoData, setVideoData] = useState(false);
  const [itemLoader, setItemLoader] = useState(false);
  const getVideos = async () => {
    setItemLoader(true);
    const videos = await axios.get(
      "https://camp-coding.online/Teacher_App_2025/elnaira_jor/admin/videos/select_videos.php"
    );
    setVideos([...videos]);
    setItemLoader(false);
  };
  useEffect(() => {
    getVideos();
  }, []);

  const [Courses, setCourses] = useState(false);
  const getCourses = async () => {
    const courses = await axios.get(
      "https://camp-coding.online/Teacher_App_2025/elnaira_jor/admin/courses/select_courses.php"
    );
    setCourses([...courses]);
  };

  const [selectedCourse, setSelectedCourse] = useState(false);
  const [Units, setUnits] = useState(false);

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
  const [rowdata, setrowdata] = useState({});
  const HandleUpdateVideo = () => {
    const data_send = {
      unit_video_id: rowdata.unit_video_id,
      new_title: rowdata.new_title,
      source_video_id: rowdata.source_video_id,
      unit_id: rowdata.unit_id,
      course_id: rowdata.course_id,
    };
    axios
      .post(
        "https://camp-coding.online/Teacher_App_2025/elnaira_jor/admin/videos/update_videos_info.php",
        JSON.stringify(data_send)
      )
      .then((res) => {
        if (res.status == "success") {
          toast.success(res.message);
        } else if (res.status == "error") {
          toast.error(res.message);
        } else {
          toast.error("something went error");
        }
      })
      .catch((err) => console.log(err));
  };

  const handleupdatestatus = (data) => {
    const data_send = {
      unit_video_id: data.unit_video_id,
      hidden_value: data.hidden == "no" ? "yes" : "no",
    };
    axios
      .post(
        "https://camp-coding.online/Teacher_App_2025/elnaira_jor/admin/videos/update_videos_hidden.php",
        JSON.stringify(data_send)
      )
      .then((res) => {
        if (res.status == "success") {
          toast.success(res.message);
          getVideos();
        } else if (res.status == "error") {
          toast.error(res.message);
        } else {
          toast.error("something went error");
        }
      })
      .catch((err) => console.log(err));
  };

  const handleupdatefree = (data) => {
    const data_send = {
      unit_video_id: data.unit_video_id,
      free_value: data.free == "no" ? "yes" : "no",
    };
    axios
      .post(
        "https://camp-coding.online/Teacher_App_2025/elnaira_jor/admin/videos/update_free_video.php",
        JSON.stringify(data_send)
      )
      .then((res) => {
        if (res.status == "success") {
          toast.success(res.message);
          getVideos();
        } else if (res.status == "error") {
          toast.error(res.message);
        } else {
          toast.error("something went error");
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
      Header: "Video Source ID",
      accessor: "source_video_id",
      Filter: false,
    },
    {
      Header: "Video Title",
      accessor: "new_title",
    },
    // {
    //   Header: "Course Name",
    //   accessor: "course_name",
    //   Filter: false,
    // },
    {
      Header: "Free",
      Cell: (cell) => {
        return (
          <DropdownItem
            onClick={() => {
              handleupdatefree(cell.cell.row.original);
            }}
          >
            {cell.cell.row.original.free == "no" ? (
              <TbFreeRights className="hidden" />
            ) : (
              <MdOutlinePaid className="shown" />
            )}
          </DropdownItem>
        );
      },
    },
    {
      Header: "Hidden",
      Cell: (cell) => {
        return (
          <DropdownItem
            onClick={() => {
              handleupdatestatus(cell.cell.row.original);
            }}
          >
            {cell.cell.row.original.hidden == "no" ? (
              <VisibilityOff className="hidden" />
            ) : (
              <Visibility className="shown" />
            )}
          </DropdownItem>
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
                navigate("/videos/unit-videos", {
                  state: cell.cell.row.original,
                });
              }}
            >
              View
            </button>
          </>
        );
      },
    },
  ];

  const Video = videoData.assign_data;

  const [videoType, setVideoType] = useState(false);

  const [unitVideos, setUnitVideos] = useState(false);
  const [videoData_r, setVideoDataR] = useState(false);
  const [pubLink, setPubLink] = useState(false);
  const [Vim_link, setVimLink] = useState(false);
  useEffect(() => {
    getUnitsVideos();
  }, [Videos]);

  useEffect(() => {
    if (selectedCourse) {
      setVideoDataR(Videos.filter((item) => item?.video_id == selectedCourse));
    } else {
      setVideoDataR(false);
    }
  }, [selectedCourse]);

  const [searchValue, setSearchValue] = useState(false);

  if (!location.state) {
    return navigate(-1);
  }

  const unitData = location?.state?.unitData?.unit_id;
  // console.log(unitData)
  const newUnitData = location.state.unitData;
  // console.log(location.state)
  // console.log(newUnitData)
  const courseData = location?.state?.coursedata?.course_id;

  const getUnitsVideos = () => {
    const arr = [];
    Videos.map((item, index) => {
      if (item.assign_data && item.assign_data.length) {
        arr.push(
          ...item.assign_data.filter((v_item, v_index) => {
            return v_item.unit_id == unitData;
          })
        );
      }
    });
    if (arr && arr.length) {
      setUnitVideos([...arr]);
    }
  };

  const AssignVideo = async (e) => {
    const data_send = {
      new_title: e.currentTarget.new_title.value, // not req
      course_id: courseData,
      unit_id: unitData,
      source_video_id: selectedCourse,
    };
    const assign = await axios.post(
      "https://camp-coding.online/Teacher_App_2025/elnaira_jor/admin/videos/assign_videos_to_unit.php",
      data_send
    );
    if (assign.status == "success") {
      toast.success("Assigned");
      getVideos();
    } else {
      toast.error(assign.message);
    }
  };

  return (
    <React.Fragment>
      <div className="page-content">
        <Container fluid={true}>
          <div className="header-btns">
            {buttons.map((buttonData, index) => (
              <button
                key={index}
                className={`btn btn-success ${
                  type === buttonData.type ? "btn-danger" : ""
                }`}
                onClick={() => {
                  setType(buttonData.type);
                  setTitle(buttonData.title);
                }}
              >
                {buttonData.title}
              </button>
            ))}
          </div>
          <div id="table-invoices-list">
            {type == "Lessons" ? (
              <Fragment>
                <Breadcrumbs
                  title={location?.state?.coursedata?.course_name}
                  breadcrumbItem={"Lesson List"}
                />

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
                                    data-bs-target="#addVideoModal"
                                    onClick={() => {
                                      setItem(Video);
                                      setShowAssign(true);
                                      getCourses();
                                    }}
                                  >
                                    <i className="mdi mdi-plus me-1"></i> Add
                                    Video
                                  </button>
                                </div>
                              </Col>
                            </Row>
                          </div>
                        </div>
                        <div id="table-invoices-list">
                          {itemLoader ? (
                            <Loader />
                          ) : (
                            <>
                              {unitVideos && unitVideos.length ? (
                                <VideoListTable
                                  videos={unitVideos}
                                  columns={columns}
                                />
                              ) : (
                                <div>
                                  <h2>No Videos</h2>
                                </div>
                              )}
                            </>
                          )}
                        </div>
                      </CardBody>
                    </Card>
                  </Col>
                </Row>
                <Modal isOpen={showAssign}>
                  <ModalHeader tag="h4">
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        width: "100%",
                        alignItems: "center",
                      }}
                    >
                      <h4> Assign Video To Unit </h4>
                      <CloseButton
                        onClick={() => {
                          setShowAssign(false);
                          setSelectedCourse(false);
                          setUnits(false);
                          setVideoType(false);
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
                        AssignVideo(e);
                      }}
                    >
                      <div className="input_Field">
                        <Input
                          style={{
                            width: "100%",
                            borderRadius: "4px",
                            margin: "10px 0",
                          }}
                          type="text"
                          name="new_title"
                          id="new_title"
                          placeholder="Enter new_title"
                        />
                      </div>
                      <div className="input_Field">
                        <FormT.Group controlId="radioList">
                          <RadioGroup
                            name="radioList"
                            onChange={(e) => {
                              setVideoDataR(false);
                              setSelectedCourse(null);
                              setVideoType(e);
                            }}
                          >
                            <p>Get Video</p>
                            <Radio value="vlist">Select From List</Radio>
                            <Radio value="vsid">
                              Search By Video source Id
                            </Radio>
                          </RadioGroup>
                        </FormT.Group>
                        {videoType == "vsid" ? (
                          Videos && Videos.length ? (
                            <>
                              <input
                                type="search"
                                className="search_type"
                                onChange={(e) =>
                                  setSearchValue(e.currentTarget.value)
                                }
                                placeholder="Video Source ID"
                              />
                              {searchValue && searchValue.length != "" ? (
                                <ul
                                  className="options"
                                  style={{ listStyle: "none" }}
                                >
                                  {Videos && Videos.length ? (
                                    Videos.map((item) => {
                                      return item.video_id
                                        .toString()
                                        .includes(searchValue) ? (
                                        <li
                                          onClick={() => {
                                            setSelectedCourse(item.video_id);
                                            setSearchValue(false);
                                          }}
                                        >
                                          {item.video_title}
                                        </li>
                                      ) : null;
                                    })
                                  ) : (
                                    <h3>No Videos</h3>
                                  )}
                                </ul>
                              ) : null}
                            </>
                          ) : (
                            <h3>No Videos</h3>
                          )
                        ) : videoType == "vlist" ? (
                          Videos && Videos.length ? (
                            <>
                              <SelectPicker
                                label="Select Video"
                                data={Videos.map((item) => {
                                  return {
                                    label: item?.video_title,
                                    value: item?.video_id,
                                  };
                                })}
                                style={{ width: 224 }}
                                required
                                onChange={(e) => setSelectedCourse(e)}
                              />
                            </>
                          ) : (
                            <h3>No Videos</h3>
                          )
                        ) : null}
                        {videoData_r && videoData_r.length ? (
                          <div className="videoData">
                            <p style={{ margin: 0 }}>
                              <span
                                style={{ fontWeight: "900", fontSize: "15px" }}
                              >
                                Video Title :{" "}
                              </span>{" "}
                              <em style={{ fontStyle: "normal" }}>
                                {" "}
                                {videoData_r[0]?.video_title}{" "}
                              </em>
                            </p>
                            <p style={{ margin: 0 }}>
                              <span
                                style={{ fontWeight: "900", fontSize: "15px" }}
                              >
                                Video Duration :{" "}
                              </span>{" "}
                              <em style={{ fontStyle: "normal" }}>
                                {" "}
                                {videoData_r[0]?.video_duration}{" "}
                              </em>
                            </p>

                            {videoData_r[0]?.publitio_data &&
                            videoData_r[0]?.publitio_data.length ? (
                              <p style={{ margin: "10px 0" }}>
                                <span
                                  style={{
                                    fontWeight: "900",
                                    fontSize: "15px",
                                  }}
                                >
                                  Publitio Video :{" "}
                                </span>{" "}
                                <p
                                  onClick={() => {
                                    setPubLink(videoData_r[0]?.publitio_data);
                                    setVimLink(false);
                                  }}
                                  className="btn btn-primary"
                                >
                                  Show Video
                                </p>
                              </p>
                            ) : null}

                            {videoData_r[0]?.vimeo_data &&
                            videoData_r[0]?.vimeo_data.length ? (
                              <p style={{ margin: "10px 0" }}>
                                <span
                                  style={{
                                    fontWeight: "900",
                                    fontSize: "15px",
                                  }}
                                >
                                  Vimeo Video :{" "}
                                </span>{" "}
                                <p
                                  onClick={() => {
                                    setPubLink(false);
                                    setVimLink(videoData_r[0]?.vimeo_data);
                                  }}
                                  className="btn btn-primary"
                                >
                                  Show Video
                                </p>
                              </p>
                            ) : null}
                          </div>
                        ) : null}{" "}
                      </div>

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
                <Modal isOpen={pubLink || Vim_link}>
                  <ModalHeader tag="h4">
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        width: "100%",
                        alignItems: "center",
                      }}
                    >
                      <h4> {pubLink ? "Publitio Video" : "Vimeo Video"} </h4>
                      <CloseButton
                        onClick={() => {
                          setPubLink(false);
                          setVimLink(false);
                        }}
                        style={{ marginLeft: "auto" }}
                      />
                    </div>
                  </ModalHeader>
                  <ModalBody>
                    {pubLink ? (
                      <iframe width="100%" src={pubLink}></iframe>
                    ) : (
                      <iframe width="100%" src={Vim_link}></iframe>
                    )}
                  </ModalBody>
                </Modal>
              </Fragment>
            ) : type == "FlashCards" ? (
              <Flash_Cards
                CourseId={courseData}
                unitId={unitData}
                allunitdata={location?.state?.unitData}
                cd={location.state.coursedata}
              />
            ) : type == "Tweets" ? (
              <Tweets
                CourseId={courseData}
                unitId={unitData}
                allunitdata={location?.state?.unitData}
                cd={location.state.coursedata}
              />
            ) : type == "writtenquestion" ? (
              <WrittenQuestions
                CourseId={courseData}
                unitId={unitData}
                allunitdata={location?.state?.unitData}
                cd={location.state.coursedata}
              />
            ) : type == "ebooks" ? (
              <Ebooks
                CourseId={courseData}
                unitId={unitData}
                allunitdata={location?.state?.unitData}
                cd={location.state.coursedata}
              />
            ) : type == "mcq" ? (
              <Mcq
                CourseId={courseData}
                unitId={unitData}
                allunitdata={location?.state?.unitData}
                cd={location.state.coursedata}
              />
            ) : null}
          </div>
        </Container>
        <Modal isOpen={modal} toggle={toggle}>
          <ModalHeader toggle={toggle} tag="h4">
            Add New Lesson
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
                <Col md={12}>
                  <div className="mb-3">
                    <Label className="form-label">Lesson Name</Label>
                    <Input name="orderId" type_2="text" />
                  </div>
                  <div className="mb-3">
                    <Label className="form-label">video</Label>
                    <Input name="orderId" type_2="file" />
                  </div>
                </Col>
              </Row>
              <Row>
                <Col>
                  <div className="text-end">
                    <button
                      type_2="submit"
                      className="btn btn-success save-user"
                    >
                      Save
                    </button>
                  </div>
                </Col>
              </Row>
            </Form>
          </ModalBody>
        </Modal>
        <ToastContainer />
      </div>
    </React.Fragment>
  );
};

export default Lessons;
