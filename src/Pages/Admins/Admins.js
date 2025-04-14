import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  Row,
  Col,
  Container,
  Modal,
  TabContent,
  TabPane,
  Tooltip,
  Card,
  CardBody,
  UncontrolledDropdown,
  DropdownMenu,
  DropdownItem,
  DropdownToggle,
  Input,
  CloseButton,
  ModalHeader,
} from "reactstrap";

// Import Flatepicker
import "flatpickr/dist/themes/material_blue.css";
import Flatpickr from "react-flatpickr";

// Breadcrumb
import Breadcrumbs from "../../components/Common/Breadcrumb";
import AdminsListTable from "./AdminsTable/AdminsTableList";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import { useEffect } from "react";
import Confirm from "../../components/ConfComp/Confirm";
import { MenuItem, Select } from "@mui/material";
import { Loader } from "rsuite";
import { base_url } from "../../constants";

const Admins = () => {
  console.log("erre");
  document.title = "Admins | ALNaierh  ";
  const navigate = useNavigate();
  const localdata = localStorage.getItem("elmatary_admin");
  let adminData = localdata && JSON.parse(localdata);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [Adminss, setAdminss] = useState(false);
  const location = useLocation();
  const [itemLoader, setItemLoader] = useState(false);
  const getAdminss = async () => {
    setItemLoader(true);
    const send_data = {
      admin_id: adminData.admin_id,
      access_token: adminData.access_token,
    };
    try {
      const units = await axios.post(
        base_url + "/admin/auth/list.php",
        send_data
      );
      console.log(units);
      if (units.status == "success") {
        setAdminss([...units.message]);
      }
      if (units.message == "Session Expired") {
        localStorage.removeItem("elmatary_admin");
        navigate("/login", { replace: true });
      }
      setItemLoader(false);
    } catch (err) {
      console.log(err);
      setItemLoader(false);
    }
  };
  const showModal = () => {
    setIsModalOpen(true);
  };
  const [clear, showClear] = useState(false);
  const showClearModal = () => {
    showClear(true);
  };
  const handleClear = async () => {
    const data_send = {
      course_id: location?.state?.coursedata?.course_id,
      admin_id: adminData.admin_id,
      access_token: adminData.access_token,
    };
    const units = await axios.post(
      base_url + "/admin/unit/remove_units_and_videos.php",
      JSON.stringify(data_send)
    );
    if (units.message == "Session Expired") {
      localStorage.removeItem("elmatary_admin");
      navigate("/login", { replace: true });
    }
    if (units.status) {
      toast.success(units.message);
      await getAdminss();
      showClear(false);
    } else {
      toast.error(units.message);
    }
  };
  const handleOk = async (e) => {
    const send_data = {
      course_id: location?.state?.coursedata?.course_id,
      name: e.currentTarget.admin_name.value,
      email: e.currentTarget.admin_email.value,
      password: e.currentTarget.admin_password.value,
      admin_id: adminData.admin_id,
      access_token: adminData.access_token,
    };
    const units = await axios.post(
      base_url + "/admin/auth/add_admin.php",
      send_data
    );
    console.log(units);

    if (units.status) {
      toast.success("Added");
      await getAdminss();
    } else {
      toast.error(units.message);
    }
    setIsModalOpen(false);
  };
  useEffect(() => {
    getAdminss();
  }, []);

  const [showconf, setshowconf] = useState(false);
  const [rowdata, setrowdata] = useState({});
  const showHideAdmins = async (send_data) => {
    const data_send = {
      ...send_data,
      admin_id: adminData.admin_id,
      access_token: adminData.access_token,
    };
    const units = await axios.post(
      base_url + "/admin/courses/show_hide_unit.php",
      JSON.stringify(data_send)
    );
    if (units.message == "Session Expired") {
      localStorage.removeItem("elmatary_admin");
      navigate("/login", { replace: true });
    }
    if (units.status) {
      toast.success(units.message);
      await getAdminss();
    } else {
      toast.error(units.message);
    }
  };

  // if (!location.state) {
  //     return navigate("/enrollments");
  // }

  return (
    <React.Fragment>
      <div className="page-content">
        <Container fluid={true}>
          {/* breadcrumbItem={loation?.state?.coursedata?.course_name + " Admins List"} */}
          <Breadcrumbs
            title={location?.state?.coursedata?.course_name}
            breadcrumbItem={"Admins List"}
          />

          <Row>
            <Col lg={12}>
              <Card>
                <CardBody>
                  <div className="position-relative">
                    <div className="modal-button mt-2">
                      <Row className="align-items-start">
                        <Col className="col-sm">
                          <div>
                            <button
                              type="button"
                              className="btn btn-success mb-4"
                              data-bs-toggle="modal"
                              data-bs-target="#addCourseModal"
                              onClick={() => {
                                showModal();
                              }}
                            >
                              <i className="mdi mdi-plus me-1"></i>
                              Add Admins
                            </button>
                          </div>
                        </Col>
                        {/* <Col className="col-sm">
                                                    <div>
                                                        <button type="button" className="btn btn-success mb-4" data-bs-toggle="modal" data-bs-target="#addCourseModal"
                                                            onClick={
                                                                () => {
                                                                    showClearModal();
                                                                }
                                                            }>
                                                            <i className="mdi mdi-plus me-1"></i>
                                                            Clear Adminss
                                                        </button>
                                                    </div>
                                                </Col> */}
                      </Row>
                    </div>
                  </div>
                  <div id="table-invoices-list">
                    {itemLoader ? (
                      <Loader />
                    ) : (
                      <>
                        <AdminsListTable
                          Adminss={Adminss}
                          setshowconf={setshowconf}
                          setrowdata={setrowdata}
                          courseData={location?.state?.coursedata}
                        />
                      </>
                    )}
                  </div>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>

        <Modal title="add unit" isOpen={isModalOpen}>
          <ModalHeader>
            <CloseButton
              onClick={() => setIsModalOpen(false)}
              style={{ marginLeft: "auto" }}
            />
          </ModalHeader>
          <form
            action="#"
            style={{
              padding: "15px",
              display: "flex",
              flexDirection: "column",
              width: "100%",
              margin: "auto",
              height: "100%",
            }}
            onSubmit={(e) => {
              e.preventDefault();
              handleOk(e);
              setIsModalOpen(false);
            }}
          >
            <div className="input_Field">
              <label forHtml="unit_name">Admin Name</label>
              <Input
                style={{
                  width: "100%",
                  padding: "10px",
                  borderRadius: "4px",
                }}
                type="text"
                name="admin_name"
                id="admin_name"
                placeholder="admin_name"
                required
              />
            </div>
            <div className="input_Field">
              <label forHtml="unit_name">Admin Email</label>
              <Input
                style={{
                  width: "100%",
                  padding: "10px",
                  borderRadius: "4px",
                }}
                type="text"
                name="admin_email"
                id="admin_email"
                placeholder="admin_email"
                required
              />
            </div>

            <div className="input_Field">
              <label forHtml="unit_name">Admin Password</label>
              <Input
                style={{
                  width: "100%",
                  padding: "10px",
                  borderRadius: "4px",
                }}
                type="text"
                name="admin_password"
                id="admin_password"
                placeholder="admin_password"
                required
              />
            </div>
            <button
              className="btn btn-success"
              style={{ margin: "10px 0 0 auto" }}
            >
              {" "}
              Add Admin{" "}
            </button>
          </form>
        </Modal>

        <Modal title="Clear units" isOpen={clear}>
          <form
            action="#"
            style={{
              padding: "15px",
              display: "flex",
              flexDirection: "column",
            }}
            onSubmit={(e) => {
              e.preventDefault();
              // handleOk(e)
              handleClear(e);
              showClear(false);
            }}
          >
            <CloseButton
              onClick={() => showClear(false)}
              style={{ marginLeft: "auto" }}
            />

            <div className="input_Field">
              <h2>Are You Sure ..?</h2>
            </div>
            <button
              className="btn btn-success"
              style={{ margin: "10px 0 0 auto" }}
            >
              {" "}
              Clear{" "}
            </button>
          </form>
        </Modal>
        <ToastContainer />
        {showconf ? (
          <Confirm
            id={rowdata.number}
            cancleoper={() => {
              setshowconf(false);
            }}
            confirmoper={() => {
              const send_data = {
                status: rowdata.status == "no" ? "yes" : "no",
                unit_id: rowdata.unit_id,
              };
              showHideAdmins(send_data);
              setshowconf(false);
            }}
            status={rowdata.status == "no" ? "hide" : "show"}
            comp={"unit"}
          />
        ) : null}
      </div>
    </React.Fragment>
  );
};

export default Admins;
