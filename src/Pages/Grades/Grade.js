import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { base_url } from "../../constants";
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
    Input,
    CloseButton,
    ModalBody,
    ModalHeader
} from "reactstrap";
import './unit.css'
// Import Flatepicker
import "flatpickr/dist/themes/material_blue.css";
import Flatpickr from "react-flatpickr";

// Breadcrumb
import Breadcrumbs from "../../components/Common/Breadcrumb";
import GradeListTable from "./GradeTable/GradeTableList";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import { useEffect } from "react";

const Grade = () => {
    document.title = "Courses | Matary - React Admin & Dashboard Template";
    const navigate = useNavigate();
    const localdata=localStorage.getItem('elmatary_admin');
    let adminData=localdata&&JSON.parse(localdata);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [Units, setUnits] = useState(false)
    const [showadduni,setshowadduni]=useState(false);
    const [gradename,setgradename]=useState("");
    const location = useLocation();
    const {universitydata}=location.state;
    console.log(universitydata)
    // console.log(universitydata)
    const [grades,setgrades]=useState([]);
    const getgrades = async () => {
      const data_send={
        admin_id:adminData.admin_id,
        access_token:adminData.access_token,
      }
        axios.post(base_url+"/admin/universities/select_universities_grade.php",JSON.stringify(data_send))
        .then((res)=>{
          console.log(res)
          if(res.status=='success'){
            let universities=[];
          universities=[...res.message];
          let newdata= universities.filter((item,index)=>item.university_id==universitydata.university_id);
          setgrades(newdata[0]?.grades);
          }
           if(res.message=='Session Expired'){
            localStorage.removeItem('elmatary_admin');
            navigate('/login',{replace:true})
          }
        })
    }


    const showModal = () => {
        setIsModalOpen(true);
    };
    const handleOk = async (e) => {
        const send_data = {
            course_id: location.state.universitydata.course_id,
            unit_name: e.currentTarget.unit_name.value,
            admin_id:adminData.admin_id,
            access_token:adminData.access_token,
        };
        const units = await axios.post(base_url+"/admin/courses/add_unit.php", send_data);
        // console.log(units);
        if(units.message=='Session Expired'){
          localStorage.removeItem('elmatary_admin');
          navigate('/login',{replace:true})
        }
        if (units.status) {
            toast.success(units.message);
            await getgrades();
            setIsModalOpen(false)
        } else {
            toast.error(units.message);
        }
        setIsModalOpen(false);
    };
    useEffect(() => {
        getgrades();
    }, []);

    const showHideUnit = async (send_data) => {
      const data_send={
        ...send_data,
        admin_id:adminData.admin_id,
            access_token:adminData.access_token,
      }
        const units = await axios.post(base_url+"/admin/courses/show_hide_unit.php", JSON.stringify(data_send));
        // console.log(units)
        if(units.message=='Session Expired'){
          localStorage.removeItem('elmatary_admin');
          navigate('/login',{replace:true})
        }
        if (units.status) {
            toast.success(units.message);

        } else {
            toast.error(units.message);
        }
    }

    if (!location.state) {
        return navigate("/courses-list");
    }

    const handleaddnewgrade=()=>{
      if(gradename==""||gradename==null){
        toast.warn("Enter University Name");
        return;
      }
      const data_send={
        university_id:universitydata.university_id,
        grade_name:gradename,
        admin_id:adminData.admin_id,
            access_token:adminData.access_token,
      }
      // console.log(data_send)
      axios.post(base_url+"/admin/universities/insert_grade.php",JSON.stringify(data_send))
      .then((res)=>{
        // console.log(res)
        if(res.message=='Session Expired'){
          localStorage.removeItem('elmatary_admin');
          navigate('/login',{replace:true})
        }
        if(res.status=='success'){
          // window.location.reload();
          getgrades();
          setshowadduni(false)
          toast.success(res.message);
        }
        else if(res.status=='error'){
          toast.error(res.message);
        }
        else{
          toast.error("Something Went Error");
        }
      }).catch(err=>console.log(err))
    }


    return (
        <React.Fragment>
            <div className="page-content">
                <Container fluid={true}>
                    <Breadcrumbs title="Gradess" breadcrumbItem="Grade List" />

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
                                                                    // showModal();
                                                                    setshowadduni(true)
                                                                }
                                                            }>
                                                            <i className="mdi mdi-plus me-1"></i>
                                                            add grade
                                                        </button>
                                                    </div>
                                                </Col>

                                            </Row>
                                        </div>
                                    </div>
                                    <div id="table-invoices-list grade_table">
                                        <GradeListTable grades={grades}
                                            updatedata={()=>{
                                              getgrades();
                                            }}
                                            showHideUnit={showHideUnit}
                                            universitydata={
                                                location.state.universitydata
                                            } />
                                    </div>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>
                </Container>

                <Modal title="add grade"
                    isOpen={isModalOpen}>
                    <form action="#"
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
                                handleOk(e)
                                setIsModalOpen(false);
                            }
                        }>
                        <CloseButton onClick={
                            () => setIsModalOpen(false)
                        }
                            style={
                                { marginLeft: "auto" }
                            } />

                        <div className="input_Field">
                            <label forHtml="unit_name">Unit Name</label>
                            <Input style={
                                {
                                    width: "100%",
                                    padding: "10px",
                                    borderRadius: "4px"
                                }
                            }
                                type="text"
                                name="unit_name"
                                id="unit_name"
                                placeholder="unit_name"
                                required />
                        </div>
                        <button className="btn btn-success"
                            style={
                                { margin: "10px 0 0 auto" }
                            }>
                            {" "}
                            add grade{" "} </button>
                    </form>
                </Modal>

                <Modal isOpen={showadduni}>
                <ModalHeader
                    tag="h4">
                    <div style={{ display: "flex", justifyContent: "space-between", width: "100%", alignItems: "center" }}>
                        <h4>Add New Grade</h4>
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
                                handleaddnewgrade()
                            }
                        }>



                        <div className="input_Field">
                            <label htmlFor="">Grade Name</label>
                            <Input
                              onChange={(e)=>{
                                setgradename(e.target.value)
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
                                placeholder="Enter Grade Name"
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

                <ToastContainer />

            </div>
        </React.Fragment>
    );
};

export default Grade;
