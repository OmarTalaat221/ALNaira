import React from 'react';

import { Container, Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';

//Import Countdown
import Countdown from "react-countdown";

// Import Images
import logosm from "../../assets/images/logo-sm.svg";
import coomingsoon from "../../assets/images/coming-soon-img.png";
import bgImage from "../../assets/images/auth-bg.jpg";

const ComingSoonPage = () => {
    document.title = "Coming Soon | Matary - React Admin & Dashboard Template";


    const renderer = ({ days, hours, minutes, seconds, completed }) => {
        if (completed) {
            // Render a completed state
            return <span className='countdown-endtxt'>The countdown has ended!</span>
        } else {
            return (
                <>
                    <div className="countdownlist-item">
                        <div className="count-title">Days</div>
                        <div className="count-num">
                            {days}
                        </div>
                    </div>{" "}
                    <div className="countdownlist-item">
                        <div className="count-title">Hours</div>
                        <div className="count-num">
                            {hours}
                        </div>
                    </div>{" "}
                    <div className="countdownlist-item">
                        <div className="count-title">Minutes</div>
                        <div className="count-num">
                            {minutes}
                        </div>
                    </div>{" "}
                    <div className="countdownlist-item">
                        <div className="count-title">Seconds</div>
                        <div className="count-num">
                            {seconds}
                        </div>
                    </div>
                </>
            )
        }
    }

    return (
        <React.Fragment>
            <div className="authentication-bg min-vh-100"
                style={{ background: `url(${bgImage}) bottom` }}>
                <div className="bg-overlay bg-light"></div>
                <Container>
                    <Row className="justify-content-center">
                        <Col className="col-8">
                            <div className="home-wrapper text-center">
                                <Link to="/" className="auth-logo">
                                    <span className="logo-lg">
                                        <img src={logosm} alt="" height="22" />
                                        <span className="logo-txt">Matary</span>
                                    </span>
                                </Link>
                                <h3 className="mt-3">Let's get started with Matary</h3>
                                <p className="mb-0">It will be as simple as Occidental in fact it will be Occidental.</p>

                                <Row className="justify-content-center mt-5">
                                    <Col lg={6} sm={5}>
                                        <div className="maintenance-img mb-5">
                                            <img src={coomingsoon} alt=""
                                                className="img-fluid mx-auto d-block" />
                                        </div>
                                    </Col>
                                </Row>

                                <div id="countdown" className="countdownlist">
                                    <Countdown date="2023/12/31" renderer={renderer} />
                                </div>

                                <div className="input-group countdown-input-group mx-auto my-5">
                                    <input type="email" className="form-control border-light shadow"
                                        placeholder="Enter your email address" aria-label="search result"
                                        aria-describedby="button-email" />
                                    <button className="btn btn-primary" type="button" id="button-email">Send <i
                                        className="bx bx-paper-plane ms-1"></i></button>
                                </div>

                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </React.Fragment >
    );
};

export default ComingSoonPage;