import React from 'react';
import { Card, CardBody, CardHeader, Col, DropdownItem, DropdownMenu, DropdownToggle, UncontrolledDropdown } from 'reactstrap';

import EarningChart from './earningsChart';

const EarningByItem = () => {
    return (
        <React.Fragment>
            <Col xl={4}>
                <Card>
                    <CardHeader>
                        <div className="d-flex flex-wrap align-items-center">
                            <h5 className="card-title mb-0">Earnings By Item</h5>
                            <div className="ms-auto">
                                <UncontrolledDropdown>
                                    <DropdownToggle className="text-reset" tag="a" id="dropdownMenuButton1" data-bs-toggle="dropdown" direction="start">
                                        <span className="text-muted font-size-12">Sort By:</span> <span className="fw-medium">Weekly<i className="mdi mdi-chevron-down ms-1"></i></span>
                                    </DropdownToggle>
                                    <DropdownMenu className="dropdown-menu-end">
                                        <DropdownItem>Monthly</DropdownItem>
                                        <DropdownItem>Yearly</DropdownItem>

                                    </DropdownMenu>
                                </UncontrolledDropdown>
                            </div>
                        </div>
                    </CardHeader>
                    <CardBody className="py-xl-0">
                        {/* Earning By Item Chart */}
                        <EarningChart />
                    </CardBody>
                </Card>
            </Col>
        </React.Fragment>
    );
};

export default EarningByItem;
