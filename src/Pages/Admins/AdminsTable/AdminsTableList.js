import React, { useEffect, useState } from "react";
import { CloseButton, Modal } from "reactstrap";
import { MenuItem, Select } from "@mui/material";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { Loader } from "rsuite";
import TableContainer from "../../../components/Common/TableContainer";
import { base_url } from "../../../constants";

const UnitListTable = ({ courseData, Adminss, setrowdata }) => {
  const navigate = useNavigate();
  const localdata = localStorage.getItem("elmatary_admin");
  let adminData = localdata && JSON.parse(localdata);

  const [Units, setUnits] = useState(false);
  const [editModal, setEditModal] = useState(false);
  const [selectedAdmin, setSelectedAdmin] = useState(null);

  // Fetch Units
  const getUnits = async () => {
    const data_send = {
      admin_id: adminData.admin_id,
      access_token: adminData.access_token,
      course_id: courseData.course_id,
    };
    const courses = await axios.post(
      base_url + "/admin/courses/select_course_units.php",
      JSON.stringify(data_send)
    );

    if (courses.status === "success") {
      setUnits([...courses.message]);
    }
  };

  useEffect(() => {
    getUnits();
  }, []);

  // Handle Edit Modal
  const handleEdit = (admin) => {
    setSelectedAdmin(admin);
    setEditModal(true);
  };

  // Update Admin Request
  const updateAdmin = async (e) => {
    e.preventDefault();
    const data_send = {
      admin_id: selectedAdmin.admin_user_id,
      name: selectedAdmin.user_name,
      email: selectedAdmin.user_email,
      password: selectedAdmin.password,
      access_token: adminData.access_token,
    };

    try {
      const res = await axios.post(
        base_url + "/admin/auth/edit_admin.php",
        JSON.stringify(data_send)
      );

      if (res.status == "success") {
        toast.success("Admin updated successfully!");
        setEditModal(false);
        window.location.reload();
      } else {
        toast.error(res.message);
      }
    } catch (error) {
      toast.error("Error updating admin!");
    }
  };

  const columns = [
    {
      Header: "Admin Name",
      accessor: "user_name",
      Cell: (cell) => <b>{cell?.cell?.row?.original?.user_name}</b>,
    },
    {
      Header: "Admin Email",
      accessor: "user_email",
      Cell: (cell) => <b>{cell?.cell?.row?.original?.user_email}</b>,
    },
    {
      Header: "Admin Passowrd",
      accessor: "password",
      Cell: (cell) => <b>{cell?.cell?.row?.original?.password}</b>,
    },
    {
      Header: "Action",
      Cell: (cell) => (
        <>
          <button
            className="btn btn-warning"
            onClick={() => handleEdit(cell.cell.row.original)}
          >
            Edit
          </button>
        </>
      ),
    },
  ];

  return (
    <React.Fragment>
      {Adminss && Adminss.length ? (
        <TableContainer
          columns={columns}
          data={Adminss}
          isGlobalFilter={true}
          customPageSize={10}
          className="Invoice table"
        />
      ) : !Adminss.length ? (
        <h2>No Admins</h2>
      ) : (
        <Loader />
      )}

      {/* Edit Modal */}
      <Modal isOpen={editModal} toggle={() => setEditModal(false)}>
        <form
          style={{
            padding: "15px",
            display: "flex",
            flexDirection: "column",
          }}
          onSubmit={updateAdmin}
        >
          <CloseButton
            onClick={() => setEditModal(false)}
            style={{ marginLeft: "auto" }}
          />
          <h4>Edit Admin</h4>
          <div className="input_Field">
            <label htmlFor="user_name">Name</label>
            <input
              type="text"
              name="user_name"
              value={selectedAdmin?.user_name || ""}
              onChange={(e) =>
                setSelectedAdmin({
                  ...selectedAdmin,
                  user_name: e.target.value,
                })
              }
              required
              className="form-control"
            />
          </div>
          <div className="input_Field">
            <label htmlFor="user_email">Email</label>
            <input
              type="email"
              name="user_email"
              value={selectedAdmin?.user_email || ""}
              onChange={(e) =>
                setSelectedAdmin({
                  ...selectedAdmin,
                  user_email: e.target.value,
                })
              }
              required
              className="form-control"
            />
          </div>
          <div className="input_Field">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              value={selectedAdmin?.password || ""}
              onChange={(e) =>
                setSelectedAdmin({ ...selectedAdmin, password: e.target.value })
              }
              required
              className="form-control"
            />
          </div>
          <button className="btn btn-success mt-3" type="submit">
            Update Admin
          </button>
        </form>
      </Modal>
    </React.Fragment>
  );
};

export default UnitListTable;
