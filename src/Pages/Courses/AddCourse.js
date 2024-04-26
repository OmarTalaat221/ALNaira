import React, { useState } from "react";
import classnames from "classnames";
import { Container, Row, Col, Card, Collapse, Form, Modal } from "reactstrap";
import { Link, useNavigate } from "react-router-dom";
import Dropzone from "react-dropzone";

// Breadcrumb
import Breadcrumbs from "../../components/Common/Breadcrumb";
import { useRef } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import { useEffect } from "react";
import { base_url } from "../../constants";

const AddCourse = () => {
  document.title = "Add Course | Matary - React Admin & Dashboard Template";
  const localdata = localStorage.getItem('elmatary_admin');
  let adminData = localdata && JSON.parse(localdata);
  const [universities, setuniversities] = useState([]);
  const [grades, setgrades] = useState([]);
  const [selecteduni, setselecteduni] = useState("");
  const [selectedgrade, setselectedgrade] = useState("");
  const [col1, setcol1] = useState(true);
  const [col2, setcol2] = useState(false);
  const [col3, setcol3] = useState(false);

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
  const [category, setCategory] = useState(false);

  const getCategories = async () => {
    const getcategories = await axios.post(
      base_url + "/admin/courses/select_category.php",
      {
        admin_id: adminData.admin_id,
        access_token: adminData.access_token,
      }
    );
    console.log(getcategories);
    if (getCategories?.status == "success") setCategory(getcategories?.message);
  };

  useEffect(() => {
    getCategories();
  }, []);

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

  const getuniversits = () => {
    const data_send = {
      admin_id: adminData.admin_id,
      access_token: adminData.access_token,
    };
    axios
      .post(
        base_url + "/admin/universities/select_university.php",
        JSON.stringify(data_send)
      )
      .then((res) => {
        console.log(res);
        setuniversities(res.message);
        setselecteduni(res.message[0].university_id);
      })
      .catch((err) => console.log(err));
  };

  const getgrades = () => {
    const data_send = {
      admin_id: adminData.admin_id,
      access_token: adminData.access_token,
    };
    axios
      .post(
        base_url + "/admin/universities/select_universities_grade.php",
        JSON.stringify(data_send)
      )
      .then((res) => {
        let filteresedarr = [...res?.message];
        filteresedarr = filteresedarr.filter(
          (item) => item.university_id == selecteduni
        );
        console.log(selecteduni, "||", res, "||", filteresedarr);
        setgrades(filteresedarr[0]?.grades);
        setselectedgrade(filteresedarr[0]?.grades[0].grade_id);
      });
  };
  useEffect(() => {
    getuniversits();
    // getgrades()
  }, []);
  useEffect(() => {
    getgrades();
  }, [selecteduni]);

  const image = useRef();
  // https://elmatary.com/El_Matary_Platform/platform/admin/image_uplouder.php
  const [course_photo_url, set_course_photo_url] = useState(false);
  const uploadImage = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const url = await axios.post(
      "https://camp-coding.tech/dr_elmatary/admin/image_uplouder.php",
      formData
    );
    console.log(url);
    toast.success("Image Uploaded Successfully");
    set_course_photo_url(url);
  };
  const courseDate = useRef();
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState(false);
  const addCourse = async (e) => {
    // e.preventDefault();
    const data_send = {
      course_name: courseDate.current.course_name.value,
      course_price: courseDate.current.course_price.value,
      course_photo_url: course_photo_url,
      course_content: courseDate.current.course_content.value,
      category_id: selectedCategory,
      university_id: selecteduni,
      grade_id: selectedgrade,
      admin_id: adminData.admin_id,
      access_token: adminData.access_token,
    };
    console.log(data_send);
    if (
      Object.values(data_send).every(
        (value) => value !== undefined && value !== null && value !== ""
      )
    ) {
      const url = await axios.post(
        base_url + "/admin/courses/add_course.php",
        JSON.stringify(data_send)
      );
      console.log(url);
      if (url.status == "success") {
        toast.success(url.message);
        navigate("/courses-list");
      } else if (url.message == 'Session Expired') {
        localStorage.removeItem('elmatary_admin');
        navigate('/login', { replace: true });
      } else {
        toast.error(url.message);
      }
    } else {
      toast.error("Enter All data");
    }
  };

  return (
    <React.Fragment>
      <div className="page-content">
        <Container fluid={true}>
          <Breadcrumbs title="Courses" breadcrumbItem="Add Course" />
          <Row>
            <Col lg={12}>
              <div className="custom-accordion" id="addcourse-accordion">
                <Card>
                  <Link
                    to="#addcourse-courseinfo-collapse"
                    className={classnames("text-dark", {
                      collapsed: !col1,
                    })}
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
                          <h5 className="font-size-16 mb-1">Course Info</h5>
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
                      <form ref={courseDate} onSubmit={(e) => addCourse(e)}>
                        <div className="mb-3">
                          <label className="form-label" htmlFor="coursename">
                            Course Name
                          </label>
                          <input
                            id="coursename"
                            name="course_name"
                            placeholder="Enter Course Name"
                            type="text"
                            className="form-control"
                          />
                        </div>
                        <Row>
                          <Col lg={4}>
                            <div className="mb-3">
                              <label className="form-label" htmlFor="price">
                                Price
                              </label>
                              <input
                                id="price"
                                name="course_price"
                                placeholder="Enter Price"
                                type="number"
                                className="form-control"
                              />
                            </div>
                          </Col>
                        </Row>
                        {/* <Row>
                                                    <div className="col-md-6">
                                                        <div className="mb-3">
                                                            <label htmlFor="category_id" className="form-label">
                                                                Category
                                                            </label>
                                                            <select className="form-control" data-trigger name="choices-single-category" id="choices-single-category">
                                                                <option value={null}>Select</option>
                                                                <option value="EL">Electronic</option>
                                                                <option value="FA">Fashion</option>
                                                                <option value="FI">Fitness</option>
                                                            </select>
                                                        </div>
                                                    </div>
                                                </Row> */}
                        <div className="mb-3">
                          <label htmlFor="category_id" className="form-label">
                            Category
                          </label>
                          {category && category.length ? (
                            <select
                              value={selectedCategory}
                              onChange={(e) => {
                                setSelectedCategory(e.target.value);
                              }}
                              className="form-control"
                              data-trigger
                              name="choices-single-category"
                              id="choices-single-category"
                            >
                              {category.map((item, index) => {
                                return (
                                  <option value={item.category_id}>
                                    {item.category_label}
                                  </option>
                                );
                              })}
                            </select>
                          ) : null}
                        </div>
                        <Row>
                          <div className="col-md-6">
                            <div className="mb-3">
                              <label
                                htmlFor="category_id"
                                className="form-label"
                              >
                                Universities
                              </label>
                              <select
                                onChange={(e) => {
                                  setselecteduni(e.target.value);
                                }}
                                value={selecteduni}
                                className="form-control"
                                data-trigger
                                name="choices-single-category"
                                id="choices-single-category"
                              >
                                {universities.map((item, index) => {
                                  return (
                                    <option value={item.university_id}>
                                      {item.university_name}
                                    </option>
                                  );
                                })}
                              </select>
                            </div>
                          </div>

                          <div className="col-md-6">
                            <div className="mb-3">
                              <label
                                htmlFor="category_id"
                                className="form-label"
                              >
                                Grade
                              </label>
                              <select
                                onChange={(e) => {
                                  setselectedgrade(e.target.value);
                                }}
                                className="form-control"
                                data-trigger
                                name="choices-single-category"
                                id="choices-single-category"
                              >
                                {grades && grades.length
                                  ? grades.map((item, index) => {
                                      return (
                                        <option value={item.grade_id}>
                                          {item.grade_name}
                                        </option>
                                      );
                                    })
                                  : null}
                              </select>
                            </div>
                          </div>
                        </Row>

                        <div className="mb-0">
                          <label className="form-label" htmlFor="coursedesc">
                            Course Description
                          </label>
                          <textarea
                            className="form-control"
                            name="course_content"
                            id="coursedesc"
                            placeholder="Enter Description"
                            rows="4"
                          ></textarea>
                        </div>
                      </form>
                    </div>
                  </Collapse>
                </Card>
                <Card>
                  <Link
                    to="#addcourse-img-collapse"
                    className={classnames("text-dark collapsed", {
                      collapsed: !col2,
                    })}
                    type="button"
                    onClick={t_col2}
                    style={{ cursor: "pointer" }}
                  >
                    <div className="p-4">
                      <div className="d-flex align-items-center">
                        <div className="flex-shrink-0 me-3">
                          <div className="avatar-sm">
                            <div className="avatar-title rounded-circle bg-soft-primary text-primary">
                              02
                            </div>
                          </div>
                        </div>
                        <div className="flex-grow-1 overflow-hidden">
                          <h5 className="font-size-16 mb-1">Course Image</h5>
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
                  <Collapse isOpen={col2} id="addcourse-img-collapse">
                    <div className="p-4 border-top">
                      <form
                        onSubmit={(e) => {
                          uploadImage(e);
                        }}
                        action="#"
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          alignItems: "flex-start",
                          gap: "10px",
                        }}
                      >
                        <input type="file" name="image" id="image " />
                        <button className="btn btn-success">Upload</button>
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
                <i className="bx bx-x me-1"></i>
                Cancel{" "}
              </Link>
              <Link
                to="#"
                className="btn btn-success"
                data-bs-toggle="modal"
                data-bs-target="#success-btn"
                onClick={() => {
                  addCourse();
                }}
              >
                {" "}
                <i className=" bx bx-file me-1"></i>
                Save{" "}
              </Link>
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
              <h3 className="mt-3">Course Added Successfully</h3>
            </div>
          </div>
        </div>
      </Modal>
      <ToastContainer />
    </React.Fragment>
  );
};

export default AddCourse;
