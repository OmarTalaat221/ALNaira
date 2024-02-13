import React, { useState } from 'react';
import { Card, CardBody, Col, Container, Row, Button, CardHeader } from 'reactstrap';

//Lightbox
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css";
import ModalVideo from "react-modal-video";
import "react-modal-video/scss/modal-video.scss";

// Import Images
import img1 from '../../assets/images/small/img-1.jpg';
import img2 from '../../assets/images/small/img-2.jpg';
import img3 from '../../assets/images/small/img-3.jpg';
import img4 from '../../assets/images/small/img-4.jpg';
import img5 from '../../assets/images/small/img-5.jpg';
import img6 from '../../assets/images/small/img-6.jpg';


//Import Breadcrumb
import Breadcrumbs from "../../components/Common/Breadcrumb";

const images = [img1, img2, img3, img4, img5, img6];
const imageZoom = [img4, img5, img1];

const ExLightbox = () => {
    document.title = "Lightbox | Matary - React Admin & Dashboard Template";


    const [photoIndex, setphotoIndex] = useState(0);
    const [isGallery, setisGallery] = useState(false);
    const [isGalleryZoom, setisGalleryZoom] = useState(false);
    const [isOpen, setisOpen] = useState(false);
    const [isOpen1, setisOpen1] = useState(false);

    return (
        <React.Fragment>
            <div className="page-content">
                <Container fluid={true}>
                    <Breadcrumbs title="Extended" breadcrumbItem="Lightbox" />


                    {isGallery ? (
                        <Lightbox
                            mainSrc={images[photoIndex]}
                            nextSrc={images[(photoIndex + 1) % images.length]}
                            prevSrc={images[(photoIndex + images.length - 1) % images.length]}
                            enableZoom={true}
                            onCloseRequest={() => {
                                setisGallery(false);
                            }}
                            onMovePrevRequest={() => {
                                setphotoIndex((photoIndex + images.length - 1) % images.length);
                            }}
                            onMoveNextRequest={() => {
                                setphotoIndex((photoIndex + 1) % images.length);
                            }}
                            imageCaption={"Project " + parseFloat(photoIndex + 1)}
                        />
                    ) : null}

                    {isGalleryZoom ? (
                        <Lightbox
                            mainSrc={imageZoom[photoIndex]}
                            nextSrc={imageZoom[(photoIndex + 1) % imageZoom.length]}
                            prevSrc={imageZoom[(photoIndex + imageZoom.length - 1) % imageZoom.length]}
                            onCloseRequest={() => {
                                setisGalleryZoom(false);
                            }}
                            onMovePrevRequest={() => {
                                setphotoIndex((photoIndex + imageZoom.length - 1) % imageZoom.length);
                            }}
                            onMoveNextRequest={() => {
                                setphotoIndex((photoIndex + 1) % imageZoom.length);
                            }}
                        />
                    ) : null}


                    <Row>
                        <Col xl={12}>
                            <Card>
                                <CardHeader>
                                    <h4 className="card-title"> Lightbox gallery</h4>
                                    <p className="card-title-desc">In this example lazy-loading of images is enabled for
                                        the next image based on move direction.</p>
                                </CardHeader>

                                <CardBody>

                                    <div className="popup-gallery">
                                        <Row>
                                            <Col xl={2} md={4} className="col-6">
                                                <div className="mt-4">
                                                    <div className="img-fluid">
                                                        <img src={img1} alt="" className="img-fluid d-block" onClick={() => { setisGallery(true); setphotoIndex(0); }} />
                                                    </div>
                                                </div>
                                            </Col>
                                            <Col xl={2} md={4} className="col-6">
                                                <div className="mt-4">
                                                    <div className="img-fluid">
                                                        <img src={img2} alt="" className="img-fluid d-block" onClick={() => { setisGallery(true); setphotoIndex(1); }} />
                                                    </div>
                                                </div>
                                            </Col>
                                            <Col xl={2} md={4} className="col-6">
                                                <div className="mt-4">
                                                    <div className="img-fluid">
                                                        <img src={img3} alt="" className="img-fluid d-block" onClick={() => { setisGallery(true); setphotoIndex(2); }} />
                                                    </div>
                                                </div>
                                            </Col>
                                            <Col xl={2} md={4} className="col-6">
                                                <div className="mt-4">
                                                    <div className="img-fluid">
                                                        <img src={img4} alt="" className="img-fluid d-block" onClick={() => { setisGallery(true); setphotoIndex(3); }} />
                                                    </div>
                                                </div>
                                            </Col>
                                            <Col xl={2} md={4} className="col-6">
                                                <div className="mt-4">
                                                    <div className="img-fluid">
                                                        <img src={img5} alt="" className="img-fluid d-block" onClick={() => { setisGallery(true); setphotoIndex(4); }} />
                                                    </div>
                                                </div>
                                            </Col>
                                            <Col xl={2} md={4} className="col-6">
                                                <div className="mt-4">
                                                    <div className="img-fluid">
                                                        <img src={img6} alt="" className="img-fluid d-block" onClick={() => { setisGallery(true); setphotoIndex(5); }} />
                                                    </div>
                                                </div>
                                            </Col>
                                        </Row>
                                    </div>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>


                    <Row>
                        <Col xl={6}>
                            <Card>
                                <CardHeader>
                                    <h4 className="card-title mb-0"> Images with Description</h4>
                                </CardHeader>
                                <CardBody>
                                    <Row>
                                        <Col lg={3} sm={6}>
                                            <div className="">
                                                <img src={img4} className="img-fluid" alt="work-thumbnail" onClick={() => { setisGalleryZoom(true); setphotoIndex(0); }} />
                                            </div>
                                        </Col>

                                        <Col lg={3} sm={6}>
                                            <div className="mt-4 mt-md-0">
                                                <img src={img5} className="img-fluid" alt="work-thumbnail" onClick={() => { setisGalleryZoom(true); setphotoIndex(1); }} />
                                            </div>
                                        </Col>

                                        <Col lg={3} sm={6}>
                                            <div className="mt-4 mt-lg-0">
                                                <img src={img1} className="img-fluid" alt="work-thumbnail" onClick={() => { setisGalleryZoom(true); setphotoIndex(2); }} />
                                            </div>
                                        </Col>
                                    </Row>
                                </CardBody>
                            </Card>
                        </Col>

                        <Col xl={6}>
                            <Card>
                                <CardHeader>
                                    <h4 className="card-title">Popup with Video or Map</h4>
                                    <p className="card-title-desc">In this example lazy-loading of images is enabled for the
                                        next image based on move direction. </p>
                                </CardHeader>
                                <CardBody>
                                    <Row>


                                        <Col className="col-12">
                                            <div className="button-items">
                                                <Button
                                                    color="light"
                                                    className="image-popup-video-map btn btn-light mo-mb-2"
                                                    onClick={() => {
                                                        setisOpen(!isOpen);
                                                    }}
                                                >
                                                    Open YouTube Video
                                                </Button>{" "}
                                                <Button
                                                    color="light"
                                                    className="image-popup-video-map btn btn-light mo-mb-2"
                                                    onClick={() => {
                                                        setisOpen1(!isOpen1);
                                                    }}
                                                >
                                                    Open Vimeo Video
                                                </Button>{" "}


                                                <ModalVideo
                                                    videoId="L61p2uyiMSo"
                                                    channel="youtube"
                                                    isOpen={isOpen}
                                                    onClose={() => {
                                                        setisOpen(!isOpen);
                                                    }}
                                                />
                                                <ModalVideo
                                                    videoId="L61p2uyiMSo"
                                                    channel="youtube"
                                                    isOpen={isOpen1}
                                                    onClose={() => {
                                                        setisOpen1(false);
                                                    }}
                                                />
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

export default ExLightbox;