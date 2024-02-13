import React from "react";
import { Row, Col, Card, CardBody, Container, CardHeader } from "reactstrap"

// Breadcrumb
import Breadcrumbs from "../../components/Common/Breadcrumb"

const BootstrapBasic = () => {
    document.title = "Bootstrap Basic | Matary - React Admin & Dashboard Template";

    return (
        <React.Fragment>
            <div className="page-content">
                <Container fluid={true}>
                    <Breadcrumbs title="Tables" breadcrumbItem="Bootstrap Basic" />
                    <Row>
                        <Col lg={6}>
                            <Card>
                                <CardHeader>
                                    <h4 className="card-title">Basic example</h4>
                                    <p className="card-title-desc">For basic styling—light padding and
                                        only horizontal dividers—add the base class {" "}<code>.table</code> to any {" "}
                                        <code>&lt;table&gt;</code>.
                                    </p>
                                </CardHeader>
                                <CardBody>
                                    <div className="table-responsive">
                                        <table className="table mb-0">

                                            <thead>
                                                <tr>
                                                    <th>#</th>
                                                    <th>First Name</th>
                                                    <th>Last Name</th>
                                                    <th>Username</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <th scope="row">1</th>
                                                    <td>Mark</td>
                                                    <td>Otto</td>
                                                    <td>@mdo</td>
                                                </tr>
                                                <tr>
                                                    <th scope="row">2</th>
                                                    <td>Jacob</td>
                                                    <td>Thornton</td>
                                                    <td>@fat</td>
                                                </tr>
                                                <tr>
                                                    <th scope="row">3</th>
                                                    <td>Larry</td>
                                                    <td>the Bird</td>
                                                    <td>@twitter</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>

                                </CardBody>
                            </Card>
                        </Col>

                        <Col lg={6}>
                            <Card>
                                <CardHeader>
                                    <h4 className="card-title">Dark table</h4>
                                    <p className="card-title-desc">You can also invert the colors—with light text on dark
                                        backgrounds—with <code>.table-dark</code>.
                                    </p>
                                </CardHeader>
                                <CardBody>
                                    <div className="table-responsive">
                                        <table className="table table-dark mb-0">

                                            <thead>
                                                <tr>
                                                    <th>#</th>
                                                    <th>First Name</th>
                                                    <th>Last Name</th>
                                                    <th>Username</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <th scope="row">1</th>
                                                    <td>Mark</td>
                                                    <td>Otto</td>
                                                    <td>@mdo</td>
                                                </tr>
                                                <tr>
                                                    <th scope="row">2</th>
                                                    <td>Jacob</td>
                                                    <td>Thornton</td>
                                                    <td>@fat</td>
                                                </tr>
                                                <tr>
                                                    <th scope="row">3</th>
                                                    <td>Larry</td>
                                                    <td>the Bird</td>
                                                    <td>@twitter</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>

                                </CardBody>
                            </Card>
                        </Col>
                    </Row>

                    <Row>
                        <Col lg={6}>
                            <Card>
                                <CardHeader>
                                    <h4 className="card-title">Table head</h4>
                                    <p className="card-title-desc">Use one of two modifier classes to make <code>&lt;thead&gt;</code>s appear
                                        light or dark gray.</p>
                                </CardHeader>
                                <CardBody>
                                    <div className="table-responsive">
                                        <table className="table mb-0">

                                            <thead className="table-light">
                                                <tr>
                                                    <th>#</th>
                                                    <th>First Name</th>
                                                    <th>Last Name</th>
                                                    <th>Username</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <th scope="row">1</th>
                                                    <td>Mark</td>
                                                    <td>Otto</td>
                                                    <td>@mdo</td>
                                                </tr>
                                                <tr>
                                                    <th scope="row">2</th>
                                                    <td>Jacob</td>
                                                    <td>Thornton</td>
                                                    <td>@fat</td>
                                                </tr>
                                                <tr>
                                                    <th scope="row">3</th>
                                                    <td>Larry</td>
                                                    <td>the Bird</td>
                                                    <td>@twitter</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>

                                </CardBody>
                            </Card>
                        </Col>

                        <Col lg={6}>
                            <Card>
                                <CardHeader>
                                    <h4 className="card-title">Striped rows</h4>
                                    <p className="card-title-desc">Use <code>.table-striped</code> to add zebra-striping to any
                                        table row within the <code>&lt;tbody&gt;</code>.</p>
                                </CardHeader>
                                <CardBody>
                                    <div className="table-responsive">
                                        <table className="table table-striped mb-0">

                                            <thead>
                                                <tr>
                                                    <th>#</th>
                                                    <th>First Name</th>
                                                    <th>Last Name</th>
                                                    <th>Username</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <th scope="row">1</th>
                                                    <td>Mark</td>
                                                    <td>Otto</td>
                                                    <td>@mdo</td>
                                                </tr>
                                                <tr>
                                                    <th scope="row">2</th>
                                                    <td>Jacob</td>
                                                    <td>Thornton</td>
                                                    <td>@fat</td>
                                                </tr>
                                                <tr>
                                                    <th scope="row">3</th>
                                                    <td>Larry</td>
                                                    <td>the Bird</td>
                                                    <td>@twitter</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>

                                </CardBody>
                            </Card>
                        </Col>
                    </Row>

                    <Row>
                        <Col lg={6}>
                            <Card>
                                <CardHeader>
                                    <h4 className="card-title">Colored table</h4>
                                    <p className="card-title-desc">You can also invert the colors—with light text on dark
                                        backgrounds—with <code>.table-primary</code>.</p>
                                </CardHeader>
                                <CardBody>
                                    <div className="table-responsive">
                                        <table className="table table-primary table-striped mb-0">

                                            <thead>
                                                <tr>
                                                    <th>#</th>
                                                    <th>First Name</th>
                                                    <th>Last Name</th>
                                                    <th>Username</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <th scope="row">1</th>
                                                    <td>Mark</td>
                                                    <td>Otto</td>
                                                    <td>@mdo</td>
                                                </tr>
                                                <tr>
                                                    <th scope="row">2</th>
                                                    <td>Jacob</td>
                                                    <td>Thornton</td>
                                                    <td>@fat</td>
                                                </tr>
                                                <tr>
                                                    <th scope="row">3</th>
                                                    <td>Larry</td>
                                                    <td>the Bird</td>
                                                    <td>@twitter</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>

                                </CardBody>
                            </Card>
                        </Col>

                        <Col lg={6}>
                            <Card>
                                <CardHeader>
                                    <h4 className="card-title">Colored Bordered table</h4>
                                    <p className="card-title-desc">Add <code>.table-bordered</code> for borders on all sides of
                                        the table and cells.</p>
                                </CardHeader>
                                <CardBody>
                                    <div className="table-responsive">
                                        <table className="table table-bordered border-primary mb-0">

                                            <thead>
                                                <tr>
                                                    <th>#</th>
                                                    <th>First Name</th>
                                                    <th>Last Name</th>
                                                    <th>Username</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <th scope="row">1</th>
                                                    <td>Mark</td>
                                                    <td>Otto</td>
                                                    <td>@mdo</td>
                                                </tr>
                                                <tr>
                                                    <th scope="row">2</th>
                                                    <td>Jacob</td>
                                                    <td>Thornton</td>
                                                    <td>@fat</td>
                                                </tr>
                                                <tr>
                                                    <th scope="row">3</th>
                                                    <td>Larry</td>
                                                    <td>the Bird</td>
                                                    <td>@twitter</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>

                                </CardBody>
                            </Card>
                        </Col>
                    </Row>

                    <Row>
                        <Col lg={6}>
                            <Card>
                                <CardHeader>
                                    <h4 className="card-title">Bordered table</h4>
                                    <p className="card-title-desc">Add <code>.table-bordered</code> for borders on all sides of
                                        the table and cells.</p>
                                </CardHeader>
                                <CardBody>

                                    <div className="table-responsive">
                                        <table className="table table-bordered mb-0">

                                            <thead>
                                                <tr>
                                                    <th>#</th>
                                                    <th>First Name</th>
                                                    <th>Last Name</th>
                                                    <th>Username</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <th scope="row">1</th>
                                                    <td>Mark</td>
                                                    <td>Otto</td>
                                                    <td>@mdo</td>
                                                </tr>
                                                <tr>
                                                    <th scope="row">2</th>
                                                    <td>Jacob</td>
                                                    <td>Thornton</td>
                                                    <td>@fat</td>
                                                </tr>
                                                <tr>
                                                    <th scope="row">3</th>
                                                    <td>Larry</td>
                                                    <td>the Bird</td>
                                                    <td>@twitter</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>

                                </CardBody>
                            </Card>
                        </Col>

                        <Col lg={6}>
                            <Card>
                                <CardHeader>
                                    <h4 className="card-title">Borderless table</h4>
                                    <p className="card-title-desc"> Add <code>.table-borderless</code> for a table without borders.</p>
                                </CardHeader>
                                <CardBody>
                                    <div className="table-responsive">
                                        <table className="table table-borderless mb-0">

                                            <thead>
                                                <tr>
                                                    <th>#</th>
                                                    <th>First Name</th>
                                                    <th>Last Name</th>
                                                    <th>Username</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <th scope="row">1</th>
                                                    <td>Mark</td>
                                                    <td>Otto</td>
                                                    <td>@mdo</td>
                                                </tr>
                                                <tr>
                                                    <th scope="row">2</th>
                                                    <td>Jacob</td>
                                                    <td>Thornton</td>
                                                    <td>@fat</td>
                                                </tr>
                                                <tr>
                                                    <th scope="row">3</th>
                                                    <td>Larry</td>
                                                    <td>the Bird</td>
                                                    <td>@twitter</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>

                                </CardBody>
                            </Card>
                        </Col>
                    </Row>


                    <Row>
                        <Col lg={6}>
                            <Card>
                                <CardHeader>
                                    <h4 className="card-title">Hoverable rows</h4>
                                    <p className="card-title-desc">Add <code>.table-hover</code> to enable a hover state on
                                        table rows within a <code>&lt;tbody&gt;</code>.</p>
                                </CardHeader>
                                <CardBody>
                                    <div className="table-responsive">
                                        <table className="table table-hover mb-0">

                                            <thead>
                                                <tr>
                                                    <th>#</th>
                                                    <th>First Name</th>
                                                    <th>Last Name</th>
                                                    <th>Username</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <th scope="row">1</th>
                                                    <td>Mark</td>
                                                    <td>Otto</td>
                                                    <td>@mdo</td>
                                                </tr>
                                                <tr>
                                                    <th scope="row">2</th>
                                                    <td>Jacob</td>
                                                    <td>Thornton</td>
                                                    <td>@fat</td>
                                                </tr>
                                                <tr>
                                                    <th scope="row">3</th>
                                                    <td>Larry</td>
                                                    <td>the Bird</td>
                                                    <td>@twitter</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>

                                </CardBody>
                            </Card>
                        </Col>

                        <Col lg={6}>
                            <Card>
                                <CardHeader>
                                    <h4 className="card-title">Small table</h4>
                                    <p className="card-title-desc"> Add <code>.table-sm</code> to make tables more compact
                                        by cutting cell padding in half.</p>
                                </CardHeader>
                                <CardBody>
                                    <div className="table-responsive">
                                        <table className="table table-sm m-0">
                                            <thead>
                                                <tr>
                                                    <th>#</th>
                                                    <th>First Name</th>
                                                    <th>Last Name</th>
                                                    <th>Username</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <th scope="row">1</th>
                                                    <td>Mark</td>
                                                    <td>Otto</td>
                                                    <td>@mdo</td>
                                                </tr>
                                                <tr>
                                                    <th scope="row">2</th>
                                                    <td>Jacob</td>
                                                    <td>Thornton</td>
                                                    <td>@fat</td>
                                                </tr>
                                                <tr>
                                                    <th scope="row">3</th>
                                                    <td>Larry</td>
                                                    <td>the Bird</td>
                                                    <td>@twitter</td>
                                                </tr>
                                                <tr>
                                                    <th scope="row">4</th>
                                                    <td>Mark</td>
                                                    <td>Otto</td>
                                                    <td>@mdo</td>
                                                </tr>
                                                <tr>
                                                    <th scope="row">5</th>
                                                    <td>Jacob</td>
                                                    <td>Thornton</td>
                                                    <td>@fat</td>
                                                </tr>
                                            </tbody>
                                        </table>

                                    </div>

                                </CardBody>
                            </Card>
                        </Col>
                    </Row>

                    <Row>
                        <Col lg={6}>
                            <Card>
                                <CardHeader>
                                    <h4 className="card-title">Contextual classes</h4>
                                    <p className="card-title-desc">Use contextual classes to color table rows or individual cells.</p>
                                </CardHeader>
                                <CardBody>

                                    <div className="table-responsive">
                                        <table className="table mb-0">
                                            <thead>
                                                <tr>
                                                    <th>#</th>
                                                    <th>Column heading</th>
                                                    <th>Column heading</th>
                                                    <th>Column heading</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr className="table-light">
                                                    <th scope="row">1</th>
                                                    <td>Column content</td>
                                                    <td>Column content</td>
                                                    <td>Column content</td>
                                                </tr>

                                                <tr className="table-success">
                                                    <th scope="row">2</th>
                                                    <td>Column content</td>
                                                    <td>Column content</td>
                                                    <td>Column content</td>
                                                </tr>

                                                <tr className="table-info">
                                                    <th scope="row">3</th>
                                                    <td>Column content</td>
                                                    <td>Column content</td>
                                                    <td>Column content</td>
                                                </tr>

                                                <tr className="table-warning">
                                                    <th scope="row">4</th>
                                                    <td>Column content</td>
                                                    <td>Column content</td>
                                                    <td>Column content</td>
                                                </tr>

                                                <tr className="table-danger">
                                                    <th scope="row">5</th>
                                                    <td>Column content</td>
                                                    <td>Column content</td>
                                                    <td>Column content</td>
                                                </tr>
                                            </tbody>
                                        </table>

                                    </div>

                                </CardBody>
                            </Card>
                        </Col>

                        <Col lg={6}>
                            <Card>
                                <CardHeader>
                                    <h4 className="card-title">Captions</h4>
                                    <p className="card-title-desc">A <code>&lt;caption&gt;</code> functions like a heading for a table.
                                        It helps users with screen readers to find a table and understand what it’s about and decide
                                        if they want to read it.</p>
                                </CardHeader>
                                <CardBody>
                                    <div className="table-responsive">
                                        <table className="table mb-0">
                                            <caption>List of users</caption>
                                            <thead>
                                                <tr>
                                                    <th>#</th>
                                                    <th>First Name</th>
                                                    <th>Last Name</th>
                                                    <th>Username</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <th scope="row">1</th>
                                                    <td>Mark</td>
                                                    <td>Otto</td>
                                                    <td>@mdo</td>
                                                </tr>
                                                <tr>
                                                    <th scope="row">2</th>
                                                    <td>Jacob</td>
                                                    <td>Thornton</td>
                                                    <td>@fat</td>
                                                </tr>
                                                <tr>
                                                    <th scope="row">3</th>
                                                    <td>Larry</td>
                                                    <td>the Bird</td>
                                                    <td>@twitter</td>
                                                </tr>
                                            </tbody>
                                        </table>

                                    </div>

                                </CardBody>
                            </Card>
                        </Col>
                    </Row>

                    <Row>
                        <Col lg={12}>
                            <Card>
                                <CardHeader>
                                    <h4 className="card-title">Responsive table</h4>
                                    <p className="card-title-desc">
                                        Create responsive tables by wrapping any <code>.table</code> in <code>.table-responsive</code>{" "}
                                        to make them scroll horizontally on small devices (under 768px).
                                    </p>
                                </CardHeader>
                                <CardBody>
                                    <div className="table-responsive">
                                        <table className="table mb-0">
                                            <thead>
                                                <tr>
                                                    <th>#</th>
                                                    <th>Table heading</th>
                                                    <th>Table heading</th>
                                                    <th>Table heading</th>
                                                    <th>Table heading</th>
                                                    <th>Table heading</th>
                                                    <th>Table heading</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <th scope="row">1</th>
                                                    <td>Table cell</td>
                                                    <td>Table cell</td>
                                                    <td>Table cell</td>
                                                    <td>Table cell</td>
                                                    <td>Table cell</td>
                                                    <td>Table cell</td>
                                                </tr>
                                                <tr>
                                                    <th scope="row">2</th>
                                                    <td>Table cell</td>
                                                    <td>Table cell</td>
                                                    <td>Table cell</td>
                                                    <td>Table cell</td>
                                                    <td>Table cell</td>
                                                    <td>Table cell</td>
                                                </tr>
                                                <tr>
                                                    <th scope="row">3</th>
                                                    <td>Table cell</td>
                                                    <td>Table cell</td>
                                                    <td>Table cell</td>
                                                    <td>Table cell</td>
                                                    <td>Table cell</td>
                                                    <td>Table cell</td>
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
    )
}

export default BootstrapBasic;
