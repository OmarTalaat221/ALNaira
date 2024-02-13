import React from 'react';
import { DropdownItem, DropdownMenu, DropdownToggle, UncontrolledDropdown, UncontrolledTooltip } from 'reactstrap';
import { userList } from "./../../../CommonData/Data/UserList";
import TableContainer from "./../../../components/Common/TableContainer";

const UserListTable = () => {
    const columns = [
        {
            Header: '#',
            accessor: '#',
            Filter: false,
            Cell: (cell) => {
                return <div className="form-check font-size-16"><input className="form-check-input" type="checkbox" id="orderidcheck01" /><label className="form-check-label" htmlFor="orderidcheck01"></label></div>
            }
        },
        {
            Header: 'Name',
            Filter: false,
            Cell: (cell) => {
                return (
                    <div>
                        <img src={cell.cell.row.original.name[0]} alt="" className="avatar-sm rounded-circle me-2" /><span>{cell.cell.row.original.name[1]}</span>
                    </div>
                )
            }
        },

        {
            Header: 'Position',
            accessor: 'Position',
            Filter: false,
        },

        {
            Header: 'Email',
            accessor: 'Email',
            Filter: false,
        },

        {
            Header: 'ViewDetails',
            Filter: false,
            Cell: (cell) => {
                return (
                    <>
                        <ul className="list-inline mb-0">
                            <li className="list-inline-item">
                                <a href="#/" id="Edit" className="px-2 text-primary"><i className="bx bx-pencil font-size-18"></i></a>
                            </li>
                            <li className="list-inline-item">
                                <a href="#/" id="Delete" className="px-2 text-danger"><i className="bx bx-trash-alt font-size-18"></i></a>
                            </li>
                            <li className="list-inline-item">
                                <UncontrolledDropdown direction='start'>
                                    <DropdownToggle className="text-muted font-size-18 px-2" tag="a" data-bs-toggle="dropdown">
                                        <i className="bx bx-dots-vertical-rounded"></i>
                                    </DropdownToggle>
                                    <DropdownMenu className="dropdown-menu-end">
                                        <DropdownItem>Action</DropdownItem>
                                        <DropdownItem>Another action</DropdownItem>
                                        <DropdownItem>Something else here</DropdownItem>
                                    </DropdownMenu>
                                </UncontrolledDropdown>

                                <UncontrolledTooltip
                                    placement="top"
                                    target="Edit"
                                >
                                    Edit
                                </UncontrolledTooltip>

                                <UncontrolledTooltip
                                    placement="top"
                                    target="Delete"
                                >
                                    Delete
                                </UncontrolledTooltip>
                            </li>
                        </ul>
                    </>
                )
            }
        },

    ]
    return (
        <React.Fragment>
            <TableContainer
                columns={columns}
                data={userList}
                isGlobalFilter={true}
                customPageSize={10}
                className="custom-header-css"
            />

        </React.Fragment>
    )
}

export default UserListTable;