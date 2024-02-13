import React, { useState } from "react";
import { Row, Col, Card, CardBody, Container, Nav, NavItem, NavLink, TabContent, TabPane, Tooltip, Modal, UncontrolledTooltip } from "reactstrap";

import { Swiper, SwiperSlide } from "swiper/react";

import { Link, useLocation, useNavigate } from "react-router-dom";

// Import Images
import img1 from "../../assets/images/product/img-1.png";
import img2 from "../../assets/images/product/img-2.png";
import img3 from "../../assets/images/product/img-3.png";
import img4 from "../../assets/images/product/img-4.png";
import img5 from "../../assets/images/product/img-5.png";
import img6 from "../../assets/images/product/img-6.png";

// Breadcrumb
import Breadcrumbs from "../../components/Common/Breadcrumb";

import classnames from "classnames";

//Simple bar
import SimpleBar from "simplebar-react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

import SwiperCore, {
    FreeMode, Navigation, Thumbs
} from 'swiper';

SwiperCore.use([FreeMode, Navigation, Thumbs]);


const CourseDetail = () => {

  const location=useLocation();
  const {coursedata}=location.state;
    // console.log(coursedata)
    const navigate=useNavigate()
    document.title = "Product Detail | Matary - React Admin & Dashboard Template";

    const [thumbsSwiper, setThumbsSwiper] = useState(null);


    const [customActiveTab, setcustomActiveTab] = useState("2");

    const toggleCustom = (tab) => {
        if (customActiveTab !== tab) {
            setcustomActiveTab(tab);
        }
    };

    const [tgrey, settgrey] = useState(false);
    const [tdark, settdark] = useState(false);
    const [tpurple, settpurple] = useState(false);

    const [modal_center, setmodal_center] = useState(false);



    function tog_center() {
        setmodal_center(!modal_center);
    }

    return (
        <React.Fragment>

            <div className="page-content">
                <Container fluid={true}>

                    <Breadcrumbs title="Ecommerce" breadcrumbItem="Course Detail" />

                    <Row>
                        <Col lg={12}>
                            <Card>
                                <CardBody>
                                    <Row>
                                        <Col xl={4}>
                                            <div className="product-detail" dir="ltr">
                                                {/* <div className="product-wishlist">
                                                    <Link to="#">
                                                        <i className="mdi mdi-heart-outline"></i>
                                                    </Link>
                                                </div> */}
                                                <img style={{width:'100%'}} src={coursedata.image} alt="" />
                                                {/* <Swiper navigation={true} thumbs={{ swiper: thumbsSwiper }} className="swiper product-thumbnail-slider rounded border overflow-hidden position-relative">
                                                    <div className="swiper-wrapper">

                                                        <SwiperSlide><img src={img1} alt="" className="img-fluid d-block" /></SwiperSlide>
                                                        <SwiperSlide><img src={img2} alt="" className="img-fluid d-block" /></SwiperSlide>
                                                        <SwiperSlide><img src={img3} alt="" className="img-fluid d-block" /></SwiperSlide>
                                                        <SwiperSlide><img src={img6} alt="" className="img-fluid d-block" /></SwiperSlide>
                                                        <SwiperSlide><img src={img5} alt="" className="img-fluid d-block" /></SwiperSlide>
                                                    </div>
                                                </Swiper> */}
                                                {/* <div className="mt-4">
                                                    <Swiper onSwiper={setThumbsSwiper} slidesPerView={4} freeMode={true} watchSlidesProgress={true} className="swiper product-nav-slider mt-2 overflow-hidden">
                                                        <div className="swiper-wrapper">

                                                            <SwiperSlide className="rounded"><div className="nav-slide-item"><img src={img1} alt="" className="img-fluid d-block" /></div></SwiperSlide>
                                                            <SwiperSlide><div className="nav-slide-item"><img src={img2} alt="" className="img-fluid d-block" /></div></SwiperSlide>
                                                            <SwiperSlide><div className="nav-slide-item"><img src={img3} alt="" className="img-fluid d-block" /></div></SwiperSlide>
                                                            <SwiperSlide><div className="nav-slide-item"><img src={img6} alt="" className="img-fluid d-block" /></div></SwiperSlide>
                                                            <SwiperSlide><div className="nav-slide-item"><img src={img5} alt="" className="img-fluid d-block" /></div></SwiperSlide>
                                                        </div>
                                                    </Swiper>
                                                </div> */}

                                                {/* <div className="row text-center mt-3">
                                                    <div className="col-sm-6">
                                                        <div className="d-grid">
                                                            <button type="button" className="btn btn-primary waves-effect waves-light mt-2 me-1">
                                                                <i className="bx bx-cart-alt me-2"></i> Add to cart
                                                            </button>
                                                        </div>
                                                    </div>
                                                    <div className="col-sm-6">
                                                        <div className="d-grid">
                                                            <button type="button" className="btn btn-light waves-effect  mt-2 waves-light">
                                                                <i className="bx bx-shopping-bag me-2"></i>Buy now
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div> */}
                                            </div>
                                        </Col>
                                        <Col xl={8}>
                                            <div className="mt-4 mt-xl-3 ps-xl-4">
                                                <div style={{
                                                  display:'flex',
                                                  alignItems:'center',
                                                  justifyContent:'space-between'
                                                }}>
                                                <div>
                                                  <h4 className="font-size-20 mb-3">{coursedata.CourseName}</h4>
                                                  <div className="text-muted">
                                                      <span className="badge bg-success font-size-14 me-1"><i className="mdi mdi-star"></i> 4.2</span> 234 Reviews
                                                  </div>
                                                </div>
                                                <button onClick={()=>{
                                                  navigate("/units",{state:{data:coursedata}})
                                                }} className="btn btn-primary"

                                                >units</button>
                                                </div>

                                                <h5 className="mt-4 pt-2">{coursedata.CoursePrice}<span className="text-danger font-size-14 ms-2">- 20 % Off</span></h5>

                                                <p className="mt-4 text-muted">{coursedata.description}</p>

                                                {/* <div>
                                                    <Row>
                                                        <Col md={6}>
                                                            <div className="mt-3">

                                                                <h5 className="font-size-14">Specification :</h5>
                                                                <ul className="list-unstyled product-desc-list text-muted">
                                                                    <li><i className="mdi mdi-circle-medium me-1 align-middle"></i> High Quality</li>
                                                                    <li><i className="mdi mdi-circle-medium me-1 align-middle"></i> Leather</li>
                                                                    <li><i className="mdi mdi-circle-medium me-1 align-middle"></i> All Sizes available</li>
                                                                    <li><i className="mdi mdi-circle-medium me-1 align-middle"></i> 4 Different Color</li>
                                                                </ul>

                                                            </div>
                                                        </Col>

                                                        <Col md={6}>
                                                            <div className="mt-3">
                                                                <h5 className="font-size-14">Services :</h5>
                                                                <ul className="list-unstyled product-desc-list text-muted">
                                                                    <li><i className="bx bx-log-in-circle text-primary me-1"></i> 10 Days Replacement</li>
                                                                    <li><i className="bx bx-dollar-circle text-primary me-1"></i> Cash on Delivery available</li>
                                                                </ul>
                                                            </div>
                                                        </Col>
                                                    </Row>

                                                    <div className="mt-3">

                                                        <h5 className="font-size-14 mb-3"><i className="bx bx-map-pin font-size-20 text-primary align-middle me-2"></i> Delivery location</h5>

                                                        <div className="d-inline-flex">

                                                            <div className="input-group mb-3">
                                                                <input type="text" className="form-control" placeholder="Enter Delivery pincode " />

                                                                <button className="btn btn-light" type="button">Check</button>

                                                            </div>
                                                        </div>

                                                    </div>

                                                    <Row>
                                                        <Col lg={7} sm={8}>
                                                            <div className="product-desc-color mt-3">
                                                                <h5 className="font-size-14">Colors :</h5>
                                                                <ul className="list-inline">
                                                                    <li className="list-inline-item" id="Gray">
                                                                        <Link to="#" className="active">
                                                                            <div className="product-color-item">
                                                                                <img src={img1} alt="" className="avatar-md" />
                                                                            </div>
                                                                        </Link>
                                                                    </li>
                                                                    <li className="list-inline-item" id="Dark">
                                                                        <Link to="#">
                                                                            <div className="product-color-item">
                                                                                <img src={img2} alt="" className="avatar-md" />
                                                                            </div>
                                                                        </Link>
                                                                    </li>
                                                                    <li className="list-inline-item" id="Purple">
                                                                        <Link to="#">
                                                                            <div className="product-color-item">
                                                                                <img src={img3} alt="" className="avatar-md" />
                                                                            </div>
                                                                        </Link>
                                                                    </li>
                                                                    <li className="list-inline-item">
                                                                        <Link to="#" className="text-primary border-0 p-1" onClick={() => { tog_center(); }}>
                                                                            2 + Colors
                                                                        </Link>
                                                                    </li>
                                                                </ul>

                                                            </div>
                                                        </Col>

                                                        <Col lg={5} sm={4}>
                                                            <div className="mt-3">
                                                                <h5 className="font-size-14 mb-3">Select Sizes :</h5>

                                                                <div className="d-inline-flex">
                                                                    <select className="form-select w-sm">
                                                                        <option value="1">3</option>
                                                                        <option value="2">4</option>
                                                                        <option value="3">5</option>
                                                                        <option value="4">6</option>
                                                                        <option value="5" defaultValue>7</option>
                                                                        <option value="6">8</option>
                                                                        <option value="7">9</option>
                                                                        <option value="8">10</option>
                                                                    </select>
                                                                </div>
                                                            </div>
                                                        </Col>
                                                    </Row>
                                                </div> */}
                                            </div>
                                        </Col>
                                    </Row>

                                    {/* <Row>
                                        <Col xl={8}>
                                            <div className="mt-4 pt-3">
                                                <h5 className="font-size-14 mb-3">Reviews : </h5>
                                                <div className="text-muted mb-3">
                                                    <span className="badge bg-success font-size-14 me-1"><i className="mdi mdi-star"></i> 4.2</span> 234 Reviews
                                                </div>
                                                <div className="border py-4 rounded">

                                                    <SimpleBar className="px-4" data-simplebar style={{ maxHeight: "260px" }}>

                                                        <div className="border-bottom pb-3">
                                                            <p className="float-sm-end text-muted font-size-13">12 July, 2021</p>
                                                            <div className="badge bg-success mb-2"><i className="mdi mdi-star"></i> 4.1</div>
                                                            <p className="text-muted mb-4">It will be as simple as in fact, it will be Occidental. It will seem like simplified</p>
                                                            <div className="d-flex align-items-start">
                                                                <div className="flex-grow-1">
                                                                    <h5 className="font-size-15 mb-0">Samuel</h5>
                                                                </div>

                                                                <div className="flex-shrink-0">
                                                                    <ul className="list-inline product-review-link mb-0">
                                                                        <li className="list-inline-item">
                                                                            <Link to="#" data-bs-toggle="tooltip" data-bs-placement="top" title="" data-bs-original-title="Like"><i className="bx bx-like"></i></Link>
                                                                        </li>
                                                                        <li className="list-inline-item">
                                                                            <Link to="#" data-bs-toggle="tooltip" data-bs-placement="top" title="" data-bs-original-title="Comment"><i className="bx bx-comment-dots"></i></Link>
                                                                        </li>
                                                                    </ul>
                                                                </div>
                                                            </div>

                                                        </div>

                                                        <div className="border-bottom py-3">
                                                            <p className="float-sm-end text-muted font-size-13">06 July, 2021</p>
                                                            <div className="badge bg-success mb-2"><i className="mdi mdi-star"></i> 4.0</div>
                                                            <p className="text-muted mb-4">Sed ut perspiciatis unde omnis iste natus error sit</p>
                                                            <div className="d-flex align-items-start">
                                                                <div className="flex-grow-1">
                                                                    <h5 className="font-size-15 mb-0">Joseph</h5>
                                                                </div>

                                                                <div className="flex-shrink-0">
                                                                    <ul className="list-inline product-review-link mb-0">
                                                                        <li className="list-inline-item">
                                                                            <Link to="#" data-bs-toggle="tooltip" data-bs-placement="top" title="" data-bs-original-title="Like"><i className="bx bx-like"></i></Link>
                                                                        </li>
                                                                        <li className="list-inline-item">
                                                                            <Link to="#" data-bs-toggle="tooltip" data-bs-placement="top" title="" data-bs-original-title="Comment"><i className="bx bx-comment-dots"></i></Link>
                                                                        </li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                        </div>

                                                        <div className="border-bottom py-3">
                                                            <p className="float-sm-end text-muted font-size-13">26 June, 2021</p>
                                                            <div className="badge bg-success mb-2"><i className="mdi mdi-star"></i> 4.2</div>
                                                            <p className="text-muted mb-4">Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet</p>
                                                            <div className="d-flex align-items-start">
                                                                <div className="flex-grow-1">
                                                                    <h5 className="font-size-15 mb-0">Paul</h5>
                                                                </div>

                                                                <div className="flex-shrink-0">
                                                                    <ul className="list-inline product-review-link mb-0">
                                                                        <li className="list-inline-item">
                                                                            <Link to="#" data-bs-toggle="tooltip" data-bs-placement="top" title="" data-bs-original-title="Like"><i className="bx bx-like"></i></Link>
                                                                        </li>
                                                                        <li className="list-inline-item">
                                                                            <Link to="#" data-bs-toggle="tooltip" data-bs-placement="top" title="" data-bs-original-title="Comment"><i className="bx bx-comment-dots"></i></Link>
                                                                        </li>
                                                                    </ul>
                                                                </div>
                                                            </div>

                                                        </div>

                                                    </SimpleBar>

                                                    <div className="px-4">
                                                        <div className="border rounded mt-4">
                                                            <form action="#">
                                                                <div className="px-2 py-1 bg-light">
                                                                    <div className="btn-group" role="group">
                                                                        <button type="button" className="btn btn-sm btn-link text-dark text-decoration-none"><i className="bx bx-link"></i></button>
                                                                        <button type="button" className="btn btn-sm btn-link text-dark text-decoration-none"><i className="bx bx-smile"></i></button>
                                                                        <button type="button" className="btn btn-sm btn-link text-dark text-decoration-none"><i className="bx bx-at"></i></button>
                                                                    </div>
                                                                </div>
                                                                <textarea rows="2" className="form-control border-0 resize-none" placeholder="Your Message..."></textarea>
                                                            </form>
                                                        </div>

                                                        <div className="text-end mt-3">
                                                            <button type="button" className="btn btn-success w-sm text-truncate ms-2"> Send <i className="bx bx-send ms-2 align-middle"></i></button>
                                                        </div>
                                                    </div>

                                                </div>

                                            </div>
                                        </Col>

                                        <Col xl={4}>
                                            <div className="mt-4 pt-3">
                                                <h5 className="font-size-14 mb-3">Product description: </h5>
                                                <div className="product-desc">
                                                    <Nav tabs className="nav nav-tabs nav-tabs-custom">
                                                        <NavItem>
                                                            <NavLink
                                                                style={{ cursor: "pointer" }}
                                                                className={classnames({
                                                                    active: customActiveTab === "1",
                                                                })}
                                                                onClick={() => {
                                                                    toggleCustom("1");
                                                                }}
                                                            >
                                                                Description
                                                            </NavLink>
                                                        </NavItem>
                                                        <NavItem>
                                                            <NavLink
                                                                style={{ cursor: "pointer" }}
                                                                className={classnames({
                                                                    active: customActiveTab === "2",
                                                                })}
                                                                onClick={() => {
                                                                    toggleCustom("2");
                                                                }}
                                                            >
                                                                Specifications
                                                            </NavLink>
                                                        </NavItem>
                                                    </Nav>

                                                    <TabContent
                                                        activeTab={customActiveTab}
                                                        className="border border-top-0 p-4"
                                                    >
                                                        <TabPane tabId="1" id="desc">
                                                            <Row>
                                                                <Col md={3}>
                                                                    <div>
                                                                        <img src={img6} alt="" className="img-fluid mx-auto d-block" />
                                                                    </div>
                                                                </Col>
                                                                <Col md={9}>
                                                                    <div className="text-muted">
                                                                        <p>If several languages coalesce, the grammar of the resulting language is more simple and regular</p>
                                                                        <p>It will be as simple as occidental in fact.</p>

                                                                        <div>
                                                                            <ul className="list-unstyled product-desc-list text-muted mb-0">
                                                                                <li><i className="mdi mdi-circle-medium me-1 align-middle"></i> Sed ut perspiciatis omnis iste</li>
                                                                                <li><i className="mdi mdi-circle-medium me-1 align-middle"></i> Neque porro quisquam est</li>
                                                                                <li><i className="mdi mdi-circle-medium me-1 align-middle"></i> Quis autem vel eum iure</li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>
                                                                </Col>
                                                            </Row>
                                                        </TabPane>

                                                        <TabPane tabId="2" id="specifi">
                                                            <div className="table-responsive">
                                                                <table className="table table-nowrap mb-0">
                                                                    <tbody>
                                                                        <tr>
                                                                            <th scope="row" style={{ width: "50%" }}><b>Category :</b></th>
                                                                            <td>Shoes</td>
                                                                        </tr>
                                                                        <tr>
                                                                            <th scope="row"><b>Brand :</b></th>
                                                                            <td>Nike</td>
                                                                        </tr>
                                                                        <tr>
                                                                            <th scope="row"><b>Color :</b></th>
                                                                            <td>Gray</td>
                                                                        </tr>
                                                                        <tr>
                                                                            <th scope="row"><b>Quality :</b></th>
                                                                            <td>High</td>
                                                                        </tr>
                                                                        <tr>
                                                                            <th scope="row"><b>Material :</b></th>
                                                                            <td>Leather</td>
                                                                        </tr>
                                                                    </tbody>
                                                                </table>
                                                            </div>
                                                        </TabPane>

                                                    </TabContent>
                                                </div>
                                            </div>
                                        </Col>
                                    </Row> */}
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </div>
            {/* <Tooltip
                placement="top"
                isOpen={tgrey}
                target="Gray"
                toggle={() => {
                    settgrey(!tgrey);
                }}
            >
                Gray
            </Tooltip> */}

            {/* <Tooltip
                placement="top"
                isOpen={tdark}
                target="Dark"
                toggle={() => {
                    settdark(!tdark);
                }}
            >
                Dark
            </Tooltip>

            <Tooltip
                placement="top"
                isOpen={tpurple}
                target="Purple"
                toggle={() => {
                    settpurple(!tpurple);
                }}
            >
                Purple
            </Tooltip> */}


            <Modal
                isOpen={modal_center}
                toggle={() => {
                    tog_center();
                }}
                centered
                id="color-img"
            >
                <div className="modal-header">
                    <h5 className="modal-title" id="color-imgLabel">Product Images</h5>
                    <button
                        type="button"
                        onClick={() => {
                            setmodal_center(false);
                        }}
                        className="btn-close"
                        data-dismiss="modal"
                        aria-label="Close"
                    >

                    </button>
                </div>
                <div className="modal-body">
                    <div className="product-desc-color">
                        <ul className="list-inline mb-0">
                            <li className="list-inline-item">
                                <Link to="#" className="active" id="Grey">
                                    <div className="product-color-item">
                                        <img src={img1} alt="" className="avatar-md" />
                                    </div>
                                </Link>
                            </li>
                            <li className="list-inline-item">
                                <Link to="#" id="Dark">
                                    <div className="product-color-item">
                                        <img src={img2} alt="" className="avatar-md" />
                                    </div>
                                </Link>
                            </li>
                            <li className="list-inline-item">
                                <Link to="#" id="Purple">
                                    <div className="product-color-item">
                                        <img src={img3} alt="" className="avatar-md" />
                                    </div>
                                </Link>
                            </li>
                            <li className="list-inline-item">
                                <Link to="#" id="Sky">
                                    <div className="product-color-item">
                                        <img src={img4} alt="" className="avatar-md" />
                                    </div>
                                </Link>
                            </li>
                            <li className="list-inline-item">
                                <Link to="#" id="Green">
                                    <div className="product-color-item">
                                        <img src={img5} alt="" className="avatar-md" />
                                    </div>
                                </Link>
                            </li>
                            <li className="list-inline-item">
                                <Link to="#" id="White">
                                    <div className="product-color-item">
                                        <img src={img6} alt="" className="avatar-md" />
                                    </div>
                                </Link>
                            </li>

                        </ul>

                    </div>

                </div>
                <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" onClick={() => {
                        setmodal_center(false);
                    }}>Close</button>
                </div>

                <UncontrolledTooltip
                    placement="top"
                    target="Grey"
                >
                    Grey
                </UncontrolledTooltip>

                <UncontrolledTooltip
                    placement="top"
                    target="Dark"
                >
                    Dark
                </UncontrolledTooltip>

                <UncontrolledTooltip
                    placement="top"
                    target="Purple"
                >
                    Purple
                </UncontrolledTooltip>

                <UncontrolledTooltip
                    placement="top"
                    target="White"
                >
                    White
                </UncontrolledTooltip>

                <UncontrolledTooltip
                    placement="top"
                    target="Sky"
                >
                    Sky
                </UncontrolledTooltip>

                <UncontrolledTooltip
                    placement="top"
                    target="Green"
                >
                    Green
                </UncontrolledTooltip>

            </Modal>

        </React.Fragment>
    );
};

export default CourseDetail;
