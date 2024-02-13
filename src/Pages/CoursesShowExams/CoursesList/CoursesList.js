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
  DropdownToggle
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

const Courses = () => {
  document.title = "Courses | Matary - React Admin & Dashboard Template";
  const navigate = useNavigate();
  const location = useLocation();
  const [Courses, setCourses] = useState(false);
  const [loading, setLoading] = useState(false);
  const [univs, setUnivs] = useState(false);
  const [filteredCourses, setFilteredCourses] = useState();
  const getCourses = async () => {
    setLoading(true);
    const courses = await axios.get(
      "https://elmatary.com/El_Matary_Platform/platform/admin/courses/select_courses.php"
    );
    console.log(courses);
    setCourses([...courses.filter((item)=>item.grade_id == location?.state?.grade_id && location?.state?.univ_id)]);
    setFilteredCourses([...courses]);
    setLoading(false);
  };
  console.log(location);
  const showHideCourse = async (send_data) => {
    console.log(send_data);
    const courses = await axios.post(
      "https://elmatary.com/El_Matary_Platform/platform/admin/courses/show_hide_course.php",
      JSON.stringify(send_data)
    );
    // console.log(courses);
    if (courses.status == 'success') {
      toast.success(courses.message);
      getCourses();
      console.log("getCourses");
    } else if (courses.status == 'error') {
      toast.error(courses.message);
    } else {
      toast.error("Something Went Error");
    }
  };

  const getUnivs = async () => {
    const selct_univs = await axios.get(
      "https://elmatary.com/El_Matary_Platform/platform/admin/universities/select_universities_grade.php"
    );
    setUnivs(selct_univs.message);
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
          <Breadcrumbs title="Courses" breadcrumbItem="Course List" />
          {/* <div className="univs">
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
          </div> */}

          {/* <div className="univs">
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
          </div> */}
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
                              Add Course
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
