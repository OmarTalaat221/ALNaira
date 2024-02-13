import React from 'react';
import { DropdownItem, DropdownMenu, DropdownToggle, UncontrolledDropdown } from 'reactstrap';
import { useNavigate } from 'react-router-dom';
import TableContainer from '../../../components/Common/TableContainer';
import { CourseData } from '../../../CommonData/Data/Course';
import { LessonsData } from '../../../CommonData/Data/Lesson';

const LessonsTableList = () => {
  const navigate=useNavigate();
    const columns =
        [
            {
                Header: 'Type',
                accessor: 'type',
                Filter: false,
            },

            {
                Header: 'Date',
                accessor: 'date',
                Filter: false,
            },
            {
                Header: 'lesson Name',
                accessor: 'lesson_name',
            },
            {
                Header: 'Duration',
                accessor: 'duration',
                Filter: false,
            },
            {
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
                                    <DropdownItem
                                      // onClick={()=>{
                                      //   console.log(cell.cell.row.original);
                                      //   navigate("/units",{state:{coursedata:cell.cell.row.original}})
                                      // }}
                                    >Show</DropdownItem>
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
            <TableContainer
                columns={columns}
                data={LessonsData}
                isGlobalFilter={true}
                customPageSize={10}
                className="Invoice table"
            />
        </React.Fragment>
    )
}

export default LessonsTableList;
