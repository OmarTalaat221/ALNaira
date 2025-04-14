import React, { useState } from "react";
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
} from "reactstrap";

import "./style.css";
// Import Flatepicker
import "flatpickr/dist/themes/material_blue.css";
import Flatpickr from "react-flatpickr";

// Breadcrumb
import Breadcrumbs from "../../../components/Common/Breadcrumb";
import CourseListTable from "./CourseTable/courseListTable";
import { useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";
import { Loader } from "rsuite";
import { AiOutlineConsoleSql } from "react-icons/ai";
import { base_url } from "../../../constants";

const Courses = () => {
  document.title = "Enrollments | ALNaierh  ";
  const navigate = useNavigate();
  const localdata = localStorage.getItem("elmatary_admin");
  let adminData = localdata && JSON.parse(localdata);
  const [Courses, setCourses] = useState(false);
  const [loading, setLoading] = useState(false);
  const [univs, setUnivs] = useState(false);
  const [filteredCourses, setFilteredCourses] = useState();
  const getCourses = async () => {
    setLoading(true);
    const data_send = {
      admin_id: adminData.admin_id,
      access_token: adminData.access_token,
    };
    const courses = await axios.post(
      base_url + "/admin/courses/select_courses.php",
      JSON.stringify(data_send)
    );
    console.log(courses);
    if (courses.message == "Session Expired") {
      localStorage.removeItem("elmatary_admin");
      navigate("/login", { replace: true });
    }
    if (courses.status == "success") {
      setCourses([...courses.message]);
      setFilteredCourses([...courses.message]);
    }
    // console.log(courses);
    setLoading(false);
  };

  const showHideCourse = async (send_data) => {
    const data_send = {
      ...send_data,
      admin_id: adminData.admin_id,
      access_token: adminData.access_token,
    };
    console.log(send_data);
    const courses = await axios.post(
      base_url + "/admin/courses/show_hide_course.php",
      JSON.stringify(data_send)
    );
    // console.log(courses);
    if (courses.message == "Session Expired") {
      localStorage.removeItem("elmatary_admin");
      navigate("/login", { replace: true });
    }
    if (courses.status == "success") {
      toast.success(courses.message);
      getCourses();
      console.log("getCourses");
    } else if (courses.status == "error") {
      toast.error(courses.message);
    } else {
      toast.error("Something Went Error");
    }
  };

  const getUnivs = async () => {
    const data_send = {
      admin_id: adminData.admin_id,
      access_token: adminData.access_token,
    };
    console.log(data_send);
    const selct_univs = await axios.post(
      base_url + "/admin/universities/select_universities_grade.php",
      JSON.stringify(data_send)
    );
    console.log(selct_univs);
    if (selct_univs.status == "success") {
      setUnivs(selct_univs.message);
    }
    if (selct_univs.message == "Session Expired") {
      localStorage.removeItem("elmatary_admin");
      navigate("/login", { replace: true });
    }
  };

  const [selectedUnivs, setSelectedUnivs] = useState(false);

  useEffect(() => {
    getCourses();
    getUnivs();
  }, []);
  const [filterGrades, setFilterGrades] = useState(false);
  const [selectGrades, setSelectGrades] = useState(false);
  const getFilterGrades = () => {
    setFilterGrades(
      univs?.filter((item) => item.university_id == selectedUnivs)[0]?.grades
    );
  };
  useEffect(() => {
    let arr = [];
    if (filteredCourses && filteredCourses.length)
      arr = filteredCourses.filter(
        (item) => item?.university_id == selectedUnivs
      );
    setCourses([...arr]);
    if (selectedUnivs) {
      getFilterGrades();
    } else {
      setFilterGrades(false);
      setCourses(filteredCourses);
    }
  }, [selectedUnivs]);

  useEffect(() => {
    let arr = [];
    if (filteredCourses && filteredCourses.length) {
      if (selectGrades) {
        arr = filteredCourses.filter((item) => item?.grade_id == selectGrades);
        setCourses([...arr]);
      } else {
        arr = filteredCourses.filter(
          (item) => item?.university_id == selectedUnivs
        );
        setCourses([...arr]);
      }
    }
  }, [selectGrades]);

  return (
    <React.Fragment>
      <div className="page-content">
        <Container fluid={true}>
          <Breadcrumbs title="Enrollments" breadcrumbItem="Enrollments List" />
          <div className="univs">
            {univs && univs.length
              ? univs.map((item, index) => {
                  return (
                    <span
                      className={
                        selectedUnivs &&
                        selectedUnivs.length &&
                        selectedUnivs == item?.university_id
                          ? "active"
                          : ""
                      }
                      onClick={() =>
                        selectedUnivs == item?.university_id
                          ? setSelectedUnivs(false)
                          : setSelectedUnivs(item?.university_id)
                      }
                    >
                      {item?.university_name}
                    </span>
                  );
                })
              : null}
          </div>

          <div className="univs">
            {filterGrades && filterGrades.length
              ? filterGrades.map((item, index) => {
                  return (
                    <span
                      className={
                        selectGrades &&
                        selectGrades.length &&
                        selectGrades == item?.grade_id
                          ? "active"
                          : ""
                      }
                      onClick={() =>
                        selectGrades == item?.grade_id
                          ? setSelectGrades(false)
                          : setSelectGrades(item?.grade_id)
                      }
                    >
                      {item?.grade_name}
                    </span>
                  );
                })
              : null}
          </div>
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
                              data-bs-target="#addCourseModal"
                              onClick={() => {
                                navigate("add-course");
                              }}
                            >
                              <i className="mdi mdi-plus me-1"></i>
                              Add Enrollment
                            </button>
                          </div>
                        </Col>
                      </Row>
                    </div>
                  </div>

                  <div id="table-invoices-list">
                    {loading ? (
                      <Loader />
                    ) : (
                      <>
                        <CourseListTable
                          Courses={Courses}
                          showHideCourse={showHideCourse}
                          getCourses={getCourses}
                        />
                      </>
                    )}
                  </div>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
        <ToastContainer />
      </div>
    </React.Fragment>
  );
};

export default Courses;
