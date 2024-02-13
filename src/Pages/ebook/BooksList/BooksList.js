import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
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
} from "reactstrap";

//Import Flatepicker
import "flatpickr/dist/themes/material_blue.css";
import Flatpickr from "react-flatpickr";

// Breadcrumb
import Breadcrumbs from "../../../components/Common/Breadcrumb";
import BookListTable from "./BookTable/bookListTable";


const Books = () => {
  document.title = "Books | Matary - React Admin & Dashboard Template";

 

  const navigate = useNavigate();

  return (
    <React.Fragment>
      <div className="page-content">
        <Container fluid={true}>
          <Breadcrumbs title="Books" breadcrumbItem="Book List" />

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
                              data-bs-target="#addBookModal"
                              onClick={() => {
                                navigate("add-book")
                              }}
                            >
                              <i className="mdi mdi-plus me-1"></i> Add Book
                            </button>
                          </div>
                        </Col>
                        <Col className="col-sm-auto">
                          <div className="d-flex gap-1">
                            <div className="input-group">
                              <Flatpickr
                                className="form-control"
                                placeholder="dd M, yyyy"
                                options={{
                                  mode: "range",
                                  dateFormat: "Y-m-d",
                                }}
                                id="datepicker-range"
                              />
                              <span className="input-group-text">
                                <i className="bx bx-calendar-event"></i>
                              </span>
                            </div>

                            <UncontrolledDropdown
                              className="dropdown"
                              direction="start"
                            >
                              <DropdownToggle
                                tag="a"
                                className="btn btn-link text-body shadow-none"
                              >
                                <i className="bx bx-dots-horizontal-rounded"></i>
                              </DropdownToggle>
                              <DropdownMenu className="dropdown-menu-end">
                                <DropdownItem>Action</DropdownItem>
                                <DropdownItem>Another action</DropdownItem>
                                <DropdownItem>Something else here</DropdownItem>
                              </DropdownMenu>
                            </UncontrolledDropdown>
                          </div>
                        </Col>
                      </Row>
                    </div>
                  </div>
                  <div id="table-invoices-list">
                    <BookListTable />
                  </div>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>

    </React.Fragment>
  );
};

export default Books;
