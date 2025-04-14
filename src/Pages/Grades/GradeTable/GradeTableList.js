import React, { useEffect, useState } from "react";
import {
  CloseButton,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Input,
  Modal,
  UncontrolledDropdown,
} from "reactstrap";
// import TableContainer from "./../../../../components/Common/TableContainer";
// import { CourseData } from "../../../../CommonData/Data/Course";
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import TableContainer from "../../../components/Common/TableContainer";
import axios from "axios";
import { Loader } from "rsuite";
import { toastPlacements } from "rsuite/esm/toaster/ToastContainer";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { toast } from "react-toastify";
import "../unit.css";
import Confirm from "../../../components/ConfComp/Confirm";
import { base_url } from "../../../constants";
const UnitListTable = ({
  grades,
  universitydata,
  showHideUnit,
  updatedata,
}) => {
  const navigate = useNavigate();
  const localdata = localStorage.getItem("elmatary_admin");
  let adminData = localdata && JSON.parse(localdata);
  const [iseditmodel, setiseditmodel] = useState(false);
  const [rowdata, setrowdata] = useState({});
  const [showconf, setshowconf] = useState(false);
  const handledeltegrade = (data) => {
    const data_send = {
      university_id: universitydata.university_id,
      grade_id: data.grade_id,
    };
    axios.post("");
  };

  const handleupdateshowhid = (data) => {
    // console.log(data)
    const data_send = {
      // university_id:universitydata.university_id,
      grade_id: data.grade_id,
      admin_id: adminData.admin_id,
      access_token: adminData.access_token,
      hidden_value: data.hidden == "no" ? "yes" : "no",
    };
    // console.log(data_send);
    axios
      .post(
        base_url + "/admin/universities/update_grade_hidden.php",
        JSON.stringify(data_send)
      )
      .then((res) => {
        if (res.message == "Session Expired") {
          localStorage.removeItem("elmatary_admin");
          navigate("/login", { replace: true });
        }
        if (res.status == "success") {
          toast.success(res.message);
          updatedata();
        } else if (res.status == "error") {
          toast.err(res.message);
        } else {
          toast.error("Something Went Error");
        }
      })
      .catch((err) => console.log(err));
  };

  const handleOk = async (e) => {
    const send_data = {
      // university_id:universitydata.university_id,
      grade_name: rowdata.grade_name,
      grade_id: rowdata.grade_id,
      admin_id: adminData.admin_id,
      access_token: adminData.access_token,
    };
    const units = await axios.post(
      base_url + "/admin/universities/update_grade.php",
      send_data
    );
    // console.log(units);
    if (units.message == "Session Expired") {
      localStorage.removeItem("elmatary_admin");
      navigate("/login", { replace: true });
    }
    if (units.status == "success") {
      toast.success(units.message);
      updatedata();
    } else if (units.status == "error") {
      toast.error(units.message);
    } else {
      toast.error("Something Went Error");
    }
    setiseditmodel(false);
  };

  const columns = [
    {
      Header: "No",
      Cell: (cell) => {
        return <b>{cell.cell.row.index + 1}</b>;
      },
    },
    {
      Header: "Category name",
      accessor: "grade_name",
      Filter: false,
    },
    {
      Header: "Status",
      Cell: (cell) => {
        switch (cell.cell.row.original.hidden) {
          case "yes":
            return (
              <AiFillEyeInvisible
                onClick={() => {
                  setshowconf(true);
                  setrowdata({
                    ...cell.cell.row.original,
                    number: cell.cell.row.index + 1,
                  });
                  // handleupdateshowhid(cell.cell.row.original);
                }}
                style={{ cursor: "pointer", fontSize: "22px" }}
              />
            );
          case "no":
            return (
              <AiFillEye
                onClick={() => {
                  setshowconf(true);
                  setrowdata({
                    ...cell.cell.row.original,
                    number: cell.cell.row.index + 1,
                  });
                  // handleupdateshowhid(cell.cell.row.original);
                }}
                style={{ cursor: "pointer", fontSize: "22px" }}
              />
            );

          default:
            return (
              <span className="badge badge-pill badge-soft-success font-size-12">
                {cell.cell.row.original.hidden}
              </span>
            );
        }
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
                setiseditmodel(true);
                setrowdata(cell.cell.row.original);
              }}
            >
              Edit
            </button>
          </>
        );
      },
    },
  ];

  return (
    <React.Fragment>
      {" "}
      {grades && grades.length ? (
        <TableContainer
          columns={columns}
          data={grades}
          isGlobalFilter={true}
          customPageSize={10}
          className="Invoice table"
        />
      ) : !grades.length ? (
        <h2>No Categories</h2>
      ) : (
        <Loader />
      )}
      <Modal
        centered
        toggle={() => setiseditmodel(false)}
        title="edit Category"
        isOpen={iseditmodel}
      >
        <form
          action="#"
          style={{
            padding: "15px",
            display: "flex",
            flexDirection: "column",
          }}
          onSubmit={(e) => {
            e.preventDefault();
            handleOk(e);
            setiseditmodel(false);
          }}
        >
          <CloseButton
            onClick={() => setiseditmodel(false)}
            style={{ marginLeft: "auto" }}
          />
          <div className="input_Field">
            <label forHtml="unit_name">Category Name</label>
            <Input
              style={{
                width: "100%",
                padding: "10px",
                borderRadius: "4px",
              }}
              value={rowdata?.grade_name}
              type="text"
              name="unit_name"
              id="unit_name"
              onChange={(e) => {
                setrowdata({ ...rowdata, grade_name: e.target.value });
              }}
              placeholder="Category name"
              required
            />
          </div>
          <button
            className="btn btn-success"
            style={{ margin: "10px 0 0 auto" }}
          >
            {" "}
            Update{" "}
          </button>
        </form>
      </Modal>
      {showconf ? (
        <Confirm
          id={rowdata.number}
          cancleoper={() => {
            setshowconf(false);
          }}
          confirmoper={() => {
            const send_data = {
              hidden_value: rowdata.hidden == "no" ? "yes" : "no",
              book_id: rowdata.book_id,
            };
            // handleupdateshow(rowdata)
            handleupdateshowhid(rowdata);
            setshowconf(false);
          }}
          status={rowdata.hidden == "no" ? "hide" : "show"}
          comp={"Category"}
        />
      ) : null}
    </React.Fragment>
  );
};

export default UnitListTable;
