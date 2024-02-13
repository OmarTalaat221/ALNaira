import React from 'react';
import { Link } from 'react-router-dom';
import { Col, Container, Row, Card, CardBody } from 'reactstrap';

import logosm from "../../assets/images/logo-sm.svg";

const RecoverPassword = () => {
    document.title = "Recover Password | Matary - React Admin & Dashboard Template";

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
                                        <img src={logosm} alt="" height="22" /> <span className="logo-txt ">Matary</span>
                                    </Link>
                                </div>

                                <Card>
                                    <CardBody className="p-4">
                                        <div className="text-center mt-2">
                                            <h5 className="text-primary">Reset Password</h5>
                                            <p className="text-muted">Reset Password with Matary.</p>
                                        </div>
                                        <div className="p-2 mt-4">
                                            <div className="alert alert-success text-center small mb-4" role="alert">
                                                Enter your Email and instructions will be sent to you!
                                            </div>
                                            <form action="/">

                                                <div className="mb-3">
                                                    <label className="form-label" htmlFor="useremail">Email</label>
                                                    <input type="email" className="form-control" id="useremail" placeholder="Enter email" />
                                                </div>

                                                <div className="mt-3 text-end">
                                                    <button className="btn btn-primary w-sm waves-effect waves-light" type="submit">Reset</button>
                                                </div>

                                                <div className="mt-4 text-center">
                                                    <p className="mb-0">Remember It ? <Link to="/auth-login" className="fw-medium text-primary"> Sign in </Link></p>
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

export default RecoverPassword;