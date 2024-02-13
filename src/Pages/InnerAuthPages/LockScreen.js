import React from 'react';
import { Link } from 'react-router-dom';
import { Col, Container, Row, Card, CardBody } from 'reactstrap';

import logosm from "../../assets/images/logo-sm.svg";
import avatar1 from "../../assets/images/users/avatar-1.jpg";

const LockScreen = () => {
    document.title = "Lock Screen | Matary - React Admin & Dashboard Template";

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
                                        <div className="text-center mt-2">
                                            <h5 className="text-primary">Lock Screen</h5>
                                            <p className="text-muted">Enter your password to unlock the screen!</p>
                                        </div>
                                        <div className="p-2 mt-4">
                                            <div className="user-thumb text-center mb-4">
                                                <img src={avatar1} className="rounded-circle img-thumbnail avatar-lg" alt="thumbnail" />
                                                <h5 className="font-size-15 mt-3">Peter Kelsey</h5>
                                            </div>
                                            <form action="/">

                                                <div className="mb-3">
                                                    <label className="form-label" htmlFor="userpassword">Password</label>
                                                    <input type="password" className="form-control" id="userpassword" placeholder="Enter password" />
                                                </div>

                                                <div className="mt-3 text-end">
                                                    <button className="btn btn-primary w-sm waves-effect waves-light" type="submit">Unlock</button>
                                                </div>

                                                <div className="mt-4 text-center">
                                                    <p className="mb-0">Not you ? return <Link to="/auth-login" className="fw-medium text-primary"> Sign In </Link></p>
                                                </div>
                                            </form>
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

export default LockScreen;