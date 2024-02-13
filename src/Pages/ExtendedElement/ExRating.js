import React, { useState } from 'react';
import { Card, CardBody, Col, Container, Row, CardHeader } from 'reactstrap';

// Rating Plugin
import Rating from "react-rating";

//Import Breadcrumb
import Breadcrumbs from "../../components/Common/Breadcrumb";


const ExRating = () => {
    document.title = "Rating | Matary - React Admin & Dashboard Template";

    const [customize, setcustomize] = useState("");
    const [reset, setreset] = useState("mdi mdi-star text-warning fa-2x");

    return (
        <React.Fragment>

            <div className="page-content">
                <Container fluid={true}>

                    <Breadcrumbs title="Extended" breadcrumbItem="Rating" />

                    <Row>
                        <Col lg={12}>
                            <Card>
                                <CardHeader>
                                    <h4 className="card-title">Rater Js</h4>
                                    <p className="card-title-desc">Rater Js Different Example For Rating</p>
                                </CardHeader>
                                <CardBody>

                                    <Row>
                                        <Col sm={6}>
                                            <div className="p-lg-5 p-4 text-center" dir="ltr">
                                                <h5 className="font-size-15 mb-4">Basic Rater</h5>
                                                <div id="basic-rater">
                                                    <Rating
                                                        className="rating"
                                                        emptySymbol="mdi mdi-star-outline text-muted fa-2x"
                                                        fullSymbol="mdi mdi-star text-warning fa-2x"
                                                    />
                                                </div>
                                            </div>
                                        </Col>

                                        <Col sm={6}>
                                            <div className="p-lg-5 p-4 text-center" dir="ltr">
                                                <h5 className="font-size-15 mb-4">Rater with Step</h5>
                                                <div id="rater-step">
                                                    <Rating
                                                        emptySymbol="mdi mdi-star-outline text-muted fa-2x"
                                                        fullSymbol="mdi mdi-star text-warning fa-2x"
                                                        fractions={2}
                                                    />
                                                </div>
                                            </div>
                                        </Col>

                                        <Col sm={6}>
                                            <div className="p-lg-5 p-4 text-center" dir="ltr">
                                                <h5 className="font-size-15 mb-4">Custom Messages</h5>
                                                <div id="rater-message">

                                                    <Rating
                                                        emptySymbol={[
                                                            "mdi mdi-star text-warning fa-2x",
                                                            "mdi mdi-star-outline text-muted fa-2x",
                                                            "mdi mdi-star-outline text-muted fa-2x",
                                                            "mdi mdi-star-outline text-muted fa-2x",
                                                            "mdi mdi-star-outline text-muted fa-2x",
                                                        ]}

                                                        fullSymbol="mdi mdi-star text-warning fa-2x"
                                                    />

                                                </div>
                                            </div>
                                        </Col>

                                        <Col sm={6}>
                                            <div className="p-lg-5 p-4 text-center" dir="ltr">
                                                <h5 className="font-size-15 mb-4">Example with unlimited number of stars. readOnly option is set to true.</h5>
                                                <div id="rater-unlimitedstar">

                                                    <Rating
                                                        stop={16}
                                                        emptySymbol="mdi mdi-star-outline text-muted fa-1x"
                                                        fullSymbol="mdi mdi-star text-warning"
                                                        initialRating={4.5}
                                                        readonly
                                                    />

                                                </div>
                                            </div>
                                        </Col>

                                        <Col sm={6}>
                                            <div className="p-lg-5 p-4 text-center" dir="ltr">
                                                <h5 className="font-size-15 mb-4">On Hover event</h5>
                                                <div id="rater-onhover" className="align-middle">
                                                    <Rating
                                                        stop={5}
                                                        emptySymbol="mdi mdi-star-outline text-muted fa-2x"
                                                        fullSymbol="mdi mdi-star text-warning fa-2x"
                                                        onChange={(customize) => setcustomize(customize)}
                                                    />
                                                </div>
                                                <span className="ratingnum badge bg-info align-middle ms-2">{customize}</span>
                                            </div>
                                        </Col>

                                        <Col sm={6}>
                                            <div className="p-lg-5 p-4 text-center" dir="ltr">
                                                <h5 className="font-size-15 mb-4">Clear/Reset rater</h5>
                                                <div id="raterreset" className="align-middle">

                                                    <Rating
                                                        emptySymbol="mdi mdi-star-outline text-muted fa-2x"
                                                        fullSymbol={reset}
                                                        onHover={() => setreset("mdi mdi-star text-warning fa-2x")}
                                                    />


                                                </div>
                                                <span className="clear-rating" ></span>
                                                <button id="raterreset-button" className="btn btn-outline-primary btn-sm ms-2" onClick={() => setreset("mdi mdi-star-outline text-muted fa-2x")}>Reset</button>
                                            </div>
                                        </Col>

                                    </Row>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </div>



        </React.Fragment>
    );
};

export default ExRating;