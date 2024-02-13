import React from 'react';

import { Card, Container, Row, Col, CardBody } from 'reactstrap';
import { Link } from 'react-router-dom';
// Import Images
import logosm from "../../assets/images/logo-sm.svg";
import maintenance from "../../assets/images/maintenance.png";
import bgImage from "../../assets/images/auth-bg.jpg";


const MaintenancePage = () => {
    document.title = "Maintenance | Matary - React Admin & Dashboard Template";

    return (
        <React.Fragment>
            <div className="authentication-bg min-vh-100" style={{ background : `url(${bgImage}) bottom`}}>
                <div className="bg-overlay bg-light"></div>
                <Container>
                    <Row>
                        <Col className="col-12">
                            <div className="home-wrapper text-center">
                                <Link to="/" className="auth-logo">
                                    <span className="logo-lg">
                                        <img src={logosm} alt="" height="22" /> 
                                        <span className="logo-txt">Matary</span>
                                    </span>
                                </Link>
                                <h3 className="mt-3">Site is Under Maintenance</h3>
                                <p>Please check back in sometime.</p>
                            </div>
                        </Col>
                    </Row>
                    <Row className="mt-5 pt-5 align-items-center">
                        <Col lg={5}>
                            <div className="mt-4">
                                <img src={maintenance} className="img-fluid" alt="" />
                            </div>
                        </Col>
                        <Col lg={6} className="ms-lg-auto">
                            <Card className="mt-4 maintenance-box">
                                <CardBody>
                                    <div className="d-flex">
                                        <h5 className="text-primary">01.</h5>
                                        <div className="flex-1 ms-3">
                                            <h5 className="font-size-16">Why is the Site Down?</h5>
                                            <p className="text-muted mb-0">There are many variations of passages of
                                                Lorem Ipsum available, but the majority have suffered alteration.</p>
                                        </div>
                                    </div>
                                </CardBody>
                            </Card>

                            <Card className="mt-4 maintenance-box">
                                <CardBody>
                                    <div className="d-flex">
                                        <h5 className="text-primary">02.</h5>
                                        <div className="flex-1 ms-3">
                                            <h5 className="font-size-16">
                                                What is the Downtime?</h5>
                                            <p className="text-muted mb-0">Contrary to popular belief, Lorem Ipsum is not
                                                simply random text. It has roots in a piece of classical.</p>
                                        </div>
                                    </div>
                                </CardBody>
                            </Card>

                            <Card className="mt-4 maintenance-box">
                                <CardBody>
                                    <div className="d-flex">
                                        <h5 className="text-primary">03.</h5>
                                        <div className="flex-1 ms-3">
                                            <h5 className="font-size-16">
                                                Do you need Support?</h5>
                                            <p className="text-muted mb-0">If you are going to use a passage of Lorem
                                                Ipsum, you need to be sure there isn't anything embar.. <Link
                                                    to="mailto:no-reply@domain.com"
                                                    className="text-decoration-underline">no-reply@domain.com</Link></p>
                                        </div>
                                    </div>

                                </CardBody>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </div>
        </React.Fragment >
    );
};

export default MaintenancePage;