import React from 'react';
import { Link } from 'react-router-dom';
import { Col, Container, Row, Card, CardBody } from 'reactstrap';

import logosm from "../../assets/images/logo-sm.svg";

const ConfirmMail = () => {
    document.title = "Confirm Mail | Matary - React Admin & Dashboard Template";

    return (
        <React.Fragment>
            <div className="authentication-bg min-vh-100">
                <div className="bg-overlay"></div>
                <Container>
                    <div className="d-flex flex-column min-vh-100 px-3 pt-4">
                        <Row className="justify-content-center my-auto">
                            <Col md={8} lg={6} xl={5}>
                                <div className="text-center mb-4">
                                    <Link to="/">
                                        <img src={logosm} alt="" height="22" /> <span className="logo-txt">Matary</span>
                                    </Link>
                                </div>
                                <Card>
                                    <CardBody className="p-4">
                                        <div className="text-center mt-3">
                                            <div className="avatar-lg mx-auto">
                                                <div className="avatar-title rounded-circle bg-light">
                                                    <i className="bx bx-mail-send h2 mb-0 text-primary"></i>
                                                </div>
                                            </div>
                                            <div className="mt-4 pt-2">
                                                <h4>Success !</h4>
                                                <p className="text-muted">At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et</p>
                                                <div className="mt-4">
                                                    <Link to="/" className="btn btn-primary w-100">Back to Home</Link>
                                                </div>
                                            </div>
                                        </div>
                                    </CardBody>
                                </Card>
                            </Col>
                        </Row>
                        <Row>
                            <Col lg={12}>
                                <div className="text-center text-muted p-4">
                                    <p className="text-white-50">© {new Date().getFullYear()} Matary. Crafted with <i className="mdi mdi-heart text-danger"></i> by Camp Coding</p>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </Container>
            </div>
        </React.Fragment>
    )
}

export default ConfirmMail;

