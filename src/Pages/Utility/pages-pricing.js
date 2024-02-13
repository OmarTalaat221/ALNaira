import React from 'react';
import { Link } from 'react-router-dom';

import { Container, Row, Col, Card, CardBody } from 'reactstrap';
import Breadcrumbs from '../../components/Common/Breadcrumb';
const PricingPage = () => {
    document.title = "Pricing | Matary - React Admin & Dashboard Template";

    return (
        <React.Fragment>
            <div className="page-content">
                <Container fluid={true}>
                    <Breadcrumbs title="Utility" breadcrumbItem="Pricing" />

                    <Row className="justify-content-center">
                        <Col lg={5}>
                            <div className="text-center mb-5">
                                <h4>Choose your Pricing plan</h4>
                                <p className="text-muted mb-4">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo veritatis</p>
                            </div>
                        </Col>
                    </Row>

                    <Row className="justify-content-center">
                        <Col lg={9}>
                            <Row>
                                <Col xl={4}>
                                    <Card className="pricing-box text-center">
                                        <CardBody className="p-4">
                                            <div>
                                                <div className="mt-3 mb-2">
                                                    <h5 className="mb-1">Starter</h5>
                                                    <p className="text-muted pb-2">Starter plans</p>
                                                </div>

                                                <div className="avatar-md mx-auto my-4">
                                                    <div className="avatar-title rounded-circle bg-soft-primary text-primary font-size-22">
                                                        <i className="bx bx-edit h2 text-primary mb-0"></i>
                                                    </div>
                                                </div>
                                            </div>

                                            <ul className="list-unstyled plan-features mt-2">
                                                <li>Users: <span className="text-primary fw-semibold">1</span></li>
                                                <li>Storage: <span className="text-primary fw-semibold">01 GB</span></li>
                                                <li>Domain: <span className="text-primary fw-semibold">No</span></li>
                                                <li>Support: <span className="text-primary fw-semibold">No</span></li>
                                                <li>Setup: <span className="text-primary fw-semibold">No</span></li>
                                            </ul>

                                            <div className="py-4">
                                                <h3><sup><small>$</small></sup> 19/ <span className="font-size-13 text-muted">Per month</span></h3>
                                            </div>
                                            <div className="text-center plan-btn my-2">
                                                <Link to="#" className="btn btn-primary waves-effect waves-light">Sign up Now</Link>
                                            </div>
                                        </CardBody>
                                    </Card>
                                </Col>
                                <Col xl={4}>
                                    <Card className="pricing-box product-box text-center">
                                        <div className="product-ribbon">
                                            Popular
                                        </div>
                                        <CardBody className="p-4">
                                            <div>
                                                <div className="mt-3">
                                                    <h5 className="mb-1">Professional</h5>
                                                    <p className="text-muted pb-2">Professional plans</p>
                                                </div>

                                                <div className="avatar-md mx-auto my-4">
                                                    <div className="avatar-title rounded-circle bg-soft-primary text-primary font-size-22">
                                                        <i className="bx bx-trophy h2 text-primary mb-0"></i>
                                                    </div>
                                                </div>
                                            </div>

                                            <ul className="list-unstyled plan-features mt-3">
                                                <li>Users: <span className="text-primary fw-semibold">3</span></li>
                                                <li>Storage: <span className="text-primary fw-semibold">10 GB</span></li>
                                                <li>Domain: <span className="text-primary fw-semibold">1</span></li>
                                                <li>Support: <span className="text-primary fw-semibold">Yes</span></li>
                                                <li>Setup: <span className="text-primary fw-semibold">No</span></li>
                                            </ul>

                                            <div className="py-4">
                                                <h3><sup><small>$</small></sup> 29/ <span className="font-size-13 text-muted">Per month</span></h3>
                                            </div>

                                            <div className="text-center plan-btn my-2">
                                                <Link to="#" className="btn btn-primary waves-effect waves-light">Sign up Now</Link>
                                            </div>
                                        </CardBody>
                                    </Card>
                                </Col>

                                <Col xl={4}>
                                    <Card className="pricing-box text-center">
                                        <CardBody className="p-4">
                                            <div>
                                                <div className="mt-3">
                                                    <h5 className="mb-1">Unlimited</h5>
                                                    <p className="text-muted pb-2">Unlimited plans</p>
                                                </div>

                                                <div className="avatar-md mx-auto my-4">
                                                    <div className="avatar-title rounded-circle bg-soft-primary text-primary font-size-22">
                                                        <i className="bx bx-layer h2 text-primary mb-0"></i>
                                                    </div>
                                                </div>
                                            </div>

                                            <ul className="list-unstyled plan-features mt-3">
                                                <li>Users: <span className="text-primary fw-semibold">5</span></li>
                                                <li>Storage: <span className="text-primary fw-semibold">40 GB</span></li>
                                                <li>Domain: <span className="text-primary fw-semibold">4</span></li>
                                                <li>Support: <span className="text-primary fw-semibold">Yes</span></li>
                                                <li>Setup: <span className="text-primary fw-semibold">Yes</span></li>
                                            </ul>

                                            <div className="py-4">
                                                <h3><sup><small>$</small></sup> 49/ <span className="font-size-13 text-muted">Per month</span></h3>
                                            </div>

                                            <div className="text-center plan-btn my-2">
                                                <Link to="#" className="btn btn-primary waves-effect waves-light">Sign up Now</Link>
                                            </div>
                                        </CardBody>
                                    </Card>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Container>
            </div>
        </React.Fragment >
    );
};

export default PricingPage;