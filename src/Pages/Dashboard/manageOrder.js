import React from 'react';
import { Link } from 'react-router-dom';
import { UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem, Card, Col, CardBody, CardHeader } from 'reactstrap';

import { ManageOrdersData } from '../../CommonData/Data';
const ManageOrder = () => {
    return (
        <React.Fragment>
            <Col xl={8}>
                <Card>
                    <CardHeader>
                        <div className="d-flex flex-wrap align-items-center">
                            <h5 className="card-title mb-0">Manage Orders</h5>
                            <div className="ms-auto">

                                <UncontrolledDropdown>
                                    <DropdownToggle className="text-reset" id="dropdownMenuButton1" tag="a" data-bs-toggle="dropdown">
                                        <span className="text-muted font-size-12">Sort By: </span> <span className="fw-medium"> Weekly<i className="mdi mdi-chevron-down ms-1"></i></span>
                                    </DropdownToggle>
                                    <DropdownMenu className="dropdown-menu-end">
                                        <DropdownItem>Monthly</DropdownItem>
                                        <DropdownItem>Yearly</DropdownItem>
                                    </DropdownMenu>
                                </UncontrolledDropdown>

                            </div>
                        </div>
                    </CardHeader>
                    <CardBody className="pt-xl-1">
                        <div className="table-responsive">
                            <table className="table table-striped table-centered align-middle table-nowrap mb-0">
                                <thead >
                                    <tr>
                                        <th>No</th>
                                        <th>Product's Name</th>
                                        <th>Variant</th>
                                        <th>Type</th>
                                        <th>Stock</th>
                                        <th>Price</th>
                                        <th>Sales</th>
                                        <th>Status</th>
                                        <th>Edit</th>
                                    </tr>
                                </thead>
                                <tbody>

                                    {ManageOrdersData.map((item, key) => (<tr key={key}>
                                        <td>{item.id}</td>
                                        <td><Link to="#" className="text-body">{item.product}</Link> </td>
                                        <td>
                                            <i className={"mdi mdi-circle font-size-10 me-1 align-middle text-" + item.variantColor} ></i> {item.variant}
                                        </td>
                                        <td>
                                            {item.type}
                                        </td>
                                        <td>
                                            {item.stock}{" "}Items
                                        </td>
                                        <td>
                                            ${item.price}
                                        </td>
                                        <td>
                                            {item.sales}
                                        </td>

                                        <td style={{ width: "130px" }}>
                                            <div className="progress" style={{ height: "6px" }}>
                                                <div className={"progress-bar progress-bar-striped bg-" + item.color} role="progressbar" style={{ width: item.width }}>
                                                </div>
                                            </div>
                                        </td>
                                        <td>

                                            <UncontrolledDropdown>
                                                <DropdownToggle className="text-muted font-size-24" tag="a" aria-haspopup={true}>
                                                    <i className="mdi mdi-dots-vertical"></i>
                                                </DropdownToggle>
                                                <DropdownMenu className="dropdown-menu-end">
                                                    <DropdownItem>Action</DropdownItem>
                                                    <DropdownItem>Another action</DropdownItem>
                                                    <DropdownItem>Something else here</DropdownItem>
                                                    <DropdownItem divider />
                                                    <DropdownItem>Separated link</DropdownItem>
                                                </DropdownMenu>
                                            </UncontrolledDropdown>
                                        </td>
                                    </tr>))}

                                </tbody>
                            </table>
                        </div>
                    </CardBody>
                </Card>
            </Col>
        </React.Fragment>
    )
}

export default ManageOrder;