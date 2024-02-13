import React, { useState } from "react";
import { Card, CardBody, CardHeader, Col, Container, Row, TabContent, TabPane, Tooltip } from "reactstrap";

// Breadcrumb
import Breadcrumbs from "../../components/Common/Breadcrumb"

const Wizard = () => {
    document.title = "Wizard | Matary - React Admin & Dashboard Template";

    const [tuser, settuser] = useState(false);
    const [tfile, settfile] = useState(false);
    const [tedit, settedit] = useState(false);


    const [activeTab, setactiveTab] = useState(1);

    const [passedSteps, setPassedSteps] = useState([1]);

    function toggleTab(tab) {
        if (activeTab !== tab) {
            var modifiedSteps = [...passedSteps, tab];
            if (tab >= 1 && tab <= 3) {
                setactiveTab(tab);
                setPassedSteps(modifiedSteps);
            }
        }
    }

    return (
        <React.Fragment>

            <div className="page-content">
                <Container fluid={true}>
                    <Breadcrumbs title="Forms" breadcrumbItem="Wizard" />
                    <Row>
                        <Col lg={12}>
                            <Card>
                                <CardHeader>
                                    <h4 className="card-title mb-0">Forms Steps</h4>
                                </CardHeader>
                                <CardBody>
                                    <form action="#">
                                        <ul className="wizard-nav mb-5">

                                            <li className="wizard-list-item">
                                                <div className={activeTab === 1 ? "list-item active" : "list-item"} >
                                                    <div className="step-icon"
                                                        id="user" data-bs-toggle="tooltip" data-bs-placement="top"
                                                        title="Seller Details">

                                                        <i className="bx bx-user-circle"></i>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className="wizard-list-item">
                                                <div className={activeTab === 2 ? "list-item active" : "list-item"} >
                                                    <div className="step-icon"
                                                        id="file" data-bs-toggle="tooltip" data-bs-placement="top"
                                                        title="Company Document">
                                                        <i className="bx bx-file"></i>
                                                    </div>
                                                </div>
                                            </li>

                                            <li className="wizard-list-item">
                                                <div className={activeTab === 3 ? "list-item active" : "list-item"}>
                                                    <div className="step-icon"
                                                        id="edit" data-bs-toggle="tooltip" data-bs-placement="top"
                                                        title="Bank Details">
                                                        <i className="bx bx-edit"></i>
                                                    </div>
                                                </div>
                                            </li>

                                            <Tooltip placement="top" isOpen={tuser} target="user" toggle={() => { settuser(!tuser); }}>
                                                Seller Details
                                            </Tooltip>

                                            <Tooltip placement="top" isOpen={tfile} target="file" toggle={() => { settfile(!tfile); }}>
                                                Company Document
                                            </Tooltip>
                                            <Tooltip placement="top" isOpen={tedit} target="edit" toggle={() => { settedit(!tedit); }}>
                                                Bank Details
                                            </Tooltip>

                                        </ul>

                                        <TabContent activeTab={activeTab}>
                                            <TabPane tabId={1} className="wizard-tab">
                                                <div className="text-center mb-4">
                                                    <h5>Seller Details</h5>
                                                    <p className="card-title-desc">Fill all information below</p>
                                                </div>
                                                <div>
                                                    <Row>
                                                        <Col lg={6}>
                                                            <div className="mb-3">
                                                                <label htmlFor="basicpill-firstname-input" className="form-label">First
                                                                    Name</label>
                                                                <input type="text" className="form-control" placeholder="Enter First Name" id="basicpill-firstname-input" />
                                                            </div>
                                                        </Col>
                                                        <Col lg={6}>
                                                            <div className="mb-3">
                                                                <label htmlFor="basicpill-lastname-input" className="form-label">Last
                                                                    Name</label>
                                                                <input type="text" className="form-control" placeholder="Enter Last Name" id="basicpill-lastname-input" />
                                                            </div>
                                                        </Col>
                                                    </Row>

                                                    <Row>
                                                        <Col lg={6}>
                                                            <div className="mb-3">
                                                                <label htmlFor="basicpill-phoneno-input"
                                                                    className="form-label">Phone</label>
                                                                <input type="text" className="form-control" placeholder="Enter Phone" id="basicpill-phoneno-input" />
                                                            </div>
                                                        </Col>
                                                        <Col lg={6}>
                                                            <div className="mb-3">
                                                                <label htmlFor="basicpill-email-input"
                                                                    className="form-label">Email</label>
                                                                <input type="email" className="form-control" placeholder="Enter Email" id="basicpill-email-input" />
                                                            </div>
                                                        </Col>
                                                    </Row>
                                                    <Row>
                                                        <Col lg={12}>
                                                            <div className="mb-3">
                                                                <label htmlFor="basicpill-address-input"
                                                                    className="form-label">Address</label>
                                                                <textarea id="basicpill-address-input" className="form-control" placeholder="Enter Address" rows="2"></textarea>
                                                            </div>
                                                        </Col>
                                                    </Row>
                                                </div>

                                            </TabPane>


                                            <TabPane tabId={2} className="wizard-tab">
                                                <div>
                                                    <div className="text-center mb-4">
                                                        <h5>Company Document</h5>
                                                        <p className="card-title-desc">Fill all information below</p>
                                                    </div>
                                                    <div>
                                                        <Row>
                                                            <Col lg={6}>
                                                                <div className="mb-3">
                                                                    <label htmlFor="basicpill-pancard-input" className="form-label">PAN
                                                                        Card</label>
                                                                    <input type="text" className="form-control" placeholder="Enter Pan Card" id="basicpill-pancard-input" />
                                                                </div>
                                                            </Col>

                                                            <Col lg={6}>
                                                                <div className="mb-3">
                                                                    <label htmlFor="basicpill-vatno-input"
                                                                        className="form-label">VAT/TIN No.</label>
                                                                    <input type="text" className="form-control" placeholder="Enter VAT/TIN No." id="basicpill-vatno-input" />
                                                                </div>
                                                            </Col>
                                                        </Row>
                                                        <Row>
                                                            <Col lg={6}>
                                                                <div className="mb-3">
                                                                    <label htmlFor="basicpill-cstno-input" className="form-label">CST
                                                                        No.</label>
                                                                    <input type="text" className="form-control" placeholder="Enter CST No." id="basicpill-cstno-input" />
                                                                </div>
                                                            </Col>

                                                            <Col lg={6}>
                                                                <div className="mb-3">
                                                                    <label htmlFor="basicpill-servicetax-input"
                                                                        className="form-label">Service Tax No.</label>
                                                                    <input type="text" className="form-control" placeholder="Enter Service Tax No." id="basicpill-servicetax-input" />
                                                                </div>
                                                            </Col>
                                                        </Row>
                                                        <Row>
                                                            <Col lg={6}>
                                                                <div className="mb-3">
                                                                    <label htmlFor="basicpill-companyuin-input"
                                                                        className="form-label">Company UIN</label>
                                                                    <input type="text" className="form-control" placeholder="Enter Company UIN" id="basicpill-companyuin-input" />
                                                                </div>
                                                            </Col>

                                                            <Col lg={6}>
                                                                <div className="mb-3">
                                                                    <label htmlFor="basicpill-declaration-input"
                                                                        className="form-label">Declaration</label>
                                                                    <input type="text" className="form-control" placeholder="Enter Declaration" id="basicpill-declaration-input" />
                                                                </div>
                                                            </Col>
                                                        </Row>
                                                    </div>
                                                </div>
                                            </TabPane>

                                            <TabPane tabId={3} className="wizard-tab">
                                                <div>
                                                    <div className="text-center mb-4">
                                                        <h5>Bank Details</h5>
                                                        <p className="card-title-desc">Fill all information below</p>
                                                    </div>
                                                    <div>
                                                        <Row>
                                                            <Col lg={6}>
                                                                <div className="mb-3">
                                                                    <label htmlFor="basicpill-namecard-input"
                                                                        className="form-label">Name On Card</label>
                                                                    <input type="text" className="form-control" placeholder="Enter Name On Card" id="basicpill-namecard-input" />
                                                                </div>
                                                            </Col>
                                                            <Col lg={6}>
                                                                <div className="mb-3">
                                                                    <label className="form-label">Credit Card Type</label>
                                                                    <select className="form-select">
                                                                        <option defaultValue>Select Card Type</option>
                                                                        <option value="AE">American Express</option>
                                                                        <option value="VI">Visa</option>
                                                                        <option value="MC">MasterCard</option>
                                                                        <option value="DI">Discover</option>
                                                                    </select>
                                                                </div>
                                                            </Col>
                                                        </Row>
                                                        <Row>
                                                            <Col lg={6}>
                                                                <div className="mb-3">
                                                                    <label htmlFor="basicpill-cardno-input"
                                                                        className="form-label">Credit Card Number</label>
                                                                    <input type="text" className="form-control" placeholder="Enter Credit Card Number" id="basicpill-cardno-input" />
                                                                </div>
                                                            </Col>

                                                            <Col lg={6}>
                                                                <div className="mb-3">
                                                                    <label htmlFor="basicpill-card-verification-input"
                                                                        className="form-label">Card Verification Number</label>
                                                                    <input type="text" className="form-control" placeholder="Enter Card Verification Number" id="basicpill-card-verification-input" />
                                                                </div>
                                                            </Col>
                                                        </Row>
                                                        <Row>
                                                            <Col lg={6}>
                                                                <div className="mb-3">
                                                                    <label htmlFor="datepicker-basic"
                                                                        className="form-label">Expiration Date</label>
                                                                    <input type="text" className="form-control" id="datepicker-basic" placeholder="Enter Expiration Date" />
                                                                </div>
                                                            </Col>
                                                        </Row>
                                                    </div>

                                                </div>
                                            </TabPane>
                                        </TabContent>

                                        <div className="d-flex align-items-start gap-3 mt-4">
                                            <button type="button" id="prevBtn"  className={activeTab === 1 ? "btn btn-primary w-sm d-none" : "btn btn-primary w-sm"} onClick={() => { toggleTab(activeTab - 1); }}>Previous</button>
                                            <button type="button" id="nextBtn" className="btn btn-primary w-sm ms-auto" onClick={() => { toggleTab(activeTab + 1); }}>{activeTab === 3 ? "Submit" : "Next"}</button>
                                        </div>

                                    </form>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </div>
        </React.Fragment>
    )
}

export default Wizard;
