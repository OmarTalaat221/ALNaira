import React, {Fragment, useEffect, useState} from 'react';
import {DropdownItem, DropdownMenu, DropdownToggle, UncontrolledDropdown} from 'reactstrap';
import TableContainer from "../../../../components/Common/TableContainer";
import {CopounData} from "../../../../CommonData/Data/Copoun";
import {useNavigate} from 'react-router-dom';
import axios from "axios";
import { toast } from 'react-toastify';
const CopounListTable = ({Copouns, showHideCopoun}) => {
    const navigate = useNavigate();
  
    const columns = [
        {
            Header: 'Copoun Name',
            accessor: 'copoun_name'
        },
        {
            Header: 'Copoun Quantity',
            accessor: 'copoun_quantity',
            Filter: false
        },
        {
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
                                <DropdownItem>View</DropdownItem>
                                <DropdownItem>Show/Hide</DropdownItem>
                                <DropdownItem>Delete</DropdownItem>
                            </DropdownMenu>
                        </UncontrolledDropdown>
                    </>
                )
            }
        },
    ]
    return (
        <React.Fragment>
          {CopounData ?  <TableContainer columns={columns}
                data={CopounData}
                isGlobalFilter={true}
                customPageSize={10}
                className="Invoice table"/> : <Fragment/>}
        </React.Fragment>
    )
}

export default CopounListTable;
