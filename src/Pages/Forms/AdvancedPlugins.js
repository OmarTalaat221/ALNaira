import React, { useState } from "react";
import { Row, Col, Card, Form, CardBody, Container, Label, Input, FormGroup, InputGroup, CardHeader } from "reactstrap"

import { SketchPicker } from "react-color";
import ColorPicker from "@vtaits/react-color-picker";
import "@vtaits/react-color-picker/dist/index.css";
import Select from "react-select";
import makeAnimated from "react-select/animated";
//Import Flatepicker
import "flatpickr/dist/themes/material_blue.css";
import Flatpickr from "react-flatpickr";

// Breadcrumb
import Breadcrumbs from "../../components/Common/Breadcrumb";

const animatedComponents = makeAnimated();

const optionGroup = [
    

    {
        label: "Picnic",
        options: [
            { label: "Mustard", value: "Mustard" },
            { label: "Ketchup", value: "Ketchup" },
            { label: "Relish", value: "Relish" }
        ]
    },
    {
        label: "Camping",
        options: [
            { label: "Tent", value: "Tent" },
            { label: "Flashlight", value: "Flashlight" },
            { label: "Toilet Paper", value: "Toilet Paper" }
        ]
    }
];

const optionGroup1 = [
    {
        label: "Picnic",
        options: [
            { label: "Mustard", value: "Mustard" },
            { label: "Ketchup", value: "Ketchup" },
            { label: "Relish", value: "Relish" }
        ]
    },
    {
        label: "Camping",
        options: [
            { label: "Tent", value: "Tent" },
            { label: "Flashlight", value: "Flashlight" },
            { label: "Toilet Paper", value: "Toilet Paper" }
        ]
    }
];

const optionGroup2 = [
    {
        label: "Picnic",
        options: [
            { label: "Mustard", value: "Mustard" },
            { label: "Ketchup", value: "Ketchup" },
            { label: "Relish", value: "Relish" }
        ]
    },
    {
        label: "Camping",
        options: [
            { label: "Tent", value: "Tent" },
            { label: "Flashlight", value: "Flashlight" },
            { label: "Toilet Paper", value: "Toilet Paper" }
        ]
    }
];


const AdvancedPlugins = () => {
    document.title = "Advanced Plugins | Matary - React Admin & Dashboard Template";

    const [switch1, setswitch1] = useState(true);
    const [switch2, setswitch2] = useState(true);
    const [switch3, setswitch3] = useState(true);
    const [switch4, setswitch4] = useState(true);
    const [switch5, setswitch5] = useState(true);
    const [switch6, setswitch6] = useState(true);
    const [switch7, setswitch7] = useState(true);
    const [switch8, setswitch8] = useState(true);
    const [switch9, setswitch9] = useState(true);

    const [sq1, setsq1] = useState(true);
    const [sq2, setsq2] = useState(true);
    const [sq3, setsq3] = useState(true);
    const [sq4, setsq4] = useState(true);
    const [sq5, setsq5] = useState(true);


    const [color, setcolor] = useState("red");
    const [colorRgb, setcolorRgb] = useState("red");
    const [colorCust, setcolorCust] = useState("red");
    const [colorHor, setcolorHor] = useState("#fffff");
    const [colorRGBA, setcolorRGBA] = useState("rgba(0, 194, 255, 0.78)");
    const [display_RGBA, setdisplay_RGBA] = useState(false);

    const [simple_color, setsimple_color] = useState(0);
    const [simple_color1, setsimple_color1] = useState(0);
    const [simple_color2, setsimple_color2] = useState(0);

    const onDrag = c1 => {
        setcolor(c1);
    };
    const onDragRgb = c1 => {
        setcolorRgb(c1);
    };
    const onDragCust = c1 => {
        setcolorCust(c1);
    };
    const handleHor = color => {
        setcolorHor(color.hex);
    };

    function handleRGBA() {
        setdisplay_RGBA(!display_RGBA);
    }

    const onSwatchHover_RGBA = color => {
        const format =
            "rgba(" +
            color.rgb.r +
            "," +
            color.rgb.g +
            "," +
            color.rgb.b +
            "," +
            color.rgb.a +
            ")";
        setcolorRGBA(format);
    };

    const [selectedGroup, setselectedGroup] = useState(null);
    const [selectedMulti, setselectedMulti] = useState(null);
    const [selectedMulti1, setselectedMulti1] = useState(null);
    const [selectedMulti2, setselectedMulti2] = useState(null);
    const [selectedMulti3, setselectedMulti3] = useState(null);

    function handleSelectGroup(selectedGroup) {
        setselectedGroup(selectedGroup);
    }

    function handleMulti(selectedMulti) {
        setselectedMulti(selectedMulti);
    }

    function handleMulti1(selectedMulti1) {
        setselectedMulti1(selectedMulti1);
    }

    function handleMulti2(selectedMulti2) {
        setselectedMulti2(selectedMulti2);
    }

    function handleMulti3(selectedMulti3) {
        setselectedMulti3(selectedMulti3);
    }


    return (
        <React.Fragment>
            <div className="page-content">
                <Container fluid={true}>
                    <Breadcrumbs title="Forms" breadcrumbItem="Advanced Plugins" />
                    <Row>
                        <Col lg={12}>
                            <Card>
                                <CardHeader>
                                    <h4 className="card-title">Css Switch</h4>
                                    <p className="card-title-desc">Here are a few types of switches. </p>
                                </CardHeader>
                                <CardBody>
                                    <Row>
                                        <Col lg={6}>
                                            <h5 className="font-size-14 mb-3">Example switch</h5>
                                            <div className="d-flex flex-wrap gap-2">
                                                <input type="checkbox" id="switch1" switch="none" checked={switch1} onChange={() => { setswitch1(!switch1); }} />
                                                <label htmlFor="switch1" data-on-label="On" data-off-label="Off"></label>

                                                <input type="checkbox" id="switch2" switch="default" checked={switch2} onChange={() => { setswitch2(!switch2); }} />
                                                <label htmlFor="switch2" data-on-label="Yes" data-off-label="No"></label>

                                                <input type="checkbox" id="switch3" switch="bool" checked={switch3} onChange={() => { setswitch3(!switch3); }} />
                                                <label htmlFor="switch3" data-on-label="Yes" data-off-label="No"></label>

                                                <input type="checkbox" id="switch6" switch="primary" checked={switch4} onChange={() => { setswitch4(!switch4); }} />
                                                <label htmlFor="switch6" data-on-label="Yes" data-off-label="No"></label>

                                                <input type="checkbox" id="switch4" switch="success" checked={switch5} onChange={() => { setswitch5(!switch5); }} />
                                                <label htmlFor="switch4" data-on-label="Yes" data-off-label="No"></label>

                                                <input type="checkbox" id="switch7" switch="info" checked={switch6} onChange={() => { setswitch6(!switch6); }} />
                                                <label htmlFor="switch7" data-on-label="Yes" data-off-label="No"></label>

                                                <input type="checkbox" id="switch5" switch="warning" checked={switch7} onChange={() => { setswitch7(!switch7); }} />
                                                <label htmlFor="switch5" data-on-label="Yes" data-off-label="No"></label>

                                                <input type="checkbox" id="switch8" switch="danger" checked={switch8} onChange={() => { setswitch8(!switch8); }} />
                                                <label htmlFor="switch8" data-on-label="Yes" data-off-label="No"></label>

                                                <input type="checkbox" id="switch9" switch="dark" checked={switch9} onChange={() => { setswitch9(!switch9); }} />
                                                <label htmlFor="switch9" data-on-label="Yes" data-off-label="No"></label>
                                            </div>
                                        </Col>

                                        <Col lg={6}>
                                            <div className="mt-4 mt-lg-0">
                                                <h5 className="font-size-14 mb-3">Square switch</h5>
                                                <div className="d-flex flex-wrap gap-2">
                                                    <div className="square-switch">
                                                        <input type="checkbox" id="square-switch1" switch="none" checked={sq1} onChange={() => { setsq1(!sq1); }} />
                                                        <label htmlFor="square-switch1" data-on-label="On"
                                                            data-off-label="Off"></label>
                                                    </div>
                                                    <div className="square-switch">
                                                        <input type="checkbox" id="square-switch2" switch="info" checked={sq2} onChange={() => { setsq2(!sq2); }} />
                                                        <label htmlFor="square-switch2" data-on-label="Yes"
                                                            data-off-label="No"></label>
                                                    </div>
                                                    <div className="square-switch">
                                                        <input type="checkbox" id="square-switch3" switch="bool" checked={sq3} onChange={() => { setsq3(!sq3); }} />
                                                        <label htmlFor="square-switch3" data-on-label="Yes"
                                                            data-off-label="No"></label>
                                                    </div>
                                                    <div className="square-switch">
                                                        <input type="checkbox" id="square-switch4" switch="warning" checked={sq4} onChange={() => { setsq4(!sq4); }} />
                                                        <label htmlFor="square-switch4" data-on-label="Yes"
                                                            data-off-label="No"></label>
                                                    </div>
                                                    <div className="square-switch">
                                                        <input type="checkbox" id="square-switch5" switch="danger" checked={sq5} onChange={() => { setsq5(!sq5); }} />
                                                        <label htmlFor="square-switch5" data-on-label="Yes"
                                                            data-off-label="No"></label>
                                                    </div>
                                                </div>
                                            </div>
                                        </Col>
                                    </Row>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>
                    <Row>
                        <Col lg={12}>
                            <Card>
                                <CardHeader>
                                    <h4 className="card-title">Choices</h4>
                                    <p className="card-title-desc">Choices is a lightweight, configurable select box/text input plugin.</p>
                                </CardHeader>
                                <CardBody>
                                    <h4 className="card-title">Select</h4>
                                    <p className="card-title-desc">
                                        A mobile and touch friendly input spinner component for
                                        Bootstrap
                                    </p>

                                    <form>
                                        <Row>
                                            <Col lg="6">
                                                <div className="mb-3">
                                                    <Label>Single Select</Label>
                                                    <Select
                                                        value={selectedGroup}
                                                        onChange={() => {
                                                            handleSelectGroup();
                                                        }}
                                                        options={optionGroup}
                                                        classNamePrefix="select2-selection"
                                                    />
                                                </div>
                                                <div className="mb-3">
                                                    <label className="control-label">
                                                        Multiple Select
                                                    </label>
                                                    <Select
                                                        value={selectedMulti}
                                                        isMulti={true}
                                                        onChange={() => {
                                                            handleMulti();
                                                        }}
                                                        options={optionGroup}
                                                        classNamePrefix="select2-selection"
                                                    />
                                                </div>

                                                <div>
                                                    <Label>Disable</Label>
                                                    <Select
                                                        value={selectedMulti1}
                                                        isMulti={true}
                                                        onChange={() => {
                                                            handleMulti1();
                                                        }}
                                                        options={optionGroup}
                                                        classNamePrefix="select2-selection"
                                                        isDisabled={true}
                                                    />
                                                </div>
                                            </Col>

                                            <Col lg="6">
                                                <div className="mb-3 ajax-select mt-3 mt-lg-0 select2-container">
                                                    <Label>Loading</Label>
                                                    <Select
                                                        value={selectedMulti2}
                                                        isMulti={true}
                                                        onChange={() => {
                                                            handleMulti2();
                                                        }}
                                                        options={optionGroup1}
                                                        classNamePrefix="select2-selection"
                                                        isLoading={true}
                                                    />
                                                </div>
                                                <div className="mb-3 templating-select select2-container">
                                                    <label className="control-label">Animated</label>
                                                    <Select
                                                        value={selectedMulti3}
                                                        isMulti={true}
                                                        onChange={() => {
                                                            handleMulti3();
                                                        }}
                                                        options={optionGroup2}
                                                        classNamePrefix="select2-selection"
                                                        closeMenuOnSelect={false}
                                                        components={animatedComponents}
                                                    />
                                                </div>
                                            </Col>
                                        </Row>
                                    </form>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>
                    <Row>
                        <Col lg={12}>
                            <Card>
                                <CardHeader>
                                    <h4 className="card-title">React Colorpicker</h4>
                                    <p className="card-title-desc">Fancy and customizable colorpicker plugin for React Colorpicker.</p>
                                </CardHeader>
                                <CardBody>
                                    <div>
                                        <Row>
                                            <Form action="#">
                                                <div className="mb-3">
                                                    <Label>Simple input field</Label>
                                                    <Input
                                                        type="text"
                                                        className="colorpicker-default"
                                                        value={color}
                                                        onClick={() => {
                                                            setsimple_color(!simple_color);
                                                        }}
                                                        readOnly
                                                    />
                                                    {simple_color ? (
                                                        <ColorPicker
                                                            saturationHeight={100}
                                                            saturationWidth={100}
                                                            value={color}
                                                            onDrag={onDrag}
                                                        />
                                                    ) : null}
                                                </div>

                                                <div className="mb-3">
                                                    <Label>With custom options - RGBA</Label>
                                                    <Input
                                                        type="text"
                                                        className="colorpicker-rgba form-control"
                                                        value={colorRGBA}
                                                        onClick={handleRGBA}
                                                        readOnly
                                                    />
                                                    {display_RGBA ? (
                                                        <SketchPicker
                                                            color="#fff"
                                                            value={colorRGBA}
                                                            width="160px"
                                                            onChangeComplete={onSwatchHover_RGBA}
                                                        />
                                                    ) : null}
                                                </div>
                                                <FormGroup className="m-b-0">
                                                    <Label>As a component</Label>
                                                    <div
                                                        className="input-group colorpicker-default"
                                                        title="Using format option"
                                                    >
                                                        <input
                                                            readOnly
                                                            value={colorRgb}
                                                            type="text"
                                                            className="form-control input-lg"
                                                        />
                                                        <span className="input-group-append">
                                                            <span
                                                                className="input-group-text colorpicker-input-addon"
                                                                onClick={() => {
                                                                    setsimple_color1(!simple_color1);
                                                                }}
                                                            >
                                                                <i
                                                                    style={{
                                                                        height: "16px",
                                                                        width: "16px",
                                                                        background: colorRgb
                                                                    }}
                                                                />
                                                            </span>
                                                        </span>
                                                    </div>

                                                    {simple_color1 ? (
                                                        <ColorPicker
                                                            saturationHeight={100}
                                                            saturationWidth={100}
                                                            value={colorRgb}
                                                            onDrag={onDragRgb}
                                                        />
                                                    ) : null}
                                                </FormGroup>
                                                <div className="mb-3">
                                                    <Label>Horizontal mode</Label>
                                                    <Input
                                                        type="text"
                                                        onClick={() => {
                                                            setsimple_color2(!simple_color2);
                                                        }}
                                                        value={colorHor}
                                                        readOnly
                                                    />
                                                    {simple_color2 ? (
                                                        <SketchPicker
                                                            color="#fff"
                                                            value={simple_color2}
                                                            width="160px"
                                                            onChangeComplete={handleHor}
                                                        />
                                                    ) : null}
                                                </div>

                                                <FormGroup className="mb-0">
                                                    <Label>Inline</Label>

                                                    <ColorPicker
                                                        saturationHeight={100}
                                                        saturationWidth={100}
                                                        value={colorCust}
                                                        onDrag={onDragCust}
                                                    />
                                                </FormGroup>
                                            </Form>
                                        </Row>
                                    </div>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>

                    <Row>
                        <Col lg={12}>
                            <Card>
                                <CardHeader>
                                    <h4 className="card-title">Datepicker</h4>
                                    <p className="card-title-desc">flatpickr is a lightweight and powerful datetime picker.</p>
                                </CardHeader>
                                <CardBody>
                                    <Form>
                                        <FormGroup className="mb-4">
                                            <Label>Default Functionality</Label>
                                            <InputGroup>
                                                <Flatpickr
                                                    className="form-control d-block"
                                                    placeholder="dd M, yyyy"
                                                    options={{
                                                        altInput: true,
                                                        altFormat: "F j, Y",
                                                        dateFormat: "Y-m-d"
                                                    }}
                                                />
                                            </InputGroup>
                                        </FormGroup>
                                        <div className="form-group mb-4">
                                            <Label>Auto Close</Label>
                                            <InputGroup>
                                                <Flatpickr
                                                    className="form-control d-block"
                                                    placeholder="dd M, yyyy"
                                                    options={{
                                                        altInput: true,
                                                        altFormat: "F j, Y",
                                                        dateFormat: "Y-m-d"
                                                    }}
                                                />
                                            </InputGroup>
                                        </div>

                                        <div className="form-group mb-4">
                                            <label>Multiple Date</label>
                                            <div className="input-group">
                                                <Flatpickr
                                                    className="form-control d-block"
                                                    placeholder="dd M, yyyy"
                                                    options={{
                                                        altInput: true,
                                                        altFormat: "F j, Y",
                                                        mode: "multiple",
                                                        dateFormat: "Y-m-d"
                                                    }}
                                                />
                                            </div>
                                        </div>

                                        <FormGroup className="mb-4">
                                            <Label>Date Range</Label>
                                            <InputGroup>
                                                <Flatpickr
                                                    className="form-control d-block"
                                                    placeholder="dd M, yyyy"
                                                    options={{
                                                        mode: "range",
                                                        dateFormat: "Y-m-d"
                                                    }}
                                                />
                                            </InputGroup>
                                        </FormGroup>

                                        <div className="form-group mb-0">
                                            <label>Inline Datepicker</label>
                                            <Flatpickr
                                                className="form-control d-block"
                                                placeholder="dd M, yyyy"
                                                options={{
                                                    inline: true,
                                                    altInput: true,
                                                    altFormat: "F j, Y",
                                                    dateFormat: "Y-m-d"
                                                }}
                                            />
                                        </div>
                                    </Form>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>

                </Container>
            </div>
        </React.Fragment>
    )
}

export default AdvancedPlugins;
