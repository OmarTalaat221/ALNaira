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

// Import Flatepicker
import "flatpickr/dist/themes/material_blue.css";
import Flatpickr from "react-flatpickr";

// Breadcrumb
import Breadcrumbs from "../../../components/Common/Breadcrumb";
import UnitListTable from "./UnitTable/UnitTableList";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import { useEffect } from "react";
import Confirm from "../../../components/ConfComp/Confirm";
import { MenuItem, Select } from "@mui/material";
import { Loader } from "rsuite";

const Policy = () => {
    document.title = "Courses | Matary - React Admin & Dashboard Template";
    const navigate = useNavigate();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [Units, setUnits] = useState(false)
    const location = useLocation();
    const [itemLoader, setItemLoader] = useState(false)
    const getUnits = async () => {
        setItemLoader(true)

        try {
            const units = await axios.get("https://elmatary.com/El_Matary_Platform/platform/user/home/setting/select_policy.php");
            console.log(units);
            setUnits([units?.message]);
            setItemLoader(false);

        } catch (err) {
            console.log(err);
            setItemLoader(false);
        }

    }
    const showModal = () => {
        setIsModalOpen(true);
    };
    const handleOk = async (e) => {
        const send_data = {
            course_id: location?.state?.coursedata?.course_id,
            unit_name: e?.currentTarget?.unit_name?.value
        };
        const units = await axios.post("https://elmatary.com/El_Matary_Platform/platform/admin/courses/add_unit.php", send_data);
        console.log(units);
        if (units.status) {
            toast.success("Added");
            await getUnits();
        } else {
            toast.error(units.message);
        }
        setIsModalOpen(false);
    };
    useEffect(() => {
        getUnits();
    }, []);

    const [showconf, setshowconf] = useState(false);
    const [rowdata, setrowdata] = useState({});
    const showHideUnit = async (send_data) => {
        const units = await axios.post("https://elmatary.com/El_Matary_Platform/platform/admin/courses/show_hide_unit.php", JSON.stringify(send_data));
        if (units.status) {
            toast.success(units.message);
            await getUnits();
        } else {
            toast.error(units.message);
        }
    }


    return (
        <React.Fragment>
            <div className="page-content">
                <Container fluid={true}>
                    {/* breadcrumbItem={loation?.state?.coursedata?.course_name + " Unit List"} */}
                    <Row>
                        <Col lg={12}>
                            <Card>
                                <CardBody>

                                    <div id="table-invoices-list">

                                        {itemLoader ? <Loader /> :
                                            <>
                                                <UnitListTable Units={Units}
                                                    setshowconf={setshowconf}
                                                    setrowdata={setrowdata}
                                                    courseData={
                                                        location?.state?.coursedata
                                                    } />
                                            </>
                                        }
                                    </div>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>
                </Container>

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
                            Add Unit{" "} </button>
                    </form>
                </Modal>
                <ToastContainer />
                {
                    showconf ? (
                        <Confirm
                            id={rowdata.number}
                            cancleoper={() => {
                                setshowconf(false)
                            }}
                            confirmoper={() => {
                                const send_data = {
                                    status: rowdata.status == "no" ? "yes" : "no",
                                    unit_id: rowdata.unit_id
                                }
                                showHideUnit(send_data);
                                setshowconf(false);
                            }}
                            status={rowdata.status == 'no' ? 'hide' : 'show'}
                            comp={'unit'} />
                    ) : (null)
                }

            </div>
        </React.Fragment>
    );
};

export default Policy;
