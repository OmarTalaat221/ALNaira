import React from "react";
import { Row, Col, Card, CardBody, Container, CardHeader } from "reactstrap";

// Import grid
import { Grid } from 'gridjs-react';

// Breadcrumb
import Breadcrumbs from "../../components/Common/Breadcrumb";

// Import Table Data
import { data, columns } from "./advanceTdata";

const AdvanceTable = () => {
    document.title = "Advance Tables | Matary - React Admin & Dashboard Template";

    return (
        <React.Fragment>
            <div className="page-content">
                <Container fluid={true}>
                    <Breadcrumbs title="Tables" breadcrumbItem="Advance Tables" />
                    <Row>
                        <Col lg={12}>
                            <Card>
                                <CardHeader>
                                    <h4 className="card-title mb-0">GridJs Table</h4>
                                </CardHeader>
                                <CardBody>
                                    <div id="table-gridjs">
                                        <Grid
                                            data={data}
                                            columns={columns}
                                            search={true}
                                            sort={true}
                                            pagination={{ enabled: true, limit: 5, }}
                                        />
                                    </div>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>

                    <Row>
                        <Col lg={12}>
                            <Card>
                                <CardHeader>
                                    <h4 className="card-title mb-0">Pagination</h4>
                                </CardHeader>
                                <CardBody>
                                    <div id="table-pagination">
                                        <Grid
                                            data={data}
                                            columns={columns}
                                            pagination={{ enabled: true, limit: 5, }}
                                        />
                                    </div>
                                </CardBody>
                            </Card>
                        </Col>

                    </Row>


                    <Row>
                        <Col lg={12}>
                            <Card>
                                <CardHeader>
                                    <h4 className="card-title mb-0">Search</h4>
                                </CardHeader>
                                <CardBody>
                                    <div id="table-search">
                                        <Grid
                                            data={data}
                                            columns={columns}
                                            search={true}
                                            pagination={{ enabled: true, limit: 5, }}
                                        />
                                    </div>
                                </CardBody>
                            </Card>
                        </Col>

                    </Row>


                    <Row>
                        <Col lg={12}>
                            <Card>
                                <CardHeader>
                                    <h4 className="card-title mb-0">Sorting</h4>
                                </CardHeader>
                                <CardBody>
                                    <div id="table-sorting">
                                        <Grid
                                            data={data}
                                            columns={columns}
                                            sort={true}
                                            pagination={{ enabled: true, limit: 5, }}
                                        />
                                    </div>
                                </CardBody>
                            </Card>
                        </Col>

                    </Row>


                    <Row>
                        <Col lg={12}>
                            <Card>
                                <CardHeader>
                                    <h4 className="card-title mb-0">Loading State</h4>
                                </CardHeader>
                                <CardBody>
                                    <div id="table-loading-state">
                                        <Grid
                                            data={function () {
                                                return new Promise(function (resolve) {
                                                    setTimeout(function () {
                                                        resolve(data);
                                                    }, 2000);
                                                });
                                            }}
                                            columns={columns}
                                            sort={true}
                                            pagination={{ enabled: true, limit: 5, }}
                                        />
                                    </div>
                                </CardBody>
                            </Card>
                        </Col>

                    </Row>


                    <Row>
                        <Col lg={12}>
                            <Card>
                                <div className="card-header justify-content-between d-flex align-items-center">
                                    <h4 className="card-title mb-0">Fixed Header</h4>
                                </div>
                                <CardBody>
                                    <div id="table-fixed-header">
                                        <Grid
                                            data={data}
                                            columns={columns}
                                            sort={true}
                                            fixedHeader={true}
                                            height={'400px'}
                                            pagination={{ enabled: true, limit: 10 }}
                                        />
                                    </div>
                                </CardBody>
                            </Card>
                        </Col>

                    </Row>


                    <Row>
                        <Col lg={12}>
                            <Card>
                                <CardHeader>
                                    <h4 className="card-title mb-0">Hidden Columns</h4>
                                </CardHeader>
                                <CardBody>
                                    <div id="table-hidden-column">
                                        <Grid
                                            data={data}
                                            columns={["Name", "Email", "Position", "Company", { name: 'Country', hidden: true }]}
                                            sort={true}
                                            pagination={{ enabled: true, limit: 5, }}
                                        />
                                    </div>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </div>
        </React.Fragment>
    );
};

export default AdvanceTable;
