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
    ModalHeader,
    ModalBody,
    Input,
    CloseButton
} from "reactstrap";

// Import Flatepicker
import "flatpickr/dist/themes/material_blue.css";
import Flatpickr from "react-flatpickr";

// Breadcrumb
// import Breadcrumbs from "../../../components/Common/Breadcrumb";
// import CourseListTable from "./CourseTable/courseListTable";
import { useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";
import CourseListTable from "../Courses/CoursesList/CourseTable/courseListTable";
import Breadcrumbs from "../../components/Common/Breadcrumb";
import UniversityListTable from "./UniversityTable/UniversityListTable";
import { Loader } from "rsuite";
import { base_url } from "../../constants";
// import { CloseButton } from "react-toastify/dist/components";


const Universities = () => {
    document.title = "Courses | Matary - React Admin & Dashboard Template";
    const navigate = useNavigate();
    const localdata=localStorage.getItem('elmatary_admin');
    let adminData=localdata&&JSON.parse(localdata);
    const [Univerisities, setUniverisities] = useState(false)

    const [showadduni, setshowadduni] = useState(false);
    const [itemLoader, setItemLoader] = useState(false)
    const getUniversities = async () => {
        setItemLoader(true);
        const data_send={
          admin_id:adminData.admin_id,
          access_token:adminData.access_token,
        }
        const University = await axios.post(base_url+"/admin/universities/select_university.php",JSON.stringify(data_send));
        if(University.status=='success'){
          console.log(University);
          setUniverisities([...University.message]);
        }
        if(University.message=='Session Expired'){
          localStorage.removeItem('elmatary_admin');
          navigate('/login',{replace:true})
        }
        setItemLoader(false)
    }

    const showHideCourse = async (send_data) => {

      const data_send={
        ...send_data,
        admin_id:adminData.admin_id,
        access_token:adminData.access_token,
      }
        const courses = await axios.post(base_url+"/admin/courses/show_hide_course.php", JSON.stringify(data_send));
        // console.log(courses);
        if(courses.message=='Session Expired'){
          localStorage.removeItem('elmatary_admin');
          navigate('/login',{replace:true})
        }
        if (courses.status) {
            toast.success(courses.message);
            await getUniversities();
        } else {
            toast.error(courses.message);
        }
    }

    const [university_name, setuniversity_name] = useState("");

    const handleaddnewuni = () => {
        if (university_name == "" || university_name == null) {
            toast.warn("Enter University Name");
            return;
        }
        const data_send = {
            university_name,
            admin_id:adminData.admin_id,
            access_token:adminData.access_token,
        }
        // console.log(data_send);
        axios.post(base_url+"/admin/universities/insert_university.php", JSON.stringify(data_send))
            .then((res) => {
              if(res.message=='Session Expired'){
                localStorage.removeItem('elmatary_admin');
                navigate('/login',{replace:true})
              }
                if (res.status == 'success') {
                    window.location.reload();
                    toast.success(res.message);
                }
                else if (res.status == 'error') {
                    toast.error(res.message);
                }
                else {
                    toast.error("Something Went Error");
                }
            }).catch(err => console.log(err))
    }

    useEffect(() => {
        getUniversities();
    }, [])

    return (
        <React.Fragment>
            <div className="page-content">
                <Container fluid={true}>
                    <Breadcrumbs title="Universitys" breadcrumbItem="University List" />
                    <Row>
                        <Col lg={12}>
                            <Card>
                                <CardBody>
                                    <div className="position-relative">
                                        <div className="modal-button mt-2">
                                            <Row className="align-items-start">
                                                <Col className="col-sm">
                                                    <div>
                                                        <button type="button" className="btn btn-success mb-4" data-bs-toggle="modal" data-bs-target="#addCourseModal"
                                                            onClick={
                                                                () => {
                                                                    setshowadduni(true)
                                                                }
                                                            }>
                                                            <i className="mdi mdi-plus me-1"></i>
                                                            Add University
                                                        </button>
                                                    </div>
                                                </Col>

                                            </Row>
                                        </div>
                                    </div>
                                    <div id="table-invoices-list">
                                        {itemLoader ? <Loader /> :
                                            <>
                                                <UniversityListTable handleupdateparent={() => {
                                                    getUniversities();
                                                }} Univerisities={Univerisities}
                                                    showHideCourse={showHideCourse} /> : <div>
                                                    {/* <h2>No Videos</h2> */}
                                                </div>
                                            </>
                                        }
                                    </div>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>
                    <Modal isOpen={showadduni}>
                        <ModalHeader
                            tag="h4">
                            <div style={{ display: "flex", justifyContent: "space-between", width: "100%", alignItems: "center" }}>
                                <h4>Add New University</h4>
                                <CloseButton onClick={
                                    () => {
                                        setshowadduni(false);
                                    }
                                }
                                    style={
                                        { marginLeft: "auto" }
                                    } />
                            </div>
                        </ModalHeader>
                        <ModalBody>

                            <form
                                style={
                                    {
                                        padding: "15px",
                                        display: "flex",
                                        flexDirection: "column"
                                    }
                                }
                                onSubmit={
                                    (e) => {
                                        e.preventDefault();
                                        // AssignVideo(e)
                                        handleaddnewuni()
                                    }
                                }>



                                <div className="input_Field">
                                    <label htmlFor="">University Name</label>
                                    <Input
                                        onChange={(e) => {
                                            setuniversity_name(e.target.value)
                                        }}
                                        style={
                                            {
                                                width: "100%",
                                                borderRadius: "4px",
                                                margin: "10px 0"
                                            }
                                        }
                                        type="text"
                                        name="new_title"
                                        id="new_title"
                                        placeholder="Enter University Name"
                                    />

                                </div>
                                <button className="btn btn-success"
                                    style={
                                        { margin: "10px 0 0 auto" }
                                    }>
                                    {" "}
                                    Add {" "}
                                </button>
                            </form>


                        </ModalBody>
                    </Modal>
                </Container>
                <ToastContainer />
            </div>

        </React.Fragment>
    );
};

export default Universities;
