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
  CloseButton,
  Input,
  Button,
} from "reactstrap";
import "./unit.css";
import { TbFreeRights } from "react-icons/tb";
import { MdOutlinePaid } from "react-icons/md";
import { BiEdit } from "react-icons/bi";
// BiEdit
import "flatpickr/dist/themes/material_blue.css";
import Flatpickr from "react-flatpickr";
import { Visibility, VisibilityOff } from "@mui/icons-material";
// Breadcrumb
import Breadcrumbs from "../../../components/Common/Breadcrumb";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import { useEffect } from "react";
import { Icon, MenuItem, Select } from "@mui/material";
// import VideoListTable from "../BooksList/VideoTable/bookListTable";
import VideoListTable from "../VideosList/VideoTable/videoListTable";
import CopyToClipboard from "react-copy-to-clipboard";
import { Copy } from "feather-icons-react/build/IconComponents";
import Confirm from "../../../components/ConfComp/Confirm";
import ConfirmPaid from "../../../components/ConfComp/ConfirmPaid";
import { base_url } from "../../../constants";
const UnitVideo = () => {
  document.title = "Courses | ALNaierh  ";
  const navigate = useNavigate();
  const localdata = localStorage.getItem("elmatary_admin");
  // console.log(localdata)
  let adminData = localdata && JSON.parse(localdata);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [UnitVideos, setUnitVideos] = useState(false);
  const location = useLocation();
  console.log(location);
  const [showupdate, setshowupdate] = useState(false);
  const [showconf2, setshowconf2] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState(false);
  const [Units, setUnits] = useState(false);

  const [rowdata, setrowdata] = useState({});
  const [Editted, setEditted] = useState(false);
  const [url, setUrl] = useState("");
  const getUnits = async () => {
    const send_data = {
      course_id: selectedCourse,
      admin_id: adminData.admin_id,
      access_token: adminData.access_token,
    };
    try {
      const units = await axios.post(
        base_url + "/admin/courses/select_course_units.php",
        send_data
      );
      console.log(units);
      console.log(selectedCourse);
      if (units.status == "success") {
        setUnits([...units.message]);
      }
      if (units.message == "Session Expired") {
        localStorage.removeItem("elmatary_admin");
        navigate("/login", { replace: true });
      }
    } catch (err) {
      console.log(err);
    }
  };

  const HandleUpdateVideo = () => {
    const data_send = {
      unit_video_id: rowdata.unit_video_id,
      new_title: rowdata.new_title,
      source_video_id: rowdata.source_video_id,
      unit_id: rowdata.unit_id,
      course_id: rowdata.course_id,
      admin_id: adminData.admin_id,
      access_token: adminData.access_token,
    };
    axios
      .post(
        base_url + "/admin/videos/update_videos_info.php",
        JSON.stringify(data_send)
      )
      .then((res) => {
        if (res.message == "Session Expired") {
          localStorage.removeItem("elmatary_admin");
          navigate("/login", { replace: true });
        }
        if (res.status == "success") {
          toast.success(res.message);
          selectVideoData();
          setShowEdit(false);
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
      admin_id: adminData.admin_id,
      access_token: adminData.access_token,
      free_value: data.free == "no" ? "yes" : "no",
    };
    axios
      .post(
        base_url + "/admin/videos/update_free_video.php",
        JSON.stringify(data_send)
      )
      .then((res) => {
        if (res.message == "Session Expired") {
          localStorage.removeItem("elmatary_admin");
          navigate("/login", { replace: true });
        }
        if (res.status == "success") {
          toast.success(res.message);
          selectVideoData();
        } else if (res.status == "error") {
          toast.error(res.message);
        } else {
          toast.error("something went error");
        }
      })
      .catch((err) => console.log(err));
  };

  const getVideoId = () => {
    const regExp =
      /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    const match = location?.state?.youtube_id.match(regExp);
    console.log(match);
    if (match && match[2].length === 11) {
      setUrl(match[2]);
      console.log(match[2]);
    }
  };

  useEffect(() => {
    getUnits();
  }, [selectedCourse]);
  useEffect(() => {
    getVideoId();
  }, []);

  const [videoShow, setVideoShow] = useState(false);

  const [Videos, setVideos] = useState([]);
  const [showAssign, setShowAssign] = useState(false);
  const [item, setItem] = useState(false);
  const [showEdit, setShowEdit] = useState(false);
  const [selectedUnit, setSelectedUnit] = useState(false);
  const [Courses, setCourses] = useState(false);

  const handleupdatestatus = (data) => {
    console.log(data);
    const data_send = {
      unit_video_id: data.unit_video_id,
      admin_id: adminData.admin_id,
      access_token: adminData.access_token,
      hidden_value: data.hidden == "no" ? "yes" : "no",
    };
    axios
      .post(
        base_url + "/admin/videos/update_videos_hidden.php",
        JSON.stringify(data_send)
      )
      .then((res) => {
        console.log(res);
        if (res.message == "Session Expired") {
          localStorage.removeItem("elmatary_admin");
          navigate("/login", { replace: true });
        }
        if (res.status == "success") {
          toast.success(res.message);
          selectVideoData();
        } else if (res.status == "error") {
          toast.error(res.message);
        } else {
          toast.error("something went error");
        }
      })
      .catch((err) => console.log(err));
    console.log(data_send);
  };

  const getCourses = async () => {
    const data_send = {
      admin_id: adminData.admin_id,
      access_token: adminData.access_token,
    };
    const courses = await axios.post(
      base_url + "/admin/courses/select_courses.php",
      JSON.stringify(data_send)
    );
    if (courses.message == "Session Expired") {
      localStorage.removeItem("elmatary_admin");
      navigate("/login", { replace: true });
    }
    if (courses.status == "success") {
      setCourses([...courses.message]);
    }
  };

  const [video_data, setVideoData] = useState(location.state);
  const [Video, setVideo] = useState(false);
  const [showconf, setshowconf] = useState(false);
  const selectVideoData = async () => {
    const data_send = {
      video_id: video_data?.video_id
        ? video_data?.video_id
        : video_data?.source_video_id
        ? video_data?.source_video_id
        : null,
      admin_id: adminData.admin_id,
      access_token: adminData.access_token,
    };
    const videos_data = await axios.post(
      base_url + "/admin/videos/select_video_data.php",
      JSON.stringify(data_send)
    );
    if (video_data.status == "success") {
      setVideoData(videos_data.message);
    }
    if (video_data.message == "Session Expired") {
      localStorage.removeItem("elmatary_admin");
      navigate("/login", { replace: true });
    }
  };

  useEffect(() => {
    selectVideoData();
  }, []);

  useEffect(() => {
    setVideo(video_data?.assign_data);
  }, [video_data]);

  if (!location?.state) {
    return navigate("/videos");
  }

  // let videoData = location.state;
  const columns = [
    {
      Header: "Video Title",
      Cell: (cell) => {
        return (
          <p>
            <span> Video Title : </span>
            <em>{cell.cell.row.original.new_title}</em>
          </p>
        );
      },
    },
    {
      Header: "Course Name",
      Cell: (cell) => {
        return (
          <p>
            <span> Course Name : </span>
            <em>{cell.cell.row.original.course_name}</em>
          </p>
        );
      },
    },
    {
      Header: "Unit Name",
      Cell: (cell) => {
        return (
          <p>
            <span> Unit Name : </span>
            <em>{cell?.cell?.row?.original?.new_title}</em>
          </p>
        );
      },
    },
    {
      Header: "Action",
      Cell: (cell) => {
        return (
          <>
            <UncontrolledDropdown className="DropVidUn">
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
                    setshowupdate(true);
                    setrowdata(cell.cell.row.original);
                    console.log(cell.cell.row.original);
                  }}
                >
                  <BiEdit />
                </DropdownItem>

                <DropdownItem
                  onClick={() => {
                    setrowdata(cell.cell.row.original);
                    setshowconf(true);
                    //handleupdatestatus(cell.cell.row.original)
                  }}
                >
                  {cell.cell.row.original.hidden == "yes" ? (
                    <VisibilityOff className="hidden" />
                  ) : (
                    <Visibility className="shown" />
                  )}
                </DropdownItem>

                <DropdownItem
                  onClick={() => {
                    setrowdata(cell.cell.row.original);
                    setshowconf2(true);
                    // handleupdatefree(cell.cell.row.original)
                  }}
                >
                  {cell.cell.row.original.free == "yes" ? (
                    <TbFreeRights className="hidden" />
                  ) : (
                    <MdOutlinePaid className="shown" />
                  )}
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </>
        );
      },
    },
  ];

  const AssignVideo = async (e) => {
    const data_send = {
      new_title: e.currentTarget.new_title.value, // not req
      source_video_id: video_data.video_id,
      unit_id: selectedUnit,
      course_id: selectedCourse,
      admin_id: adminData.admin_id,
      access_token: adminData.access_token,
    };
    console.log(data_send);
    const assign = await axios.post(
      base_url + "/admin/videos/assign_videos_to_unit.php",
      data_send
    );
    if (assign.message == "Session Expired") {
      localStorage.removeItem("elmatary_admin");
      navigate("/login", { replace: true });
    }
    if (assign.status == "success") {
      toast.success("Assigned");
      selectVideoData();
    } else {
      toast.error(assign.message);
    }
  };

  const playVimeoVideo = () => {
    const vimeoIframe = document?.getElementById("vimeoIframe");
    console.log(document?.getElementById("vimeoIframe"));
    vimeoIframe.contentWindow.document.querySelector(
      ".js-password"
    ).value = 1234;
    vimeoIframe.contentWindow.document
      .querySelector(".player .vp-overlay-wrapper .form form")
      .submit();
  };

  return (
    <React.Fragment>
      <div className="page-content">
        <Container fluid={true}>
          <Breadcrumbs
            title="Videos"
            breadcrumbItem={video_data?.video_title + " Unit List"}
          />
          <Card className="video_details">
            <CardBody id="video_details">
              <p className="src_id">
                <span>
                  {" "}
                  Video Source ID : <em>{video_data?.video_id}</em>
                </span>
                <CopyToClipboard
                  text={video_data?.video_id}
                  style={{ marginLeft: "14px", cursor: "pointer" }}
                  onCopy={() => toast.success("Copied")}
                >
                  <strong>
                    <Copy />
                  </strong>
                </CopyToClipboard>
              </p>
              <div className="details">
                <p>
                  <span> -Video Title : </span>
                  <em>{video_data?.video_title}</em>
                </p>
                {/* <p>
                                    <span> -Total Assigned Units :  </span>
                                    <em>{video_data?.assign_data?.length}</em>
                                </p> */}
              </div>
              <button
                className="btn btn-primary"
                onClick={() => {
                  setVideoShow(true);
                  playVimeoVideo();
                }}
              >
                Show Video
              </button>
            </CardBody>
          </Card>
          <Row>
            <div className="videoData">
              <div className="media">
                <div className="textData"></div>
              </div>
            </div>
            <Col lg={12}>
              <Card>
                <CardBody>
                  <div className="position-relative">
                    <div className="modal-button mt-2">
                      <Row className="align-items-start">
                        <Col className="col-sm">
                          <div>
                            {/* <button
                                                            type="button"
                                                            className="btn btn-success mb-4"
                                                            data-bs-toggle="modal"
                                                            data-bs-target="#addVideoModal"
                                                            style={{ margin: "0 10px" }}
                                                            onClick={
                                                                () => {
                                                                    console.log(Video);
                                                                    setItem(Video);
                                                                    navigate("/video/VideoMCQQuestions", { state: { videoData: video_data } });
                                                                }
                                                            }

                                                        >
                                                            Video MCQ Question
                                                        </button> */}
                            <button
                              type="button"
                              className="btn btn-success mb-4"
                              data-bs-toggle="modal"
                              data-bs-target="#addVideoModal"
                              onClick={() => {
                                console.log(Video);
                                setItem(Video);
                                setShowAssign(true);
                                getCourses();
                              }}
                            >
                              <i className="mdi mdi-plus me-1"></i> Assign Video
                              to unit
                            </button>
                          </div>
                        </Col>
                      </Row>
                    </div>
                  </div>

                  <div id="table-invoices-list" className="unitVideosList">
                    {Video && Video.length ? (
                      <VideoListTable videos={Video} columns={columns} />
                    ) : (
                      <div>
                        <h2>{null}</h2>
                      </div>
                    )}
                  </div>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>

      <Modal isOpen={showupdate}>
        <ModalHeader tag="h4">
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              width: "100%",
              alignItems: "center",
            }}
          >
            <h4> Update Video Data </h4>
            <CloseButton
              onClick={() => {
                setshowupdate(false);
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
              HandleUpdateVideo();
            }}
          >
            <div className="input_Field">
              <label htmlFor="">Old Title</label>
              <Input
                style={{
                  width: "100%",
                  borderRadius: "4px",
                  margin: "10px 0",
                }}
                type="text"
                name="new_title"
                onChange={(e) => {
                  setrowdata({ ...rowdata, new_title: e.target.value });
                }}
                value={rowdata.new_title}
                id="new_title"
                placeholder="Enter new_title"
              />
            </div>
            <Button type="submit" color="danger">
              Update
            </Button>
          </form>
        </ModalBody>
      </Modal>
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
                      <MenuItem value={item.course_id} key={index}>
                        {item.course_name} - {item.university_name} -{" "}
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
                      <MenuItem value={item.unit_id} key={index}>
                        {item.unit_name}
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
      {/* ====================================================================== */}
      <Modal isOpen={videoShow} className="modal-body">
        <ModalHeader tag="h4">
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              width: "100%",
              alignItems: "center",
            }}
          >
            <h4> Video </h4>
            <CloseButton
              onClick={() => {
                setShowAssign(false);
                setSelectedCourse(false);
                setUnits(false);
                setVideoShow(false);
              }}
              style={{ marginLeft: "auto" }}
            />
          </div>
        </ModalHeader>
        <ModalBody>
          <div>
            <iframe
              width="100%"
              className="publitioPlaceHolder"
              height="315"
              src={`https://www.youtube.com/embed/${url}?controls=0&fs=0`}
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
          </div>
        </ModalBody>
      </Modal>
      {/* ====================================================================== */}

      <ToastContainer />
      {showconf ? (
        <Confirm
          id={rowdata.unit_id}
          cancleoper={() => {
            setshowconf(false);
          }}
          confirmoper={() => {
            const send_data = {
              hidden_value: rowdata.hidden == "no" ? "yes" : "no",
              question_id: rowdata.question_id,
            };
            handleupdatestatus(rowdata);
            setshowconf(false);
          }}
          status={rowdata.hidden == "no" ? "hide" : "show"}
          comp={"unit video"}
        />
      ) : null}
      {showconf2 ? (
        <ConfirmPaid
          id={rowdata.unit_id}
          cancleoperpaid={() => {
            setshowconf2(false);
          }}
          confirmoperpaid={() => {
            const send_data = {
              hidden_value: rowdata.hidden == "no" ? "yes" : "no",
              question_id: rowdata.question_id,
            };
            handleupdatefree(rowdata);
            setshowconf2(false);
          }}
          status={rowdata.hidden == "no" ? "free" : "paid"}
          comp={"unit video"}
        />
      ) : null}
    </React.Fragment>
  );
};

export default UnitVideo;
