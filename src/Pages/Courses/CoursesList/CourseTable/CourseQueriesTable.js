import React, { useEffect, useState } from "react";
import {
  CloseButton,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  UncontrolledDropdown,
  Modal,
  Spinner,
} from "reactstrap";
// import TableContainer from "./../../../../components/Common/TableContainer";
// import { CourseData } from "../../../../CommonData/Data/Course";
import "../style.css";
import { useNavigate } from "react-router-dom";
// import TableContainer from '../../../components/Common/TableContainer';
import axios from "axios";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { Loader } from "rsuite";
import { toast } from "react-toastify";
import { MenuItem, Select } from "@mui/material";
// import UniqQuestion from '../UniqQuestion';
import TableContainer from "../../../../components/Common/TableContainer";
import moment from "moment";
import { base_url } from "../../../../constants";
const CourseQueriesTable = ({ Units, getquries }) => {
  const navigate = useNavigate();
  const localdata = localStorage.getItem("elmatary_admin");
  let adminData = localdata && JSON.parse(localdata);
  const [rowData, setRowData] = useState({});
  const [showDetModal, setShowDetModal] = useState(false);
  const [showRepModal, setShowRepModal] = useState(false);
  // https://camp-coding.online/Teacher_App_2025/elnaira_jor/admin/unit/make_copy_from_unit_and_alldata.php

  const columns = [
    {
      Header: "No",
      Cell: (cell) => {
        return <b>{cell.cell.row.index + 1}</b>;
      },
    },

    {
      Header: "question id",
      Cell: (cell) => {
        return (
          <>
            <p>{cell.cell.row.original.question_id}</p>
          </>
        );
      },
    },
    {
      Header: "Student Name",
      Cell: (cell) => {
        return (
          <>
            <p>{cell.cell.row.original.name}</p>
          </>
        );
      },
    },
    {
      Header: "University Name",
      Cell: (cell) => {
        return (
          <>
            <p>{cell.cell.row.original.university_name}</p>
          </>
        );
      },
    },
    {
      Header: "question text",
      Cell: (cell) => {
        return (
          <>
            <p className="ques_data">{cell.cell.row.original?.question_text}</p>
          </>
        );
      },
    },
    {
      Header: "question replay",
      Cell: (cell) => {
        return (
          <>
            <p className="ques_data">
              {cell.cell.row.original.question_replay || "no Replay"}
            </p>
          </>
        );
      },
    },
    {
      Header: "question time",
      Cell: (cell) => {
        return (
          <>
            <p>{moment(cell.cell.row.original.time).format("L")}</p>
          </>
        );
      },
    },
    {
      Header: "Status",
      Cell: (cell) => {
        return (
          <>
            {cell.cell.row.original.public == "yes" ? (
              <button
                disabled={changeLoading}
                onClick={() => {
                  handleChangeStatus("no", cell.cell.row.original.question_id);
                }}
                className="btn btn-primary"
              >
                public
              </button>
            ) : (
              <button
                disabled={changeLoading}
                onClick={() => {
                  handleChangeStatus("yes", cell.cell.row.original.question_id);
                }}
                className="btn btn-danger"
              >
                private
              </button>
            )}
          </>
        );
      },
    },
    {
      Header: "Details",
      Cell: (cell) => {
        return (
          <>
            <button
              onClick={() => {
                setShowDetModal(true);
                setRowData(cell.cell.row.original);
              }}
              className="btn btn-primary"
            >
              Show
            </button>
          </>
        );
      },
    },
    {
      Header: "Replay",
      Cell: (cell) => {
        return (
          <>
            <img
              onClick={() => {
                setShowRepModal(true);
                setRowData(cell.cell.row.original);
              }}
              style={{ width: "30px", height: "30px", cursor: "pointer" }}
              src={require("../../../../assets/images/replay.png")}
              alt=""
            />
          </>
        );
      },
    },
  ];
  const [repLoading, setRepLoading] = useState(false);
  const [Courses, setCourses] = useState(false);
  const [showCopy, setsetShowCopy] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState(false);
  const [selectedUnit, setSelectedUnit] = useState(false);
  const [changeLoading, setChnageLoading] = useState(false);

  const [answer, setAnswer] = useState("");
  const getCourses = async () => {
    const data_send = {
      admin_id: adminData.admin_id,
      access_token: adminData.access_token,
    };
    const courses = await axios.post(
      "https://camp-coding.online/Teacher_App_2025/elnaira_jor/admin/courses/select_courses.php",
      JSON.stringify(data_send)
    );
    if (courses.status == "success") {
      setCourses([...courses.message]);
    }
    if (courses.message == "Session Expired") {
      localStorage.removeItem("elmatary_admin");
      navigate("/login", { replace: true });
    }
  };
  const handleRep = () => {
    if (answer == "") {
      toast.warn("Enter Answer");
      return;
    }
    setRepLoading(true);
    const data_send = {
      question_id: rowData.question_id,
      admin_id: adminData.admin_id,
      access_token: adminData.access_token,
      question_replay: answer,
    };
    axios
      .post(
        base_url + "/admin/student_question/add_question_replay.php",
        JSON.stringify(data_send)
      )
      .then((res) => {
        console.log(res.message);
        if (res.message == "Session Expired") {
          localStorage.removeItem("elmatary_admin");
          navigate("/login", { replace: true });
        }
        if (res.status == "success") {
          toast.success(res.message);
          setShowRepModal(false);
          getquries();
        } else if (res.status == "error") {
          toast.error(res.message);
        } else {
          toast.error("Something Went Error");
        }
      })
      .finally(() => {
        setRepLoading(false);
      });
  };
  const handleChangeStatus = (value, question_id) => {
    setChnageLoading(true);
    const data_send = {
      value,
      question_id,
      admin_id: adminData.admin_id,
      access_token: adminData.access_token,
    };
    console.log(data_send);
    axios
      .post(
        base_url + "/admin/student_question/update_show_question_global.php",
        JSON.stringify(data_send)
      )
      .then((res) => {
        console.log(res);
        if (res.message == "Session Expired") {
          localStorage.removeItem("elmatary_admin");
          navigate("/login", { replace: true });
        }
        if (res.status == "success") {
          toast.success(res.message);
          // s(false);
          getquries();
        } else if (res.status == "error") {
          toast.error(res.message);
        } else {
          toast.error("Something Went Error");
        }
      })
      .finally(() => {
        setChnageLoading(false);
      })
      .catch((e) => console.log(e));
  };
  useEffect(() => {
    getCourses();
  }, []);
  return (
    <React.Fragment>
      {" "}
      {Units && Units.length ? (
        <TableContainer
          columns={columns}
          data={Units}
          isGlobalFilter={true}
          customPageSize={10}
          className="Invoice table"
        />
      ) : !Units.length ? (
        <h2>No Queries</h2>
      ) : (
        <Loader />
      )}
      <Modal
        toggle={() => {
          setShowRepModal(!showRepModal);
        }}
        title="Copy Unit To Course"
        isOpen={showRepModal}
      >
        <form
          style={{
            padding: "15px",
            display: "flex",
            flexDirection: "column",
          }}
          onSubmit={(e) => {
            e.preventDefault();
            handleRep();
          }}
        >
          <CloseButton
            onClick={() => setShowRepModal(false)}
            style={{ marginLeft: "auto" }}
          />
          <div>Answer To Question ({rowData.question_text})</div>
          <div className="input_Field">
            <label htmlFor="" className="my-2">
              Enter Answer
            </label>
            <input
              className="form-control"
              onChange={(e) => {
                setAnswer(e.target.value);
              }}
              type="text"
              placeholder="Enter Answer"
            />
          </div>
          <div className="my-2">
            <button disabled={repLoading} className="btn btn-primary">
              {repLoading ? <Spinner /> : "Replay"}
            </button>
          </div>
        </form>
      </Modal>
      <Modal
        toggle={() => {
          setShowDetModal(!showDetModal);
        }}
        title="Ask Details"
        isOpen={showDetModal}
      >
        <div className="p-2 text-center">
          <h3>Ask Details</h3>
        </div>
        <div
          style={{
            padding: "20px",
          }}
        >
          <h5>{rowData?.question_text}?</h5>
        </div>
        <div
          style={{
            padding: "20px",
          }}
        >
          <p>{rowData?.question_replay || "No Replay"}</p>
        </div>
      </Modal>
    </React.Fragment>
  );
};

export default CourseQueriesTable;
