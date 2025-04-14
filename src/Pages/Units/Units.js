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
import UnitListTable from "./UnitTable/UnitTableList";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import { useEffect } from "react";
import Confirm from "../../components/ConfComp/Confirm";
import { MenuItem, Select } from "@mui/material";
import { Loader } from "rsuite";
import { base_url } from "../../constants";

const Unit = () => {
  console.log("erre");
  document.title = "Courses | ALNaierh  ";
  const navigate = useNavigate();
  const localdata = localStorage.getItem("elmatary_admin");
  let adminData = localdata && JSON.parse(localdata);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [Units, setUnits] = useState(false);
  const location = useLocation();
  const [itemLoader, setItemLoader] = useState(false);
  const getUnits = async () => {
    setItemLoader(true);
    const send_data = {
      admin_id: adminData.admin_id,
      access_token: adminData.access_token,
      course_id: location?.state?.coursedata?.course_id,
    };
    try {
      const units = await axios.post(
        base_url + "/admin/courses/select_course_units.php",
        send_data
      );
      // console.log(units);
      if (units.status == "success") {
        setUnits([...units.message]);
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
      course_id: location.state.coursedata.course_id,
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
      await getUnits();
      showClear(false);
    } else {
      toast.error(units.message);
    }
  };
  const handleOk = async (e) => {
    const send_data = {
      course_id: location.state.coursedata.course_id,
      unit_name: e.currentTarget.unit_name.value,
      admin_id: adminData.admin_id,
      access_token: adminData.access_token,
    };
    const units = await axios.post(
      base_url + "/admin/courses/add_unit.php",
      send_data
    );
    console.log(units);
    if (units.message == "Session Expired") {
      localStorage.removeItem("elmatary_admin");
      navigate("/login", { replace: true });
    }
    if (units.status) {
      toast.success("Added");
      await getUnits();
    } else {
      toast.error(units.message);
    }
    setIsModalOpen(false);
  };
  useEffect(() => {
    getUnits();
  }, []);

  const [showconf, setshowconf] = useState(false);
  const [rowdata, setrowdata] = useState({});
  const showHideUnit = async (send_data) => {
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
      await getUnits();
    } else {
      toast.error(units.message);
    }
  };

  if (!location.state) {
    return navigate("/enrollments");
  }

  return (
    <React.Fragment>
      <div className="page-content">
        <Container fluid={true}>
          {/* breadcrumbItem={loation?.state?.coursedata?.course_name + " Unit List"} */}
          <Breadcrumbs
            title={location?.state?.coursedata?.course_name}
            breadcrumbItem={"Unit List"}
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
                              Add Unit
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
                                                            Clear Units
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
                        <UnitListTable
                          Units={Units}
                          setshowconf={setshowconf}
                          setrowdata={setrowdata}
                          courseData={location.state.coursedata}
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
              <label forHtml="unit_name">Unit Name</label>
              <Input
                style={{
                  width: "100%",
                  padding: "10px",
                  borderRadius: "4px",
                }}
                type="text"
                name="unit_name"
                id="unit_name"
                placeholder="unit_name"
                required
              />
            </div>
            <button
              className="btn btn-success"
              style={{ margin: "10px 0 0 auto" }}
            >
              {" "}
              Add Unit{" "}
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
              showHideUnit(send_data);
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

export default Unit;
