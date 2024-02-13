import React from "react";
import {
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  UncontrolledDropdown,
} from "reactstrap";
// import TableContainer from "./../../../../components/Common/TableContainer";
// import { CourseData } from "../../../../CommonData/Data/Course";
import { useNavigate } from "react-router-dom";
import TableContainer from "../../../components/Common/TableContainer";
import { questions } from "../../../CommonData/Data/questions";

const QuestionTableList = () => {
  const navigate = useNavigate();
  const columns = [
    {
      Header: "question_name",
      accessor: "question_name",
    //   Filter: false,
    },
    {
      Header: "question_details",
      accessor: "question_details",
      Filter: false,
    },
    {
      Header: "Date",
      accessor: "date",
      Filter: false,
    },
    {
      Header: "Action",
      Cell: (cell) => {
        return (
          <>
            <UncontrolledDropdown>
              <DropdownToggle
                className="btn btn-light btn-sm"
                tag="button"
                data-bs-toggle="dropdown"
                direction="start"
              >
                <i className="bx bx-dots-horizontal-rounded"></i>
              </DropdownToggle>
              <DropdownMenu className="dropdown-menu-end">
                {/* <DropdownItem>Edit</DropdownItem> */}
                <DropdownItem
                  onClick={() => {
                    console.log(cell.cell.row.original);
                    navigate("/questions", {
                      state: { coursedata: cell.cell.row.original },
                    });
                  }}
                >
                  Show
                </DropdownItem>
                {/* <DropdownItem>Delete</DropdownItem> */}
              </DropdownMenu>
            </UncontrolledDropdown>
          </>
        );
      },
    },
  ];
  return (
    <React.Fragment>
      <TableContainer
        columns={columns}
        data={questions}
        isGlobalFilter={true}
        customPageSize={10}
        className="Invoice table"
      />
    </React.Fragment>
  );
};

export default QuestionTableList;
