import React from 'react';
import { Link } from 'react-router-dom';
import { Col, Container, Row, Card, CardBody } from 'reactstrap';

import logosm from "../../assets/images/logo-sm.svg";

const Register = () => {
    document.title = "Register | Matary - React Admin & Dashboard Template";

    return (
        <React.Fragment>
            <div className="authentication-bg min-vh-100">
                <div className="bg-overlay"></div>
                <Container>
                    <div className="d-flex flex-column min-vh-100 px-3 pt-4">
                        <Row className="justify-content-center my-auto">
                            <Col md={8} lg={6} xl={5} >

                                <div className="text-center mb-4">
                                    <Link to="/">
                                        <img src={logosm} alt="" height="22" /> <span className="logo-txt">Matary</span>
                                    </Link>
                                </div>

                                <Card>
                                    <CardBody className="p-4">
                                        <div className="text-center mt-2">
                                            <h5 className="text-primary">Register Account</h5>
                                            <p className="text-muted">Get your free Matary account now.</p>
                                        </div>
                                        <div className="p-2 mt-4">
                                            <form action="/">

                                                <div className="mb-3">
                                                    <label className="form-label" htmlFor="useremail">Email</label>
                                                    <input type="email" className="form-control" id="useremail" placeholder="Enter email" />
                                                </div>

                                                <div className="mb-3">
                                                    <label className="form-label" htmlFor="username">Username</label>
                                                    <input type="text" className="form-control" id="username" placeholder="Enter username" />
                                                </div>

                                                <div className="mb-3">
                                                    <label className="form-label" htmlFor="userpassword">Password</label>
                                                    <input type="password" className="form-control" id="userpassword" placeholder="Enter password" />
                                                </div>

                                                <div className="form-check">
                                                    <input type="checkbox" className="form-check-input" id="auth-terms-condition-check" />
                                                    <label className="form-check-label" htmlFor="auth-terms-condition-check">I accept <Link to="#" className="text-dark">Terms and Conditions</Link></label>
                                                </div>

                                                <div className="mt-3 text-end">
                                                    <button className="btn btn-primary w-sm waves-effect waves-light" type="submit">Register</button>
                                                </div>

                                                <div className="mt-4 text-center">
                                                    <div className="signin-other-title">
                                                        <h5 className="font-size-14 mb-3 title">Sign in with</h5>
                                                    </div>

                                                    <ul className="list-inline">
                                                        <li className="list-inline-item">
                                                            <Link to="#" className="social-list-item bg-primary text-white border-primary">
                                                                <i className="mdi mdi-facebook"></i>
                                                            </Link>
                                                        </li>
                                                        <li className="list-inline-item">
                                                            <Link to="#" className="social-list-item bg-info text-white border-info">
                                                                <i className="mdi mdi-twitter"></i>
                                                            </Link>
                                                        </li>
                                                        <li className="list-inline-item">
                                                            <Link to="#" className="social-list-item bg-danger text-white border-danger">
                                                                <i className="mdi mdi-google"></i>
                                                            </Link>
                                                        </li>
                                                    </ul>
                                                </div>

                                                <div className="mt-4 text-center">
                                                    <p className="text-muted mb-0">Already have an account ? <Link to="/auth-login" className="fw-medium text-primary"> Login</Link></p>
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

export default Register;