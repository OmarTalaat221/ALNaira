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
import './allstudentquestions.css'
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
import Breadcrumbs from "../../components/Common/Breadcrumb";
import AllStudentsQuesTabl from "./AllStudentQuesTable";
const AllStudentsQueries = () => {
    document.title = "All Students Queries | Matary - React Admin & Dashboard Template";
    // const location=useLocation();
    const navigate=useNavigate();
    const localdata=localStorage.getItem('elmatary_admin');
    let adminData=localdata&&JSON.parse(localdata);
    // console.log(location?.state);
    const [queries,setQueries]=useState([]);
    const [filteredCourses, setFilteredCourses] = useState()
    const [selectedUnivs,setSelectedUnivs]=useState('');
    const [filterGrades,setFilterGrades]=useState();
    const [type,setType]=useState('course')
    const [selectGrades,setSelectGrades]=useState('');
    const [loading,setLoading]=useState(false);
    const getCourseQueries=()=>{
      setLoading(true)
      const data_send={
        type,
        admin_id:adminData.admin_id,
        access_token:adminData.access_token,
      }
      console.log(data_send)
      axios.post(base_url+"/admin/student_question/select_student_questions_not_answerd.php",JSON.stringify(data_send))
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
    useEffect(()=>{
      getCourseQueries()
    },[type])
    return (
        <React.Fragment>
            <div className="page-content">
                <Container fluid={true}>
                    <Breadcrumbs title="All Student Questions" breadcrumbItem="" />
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
                                      <div className="all_st_ques">
                                      <div className="actions">
                                          <button onClick={()=>{
                                            setType('course')
                                          }} className={type=='course'?'active':''}>Courses</button>
                                          <button onClick={()=>{
                                            setType('videos')
                                          }} className={type=='videos'?'active':''}>Videos</button>
                                    </div>
                                      </div>
                                        {loading ? <Loader /> :
                                            <>

                                                <AllStudentsQuesTabl Units={queries}
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

export default AllStudentsQueries;
