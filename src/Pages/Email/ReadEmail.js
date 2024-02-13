import React from "react";
import { Card, CardBody, Col, Container, DropdownItem, DropdownMenu, DropdownToggle, Row, UncontrolledDropdown } from "reactstrap";

import avatar2 from '../../assets/images/users/avatar-2.jpg';
import img3 from '../../assets/images/small/img-3.jpg';
import img4 from '../../assets/images/small/img-4.jpg';

//Import Breadcrumb
import Breadcrumbs from "../../components/Common/Breadcrumb";

// Import Sidebar
import EmailSidebar from "./EmailSidebar";
import { Link } from "react-router-dom";

const ReadEmail = () => {
    document.title = "Read Email | Matary - React Admin & Dashboard Template";

    return (
        <React.Fragment>
            <div className="page-content">
                <Container fluid={true}>
                    <Breadcrumbs title="Email" breadcrumbItem="Read Email" />
                    <Row>
                        <Col className="col-12">
                            {/* Sidebar */}
                            <EmailSidebar />
                            <div className="email-rightbar mb-3">

                                <Card>
                                    <div className="btn-toolbar p-3" role="toolbar">
                                        <div className="btn-group me-2 mb-2 mb-sm-0">
                                            <button type="button" className="btn btn-primary waves-light waves-effect"><i className="fa fa-inbox"></i></button>
                                            <button type="button" className="btn btn-primary waves-light waves-effect"><i className="fa fa-exclamation-circle"></i></button>
                                            <button type="button" className="btn btn-primary waves-light waves-effect"><i className="far fa-trash-alt"></i></button>
                                        </div>

                                        <div className="btn-group me-2 mb-2 mb-sm-0">
                                            <UncontrolledDropdown>
                                                <DropdownToggle tag="button" className="btn btn-primary waves-light">
                                                    <i className="fa fa-folder"></i> <i className="mdi mdi-chevron-down ms-1"></i>
                                                </DropdownToggle>
                                                <DropdownMenu>
                                                    <DropdownItem>Updates</DropdownItem>
                                                    <DropdownItem>Social</DropdownItem>
                                                    <DropdownItem>Team Manage</DropdownItem>
                                                </DropdownMenu>
                                            </UncontrolledDropdown>
                                        </div>

                                        <div className="btn-group me-2 mb-2 mb-sm-0">
                                            <UncontrolledDropdown>
                                                <DropdownToggle tag="button" className="btn btn-primary waves-light">
                                                    <i className="fa fa-tag"></i> <i className="mdi mdi-chevron-down ms-1"></i>
                                                </DropdownToggle>
                                                <DropdownMenu>
                                                    <DropdownItem>Updates</DropdownItem>
                                                    <DropdownItem>Social</DropdownItem>
                                                    <DropdownItem>Team Manage</DropdownItem>
                                                </DropdownMenu>
                                            </UncontrolledDropdown>
                                        </div>

                                        <div className="btn-group me-2 mb-2 mb-sm-0">
                                            <UncontrolledDropdown>
                                                <DropdownToggle tag="button" className="btn btn-primary waves-light">
                                                    More <i className="mdi mdi-dots-vertical ms-2"></i>
                                                </DropdownToggle>
                                                <DropdownMenu>
                                                    <DropdownItem>Mark as Unread</DropdownItem>
                                                    <DropdownItem>Mark as Important</DropdownItem>
                                                    <DropdownItem>Add to Tasks</DropdownItem>
                                                    <DropdownItem>Add Star</DropdownItem>
                                                    <DropdownItem>Mute</DropdownItem>
                                                </DropdownMenu>
                                            </UncontrolledDropdown>
                                        </div>
                                    </div>

                                    <CardBody>
                                        <div className="d-flex align-items-start mb-4">
                                            <div className="flex-shrink-0 me-3">
                                                <img className="rounded-circle avatar" src={avatar2} alt="Generic placeholder" />
                                            </div>
                                            <div className="flex-grow-1">
                                                <h5 className="font-size-14 my-1">Humberto D. Champion</h5>
                                                <small className="text-muted">support@domain.com</small>
                                            </div>
                                        </div>

                                        <h4 className="font-size-16">This Week's Top Stories</h4>

                                        <p>Dear Lorem Ipsum,</p>
                                        <p>Praesent dui ex, dapibus eget mauris ut, finibus vestibulum enim. Quisque arcu leo, facilisis in fringilla id, luctus in tortor. Nunc vestibulum est quis orci varius viverra. Curabitur dictum volutpat massa vulputate molestie. In at felis ac velit maximus convallis.
                                        </p>
                                        <p>Sed elementum turpis eu lorem interdum, sed porttitor eros commodo. Nam eu venenatis tortor, id lacinia diam. Sed aliquam in dui et porta. Sed bibendum orci non tincidunt ultrices. Vivamus fringilla, mi lacinia dapibus condimentum, ipsum urna lacinia lacus, vel tincidunt mi nibh sit amet lorem.</p>
                                        <p>Sincerly,</p>
                                        <hr />

                                        <Row>
                                            <Col xl={2} className="col-6">
                                                <div className="card border shadow-none">
                                                    <img className="card-img-top img-fluid" src={img3} alt="Card cap" />
                                                    <div className="py-2 text-center">
                                                        <Link to="#" className="fw-medium">Download</Link>
                                                    </div>
                                                </div>
                                            </Col>
                                            <Col xl={2} className="col-6">
                                                <div className="card border shadow-none">
                                                    <img className="card-img-top img-fluid" src={img4} alt="Card cap" />
                                                    <div className="py-2 text-center">
                                                        <Link to="#" className="fw-medium">Download</Link>
                                                    </div>
                                                </div>
                                            </Col>
                                        </Row>
                                        <Link to="#" className="btn btn-secondary waves-effect mt-4"><i className="mdi mdi-reply"></i> Reply</Link>
                                    </CardBody>
                                </Card>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </React.Fragment>
    );
};

export default ReadEmail;