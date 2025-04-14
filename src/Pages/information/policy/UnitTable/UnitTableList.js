import React, { useEffect, useState } from "react";
import {
  CloseButton,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  UncontrolledDropdown,
  Modal,
} from "reactstrap";
// import TableContainer from "./../../../../components/Common/TableContainer";
// import { CourseData } from "../../../../CommonData/Data/Course";
import { useNavigate } from "react-router-dom";
import TableContainer from "../../../../components/Common/TableContainer";
import axios from "axios";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { Input, Loader } from "rsuite";
import { toast } from "react-toastify";
import { MenuItem, Select } from "@mui/material";
const UnitListTable = ({ Units, courseData, setshowconf, setrowdata }) => {
  const navigate = useNavigate();

  const columns = [
    {
      Header: "No",
      Cell: (cell) => {
        return <b>{cell.cell.row.index + 1}</b>;
      },
    },
    {
      Header: "Title",
      Cell: (cell) => {
        return <span>Policy</span>;
      },
    },
    {
      Header: "Content",
      Cell: (cell) => {
        return (
          <div>
            {" "}
            {cell.cell.row.original?.split(".")?.map((item, index) => {
              return <p key={index}>{item}</p>;
            })}
          </div>
        );
      },
    },
    {
      Header: "Action",
      Cell: (cell) => {
        return (
          <>
            <button
              className="btn btn-primary"
              onClick={() => {
                setsetShowCopy(true);
                setSelectedUnit(cell.cell.row.original);
              }}
            >
              Edit
            </button>
          </>
        );
      },
    },
  ];
  const handlecopyitem = (data) => {
    const data_send = {
      content: selectedCourse,
    };
    console.log(data_send);
    axios
      .post(
        "https://camp-coding.online/Teacher_App_2025/elnaira_jor/admin/info/edit_policy.php",
        JSON.stringify(data_send)
      )
      .then((res) => {
        if (res.status == "success") {
          toast.success("Success");
        } else if (res.status == "error") {
          toast.error(res.message);
        } else {
          toast.error("Something Went Error");
        }
      });
  };
  const [Courses, setCourses] = useState(false);
  const [showCopy, setsetShowCopy] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState(false);
  const [selectedUnit, setSelectedUnit] = useState(false);
  const getCourses = async () => {
    const courses = await axios.get(
      "https://camp-coding.online/Teacher_App_2025/elnaira_jor/admin/courses/select_courses.php"
    );
    setCourses([...courses]);
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
        <h2>No Policy</h2>
      ) : (
        <Loader />
      )}
      <Modal title="Edit Policy" isOpen={showCopy}>
        <form
          action="#"
          style={{
            padding: "15px",
            display: "flex",
            flexDirection: "column",
          }}
          onSubmit={(e) => {
            e.preventDefault();
            handlecopyitem(e);
            setsetShowCopy(false);
          }}
        >
          <CloseButton
            onClick={() => setsetShowCopy(false)}
            style={{ marginLeft: "auto" }}
          />

          <div className="input_Field">
            <label forHtml="course_id">Policy Content</label>
            <div className="input_Field">
              <textarea
                style={{
                  width: "100%",
                  minHeight: "190px",
                  borderRadius: "4px",
                  margin: "10px 0",
                  outline: "none",
                  padding: "10px",
                }}
                type="text"
                name="course_id"
                id="course_id"
                placeholder="Enter Policy"
                defaultValue={selectedUnit}
                onChange={(e) =>
                  setSelectedCourse(
                    e.currentTarget.value && e.currentTarget.value.length
                      ? e.currentTarget.value
                      : selectedUnit
                  )
                }
                required
              />
            </div>
          </div>
          <button
            className="btn btn-success"
            style={{ margin: "10px 0 0 auto" }}
          >
            {" "}
            Edit Policy{" "}
          </button>
        </form>
      </Modal>
    </React.Fragment>
  );
};

export default UnitListTable;
