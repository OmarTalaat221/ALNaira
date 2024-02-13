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
    DropdownToggle,
    Input,
    CloseButton
} from "reactstrap";
import {
    Form,
    Button,
    ButtonToolbar,
    RadioGroup,
    Radio,
    SelectPicker,
    InputPicker,
} from 'rsuite';

// Import Flatepicker
import "flatpickr/dist/themes/material_blue.css";
import Flatpickr from "react-flatpickr";

// Breadcrumb
import Breadcrumbs from "../../components/Common/Breadcrumb";
import StudntListTable from "./StudentTable/StudntTable";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import { useEffect } from "react";
import "./style.css"
import { MenuItem, Select } from "@mui/material";
const DoNotMarry = () => {
    document.title = "Courses | Matary - React Admin & Dashboard Template";
    const navigate = useNavigate();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [student, setStudent] = useState(false);
    const [university, setUniversity] = useState(false);
    const [grades, setGrades] = useState(false);
    const getUnversity = async () => {
        const univ = await axios.get("https://elmatary.com/El_Matary_Platform/platform/admin/universities/select_universities_grade.php");
        setUniversity(univ?.message)
        console.log(univ);
    }

    useEffect(() => {
        getUnversity()
    }, []);
    const [univ_id, setUnivId] = useState();
    const [data_send, setDataSend] = useState({
        "university_id": "all", //all - 1
        "grade_id": "all", //all - 1
        "have_sub": "all" //all - yes - no
    })
    useEffect(() => {
        if (university && university.length) {
            setGrades(university.filter((item) => item.university_id == univ_id)[0]?.grades);
            setDataSend({
                ...data_send,
                university_id: univ_id ? univ_id : "all"
            })
        }
    }, [univ_id]);


    const [selectedStudent, setSelectedStudent] = useState(false)
    const [showAssign, setShowAssign] = useState(false)
    const getStudents = async (e) => {
        data_send.grade_id = data_send.university_id != "all" ? data_send.grade_id ? data_send.grade_id : "all" : "all"
        const student = await axios.post("https://elmatary.com/El_Matary_Platform/platform/admin/students/select_students.php", data_send);
        setStudent(student?.message)
        console.log(data_send);
    }
    useEffect(() => {
        getStudents();
    }, [])
    useEffect(() => {
        console.log(selectedStudent);
    }, [selectedStudent])


    return (
        <React.Fragment>
            <div className="page-content">
                <Container fluid={true}>
                    <Breadcrumbs title="Students" breadcrumbItem="Students List" />
                    <Row>
                        <Col lg={12}>
                            <Card>
                                <CardBody>
                                    <button className="btn btn-primary" onClick={() => {
                                        setShowAssign(true);
                                    }}>Assign</button>
                                    <div id="table-invoices-list">
                                        {
                                            student && student.length ?
                                                <StudntListTable Units={student} getStudents={() => getStudents()} /> : null
                                        }
                                    </div>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>
                </Container>

                <Modal title="Assign Student"
                    isOpen={showAssign}>
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
                                setShowAssign(false);
                            }
                        }>
                        <CloseButton onClick={
                            () => setShowAssign(false)
                        }
                            style={
                                { marginLeft: "auto" }
                            } />

                        <div className="input_Field">
                            <label forHtml="unit_name">Select Student</label>
                            <Select style={
                                {
                                    width: "100%",
                                    // padding: "10px",
                                    borderRadius: "4px"
                                }
                            }
                                type="text"
                                name="student_data"
                                id="student_data"
                                placeholder="student_data"
                                onChange={(e) => setSelectedStudent(e.target.value)}
                                required
                            >
                                {student && student.length ?
                                    student.map((item, index) => {
                                        return <MenuItem value={item.student_id} key={index}>{item.student_name} - {item.university_name} - {item.grade_title}</MenuItem>
                                    }) : null
                                }

                            </Select>
                        </div>
                        <button className="btn btn-success"
                            style={
                                { margin: "10px 0 0 auto" }
                            }>
                            {" "}
                            Assign{" "} </button>
                    </form>
                </Modal>
          
                <Modal title="add unit"
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
                            Add Unit{" "} </button>
                    </form>
                </Modal>


                <ToastContainer />

            </div>
        </React.Fragment>
    );
};

export default DoNotMarry;
