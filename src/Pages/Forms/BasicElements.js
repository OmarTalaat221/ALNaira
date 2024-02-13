import React from "react";
import { Card, CardBody, CardHeader, Col, Container, Row } from "reactstrap";

//Import Breadcrumb
import Breadcrumbs from "../../components/Common/Breadcrumb";

const BasicElements = () => {
  document.title = "Basic Elements | Matary - React Admin & Dashboard Template";

  return (
    <React.Fragment>
      <div className="page-content">
        <Container fluid={true}>
          <Breadcrumbs title="Forms" breadcrumbItem="Basic Elements" />
          <Row>
            <Col className="col-12">
              <Card>
                <CardHeader>
                  <h4 className="card-title">Textual inputs</h4>
                  <p className="card-title-desc">Here are examples of <code>.form-control</code> applied to each
                    textual HTML5 <code>&lt;input&gt;</code> <code>type</code>.</p>
                </CardHeader>
                <CardBody>

                  <Row className="mb-3">
                    <label htmlFor="example-text-input" className="col-md-2 col-form-label">Text</label>
                    <Col md={10}>
                      <input className="form-control" type="text" defaultValue="Artisanal kale" id="example-text-input" />
                    </Col>
                  </Row>
                  <Row className="mb-3">
                    <label htmlFor="example-search-input" className="col-md-2 col-form-label">Search</label>
                    <Col md={10}>
                      <input className="form-control" type="search" defaultValue="How do I shoot web" id="example-search-input" />
                    </Col>
                  </Row>
                  <Row className="mb-3">
                    <label htmlFor="example-email-input" className="col-md-2 col-form-label">Email</label>
                    <Col md={10}>
                      <input className="form-control" type="email" defaultValue="bootstrap@example.com" id="example-email-input" />
                    </Col>
                  </Row>
                  <Row className="mb-3">
                    <label htmlFor="example-url-input" className="col-md-2 col-form-label">URL</label>
                    <Col md={10}>
                      <input className="form-control" type="url" defaultValue="https://getbootstrap.com" id="example-url-input" />
                    </Col>
                  </Row>
                  <Row className="mb-3">
                    <label htmlFor="example-tel-input" className="col-md-2 col-form-label">Telephone</label>
                    <Col md={10}>
                      <input className="form-control" type="tel" defaultValue="1-(555)-555-5555" id="example-tel-input" />
                    </Col>
                  </Row>
                  <Row className="mb-3">
                    <label htmlFor="example-password-input" className="col-md-2 col-form-label">Password</label>
                    <Col md={10}>
                      <input className="form-control" type="password" defaultValue="hunter2" id="example-password-input" />
                    </Col>
                  </Row>
                  <Row className="mb-3">
                    <label htmlFor="example-number-input" className="col-md-2 col-form-label">Number</label>
                    <Col md={10}>
                      <input className="form-control" type="number" defaultValue="42" id="example-number-input" />
                    </Col>
                  </Row>
                  <Row className="mb-3">
                    <label htmlFor="example-datetime-local-input" className="col-md-2 col-form-label">Date and time</label>
                    <Col md={10}>
                      <input className="form-control" type="datetime-local" defaultValue="2019-08-19T13:45:00" id="example-datetime-local-input" />
                    </Col>
                  </Row>
                  <Row className="mb-3">
                    <label htmlFor="example-date-input" className="col-md-2 col-form-label">Date</label>
                    <Col md={10}>
                      <input className="form-control" type="date" defaultValue="2019-08-19" id="example-date-input" />
                    </Col>
                  </Row>
                  <Row className="mb-3">
                    <label htmlFor="example-month-input" className="col-md-2 col-form-label">Month</label>
                    <Col md={10}>
                      <input className="form-control" type="month" defaultValue="2019-08" id="example-month-input" />
                    </Col>
                  </Row>
                  <Row className="mb-3">
                    <label htmlFor="example-week-input" className="col-md-2 col-form-label">Week</label>
                    <Col md={10}>
                      <input className="form-control" type="week" defaultValue="2019-W33" id="example-week-input" />
                    </Col>
                  </Row>
                  <Row className="mb-3">
                    <label htmlFor="example-time-input" className="col-md-2 col-form-label">Time</label>
                    <Col md={10}>
                      <input className="form-control" type="time" defaultValue="13:45:00" id="example-time-input" />
                    </Col>
                  </Row>
                  <Row className="mb-3">
                    <label htmlFor="exampleColorInput" className="col-md-2 col-form-label">Color picker</label>
                    <Col md={10}>
                      <input type="color" className="form-control form-control-color" id="exampleColorInput" defaultValue="#3980c0" title="Choose your color" />
                    </Col>
                  </Row>
                  <Row className="mb-3">
                    <label className="col-md-2 col-form-label">Select</label>
                    <Col md={10}>
                      <select className="form-select">
                        <option>Select</option>
                        <option>Large select</option>
                        <option>Small select</option>
                      </select>
                    </Col>
                  </Row>

                  <Row>
                    <label htmlFor="exampleDataList" className="col-md-2 col-form-label">Datalist</label>
                    <Col md={10}>
                      <input className="form-control" list="datalistOptions" id="exampleDataList" placeholder="Type to search..." />
                      <datalist id="datalistOptions">
                        <option defaultValue="San Francisco" />
                        <option defaultValue="New York" />
                        <option defaultValue="Seattle" />
                        <option defaultValue="Los Angeles" />
                        <option defaultValue="Chicago" />
                      </datalist>
                    </Col>
                  </Row>
                </CardBody>
              </Card>
            </Col>
          </Row>

          <Row>
            <Col lg={12}>
              <Card>
                <CardHeader>
                  <h4 className="card-title mb-0">Form layouts</h4>
                </CardHeader>
                <CardBody>
                  <Row>
                    <Col lg={5}>
                      <div className="mt-4 mt-xl-0">
                        <h5 className="font-size-14 mb-4"><i className="mdi mdi-arrow-right text-primary me-1"></i> Form groups</h5>
                        <form>
                          <div className="mb-3">
                            <label className="form-label" htmlFor="formrow-firstname-input">First Name</label>
                            <input type="text" className="form-control" placeholder="Enter First Name" id="formrow-firstname-input" />
                          </div>

                          <Row>
                            <Col md={6}>
                              <div className="mb-3">
                                <label className="form-label" htmlFor="formrow-email-input">Email</label>
                                <input type="email" className="form-control" placeholder="Enter Email" id="formrow-email-input" />
                              </div>
                            </Col>
                            <Col md={6}>
                              <div className="mb-3">
                                <label className="form-label" htmlFor="formrow-password-input">Password</label>
                                <input type="password" className="form-control" placeholder="Enter password" id="formrow-password-input" />
                              </div>
                            </Col>
                          </Row>

                          <div className="form-check">
                            <input type="checkbox" className="form-check-input" id="formrow-customCheck" />
                            <label className="form-check-label" htmlFor="formrow-customCheck">Check me out</label>
                          </div>

                          <div className="mt-4">
                            <button type="submit" className="btn btn-primary w-md">Submit</button>
                          </div>
                        </form>
                      </div>
                    </Col>
                    <Col lg={6} className="ms-lg-auto">
                      <div className="mt-5 mt-lg-4 mt-xl-0">
                        <h5 className="font-size-14 mb-4"><i className="mdi mdi-arrow-right text-primary me-1"></i> Horizontal form</h5>

                        <form>
                          <Row className="mb-4">
                            <label htmlFor="horizontal-firstname-input" className="col-sm-3 col-form-label">First name</label>
                            <Col sm={9}>
                              <input type="text" className="form-control" placeholder="Enter First Name" id="horizontal-firstname-input" />
                            </Col>
                          </Row>
                          <Row className="mb-4">
                            <label htmlFor="horizontal-email-input" className="col-sm-3 col-form-label">Email</label>
                            <Col sm={9}>
                              <input type="email" className="form-control" placeholder="Enter Email" id="horizontal-email-input" />
                            </Col>
                          </Row>
                          <Row className="mb-4">
                            <label htmlFor="horizontal-password-input" className="col-sm-3 col-form-label">Password</label>
                            <Col sm={9}>
                              <input type="password" className="form-control" placeholder="Enter Password" id="horizontal-password-input" />
                            </Col>
                          </Row>

                          <Row className="justify-content-end">
                            <Col sm={9}>
                              <div className="form-check mb-4">
                                <input type="checkbox" className="form-check-input" id="horizontal-customCheck" />
                                <label className="form-check-label" htmlFor="horizontal-customCheck">Remember me</label>
                              </div>

                              <div>
                                <button type="submit" className="btn btn-primary w-md">Submit</button>
                              </div>
                            </Col>
                          </Row>
                        </form>
                      </div>
                    </Col>
                  </Row>

                  <div className="mt-4">
                    <h5 className="font-size-14 mb-4"><i className="mdi mdi-arrow-right text-primary me-1"></i> Inline forms layout</h5>

                    <form className="row row-cols-lg-auto gx-3 gy-2 align-items-center">
                      <Col className="col-12">
                        <label className="visually-hidden" htmlFor="specificSizeInputName">Name</label>
                        <input type="text" className="form-control" id="specificSizeInputName" placeholder="Enter Name" />
                      </Col>
                      <Col className="col-12">
                        <label className="visually-hidden" htmlFor="specificSizeInputGroupUsername">Username</label>
                        <div className="input-group">
                          <div className="input-group-text">@</div>
                          <input type="text" className="form-control" id="specificSizeInputGroupUsername" placeholder="Username" />
                        </div>
                      </Col>
                      <Col className="col-12">
                        <div className="form-check">
                          <input className="form-check-input" type="checkbox" id="autoSizingCheck2" />
                          <label className="form-check-label" htmlFor="autoSizingCheck2">
                            Remember me
                          </label>
                        </div>
                      </Col>
                      <Col className="col-12">
                        <button type="submit" className="btn btn-primary">Submit</button>
                      </Col>
                    </form>
                  </div>

                  <div className="row mt-4">
                    <Col lg={6}>
                      <h5 className="font-size-14 mb-4"><i className="mdi mdi-arrow-right text-primary me-1"></i> Inline forms layout used by hstack</h5>
                      <form className="row gx-3 gy-2 align-items-center">
                        <div className="hstack gap-3">
                          <input className="form-control me-auto" type="text" placeholder="Add your item here..." />
                          <button type="button" className="btn btn-secondary">Submit</button>
                          <div className="vr"></div>
                          <button type="reset" className="btn btn-outline-danger">Reset</button>
                        </div>
                      </form>
                    </Col>
                  </div>
                </CardBody>
              </Card>
            </Col>
          </Row>

          <Row>
            <Col xl={6}>
              <Card>
                <CardHeader>
                  <h4 className="card-title">Sizing</h4>
                  <p className="card-title-desc">Set heights using classes like <code>.form-control-lg</code> and <code>.form-control-sm</code>.</p>
                </CardHeader>
                <CardBody>
                  <form>
                    <div className="mb-4">
                      <label className="form-label" htmlFor="default-input">Default input</label>
                      <input className="form-control" type="text" id="default-input" placeholder="Default input" />
                    </div>

                    <div className="mb-4 mt-4">
                      <label className="form-label" htmlFor="form-sm-input">Form Small input</label>
                      <input className="form-control form-control-sm" type="text" id="form-sm-input" placeholder=".form-control-sm" />
                    </div>

                    <div className="mt-4 mb-0">
                      <label className="form-label" htmlFor="form-lg-input">Form Large input</label>
                      <input className="form-control form-control-lg" type="text" id="form-lg-input" placeholder=".form-control-lg" />
                    </div>
                  </form>
                </CardBody>
              </Card>
            </Col>

            <Col xl={6}>
              <Card>
                <CardHeader>
                  <h4 className="card-title">Range Inputs</h4>
                  <p className="card-title-desc">Create custom <code>&lt;input type="range"&gt;</code>
                    controls with <code>.form-range</code>.</p>
                </CardHeader>
                <CardBody>

                  <div className="mb-3">
                    <label htmlFor="customRange1" className="form-label">Example range</label>
                    <input type="range" className="form-range" id="customRange1" />
                  </div>

                  <div className="mb-4">
                    <h5 className="font-size-14 mb-1">Min and max</h5>
                    <p className="card-title-desc mb-2">Range inputs have implicit values for min and
                      max—0 and 100, respectively.</p>
                    <input type="range" className="form-range" min="0" max="5" id="customRange2" />
                  </div>

                  <div>
                    <h5 className="font-size-14 mb-1">Steps</h5>
                    <p className="card-title-desc mb-2">By default, range inputs “snap” to integer
                      values. To change this, you can specify a <code>step</code> value.</p>
                    <input type="range" className="form-range" min="0" max="5" id="customRange3" />
                  </div>

                </CardBody>
              </Card>

            </Col>
          </Row>

          <Row>
            <Col xl={6}>
              <Card>
                <CardHeader>
                  <h4 className="card-title mb-0">Checkboxes</h4>
                </CardHeader>
                <CardBody>
                  <Row>
                    <Col md={5}>

                      <div >
                        <h5 className="font-size-14 mb-4"><i
                          className="mdi mdi-arrow-right text-primary me-1"></i> Form Checkboxes
                        </h5>
                        <div className="form-check mb-3">
                          <input className="form-check-input" type="checkbox" id="formCheck1" />
                          <label className="form-check-label" htmlFor="formCheck1">
                            Form Checkbox
                          </label>
                        </div>
                        <div className="form-check">
                          <input className="form-check-input" type="checkbox" id="formCheck2" defaultChecked />
                          <label className="form-check-label" htmlFor="formCheck2">
                            Form Checkbox checked
                          </label>
                        </div>
                      </div>
                    </Col>

                    <Col md={6} className="ms-auto">

                      <div className="mt-md-0">
                        <h5 className="font-size-14 mb-4"><i
                          className="mdi mdi-arrow-right text-primary me-1"></i> Form Checkboxes
                          Right</h5>
                        <div>
                          <div className="form-check-right mb-3">
                            <input className="form-check-input" type="checkbox" id="formCheckRight1" />
                            <label className="form-check-label" htmlFor="formCheckRight1">
                              Form Checkbox Right
                            </label>
                          </div>
                        </div>
                        <div>
                          <div className="form-check-right">
                            <input className="form-check-input" type="checkbox" id="formCheckRight2"
                              defaultChecked />
                            <label className="form-check-label" htmlFor="formCheckRight2">
                              Form Checkbox Right checked
                            </label>
                          </div>
                        </div>

                      </div>

                    </Col>
                  </Row>
                </CardBody>
              </Card>
            </Col>
            <Col xl={6}>
              <Card>
                <CardHeader>
                  <h4 className="card-title mb-0">Radios</h4>
                </CardHeader>
                <CardBody>

                  <Row>
                    <Col md={5}>
                      <div>
                        <h5 className="font-size-14 mb-4">Form Radios</h5>
                        <div className="form-check mb-3">
                          <input className="form-check-input" type="radio" name="formRadios"
                            id="formRadios1" defaultChecked />
                          <label className="form-check-label" htmlFor="formRadios1">
                            Form Radio
                          </label>
                        </div>
                        <div className="form-check">
                          <input className="form-check-input" type="radio" name="formRadios"
                            id="formRadios2" />
                          <label className="form-check-label" htmlFor="formRadios2">
                            Form Radio checked
                          </label>
                        </div>
                      </div>
                    </Col>
                    <Col md={6} className="ms-auto">
                      <div className="mt-lg-0">
                        <h5 className="font-size-14 mb-4">Form Radios Right</h5>
                        <div>
                          <div className="form-check-right mb-3">
                            <input className="form-check-input" type="radio" name="formRadiosRight"
                              id="formRadiosRight1" defaultChecked />
                            <label className="form-check-label" htmlFor="formRadiosRight1">
                              Form Radio Right
                            </label>
                          </div>
                        </div>

                        <div>
                          <div className="form-check-right">
                            <input className="form-check-input" type="radio" name="formRadiosRight"
                              id="formRadiosRight2" />
                            <label className="form-check-label" htmlFor="formRadiosRight2">
                              Form Radio Right checked
                            </label>
                          </div>
                        </div>
                      </div>
                    </Col>
                  </Row>
                </CardBody>
              </Card>
            </Col>
          </Row>

          <Row>
            <Col lg={12}>
              <Card>
                <CardHeader>
                  <h4 className="card-title">Switches</h4>
                  <p className="card-title-desc">A switch has the markup of a custom
                    checkbox but uses the <code>.custom-switch</code> class to render a toggle switch.
                    Switches also support the <code>disabled</code> attribute.</p>
                </CardHeader>
                <CardBody>

                  <Row>

                    <Col md={6}>
                      <div>
                        <h5 className="font-size-14 mb-3"><i className="mdi mdi-arrow-right text-primary me-1"></i> Switch examples</h5>

                        <div className="form-check form-switch mb-3" dir="ltr">
                          <input type="checkbox" className="form-check-input" id="customSwitch1" defaultChecked />
                          <label className="form-check-label" htmlFor="customSwitch1">Toggle this switch element</label>
                        </div>
                        <div className="form-check form-switch" dir="ltr">
                          <input type="checkbox" className="form-check-input" disabled id="customSwitch2" />
                          <label className="form-check-label" htmlFor="customSwitch2">Disabled switch element</label>
                        </div>
                      </div>
                    </Col>
                    <Col md={6}>
                      <div className="mt-4 mt-md-0">
                        <h5 className="font-size-14 mb-3"><i className="mdi mdi-arrow-right text-primary me-1"></i> Switch sizes</h5>

                        <div className="form-check form-switch mb-3" dir="ltr">
                          <input type="checkbox" className="form-check-input" id="customSwitchsizesm" defaultChecked />
                          <label className="form-check-label" htmlFor="customSwitchsizesm">Small Size Switch</label>
                        </div>

                        <div className="form-check form-switch form-switch-md mb-3" dir="ltr">
                          <input type="checkbox" className="form-check-input" id="customSwitchsizemd" />
                          <label className="form-check-label" htmlFor="customSwitchsizemd">Medium Size Switch</label>
                        </div>

                        <div className="form-check form-switch form-switch-lg mb-3" dir="ltr">
                          <input type="checkbox" className="form-check-input" id="customSwitchsizelg" defaultChecked/>
                          <label className="form-check-label" htmlFor="customSwitchsizelg">Large Size Switch</label>
                        </div>
                      </div>
                    </Col>
                  </Row>
                </CardBody>
              </Card>
            </Col>
          </Row>

          <Row>
            <Col xl={12}>
              <Card>
                <CardHeader>
                  <h4 className="card-title mb-0">File browser</h4>
                </CardHeader>
                <CardBody>
                  <Row>
                    <Col xl={6}>
                      <div className="mt-4 mt-xl-0">
                        <h5 className="font-size-14"><i className="mdi mdi-arrow-right text-primary"></i> Default file input</h5>

                        <div className="mt-4">
                          <label htmlFor="formFile" className="form-label">Default file input example</label>
                          <input className="form-control" type="file" id="formFile" />
                        </div>

                        <div className="mt-4">
                          <div>
                            <label htmlFor="formFileSm" className="form-label">Small file input example</label>
                            <input className="form-control form-control-sm" id="formFileSm" type="file" />
                          </div>
                        </div>

                        <div className="mt-4">
                          <div>
                            <label htmlFor="formFileLg" className="form-label">Large file input example</label>
                            <input className="form-control form-control-lg" id="formFileLg" type="file" />
                          </div>
                        </div>
                      </div>
                    </Col>
                    <Col xl={6}>
                      <div className="mt-4 mt-xl-0">
                        <h5 className="font-size-14"><i className="mdi mdi-arrow-right text-primary"></i> Custom file input</h5>
                        <div className="mt-4">
                          <label className="form-label">With Label</label>
                          <div className="input-group mb-3">
                            <label className="input-group-text" htmlFor="inputGroupFile01">Upload</label>
                            <input type="file" className="form-control" id="inputGroupFile01" />
                          </div>
                          <div className="input-group">
                            <input type="file" className="form-control" id="inputGroupFile02" />
                            <label className="input-group-text" htmlFor="inputGroupFile02">Upload</label>
                          </div>
                        </div>
                        <div className="mt-4">
                          <label className="form-label">With Button</label>
                          <div className="input-group mb-3">
                            <button className="btn btn-primary" type="button" id="inputGroupFileAddon03">Button</button>
                            <input type="file" className="form-control" id="inputGroupFile03" aria-describedby="inputGroupFileAddon03" aria-label="Upload" />
                          </div>

                          <div className="input-group">
                            <input type="file" className="form-control" id="inputGroupFile04" aria-describedby="inputGroupFileAddon04" aria-label="Upload" />
                            <button className="btn btn-primary" type="button" id="inputGroupFileAddon04">Button</button>
                          </div>
                        </div>
                      </div>
                    </Col>
                  </Row>

                </CardBody>
              </Card>
            </Col>
          </Row>

        </Container >
      </div >
    </React.Fragment >
  );
};
export default BasicElements;