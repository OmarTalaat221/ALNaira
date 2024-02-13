import React from "react";
import { Row, Col, Card, CardBody, Container, CardHeader } from "reactstrap"

// Breadcrumb
import Breadcrumbs from "../../components/Common/Breadcrumb"
import Chartapex from "./AllCharts/apex/chartapex";
import DashedLine from "./AllCharts/apex/dashedLine";
import SplineLine from "./AllCharts/apex/splineArea";
import Apaexlinecolumn from "./AllCharts/apex/apaexlinecolumn";
import ColumnWithDataLabels from "./AllCharts/apex/columnWithDataLabels";
import BarChart from "./AllCharts/apex/barchart";
import Custombarchart from "./AllCharts/apex/customBarChart";
import PieChart from "./AllCharts/apex/pieChart";
import DonutChart from "./AllCharts/apex/dountchart";
import BasicRadialChart from "./AllCharts/apex/basicRadialChart";
import RadialChart from "./AllCharts/apex/radialChart";
import BasicRadarChart from "./AllCharts/apex/basicRadarChart";
import MultipleRadarChart from "./AllCharts/apex/multipleRadarChart";
import BasicPolarChart from "./AllCharts/apex/basicPolarChart";
import MonoPolarChart from "./AllCharts/apex/polarChartMono";
import LineColumnChart from "./AllCharts/apex/lineColumnChart";
import MultiYaxisChart from "./AllCharts/apex/multiYaxisChart";
import BasicTimelineChart from "./AllCharts/apex/basicTimelineChart";
import DiffColorTimelineChart from "./AllCharts/apex/diffColorTimeline";
import SimpleBubbleChart from "./AllCharts/apex/simpleBubbleChart";
import ThreeDBubbleChart from "./AllCharts/apex/3DbubbleChart";
import BasicAreaChart from "./AllCharts/apex/basicAreaChart";

const ApexCharts = () => {
    document.title = "Apex Charts | Matary - React Admin & Dashboard Template";


    return (
        <React.Fragment>

            <div className="page-content">
                <Container fluid={true}>
                    <Breadcrumbs title="Charts" breadcrumbItem="Apex Charts" />
                    <Row>
                        <Col lg={6}>
                            <Card>
                                <CardHeader>
                                    <h4 className="card-title mb-0">Line with Data Labels</h4>
                                </CardHeader>
                                <CardBody>
                                        <Chartapex id="line_chart_datalabel" dir="ltr"/>
                                </CardBody>
                            </Card>
                        </Col>

                        <Col lg={6}>
                            <Card>
                                <CardHeader>
                                    <h4 className="card-title mb-0">Dashed Line</h4>
                                </CardHeader>
                                <CardBody>
                                    <DashedLine id="line_chart_dashed"  dir="ltr"/>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>

                    <Row>
                        <Col lg={6}>
                            <Card>
                                <CardHeader>
                                    <h4 className="card-title mb-0">Basic Area Chart</h4>
                                </CardHeader>
                                <CardBody>
                                    <div id="area_chart_basic" data-colors='["#3980c0", "#33a186"]' className="apex-charts" dir="ltr"></div>
                                    <BasicAreaChart id="area_chart_basic" dir="ltr"/>
                                </CardBody>
                            </Card>
                        </Col>
                        <Col lg={6}>
                            <Card>
                                <CardHeader>
                                    <h4 className="card-title mb-0">Spline Area Chart</h4>
                                </CardHeader>
                                <CardBody>
                                    <SplineLine id="area_chart_spline" dir="ltr"/>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>

                    <Row>
                        <Col lg={6}>
                            <Card>
                                <CardHeader>
                                    <h4 className="card-title mb-0">Basic Column Chart</h4>
                                </CardHeader>
                                <CardBody>
                                    <Apaexlinecolumn id="column_chart" dir="ltr"/>
                                </CardBody>
                            </Card>
                        </Col>
                        <Col lg={6}>
                            <Card>
                                <CardHeader>
                                    <h4 className="card-title mb-0">Column with Data Labels</h4>
                                </CardHeader>
                                <CardBody>
                                    <ColumnWithDataLabels id="column_chart_datalabel" dir="ltr"/>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>

                    <Row>
                        <Col lg={6}>
                            <Card>
                                <CardHeader>
                                    <h4 className="card-title mb-0">Basic Bar Chart</h4>
                                </CardHeader>
                                <CardBody>
                                    <BarChart id="bar_chart" dir="ltr"/>
                                </CardBody>
                            </Card>
                        </Col>
                        <Col lg={6}>
                            <Card>
                                <CardHeader>
                                    <h4 className="card-title mb-0">Custom DataLabels Bar</h4>
                                </CardHeader>
                                <CardBody>
                                        <Custombarchart id="custom_datalabels_bar" dir="ltr"/>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>

                    <Row>
                        <Col lg={6}>
                            <Card>
                                <CardHeader>
                                    <h4 className="card-title">Line & Column Chart</h4>
                                </CardHeader>
                                <CardBody>
                                    <LineColumnChart id="line_column_chart" dir="ltr"/>
                                </CardBody>
                            </Card>
                        </Col>
                        <Col lg={6}>
                            <Card>
                                <CardHeader>
                                    <h4 className="card-title">Multiple Y-Axis Chart</h4>
                                </CardHeader>
                                <CardBody>
                                    <MultiYaxisChart id="multi_chart" dir="ltr"/>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>

                    <Row>
                        <Col lg={6}>
                            <Card>
                                <CardHeader>
                                    <h4 className="card-title mb-0">Basic TimeLine Chart</h4>
                                </CardHeader>
                                <CardBody>
                                    <BasicTimelineChart id="basic_timeline" dir="ltr"/>
                                </CardBody>
                            </Card>
                        </Col>
                        <Col lg={6}>
                            <Card>
                                <CardHeader>
                                    <h4 className="card-title mb-0">Different Color For Each Bar</h4>
                                </CardHeader>
                                <CardBody>
                                    <div id="color_timeline" data-colors='["#3980c0","#f34e4e","#33a186","#fc931d","#5fd0f3"]' dir="ltr"></div>
                                    <DiffColorTimelineChart id="color_timeline" dir="ltr"/>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>
                    <Row>
                        <Col lg={6}>
                            <Card>
                                <CardHeader>
                                    <h4 className="card-title mb-0">Simple Bubble Chart</h4>
                                </CardHeader>
                                <CardBody>
                                    <SimpleBubbleChart id="simple_bubble" dir="ltr"/>
                                </CardBody>
                            </Card>
                        </Col>
                        <Col lg={6}>
                            <Card>
                                <CardHeader>
                                    <h4 className="card-title mb-0">3D Bubble Chart</h4>
                                </CardHeader>
                                <CardBody>
                                    <ThreeDBubbleChart  id="bubble_chart" dir="ltr"/>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>

                    <Row>
                        <Col lg={6}>
                            <Card>
                                <CardHeader>
                                    <h4 className="card-title mb-0">Simple Pie Chart</h4>
                                </CardHeader>
                                <CardBody>
                                    <PieChart id="simple_pie_chart" dir="ltr"/>
                                </CardBody>
                            </Card>
                        </Col>
                        <Col lg={6}>
                            <Card>
                                <CardHeader>
                                    <h4 className="card-title mb-0">Simple Donut Chart</h4>
                                </CardHeader>
                                <CardBody>
                                    <DonutChart id="simple_dount_chart" dir="ltr"/>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>

                    <Row>
                        <Col lg={6}>
                            <Card>
                                <CardHeader>
                                    <h4 className="card-title mb-0">Basic Radialbar Chart</h4>
                                </CardHeader>
                                <CardBody>
                                    <BasicRadialChart id="basic_radialbar" dir="ltr" />
                                </CardBody>
                            </Card>
                        </Col>
                        <Col lg={6}>
                            <Card>
                                <CardHeader>
                                    <h4 className="card-title mb-0">Multiple Radialbar</h4>
                                </CardHeader>
                                <CardBody>
                                    <RadialChart id="multiple_radialbar" dir="ltr"/>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>


                    <Row>
                        <Col lg={6}>
                            <Card>
                                <CardHeader>
                                    <h4 className="card-title mb-0">Basic Radar Chart</h4>
                                </CardHeader>
                                <CardBody>
                                    <BasicRadarChart id="basic_radar" dir="ltr"/>
                                </CardBody>
                            </Card>
                        </Col>
                        <Col lg={6}>
                            <Card>
                                <CardHeader>
                                    <h4 className="card-title mb-0">Radar Chart - Multiple series</h4>
                                </CardHeader>
                                <CardBody>
                                    <MultipleRadarChart id="multi_radar" dir="ltr"/>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>

                    <Row>
                        <Col lg={6}>
                            <Card>
                                <CardHeader>
                                    <h4 className="card-title mb-0">Basic-Polar Area Chart</h4>
                                </CardHeader>
                                <CardBody>
                                    <BasicPolarChart id="basic_polar_area" dir="ltr"/>
                                </CardBody>
                            </Card>
                        </Col>
                        <Col lg={6}>
                            <Card>
                                <CardHeader>
                                    <h4 className="card-title mb-0">Polar-Area Monochrome</h4>
                                </CardHeader>
                                <CardBody>
                                    <div id="monochrome_polar_area" className="apex-charts" dir="ltr"></div>
                                    <MonoPolarChart id="monochrome_polar_area" dir="ltr"/>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </div>
        </React.Fragment >
    )
}

export default ApexCharts;
