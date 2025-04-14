import React, { useRef, useState } from "react";
import classnames from "classnames";
import { Container, Row, Col, Card, Collapse, Form, Modal } from "reactstrap";
import { Form as FormT } from "rsuite";
import { Link, useNavigate } from "react-router-dom";
import Dropzone from "react-dropzone";
import { base_url } from "../../constants";
// Breadcrumb
import Breadcrumbs from "../../components/Common/Breadcrumb";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import { Radio, RadioGroup } from "rsuite";
import { Loader, SelectPicker } from "rsuite";
import { useEffect } from "react";
const AddVideo = () => {
  document.title = "Add Video | ALNaierh  ";
  // console.log('test')
  const localdata = localStorage.getItem("elmatary_admin");
  let adminData = localdata && JSON.parse(localdata);
  const [col1, setcol1] = useState(true);
  const [col2, setcol2] = useState(false);
  const [col3, setcol3] = useState(false);
  const [videoName, setVideoName] = useState(null);
  const [videoUrl, setVideoUrl] = useState(null);
  const [videoDuration, setVideoDuration] = useState(null);
  const [videoSwitchOn, setVideoSwitchOn] = useState(null);
  const [youtube_id, setyoutube_id] = useState("");
  const duration = useRef();

  const getDuration = () => {
    duration.current.addEventListener(
      "loadeddata",
      function () {
        console.log("test", duration.current.duration);
      },
      false
    );
  };
  const getName = () => {
    setVideoSwitchOn(
      videoUrl && videoUrl?.length
        ? videoUrl?.split(".html")[0] + ".m3u8"
        : null
    );
    setVideoName(
      videoUrl && videoUrl?.length
        ? videoUrl
            ?.split("/")
            [videoUrl?.split("/")?.length - 1].split(".html")[0]
        : null
    );
  };

  useEffect(() => {
    getName();
  }, [videoUrl]);

  useEffect(() => {
    if (duration && duration.current) {
      getDuration();
    }
    console.log(
      videoSwitchOn,
      videoName,
      videoDuration,
      videoUrl,
      duration.current
    );
  }, [videoSwitchOn]);

  const t_col1 = () => {
    setcol1(!col1);
    setcol2(false);
    setcol3(false);
  };

  const t_col2 = () => {
    setcol2(!col2);
    setcol1(false);
    setcol3(false);
  };

  const [selectedFiles, setselectedFiles] = useState([]);

  function handleAcceptedFiles(files) {
    files.map((file) =>
      Object.assign(file, {
        preview: URL.createObjectURL(file),
        formattedSize: formatBytes(file.size),
      })
    );
    setselectedFiles(files);
  }

  /**
   * Formats the size
   */
  function formatBytes(bytes, decimals = 2) {
    if (bytes === 0) return "0 Bytes";
    const k = 1024;
    const dm = decimals < 0 ? 0 : decimals;
    const sizes = ["Bytes", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"];

    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + " " + sizes[i];
  }

  const [modal, setmodal] = useState(false);

  function tog_mod() {
    setmodal(!modal);
  }

  const formRef = useRef();
  const navigate = useNavigate();
  const addVideo = async () => {
    setLoading(true);
    const send_data = {
      video_title: formRef.current.video_title.value,
      video_duration: formRef.current.video_duration.value,
      // vimeo_data: formRef.current.vimeo_data.value,
      // publitio_data: formRef.current.publitio_data.value,
      admin_id: adminData.admin_id,
      youtube_id: formRef.current.youtube_id.value,
      access_token: adminData.access_token,
      loom_url: formRef.current.loom_url.value,
    };
    try {
      const units = await axios.post(
        base_url + "/admin/videos/insert_video.php",
        send_data
      );
      console.log(units);
      if (units.message == "Session Expired") {
        localStorage.removeItem("elmatary_admin");
        navigate("/login", { replace: true });
      }
      if (units.status == "success") {
        toast.success("Video Added Successfully");
        setLoading(false);
        // navigate("/videos");
      } else {
        toast.error(units.message);
        setLoading(false);
      }
    } catch (err) {
      toast.error("Network Error");
      setLoading(false);
    }
  };

  const [pub, setPub] = useState(false);
  const [vim, setVim] = useState(true);
  const [loading, setLoading] = useState(false);
  return (
    <React.Fragment>
      <div className="page-content">
        <Container fluid={true}>
          <Breadcrumbs title="Ecommerce" breadcrumbItem="Add Video" />
          <Row>
            {videoUrl && videoUrl.length ? (
              <iframe
                ref={duration}
                src={
                  "https://elmatary.com/El_Matary_Platform/platform/publitio_player?q=" +
                  videoUrl
                }
                width="370"
              ></iframe>
            ) : null}
            <Col lg={12}>
              <div className="custom-accordion" id="addvideo-accordion">
                <Card>
                  <Link
                    to="#addvideo-videoinfo-collapse"
                    className={classnames("text-dark", { collapsed: !col1 })}
                    type="button"
                    onClick={t_col1}
                    style={{ cursor: "pointer" }}
                  >
                    <div className="p-4">
                      <div className="d-flex align-items-center">
                        <div className="flex-shrink-0 me-3">
                          <div className="avatar-sm">
                            <div className="avatar-title rounded-circle bg-soft-primary text-primary">
                              01
                            </div>
                          </div>
                        </div>
                        <div className="flex-grow-1 overflow-hidden">
                          <h5 className="font-size-16 mb-1">Video Info</h5>
                          <p className="text-muted text-truncate mb-0">
                            Fill all information below
                          </p>
                        </div>
                        <div className="flex-shrink-0">
                          <i className="mdi mdi-chevron-up accor-down-icon font-size-24"></i>
                        </div>
                      </div>
                    </div>
                  </Link>
                  <Collapse isOpen={col1} id="checkout-billinginfo-collapse">
                    <div className="p-4 border-top">
                      <form ref={formRef}>
                        <div className="mb-3">
                          <label className="form-label" htmlFor="videoname">
                            Video Name
                          </label>
                          <input
                            id="videoname"
                            name="video_title"
                            placeholder="Enter Video Name"
                            type="text"
                            className="form-control"
                            required
                            value={videoName}
                            onChange={(e) =>
                              setVideoName(e.currentTarget.value)
                            }
                          />
                        </div>
                        <div className="mb-0">
                          <label className="form-label" htmlFor="videodesc">
                            Video Duration
                          </label>
                          <input
                            className="form-control"
                            id="videodesc"
                            placeholder="Enter Duration ( hh : mm : ss )"
                            rows="4"
                            name="video_duration"
                            value={videoDuration}
                            onChange={(e) =>
                              setVideoDuration(e.currentTarget.value)
                            }
                          />
                        </div>
                        <div className="mb-0">
                          <label className="form-label" htmlFor="videodesc">
                            Youtube Link
                          </label>
                          <input
                            className="form-control"
                            id="videodesc"
                            placeholder="Enter Link"
                            rows="4"
                            name="youtube_id"
                          />
                        </div>
                        <div className="mb-0">
                          <label className="form-label" htmlFor="loom_url">
                            Loom URL
                          </label>
                          <input
                            className="form-control"
                            id="loom_url"
                            placeholder="Enter Link"
                            rows="4"
                            name="loom_url"
                          />
                        </div>{" "}
                      </form>
                    </div>
                  </Collapse>
                </Card>
              </div>
            </Col>
          </Row>

          <Row className="mb-4">
            <Col className="col text-end">
              <Link to="#" className="btn btn-danger me-1">
                {" "}
                <i className="bx bx-x me-1"></i> Cancel{" "}
              </Link>
              {!loading ? (
                <Link
                  to="#"
                  className="btn btn-success"
                  data-bs-toggle="modal"
                  data-bs-target="#success-btn"
                  onClick={() => {
                    addVideo();
                  }}
                >
                  {" "}
                  <i className=" bx bx-file me-1"></i> Save{" "}
                </Link>
              ) : (
                <Loader />
              )}
            </Col>
          </Row>
        </Container>
      </div>
      <Modal
        isOpen={modal}
        toggle={() => {
          tog_mod();
        }}
        id="success-btn"
        centered
      >
        <div className="modal-content">
          <div className="modal-body">
            <div className="text-center">
              <i className="bx bx-check-circle display-1 text-success"></i>
              <h3 className="mt-3">Video Added Successfully</h3>
            </div>
          </div>
        </div>
      </Modal>
      <ToastContainer />
    </React.Fragment>
  );
};

export default AddVideo;
