import React, { useState } from 'react';
import { Card, CardBody, Col, Container, Row } from 'reactstrap';

//Import Breadcrumb
import Breadcrumbs from "../../components/Common/Breadcrumb";

import Slider from "react-rangeslider";
import "react-rangeslider/lib/index.css";

const ExRangSlider = () => {
    document.title = "Rang Slider | Matary - React Admin & Dashboard Template";

    const [def, setdef] = useState(15);
    const [def1, setdef1] = useState(15);
    const [def2, setdef2] = useState(10);
    const [def3, setdef3] = useState(10);
    const [min_max, setmin_max] = useState(20);
    const [step, setstep] = useState(25);

    return (
        <React.Fragment>

            <div className="page-content">
                <Container fluid={true}>

                    <Breadcrumbs title="Extended" breadcrumbItem="Rang Slider" />

                    <Row>
                        <Col lg={12}>
                            <Card>
                                <div className="card-header justify-content-between d-flex align-items-center">
                                    <h4 className="card-title mb-0">Examples</h4>
                                </div>
                                <CardBody>
                                    <div>
                                        <div className="mb-5">
                                            <Row className="align-items-center">
                                                <Col lg={3}>
                                                    <h5 className="font-size-14">Basic Example</h5>
                                                </Col>
                                                <Col lg={9}>
                                                    <div id="slider">
                                                        <Slider
                                                            value={def}
                                                            orientation="horizontal"
                                                            onChange={value => {
                                                                setdef(value);
                                                            }}
                                                        />
                                                    </div>
                                                </Col>
                                            </Row>
                                        </div>

                                        <div className="mb-5">
                                            <Row>
                                                <Col lg={3}>
                                                    <h5 className="font-size-14">Using HTML5 Input Elements</h5>
                                                </Col>
                                                <Col lg={9}>
                                                    <div id="html5">
                                                        <Slider
                                                            value={min_max}
                                                            min={-20}
                                                            max={40}
                                                            step={1}
                                                            orientation="horizontal"
                                                            onChange={value => {
                                                                setmin_max(value);
                                                            }}
                                                        />
                                                    </div>
                                                </Col>
                                            </Row>
                                        </div>

                                        <div className="mb-5">
                                            <Row>
                                                <Col lg={3}>
                                                    <h5 className="font-size-14">Non linear slider</h5>
                                                </Col>
                                                <Col lg={9}>
                                                    <div id="nonlinear">
                                                        <Slider
                                                            value={step}
                                                            step={10}
                                                            orientation="horizontal"
                                                            onChange={value => {
                                                                setstep(value);
                                                            }}
                                                        />
                                                    </div>

                                                </Col>
                                            </Row>
                                        </div>

                                        <div className="mb-5">
                                            <Row>
                                                <Col lg={3}>
                                                    <h5 className="font-size-14">Only showing tooltips when sliding handle</h5>
                                                </Col>
                                                <Col lg={9}>
                                                    <div className="slider" id="slider-hide">
                                                        <Slider
                                                            value={def1}
                                                            orientation="horizontal"
                                                            onChange={value => {
                                                                setdef1(value);
                                                            }}
                                                        />
                                                    </div>
                                                </Col>
                                            </Row>
                                        </div>

                                        <div className="mb-5">
                                            <Row>
                                                <Col lg={3}>
                                                    <h5 className="font-size-14">Soft limits</h5>
                                                </Col>
                                                <Col lg={9}>
                                                    <div id="soft">
                                                        <Slider
                                                            min={0}
                                                            max={100}
                                                            step={10}
                                                            value={def3}
                                                            orientation='horizontal'
                                                            onChange={value => {
                                                                setdef3(value);
                                                            }}
                                                        />
                                                    </div>
                                                </Col>
                                            </Row>
                                        </div>

                                        <div className="mb-5" style={{ height: "150px" }}>
                                            <Row>
                                                <Col lg={3}>
                                                    <h5 className="font-size-14">Creating a toggle</h5>
                                                </Col>
                                                <Col lg={9}>
                                                    <div id="slider-toggle">
                                                        <Slider
                                                            min={0}
                                                            max={10}
                                                            step={10}
                                                            value={def2}
                                                            orientation='vertical'
                                                            onChange={value => {
                                                                setdef2(value);
                                                            }}
                                                            tooltip={false}
                                                        />
                                                    </div>
                                                </Col>
                                            </Row>
                                        </div>
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

export default ExRangSlider;