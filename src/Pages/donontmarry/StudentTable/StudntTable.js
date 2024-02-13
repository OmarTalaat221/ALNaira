import React, { useEffect, useState } from 'react';
import { CloseButton, DropdownItem, DropdownMenu, DropdownToggle, Modal, UncontrolledDropdown } from 'reactstrap';
// import TableContainer from "./../../../../components/Common/TableContainer";
import { StudentData } from '../../../CommonData/Data/Studentdata';
import { Navigate, useLocation, useNavigate } from 'react-router-dom';
import TableContainer from '../../../components/Common/TableContainer';
import axios from 'axios';
import { Input, Loader, Toggle } from 'rsuite';
import 'rsuite/dist/rsuite.min.css';

import { toastPlacements } from 'rsuite/esm/toaster/ToastContainer';
import { Icon } from '@mui/material';
import { toast } from 'react-toastify';
import Confirm3 from '../../../components/ConfComp/Confirm3';
const StudntListTable = ({ getStudents, Units, courseData, showHideUnit }) => {
    const navigate = useNavigate();
    const [item, setItem] = useState(false)
    const [rowdata, setrowdata] = useState({});
    const [showconf, setshowconf] = useState(false);
    const [showconf2, setshowconf2] = useState(false);
    const [showconf3, setshowconf3] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const changeSerial = async () => {
        const new_serial = await axios.post("https://elmatary.com/El_Matary_Platform/platform/admin/students/update_serial_num_empty.php", { student_id: item.student_id });
        if (new_serial.status == "success") {
            toast.success("Updated");
            getStudents()
        } else {
            toast.error(new_serial.message);
        }
    }
    const changeBlock = async (id, value) => {
        console.log({ student_id: item.student_id, status: value });
        const blocked = await axios.post("https://elmatary.com/El_Matary_Platform/platform/admin/students/update_ban_student.php", { student_id: id, status: value });
        if (blocked.status == "success") {
            toast.success("Updated")
            getStudents()
        } else {
            toast.error(blocked.message)
        }
    }
    const changeSimCard = async (id, value) => {
        console.log(value);
        const simCard = await axios.post("https://elmatary.com/El_Matary_Platform/platform/admin/students/update_sim_card.php", { student_id: id, status: value });
        if (simCard.status == "success") {
            toast.success("Updated")
            getStudents()
        } else {
            toast.error(simCard.message)
        }
    }
    const changeHeadPhone = async (id, value) => {
        console.log(value);
        const headPhone = await axios.post("https://elmatary.com/El_Matary_Platform/platform/admin/students/update_head_phone_jack.php", { student_id: id, status: value });
        if (headPhone.status == "success") {
            toast.success("Updated")
            getStudents()
        } else {
            toast.error(headPhone.message)
        }
    }

    const [showUnAssign, setShowUnAssign] = useState(false)

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
        }, {
            Header: 'student_name',
            accessor: 'student_name',
            Filter: false
        },
        {
            Header: 'Email',
            accessor: 'student_email',
            Filter: false
        },
        {
            Header: 'Phone Number',
            accessor: 'phone',
            Filter: false
        },
        {
            Header: 'University Name',
            accessor: 'university_name',
            Filter: false
        },
        {
            Header: 'Un Assigned',
            Cell: (cell) => {
                const itemN = cell.cell.row.original;
                return <span>

                    <button className='btn btn-primary' onClick={() => {
                        setShowUnAssign(true)
                    }}>Un Assign</button>

                </span>;

            }
        },

    ]

    return (
        <React.Fragment>
            <div className="student_table" style={{ width: "100%", overflow: "auto", padding: "10px" }}>{
                Units && Units.length ? <TableContainer columns={columns}
                    data={Units}
                    isGlobalFilter={true}
                    customPageSize={10}
                    className="Invoice table" /> : !Units.length ? <h2>No Units</h2> : <Loader />
            } </div>

            <Modal title="Reset Serial"
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
                            changeSerial(e);
                            setIsModalOpen(false);

                        }
                    }>
                    <div className="modal-header">
                        <h5 className="modal-title" id="orderdetailsModalLabel" > Are You Sure Reset Serial For Student <span style={{ fontWeight: "700", color: "red" }}>({item?.student_name}) ?</span> </h5>
                        <CloseButton onClick={
                            () => setIsModalOpen(false)
                        }
                            style={
                                { marginLeft: "auto" }
                            } />
                    </div>

                    <button className="btn btn-danger"
                        style={
                            { margin: "10px 0 0 auto" }
                        }>
                        {" "}
                        Reset Serial{" "} </button>
                </form>
            </Modal>
            {
                showconf ? (
                    <Confirm3
                        id={rowdata.number}
                        cancleoperpaid={() => {
                            setshowconf(false)
                            // console.log("eew")
                        }}
                        confirmoperpaid={() => {
                            // console.log("eew")
                            // const send_data = {
                            //   student_id:rowdata.student_id,
                            //   status:rowdata.skip_headphone == "no" ? "yes" : "no"
                            // }
                            let value = rowdata.skip_headphone == "no" ? "yes" : "no"
                            changeHeadPhone(rowdata.student_id, value)
                            setshowconf(false);
                        }}
                        status={rowdata.skip_headphone == 'no' ? 'active' : 'non active'}
                        comp={'HeadePhone'} />
                ) : (null)
            }
            {
                showconf2 ? (
                    <Confirm3
                        id={rowdata.number}
                        cancleoperpaid={() => {
                            setshowconf2(false)
                            // console.log("eew")
                        }}
                        confirmoperpaid={() => {
                            // console.log("eew")
                            // const send_data = {
                            //   student_id:rowdata.student_id,
                            //   status:rowdata.skip_headphone == "no" ? "yes" : "no"
                            // }

                            let value = rowdata.skip_sim == "no" ? "yes" : "no"
                            changeSimCard(rowdata.student_id, value)
                            setshowconf2(false);

                        }}
                        status={rowdata.skip_sim == 'no' ? 'active' : 'non active'}
                        comp={'Sim Card'} />
                ) : (null)
            }
            {
                showconf3 ? (
                    <Confirm3
                        id={rowdata.number}
                        cancleoperpaid={() => {
                            setshowconf3(false)
                            // console.log("eew")
                        }}
                        confirmoperpaid={() => {
                            // console.log("eew")
                            // const send_data = {
                            //   student_id:rowdata.student_id,
                            //   status:rowdata.skip_headphone == "no" ? "yes" : "no"
                            // }

                            let value = rowdata.blocked == "no" ? "yes" : "no"
                            changeBlock(rowdata.student_id, value)
                            setshowconf3(false);

                        }}
                        status={rowdata.blocked == 'no' ? 'block' : 'yes'}
                        comp={'Sim Card'} />
                ) : (null)
            }


            <Modal title="Un Assign Student"
                isOpen={showUnAssign}>
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
                            setShowUnAssign(false);
                        }
                    }>

                    <CloseButton onClick={
                        () => setShowUnAssign(false)
                    }
                        style={
                            { marginLeft: "auto" }
                        } />
                    <h4>Are You Sure ?</h4>
                    <button className="btn btn-success">Confirm</button>
                </form>
            </Modal>

        </React.Fragment>
    )
}

export default StudntListTable;
