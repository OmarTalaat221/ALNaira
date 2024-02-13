import React from "react";
import { Row, Col, Card, CardBody, Container, CardHeader } from "reactstrap"

// Import Vector Map
import Vector from './MapVector';

// Breadcrumb
import Breadcrumbs from "../../components/Common/Breadcrumb"

const VectorMaps = () => {
    document.title = "Vector Maps | Matary - React Admin & Dashboard Template";

    return (
        <React.Fragment>

            <div className="page-content">
                <Container fluid={true}>
                    <Breadcrumbs title="Maps" breadcrumbItem="Vector Maps" />
                    <Row>
                        <Col className="col-12">
                            <Card>
                                <CardHeader>
                                    <h4 className="card-title mb-0">World Vector Map</h4>
                                </CardHeader>
                                <CardBody>
                                    <div id="world-map-line-markers" style={{ height: "420px" }}>
                                        <Vector
                                            value="world_mill"
                                            color="rgb(222, 226, 232)"
                                        />
                                    </div>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>

                    <Row>
                        <Col lg={6}>
                            <Card>
                                <CardHeader>
                                    <h4 className="card-title mb-0">World Vector Map with Markers</h4>
                                </CardHeader>

                                <CardBody>
                                    <div id="world-map-markers" style={{ height: "350px" }}>
                                        <Vector
                                            value="world_mill"
                                            color="rgb(222, 226, 232)"
                                        />
                                    </div>
                                </CardBody>
                            </Card>
                        </Col>

                        <Col lg={6}>
                            <Card>
                                <CardHeader>
                                    <h4 className="card-title mb-0">World Vector Map with Image Markers</h4>
                                </CardHeader>
                                <CardBody>
                                    <div id="world-map-markers-image" style={{ height: "350px" }}>
                                        <Vector
                                            value="world_mill"
                                            color="rgb(222, 226, 232)"
                                        />
                                    </div>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>

                    <Row>
                        <Col lg={6}>
                            <Card>
                                <CardHeader>
                                    <h4 className="card-title mb-0">USA Vector Map</h4>
                                </CardHeader>
                                <CardBody>
                                    <div id="usa-vectormap" style={{ height: "350px" }}>
                                        <Vector
                                            value="us_aea"
                                            color="rgb(222, 226, 232)"
                                        />
                                    </div>
                                </CardBody>
                            </Card>
                        </Col>

                        <Col lg={6}>
                            <Card>
                                <CardHeader>
                                    <h4 className="card-title mb-0">Canada Vector Map</h4>
                                </CardHeader>
                                <CardBody>
                                    <div id="canada-vectormap" style={{ height: "350px" }}>
                                        <Vector
                                            value="ca_lcc"
                                            color="rgb(222, 226, 232)"
                                        />
                                    </div>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </div>
        </React.Fragment>
    )
}

export default VectorMaps;
