import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
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
} from "reactstrap";

//Import Flatepicker
import "flatpickr/dist/themes/material_blue.css";
import Flatpickr from "react-flatpickr";

// Breadcrumb
import Breadcrumbs from "../../../components/Common/Breadcrumb";
import VideoListTable from "./VideoTable/videoListTable";
import axios from "axios";
import { Loader, SelectPicker } from "rsuite";
import { MenuItem, Select } from "@mui/material";
import { ToastContainer, toast } from "react-toastify";
import CopyToClipboard from "react-copy-to-clipboard";
import { ContentCopyOutlined } from "@mui/icons-material";
import { base_url } from "../../../constants";

const Videos = () => {
  console.log("testoo");
  document.title = "Videos | Matary - React Admin & Dashboard Template";

  const localdata = localStorage.getItem("elmatary_admin");
  let adminData = localdata && JSON.parse(localdata);

  const navigate = useNavigate();
  const [Videos, setVideos] = useState([]);
  const [showAssign, setShowAssign] = useState(false);
  const [item, setItem] = useState(false);
  const [showEdit, setShowEdit] = useState(false);
  const [itemLoader, setItemLoader] = useState(false);
  const getVideos = async () => {
    setItemLoader(true);
    const data_send = {
      admin_id: adminData.admin_id,
      access_token: adminData.access_token,
    };
    const videos = await axios.post(
      base_url + "/admin/videos/select_videos.php",
      JSON.stringify(data_send)
    );
    console.log(videos);
    setVideos([...videos]);
    // if(videos.status=='success'){
    // }
    if (videos.message == "Session Expired") {
      localStorage.removeItem("elmatary_admin");
      navigate("/login", { replace: true });
    }

    setItemLoader(false);
  };
  useEffect(() => {
    getVideos();
  }, []);

  const [Courses, setCourses] = useState(false);
  const getCourses = async () => {
    const data_send = {
      admin_id: adminData.admin_id,
      access_token: adminData.access_token,
    };
    const courses = await axios.post(
      base_url + "/admin/courses/select_courses.php",
      JSON.stringify(data_send)
    );
    if (courses.status == "success") {
      setCourses([...courses.message]);
    }
    if (courses.message == "Session Expired") {
      localStorage.removeItem("elmatary_admin");
      navigate("/login", { replace: true });
    }
  };

  const [selectedUnit, setSelectedUnit] = useState(false);
  const AssignVideo = async (e) => {
    const data_send = {
      new_title: e.currentTarget.new_title.value, // not req
      course_id: selectedCourse,
      unit_id: selectedUnit,
      source_video_id: item.video_id,
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
      getVideos();
      setShowAssign(false);
    } else {
      toast.error(assign.message);
    }
  };

  const [selectedCourse, setSelectedCourse] = useState(false);
  const [Units, setUnits] = useState(false);
  const getUnits = async () => {
    const send_data = {
      admin_id: adminData.admin_id,
      access_token: adminData.access_token,
      course_id: selectedCourse,
    };
    try {
      const units = await axios.post(
        base_url + "/admin/courses/select_course_units.php",
        send_data
      );
      console.log(units);
      console.log(selectedCourse);
      if (units.message == "Session Expired") {
        localStorage.removeItem("elmatary_admin");
        navigate("/login", { replace: true });
      }
      if (units.status == "success") {
        setUnits([...units.message]);
      }
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    getUnits();
  }, [selectedCourse]);
  const [unitName, setUnitName] = useState(false);

  const handleOk = async (e) => {
    const send_data = {
      course_id: selectedCourse,
      unit_name: unitName,
      admin_id: adminData.admin_id,
      access_token: adminData.access_token,
    };
    const units = await axios.post(
      base_url + "/admin/courses/add_unit.php",
      send_data
    );
    if (units.message == "Session Expired") {
      localStorage.removeItem("elmatary_admin");
      navigate("/login", { replace: true });
    }
    if (units.status == "success") {
      toast.success("Added");
      await getUnits();
    } else {
      toast.error(units.message);
    }
  };
  const [showEditV, setShowEditV] = useState(false);
  const editVideo = async (e) => {
    console.log(e);
    const data_send = {
      source_video_id: item.video_id,
      video_title: e.currentTarget.new_title.value
        ? e.currentTarget.new_title.value
        : item.video_title,
      video_duration: e.currentTarget.video_duration.value
        ? e.currentTarget.video_duration.value
        : item.video_duration,
      youtube_id: e.currentTarget.youtube_id.value
        ? e.currentTarget.youtube_id.value
        : item.youtube_id,
      loom_url: e.currentTarget.loom_url.value
        ? e.currentTarget.loom_url.value
        : item.loom_url,
      // "publitio_data": e.currentTarget.publitio_data.value ? e.currentTarget.publitio_data.value : item.publitio_data,
      admin_id: adminData.admin_id,
      access_token: adminData.access_token,
    };
    console.log(data_send);

    const assign = await axios.post(
      base_url + "/admin/videos/edit_source_video.php",
      data_send
    );
    console.log(assign);
    if (assign.message == "Session Expired") {
      localStorage.removeItem("elmatary_admin");
      navigate("/login", { replace: true });
    }
    if (assign.status == "success") {
      toast.success("Editted");
      getVideos();
      setShowEditV(false);
    } else {
      toast.error(assign.message);
    }
  };
  const columns = [
    {
      Header: "No",
      Cell: (cell) => {
        return <b>{cell.cell.row.index + 1}</b>;
      },
    },
    ,
    {
      Header: "Video Title",
      accessor: "video_title",
    },
    {
      Header: "Video Duration",
      accessor: "video_duration",
      Filter: false,
    },
    {
      Header: "Video Source ID",
      accessor: "video_id",
      Cell: (cell) => {
        return (
          <>
            <CopyToClipboard
              style={{
                padding: "0 14px",
                cursor: "pointer",
                width: "100%",
                display: "flex",
                gap: "10px",
                alignItems: "center",
              }}
              text={cell.cell.row.original?.video_id}
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
                    fontSize: "22px",
                    fontWeight: "700",
                    color: "green",
                  }}
                >
                  {cell.cell.row.original?.video_id}
                </b>
                <em>
                  <ContentCopyOutlined />
                </em>
              </span>
            </CopyToClipboard>
          </>
        );
      },
    },
    {
      Header: "View Video",
      Cell: (cell) => {
        return (
          <button
            class="btn btn-success"
            onClick={() => {
              navigate("/videos/unit-videos", {
                state: cell.cell.row.original,
              });
            }}
          >
            View
          </button>
        );
      },
    },
    {
      Header: "Edit",
      Cell: (cell) => {
        return (
          <>
            <button
              className="btn btn-primary"
              onClick={() => {
                setItem(cell.cell.row.original);
                setShowEditV(true);
                getCourses();
              }}
            >
              Edit
            </button>
          </>
        );
      },
    },
    {
      Header: "Video Questions",
      Cell: (cell) => {
        return (
          <>
            <button
              className="btn btn-warning"
              onClick={() => {
                console.log(cell.cell.row.original);
                navigate("/videoquestions", {
                  state: { course_data: cell.cell.row.original },
                });
              }}
            >
              Video Questions
            </button>
          </>
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
                console.log(cell.cell.row.original);
                setItem(cell.cell.row.original);
                setShowAssign(true);
                getCourses();
              }}
            >
              Assign
            </button>
          </>
        );
      },
    },
  ];

  return (
    <React.Fragment>
      <div className="page-content">
        <Container fluid={true}>
          <Breadcrumbs title="Videos" breadcrumbItem="Video List" />

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
                                navigate("add-video");
                              }}
                            >
                              <i className="mdi mdi-plus me-1"></i> Add Video
                            </button>
                          </div>
                        </Col>
                      </Row>
                    </div>
                  </div>
                  <div id="table-invoices-list">
                    {itemLoader ? (
                      <Loader />
                    ) : Videos && Videos.length ? (
                      <VideoListTable videos={Videos} columns={columns} />
                    ) : (
                      <h4>No videos</h4>
                    )}
                  </div>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
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
                    {
                      console.log(item, "item");
                    }
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
              <>
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
                </div>{" "}
              </>
            ) : (
              <h3>No Units In Course</h3>
            )}
            <form
              action="#"
              style={{
                padding: "15px",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <div className="input_Field">
                <label forHtml="unit_name">Add New Unit</label>
                <Input
                  style={{
                    width: "100%",
                    padding: "10px",
                    borderRadius: "4px",
                  }}
                  type="text"
                  name="unit_name"
                  id="unit_name"
                  placeholder="unit_name"
                  onChange={(e) => setUnitName(e.currentTarget.value)}
                  required
                />
              </div>
              <button
                className="btn btn-success"
                onClick={(e) => {
                  e.preventDefault();
                  handleOk(e);
                }}
                style={{ margin: "10px 0 0 auto" }}
              >
                {" "}
                Add Unit{" "}
              </button>
            </form>
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
      <Modal isOpen={showEditV}>
        <ModalHeader tag="h4">
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              width: "100%",
              alignItems: "center",
            }}
          >
            <h4> Edit Video </h4>
            <CloseButton
              onClick={() => {
                setShowEditV(false);
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
              editVideo(e);
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
                defaultValue={item?.video_title}
              />
            </div>
            <div className="input_Field">
              <Input
                style={{
                  width: "100%",
                  borderRadius: "4px",
                  margin: "10px 0",
                }}
                type="text"
                name="video_duration"
                id="video_duration"
                placeholder="Enter video duration"
                defaultValue={item?.video_duration}
              />
            </div>

            <div className="input_Field">
              <Input
                style={{
                  width: "100%",
                  borderRadius: "4px",
                  margin: "10px 0",
                }}
                type="text"
                name="youtube_id"
                id="youtube_id"
                placeholder="Enter Video Link"
                defaultValue={item?.youtube_id}
              />
            </div>

            <div className="input_Field">
              <Input
                style={{
                  width: "100%",
                  borderRadius: "4px",
                  margin: "10px 0",
                }}
                type="text"
                name="youtube_id"
                id="youtube_id"
                placeholder="Enter Loom Link"
                defaultValue={item?.loom_url}
              />
            </div>

            <button
              className="btn btn-success"
              style={{ margin: "10px 0 0 auto" }}
            >
              {" "}
              Edit{" "}
            </button>
          </form>
        </ModalBody>
      </Modal>
      <ToastContainer />
    </React.Fragment>
  );
};

export default Videos;
