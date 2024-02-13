import React from "react";
import { Row, Col, Card, CardBody, Container, CardHeader } from "reactstrap"

// Breadcrumb
import Breadcrumbs from "../../components/Common/Breadcrumb"

// Form Mask
import InputMask from "react-input-mask";

const Mask = () => {
    document.title = "Mask | Matary - React Admin & Dashboard Template";

    const DateStyle = (props) => (
        <InputMask
            mask="99.99.9999"
            value={props.value}
            className="form-control input-color"
            onChange={props.onChange}
        >
        </InputMask>
    );

    const Number = (props) => (
        <InputMask
            mask="+7(999)-999-99-99"
            value={props.value}
            className="form-control input-color"
            onChange={props.onChange}
        >
        </InputMask>
    );

    const NumberOrEmail = (props) => (
        <InputMask
            mask="+7(999)-999-99-99 Or _@_._"
            value={props.value}
            className="form-control input-color"
            onChange={props.onChange}
        >
        </InputMask>
    );


    const RangNumber = (props) => (
        <InputMask
            mask="99999"
            value={props.value}
            className="form-control input-color"
            onChange={props.onChange}
        >
        </InputMask>
    );

    const RegExp = props => (
        <InputMask
            mask="99999*****"
            value={props.value}
            className="form-control input-color"
            onChange={props.onChange}
        >
        </InputMask>
    );

    const Currency = props => (
        <InputMask
            mask="$ 999,999,999.99"
            value={props.value}
            className="form-control input-color"
            onChange={props.onChange}
        >
        </InputMask>
    );

    return (
        <React.Fragment>

            <div className="page-content">
                <Container fluid={true}>
                    <Breadcrumbs title="Forms" breadcrumbItem="Mask" />
                    <Row>
                        <Col lg={12}>
                            <Card>
                                <CardHeader>
                                    <h4 className="card-title">Imask</h4>
                                    <p className="card-title-desc mb-0">vanilla javascript input mask</p>
                                </CardHeader>
                                <CardBody>

                                    <form>
                                        <Row>
                                            <Col lg={6}>
                                                <div>
                                                    <div>
                                                        <label htmlFor="regexp-mask" className="form-label">RegExp (Russian postal code)</label>
                                                        <RegExp id="regexp-mask" />
                                                        <div className="text-muted">/^[1-6]\d0 5$/</div>
                                                    </div>

                                                    <div className="mt-4">
                                                        <label htmlFor="phone-mask" className="form-label">Pattern (Phone)</label>
                                                        <Number id="phone-mask" />
                                                        <div className="text-muted">+{7}(000)000-00-00</div>
                                                    </div>
                                                    <div className="mt-4">
                                                        <label htmlFor="number-mask" className="form-label">Number</label>
                                                        <RangNumber id="number-mask" />
                                                        <div className="text-muted">in range [-10000, 10000]</div>
                                                    </div>
                                                </div>
                                            </Col>

                                            <Col lg={6}>
                                                <div className="mt-4 mt-lg-0">
                                                    <div>
                                                        <label htmlFor="date-mask" className="form-label">Date</label>
                                                        <DateStyle id="date-mask" />
                                                        <div className="text-muted">'dd.mm.yyyy' in range [01.01.1990, 01.01.2020]</div>
                                                    </div>

                                                    <div className="mt-4">
                                                        <label className="form-label">On-the-fly select</label>
                                                        <NumberOrEmail id="dynamic-mask" />
                                                        <div className="text-muted">phone or email</div>
                                                    </div>
                                                    <div className="mt-4">
                                                        <label className="form-label">Mask in mask</label>
                                                        <Currency id="currency-mask" />
                                                        <div className="text-muted">currency input</div>
                                                    </div>
                                                </div>
                                            </Col>
                                        </Row>
                                    </form>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </div>
        </React.Fragment>
    )
}

export default Mask;
