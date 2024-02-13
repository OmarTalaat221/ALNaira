import React from "react";
import { Row, Col, Card, CardBody, Container, CardHeader } from "reactstrap";

// Breadcrumb
import Breadcrumbs from "../../components/Common/Breadcrumb" ;

//Import maps
import SimpleMap from "./LeafletMap/SimpleMap"
import MapWithPopup from "./LeafletMap/MapWithPopup"
import MapVectorLayers from "./LeafletMap/MapVectorLayers"
import MapMarkerCustomIcons from "./LeafletMap/MapMarkerCustomIcons"
import LayerGroup from "./LeafletMap/LayerGroup"
import MapLayerControl from "./LeafletMap/MapLayerControl"

const LeafletMaps = () => {
    document.title = "Leaflet Maps | Matary - React Admin & Dashboard Template";

    return (
        <React.Fragment>
            <div className="page-content">
                <Container fluid={true}>
                    <Breadcrumbs title="Maps" breadcrumbItem="Leaflet Maps" />

                    <Row>
                        <Col lg={6}>
                            <Card>
                                <CardHeader>
                                    <h4 className="card-title mb-0">Example</h4>
                                </CardHeader>
                                <CardBody>
                                    <div id="leaflet-map" className="leaflet-map">
                                        <SimpleMap />
                                    </div>
                                </CardBody>
                            </Card>
                        </Col>
                        <Col lg={6}>
                            <Card>
                                <CardHeader>
                                    <h4 className="card-title mb-0">Markers, Circles and Polygons</h4>
                                </CardHeader>
                                <CardBody>
                                    <div id="leaflet-map-marker" className="leaflet-map">
                                        <MapVectorLayers />
                                    </div>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>

                    <Row>
                        <Col lg={6}>
                            <Card>
                                <CardHeader>
                                    <h4 className="card-title mb-0">Working with Popups</h4>
                                </CardHeader>
                                <CardBody>
                                    <div id="leaflet-map-popup" className="leaflet-map">
                                        <MapWithPopup />
                                    </div>
                                </CardBody>
                            </Card>
                        </Col>
                        <Col lg={6}>
                            <Card>
                                <CardHeader>
                                    <h4 className="card-title mb-0">Markers with Custom Icons</h4>
                                </CardHeader>
                                <CardBody>
                                    <div id="leaflet-map-custom-icons" className="leaflet-map">
                                        <MapMarkerCustomIcons />
                                    </div>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>

                    <Row>
                        <Col lg={6}>
                            <Card>
                                <CardHeader>
                                    <h4 className="card-title mb-0">Interactive Layer Map</h4>
                                </CardHeader>
                                <CardBody>
                                    <div id="leaflet-map-interactive-map" className="leaflet-map">
                                        <LayerGroup />
                                    </div>
                                </CardBody>
                            </Card>
                        </Col>
                        <Col lg={6}>
                            <Card>
                                <CardHeader>
                                    <h4 className="card-title mb-0">Layer Groups and Layers Control</h4>
                                </CardHeader>
                                <CardBody>
                                    <div id="leaflet-map-group-control" className="leaflet-map">
                                        <MapLayerControl />
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

export default LeafletMaps;
