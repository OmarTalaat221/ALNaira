import React from 'react';

import { Container, Row, Col, Card, CardBody } from 'reactstrap';

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
// Import images
import img2 from "../../assets/images/small/img-2.jpg";
import img5 from "../../assets/images/small/img-5.jpg";


import Breadcrumbs from '../../components/Common/Breadcrumb';
import { Link } from 'react-router-dom';


const TimelinePage = () => {
    document.title = "Timeline | Matary - React Admin & Dashboard Template";

    return (
        <React.Fragment>
            <div className="page-content">
                <Container fluid={true}>
                    <Breadcrumbs title="Utility" breadcrumbItem="Timeline" />
                    <Row>
                        <Col lg={12}>
                            <Card>
                                <CardBody>
                                    <h4 className="card-title mb-5">Horizontal Timeline</h4>

                                    <div className="hori-timeline">


                                        <Swiper watchSlidesProgress={true} slidesPerView={4} className="swiper-container slider events">
                                                <div className="swiper-wrapper">
                                                    <SwiperSlide>

                                                        <div className="swiper-slide">
                                                            <div className="event-list">
                                                                <div className="item event-list">
                                                                    <div className="event-date">
                                                                        <div className="text-primary font-size-13">03 May</div>
                                                                    </div>

                                                                    <div className="px-3">
                                                                        <h5 className="font-size-17">First event</h5>
                                                                        <p className="text-muted">If several languages coalesce, the grammar of the resulting the individual</p>
                                                                        <div>
                                                                            <Link to="#">View more <i className="mdi mdi-arrow-right"></i></Link>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>


                                                    </SwiperSlide>
                                                    <SwiperSlide>

                                                        <div className="swiper-slide">
                                                            <div className="event-list">
                                                                <div className="item event-list">
                                                                    <div className="event-date">
                                                                        <div className="text-primary font-size-13">08 May</div>
                                                                    </div>

                                                                    <div className="px-3">
                                                                        <h5 className="font-size-17">Second event</h5>
                                                                        <p className="text-muted">Sed ut perspiciatis unde omnis iste natus error sit illo inventore veritatis</p>
                                                                        <div>
                                                                            <Link to="#">View more <i className="mdi mdi-arrow-right"></i></Link>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>

                                                    </SwiperSlide>
                                                    <SwiperSlide>

                                                        <div className="swiper-slide">
                                                            <div className="event-list">
                                                                <div className="item event-list">
                                                                    <div className="event-date">
                                                                        <div className="text-primary font-size-13">11 May</div>
                                                                    </div>

                                                                    <div className="px-3">
                                                                        <h5 className="font-size-17">Third event</h5>
                                                                        <p className="text-muted">Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit</p>
                                                                        <div>
                                                                            <Link to="#">View more <i className="mdi mdi-arrow-right"></i></Link>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>

                                                    </SwiperSlide>
                                                    <SwiperSlide>

                                                        <div className="swiper-slide">
                                                            <div className="event-list">
                                                                <div className="item event-list">
                                                                    <div className="event-date">
                                                                        <div className="text-primary font-size-13">16 May</div>
                                                                    </div>

                                                                    <div className="px-3">
                                                                        <h5 className="font-size-17">Fourth event</h5>
                                                                        <p className="text-muted">Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam</p>
                                                                        <div>
                                                                            <Link to="#">View more <i className="mdi mdi-arrow-right"></i></Link>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>

                                                    </SwiperSlide>
                                                    <SwiperSlide>

                                                        <div className="swiper-slide">
                                                            <div className="event-list">
                                                                <div className="item event-list">
                                                                    <div className="event-date">
                                                                        <div className="text-primary font-size-13">23 May</div>
                                                                    </div>

                                                                    <div className="px-3">
                                                                        <h5 className="font-size-17">Fifth event</h5>
                                                                        <p className="text-muted">Itaque earum rerum hic tenetur a sapiente delectus maiores alias consequatur aut</p>
                                                                        <div>
                                                                            <Link to="#">View more <i className="mdi mdi-arrow-right"></i></Link>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>

                                                    </SwiperSlide>
                                                    <SwiperSlide>

                                                        <div className="swiper-slide">
                                                            <div className="event-list">
                                                                <div className="item event-list">
                                                                    <div className="event-date">
                                                                        <div className="text-primary font-size-13">27 May</div>
                                                                    </div>

                                                                    <div className="px-3">
                                                                        <h5 className="font-size-17">Sixth event</h5>
                                                                        <p className="text-muted">Donec quam felis ultricies nec pellentesque eu pretium sem consequat quis</p>
                                                                        <div>
                                                                            <Link to="#">View more <i className="mdi mdi-arrow-right"></i></Link>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>

                                                    </SwiperSlide>
                                                </div>
                                        </Swiper>
                                    </div>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>

                    <Row>
                        <Col lg={12}>
                            <Card>
                                <CardBody>
                                    <h4 className="card-title mb-5">Vertical Timeline</h4>
                                    <div className="">
                                        <ul className="verti-timeline" style={{listStyleType:"none"}}>
                                            <li className="event-list">
                                                <div className="event-date text-primar">03 May</div>
                                                <h5 className="font-size-17">Timeline event One</h5>
                                                <p className="text-muted">Perspitis unde omnis it voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae explicabo.</p>
                                            </li>
                                            <li className="event-list">
                                                <div className="event-date text-primar">08 May</div>
                                                <h5 className="font-size-17">Timeline event Two</h5>
                                                <p className="text-muted">At vero eos dignissimos ducimus quos
                                                    dolores chooses to enjoy pleasure that has no annoying.</p>
                                                <div className="d-flex flex-wrap align-items-start event-img mt-3 gap-2">
                                                    <img src={img2} alt="" className="img-fluid rounded" width="60" />
                                                    <img src={img5} alt="" className="img-fluid rounded" width="60" />
                                                </div>
                                            </li>
                                            <li className="event-list">
                                                <div className="event-date text-primar">11 May</div>
                                                <h5 className="font-size-17">Timeline event Three</h5>
                                                <p className="text-muted">Vivamus ultrices massa turna interdum eu. Pellentesque habitant morbi tristique eget justo sit amet est varius mollis et quis nisi. Suspendisse potenti. senectus et netus et malesuada fames ac turpis egestas.</p>
                                            </li>
                                            <li className="event-list">
                                                <div className="event-date text-primar">16 May</div>
                                                <h5 className="font-size-17">Timeline event Four</h5>
                                                <p className="text-muted mb-0">Printing and typesetting industry. been the industry'scrambled it make a type specimen book.</p>
                                                <button type="button" className="btn btn-primary btn-rounded waves-effect waves-light mt-4">See
                                                    more detail
                                                </button>
                                            </li>
                                            <li className="event-list">
                                                <div className="event-date text-primar">27 May</div>
                                                <h5 className="font-size-17">Timeline event Five</h5>
                                                <p className="text-muted">Excepturi, obcaecati, quisquam id
                                                    molestias eaque asperiores voluptatibus cupiditate error
                                                    assumenda delectus odit
                                                    similique earum voluptatem
                                                    Odit, itaque, deserunt corporis vero ipsum nisi repellat ... <Link to="#">Read more</Link></p>
                                            </li>
                                        </ul>
                                    </div>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </div>
        </React.Fragment >

    );
};

export default TimelinePage;