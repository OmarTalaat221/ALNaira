import React from "react";
import { Link } from "react-router-dom";
import {
    Card,
    CardBody,
    Col,
    Container,
    DropdownItem,
    DropdownMenu,
    DropdownToggle,
    Row,
    UncontrolledDropdown,
} from "reactstrap";

// Import User Grid Data
import UserGridData from "./userGridData";

//Import Breadcrumb
import Breadcrumbs from "../../components/Common/Breadcrumb";

const UserGrid = () => {
    document.title = "User Grid | Matary - React Admin & Dashboard Template";

    return (
        <React.Fragment>

            <div className="page-content">
                <Container fluid={true}>
                    <Breadcrumbs title="Contacts" breadcrumbItem="User Grid" />
                    <Row>
                        {UserGridData.map((item, key) => (
                            <Col xl={3} sm={6} key={key}>
                                <Card>
                                    <CardBody>
                                        <UncontrolledDropdown className="dropdown float-end" direction="start">
                                            <DropdownToggle
                                                tag="a"
                                                className="text-muted font-size-16"
                                            >
                                                <i className="bx bx-dots-horizontal-rounded"></i>
                                            </DropdownToggle>
                                            <DropdownMenu className="dropdown-menu-end">
                                                <DropdownItem>Edit</DropdownItem>
                                                <DropdownItem>Action</DropdownItem>
                                                <DropdownItem>Remove</DropdownItem>
                                            </DropdownMenu>
                                        </UncontrolledDropdown>

                                        <div className="d-flex align-items-center">
                                            {item.src ? (
                                                <div>
                                                    <img
                                                        src={item.src}
                                                        alt=""
                                                        className="avatar-md rounded-circle img-thumbnail"
                                                    />
                                                </div>
                                            ) : (
                                                <div className="avatar-md">
                                                    <div className="avatar-title bg-soft-primary text-primary h1 m-0 rounded-circle">
                                                        <i className="bx bxs-user-circle"></i>
                                                    </div>
                                                </div>
                                            )}

                                            <div className="flex-1 ms-3">
                                                <h5 className="font-size-16 mb-1">
                                                    <Link to="#" className="text-dark">
                                                        {item.name}
                                                    </Link>
                                                </h5>
                                                <p className="text-muted mb-0">{item.designation}</p>
                                            </div>
                                        </div>
                                        <p className="mt-3 text-muted">
                                            Curabitur non magna lobortis est tempus gravida ornare
                                            libero sed diam sed fringilla est.
                                        </p>

                                        <div className="pt-1">
                                            <button
                                                type="button"
                                                className="btn btn-soft-primary btn-sm text-truncate"
                                            >
                                                <i className="bx bx-user me-1"></i> Contact
                                            </button>
                                            <button
                                                type="button"
                                                className="btn btn-primary btn-sm text-truncate ms-2"
                                            >
                                                <i className="bx bx-message-square-dots me-1"></i>{" "}
                                                Profile
                                            </button>
                                        </div>
                                    </CardBody>
                                </Card>
                            </Col>
                        ))}
                    </Row>
                    <Row className="mt-3">
                        <Col xl={12}>
                            <div className="text-center mb-3">
                                <Link to="#" className="text-primary">
                                    <i className="mdi mdi-loading mdi-spin font-size-20 align-middle me-2"></i>{" "}
                                    Load more{" "}
                                </Link>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </React.Fragment>
    );
};

export default UserGrid;
