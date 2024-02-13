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
import { ExamData } from "../../../CommonData/Data/Exams";
import moment from "moment";

const ExamListTable = ({ exams }) => {
  const navigate = useNavigate();
  const columns = [
    {
      Header: "Exam ID",
      accessor: "exam_id",
      Filter: false,
    },
    {
      Header: "exam_name",
      accessor: "exam_name",
      //   Filter: false,
    },
    // {
    //   Header: "exam_details",
    //   accessor: "exam_details",
    //   Filter: false,
    // },
    {
      Header: "Timer",
      accessor: "timer",
      Filter: false,
    },
    {
      Header: "start date",
      Cell: (cell) => {
        return (
          <span>{moment(cell.cell.row.original.start_date).format('Y-M-D H:m:s')}</span>
        )
      },
      Filter: false,
    },
    {
      Header: "end date",
      Cell: (cell) => {
        // {console.log(cell)}
        return (
          <span>{moment(cell.cell.row.original.end_date).format('Y-M-D H:m:s')}</span>
        )
      },
      Filter: false,
    },
    {
      Header: "Results",
      Cell: (cell) => {
        return <div>
          <button
            type="button"
            className="btn btn-success"
            data-bs-toggle="modal"
            data-bs-target="#addCourseModal"
            style={{ whiteSpace: "nowrap", width: "fit-content" }}
            onClick={() => {
              navigate("/exam_result", { state: cell.cell.row.original.exam_id })
            }}
          >
            Results
          </button>
        </div>
      }
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
                <DropdownItem>Edit</DropdownItem>
                <DropdownItem
                  onClick={() => {
                    console.log(cell.cell.row.original);
                    const examdata = { ...cell.cell.row.original };
                    navigate("/publicexamquestion", {
                      state: { examdata },
                    });
                  }}
                >
                  Show
                </DropdownItem>
                {/* <DropdownItem
                  onClick={() => {
                    console.log(cell.cell.row.original);
                    navigate("/examquestion", {
                      state: { examdata: cell.cell.row.original },
                    });
                  }}
                >
                  Show
                </DropdownItem> */}
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
        data={exams}
        isGlobalFilter={true}
        customPageSize={10}
        className="Invoice table"
      />
    </React.Fragment>
  );
};

export default ExamListTable;
