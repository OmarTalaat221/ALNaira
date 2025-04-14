import React from "react";
import {
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  UncontrolledDropdown,
} from "reactstrap";
import axios from "axios";
// import TableContainer from "./../../../../components/Common/TableContainer";
// import { CourseData } from "../../../../CommonData/Data/Course";
import { useNavigate } from "react-router-dom";
import TableContainer from "../../../components/Common/TableContainer";
import { ExamData } from "../../../CommonData/Data/Exams";
import moment from "moment";
import CopyToClipboard from "react-copy-to-clipboard";
import { ContentCopyOutlined } from "@mui/icons-material";
import { toast } from "react-toastify";

const LivesTableList = ({ lives }) => {
  const navigate = useNavigate();
  const columns = [
    {
      Header: "Live ID",
      accessor: "live_id",
      Filter: false,
    },
    {
      Header: "title",
      accessor: "title",
      //   Filter: false,
    },
    // {
    //   Header: "exam_details",
    //   accessor: "exam_details",
    //   Filter: false,
    // },
    {
      Header: "university name",
      accessor: "university_name",
      Filter: false,
    },
    {
      Header: "grade name",
      accessor: "grade_name",
      Filter: false,
    },
    {
      Header: "Course name",
      accessor: "course_name",
      Filter: false,
    },
    {
      Header: "start date",
      Cell: (cell) => {
        return (
          <span>
            {moment(cell.cell.row.original.start_date).format("Y-M-D H:m:s")}
          </span>
        );
      },
      Filter: false,
    },
    {
      Header: "start time",
      Cell: (cell) => {
        return (
          <span>
            {moment(cell.cell.row.original.start_time).format("Y-M-D H:m:s")}
          </span>
        );
      },
      Filter: false,
    },
    // {
    //   Header: "status",
    //   Cell: (cell) => {
    //     return (
    //       <span>{console.log(cell.cell.row.original)}</span>
    //     )
    //   },
    //   Filter: false,
    // },
    {
      Header: "copy",
      Cell: (cell) => {
        return (
          <CopyToClipboard
            style={{
              padding: "0 14px",
              cursor: "pointer",
              width: "100%",
              display: "flex",
              gap: "10px",
              alignItems: "center",
            }}
            text={cell.cell.row.original?.channel_id}
            onCopy={() => toast.success("Copied")}
          >
            <span
              style={{
                width: "100%",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <b
                style={{ fontSize: "22px", fontWeight: "700", color: "green" }}
              >
                {cell.cell.row.original?.channel_id}
              </b>
              <em>
                <ContentCopyOutlined />
              </em>
            </span>
          </CopyToClipboard>
        );
      },
      Filter: false,
    },
    // {
    //   Header: "ended",
    //   Cell: (cell) => {
    //     return (
    //       <div>
    //         {cell.cell.row.original.ended!='0'?(<img style={{ width:'20px' }} src={require("../../../assets/images/ended.png")}/>):(
    //           <p style={{ width:'30px',height:'30px',backgroundColor:'yellow',borderRadius:'50%' }}></p>
    //         )}
    //       </div>
    //     )
    //   },
    //   Filter: false,
    // },
    {
      Header: "Poll",
      Cell: (cell) => {
        return (
          <button
            className="btn btn-primary"
            onClick={() => {
              navigate("/livemcqquestion", {
                state: { live_id: cell.cell.row.original.live_id },
              });
              // navigate("/live",{state:{channel_id:cell.cell.row.original?.channel_id,live_id:cell.cell.row.original?.live_id}})
            }}
          >
            poll
          </button>
        );
      },
      Filter: false,
    },
    {
      Header: "Go Live",
      Cell: (cell) => {
        return (
          <button
            className="btn btn-primary"
            onClick={async () => {
              await axios.post(
                "https://camp-coding.online/Teacher_App_2025/elnaira_jor/admin/live_poll/start_meeting.php",
                {
                  live_id: cell.cell.row.original?.live_id,
                }
              );
              toast.done("Meeting Started");
              // navigate("/live", {
              //   state: {
              //     channel_id: cell.cell.row.original?.channel_id,
              //     live_id: cell.cell.row.original?.live_id
              //   }
              // });
            }}
          >
            Start Meeting
          </button>
        );
      },
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
                <DropdownItem
                  onClick={() => {
                    hadleendlive(cell.cell.row.original?.live_id);
                  }}
                >
                  end
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </>
        );
      },
    },
  ];
  const hadleendlive = (live_id) => {
    const data_send = {
      live_id,
    };
    axios
      .post(
        "https://camp-coding.online/Teacher_App_2025/elnaira_jor/admin/live/updat_live_end.php",
        JSON.stringify(data_send)
      )
      .then((res) => {
        if (res.status == "success") {
          toast.success(res.message);
        } else if (res.status == "error") {
          toast.error(res.message);
        } else {
          toast.error("Something Went Error");
        }
      })
      .catch((err) => console.log(err));
  };
  return (
    <React.Fragment>
      <TableContainer
        columns={columns}
        data={lives}
        isGlobalFilter={true}
        customPageSize={10}
        className="Invoice table"
      />
    </React.Fragment>
  );
};

export default LivesTableList;
