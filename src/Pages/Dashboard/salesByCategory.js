import React from 'react';
import { Card, CardBody, Col, DropdownItem, DropdownMenu, DropdownToggle, Row, UncontrolledDropdown } from 'reactstrap';

import SalesByCategoryChart from './salesByCategoryChart';

const SalesByCategory = () => {
    return (
        <React.Fragment>
            <Col xl={4}>
                <Card>
                    <CardBody>
                        <div className="d-flex flex-wrap align-items-center">
                            <h5 className="card-title mb-0">Sales By Category</h5>
                            <div className="ms-auto">
                                <UncontrolledDropdown>
                                    <DropdownToggle className="text-reset" tag="a" id="dropdownMenuButton1" data-bs-toggle="dropdown">
                                        <span className="text-muted font-size-12">Sort By:</span> <span className="fw-medium">Weekly<i className="mdi mdi-chevron-down ms-1"></i></span>
                                    </DropdownToggle>
                                    <DropdownMenu className="dropdown-menu-end">
                                        <DropdownItem>Monthly</DropdownItem>
                                        <DropdownItem>Yearly</DropdownItem>
                                    </DropdownMenu>
                                </UncontrolledDropdown>
                            </div>
                        </div>

                        <div className="text-center mt-4">
                            {/* Sales By Category Chart */}
                            <SalesByCategoryChart id="sales-category"/>
                        </div>

                        <Row className="mt-4">
                            <div className="col">
                                <div className="px-2">
                                    <div className="d-flex align-items-center mt-sm-0 mt-2">
                                        <i className="mdi mdi-circle font-size-10 mt-1 text-primary"></i>
                                        <div className="flex-grow-1 ms-2">
                                            <p className="mb-0 text-truncate">Watch OS 8</p>
                                        </div>
                                        <div className="flex-shrink-0">
                                            <span className="fw-bold">35.0%</span>
                                        </div>
                                    </div>

                                    <div className="d-flex align-items-center mt-2">
                                        <i className="mdi mdi-circle font-size-10 mt-1 text-success"></i>
                                        <div className="flex-grow-1 ms-2">
                                            <p className="mb-0 text-truncate">Iphone 12</p>
                                        </div>
                                        <div className="flex-shrink-0">
                                            <span className="fw-bold">15.0%</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col">
                                <div className="px-2">
                                    <div className="d-flex align-items-center mt-sm-0 mt-2">
                                        <i className="mdi mdi-circle font-size-10 mt-1 text-info"></i>
                                        <div className="flex-grow-1 ms-2">
                                            <p className="mb-0 text-truncate">Horror Book</p>
                                        </div>
                                        <div className="flex-shrink-0">
                                            <span className="fw-bold">8.0%</span>
                                        </div>
                                    </div>

                                    <div className="d-flex align-items-center mt-2">
                                        <i className="mdi mdi-circle font-size-10 mt-1 text-secondary"></i>
                                        <div className="flex-grow-1 ms-2">
                                            <p className="mb-0 text-truncate">Smart 4k TV</p>
                                        </div>
                                        <div className="flex-shrink-0">
                                            <span className="fw-bold">7.0%</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Row>
                    </CardBody>
                </Card>
            </Col>
        </React.Fragment>
    );
};

export default SalesByCategory;
