import React, { useEffect, useState } from 'react';
import { DropdownItem, DropdownMenu, DropdownToggle, UncontrolledDropdown } from 'reactstrap';
// import TableContainer from "./../../../../components/Common/TableContainer";
// import { CourseData } from "../../../../CommonData/Data/Course";
import { Navigate, useLocation, useNavigate } from 'react-router-dom';
import TableContainer from '../../../components/Common/TableContainer';
import axios from 'axios';
import { Loader } from 'rsuite';
import { toastPlacements } from 'rsuite/esm/toaster/ToastContainer';
const UnitListTable = ({ Units, courseData, showHideUnit }) => {
    const navigate = useNavigate();


    const columns = [
 {
            Header: 'unit_name',
            accessor: 'unit_name',
            Filter: false
        }, {
            Header: 'Hidden',
            Cell: (cell) => {
                switch (cell.cell.row.original.hidden) {
                    case 'no':
                        return <span className="badge badge-pill badge-soft-success font-size-12">
                            {
                                cell.cell.row.original.hidden
                            }</span>;

                    case 'yes':
                        return <span className="badge badge-pill badge-soft-warning font-size-12">
                            {
                                cell.cell.row.original.hidden
                            }</span>;

                    default: 
                        return <span className="badge badge-pill badge-soft-success font-size-12">
                            {
                                cell.cell.row.original.hidden
                            }</span>
                }
            }
        }, {
            Header: 'Action',
            Cell: (cell) => {
                return (
                    <>
                        <UncontrolledDropdown>
                            <DropdownToggle className="btn btn-light btn-sm" tag="button" data-bs-toggle="dropdown" direction="start">
                                <i className="bx bx-dots-horizontal-rounded"></i>
                            </DropdownToggle>
                            <DropdownMenu className="dropdown-menu-end">
                                <DropdownItem>Edit</DropdownItem>
                                <DropdownItem onClick={
                                    () => {
                                        console.log(cell.cell.row.original);
                                        navigate("/lessons", {
                                            state: {
                                                coursedata: courseData,
                                                unitData: cell.cell.row.original
                                            }
                                        })
                                    }
                                }>View</DropdownItem>
                                <DropdownItem onClick={
                                    () => {
                                        const item = cell.cell.row.original;
                                        const send_data = {
                                            status: item.hidden == "no" ? "yes" : "no",
                                            unit_id: item.unit_id
                                        }
                                        showHideUnit(send_data);
                                    }
                                }>Show/Hide</DropdownItem>
                                {/* <DropdownItem>Delete</DropdownItem> */}
                            </DropdownMenu>
                        </UncontrolledDropdown>
                    </>
                )
            }
        },
    ]

    return (
        <React.Fragment> {
            Units && Units.length ? <TableContainer columns={columns}
                data={Units}
                isGlobalFilter={true}
                customPageSize={10}
                className="Invoice table" /> : !Units.length ? <h2>No Units</h2> : <Loader />
        } </React.Fragment>
    )
}

export default UnitListTable;
