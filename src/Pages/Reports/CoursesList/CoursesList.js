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

const Reports = () => {
  document.title = "Courses | ALNaierh  ";
  const navigate = useNavigate();

  const [Courses, setCourses] = useState(false);
  const [loading, setLoading] = useState(false);

  const getCourses = async () => {
    setLoading(true);
    const courses = await axios.get(
      "https://camp-coding.online/Teacher_App_2025/elnaira_jor/admin/courses/select_courses.php"
    );
    console.log(courses);
    setCourses([...courses]);
    setLoading(false);
  };

  const showHideCourse = async (send_data) => {
    console.log(send_data);
    const courses = await axios.post(
      "https://camp-coding.online/Teacher_App_2025/elnaira_jor/admin/courses/show_hide_course.php",
      JSON.stringify(send_data)
    );
    console.log(courses);
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

  useEffect(() => {
    getCourses();
  }, []);

  return (
    <React.Fragment>
      <div className="page-content">
        <Container fluid={true}>
          <Breadcrumbs title="Reports" breadcrumbItem="Reports List" />
          <Row>
            <Col lg={12}>
              <Card>
                <CardBody>
                  <div id="table-invoices-list">
                    {loading ? (
                      <Loader />
                    ) : (
                      <CourseListTable
                        Courses={Courses}
                        showHideCourse={showHideCourse}
                        getCourses={getCourses}
                      />
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

export default Reports;
