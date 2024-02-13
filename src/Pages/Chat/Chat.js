import React from "react";

import { Card, Col, Container, Row, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem } from "reactstrap";
import { Link } from "react-router-dom";

//Simple bar
import SimpleBar from "simplebar-react";

// Import Images
import avatar4 from '../../assets/images/users/avatar-4.jpg';
import avatar2 from '../../assets/images/users/avatar-2.jpg';
import avatar3 from '../../assets/images/users/avatar-3.jpg';

import img1 from '../../assets/images/small/img-1.jpg';
import img2 from '../../assets/images/small/img-2.jpg';

//Import Breadcrumb
import Breadcrumbs from "../../components/Common/Breadcrumb";

const Chat = () => {
    document.title = "Chat | Matary - React Admin & Dashboard Template";

    return (
        <React.Fragment>

            <div className="page-content">
                <Container fluid={true}>
                    <Breadcrumbs title="Apps" breadcrumbItem="Chat" />
                    <div className="d-lg-flex">
                        <Card className="chat-leftsidebar">
                            <div className="p-3 px-4">
                                <div className="d-flex align-items-start">
                                    <div className="flex-shrink-0 me-3 align-self-center">
                                        <img src={avatar4} className="avatar-sm rounded-circle" alt="" />
                                    </div>

                                    <div className="flex-grow-1">
                                        <h5 className="font-size-16 mb-1"><Link to="#" className="text-dark">Marcus <i className="mdi mdi-circle text-success align-middle font-size-10 ms-1"></i></Link></h5>
                                        <p className="text-muted mb-0">Available</p>
                                    </div>
                                    <div className="flex-shrink-0">
                                        <UncontrolledDropdown className="dropdown chat-noti-dropdown" direction="start">
                                            <DropdownToggle tag="a" className="btn py-0">
                                                <i className="bx bx-dots-horizontal-rounded"></i>
                                            </DropdownToggle>
                                            <DropdownMenu className="dropdown-menu-end">
                                                <DropdownItem>Profile</DropdownItem>
                                                <DropdownItem>Edit</DropdownItem>
                                                <DropdownItem>Add Contact</DropdownItem>
                                                <DropdownItem>Setting</DropdownItem>
                                            </DropdownMenu>
                                        </UncontrolledDropdown>
                                    </div>
                                </div>
                            </div>

                            <div className="p-3">
                                <div className="search-box chat-search-box">
                                    <div className="position-relative">
                                        <input type="text" className="form-control bg-light border-light rounded" placeholder="Search..." />
                                        <i className="bx bx-search search-icon"></i>
                                    </div>
                                </div>
                            </div>

                            <div className="pb-3">
                                <SimpleBar className="chat-message-list" data-simplebar>
                                    <div className="p-4 border-top">
                                        <div>
                                            <div className="float-end">
                                                <Link to="#" className="text-primary"><i className="mdi mdi-plus"></i> New Group</Link>
                                            </div>
                                            <h5 className="font-size-16 mb-3"> Groups</h5>

                                            <ul className="list-unstyled chat-list group-list">
                                                <li>
                                                    <Link to="#">
                                                        <div className="d-flex align-items-center">
                                                            <div className="flex-shrink-0 me-3">
                                                                <div className="avatar-sm">
                                                                    <span className="avatar-title rounded-circle bg-soft-primary text-primary">
                                                                        G
                                                                    </span>
                                                                </div>
                                                            </div>

                                                            <div className="flex-grow-1">
                                                                <h5 className="font-size-14 mb-0">General</h5>
                                                            </div>
                                                        </div>
                                                    </Link>
                                                </li>
                                                <li className="active">
                                                    <Link to="#">
                                                        <div className="d-flex align-items-center">
                                                            <div className="flex-shrink-0 me-3">
                                                                <div className="avatar-sm">
                                                                    <span className="avatar-title rounded-circle bg-soft-primary text-primary">
                                                                        D
                                                                    </span>
                                                                </div>
                                                            </div>

                                                            <div className="flex-grow-1">
                                                                <h5 className="font-size-14 mb-0">Designers</h5>
                                                            </div>
                                                        </div>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link to="#">
                                                        <div className="d-flex align-items-center">
                                                            <div className="flex-shrink-0 me-3">
                                                                <div className="avatar-sm">
                                                                    <span className="avatar-title rounded-circle bg-soft-primary text-primary">
                                                                        M
                                                                    </span>
                                                                </div>
                                                            </div>

                                                            <div className="flex-grow-1">
                                                                <h5 className="font-size-14 mb-0">Meeting</h5>
                                                            </div>
                                                        </div>
                                                    </Link>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>

                                    <div className="p-4 border-top">
                                        <div>
                                            <div className="float-end">
                                                <Link to="#" className="text-primary"><i className="mdi mdi-plus"></i> New Contact</Link>
                                            </div>
                                            <h5 className="font-size-16 mb-3"> Contacts</h5>

                                            <ul className="list-unstyled chat-list">
                                                <li>
                                                    <Link to="#">
                                                        <div className="d-flex align-items-start">
                                                            <div className="flex-shrink-0 me-3 align-self-center">
                                                                <div className="user-img online">
                                                                    <img src={avatar2} className="rounded-circle avatar-sm" alt="" />
                                                                    <span className="user-status"></span>
                                                                </div>
                                                            </div>

                                                            <div className="flex-grow-1 overflow-hidden">
                                                                <h5 className="text-truncate font-size-14 mb-1">John Howard</h5>
                                                                <p className="text-truncate mb-0">Hey! there I'm available</p>
                                                            </div>

                                                            <div className="flex-shrink-0">
                                                                <div className="font-size-11">02 min</div>
                                                            </div>
                                                        </div>
                                                    </Link>
                                                </li>
                                                <li className="unread">
                                                    <Link to="#">
                                                        <div className="d-flex align-items-start">
                                                            <div className="flex-shrink-0 me-3 align-self-center">
                                                                <div className="user-img online">
                                                                    <div className="avatar-sm align-self-center">
                                                                        <span className="avatar-title rounded-circle bg-soft-primary text-primary">
                                                                            G
                                                                        </span>
                                                                    </div>
                                                                    <span className="user-status"></span>
                                                                </div>
                                                            </div>

                                                            <div className="flex-grow-1 overflow-hidden">
                                                                <h5 className="text-truncate font-size-14 mb-1">Galen Rizo</h5>
                                                                <p className="text-truncate mb-0">I've finished it! See you so</p>
                                                            </div>

                                                            <div className="flex-shrink-0">
                                                                <div className="font-size-11">10 min</div>
                                                                <div className="unread-message">
                                                                    <span className="badge bg-danger rounded-pill">01</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link to="#">
                                                        <div className="d-flex align-items-start">
                                                            <div className="flex-shrink-0 align-self-center me-3">
                                                                <div className="user-img away">
                                                                    <img src={avatar3} className="rounded-circle avatar-sm" alt="" />
                                                                    <span className="user-status"></span>
                                                                </div>
                                                            </div>

                                                            <div className="flex-grow-1 overflow-hidden">
                                                                <h5 className="text-truncate font-size-14 mb-1">Bernard Spencer</h5>
                                                                <p className="text-truncate mb-0">This theme is awesome!</p>
                                                            </div>

                                                            <div className="flex-shrink-0">
                                                                <div className="font-size-11">22 min</div>
                                                            </div>
                                                        </div>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link to="#">
                                                        <div className="d-flex align-items-start">
                                                            <div className="flex-shrink-0 align-self-center me-3">
                                                                <div className="user-img">
                                                                    <img src={avatar4} className="rounded-circle avatar-sm" alt="" />
                                                                    <span className="user-status"></span>
                                                                </div>
                                                            </div>
                                                            <div className="flex-grow-1 overflow-hidden">
                                                                <h5 className="text-truncate font-size-14 mb-1">Annie Holder</h5>
                                                                <p className="text-truncate mb-0">Nice to meet you</p>
                                                            </div>

                                                            <div className="flex-shrink-0">
                                                                <div className="font-size-11">01 Hr</div>
                                                            </div>
                                                        </div>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link to="#">
                                                        <div className="d-flex align-items-start">
                                                            <div className="flex-shrink-0 align-self-center me-3">
                                                                <div className="user-img online">
                                                                    <div className="avatar-sm align-self-center">
                                                                        <span className="avatar-title rounded-circle bg-soft-primary text-primary">
                                                                            V
                                                                        </span>
                                                                    </div>
                                                                    <span className="user-status"></span>
                                                                </div>
                                                            </div>
                                                            <div className="flex-grow-1 overflow-hidden">
                                                                <h5 className="text-truncate font-size-14 mb-1">Vernon Smith</h5>
                                                                <p className="text-truncate mb-0">Wow that's great</p>
                                                            </div>

                                                            <div className="flex-shrink-0">
                                                                <div className="font-size-11">04 Hrs</div>
                                                            </div>
                                                        </div>
                                                    </Link>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </SimpleBar>
                            </div>
                        </Card>

                        <div className="w-100 user-chat mt-4 mt-sm-0 ms-lg-3">
                            <Card>
                                <div className="p-3 px-lg-4 border-bottom">
                                    <Row>
                                        <Col md={4} className="col-6">
                                            <h5 className="font-size-16 mb-1 text-truncate"><Link to="#" className="text-dark">Designers</Link></h5>
                                            <p className="text-muted text-truncate mb-0">12 Members</p>
                                        </Col>
                                        <Col md={8} className="col-6">
                                            <ul className="list-inline user-chat-nav text-end mb-0">
                                                <li className="list-inline-item">
                                                    <UncontrolledDropdown>
                                                        <DropdownToggle tag="button" className="btn nav-btn">
                                                            <i className="bx bx-search"></i>
                                                        </DropdownToggle>
                                                        <DropdownMenu className="dropdown-menu-end dropdown-menu-md">
                                                            <form className="p-2">
                                                                <div>
                                                                    <input type="text" className="form-control rounded" placeholder="Search..." />
                                                                </div>
                                                            </form>
                                                        </DropdownMenu>
                                                    </UncontrolledDropdown>
                                                </li>

                                                <li className="list-inline-item">
                                                    <UncontrolledDropdown>
                                                        <DropdownToggle tag="button" className="btn nav-btn">
                                                            <i className="bx bx-dots-horizontal-rounded"></i>
                                                        </DropdownToggle>
                                                        <DropdownMenu className="dropdown-menu-end">
                                                            <DropdownItem>Profile</DropdownItem>
                                                            <DropdownItem>Archive</DropdownItem>
                                                            <DropdownItem>Muted</DropdownItem>
                                                            <DropdownItem>Delete</DropdownItem>
                                                        </DropdownMenu>
                                                    </UncontrolledDropdown>
                                                </li>
                                            </ul>
                                        </Col>
                                    </Row>
                                </div>

                                <div className="px-lg-2">
                                    <SimpleBar className="chat-conversation p-3" data-simplebar>
                                        <ul className="list-unstyled mb-0">
                                            <li className="chat-day-title">
                                                <div className="title">Today</div>
                                            </li>
                                            <li>
                                                <div className="conversation-list">
                                                    <div className="ctext-wrap">
                                                        <div className="ctext-wrap-content">
                                                            <h5 className="font-size-14 conversation-name"><Link to="#" className="text-dark">John Howard</Link> <span className="d-inline-block font-size-12 text-muted time">10:00 AM</span></h5>
                                                            <p className="mb-0">
                                                                Good morning everyone !
                                                            </p>
                                                        </div>
                                                        <UncontrolledDropdown className="dropdown align-self-start">
                                                            <DropdownToggle tag="a" className="btn nav-btn">
                                                                <i className="bx bx-dots-vertical-rounded"></i>
                                                            </DropdownToggle>
                                                            <DropdownMenu>
                                                                <DropdownItem>Copy</DropdownItem>
                                                                <DropdownItem>Save</DropdownItem>
                                                                <DropdownItem>Forward</DropdownItem>
                                                                <DropdownItem>Delete</DropdownItem>
                                                            </DropdownMenu>
                                                        </UncontrolledDropdown>
                                                    </div>
                                                </div>
                                            </li>

                                            <li className="right">
                                                <div className="conversation-list">
                                                    <div className="ctext-wrap">
                                                        <div className="ctext-wrap-content">
                                                            <h5 className="font-size-14 conversation-name"><Link to="#" className="text-dark">Marcus</Link> <span className="d-inline-block font-size-12 text-muted time">10:02 AM</span></h5>
                                                            <p className="mb-0">
                                                                Good morning everyone !
                                                            </p>
                                                        </div>
                                                        <UncontrolledDropdown className="dropdown align-self-start">
                                                            <DropdownToggle tag="a" className="btn nav-btn">
                                                                <i className="bx bx-dots-vertical-rounded"></i>
                                                            </DropdownToggle>
                                                            <DropdownMenu>
                                                                <DropdownItem>Copy</DropdownItem>
                                                                <DropdownItem>Save</DropdownItem>
                                                                <DropdownItem>Forward</DropdownItem>
                                                                <DropdownItem>Delete</DropdownItem>
                                                            </DropdownMenu>
                                                        </UncontrolledDropdown>
                                                    </div>
                                                </div>
                                            </li>

                                            <li>
                                                <div className="conversation-list">
                                                    <div className="ctext-wrap">
                                                        <div className="ctext-wrap-content">
                                                            <h5 className="font-size-14 conversation-name"><Link to="#" className="text-dark">Galen Rizo</Link> <span className="d-inline-block font-size-12 text-muted time">10:04 AM</span></h5>
                                                            <p className="mb-0">
                                                                Hello!
                                                            </p>
                                                        </div>
                                                        <UncontrolledDropdown className="dropdown align-self-start">
                                                            <DropdownToggle tag="a" className="btn nav-btn">
                                                                <i className="bx bx-dots-vertical-rounded"></i>
                                                            </DropdownToggle>
                                                            <DropdownMenu>
                                                                <DropdownItem>Copy</DropdownItem>
                                                                <DropdownItem>Save</DropdownItem>
                                                                <DropdownItem>Forward</DropdownItem>
                                                                <DropdownItem>Delete</DropdownItem>
                                                            </DropdownMenu>
                                                        </UncontrolledDropdown>
                                                    </div>

                                                    <div className="ctext-wrap">
                                                        <div className="ctext-wrap-content">
                                                            <h5 className="font-size-14 conversation-name"><Link to="#" className="text-dark">Galen Rizo</Link> <span className="d-inline-block font-size-12 text-muted time">10:04 AM</span></h5>
                                                            <p className="mb-0">
                                                                What about our next meeting?
                                                            </p>
                                                        </div>
                                                        <UncontrolledDropdown className="dropdown align-self-start">
                                                            <DropdownToggle tag="a" className="btn nav-btn">
                                                                <i className="bx bx-dots-vertical-rounded"></i>
                                                            </DropdownToggle>
                                                            <DropdownMenu>
                                                                <DropdownItem>Copy</DropdownItem>
                                                                <DropdownItem>Save</DropdownItem>
                                                                <DropdownItem>Forward</DropdownItem>
                                                                <DropdownItem>Delete</DropdownItem>
                                                            </DropdownMenu>
                                                        </UncontrolledDropdown>
                                                    </div>
                                                </div>
                                            </li>

                                            <li>
                                                <div className="conversation-list">
                                                    <div className="ctext-wrap">
                                                        <div className="ctext-wrap-content">
                                                            <h5 className="font-size-14 conversation-name"><Link to="#" className="text-dark">John Howard</Link> <span className="d-inline-block font-size-12 text-muted time">10:06 AM</span></h5>
                                                            <p className="mb-0">
                                                                Next meeting tomorrow 10.00AM
                                                            </p>
                                                        </div>
                                                        <UncontrolledDropdown className="dropdown align-self-start">
                                                            <DropdownToggle tag="a" className="btn nav-btn">
                                                                <i className="bx bx-dots-vertical-rounded"></i>
                                                            </DropdownToggle>
                                                            <DropdownMenu>
                                                                <DropdownItem>Copy</DropdownItem>
                                                                <DropdownItem>Save</DropdownItem>
                                                                <DropdownItem>Forward</DropdownItem>
                                                                <DropdownItem>Delete</DropdownItem>
                                                            </DropdownMenu>
                                                        </UncontrolledDropdown>
                                                    </div>
                                                </div>
                                            </li>

                                            <li className="right">
                                                <div className="conversation-list">
                                                    <div className="ctext-wrap">
                                                        <div className="ctext-wrap-content">
                                                            <h5 className="font-size-14 conversation-name"><Link to="#" className="text-dark">Marcus</Link> <span className="d-inline-block font-size-12 text-muted time">10:02 AM</span></h5>
                                                            <p className="mb-0">
                                                                Wow that's great
                                                            </p>
                                                        </div>
                                                        <UncontrolledDropdown className="dropdown align-self-start">
                                                            <DropdownToggle tag="a" className="btn nav-btn">
                                                                <i className="bx bx-dots-vertical-rounded"></i>
                                                            </DropdownToggle>
                                                            <DropdownMenu>
                                                                <DropdownItem>Copy</DropdownItem>
                                                                <DropdownItem>Save</DropdownItem>
                                                                <DropdownItem>Forward</DropdownItem>
                                                                <DropdownItem>Delete</DropdownItem>
                                                            </DropdownMenu>
                                                        </UncontrolledDropdown>
                                                    </div>
                                                </div>
                                            </li>

                                            <li>
                                                <div className="conversation-list">
                                                    <div className="ctext-wrap">
                                                        <div className="ctext-wrap-content">
                                                            <h5 className="font-size-14 conversation-name"><Link to="#" className="text-dark">John Howard</Link> <span className="d-inline-block font-size-12 text-muted time">10:06 AM</span></h5>
                                                            <p className="mb-0">
                                                                img-1.jpg & img-2.jpg images for a New Projects
                                                            </p>
                                                            <ul className="list-inline message-img mt-3  mb-0">
                                                                <li className="list-inline-item message-img-list">
                                                                    <Link className="d-inline-block m-1" to="#">
                                                                        <img src={img1} alt="" className="rounded img-thumbnail" />
                                                                    </Link>
                                                                </li>
                                                                <li className="list-inline-item message-img-list">
                                                                    <Link className="d-inline-block m-1" to="#">
                                                                        <img src={img2} alt="" className="rounded img-thumbnail" />
                                                                    </Link>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                        <UncontrolledDropdown className="dropdown align-self-start">
                                                            <DropdownToggle tag="a" className="btn nav-btn">
                                                                <i className="bx bx-dots-vertical-rounded"></i>
                                                            </DropdownToggle>
                                                            <DropdownMenu>
                                                                <DropdownItem>Copy</DropdownItem>
                                                                <DropdownItem>Save</DropdownItem>
                                                                <DropdownItem>Forward</DropdownItem>
                                                                <DropdownItem>Delete</DropdownItem>
                                                            </DropdownMenu>
                                                        </UncontrolledDropdown>
                                                    </div>
                                                </div>
                                            </li>
                                        </ul>
                                    </SimpleBar>
                                </div>

                                <div className="p-3 chat-input-section">
                                    <Row>
                                        <Col className="col">
                                            <div className="position-relative">
                                                <input type="text" className="form-control chat-input rounded" placeholder="Enter Message..." />
                                            </div>
                                        </Col>
                                        <Col className="col-auto">
                                            <button type="submit" className="btn btn-primary chat-send w-md waves-effect waves-light"><span className="d-none d-sm-inline-block me-2">Send</span> <i className="mdi mdi-send float-end"></i></button>
                                        </Col>
                                    </Row>
                                </div>
                            </Card>
                        </div>
                    </div>
                </Container>
            </div>
        </React.Fragment>
    );
};
export default Chat;