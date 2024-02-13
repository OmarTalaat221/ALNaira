import React from "react";
import { Card, CardBody, CardHeader, Col, Container, Row } from "reactstrap";

//Import Breadcrumb
import Breadcrumbs from "../../components/Common/Breadcrumb";

const UiProgressBars = () => {
  document.title = "ProgressBars | Matary - React Admin & Dashboard Template";

  return (
    <React.Fragment>
      <div className="page-content">
        <Container fluid={true}>
          <Breadcrumbs title="UI Elements" breadcrumbItem="Progress Bars" />
          <Row>
            <Col xl={6}>
              <Card>
                <CardHeader>
                  <h4 className="card-title">Default Examples</h4>
                  <p className="card-title-desc">Progress components are built with two
                    HTML elements, some CSS to set the width, and a few attributes.</p>
                </CardHeader>

                <CardBody>
                  <div>
                    <div className="progress mb-4">
                      <div className="progress-bar" role="progressbar" style={{ width: "25%" }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                    <div className="progress mb-4">
                      <div className="progress-bar" role="progressbar" style={{ width: "50%" }} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                    <div className="progress mb-4">
                      <div className="progress-bar" role="progressbar" style={{ width: "75%" }} aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                    <div className="progress">
                      <div className="progress-bar" role="progressbar" style={{ width: "100%" }} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                  </div>
                </CardBody>
              </Card>
            </Col>

            <Col xl={6}>
              <Card>
                <CardHeader>
                  <h4 className="card-title">Backgrounds</h4>
                  <p className="card-title-desc">Use background utility classes to
                    change the appearance of individual progress bars.</p>
                </CardHeader>

                <CardBody>
                  <div>
                    <div className="progress mb-4">
                      <div className="progress-bar bg-success" role="progressbar" style={{ width: "25%" }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                    <div className="progress mb-4">
                      <div className="progress-bar bg-info" role="progressbar" style={{ width: "50%" }} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                    <div className="progress mb-4">
                      <div className="progress-bar bg-warning" role="progressbar" style={{ width: "75%" }} aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                    <div className="progress">
                      <div className="progress-bar bg-danger" role="progressbar" style={{ width: "100%" }} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                  </div>
                </CardBody>
              </Card>
            </Col>
          </Row>

          <Row>
            <Col xl={6}>
              <Card>
                <CardHeader>
                  <h4 className="card-title">Labels Example</h4>
                  <p className="card-title-desc">Add labels to your progress bars by placing text within the <code className="highlighter-rouge">.progress-bar</code>.</p>
                </CardHeader>

                <CardBody>
                  <div>
                    <div className="progress">
                      <div className="progress-bar" role="progressbar" style={{ width: "25%" }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">25%</div>
                    </div>
                  </div>
                </CardBody>
              </Card>
            </Col>

            <Col xl={6}>
              <Card>
                <CardHeader>
                  <h4 className="card-title">Multiple bars</h4>
                  <p className="card-title-desc">Include multiple progress bars in a progress component if you need.</p>
                </CardHeader>

                <CardBody>
                  <div>
                    <div className="progress">
                      <div className="progress-bar" role="progressbar" style={{ width: "15%" }} aria-valuenow="15" aria-valuemin="0" aria-valuemax="100"></div>
                      <div className="progress-bar bg-success" role="progressbar" style={{ width: "30%" }} aria-valuenow="30" aria-valuemin="0" aria-valuemax="100"></div>
                      <div className="progress-bar bg-info" role="progressbar" style={{ width: "20%" }} aria-valuenow="20" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                  </div>
                </CardBody>
              </Card>
            </Col>
          </Row>

          <Row>
            <Col xl={6}>
              <Card>
                <CardHeader>
                  <h4 className="card-title">Height</h4>
                  <p className="card-title-desc">We only set a <code>height</code> value on the <code>.progress-bar</code>, so if you change
                    that value the outer <code>.progress</code> {" "}
                    will automatically resize accordingly.
                  </p>
                </CardHeader>

                <CardBody>
                  <div>
                    <div className="mb-4">
                      <h5 className="font-size-13">Progress sm</h5>

                      <div className="progress progress-sm">
                        <div className="progress-bar" role="progressbar" style={{ width: "25%" }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                      </div>
                    </div>
                    <div className="mb-4">
                      <h5 className="font-size-13">Progress md</h5>

                      <div className="progress progress-md">
                        <div className="progress-bar bg-success" role="progressbar" style={{ width: "40%" }} aria-valuenow="40" aria-valuemin="0" aria-valuemax="100"></div>
                      </div>
                    </div>
                    <div className="mb-4">
                      <h5 className="font-size-13">Progress lg</h5>

                      <div className="progress progress-lg">
                        <div className="progress-bar bg-warning" role="progressbar" style={{ width: "50%" }} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                      </div>
                    </div>
                    <div>
                      <h5 className="font-size-13">Progress xl</h5>

                      <div className="progress progress-xl">
                        <div className="progress-bar bg-danger" role="progressbar" style={{ width: "70%" }} aria-valuenow="70" aria-valuemin="0" aria-valuemax="100"></div>
                      </div>
                    </div>
                  </div>
                </CardBody>
              </Card>
            </Col>

            <Col xl={6}>
              <Card>
                <CardHeader>
                  <h4 className="card-title">Striped</h4>
                  <p className="card-title-desc">Add <code>.progress-bar-striped</code>{" "}
                    to any <code>.progress-bar</code> {" "} to apply a
                    stripe via CSS gradient over the progress bar's background color.
                  </p>
                </CardHeader>

                <CardBody>
                  <div className="progress mb-4">
                    <div className="progress-bar progress-bar-striped" role="progressbar" style={{ width: "25%" }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                  </div>
                  <div className="progress mb-0">
                    <div className="progress-bar progress-bar-striped bg-success" role="progressbar" style={{ width: "40%" }} aria-valuenow="40" aria-valuemin="0" aria-valuemax="100"></div>
                  </div>
                </CardBody>
              </Card>

              <Card>
                <CardHeader>
                  <h4 className="card-title">Animated stripes</h4>
                  <p className="card-title-desc">The striped gradient can also be
                    animated. Add <code>.progress-bar-animated</code> to <code>.progress-bar</code> to animate the
                    stripes right to left via CSS3 animations.</p>
                </CardHeader>

                <CardBody>
                  <div className="progress">
                    <div className="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style={{ width: "75%" }}></div>
                  </div>
                </CardBody>
              </Card>
            </Col>
          </Row>

          <Row>
            <Col xl={6}>
              <Card>
                <CardHeader>
                  <h4 className="card-title">Animated Progress</h4>
                  <p className="card-title-desc">Add <code>.animated-progess</code> class with <code>.progress-bar</code> for animated progressbar.</p>
                </CardHeader>

                <CardBody>
                  <div>
                    <div className="progress animated-progess mb-4">
                      <div className="progress-bar" role="progressbar" style={{ width: "10%" }} aria-valuenow="10" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                    <div className="progress animated-progess mb-4">
                      <div className="progress-bar bg-success" role="progressbar" style={{ width: "25%" }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                    <div className="progress animated-progess mb-4">
                      <div className="progress-bar bg-info" role="progressbar" style={{ width: "50%" }} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                    <div className="progress animated-progess mb-4">
                      <div className="progress-bar bg-warning" role="progressbar" style={{ width: "75%" }} aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                    <div className="progress animated-progess">
                      <div className="progress-bar bg-danger" role="progressbar" style={{ width: "100%" }} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                  </div>
                </CardBody>
              </Card>
            </Col>

            <Col xl={6}>
              <Card>
                <CardHeader>
                  <h4 className="card-title">Custom progress</h4>
                  <p className="card-title-desc">Example of Custom progress</p>
                </CardHeader>

                <CardBody>
                  <div className="py-2">
                    <div className="custom-progess mb-5">
                      <div className="progress progress-sm">
                        <div className="progress-bar bg-danger" role="progressbar" style={{ width: "84%" }} aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                      </div>
                      <div className="avatar-sm progress-icon">
                        <span className="avatar-title rounded-circle border border-danger">
                          <i className="bx bxl-html5 text-danger font-size-18"></i>
                        </span>
                      </div>
                    </div>

                    <div className="custom-progess mb-5">
                      <div className="progress progress-sm">
                        <div className="progress-bar" role="progressbar" style={{ width: "75%" }} aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                      </div>
                      <div className="avatar-sm progress-icon">
                        <span className="avatar-title rounded-circle border border-primary">
                          <i className="bx bxl-css3 text-primary font-size-18"></i>
                        </span>
                      </div>
                    </div>

                    <div className="custom-progess">
                      <div className="progress progress-sm">
                        <div className="progress-bar bg-info" role="progressbar" style={{ width: "62%" }} aria-valuenow="62" aria-valuemin="0" aria-valuemax="100"></div>
                      </div>
                      <div className="avatar-sm progress-icon">
                        <span className="avatar-title rounded-circle border border-info">
                          <i className="bx bxl-jquery text-info font-size-18"></i>
                        </span>
                      </div>
                    </div>
                  </div>
                </CardBody>
              </Card>
            </Col>
          </Row>

          <Row>
            <Col xl={6}>
              <Card>
                <CardHeader>
                  <h5 className="card-title">Progress Example</h5>
                  <p className="card-title-desc">You can use these classes with existing components to create new ones.</p>
                </CardHeader>

                <CardBody>
                  <div className="position-relative m-4">
                    <div className="progress" style={{ height: "1px" }}>
                      <div className="progress-bar" role="progressbar" style={{ width: "50%" }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                    <button type="button" className="position-absolute top-0 start-0 translate-middle btn btn-sm btn-primary rounded-pill" style={{ width: "2rem", height: "2rem" }}>1</button>
                    <button type="button" className="position-absolute top-0 start-50 translate-middle btn btn-sm btn-primary rounded-pill" style={{ width: "2rem", height: "2rem" }}>2</button>
                    <button type="button" className="position-absolute top-0 start-100 translate-middle btn btn-sm btn-secondary rounded-pill" style={{ width: "2rem", height: "2rem" }}>3</button>
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

export default UiProgressBars;