import React, { useState } from 'react';
import { Card, CardBody, Col, Container, Row, Toast, ToastHeader, ToastBody, CardHeader } from 'reactstrap';

//Import Breadcrumb
import Breadcrumbs from "../../components/Common/Breadcrumb";

// Import Images
import logosm from '../../assets/images/logo-sm.svg';

const ExNotification = () => {
    document.title = "Notification | Matary - React Admin & Dashboard Template";

    const [toast1, settoast1] = useState(true);
    const [toast2, settoast2] = useState(true);
    const [toast3, settoast3] = useState(true);
    const [toast4, settoast4] = useState(true);
    const [toast5, settoast5] = useState(true);

    const toggleToast1 = () => {
        settoast1(!toast1);
    };

    const toggleToast2 = () => {
        settoast2(!toast2);
    };

    const toggleToast3 = () => {
        settoast3(!toast3);
    };

    const toggleToast4 = () => {
        settoast4(!toast4);
    };

    const toggleToast5 = () => {
        settoast5(!toast5);
    };

    return (
        <React.Fragment>

            <div className="page-content">
                <Container fluid={true}>
                    <Breadcrumbs title="Extended" breadcrumbItem="Notification" />


                    <Row>
                        <Col className="col-12">
                            <Card>
                                <CardHeader>
                                    <h4 className="card-title">Toast Notifications</h4>
                                    <p className="card-title-desc">Toasts are lightweight notifications designed to mimic the push notifications</p>
                                </CardHeader>
                                <CardBody>

                                    <Row>
                                        <Col lg={6}>
                                            <div className="p-2">
                                                <h5 className="font-size-14">Basic</h5>
                                                <p className="card-title-desc mb-3">
                                                    Toasts are as flexible as you need and have very little required markup.
                                                    At a minimum, we require a single element to contain your
                                                    “toasted” content and strongly encourage a dismiss button.
                                                </p>
                                                <Toast isOpen={toast1} className="toast fade show" role="alert">
                                                    <ToastHeader toggle={toggleToast1} className="toast-header">
                                                        <img src={logosm} alt="" className="me-2" height="18" />
                                                        <strong className="me-auto">Matary</strong>
                                                        <small className="text-muted" style={{marginLeft: "157px"}}>11 mins ago</small>

                                                    </ToastHeader>
                                                    <ToastBody>
                                                        Hello, world! This is a toast message.
                                                    </ToastBody>
                                                </Toast>
                                            </div>
                                        </Col>

                                        <Col lg={6}>
                                            <div className="p-2">
                                                <h5 className="font-size-14">Translucent</h5>
                                                <p className="card-title-desc mb-3">
                                                    Toasts are slightly translucent, too, so they blend over
                                                    whatever they might appear over. For browsers that
                                                    support the <code>backdrop-filter</code> CSS property,
                                                    we'll also attempt to blur the elements under a toast.
                                                </p>
                                                <div className="bg-soft-light p-3">

                                                    <Toast isOpen={toast2} className="toast fade show" role="alert">
                                                        <ToastHeader toggle={toggleToast2} className="toast-header">
                                                            <img src={logosm} alt="" className="me-2" height="18" />
                                                            <strong className="me-auto">Matary</strong>
                                                            <small className="text-muted" style={{marginLeft: "157px"}}>11 mins ago</small>

                                                        </ToastHeader>
                                                        <ToastBody>
                                                            Hello, world! This is a toast message.
                                                        </ToastBody>
                                                    </Toast>

                                                </div>
                                            </div>
                                        </Col>
                                    </Row>

                                    <Row>
                                        <Col lg={6}>
                                            <div className="p-2 mt-4">
                                                <h5 className="font-size-14">Stacking</h5>
                                                <p className="card-title-desc mb-3">
                                                    For systems that generate more notifications, consider using a wrapping element
                                                    so they can easily stack.
                                                </p>
                                                <div className="bg-soft-light">
                                                    <div aria-live="polite" aria-atomic="true" className="position-relative" style={{ minHeight: "230px" }}>
                                                        <div className="toast-container position-absolute top-0 end-0 p-2 p-lg-3">
                                                            <Toast isOpen={toast3} className="toast fade show" role="alert">
                                                                <ToastHeader toggle={toggleToast3} className="toast-header">
                                                                    <img src={logosm} alt="" className="me-2" height="18" />
                                                                    <strong className="me-auto">Matary</strong>
                                                                    <small className="text-muted" style={{marginLeft: "175px"}}>just now</small>

                                                                </ToastHeader>
                                                                <ToastBody>
                                                                    See? Just like this.
                                                                </ToastBody>
                                                            </Toast>

                                                            <Toast isOpen={toast4} className="toast fade show" role="alert">
                                                                <ToastHeader toggle={toggleToast4} className="toast-header">
                                                                    <img src={logosm} alt="" className="me-2" height="18" />
                                                                    <strong className="me-auto">Matary</strong>
                                                                    <small className="text-muted" style={{marginLeft: "170px"}}>2 sec ago</small>

                                                                </ToastHeader>
                                                                <ToastBody>
                                                                    Heads up, toasts will stack automatically
                                                                </ToastBody>
                                                            </Toast>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </Col>

                                        <Col lg={6}>
                                            <div className="p-2 mt-4">
                                                <h5 className="font-size-14">Placement</h5>
                                                <p className="card-title-desc mb-3">
                                                    You can also get fancy with flexbox utilities to align toasts horizontally
                                                    and/or vertically.
                                                </p>
                                                <div className="bg-soft-light p-2 p-lg-3">
                                                    <div aria-live="polite" aria-atomic="true" className="d-flex justify-content-center align-items-center w-100" style={{ minHeight: "200px" }}>

                                                        <Toast isOpen={toast5} className="toast fade show" role="alert">
                                                            <ToastHeader toggle={toggleToast5} className="toast-header">
                                                                <img src={logosm} alt="" className="me-2" height="18" />
                                                                <strong className="me-auto">Matary</strong>
                                                                <small style={{marginLeft: "165px"}}>9 min ago</small>
                                                            </ToastHeader>
                                                            <ToastBody>
                                                                Hello, world! This is a toast message.
                                                            </ToastBody>
                                                        </Toast>

                                                    </div>
                                                </div>
                                            </div>
                                        </Col>
                                    </Row>
                                </CardBody>
                            </Card>

                        </Col>
                    </Row>
                </Container>
            </div>
        </React.Fragment>
    );
};

export default ExNotification;