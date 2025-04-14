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
} from "reactstrap";

// Import Flatepicker
import "flatpickr/dist/themes/material_blue.css";
import Flatpickr from "react-flatpickr";

// Breadcrumb
import Breadcrumbs from "../../../components/Common/Breadcrumb";
import UnitListTable from "./UnitTable/UnitTableList";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import { useEffect } from "react";
import Confirm from "../../../components/ConfComp/Confirm";
import { MenuItem, Select } from "@mui/material";
import { Loader } from "rsuite";

const CallCenter = () => {
  document.title = "Courses | ALNaierh  ";
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [Units, setUnits] = useState(false);
  const location = useLocation();
  const [itemLoader, setItemLoader] = useState(false);
  const getUnits = async () => {
    setItemLoader(true);

    try {
      const units = await axios.get(
        "https://elmatary.com/El_Matary_Platform/platform/user/home/setting/select_call_center.php"
      );
      setUnits([...units?.message]);
      setItemLoader(false);
    } catch (err) {
      console.log(err);
      setItemLoader(false);
    }
  };

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = async (e) => {
    const send_data = {
      type: e?.currentTarget?.call_center_title?.value,
      value: e?.currentTarget?.call_center_value?.value,
    };
    console.log(send_data);
    const units = await axios.post(
      "https://camp-coding.online/Teacher_App_2025/elnaira_jor/admin/info/add_call_center.php",
      send_data
    );
    if (units.status == "success") {
      toast.success("Added");
      getUnits();
      setIsModalOpen(false);
    } else {
      toast.error(units.message);
    }
  };

  const deleteCallCenter = async (e) => {
    const units = await axios.post(
      "https://camp-coding.online/Teacher_App_2025/elnaira_jor/admin/info/delete_call_center_item.php",
      { id: rowdata?.id }
    );
    console.log(units);
    if (units.status == "success") {
      toast.success("Deleted");
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
    const units = await axios.post(
      "https://camp-coding.online/Teacher_App_2025/elnaira_jor/admin/courses/show_hide_unit.php",
      JSON.stringify(send_data)
    );
    if (units.status) {
      toast.success(units.message);
      await getUnits();
    } else {
      toast.error(units.message);
    }
  };

  return (
    <>
      <div className="page-content">
        <Container fluid={true}>
          {/* breadcrumbItem={loation?.state?.coursedata?.course_name + " Unit List"} */}
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
                              Add Call Center
                            </button>
                          </div>
                        </Col>
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

        <Modal title="Add Call Center" isOpen={isModalOpen}>
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
            }}
          >
            <CloseButton
              onClick={() => setIsModalOpen(false)}
              style={{ marginLeft: "auto" }}
            />

            <div className="input_Field">
              <label forHtml="unit_name">Call Center Title</label>
              <Input
                style={{
                  width: "100%",
                  padding: "10px",
                  borderRadius: "4px",
                }}
                type="text"
                name="call_center_title"
                id="call_center_title"
                placeholder="call_center_title"
                required
              />
            </div>
            <div className="input_Field">
              <label forHtml="unit_name">Call Center Value</label>
              <Input
                style={{
                  width: "100%",
                  padding: "10px",
                  borderRadius: "4px",
                }}
                type="text"
                name="call_center_value"
                id="call_center_value"
                placeholder="call_center_value"
                required
              />
            </div>
            <button
              className="btn btn-success"
              style={{ margin: "10px 0 0 auto" }}
            >
              {" "}
              Add Call Center{" "}
            </button>
          </form>
        </Modal>
        <ToastContainer />
        <Modal title="Delete Call Center" isOpen={showconf}>
          <form
            action="#"
            style={{
              padding: "15px",
              display: "flex",
              flexDirection: "column",
            }}
            onSubmit={(e) => {
              e.preventDefault();
              deleteCallCenter(e);
              setshowconf(false);
            }}
          >
            <CloseButton
              onClick={() => setshowconf(false)}
              style={{ marginLeft: "auto" }}
            />
            <h4>Are You Sure Delete This Call Center ?</h4>

            <button
              className="btn btn-danger"
              style={{ margin: "10px 0 0 auto" }}
            >
              {" "}
              Delete Call Center{" "}
            </button>
          </form>
        </Modal>
      </div>
    </>
  );
};

export default CallCenter;
