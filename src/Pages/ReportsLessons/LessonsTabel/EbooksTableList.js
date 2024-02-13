import React from 'react';
import { DropdownItem, DropdownMenu, DropdownToggle, UncontrolledDropdown } from 'reactstrap';
import { useNavigate } from 'react-router-dom';
import TableContainer from '../../../components/Common/TableContainer';
import { CourseData } from '../../../CommonData/Data/Course';
import { LessonsData } from '../../../CommonData/Data/Lesson';

const EbooksTableList = ({columns,data }) => {
  const navigate=useNavigate();
   
    return (
        <React.Fragment>
            {console.log(columns, data)}
            <TableContainer
                columns={columns}
                data={data}
                isGlobalFilter={true}
                customPageSize={10}
                className="Invoice table"
            />
        </React.Fragment>
    )
}

export default EbooksTableList;
