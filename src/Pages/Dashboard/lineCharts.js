import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardBody, Col, Row } from 'reactstrap';

import { LineChart1, LineChart2, LineChart3, LineChart4 } from './apexLineCharts';

const LineCharts = () => {
    return (
        <React.Fragment>
            <Col xl={8}>
                <Row>
                    <Col md={6} lg={3}>
                        <Card>
                            <CardBody>
                                <div className="avatar">
                                    <span className="avatar-title bg-soft-primary rounded">
                                        <i className="mdi mdi-shopping-outline text-primary font-size-24"></i>
                                    </span>
                                </div>
                                <p className="text-muted mt-4 mb-0">Today Orders</p>
                                <h4 className="mt-1 mb-0">3,89,658 <sup className="text-success fw-medium font-size-14"><i className="mdi mdi-arrow-down"></i> 10%</sup></h4>
                                <div>
                                    <div className="py-3 my-1">
                                        {/* Line Chart 1*/}
                                        <LineChart1 id="mini-1" />
                                    </div>
                                    <ul className="list-inline d-flex justify-content-between justify-content-center mb-0">
                                        <li className="list-inline-item"><Link to="#" className="text-muted">Day</Link></li>
                                        <li className="list-inline-item"><Link to="#" className="text-muted">Week</Link></li>
                                        <li className="list-inline-item"><Link to="#" className="text-muted">Month</Link></li>
                                        <li className="list-inline-item"><Link to="#" className="text-muted">Year</Link></li>
                                    </ul>
                                </div>
                            </CardBody>
                        </Card>
                    </Col>



                    <Col md={6} lg={3}>
                        <Card>
                            <CardBody>
                                <div className="avatar">
                                    <span className="avatar-title bg-soft-success rounded">
                                        <i className="mdi mdi-eye-outline text-success font-size-24"></i>
                                    </span>
                                </div>
                                <p className="text-muted mt-4 mb-0">Today Visitor</p>
                                <h4 className="mt-1 mb-0">1,648,29 <sup className="text-danger fw-medium font-size-14"><i className="mdi mdi-arrow-down"></i> 19%</sup></h4>
                                <div>
                                    <div className="py-3 my-1">

                                        {/* Line Chart 2*/}
                                        <LineChart2 id="mini-2" />
                                    </div>
                                    <ul className="list-inline d-flex justify-content-between justify-content-center mb-0">
                                        <li className="list-inline-item"><Link to="#" className="text-muted">Day</Link></li>
                                        <li className="list-inline-item"><Link to="#" className="text-muted">Week</Link></li>
                                        <li className="list-inline-item"><Link to="#" className="text-muted">Month</Link></li>
                                        <li className="list-inline-item"><Link to="#" className="text-muted">Year</Link></li>
                                    </ul>
                                </div>
                            </CardBody>
                        </Card>
                    </Col>

                    <Col md={6} lg={3}>
                        <Card>
                            <CardBody>
                                <div className="avatar">
                                    <span className="avatar-title bg-soft-primary rounded">
                                        <i className="mdi mdi-rocket-outline text-primary font-size-24"></i>
                                    </span>
                                </div>
                                <p className="text-muted mt-4 mb-0">Total Expense</p>
                                <h4 className="mt-1 mb-0">6,48,249 <sup className="text-success fw-medium font-size-14"><i className="mdi mdi-arrow-down"></i> 22%</sup></h4>
                                <div>
                                    <div className="py-3 my-1">
                                        {/* Line Chart 3*/}
                                        <LineChart3 id="mini-3" />
                                    </div>
                                    <ul className="list-inline d-flex justify-content-between justify-content-center mb-0">
                                        <li className="list-inline-item"><Link to="#" className="text-muted">Day</Link></li>
                                        <li className="list-inline-item"><Link to="#" className="text-muted">Week</Link></li>
                                        <li className="list-inline-item"><Link to="#" className="text-muted">Month</Link></li>
                                        <li className="list-inline-item"><Link to="#" className="text-muted">Year</Link></li>
                                    </ul>
                                </div>
                            </CardBody>
                        </Card>
                    </Col>

                    <Col md={6} lg={3}>
                        <Card>
                            <CardBody>
                                <div className="avatar">
                                    <span className="avatar-title bg-soft-success rounded">
                                        <i className="mdi mdi-account-multiple-outline text-success font-size-24"></i>
                                    </span>
                                </div>
                                <p className="text-muted mt-4 mb-0">New Users</p>
                                <h4 className="mt-1 mb-0">$5,265,3 <sup className="text-danger fw-medium font-size-14"><i className="mdi mdi-arrow-down"></i> 18%</sup></h4>
                                <div>
                                    <div className="py-3 my-1">
                                        {/* Line Chart 4*/}
                                        <LineChart4 id="mini-4" />
                                    </div>
                                    <ul className="list-inline d-flex justify-content-between justify-content-center mb-0">
                                        <li className="list-inline-item"><Link to="#" className="text-muted">Day</Link></li>
                                        <li className="list-inline-item"><Link to="#" className="text-muted">Week</Link></li>
                                        <li className="list-inline-item"><Link to="#" className="text-muted">Month</Link></li>
                                        <li className="list-inline-item"><Link to="#" className="text-muted">Year</Link></li>
                                    </ul>
                                </div>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </Col>
        </React.Fragment>
    );
};

export default LineCharts;
