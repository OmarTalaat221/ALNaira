import React, { useState } from 'react';
import classnames from "classnames";

import { Container, Row, Col, Card, CardBody, Collapse } from 'reactstrap';
import { Link } from 'react-router-dom';

import Breadcrumbs from '../../components/Common/Breadcrumb';

// Import Images
import faqsimg from "../../assets/images/faqs-img.png";

const FaqsPage = () => {
    document.title = "FAQs | Matary - React Admin & Dashboard Template";


    const [col1, setcol1] = useState(true);
    const [col2, setcol2] = useState(false);
    const [col3, setcol3] = useState(false);


    const t_col1 = () => {
        setcol1(!col1);
        setcol2(false);
        setcol3(false);
    };

    const t_col2 = () => {
        setcol2(!col2);
        setcol1(false);
        setcol3(false);
    };

    const t_col3 = () => {
        setcol3(!col3);
        setcol1(false);
        setcol2(false);
    };

    return (
        <React.Fragment>
            <div className="page-content">
                <Container fluid={true}>
                    <Breadcrumbs title="Utility" breadcrumbItem="FAQs" />
                    <Row>
                        <Col lg={12}>
                            <Card>
                                <CardBody>
                                    <Row className="justify-content-center mt-4">
                                        <Col lg={5}>
                                            <div className="text-center">
                                                <h5>Can't find what you are looking for?</h5>
                                                <p className="text-muted">If several languages coalesce, the grammar of the resulting language is more simple and regular than that of the individual</p>

                                                <div>
                                                    <button type="button" className="btn btn-primary mt-2 me-2 waves-effect waves-light">Email Us</button>
                                                    <button type="button" className="btn btn-success mt-2 waves-effect waves-light">Send us a tweet</button>
                                                </div>
                                            </div>
                                        </Col>
                                    </Row>

                                    <Row className="mt-5">
                                        <Col xl={3} sm={5} className="mx-auto">
                                            <div>
                                                <img src={faqsimg} alt="" className="img-fluid mx-auto d-block" />
                                            </div>
                                        </Col>

                                        <Col xl={8}>
                                            <div id="faqs-accordion" className="custom-accordion mt-5 mt-xl-0">
                                                <Card className="border shadow-none">

                                                    <Link to="#faqs-gen-ques-collapse" aria-haspopup={true} aria-expanded={true} aria-controls="faqs-gen-ques-collapse"
                                                        className={classnames(
                                                            "flex-grow-1 overflow-hidden text-dark",
                                                            { collapsed: !col1 }
                                                        )}
                                                        type="button"
                                                        onClick={t_col1}
                                                        style={{ cursor: "pointer" }}
                                                    >
                                                        <div className="bg-light p-3">

                                                            <div className="d-flex align-items-center">
                                                                <div className="flex-shrink-0 me-3">
                                                                    <div className="avatar-sm">
                                                                        <div className="avatar-title rounded-circle font-size-22">
                                                                            <i className="bx bx-question-mark"></i>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="flex-grow-1 overflow-hidden">
                                                                    <h5 className="font-size-16 mb-1">General Questions</h5>
                                                                    <p className="text-muted text-truncate mb-0">General Questions</p>
                                                                </div>
                                                                <div className="flex-shrink-0">
                                                                    <i className="mdi mdi-chevron-up accor-down-icon font-size-16"></i>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </Link>
                                                    <Collapse
                                                        isOpen={col1}
                                                        id="faqs-gen-ques-collapse"
                                                    >
                                                        <div className="p-4">
                                                            <Row>
                                                                <Col md={6}>
                                                                    <div>
                                                                        <div className="d-flex align-items-start mt-4">
                                                                            <div className="flex-shrink-0 me-3">
                                                                                <h5 className="text-primary font-size-16">01.</h5>
                                                                            </div>

                                                                            <div className="flex-grow-1">
                                                                                <h5 className="font-size-16">What is Lorem Ipsum ?</h5>
                                                                                <p className="text-muted">If several languages coalesce, the grammar of the resulting language is more simple</p>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </Col>

                                                                <Col md={6}>
                                                                    <div>
                                                                        <div className="d-flex align-items-start mt-4">
                                                                            <div className="flex-shrink-0 me-3">
                                                                                <h5 className="text-primary font-size-16">02.</h5>
                                                                            </div>

                                                                            <div className="flex-grow-1">
                                                                                <h5 className="font-size-16">Where does it come from ?</h5>
                                                                                <p className="text-muted">Everyone realizes why a new common language would be desirable one could refuse to pay expensive translators.</p>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </Col>

                                                                <Col md={6}>
                                                                    <div>
                                                                        <div className="d-flex align-items-start mt-4">
                                                                            <div className="flex-shrink-0 me-3">
                                                                                <h5 className="text-primary font-size-16">03.</h5>
                                                                            </div>

                                                                            <div className="flex-grow-1">
                                                                                <h5 className="font-size-16">Why do we use it ?</h5>
                                                                                <p className="text-muted">Their separate existence is a myth. For science, music, sport, etc, Europe uses the same vocabulary. </p>
                                                                            </div>
                                                                        </div>

                                                                    </div>
                                                                </Col>
                                                            </Row>
                                                        </div>
                                                    </Collapse>
                                                </Card>
                                                <div className="card border shadow-none">
                                                    <Link to="#faqs-privacy-policy-collapse" aria-haspopup={true} aria-expanded={false} aria-controls="faqs-privacy-policy-collapse"
                                                        className={classnames(
                                                            "text-dark collapsed",
                                                            { collapsed: !col2 }
                                                        )}
                                                        type="button"
                                                        onClick={t_col2}
                                                        style={{ cursor: "pointer" }}>
                                                        <div className="bg-light p-3" >

                                                            <div className="d-flex align-items-center" >
                                                                <div className="flex-shrink-0 me-3">
                                                                    <div className="avatar-sm">
                                                                        <div className="avatar-title rounded-circle font-size-22">
                                                                            <i className="bx bx-question-mark"></i>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="flex-grow-1 overflow-hidden">
                                                                    <h5 className="font-size-16 mb-1">Privacy Policy</h5>
                                                                    <p className="text-muted text-truncate mb-0">Privacy Policy Questions</p>
                                                                </div>
                                                                <div className="flex-shrink-0">
                                                                    <i className="mdi mdi-chevron-up accor-down-icon font-size-16"></i>
                                                                </div>
                                                            </div>

                                                        </div>
                                                    </Link>
                                                    <Collapse
                                                        isOpen={col2}
                                                        className="accordion-collapse"
                                                        id="faqs-privacy-policy-collapse"
                                                    >
                                                        <div className="p-4">
                                                            <Row>
                                                                <Col md={6}>
                                                                    <div>
                                                                        <div className="d-flex align-items-start mt-4">
                                                                            <div className="flex-shrink-0 me-3">
                                                                                <h5 className="text-primary font-size-16">01.</h5>
                                                                            </div>

                                                                            <div className="flex-grow-1">
                                                                                <h5 className="font-size-16">Where can I get some ?</h5>
                                                                                <p className="text-muted">If several languages coalesce, the grammar of the resulting language is more simple</p>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </Col>

                                                                <Col md={6}>
                                                                    <div>
                                                                        <div className="d-flex align-items-start mt-4">
                                                                            <div className="flex-shrink-0 me-3">
                                                                                <h5 className="text-primary font-size-16">02.</h5>
                                                                            </div>

                                                                            <div className="flex-grow-1">
                                                                                <h5 className="font-size-16">Why do we use it ?</h5>
                                                                                <p className="text-muted">Their separate existence is a myth. For science, music, sport, etc, Europe uses the same vocabulary. </p>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </Col>

                                                                <Col md={6}>
                                                                    <div>
                                                                        <div className="d-flex align-items-start mt-4">
                                                                            <div className="flex-shrink-0 me-3">
                                                                                <h5 className="text-primary font-size-16">03.</h5>
                                                                            </div>

                                                                            <div className="flex-grow-1">
                                                                                <h5 className="font-size-16">Where does it come from ?</h5>
                                                                                <p className="text-muted">Everyone realizes why a new common language would be desirable one could refuse to pay expensive translators.</p>
                                                                            </div>
                                                                        </div>

                                                                    </div>
                                                                </Col>
                                                            </Row>
                                                        </div>
                                                    </Collapse>
                                                </div>
                                                <div className="card border shadow-none">
                                                    <Link to="#faqs-pricing-plans-collapse" aria-haspopup={true} aria-expanded={false} aria-controls="faqs-pricing-plans-collapse"
                                                        className={classnames(
                                                            "text-dark collapsed",
                                                            { collapsed: !col3 }
                                                        )}
                                                        type="button"
                                                        onClick={t_col3}
                                                        style={{ cursor: "pointer" }}
                                                    >
                                                        <div className="bg-light p-3">
                                                            <div className="d-flex align-items-center">
                                                                <div className="flex-shrink-0 me-3">
                                                                    <div className="avatar-sm">
                                                                        <div className="avatar-title rounded-circle font-size-22">
                                                                            <i className="bx bx-question-mark"></i>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="flex-grow-1 overflow-hidden">
                                                                    <h5 className="font-size-16 mb-1">Pricing & Plans</h5>
                                                                    <p className="text-muted text-truncate mb-0">Pricing & Plans Questions</p>
                                                                </div>
                                                                <div className="flex-shrink-0">
                                                                    <i className="mdi mdi-chevron-up accor-down-icon font-size-16"></i>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </Link>

                                                    <Collapse
                                                        isOpen={col3}
                                                        className="accordion-collapse"
                                                        id="faqs-pricing-plans-collapse"
                                                    >
                                                        <div className="p-4">
                                                            <Row>
                                                                <Col md={6}>
                                                                    <div>
                                                                        <div className="d-flex align-items-start mt-4">
                                                                            <div className="flex-shrink-0 me-3">
                                                                                <h5 className="text-primary font-size-16">01.</h5>
                                                                            </div>

                                                                            <div className="flex-grow-1">
                                                                                <h5 className="font-size-16">Where does it come from ?</h5>
                                                                                <p className="text-muted">Everyone realizes why a new common language would be desirable one could refuse to pay expensive translators.</p>
                                                                            </div>
                                                                        </div>

                                                                    </div>
                                                                </Col>

                                                                <Col md={6}>
                                                                    <div>
                                                                        <div className="d-flex align-items-start mt-4">
                                                                            <div className="flex-shrink-0 me-3">
                                                                                <h5 className="text-primary font-size-16">02.</h5>
                                                                            </div>

                                                                            <div className="flex-grow-1">
                                                                                <h5 className="font-size-16">What is Lorem Ipsum ?</h5>
                                                                                <p className="text-muted">If several languages coalesce, the grammar of the resulting language is more simple</p>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </Col>

                                                                <Col md={6}>
                                                                    <div>
                                                                        <div className="d-flex align-items-start mt-4">
                                                                            <div className="flex-shrink-0 me-3">
                                                                                <h5 className="text-primary font-size-16">03.</h5>
                                                                            </div>

                                                                            <div className="flex-grow-1">
                                                                                <h5 className="font-size-16">Why do we use it ?</h5>
                                                                                <p className="text-muted">Their separate existence is a myth. For science, music, sport, etc, Europe uses the same vocabulary. </p>
                                                                            </div>
                                                                        </div>

                                                                    </div>
                                                                </Col>
                                                            </Row>
                                                        </div>
                                                    </Collapse>
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
        </React.Fragment >

    );
};

export default FaqsPage;