import React from "react";
import { Link } from "react-router-dom";
import { Card, CardBody, CardHeader, Col, Container, DropdownItem, DropdownMenu, DropdownToggle, Row, UncontrolledButtonDropdown, UncontrolledDropdown } from "reactstrap";
//Import Breadcrumb
import Breadcrumbs from "../../components/Common/Breadcrumb";

const UiDropdowns = () => {
  document.title = "Dropdowns | Matary - React Admin & Dashboard Template";

  return (
    <React.Fragment>
      <div className="page-content">
        <Container fluid>
          <Breadcrumbs title="UI Elements" breadcrumbItem="Dropdowns" />
          <Row>
            <Col xl={6}>
              <Card>
                <CardHeader>
                  <h4 className="card-title">Single button dropdowns</h4>
                  <p className="card-title-desc">Any single <code
                    className="highlighter-rouge">.btn</code> {" "} can be turned into a dropdown
                    toggle with some markup changes. Here's how you can put them to work
                    with either <code className="highlighter-rouge">&lt;button&gt;</code>{" "}
                    elements:
                  </p>
                </CardHeader>

                <CardBody>
                  <Row>
                    <Col sm={6}>
                      <UncontrolledDropdown>
                        <DropdownToggle tag="button" className="btn btn-secondary" id="dropdownMenuButton">
                          Dropdown button <i className="mdi mdi-chevron-down"></i>
                        </DropdownToggle>
                        <DropdownMenu>
                          <DropdownItem>Action</DropdownItem>
                          <DropdownItem>Another action</DropdownItem>
                          <DropdownItem>Something else here</DropdownItem>
                        </DropdownMenu>
                      </UncontrolledDropdown>
                    </Col>

                    <Col sm={6}>
                      <UncontrolledDropdown className="dropdown mt-4 mt-sm-0">
                        <DropdownToggle tag="a" className="btn btn-secondary">
                          Dropdown link <i className="mdi mdi-chevron-down"></i>
                        </DropdownToggle>
                        <DropdownMenu>
                          <DropdownItem>Action</DropdownItem>
                          <DropdownItem>Another action</DropdownItem>
                          <DropdownItem>Something else here</DropdownItem>
                        </DropdownMenu>
                      </UncontrolledDropdown>
                    </Col>
                  </Row>
                </CardBody>
              </Card>
            </Col>

            <Col xl={6}>
              <Card>
                <CardHeader>
                  <h4 className="card-title">Variant</h4>
                  <p className="card-title-desc">The best part is you can do this with any button variant, too:</p>
                </CardHeader>

                <CardBody>
                  <div className="d-flex gap-2 flex-wrap">
                    <div className="btn-group">
                      <UncontrolledDropdown>
                        <DropdownToggle tag="button" className="btn btn-primary">
                          Primary <i className="mdi mdi-chevron-down"></i>
                        </DropdownToggle>
                        <DropdownMenu>
                          <DropdownItem>Action</DropdownItem>
                          <DropdownItem>Another action</DropdownItem>
                          <DropdownItem>Something else here</DropdownItem>
                          <DropdownItem divider />
                          <DropdownItem>Separated link</DropdownItem>
                        </DropdownMenu>
                      </UncontrolledDropdown>
                    </div>

                    <div className="btn-group">
                      <UncontrolledDropdown>
                        <DropdownToggle tag="button" className="btn btn-secondary">
                          Secondary <i className="mdi mdi-chevron-down"></i>
                        </DropdownToggle>
                        <DropdownMenu>
                          <DropdownItem>Action</DropdownItem>
                          <DropdownItem>Another action</DropdownItem>
                          <DropdownItem>Something else here</DropdownItem>
                          <DropdownItem divider />
                          <DropdownItem>Separated link</DropdownItem>
                        </DropdownMenu>
                      </UncontrolledDropdown>
                    </div>

                    <div className="btn-group">
                      <UncontrolledDropdown>
                        <DropdownToggle tag="button" className="btn btn-success">
                          Success <i className="mdi mdi-chevron-down"></i>
                        </DropdownToggle>
                        <DropdownMenu>
                          <DropdownItem>Action</DropdownItem>
                          <DropdownItem>Another action</DropdownItem>
                          <DropdownItem>Something else here</DropdownItem>
                          <DropdownItem divider />
                          <DropdownItem>Separated link</DropdownItem>
                        </DropdownMenu>
                      </UncontrolledDropdown>
                    </div>
                    <div className="btn-group">
                      <UncontrolledDropdown>
                        <DropdownToggle tag="button" className="btn btn-info">
                          Info <i className="mdi mdi-chevron-down"></i>
                        </DropdownToggle>
                        <DropdownMenu>
                          <DropdownItem>Action</DropdownItem>
                          <DropdownItem>Another action</DropdownItem>
                          <DropdownItem>Something else here</DropdownItem>
                          <DropdownItem divider />
                          <DropdownItem>Separated link</DropdownItem>
                        </DropdownMenu>
                      </UncontrolledDropdown>
                    </div>
                    <div className="btn-group">
                      <UncontrolledDropdown>
                        <DropdownToggle tag="button" className="btn btn-warning">
                          Warning <i className="mdi mdi-chevron-down"></i>
                        </DropdownToggle>
                        <DropdownMenu>
                          <DropdownItem>Action</DropdownItem>
                          <DropdownItem>Another action</DropdownItem>
                          <DropdownItem>Something else here</DropdownItem>
                          <DropdownItem divider />
                          <DropdownItem>Separated link</DropdownItem>
                        </DropdownMenu>
                      </UncontrolledDropdown>
                    </div>
                    <div className="btn-group">
                      <UncontrolledDropdown>
                        <DropdownToggle tag="button" className="btn btn-danger">
                          Danger <i className="mdi mdi-chevron-down"></i>
                        </DropdownToggle>
                        <DropdownMenu>
                          <DropdownItem>Action</DropdownItem>
                          <DropdownItem>Another action</DropdownItem>
                          <DropdownItem>Something else here</DropdownItem>
                          <DropdownItem divider />
                          <DropdownItem>Separated link</DropdownItem>
                        </DropdownMenu>
                      </UncontrolledDropdown>
                    </div>
                  </div>
                </CardBody>
              </Card>
            </Col>
          </Row>

          <Row>
            <Col xl={12}>
              <Card>
                <CardHeader>
                  <h4 className="card-title">Dropdown Menu Item Color</h4>
                  <p className="card-title-desc">Example of dropdown menu item color</p>
                </CardHeader>
                <CardBody>
                  <Row>
                    <Col lg={3}>
                      <div className="">
                        <h5 className="font-size-13 mb-3">Dropdown Menu Success link example</h5>
                        <div className="clearfix">
                          <div className="dropdown-menu d-inline-block position-relative dropdownmenu-success" style={{ zIndex: "1" }}>
                            <Link className="dropdown-item" to="#">Action</Link>
                            <Link className="dropdown-item" to="#">Another action</Link>
                            <Link className="dropdown-item active" to="#">Something else here</Link>
                            <div className="dropdown-divider"></div>
                            <Link className="dropdown-item" to="#">Separated link</Link>
                          </div>
                        </div>
                      </div>
                    </Col>
                    <Col lg={9}>
                      <div className="mt-lg-0 mt-3">
                        <h5 className="font-size-13 mb-0">Dropdown Menu link Color example</h5>
                        <div>
                          <Row>
                            <div className="col-lg-4 col-sm-6">
                              <div className="mt-3">
                                <p className="font-size-13 mb-2">Dropdown menu Primary link</p>
                                <div className="btn-group">
                                  <UncontrolledDropdown>
                                    <DropdownToggle tag="button" className="btn btn-primary">
                                      Primary <i className="mdi mdi-chevron-down"></i>
                                    </DropdownToggle>
                                    <DropdownMenu className="dropdownmenu-primary">
                                      <DropdownItem>Action</DropdownItem>
                                      <DropdownItem>Another action</DropdownItem>
                                      <DropdownItem>Something else here</DropdownItem>
                                      <DropdownItem divider />
                                      <DropdownItem>Separated link</DropdownItem>
                                    </DropdownMenu>
                                  </UncontrolledDropdown>
                                </div>
                              </div>
                            </div>
                            <div className="col-lg-4 col-sm-6">
                              <div className="mt-3">
                                <p className="font-size-13 mb-2">Dropdown menu Secondary link</p>
                                <div className="btn-group">
                                  <UncontrolledDropdown>
                                    <DropdownToggle tag="button" className="btn btn-secondary">
                                      Secondary <i className="mdi mdi-chevron-down"></i>
                                    </DropdownToggle>
                                    <DropdownMenu className="dropdownmenu-secondary">
                                      <DropdownItem>Action</DropdownItem>
                                      <DropdownItem>Another action</DropdownItem>
                                      <DropdownItem>Something else here</DropdownItem>
                                      <DropdownItem divider />
                                      <DropdownItem>Separated link</DropdownItem>
                                    </DropdownMenu>
                                  </UncontrolledDropdown>
                                </div>
                              </div>
                            </div>
                            <div className="col-lg-4 col-sm-6">
                              <div className="mt-3">
                                <p className="font-size-13 mb-2">Dropdown menu Success link</p>
                                <div className="btn-group">
                                  <UncontrolledDropdown>
                                    <DropdownToggle tag="button" className="btn btn-success">
                                      Success <i className="mdi mdi-chevron-down"></i>
                                    </DropdownToggle>
                                    <DropdownMenu className="dropdownmenu-success">
                                      <DropdownItem>Action</DropdownItem>
                                      <DropdownItem>Another action</DropdownItem>
                                      <DropdownItem>Something else here</DropdownItem>
                                      <DropdownItem divider />
                                      <DropdownItem>Separated link</DropdownItem>
                                    </DropdownMenu>
                                  </UncontrolledDropdown>
                                </div>
                              </div>
                            </div>
                            <div className="col-lg-4 col-sm-6">
                              <div className="mt-3">
                                <p className="font-size-13 mb-2">Dropdown menu Warning link</p>
                                <div className="btn-group">
                                  <UncontrolledDropdown>
                                    <DropdownToggle tag="button" className="btn btn-warning">
                                      Warning <i className="mdi mdi-chevron-down"></i>
                                    </DropdownToggle>
                                    <DropdownMenu className="dropdownmenu-warning">
                                      <DropdownItem>Action</DropdownItem>
                                      <DropdownItem>Another action</DropdownItem>
                                      <DropdownItem>Something else here</DropdownItem>
                                      <DropdownItem divider />
                                      <DropdownItem>Separated link</DropdownItem>
                                    </DropdownMenu>
                                  </UncontrolledDropdown>
                                </div>
                              </div>
                            </div>
                            <div className="col-lg-4 col-sm-6">
                              <div className="mt-3">
                                <p className="font-size-13 mb-2">Dropdown menu Info link</p>
                                <div className="btn-group">
                                  <UncontrolledDropdown>
                                    <DropdownToggle tag="button" className="btn btn-info">
                                      Info <i className="mdi mdi-chevron-down"></i>
                                    </DropdownToggle>
                                    <DropdownMenu className="dropdownmenu-info">
                                      <DropdownItem>Action</DropdownItem>
                                      <DropdownItem>Another action</DropdownItem>
                                      <DropdownItem>Something else here</DropdownItem>
                                      <DropdownItem divider />
                                      <DropdownItem>Separated link</DropdownItem>
                                    </DropdownMenu>
                                  </UncontrolledDropdown>
                                </div>
                              </div>
                            </div>
                            <div className="col-lg-4 col-sm-6">
                              <div className="mt-3">
                                <p className="font-size-13 mb-2">Dropdown menu Danger link</p>
                                <div className="btn-group">
                                  <UncontrolledDropdown>
                                    <DropdownToggle tag="button" className="btn btn-danger">
                                      Danger <i className="mdi mdi-chevron-down"></i>
                                    </DropdownToggle>
                                    <DropdownMenu className="dropdownmenu-danger">
                                      <DropdownItem>Action</DropdownItem>
                                      <DropdownItem>Another action</DropdownItem>
                                      <DropdownItem>Something else here</DropdownItem>
                                      <DropdownItem divider />
                                      <DropdownItem>Separated link</DropdownItem>
                                    </DropdownMenu>
                                  </UncontrolledDropdown>
                                </div>
                              </div>
                            </div>
                          </Row>

                        </div>
                      </div>
                    </Col>
                  </Row>
                </CardBody>
              </Card>
            </Col>
          </Row>

          <Row>
            <Col xl={6}>
              <Card>
                <CardHeader>
                  <h4 className="card-title">Split Button Dropdowns</h4>
                  <p className="card-title-desc">The best part is you can do this with any button variant, too:</p>
                </CardHeader>
                <CardBody>
                  <div className="d-flex gap-2 flex-wrap">

                    <UncontrolledButtonDropdown className="btn-group">
                      <button type="button" className="btn btn-primary">Primary</button>
                      <DropdownToggle tag="a" className="btn btn-primary dropdown-toggle-split" split>
                        <i className="mdi mdi-chevron-down"></i>
                      </DropdownToggle>
                      <DropdownMenu >
                        <DropdownItem>Action</DropdownItem>
                        <DropdownItem>Another action</DropdownItem>
                        <DropdownItem>Something else here</DropdownItem>
                        <DropdownItem divider />
                        <DropdownItem>Separated link</DropdownItem>
                      </DropdownMenu>
                    </UncontrolledButtonDropdown>

                    <UncontrolledButtonDropdown className="btn-group">
                      <button type="button" className="btn btn-secondary">Secondary</button>
                      <DropdownToggle tag="button" className="btn btn-secondary dropdown-toggle-split" split>
                        <i className="mdi mdi-chevron-down"></i>
                      </DropdownToggle>
                      <DropdownMenu >
                        <DropdownItem>Action</DropdownItem>
                        <DropdownItem>Another action</DropdownItem>
                        <DropdownItem>Something else here</DropdownItem>
                        <DropdownItem divider />
                        <DropdownItem>Separated link</DropdownItem>
                      </DropdownMenu>
                    </UncontrolledButtonDropdown>

                    <UncontrolledButtonDropdown className="btn-group">
                      <button type="button" className="btn btn-success">Success</button>
                      <DropdownToggle tag="button" className="btn btn-success dropdown-toggle-split" split>
                        <i className="mdi mdi-chevron-down"></i>
                      </DropdownToggle>
                      <DropdownMenu >
                        <DropdownItem>Action</DropdownItem>
                        <DropdownItem>Another action</DropdownItem>
                        <DropdownItem>Something else here</DropdownItem>
                        <DropdownItem divider />
                        <DropdownItem>Separated link</DropdownItem>
                      </DropdownMenu>
                    </UncontrolledButtonDropdown>

                    <UncontrolledButtonDropdown className="btn-group">
                      <button type="button" className="btn btn-info">Info</button>
                      <DropdownToggle tag="button" className="btn btn-info dropdown-toggle-split" split>
                        <i className="mdi mdi-chevron-down"></i>
                      </DropdownToggle>
                      <DropdownMenu >
                        <DropdownItem>Action</DropdownItem>
                        <DropdownItem>Another action</DropdownItem>
                        <DropdownItem>Something else here</DropdownItem>
                        <DropdownItem divider />
                        <DropdownItem>Separated link</DropdownItem>
                      </DropdownMenu>
                    </UncontrolledButtonDropdown>

                    <UncontrolledButtonDropdown className="btn-group">
                      <button type="button" className="btn btn-warning">Warning</button>
                      <DropdownToggle tag="button" className="btn btn-warning dropdown-toggle-split" split>
                        <i className="mdi mdi-chevron-down"></i>
                      </DropdownToggle>
                      <DropdownMenu >
                        <DropdownItem>Action</DropdownItem>
                        <DropdownItem>Another action</DropdownItem>
                        <DropdownItem>Something else here</DropdownItem>
                        <DropdownItem divider />
                        <DropdownItem>Separated link</DropdownItem>
                      </DropdownMenu>
                    </UncontrolledButtonDropdown>

                    <UncontrolledButtonDropdown className="btn-group">
                      <button type="button" className="btn btn-danger">Danger</button>
                      <DropdownToggle tag="button" className="btn btn-danger dropdown-toggle-split" split>
                        <i className="mdi mdi-chevron-down"></i>
                      </DropdownToggle>
                      <DropdownMenu >
                        <DropdownItem>Action</DropdownItem>
                        <DropdownItem>Another action</DropdownItem>
                        <DropdownItem>Something else here</DropdownItem>
                        <DropdownItem divider />
                        <DropdownItem>Separated link</DropdownItem>
                      </DropdownMenu>
                    </UncontrolledButtonDropdown>

                  </div>
                </CardBody>
              </Card>
            </Col>

            <Col xl={6}>
              <Card>
                <CardHeader>
                  <h4 className="card-title">Sizing</h4>
                  <p className="card-title-desc">Button dropdowns work with buttons of
                    all sizes, including default and split dropdown buttons.</p>
                </CardHeader>

                <CardBody>
                  <div className="btn-group me-2 mt-2">

                    <UncontrolledDropdown>
                      <DropdownToggle tag="button" className="btn btn-primary btn-lg">
                        Large button <i className="mdi mdi-chevron-down"></i>
                      </DropdownToggle>
                      <DropdownMenu >
                        <DropdownItem>Action</DropdownItem>
                        <DropdownItem>Another action</DropdownItem>
                        <DropdownItem>Something else here</DropdownItem>
                        <DropdownItem divider />
                        <DropdownItem>Separated link</DropdownItem>
                      </DropdownMenu>
                    </UncontrolledDropdown>
                  </div>
                  <div className="btn-group me-2 mt-2">

                    <UncontrolledButtonDropdown className="btn-group">
                      <button type="button" className="btn btn-secondary btn-lg">Large button</button>
                      <DropdownToggle tag="button" className="btn btn-secondary btn-lg  dropdown-toggle-split" split>
                        <i className="mdi mdi-chevron-down"></i>
                      </DropdownToggle>
                      <DropdownMenu >
                        <DropdownItem>Action</DropdownItem>
                        <DropdownItem>Another action</DropdownItem>
                        <DropdownItem>Something else here</DropdownItem>
                        <DropdownItem divider />
                        <DropdownItem>Separated link</DropdownItem>
                      </DropdownMenu>
                    </UncontrolledButtonDropdown>
                  </div>

                  <div className="btn-group me-0 mt-2">

                    <UncontrolledDropdown>
                      <DropdownToggle tag="button" className="btn btn-info btn-sm">
                        Small button <i className="mdi mdi-chevron-down"></i>
                      </DropdownToggle>
                      <DropdownMenu>
                        <DropdownItem>Action</DropdownItem>
                        <DropdownItem>Another action</DropdownItem>
                        <DropdownItem>Something else here</DropdownItem>
                        <DropdownItem divider />
                        <DropdownItem>Separated link</DropdownItem>
                      </DropdownMenu>
                    </UncontrolledDropdown>

                  </div>
                  <div className="btn-group me-1 mt-2">

                    <UncontrolledButtonDropdown className="btn-group btn-sm">
                      <button type="button" className="btn btn-secondary btn-sm">Small button</button>
                      <DropdownToggle tag="button" className="btn btn-secondary btn-sm dropdown-toggle-split" split>
                        <i className="mdi mdi-chevron-down"></i>
                      </DropdownToggle>
                      <DropdownMenu >
                        <DropdownItem>Action</DropdownItem>
                        <DropdownItem>Another action</DropdownItem>
                        <DropdownItem>Something else here</DropdownItem>
                        <DropdownItem divider />
                        <DropdownItem>Separated link</DropdownItem>
                      </DropdownMenu>
                    </UncontrolledButtonDropdown>

                  </div>
                </CardBody>
              </Card>
            </Col>
          </Row>

          <Row>
            <Col xl={6}>
              <Card>
                <CardHeader>
                  <h4 className="card-title">Dark Dropdown</h4>
                  <p className="card-title-desc">Option into darker dropdowns to match a dark navbar or custom style by adding <code>.dropdown-menu-dark</code> onto an existing <code>.dropdown-menu</code>. No changes are required to the dropdown items.</p>
                </CardHeader>
                <CardBody>
                  <UncontrolledDropdown>
                    <DropdownToggle tag="button" className="btn btn-secondary" id="dropdownMenuButton2">
                      Dropdown button <i className="mdi mdi-chevron-down"></i>
                    </DropdownToggle>
                    <DropdownMenu className="dropdown-menu-dark">
                      <DropdownItem>Action</DropdownItem>
                      <DropdownItem>Another action</DropdownItem>
                      <DropdownItem>Something else here</DropdownItem>
                      <DropdownItem divider />
                      <DropdownItem>Separated link</DropdownItem>
                    </DropdownMenu>
                  </UncontrolledDropdown>
                </CardBody>
              </Card>
            </Col>

            <Col xl={6}>
              <Card>
                <CardHeader>
                  <h4 className="card-title">Menu Content</h4>
                  <p className="card-title-desc">Example of dropdown menu Headers, Text, Forms content</p>
                </CardHeader>

                <CardBody>
                  <div className="d-flex flex-wrap gap-2">

                    <div className="btn-group">
                      <UncontrolledDropdown>
                        <DropdownToggle tag="button" className="btn btn-primary">
                          Header <i className="mdi mdi-chevron-down"></i>
                        </DropdownToggle>
                        <DropdownMenu>
                          <div className="dropdown-header noti-title">
                            <h5 className="font-size-13 text-muted text-truncate mn-0">Welcome Jessie!</h5>
                          </div>
                          <DropdownItem>Action</DropdownItem>
                          <DropdownItem>Another action</DropdownItem>
                          <DropdownItem>Something else here</DropdownItem>
                          <DropdownItem divider />
                          <DropdownItem>Separated link</DropdownItem>
                        </DropdownMenu>
                      </UncontrolledDropdown>
                    </div>

                    <div className="btn-group">
                      <UncontrolledDropdown>
                        <DropdownToggle tag="button" className="btn btn-success">
                          Text <i className="mdi mdi-chevron-down"></i>
                        </DropdownToggle>
                        <DropdownMenu className="dropdown-menu-md p-3">
                          <p>
                            Some example text that's free-flowing within the dropdown menu.
                          </p>
                          <p className="mb-0">
                            And this is more example text.
                          </p>
                        </DropdownMenu>
                      </UncontrolledDropdown>
                    </div>


                    <div className="btn-group">

                      <UncontrolledDropdown>
                        <DropdownToggle tag="button" className="btn btn-light">
                          Forms <i className="mdi mdi-chevron-down"></i>
                        </DropdownToggle>
                        <DropdownMenu className="dropdown-menu-md p-4">
                          <form>
                            <div className="mb-2">
                              <label className="form-label" htmlFor="exampleDropdownFormEmail">Email address</label>
                              <input type="email" className="form-control" id="exampleDropdownFormEmail"
                                placeholder="email@example.com" />
                            </div>
                            <div className="mb-2">
                              <label className="form-label" htmlFor="exampleDropdownFormPassword">Password</label>
                              <input type="password" className="form-control" id="exampleDropdownFormPassword" placeholder="Password" />
                            </div>
                            <div className="mb-2">
                              <div className="form-check custom-checkbox">
                                <input type="checkbox" className="form-check-input" id="rememberdropdownCheck" />
                                <label className="form-check-label" htmlFor="rememberdropdownCheck">Remember me</label>
                              </div>
                            </div>
                            <button type="submit" className="btn btn-primary">Sign in</button>
                          </form>
                        </DropdownMenu>
                      </UncontrolledDropdown>
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
                  <h4 className="card-title">Menu Alignment</h4>
                  <p className="card-title-desc">Add <code className="highlighter-rouge">.dropdown-menu-end</code>{" "}
                    to a <code className="highlighter-rouge">.dropdown-menu</code> to right
                    align the dropdown menu.</p>
                </CardHeader>

                <CardBody>
                  <div className="d-flex flex-wrap gap-3">
                    <div className="btn-group">
                      <UncontrolledDropdown direction="right">
                        <DropdownToggle tag="button" className="btn btn-secondary">
                          Right-aligned menu example <i className="mdi mdi-chevron-down"></i>
                        </DropdownToggle>
                        <DropdownMenu className="dropdown-menu-end">
                          <DropdownItem>Action</DropdownItem>
                          <DropdownItem>Another action</DropdownItem>
                          <DropdownItem>Something else here</DropdownItem>
                        </DropdownMenu>
                      </UncontrolledDropdown>
                    </div>

                    <div className="btn-group">
                      <UncontrolledDropdown>
                        <DropdownToggle tag="button" className="btn btn-secondary" data-bs-display="static">
                          Left-aligned but right aligned when large screen <i className="mdi mdi-chevron-down"></i>
                        </DropdownToggle>
                        <DropdownMenu className="dropdown-menu-lg-end">
                          <DropdownItem>Action</DropdownItem>
                          <DropdownItem>Another action</DropdownItem>
                          <DropdownItem>Something else here</DropdownItem>
                        </DropdownMenu>
                      </UncontrolledDropdown>
                    </div>
                    <div className="btn-group">
                      <UncontrolledDropdown>
                        <DropdownToggle tag="button" className="btn btn-secondary" data-bs-display="static">
                          Right-aligned but left aligned when large screen <i className="mdi mdi-chevron-down"></i>
                        </DropdownToggle>
                        <DropdownMenu className="dropdown-menu-end dropdown-menu-lg-start">
                          <DropdownItem>Action</DropdownItem>
                          <DropdownItem>Another action</DropdownItem>
                          <DropdownItem>Something else here</DropdownItem>
                        </DropdownMenu>
                      </UncontrolledDropdown>
                    </div>

                  </div>
                </CardBody>
              </Card>
            </Col>

            <Col xl={6}>
              <Card>
                <CardHeader>
                  <h4 className="card-title">Auto Close Behavior</h4>
                  <p className="card-title-desc">Trigger dropdown menus at the right of the elements by adding <code>.dropstart</code> to the parent element.
                  </p>
                </CardHeader>

                <CardBody>
                  <div className="d-flex gap-2 flex-wrap">
                    <div className="btn-group">

                      <UncontrolledDropdown>
                        <DropdownToggle tag="button" className="btn btn-secondary">
                          Default dropdown <i className="mdi mdi-chevron-down"></i>
                        </DropdownToggle>
                        <DropdownMenu>
                          <DropdownItem>Menu item</DropdownItem>
                          <DropdownItem>Menu item</DropdownItem>
                          <DropdownItem>Menu item</DropdownItem>
                        </DropdownMenu>
                      </UncontrolledDropdown>
                    </div>

                    <div className="btn-group">
                      <UncontrolledDropdown>
                        <DropdownToggle tag="button" className="btn btn-secondary" id="dropdownMenuClickableOutside">
                          Clickable outside <i className="mdi mdi-chevron-down"></i>
                        </DropdownToggle>
                        <DropdownMenu>
                          <DropdownItem>Menu item</DropdownItem>
                          <DropdownItem>Menu item</DropdownItem>
                          <DropdownItem>Menu item</DropdownItem>
                        </DropdownMenu>
                      </UncontrolledDropdown>
                    </div>

                    <div className="btn-group">
                      <UncontrolledDropdown>
                        <DropdownToggle tag="button" className="btn btn-secondary" id="dropdownMenuClickableInside">
                          Clickable inside <i className="mdi mdi-chevron-down"></i>
                        </DropdownToggle>
                        <DropdownMenu>
                          <DropdownItem>Menu item</DropdownItem>
                          <DropdownItem>Menu item</DropdownItem>
                          <DropdownItem>Menu item</DropdownItem>
                        </DropdownMenu>
                      </UncontrolledDropdown>
                    </div>

                    <div className="btn-group">
                      <UncontrolledDropdown>
                        <DropdownToggle tag="button" className="btn btn-secondary" id="dropdownMenuClickable">
                          Manual close <i className="mdi mdi-chevron-down"></i>
                        </DropdownToggle>
                        <DropdownMenu>
                          <DropdownItem>Menu item</DropdownItem>
                          <DropdownItem>Menu item</DropdownItem>
                          <DropdownItem>Menu item</DropdownItem>
                        </DropdownMenu>
                      </UncontrolledDropdown>
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
                  <h4 className="card-title">Dropup Variation</h4>
                  <p className="card-title-desc">Trigger dropdown menus above elements
                    by adding <code className="highlighter-rouge">.dropup</code> to the parent
                    element.</p>
                </CardHeader>

                <CardBody>
                  <div className="d-flex gap-2 flex-wrap">

                    <div className="btn-group dropup">
                      <UncontrolledDropdown direction="up">
                        <DropdownToggle tag="button" className="btn btn-info">
                          Dropup <i className="mdi mdi-chevron-up"></i>
                        </DropdownToggle>
                        <DropdownMenu >
                          <DropdownItem>Action</DropdownItem>
                          <DropdownItem>Another action</DropdownItem>
                          <DropdownItem>Something else here</DropdownItem>
                          <DropdownItem divider />
                          <DropdownItem>Separated link</DropdownItem>
                        </DropdownMenu>
                      </UncontrolledDropdown>
                    </div>

                    <div className="btn-group dropup">
                      <UncontrolledButtonDropdown className="btn-group" direction="up">
                        <button type="button" className="btn btn-info">Split dropup</button>
                        <DropdownToggle tag="button" className="btn btn-info dropdown-toggle-split" split>
                          <i className="mdi mdi-chevron-up"></i>
                        </DropdownToggle>
                        <DropdownMenu >
                          <DropdownItem>Action</DropdownItem>
                          <DropdownItem>Another action</DropdownItem>
                          <DropdownItem>Something else here</DropdownItem>
                          <DropdownItem divider />
                          <DropdownItem>Separated link</DropdownItem>
                        </DropdownMenu>
                      </UncontrolledButtonDropdown>
                    </div>
                  </div>
                </CardBody>
              </Card>
            </Col>

            <Col xl={6}>
              <Card>
                <CardHeader>
                  <h4 className="card-title">Dropleft Variation</h4>
                  <p className="card-title-desc">Trigger dropdown menus at the right of the elements by adding <code>.dropstart</code> to the parent element.
                  </p>
                </CardHeader>

                <CardBody>
                  <div className="d-flex gap-2 flex-wrap">

                    <div className="btn-group dropstart">
                      <UncontrolledDropdown direction="start">
                        <DropdownToggle tag="button" className="btn btn-info waves-light" aria-expanded="false">
                          <i className="mdi mdi-chevron-left"></i> Dropleft
                        </DropdownToggle>
                        <DropdownMenu >
                          <DropdownItem>Action</DropdownItem>
                          <DropdownItem>Another action</DropdownItem>
                          <DropdownItem>Something else here</DropdownItem>
                        </DropdownMenu>
                      </UncontrolledDropdown>
                    </div>

                    <div className="btn-group">
                      <div className="btn-group dropstart">
                        <UncontrolledButtonDropdown className="btn-group" direction="start">
                          <DropdownToggle tag="button" className="btn btn-info dropdown-toggle-split waves-light">
                            <i className="mdi mdi-chevron-left"></i>
                          </DropdownToggle>
                          <button type="button" className="btn btn-info waves-light">Split dropstart</button>
                          <DropdownMenu>
                            <DropdownItem>Action</DropdownItem>
                            <DropdownItem>Another action</DropdownItem>
                            <DropdownItem>Something else here</DropdownItem>
                          </DropdownMenu>
                        </UncontrolledButtonDropdown>
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
                  <h4 className="card-title">Dropright Variation</h4>
                  <p className="card-title-desc">Trigger dropdown menus at the right of the elements by adding <code>.dropend</code> to the parent element.
                  </p>
                </CardHeader>

                <CardBody>
                  <div className="d-flex gap-2 flex-wrap">

                    <div className="btn-group dropend">
                      <UncontrolledDropdown direction="end">
                        <DropdownToggle tag="button" className="btn btn-info waves-light">
                          Dropright <i className="mdi mdi-chevron-right"></i>
                        </DropdownToggle>
                        <DropdownMenu >
                          <DropdownItem>Action</DropdownItem>
                          <DropdownItem>Another action</DropdownItem>
                          <DropdownItem>Something else here</DropdownItem>
                        </DropdownMenu>
                      </UncontrolledDropdown>
                    </div>

                    <div className="btn-group dropend">
                      <UncontrolledButtonDropdown className="btn-group" direction="end">
                        <button type="button" className="btn btn-info waves-light">Split dropend</button>
                        <DropdownToggle tag="button" className="btn btn-info dropdown-toggle-split waves-light" split>
                          <i className="mdi mdi-chevron-right"></i>
                        </DropdownToggle>
                        <DropdownMenu >
                          <DropdownItem>Action</DropdownItem>
                          <DropdownItem>Another action</DropdownItem>
                          <DropdownItem>Something else here</DropdownItem>
                        </DropdownMenu>
                      </UncontrolledButtonDropdown>
                    </div>
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

export default UiDropdowns;