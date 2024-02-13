import React from 'react';
import { Link } from 'react-router-dom';

import { Container, Row, Col } from 'reactstrap';

// Import Images
import img404 from "../../assets/images/404-img.png";
import bgImage from "../../assets/images/auth-bg.jpg";

const Error404 = () => {
    document.title = "404 Page | Matary - React Admin & Dashboard Template";

    return (
        <React.Fragment>
            <div className="authentication-bg min-vh-100"
             style={{ background : `url(${bgImage}) bottom`}}
             >
                <div className="bg-overlay bg-light"></div>
                <Container>
                    <Row className="justify-content-center">
                        <div className="col-8">
                            <div className="home-wrapper text-center">
                                <div>
                                    <Row className="justify-content-center">
                                        <Col sm={9}>
                                            <div className="error-img">
                                                <img src={img404} alt="" className="img-fluid mx-auto d-block" />
                                            </div>
                                        </Col>
                                    </Row>
                                </div>

                                <h4 className="text-uppercase mt-5">Sorry, page not found</h4>
                                <p className="text-muted">It will be as simple as Occidental in fact, it will be Occidental</p>
                                <div className="mt-5">
                                    <Link to="/" className="btn btn-primary waves-effect waves-light" >Back to Dashboard</Link>
                                </div>

                            </div>
                        </div>
                    </Row>
                </Container>
            </div>
        </React.Fragment >
    );
};

export default Error404;