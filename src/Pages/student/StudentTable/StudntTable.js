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
    const [rowdata,setrowdata]=useState({});
    const [showconf,setshowconf]=useState(false);
    const [showconf2,setshowconf2]=useState(false);
    const [showconf3,setshowconf3]=useState(false);
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
          },{
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
            Header: 'Device Serial',
            accessor: 'device_serial',
            Cell: (cell) => {
                const itemN = cell.cell.row.original;
                return <span>

                    {itemN.device_serial && itemN.device_serial.length ? <button className='btn btn-danger' style={{ whiteSpace: "nowrap" }} onClick={
                        () => {
                            setItem(cell.cell.row.original);
                            setIsModalOpen(true);
                        }
                    }>Reset Serial</button> : null}

                </span>;

            }
        },
        {
            Header: 'HeadPhone',
            Cell: (cell) => {
                const itemN = cell.cell.row.original;
                return <span>
                    <Toggle size="md" checked={itemN.skip_headphone == "no" ? false : true} onChange={() => {
                      // changeHeadPhone(itemN.student_id, itemN.skip_headphone == "no" ? "yes" : "no")
                      setrowdata(cell.cell.row.original);
                      setshowconf(true);
                    }} />

                    {/* <Toggle size="md" checked={itemN.skip_headphone == "no" ? false : true} onChange={() => changeHeadPhone(itemN.student_id, itemN.skip_headphone == "no" ? "yes" : "no")} /> */}

                </span>;

            }
        },
        {
            Header: 'Sim Card',
            Cell: (cell) => {
                const itemN = cell.cell.row.original;
                return <span>

                    <Toggle size="md" checked={itemN.skip_sim == "no" ? false : true} onChange={() => {
                      setrowdata(cell.cell.row.original);
                      setshowconf2(true);
                      // changeSimCard(itemN.student_id, itemN.skip_sim == "no" ? "yes" : "no")
                    }} />
                    {/* <Toggle size="md" checked={itemN.skip_sim == "no" ? false : true} onChange={() => changeSimCard(itemN.student_id, itemN.skip_sim == "no" ? "yes" : "no")} /> */}

                </span>;

            }
        },
        {
            Header: 'Blocked',
            Cell: (cell) => {
                const itemN = cell.cell.row.original;
                return <span>

                    <Toggle size="modal" checked={itemN.blocked == "no" ? false : true} onChange={() => {
                      // changeBlock(itemN.student_id, itemN.blocked == "no" ? "yes" : "no")
                      setshowconf3(true);
                      setrowdata(cell.cell.row.original);
                    }} />

                </span>;

            }
        },
        {
            Header: 'Action',
            Cell: (cell) => {
                return (
                    <>

                                <button className='btn btn-primary' onClick={
                                    () => {
                                        console.log(cell.cell.row.original);
                                        navigate("/studentcourses", {
                                            state: {
                                                coursedata: StudentData,
                                                unitData: cell.cell.row.original
                                            }
                                        })
                                    }
                                }>View</button>

                    </>
                )
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
        showconf?(
          <Confirm3
          id={rowdata.number}
          cancleoperpaid={()=>{
            setshowconf(false)
            // console.log("eew")
          }}
          confirmoperpaid={()=>{
            // console.log("eew")
            // const send_data = {
            //   student_id:rowdata.student_id,
            //   status:rowdata.skip_headphone == "no" ? "yes" : "no"
            // }
            let value=rowdata.skip_headphone == "no" ? "yes" : "no"
            changeHeadPhone(rowdata.student_id,value)
            setshowconf(false);
          }}
          status={rowdata.skip_headphone=='no'?'active':'non active'}
          comp={'HeadePhone'}/>
        ):(null)
      }
            {
        showconf2?(
          <Confirm3
          id={rowdata.number}
          cancleoperpaid={()=>{
            setshowconf2(false)
            // console.log("eew")
          }}
          confirmoperpaid={()=>{
            // console.log("eew")
            // const send_data = {
            //   student_id:rowdata.student_id,
            //   status:rowdata.skip_headphone == "no" ? "yes" : "no"
            // }

            let value=rowdata.skip_sim == "no" ? "yes" : "no"
            changeSimCard(rowdata.student_id,value)
            setshowconf2(false);

          }}
          status={rowdata.skip_sim=='no'?'active':'non active'}
          comp={'Sim Card'}/>
        ):(null)
      }
            {
        showconf3?(
          <Confirm3
          id={rowdata.number}
          cancleoperpaid={()=>{
            setshowconf3(false)
            // console.log("eew")
          }}
          confirmoperpaid={()=>{
            // console.log("eew")
            // const send_data = {
            //   student_id:rowdata.student_id,
            //   status:rowdata.skip_headphone == "no" ? "yes" : "no"
            // }

            let value=rowdata.blocked == "no" ? "yes" : "no"
            changeBlock(rowdata.student_id,value)
            setshowconf3(false);

          }}
          status={rowdata.blocked=='no'?'block':'yes'}
          comp={'Sim Card'}/>
        ):(null)
      }
        </React.Fragment>
    )
}

export default StudntListTable;
