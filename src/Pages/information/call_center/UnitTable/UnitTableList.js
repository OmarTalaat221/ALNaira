import React, { useEffect, useState } from 'react';
import { CloseButton, DropdownItem, DropdownMenu, DropdownToggle, UncontrolledDropdown, Modal } from 'reactstrap';
// import TableContainer from "./../../../../components/Common/TableContainer";
// import { CourseData } from "../../../../CommonData/Data/Course";
import { useNavigate } from 'react-router-dom';
import TableContainer from '../../../../components/Common/TableContainer';
import axios from 'axios';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { Input, Loader } from 'rsuite';
import { toast } from 'react-toastify';
import { MenuItem, Select } from '@mui/material';
const UnitListTable = ({ Units, courseData, setshowconf, setrowdata }) => {
    const navigate = useNavigate();


    const columns = [
        {
            Header: "No",
            Cell: (cell) => {
                return (
                    <b>
                        {cell.cell.row.index + 1}
                    </b>
                )
            }
        },
        {
            Header: 'Type',
            accessor: "type"
        },
        {
            Header: 'Value',
            accessor: "value"
        },
        // {
        //     Header: 'Edit',
        //     Cell: (cell) => {
        //         return (
        //             <>
        //                 <button className="btn btn-primary" onClick={() => { setsetShowCopy(true); setSelectedUnit(cell.cell.row.original) }}>Edit</button>
        //             </>
        //         )
        //     }
        // },
        {
            Header: 'Delete',
            Cell: (cell) => {
                return (
                    <>
                        <button className="btn btn-danger" onClick={() => { setshowconf(true); setrowdata(cell.cell.row.original) }}>Delete</button>
                    </>
                )
            }
        },
    ]
    const handlecopyitem = (data) => {
        const data_send = {
            content: selectedCourse,
        }
        console.log(data_send)
        axios.post("https://elmatary.com/El_Matary_Platform/platform/admin/info/edit_policy.php", JSON.stringify(data_send))
            .then((res) => {
                if (res.status == 'success') {
                    toast.success("Success");
                }
                else if (res.status == 'error') {
                    toast.error(res.message);
                }
                else {
                    toast.error("Something Went Error");
                }
            })
    }
    const [Courses, setCourses] = useState(false);
    const [showCopy, setsetShowCopy] = useState(false);
    const [selectedCourse, setSelectedCourse] = useState(false);
    const [selectedUnit, setSelectedUnit] = useState(false);
    const getCourses = async () => {
        const courses = await axios.get("https://elmatary.com/El_Matary_Platform/platform/admin/courses/select_courses.php");
        setCourses([...courses])
    }
    useEffect(() => {
        getCourses()
    }, []);

    return (
        <React.Fragment> {
            Units && Units.length ? <TableContainer columns={columns}
                data={Units}
                isGlobalFilter={true}
                customPageSize={10}
                className="Invoice table" /> : !Units.length ? <h2>No Units</h2> : <Loader />
        }
            <Modal title="add unit"
                isOpen={showCopy}>
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
                            handlecopyitem(e)
                            setsetShowCopy(false);
                        }
                    }>
                    <CloseButton onClick={
                        () => setsetShowCopy(false)
                    }
                        style={
                            { marginLeft: "auto" }
                        } />

                    <div className="input_Field">
                        <label forHtml="unit_name">Call Center Title</label>
                        <Input style={
                            {
                                width: "100%",
                                padding: "10px",
                                borderRadius: "4px"
                            }
                        }
                            type="text"
                            name="call_center_title"
                            id="call_center_value"
                            placeholder="Call Center Title"
                            
                        />
                    </div>
                    
                    <div className="input_Field">
                        <label forHtml="unit_name">Call Center Value</label>
                        <Input style={
                            {
                                width: "100%",
                                padding: "10px",
                                borderRadius: "4px"
                            }
                        }
                            type="text"
                            name="call_center_value"
                            id="call_center_value"
                            placeholder="Call Center Value"
                            
                        />
                    </div>
                    <button className="btn btn-success"
                        style={
                            { margin: "10px 0 0 auto" }
                        }>
                        {" "}
                        Add Call Center{" "} </button>
                </form>
            </Modal>
        </React.Fragment>
    )
}

export default UnitListTable;
