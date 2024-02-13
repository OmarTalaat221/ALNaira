import React, { useState } from "react";
import { Link } from "react-router-dom";

import { Card, CardBody, Col, Container, Row, Modal } from "reactstrap";

//Import Breadcrumb
import Breadcrumbs from "../../components/Common/Breadcrumb";

import UserListTable from "./ContactTable/userListTable";

const UserList = () => {
    document.title = "User List | Matary - React Admin & Dashboard Template";


    const [modal_user, setmodal_user] = useState(false);
    const [modal_success, setmodal_success] = useState(false);

    function tog_user() {
        setmodal_user(!modal_user);
    }
    function tog_success() {
        setmodal_success(!modal_success);
    }

    return (
        <React.Fragment>

            <div className="page-content">
                <Container fluid={true}>
                    <Breadcrumbs title="Contacts" breadcrumbItem="User List" />
                    <Row>
                        <Col lg={12}>
                            <Card>
                                <CardBody>
                                    <div className="position-relative">
                                        <div className="modal-button mt-2">
                                            <Link to="#" data-bs-toggle="modal" data-bs-target=".add-new" className="btn btn-success waves-effect waves-light" onClick={() => { tog_user() }}><i className="mdi mdi-plus me-2"></i> Add New</Link>
                                        </div>
                                    </div>

                                    <div id="table-contacts-list">

                                        <UserListTable />

                                    </div>

                                </CardBody>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </div>

            {/* Contact List Modal*/}

            <Modal size="xl" isOpen={modal_user} toggle={() => { tog_user(); }} className="add-new" centered >
                <div className="modal-header">
                    <h5 className="modal-title" id="myExtraLargeModalLabel" > Add New </h5>
                    <button onClick={() => { setmodal_user(false); }} type="button" className="btn-close" aria-label="Close" >
                    </button>
                </div>
                <div className="modal-body">
                    <Row>
                        <Col md={6}>
                            <div className="mb-3">
                                <label className="form-label" htmlFor="AddNew-Username">Username</label>
                                <input type="text" className="form-control" placeholder="Enter Username" id="AddNew-Username" />
                            </div>
                        </Col>
                        <Col md={6}>
                            <div className="mb-3">
                                <label className="form-label">Position</label>
                                <select className="form-select">
                                    <option defaultValue>Select Position</option>
                                    <option>Full Stack Developer</option>
                                    <option>Frontend Developer</option>
                                    <option>UI/UX Designer</option>
                                    <option>Backend Developer</option>
                                </select>
                            </div>
                        </Col>
                        <Col md={6}>
                            <div className="mb-3">
                                <label className="form-label" htmlFor="AddNew-Email">Email</label>
                                <input type="text" className="form-control" placeholder="Enter Email" id="AddNew-Email" />
                            </div>
                        </Col>
                        <Col md={6}>
                            <div className="mb-3">
                                <label className="form-label" htmlFor="AddNew-Phone">Phone</label>
                                <input type="text" className="form-control" placeholder="Enter Phone" id="AddNew-Phone" />
                            </div>
                        </Col>
                    </Row>
                    <Row className="mt-2">
                        <Col className="col-12 text-end">
                            <button type="button" className="btn btn-danger me-2" data-bs-dismiss="modal" onClick={() => { setmodal_user(false); }}><i className="bx bx-x me-1"></i> Cancel</button>
                            <button type="submit" className="btn btn-success" data-bs-toggle="modal" onClick={() => { setmodal_success(true); setmodal_user(false); }} data-bs-target="#success-btn" id="btn-save-event"><i className="bx bx-check me-1"></i> Confirm</button>
                        </Col>
                    </Row>
                </div>
            </Modal>

            <Modal isOpen={modal_success} toggle={() => { tog_success(); }} id="success-btn" centered >
                <div className="modal-body">
                    <div className="text-center">
                        <i className="bx bx-check-circle display-1 text-success"></i>
                        <h3 className="mt-3">User Added Successfully</h3>
                    </div>
                </div>
            </Modal>


            
        </React.Fragment >
    );
};

export default UserList;
