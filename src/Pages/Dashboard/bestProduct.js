import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardBody, Col, Row } from 'reactstrap';

const BestProduct = () => {
    return (
        <React.Fragment>
            <Card className="best-product">
                <CardBody>
                    <Row className="align-items-center justify-content-start">
                        <Col lg={8}>
                            <h5 className="card-title best-product-title">Best Selling Product</h5>
                            <Row className="align-items-end mt-4">
                                <Col className="col-4">
                                    <div className="mt-1">
                                        <h4 className="font-size-20 best-product-title">2,562</h4>
                                        <p className="text-muted mb-0">Sold</p>
                                    </div>
                                </Col>
                                <Col className="col-4">
                                    <div className="mt-1">
                                        <h4 className="font-size-20 best-product-title">4,652</h4>
                                        <p className="text-muted mb-0">Stock</p>
                                    </div>
                                </Col>

                                <Col className="col-4">
                                    <div className="mt-1">
                                        <Link to="#" className="btn btn-primary btn-sm">Buy
                                            Now</Link>
                                    </div>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </CardBody>
            </Card>
        </React.Fragment>
    )
}

export default BestProduct;