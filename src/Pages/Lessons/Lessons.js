import axios from "axios";
import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import {
  Card,
  CardBody,
  CloseButton,
  Col,
  Container,
  DropdownItem,
  Form,
  Input,
  Label,
  Modal,
  ModalBody,
  ModalHeader,
  Row,
} from "reactstrap";
import { Form as FormT } from "rsuite";
//Import Flatepicker
import "flatpickr/dist/themes/material_blue.css";

// Breadcrumb
import { Fragment, useCallback } from "react";
import Breadcrumbs from "../../components/Common/Breadcrumb";
import Flash_Cards from "../Interactive/flashcards";
import Tweets from "../Interactive/tweets";
import WrittenQuestions from "../Interactive/writtenquestion";
import MCQQuestions from "./mcqquestion";
// import VideoListTable from "../video/BooksList/VideoTable/bookListTable";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import { Loader, Radio, RadioGroup, SelectPicker } from "rsuite";
import { base_url } from "../../constants";
import Ebooks from "../Interactive/ebooks";
import UniqQuestion from "../UnitQuestion/UniqQuestion";
import VideoListTable from "../video/VideosList/VideoTable/videoListTable";

// import CourseListTable from "../CourseTable/courseListTable";

const Lessons = () => {
  const navigate = useNavigate();
  const localdata = localStorage.getItem("elmatary_admin");
  let adminData = localdata && JSON.parse(localdata);
  document.title = "Courses | Matary - React Admin & Dashboard Template";

  const location = useLocation();
  // const {state}=location;
  const [videoDuration, setVideoDuration] = useState("");
  const [type_2, setType_2] = useState(false);

  const [videoLink, setVideoLink] = useState(false);
  const [youtube_id, setyoutube_id] = useState("");
  const [modal, setModal] = useState(false);
  const toggle = useCallback(() => {
    if (modal) {
      setModal(false);
    } else {
      setModal(true);
    }
  }, [modal]);

  // const navigate = useNavigate();

  function handelType_2Change(type_2_2) {
    setType_2(type_2_2);
  }
  function handelVideoLink(link) {
    setVideoLink(link);
  }
  const [title, setTitle] = useState("Lessons");
  const [type, setType] = useState("Lessons");
  const [book, setBook] = useState(false);
  const [loading, setLoading] = useState(false);

  document.title = title + " | Matary - React Admin & Dashboard Template";

  const uploadPdf = async () => {
    setLoading(true);
    const formData = new FormData();
    if (book) {
      formData.append("file_attachment", book);
      const url = await axios.post(
        "https://drelmatary.net/Matary_site/admin/videos/upload_videos_excel/upload_vid_new.php",
        formData
      );
      console.log(url);
      if (url == "success") {
        toast.success("File Uploaded Successfully");
        getVideos();
        setModal(false);
      } else {
        toast.error(url.message);
      }
    }
    setLoading(false);
  };
  const [Videos, setVideos] = useState([]);
  const [videoType, setVideoType] = useState("");
  // const [itemTLoader,setItemLoader]=useState(false)
  const [showAssign, setShowAssign] = useState(false);
  const [item, setItem] = useState(false);
  const [showEdit, setShowEdit] = useState(false);
  const [video_duration, setvideo_duration] = useState("");
  const [selectedUnit, setSelectedUnit] = useState(false);
  const [videoData, setVideoData] = useState(false);
  const [originalAllVideos, setOriginalAllVideos] = useState([]);
  const [allVideos, setAllVideos] = useState([]);
  const [selVideo, setSelVideo] = useState("");
  const [itemLoader, setItemLoader] = useState(false);
  const getVideos = async () => {
    setItemLoader(true);
    const data_send = {
      unit_id: location?.state?.unitData?.unit_id,
      admin_id: adminData.admin_id,
      access_token: adminData.access_token,
    };
    const videos = await axios.post(
      base_url + "/admin/videos/select_unit_videos.php",
      JSON.stringify(data_send)
    );
    console.log(videos);
    if (videos.message == "Session Expired") {
      localStorage.removeItem("elmatary_admin");
      navigate("/login", { replace: true });
    }
    if (videos.status == "success") {
      setVideos([...videos.message]);
    }
    setItemLoader(false);
  };

  const getAllVideos = async () => {
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
    if (videos.message == "Session Expired") {
      localStorage.removeItem("elmatary_admin");
      navigate("/login", { replace: true });
    }
    setAllVideos(videos);
    setOriginalAllVideos(videos);
    setSelVideo(videos[0].video_id);
    setItemLoader(false);
  };
  useEffect(() => {
    getAllVideos();
  }, []);
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
    if (courses.message == "Session Expired") {
      localStorage.removeItem("elmatary_admin");
      navigate("/login", { replace: true });
    }
    if (courses.status == "success") {
      setCourses([...courses.message]);
    }
  };

  const [selectedCourse, setSelectedCourse] = useState(false);
  const [Units, setUnits] = useState(false);

  // const getUnits = async () => {
  //   const send_data = {
  //     course_id: selectedCourse
  //   };
  //   try {
  //     const units = await axios.post("https://elmatary.com/El_Matary_Platform/platform/admin/courses/select_course_units.php", send_data);
  //     setUnits([...units]);
  //   } catch (err) {
  //     console.log(err);
  //   }
  // }

  // useEffect(() => {
  //   getUnits();
  // }, [selectedCourse])
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
        "https://elmatary.com/El_Matary_Platform/platform/admin/videos/update_videos_info.php",
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
      admin_id: adminData.admin_id,
      access_token: adminData.access_token,
      unit_video_id: data.unit_video_id,
      hidden_value: data.hidden == "no" ? "yes" : "no",
    };
    console.log(data_send);
    axios
      .post(
        base_url + "/admin/videos/update_videos_hidden.php",
        JSON.stringify(data_send)
      )
      .then((res) => {
        if (res.message == "Session Expired") {
          localStorage.removeItem("elmatary_admin");
          navigate("/login", { replace: true });
        }
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

  // const handleupdatefree = (data) => {
  //   const data_send = {
  //     admin_id:adminData.admin_id,
  //     access_token:adminData.access_token,
  //     unit_video_id: data.unit_video_id,
  //     free_value: data.free == 'no' ? 'yes' : 'no'
  //   }
  //   axios.post(base_url+"/admin/videos/update_free_video.php", JSON.stringify(data_send))
  //     .then((res) => {
  //       if(res.message=='Session Expired'){
  //         localStorage.removeItem('elmatary_admin');
  //             navigate('/login',{replace:true})
  //       }
  //       if (res.status == 'success') {
  //         toast.success(res.message);
  //         getVideos();
  //       }
  //       else if (res.status == 'error') {
  //         toast.error(res.message);
  //       }
  //       else {
  //         toast.error("something went error");
  //       }
  //     }).catch(err => console.log(err))
  // }

  const [edit, setEdit] = useState(false);
  const [videoDataEdit, setVideoDataEdit] = useState(false);
  const [titleNew, setTitleNew] = useState(false);
  useEffect(() => {
    // console.log(videoDataEdit);
    setTitleNew(videoDataEdit.new_title);
  }, [videoDataEdit]);

  const handleEditVideo = async () => {
    const data_send = {
      unit_video_id: videoDataEdit.unit_video_id,
      new_title: titleNew, // not req
      source_video_id: videoDataEdit.source_video_id,
      unit_id: videoDataEdit.unit_id,
      course_id: videoDataEdit.course_id,
      admin_id: adminData.admin_id,
      access_token: adminData.access_token,
    };
    console.log(data_send);
    await axios
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
          toast.success("Updated");
          getUnitsVideos();
          getVideos();
          setEdit(false);
          setVideoDataEdit(false);
        } else {
          toast.error(res.message);
        }
      });
  };

  const setStatus = async (video_id, status) => {
    await axios
      .post("", {
        unit_video_id: videoDataEdit.unit_video_id,
        status: status, // not req
        source_video_id: video_id,
        unit_id: location?.state?.unitData?.unit_id,
        course_id: location?.state?.coursedata?.course_id,
        admin_id: adminData.admin_id,
        access_token: adminData.access_token,
      })
      .then((res) => {
        if (res.status == "success") {
          toast.success("Updated");
          getUnitsVideos();
          setVideoDataEdit(false);
        } else {
          toast.error(res.message);
        }
      });
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

      Cell: (cell, _, index) => {
        // console.log("i",index);
        return (
          <div
            style={{
              display: "flex",
              width: "100%",
              justifyContent: "space-between",
            }}
          >
            <span>{cell.cell.row.original.new_title}</span>
            {/* <div className="sorts_u">
            <span style={{ margin: "0 3px", cursor: "pointer" }} onClick={() => setStatus(cell.cell.row.original.video_id, "up")}>
              <Icon icon={transferUp} color="green" style={{ fontSize: "30px" }} />
            </span>
            <span style={{ margin: "0 3px", cursor: "pointer" }} onClick={() => setStatus(cell.cell.row.original.video_id, "down")}>
              <Icon icon={transferDown} color="red" style={{ fontSize: "30px" }} />
            </span>
          </div> */}
            <button
              className="btn btn-primary"
              onClick={() => {
                setVideoDataEdit(cell.cell.row.original);
                setEdit(true);
              }}
            >
              Edit
            </button>
          </div>
        );
      },
    },
    // {
    //   Header: 'Free',
    //   Cell: (cell) => {
    //     return <DropdownItem onClick={
    //       () => {
    //         handleupdatefree(cell.cell.row.original)
    //       }
    //     }>{cell.cell.row.original.free == "no" ? <TbFreeRights className="hidden" /> : <MdOutlinePaid className="shown" />}</DropdownItem>
    //   }
    // },
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
          <h2>
            <button
              className="btn btn-danger"
              onClick={() => {
                setVideoDataUnAssign(cell.cell.row.original);
                setUnAssignVideo(true);
              }}
            >
              UnAssign
            </button>
          </h2>
        );
      },
    },
  ];
  const [videoDataUnAssign, setVideoDataUnAssign] = useState(false);
  const [unAssignVideo, setUnAssignVideo] = useState(false);
  const Video = videoData.assign_data;

  // const [videoType, setVideoType] = useState(false)

  const [unitVideos, setUnitVideos] = useState(false);
  const [videoData_r, setVideoDataR] = useState(false);
  const [pubLink, setPubLink] = useState(false);
  const [Vim_link, setVimLink] = useState(false);

  const unitData = location?.state?.unitData?.unit_id;
  const courseData = location?.state?.coursedata?.course_id;
  const unitdata = location?.state;
  // console.log(unitdata, "sds")
  const [clear, showClear] = useState(false);

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

  if (!location?.state) {
    return navigate(-1);
  }

  const AssignVideo = async (e) => {
    const data_send = {
      new_title: e.currentTarget.video_title.value, // not req
      course_id: courseData,
      unit_id: unitData,
      source_video_id: selVideo,
      admin_id: adminData.admin_id,
      access_token: adminData.access_token,
    };
    console.log(data_send);
    const assign = await axios.post(
      "https://drelmatary.net/Matary_site/admin/videos/assign_videos_to_unit.php",
      data_send
    );
    console.log(assign);
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

  const unAssignData = async (e) => {
    const data_send = {
      access_token: adminData.access_token,
      admin_id: adminData.admin_id,
      unit_video_id: videoDataUnAssign.unit_video_id,
    };
    const assign = await axios.post(
      base_url + "/admin/videos/remove_assign_video_unit.php",
      data_send
    );
    if (assign.message == "Session Expired") {
      localStorage.removeItem("elmatary_admin");
      navigate("/login", { replace: true });
    }
    if (assign.status == "success") {
      toast.success("Un Assigned");
      getVideos();
      getUnitsVideos();
      setUnAssignVideo(false);
    } else {
      toast.error(assign.message);
    }
  };

  const showClearModal = () => {
    showClear(true);
  };
  const handleClear = async () => {
    const units = await axios.post(
      base_url + "/admin/videos/delete_all_assign_videos.php",
      JSON.stringify({
        unit_id: unitData,
        access_token: adminData.access_token,
        admin_id: adminData.admin_id,
      })
    );
    if (units.status) {
      toast.success(units.message);
      // await getUnits();
      showClear(false);
    } else {
      toast.error(units.message);
    }
  };

  const handleFileSelect = async (event) => {
    const file = event.target.files[0];

    setBook(file);
  };

  return (
    <React.Fragment>
      <div className="page-content">
        <Container fluid={true}>
          {/* <div className="header-btns">
            {buttons.map((buttonData, index) => (
              <button
                key={index}
                className={`btn btn-success ${type === buttonData.type ? "btn-danger" : ""
                  }`}
                onClick={() => {
                  setType(buttonData.type);
                  setTitle(buttonData.title);
                }}
              >
                {buttonData.title}
              </button>
            ))}
          </div> */}
          <div id="table-invoices-list">
            {type == "Lessons" ? (
              <Fragment>
                <Breadcrumbs
                  title={location?.state?.coursedata?.course_name}
                  breadcrumbItem={
                    location?.state?.unitData?.unit_name + "  >  Lesson List"
                  }
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
                              <Col className="col-sm">
                                <div>
                                  <button
                                    type="button"
                                    className="btn btn-success mb-4"
                                    data-bs-toggle="modal"
                                    data-bs-target="#addVideoModal"
                                    onClick={() => {
                                      setModal(true);
                                    }}
                                  >
                                    <i className="mdi mdi-plus me-1"></i> Upload
                                    Excel
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
                              {Videos && Videos.length ? (
                                <VideoListTable
                                  videos={Videos}
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
                        <label htmlFor="">Enter Title</label>
                        <Input
                          style={{
                            width: "100%",
                            borderRadius: "4px",
                            margin: "10px 0",
                          }}
                          type="text"
                          name="video_title"
                          id="video_title"
                          placeholder="Enter new_title"
                        />
                      </div>
                      <div className="input_Field">
                        <FormT.Group controlId="radioList">
                          <RadioGroup
                            name="radioList"
                            onChange={(e) => {
                              setVideoDataR(false);
                              setSelVideo(null);
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
                      </div>
                      {videoType == "vlist" ? (
                        <div className="input_Field">
                          <label htmlFor="">Videos</label>
                          <SelectPicker
                            label="Select Video"
                            data={allVideos.map((item) => {
                              return {
                                label: item?.video_title,
                                value: item?.video_id,
                              };
                            })}
                            style={{ width: 224 }}
                            required
                            value={selVideo}
                            onChange={(e) => setSelVideo(e)}
                          />
                        </div>
                      ) : (
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
                              {itemLoader ? (
                                <Loader />
                              ) : allVideos && allVideos.length ? (
                                allVideos.map((item) => {
                                  return item.youtube_id
                                    .toString()
                                    .includes(searchValue) ? (
                                    <li
                                      onClick={() => {
                                        setSelVideo(item.video_id);
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
            ) : type == "mcqquestion" ? (
              <MCQQuestions
                CourseId={courseData}
                unitId={unitdata.unitData}
                allunitdata={location?.state?.unitData}
                cd={location.state.coursedata}
              />
            ) : (
              <UniqQuestion unitdata={courseData} />
            )}
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

        <Modal isOpen={edit} toggle={() => setEdit(!edit)}>
          <ModalHeader toggle={() => setEdit(!edit)} tag="h4">
            Edit Video Title
          </ModalHeader>
          <ModalBody>
            <Form
              onSubmit={(e) => {
                e.preventDefault();
                handleEditVideo();
                return false;
              }}
            >
              <Row>
                <Col md={12}>
                  <div className="mb-3">
                    <Label className="form-label">Video Title</Label>
                    <Input
                      name="orderId"
                      type_2="text"
                      value={titleNew}
                      onChange={(e) => setTitleNew(e.target.value)}
                    />
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

        <Modal
          isOpen={unAssignVideo}
          toggle={() => setUnAssignVideo(!unAssignVideo)}
        >
          <ModalHeader tag="h4">Un Assign Video</ModalHeader>
          <ModalBody>
            <Form
              onSubmit={(e) => {
                e.preventDefault();
                unAssignData();
                return false;
              }}
            >
              <Row>
                <Col md={12}>
                  <div className="mb-3">
                    <h1 style={{ color: "red" }}>Are You Sure ..?</h1>
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
                      Confirm
                    </button>
                  </div>
                </Col>
              </Row>
            </Form>
          </ModalBody>
        </Modal>
        <Modal title="Clear Videos" isOpen={clear}>
          <form
            action="#"
            style={{
              padding: "15px",
              display: "flex",
              flexDirection: "column",
            }}
            onSubmit={(e) => {
              e.preventDefault();
              // handleOk(e)
              handleClear(e);
              showClear(false);
            }}
          >
            <CloseButton
              onClick={() => showClear(false)}
              style={{ marginLeft: "auto" }}
            />

            <div className="input_Field">
              <h2>Are You Sure ..?</h2>
            </div>
            <button
              className="btn btn-success"
              style={{ margin: "10px 0 0 auto" }}
            >
              {" "}
              Clear{" "}
            </button>
          </form>
        </Modal>
        <Modal isOpen={modal} toggle={toggle}>
          <ModalHeader toggle={toggle} tag="h4">
            Add Videos
          </ModalHeader>
          <ModalBody>
            <Form
              onSubmit={(e) => {
                e.preventDefault();
                uploadPdf(e);
                return false;
              }}
            >
              <Row>
                <Col md={12}>
                  <div className="mb-3">
                    <Label className="form-label"> file</Label>
                    <div
                      style={{
                        display: "flex",
                        width: "100%",
                        justifyContent: "space-between",
                        alignItems: "center",
                      }}
                    >
                      {" "}
                      <input
                        type="file"
                        id="pdfInput"
                        onChange={handleFileSelect}
                      />{" "}
                    </div>
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
        <ToastContainer />
      </div>
    </React.Fragment>
  );
};

export default Lessons;
