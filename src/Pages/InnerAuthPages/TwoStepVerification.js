import React from 'react';
import { Link } from 'react-router-dom';
import { Col, Container, Row, Card, CardBody } from 'reactstrap';

import logosm from "../../assets/images/logo-sm.svg";

const TwoStepVerification = () => {
    document.title = "Two Step Verification | Matary - React Admin & Dashboard Template";

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
                                        <div className="avatar-lg mx-auto">
                                            <div className="avatar-title rounded-circle bg-light">
                                                <i className="bx bxs-envelope h2 mb-0 text-primary"></i>
                                            </div>
                                        </div>
                                        <div className="p-2 mt-4">
                                            <div className="text-center">
                                                <h4>Verify your email</h4>
                                                <p className="mb-5">Please enter the 4 digit code sent to <span className="fw-bold">example@abc.com</span></p>
                                            </div>

                                            <form>
                                                <Row>
                                                    <Col className="col-3">
                                                        <div className="mb-3">
                                                            <label htmlFor="digit1-input" className="visually-hidden">Dight 1</label>
                                                            <input type="text"
                                                                className="form-control form-control-lg text-center two-step"
                                                                maxLength="1"
                                                                data-value="1"
                                                                id="digit1-input" />
                                                        </div>
                                                    </Col>

                                                    <div className="col-3">
                                                        <div className="mb-3">
                                                            <label htmlFor="digit2-input" className="visually-hidden">Dight 2</label>
                                                            <input type="text"
                                                                className="form-control form-control-lg text-center two-step"
                                                                maxLength="1"
                                                                data-value="2"
                                                                id="digit2-input" />
                                                        </div>
                                                    </div>

                                                    <Col className="col-3">
                                                        <div className="mb-3">
                                                            <label htmlFor="digit3-input" className="visually-hidden">Dight 3</label>
                                                            <input type="text"
                                                                className="form-control form-control-lg text-center two-step"
                                                                maxLength="1"
                                                                data-value="3"
                                                                id="digit3-input" />
                                                        </div>
                                                    </Col>

                                                    <Col className="col-3">
                                                        <div className="mb-3">
                                                            <label htmlFor="digit4-input" className="visually-hidden">Dight 4</label>
                                                            <input type="text"
                                                                className="form-control form-control-lg text-center two-step"
                                                                maxLength="1"
                                                                data-value="4"
                                                                id="digit4-input" />
                                                        </div>
                                                    </Col>
                                                </Row>
                                                <div className="mt-3">
                                                    <button className="btn btn-primary w-100 waves-effect waves-light" type="submit">Confirm</button>
                                                </div>
                                            </form>

                                            <div className="mt-5 text-center">
                                                <p className="text-muted mb-0">Didn't receive an email ? <Link to="#"
                                                    className="text-primary fw-semibold"> Resend </Link> </p>
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

export default TwoStepVerification;