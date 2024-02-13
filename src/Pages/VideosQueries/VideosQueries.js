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

// import "../style.css";
// Import Flatepicker
import "flatpickr/dist/themes/material_blue.css";
import Flatpickr from "react-flatpickr";

// Breadcrumb
// import Breadcrumbs from "../../../components/Common/Breadcrumb";
// import CourseListTable from "./CourseTable/courseListTable";
import { useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";
import { Loader } from "rsuite";
import { AiOutlineConsoleSql } from "react-icons/ai";
// import { base_url } from "../../../constants";
// import CourseQueriesTable from "./CourseQueriesTable";
// import Breadcrumbs from "../../../../components/Common/Breadcrumb";

import { base_url } from "../../constants";
import VideosQueriesListTable from "./VideosQueriesTable";
import Breadcrumbs from "../../components/Common/Breadcrumb";
const VideosQueries = () => {
    document.title = "Course Queries | Matary - React Admin & Dashboard Template";
    const location=useLocation();
    const navigate=useNavigate();
    console.log(location?.state);
    const localdata=localStorage.getItem('elmatary_admin');
    let adminData=localdata&&JSON.parse(localdata);
    const [queries,setQueries]=useState([]);
    const [filteredCourses, setFilteredCourses] = useState()
    const [selectedUnivs,setSelectedUnivs]=useState('');
    const [filterGrades,setFilterGrades]=useState();
    const [selectGrades,setSelectGrades]=useState('');
    const [loading,setLoading]=useState(false);
    const getCourseQueries=()=>{
      setLoading(true)
      const data_send={
        course_video_id:location?.state?.course_data?.video_id,
        type:'videos',
        admin_id:adminData.admin_id,
        access_token:adminData.access_token,
      }
      console.log(data_send)
      axios.post(base_url+"/admin/student_question/select_students_questions.php",JSON.stringify(data_send))
      .then((res)=>{
        console.log(res);
        if(res.message=='Session Expired'){
          localStorage.removeItem('elmatary_admin');
          navigate('/login',{replace:true})
        }
        if(Array.isArray(res.message)){
          setQueries(res.message)
        }
      }).catch(e=>console.log(e))
      .finally(()=>{
      setLoading(false)
      })
    }
    if(!location?.state){
      navigate(-1)
    }
    useEffect(()=>{
      getCourseQueries()
    },[])
    return (
        <React.Fragment>
            <div className="page-content">
                <Container fluid={true}>
                    <Breadcrumbs title="Videos Questions" breadcrumbItem="Videos Questions" />
                    <Row>
                        <Col lg={12}>
                            <Card>
                                <CardBody>
                                    <div className="position-relative">
                                        <div className="modal-button mt-2">
                                            <Row className="align-items-start">
                                                <Col className="col-sm">
                                                    <div>
                                                    </div>
                                                </Col>

                                            </Row>
                                        </div>
                                    </div>

                                    <div id="table-invoices-list">
                                        {loading ? <Loader /> :
                                            <>

                                                <VideosQueriesListTable Units={queries}
                                                getquries={getCourseQueries}
                                                    // showHideCourse={showHideCourse}
                                                    // getCourses={getCourses}
                                                />

                                            </>
                                        }</div>

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

export default VideosQueries;
