import React from 'react';
import { Link } from 'react-router-dom';

import { Container, Row, Col } from 'reactstrap';

// Import Images
import img500 from "../../assets/images/500-img.png";
import bgImage from "../../assets/images/auth-bg.jpg";

const Error500 = () => {
    document.title = "500 Page | Matary - React Admin & Dashboard Template";

    return (
        <React.Fragment>
            <div className="authentication-bg min-vh-100" style={{ background : `url(${bgImage}) bottom`}}>
                <div className="bg-overlay bg-light"></div>
                <Container>
                    <Row className="justify-content-center">
                        <div className="col-8">
                            <div className="home-wrapper text-center">
                                <div>
                                    <Row className="justify-content-center">
                                        <Col sm={9}>
                                            <div className="error-img">
                                                <img src={img500} alt="" className="img-fluid mx-auto d-block" />
                                            </div>
                                        </Col>
                                    </Row>
                                </div>

                                <h4 className="text-uppercase mt-5">Internal Server Error</h4>
                                <p className="text-muted">It will be as simple as Occidental in fact, it will be Occidental</p>
                                <div className="mt-5">
                                    <Link to="/" className="btn btn-primary waves-effect waves-light">Back to Dashboard</Link>
                                </div>

                            </div>
                        </div>
                    </Row>
                </Container>
            </div>
        </React.Fragment >
    );
};

export default Error500;