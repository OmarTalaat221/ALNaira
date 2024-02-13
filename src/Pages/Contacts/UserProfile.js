import React, { useState } from "react";
import { Link } from "react-router-dom";

import { Card, Col, Container, DropdownItem, DropdownMenu, DropdownToggle, Nav, NavItem, NavLink, Row, TabContent, TabPane, UncontrolledDropdown, CardHeader, CardBody } from "reactstrap";

import classnames from "classnames";


// Import Images
import avatar1 from '../../assets/images/users/avatar-1.jpg';
import avatar2 from '../../assets/images/users/avatar-2.jpg';
import avatar3 from '../../assets/images/users/avatar-3.jpg';
import avatar4 from '../../assets/images/users/avatar-4.jpg';
import avatar5 from '../../assets/images/users/avatar-5.jpg';
import avatar7 from '../../assets/images/users/avatar-7.jpg';

//Import Breadcrumb
import Breadcrumbs from "../../components/Common/Breadcrumb";


const UserProfile = () => {
    document.title = "User Profile | Matary - React Admin & Dashboard Template";


    const [customActiveTab, setcustomActiveTab] = useState("1");

    const toggleCustom = (tab) => {
        if (customActiveTab !== tab) {
            setcustomActiveTab(tab);
        }
    };

    return (
        <React.Fragment>
            <div className="page-content">
                <Container fluid={true}>
                    <Breadcrumbs title="Contacts" breadcrumbItem="User Profile" />
                    <Row className="mb-4">
                        <Col xl={8}>
                            <Card className="card mb-0">

                                <Nav tabs className="nav nav-tabs nav-tabs-custom nav-justified">
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
                                            <i className="bx bx-user-circle font-size-20"></i>
                                            <span className="d-none d-sm-block">About</span>
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
                                            <i className="bx bx-clipboard font-size-20"></i>
                                            <span className="d-none d-sm-block">Tasks</span>
                                        </NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink
                                            style={{ cursor: "pointer" }}
                                            className={classnames({
                                                active: customActiveTab === "3",
                                            })}
                                            onClick={() => {
                                                toggleCustom("3");
                                            }}
                                        >
                                            <i className="bx bx-mail-send font-size-20"></i>
                                            <span className="d-none d-sm-block">Messages</span>
                                        </NavLink>
                                    </NavItem>

                                </Nav>

                                <TabContent
                                    activeTab={customActiveTab}
                                    className="p-4"
                                >
                                    <TabPane tabId="1" id="about">

                                        <div>
                                            <div>
                                                <h5 className="font-size-16 mb-4">Experience</h5>

                                                <ul className="activity-feed mb-0 ps-2">
                                                    <li className="feed-item">
                                                        <div className="feed-item-list">
                                                            <p className="text-muted mb-1">2019 - 2020</p>
                                                            <h5 className="font-size-15">UI/UX Designer</h5>
                                                            <p>Abc Company</p>
                                                            <p className="text-muted">To achieve this, it would be necessary to have uniform grammar, pronunciation and more common words. If several languages coalesce, the grammar of the resulting language is more simple and regular than that of the individual</p>
                                                        </div>
                                                    </li>
                                                    <li className="feed-item">
                                                        <div className="feed-item-list">
                                                            <p className="text-muted mb-1">2017 - 2019</p>
                                                            <h5 className="font-size-15">Graphic Designer</h5>
                                                            <p>xyz Company</p>
                                                            <p className="text-muted">It will be as simple as occidental in fact, it will be Occidental. To an English person, it will seem like simplified English, as a skeptical Cambridge friend of mine told me what Occidental </p>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </div>

                                            <div>
                                                <h5 className="font-size-16 mb-4">Projects</h5>

                                                <div className="table-responsive">
                                                    <table className="table table-nowrap table-hover mb-0">
                                                        <thead>
                                                            <tr>
                                                                <th scope="col">#</th>
                                                                <th scope="col">Projects</th>
                                                                <th scope="col">Date</th>
                                                                <th scope="col">Status</th>
                                                                <th scope="col" style={{ width: "120px" }}>Action</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            <tr>
                                                                <th scope="row">01</th>
                                                                <td><Link to="#" className="text-dark">Brand Logo Design</Link></td>
                                                                <td>
                                                                    18 Jun, 2020
                                                                </td>
                                                                <td>
                                                                    <span className="badge badge-soft-primary font-size-12">Open</span>
                                                                </td>
                                                                <td>

                                                                    <UncontrolledDropdown direction="start">
                                                                        <DropdownToggle tag="a" className="text-muted font-size-18 px-2">
                                                                            <i className="bx bx-dots-vertical-rounded"></i>
                                                                        </DropdownToggle>
                                                                        <DropdownMenu className="dropdown-menu-end">
                                                                            <DropdownItem>Action</DropdownItem>
                                                                            <DropdownItem>Another action</DropdownItem>
                                                                            <DropdownItem>Something else here</DropdownItem>
                                                                        </DropdownMenu>
                                                                    </UncontrolledDropdown>

                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <th scope="row">02</th>
                                                                <td><Link to="#" className="text-dark">Minible Admin</Link></td>
                                                                <td>
                                                                    06 Jun, 2020
                                                                </td>
                                                                <td>
                                                                    <span className="badge badge-soft-primary font-size-12">Open</span>
                                                                </td>
                                                                <td>

                                                                    <UncontrolledDropdown direction="start">
                                                                        <DropdownToggle tag="a" className="text-muted font-size-18 px-2">
                                                                            <i className="bx bx-dots-vertical-rounded"></i>
                                                                        </DropdownToggle>
                                                                        <DropdownMenu className="dropdown-menu-end">
                                                                            <DropdownItem>Action</DropdownItem>
                                                                            <DropdownItem>Another action</DropdownItem>
                                                                            <DropdownItem>Something else here</DropdownItem>
                                                                        </DropdownMenu>
                                                                    </UncontrolledDropdown>


                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <th scope="row">03</th>
                                                                <td><Link to="#" className="text-dark">Chat app Design</Link></td>
                                                                <td>
                                                                    28 May, 2020
                                                                </td>
                                                                <td>
                                                                    <span className="badge badge-soft-success font-size-12">Complete</span>
                                                                </td>
                                                                <td>

                                                                    <UncontrolledDropdown direction="start">
                                                                        <DropdownToggle tag="a" className="text-muted font-size-18 px-2">
                                                                            <i className="bx bx-dots-vertical-rounded"></i>
                                                                        </DropdownToggle>
                                                                        <DropdownMenu className="dropdown-menu-end">
                                                                            <DropdownItem>Action</DropdownItem>
                                                                            <DropdownItem>Another action</DropdownItem>
                                                                            <DropdownItem>Something else here</DropdownItem>
                                                                        </DropdownMenu>
                                                                    </UncontrolledDropdown>

                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <th scope="row">04</th>
                                                                <td><Link to="#" className="text-dark">Minible Landing</Link></td>
                                                                <td>
                                                                    13 May, 2020
                                                                </td>
                                                                <td>
                                                                    <span className="badge badge-soft-success font-size-12">Complete</span>
                                                                </td>
                                                                <td>

                                                                    <UncontrolledDropdown direction="start">
                                                                        <DropdownToggle tag="a" className="text-muted font-size-18 px-2">
                                                                            <i className="bx bx-dots-vertical-rounded"></i>
                                                                        </DropdownToggle>
                                                                        <DropdownMenu className="dropdown-menu-end">
                                                                            <DropdownItem>Action</DropdownItem>
                                                                            <DropdownItem>Another action</DropdownItem>
                                                                            <DropdownItem>Something else here</DropdownItem>
                                                                        </DropdownMenu>
                                                                    </UncontrolledDropdown>


                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <th scope="row">05</th>
                                                                <td><Link to="#" className="text-dark">Authentication Pages</Link></td>
                                                                <td>
                                                                    06 May, 2020
                                                                </td>
                                                                <td>
                                                                    <span className="badge badge-soft-success font-size-12">Complete</span>
                                                                </td>
                                                                <td>
                                                                    <UncontrolledDropdown direction="start">
                                                                        <DropdownToggle tag="a" className="text-muted font-size-18 px-2">
                                                                            <i className="bx bx-dots-vertical-rounded"></i>
                                                                        </DropdownToggle>
                                                                        <DropdownMenu className="dropdown-menu-end">
                                                                            <DropdownItem>Action</DropdownItem>
                                                                            <DropdownItem>Another action</DropdownItem>
                                                                            <DropdownItem>Something else here</DropdownItem>
                                                                        </DropdownMenu>
                                                                    </UncontrolledDropdown>
                                                                </td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>
                                        </div>

                                    </TabPane>
                                    <TabPane tabId="2" id="tasks">

                                        <div>
                                            <h5 className="font-size-16 mb-3">Active</h5>

                                            <div className="table-responsive">
                                                <table className="table table-nowrap table-centered">
                                                    <tbody>
                                                        <tr>
                                                            <td style={{ width: "60px" }}>
                                                                <div className="form-check font-size-16 text-center">
                                                                    <input type="checkbox" className="form-check-input" id="tasks-activeCheck2" />
                                                                    <label className="form-check-label" htmlFor="tasks-activeCheck2"></label>
                                                                </div>
                                                            </td>
                                                            <td>
                                                                <Link to="#" className="fw-bold text-dark">Ecommerce Product Detail</Link>
                                                            </td>

                                                            <td>
                                                                <p className="ml-4 text-muted mb-0">
                                                                    <i className="mdi mdi-comment-outline align-middle text-muted font-size-16 me-1"></i> 3
                                                                </p>
                                                            </td>
                                                            <td>
                                                                <p className="ml-4 mb-0">Product Design</p>
                                                            </td>

                                                            <td>27 May, 2020</td>
                                                            <td style={{ width: "160px" }}><span className="badge badge-soft-primary font-size-12">Active</span></td>

                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                <div className="form-check font-size-16 text-center">
                                                                    <input type="checkbox" className="form-check-input" id="tasks-activeCheck1" />
                                                                    <label className="form-check-label" htmlFor="tasks-activeCheck1"></label>
                                                                </div>
                                                            </td>
                                                            <td>
                                                                <Link to="#" className="fw-bold text-dark">Ecommerce Product</Link>
                                                            </td>

                                                            <td>
                                                                <p className="ml-4 text-muted mb-0">
                                                                    <i className="mdi mdi-comment-outline align-middle text-muted font-size-16 me-1"></i> 7
                                                                </p>
                                                            </td>
                                                            <td>
                                                                <p className="ml-4 mb-0">Web Development</p>
                                                            </td>

                                                            <td>26 May, 2020</td>
                                                            <td><span className="badge badge-soft-primary font-size-12">Active</span></td>

                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>

                                            <h5 className="font-size-16 my-3">Upcoming</h5>

                                            <div className="table-responsive">
                                                <table className="table table-nowrap table-centered">
                                                    <tbody>
                                                        <tr>
                                                            <td style={{ width: "60px" }}>
                                                                <div className="form-check font-size-16 text-center">
                                                                    <input type="checkbox" className="form-check-input" id="tasks-upcomingCheck3" />
                                                                    <label className="form-check-label" htmlFor="tasks-upcomingCheck3"></label>
                                                                </div>
                                                            </td>
                                                            <td>
                                                                <Link to="#" className="fw-bold text-dark">Chat app Page</Link>
                                                            </td>

                                                            <td>
                                                                <p className="ml-4 text-muted mb-0">
                                                                    <i className="mdi mdi-comment-outline align-middle text-muted font-size-16 me-1"></i> 2
                                                                </p>
                                                            </td>
                                                            <td>
                                                                <p className="ml-4 mb-0">Web Development</p>
                                                            </td>

                                                            <td>-</td>
                                                            <td style={{ width: "160px" }}><span className="badge badge-soft-secondary font-size-12">Waiting</span></td>

                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                <div className="form-check font-size-16 text-center">
                                                                    <input type="checkbox" className="form-check-input" id="tasks-upcomingCheck2" />
                                                                    <label className="form-check-label" htmlFor="tasks-upcomingCheck2"></label>
                                                                </div>
                                                            </td>
                                                            <td>
                                                                <Link to="#" className="fw-bold text-dark">Email Pages</Link>
                                                            </td>

                                                            <td>
                                                                <p className="ml-4 text-muted mb-0">
                                                                    <i className="mdi mdi-comment-outline align-middle text-muted font-size-16 me-1"></i> 1
                                                                </p>
                                                            </td>
                                                            <td>
                                                                <p className="ml-4 mb-0">Illustration</p>
                                                            </td>

                                                            <td>04 June, 2020</td>
                                                            <td><span className="badge badge-soft-primary font-size-12">Approved</span></td>

                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                <div className="form-check font-size-16 text-center">
                                                                    <input type="checkbox" className="form-check-input" id="tasks-upcomingCheck1" />
                                                                    <label className="form-check-label" htmlFor="tasks-upcomingCheck1"></label>
                                                                </div>
                                                            </td>
                                                            <td>
                                                                <Link to="#" className="fw-bold text-dark">Contacts Profile Page</Link>
                                                            </td>
                                                            <td>
                                                                <p className="ml-4 text-muted mb-0">
                                                                    <i className="mdi mdi-comment-outline align-middle text-muted font-size-16 me-1"></i> 6
                                                                </p>
                                                            </td>
                                                            <td>
                                                                <p className="ml-4 mb-0">Product Design</p>
                                                            </td>

                                                            <td>-</td>
                                                            <td><span className="badge badge-soft-secondary font-size-12">Waiting</span></td>

                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>

                                            <h5 className="font-size-16 my-3">Complete</h5>

                                            <div className="table-responsive">
                                                <table className="table table-nowrap table-centered">
                                                    <tbody>
                                                        <tr>
                                                            <td style={{ width: "60px" }}>
                                                                <div className="form-check font-size-16 text-center">
                                                                    <input type="checkbox" className="form-check-input" id="tasks-completeCheck3" />
                                                                    <label className="form-check-label" htmlFor="tasks-completeCheck3"></label>
                                                                </div>
                                                            </td>
                                                            <td>
                                                                <Link to="#" className="fw-bold text-dark">UI Elements</Link>
                                                            </td>

                                                            <td>
                                                                <p className="ml-4 text-muted mb-0">
                                                                    <i className="mdi mdi-comment-outline align-middle text-muted font-size-16 me-1"></i> 6
                                                                </p>
                                                            </td>
                                                            <td>
                                                                <p className="ml-4 mb-0">Product Design</p>
                                                            </td>

                                                            <td>27 May, 2020</td>
                                                            <td style={{ width: "160px" }}><span className="badge badge-soft-success font-size-12">Complete</span></td>

                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                <div className="form-check font-size-16 text-center">
                                                                    <input type="checkbox" className="form-check-input" id="tasks-completeCheck2" />
                                                                    <label className="form-check-label" htmlFor="tasks-completeCheck2"></label>
                                                                </div>
                                                            </td>
                                                            <td>
                                                                <Link to="#" className="fw-bold text-dark">Authentication Pages</Link>
                                                            </td>

                                                            <td>
                                                                <p className="ml-4 text-muted mb-0">
                                                                    <i className="mdi mdi-comment-outline align-middle text-muted font-size-16 me-1"></i> 2
                                                                </p>
                                                            </td>
                                                            <td>
                                                                <p className="ml-4 mb-0">Illustration</p>
                                                            </td>

                                                            <td>27 May, 2020</td>
                                                            <td><span className="badge badge-soft-success font-size-12">Complete</span></td>

                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                <div className="form-check font-size-16 text-center">
                                                                    <input type="checkbox" className="form-check-input" id="tasks-completeCheck1" />
                                                                    <label className="form-check-label" htmlFor="tasks-completeCheck1"></label>
                                                                </div>
                                                            </td>
                                                            <td>
                                                                <Link to="#" className="fw-bold text-dark">Admin Layout</Link>
                                                            </td>

                                                            <td>
                                                                <p className="ml-4 text-muted mb-0">
                                                                    <i className="mdi mdi-comment-outline align-middle text-muted font-size-16 me-1"></i> 3
                                                                </p>
                                                            </td>
                                                            <td>
                                                                <p className="ml-4 mb-0">Product Design</p>
                                                            </td>

                                                            <td>26 May, 2020</td>
                                                            <td><span className="badge badge-soft-success font-size-12">Complete</span></td>

                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>

                                    </TabPane>
                                    <TabPane tabId="3" id="messages">

                                        <div>
                                            <div >
                                                <div className="d-flex align-items-start border-bottom py-4">
                                                    <div className="flex-shrink-0 me-2">
                                                        <img className="rounded-circle avatar-sm" src={avatar3} alt="avatar-3 images" />
                                                    </div>

                                                    <div className="flex-grow-1">
                                                        <h5 className="font-size-15 mb-1">Marion Walker <small className="text-muted float-end">1 hr ago</small></h5>
                                                        <p className="text-muted">If several languages coalesce, the grammar of the resulting .</p>

                                                        <Link to="#" className="text-muted font-13 d-inline-block"><i
                                                            className="mdi mdi-reply"></i> Reply</Link>

                                                        <div className="d-flex align-items-start mt-4">
                                                            <div className="flex-shrink-0 me-2">
                                                                <img className="rounded-circle avatar-sm" src={avatar4} alt="avatar-4 images" />
                                                            </div>

                                                            <div className="flex-grow-1">
                                                                <h5 className="font-size-15 mb-1">Shanon Marvin <small className="text-muted float-end">1 hr ago</small></h5>
                                                                <p className="text-muted">It will be as simple as in fact, it will be Occidental. To it will seem like simplified .</p>


                                                                <Link to="#" className="text-muted font-13 d-inline-block">
                                                                    <i className="mdi mdi-reply"></i> Reply
                                                                </Link>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="d-flex align-items-start border-bottom py-4">
                                                    <div className="flex-shrink-0 me-2">
                                                        <img className="rounded-circle avatar-sm" src={avatar5} alt="avatar-5 images" />
                                                    </div>

                                                    <div className="flex-grow-1">
                                                        <h5 className="font-size-15 mb-1">Janice Morgan <small className="text-muted float-end">2 hrs ago</small></h5>
                                                        <p className="text-muted">To achieve this, it would be necessary to have uniform pronunciation.</p>

                                                        <Link to="#" className="text-muted font-13 d-inline-block"><i
                                                            className="mdi mdi-reply"></i> Reply</Link>

                                                    </div>
                                                </div>

                                                <div className="d-flex align-items-start border-bottom py-4">
                                                    <div className="flex-shrink-0 me-2">
                                                        <img className="rounded-circle avatar-sm" src={avatar7} alt="avatar-7 images" />
                                                    </div>

                                                    <div className="flex-grow-1">
                                                        <h5 className="font-size-15 mb-1">Patrick Petty <small className="text-muted float-end">3 hrs ago</small></h5>
                                                        <p className="text-muted">Sed ut perspiciatis unde omnis iste natus error sit </p>

                                                        <Link to="#" className="text-muted font-13 d-inline-block"><i
                                                            className="mdi mdi-reply"></i> Reply</Link>

                                                    </div>
                                                </div>
                                            </div>

                                            <div className="border rounded mt-4">
                                                <form action="#">
                                                    <div className="px-2 py-1 bg-light">
                                                        <div className="btn-group" role="group">
                                                            <button type="button" className="btn btn-sm btn-link text-dark text-decoration-none"><i className="bx bx-link"></i></button>
                                                            <button type="button" className="btn btn-sm btn-link text-dark text-decoration-none"><i className="bx bx-smile"></i></button>
                                                            <button type="button" className="btn btn-sm btn-link text-dark text-decoration-none"><i className="bx bx-at"></i></button>
                                                        </div>
                                                    </div>
                                                    <textarea rows="3" className="form-control border-0 resize-none" placeholder="Your Message..."></textarea>
                                                </form>
                                            </div>
                                            <div className="text-end mt-3">
                                                <button type="button" className="btn btn-success w-sm text-truncate ms-2"> Send <i className="bx bx-send ms-2 align-middle"></i></button>
                                            </div>
                                        </div>
                                    </TabPane>
                                </TabContent>
                            </Card>
                        </Col>
                        <Col xl={4}>
                            <div className="card overflow-hidden">
                                <div className="profile-user"></div>
                                <CardBody>
                                    <div className="profile-content text-center">
                                        <div className="profile-user-img">
                                            <img src={avatar1} alt="" className="avatar-lg rounded-circle img-thumbnail" />
                                        </div>
                                        <h5 className="mt-3 mb-1">Peter Kelsey!</h5>
                                        <p className="text-muted">UI/UX Designer</p>
                                        <p className="text-muted mb-1">
                                            Hi I'm Peter Kelsey!,has been the industry's standard dummy text To an English person,
                                            it will seem like simplified English, as a skeptical Cambridge.</p>
                                    </div>
                                </CardBody>
                            </div>

                            <Card>
                                <CardHeader>
                                    <h5 className="card-title mb-0">Team Members</h5>
                                </CardHeader>

                                <CardBody className="py-2">
                                    <div className="table-responsive">
                                        <table className="table align-middle table-nowrap">
                                            <tbody>
                                                <tr>
                                                    <td style={{ width: "50px" }}><img src={avatar2} className="rounded-circle avatar-sm" alt="" /></td>
                                                    <td><h5 className="font-size-14 m-0"><Link to="#" className="text-dark">Daniel Canales</Link></h5></td>
                                                    <td>
                                                        <div>
                                                            <Link to="#" className="badge bg-soft-primary text-primary font-size-11 me-1">Frontend</Link>
                                                            <Link to="#" className="badge bg-soft-primary text-primary font-size-11">UI</Link>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <i className="mdi mdi-circle-medium font-size-18 text-success align-middle me-1"></i> Online
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td><img src={avatar1} className="rounded-circle avatar-sm" alt="" /></td>
                                                    <td><h5 className="font-size-14 m-0"><Link to="#" className="text-dark">Jennifer Walker</Link></h5></td>
                                                    <td>
                                                        <div>
                                                            <Link to="#" className="badge bg-soft-primary text-primary font-size-11">UI / UX</Link>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <i className="mdi mdi-circle-medium font-size-18 text-warning align-middle me-1"></i> Buzy
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <div className="avatar-sm">
                                                            <span className="avatar-title rounded-circle bg-primary text-white font-size-14">
                                                                C
                                                            </span>
                                                        </div>
                                                    </td>
                                                    <td><h5 className="font-size-14 m-0"><Link to="#" className="text-dark">Carl Mackay</Link></h5></td>
                                                    <td>
                                                        <div>
                                                            <Link to="#" className="badge bg-soft-primary text-primary font-size-11">Backend</Link>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <i className="mdi mdi-circle-medium font-size-18 text-success align-middle me-1"></i> Online
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td><img src={avatar4} className="rounded-circle avatar-sm" alt="" /></td>
                                                    <td><h5 className="font-size-14 m-0"><Link to="#" className="text-dark">Janice Cole</Link></h5></td>
                                                    <td>
                                                        <div>
                                                            <Link to="#" className="badge bg-soft-primary text-primary font-size-11 me-1">Frontend</Link>
                                                            <Link to="#" className="badge bg-soft-primary text-primary font-size-11">UI</Link>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <i className="mdi mdi-circle-medium font-size-18 text-success align-middle me-1"></i> Online
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <div className="avatar-sm">
                                                            <span className="avatar-title rounded-circle bg-primary text-white font-size-14">
                                                                T
                                                            </span>
                                                        </div>
                                                    </td>
                                                    <td><h5 className="font-size-14 m-0"><Link to="#" className="text-dark">Tony Brafford</Link></h5></td>
                                                    <td>
                                                        <div>
                                                            <Link to="#" className="badge bg-soft-primary text-primary font-size-11">Backend</Link>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <i className="mdi mdi-circle-medium font-size-18 text-secondary align-middle me-1"></i> Offline
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
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

export default UserProfile;