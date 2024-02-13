import React, { useState } from "react";
import { Card, CardBody, CardHeader, Col, Container, Modal, Row } from "reactstrap";

//Import Breadcrumb
import Breadcrumbs from "../../components/Common/Breadcrumb";


const UiModals = () => {
  document.title = "Modals | Matary - React Admin & Dashboard Template";


  const [modal_standard, setmodal_standard] = useState(false);
  const [modal_fullscreen, setmodal_fullscreen] = useState(false);
  const [modal_xlarge, setmodal_xlarge] = useState(false);
  const [modal_large, setmodal_large] = useState(false);
  const [modal_small, setmodal_small] = useState(false);
  const [modal_center, setmodal_center] = useState(false);
  const [modal_lgscroll, setmodal_lgscroll] = useState(false);
  const [modal_scroll, setmodal_scroll] = useState(false);
  const [modal_backdrop, setmodal_backdrop] = useState(false);
  const [modal_mdo, setmodal_mdo] = useState(false);
  const [modal_fat, setmodal_fat] = useState(false);
  const [modal_getbootstrap, setmodal_getbootstrap] = useState(false);
  const [modal_togSecond, setmodal_togSecond] = useState(false);
  const [modal_togFirst, setmodal_togFirst] = useState(false);


  function tog_standard() {
    setmodal_standard(!modal_standard);
  }

  function tog_fullscreen() {
    setmodal_fullscreen(!modal_fullscreen);
  }

  function tog_xlarge() {
    setmodal_xlarge(!modal_xlarge);
  }

  function tog_large() {
    setmodal_large(!modal_large);
  }

  function tog_small() {
    setmodal_small(!modal_small);
  }

  function tog_center() {
    setmodal_center(!modal_center);
  }

  function tog_lgscroll() {
    setmodal_lgscroll(!modal_lgscroll);
  }

  function tog_scroll() {
    setmodal_scroll(!modal_scroll);
  }

  function tog_backdrop() {
    setmodal_backdrop(!modal_backdrop);
  }

  function tog_mdo() {
    setmodal_mdo(!modal_mdo);
  }

  function tog_fat() {
    setmodal_fat(!modal_fat);
  }

  function tog_getbootstrap() {
    setmodal_getbootstrap(!modal_getbootstrap);
  }

  function tog_togSecond() {
    setmodal_togSecond(!modal_togSecond);
  }

  function tog_togFirst() {
    setmodal_togFirst(!modal_togFirst);
  }

  return (
    <React.Fragment>

      <div className="page-content">
        <Container fluid={true}>

          <Breadcrumbs title="UI Elements" breadcrumbItem="Modals" />
          <Row>
            <Col className="col-12">
              <Card>
                <CardHeader>
                  <h4 className="card-title">Modals Examples</h4>
                  <p className="card-title-desc">Modals are streamlined, but flexible
                    dialog prompts powered by JavaScript. They support a number of use cases
                    from user notification to completely custom content and feature a
                    handful of helpful subcomponents, sizes, and more.</p>
                </CardHeader>

                <CardBody>
                  <div tabIndex="-1" role="dialog">
                    <div className="modal-dialog" role="document">
                      <div className="modal-content">
                        <div className="modal-header">
                          <h5 className="modal-title">Modal title</h5>
                          <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                          <p>One fine body&hellip;</p>
                        </div>
                        <div className="modal-footer">
                          <button type="button" className="btn btn-primary">Save changes</button>
                          <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardBody>
              </Card>
            </Col>
          </Row>

          <Row>
            <Col lg={6}>
              <Card>
                <CardHeader>
                  <h4 className="card-title">Default Modal</h4>
                  <p className="card-title-desc">Toggle a working modal demo by clicking the button below. It will slide down and fade in from the top of the page.</p>
                </CardHeader>

                <CardBody>
                  <div>
                    <button type="button" onClick={() => { tog_standard() }} className="btn btn-primary waves-effect waves-light">Standard modal</button>
                  </div>
                </CardBody>
              </Card>
            </Col>

            <Col lg={6}>
              <Card>
                <CardHeader>
                  <h4 className="card-title">Fullscreen Modal</h4>
                  <p className="card-title-desc">Another override is the option to pop up a modal that covers the user viewport, available via modifier classes that are placed a <code>.modal-fullscreen</code>.</p>
                </CardHeader>

                <CardBody>
                  <div>
                    <button type="button" className="btn btn-primary waves-light" onClick={() => { tog_fullscreen() }} >Fullscreen modal</button>
                  </div>
                </CardBody>
              </Card>
            </Col>
          </Row>

          <Row>
            <Col lg={6}>
              <Card>
                <CardHeader>
                  <h4 className="card-title">Optional Sizes</h4>
                  <p className="card-title-desc">Modals have three optional sizes, available via modifier classes to be placed on a <code>.modal-dialog</code>.</p>
                </CardHeader>

                <CardBody>
                  <div className="d-flex flex-wrap gap-3">
                    <div>
                      <button type="button" className="btn btn-primary waves-light" onClick={() => { tog_xlarge() }}>Extra large modal</button>
                    </div>

                    <div>
                      <button type="button" className="btn btn-light" onClick={() => { tog_large() }}>Large modal</button>
                    </div>

                    <div>
                      <button type="button" className="btn btn-success waves-light" onClick={() => { tog_small() }}>Small modal</button>
                    </div>
                  </div>
                </CardBody>
              </Card>
            </Col>

            <Col lg={6}>
              <Card>
                <CardHeader>
                  <h5 className="card-title">Vertically Centered</h5>
                  <p className="card-title-desc">Add <code>.modal-dialog-centered</code> to <code>.modal-dialog</code> to vertically center the modal.</p>
                </CardHeader>

                <CardBody>
                  <div>
                    <button type="button" className="btn btn-primary waves-light" onClick={() => { tog_center() }}>Center modal</button>
                  </div>
                </CardBody>
              </Card>
            </Col>
          </Row>

          <Row>
            <Col lg={6}>
              <Card>
                <CardHeader>
                  <h5 className="card-title">Scrollable Modal</h5>
                  <p className="card-title-desc">Scrolling long content modal and You can also create a scrollable modal that allows scroll the modal body by adding <code>.modal-dialog-scrollable</code> to <code>.modal-dialog</code>.</p>
                </CardHeader>

                <CardBody>
                  <div className="d-flex flex-wrap gap-3">

                    <div>
                      <button type="button" className="btn btn-primary waves-light" onClick={() => { tog_lgscroll() }}>Long Scrollable Modal</button>
                    </div>

                    <div>
                      <button type="button" className="btn btn-primary waves-light" onClick={() => { tog_scroll() }}>Scrollable Modal</button>
                    </div>
                  </div>
                </CardBody>
              </Card>
            </Col>

            <Col lg={6}>
              <Card>
                <CardHeader>
                  <h5 className="card-title">Static Backdrop</h5>
                  <p className="card-title-desc">When backdrop is set to static, the modal will not close when clicking outside it. Click the button below to try it.</p>
                </CardHeader>

                <CardBody>
                  <div>
                    <button type="button" className="btn btn-primary waves-light" onClick={() => { tog_backdrop() }}>
                      Static backdrop modal
                    </button>
                  </div>
                </CardBody>
              </Card>
            </Col>
          </Row>

          <Row>
            <Col lg={6}>
              <Card>
                <CardHeader>
                  <h4 className="card-title">Varying Modal Content</h4>
                  <p className="card-title-desc">Use <code>event.relatedTarget</code> and HTML <code>data-bs-*</code> attributes to vary the contents of the modal depending on which button was clicked.</p>
                </CardHeader>

                <CardBody>
                  <div className="d-flex flex-wrap gap-3">
                    <button type="button" className="btn btn-primary" onClick={() => { tog_mdo() }}>Open modal for @mdo</button>
                    <button type="button" className="btn btn-primary" onClick={() => { tog_fat() }}>Open modal for @fat</button>
                    <button type="button" className="btn btn-primary" onClick={() => { tog_getbootstrap() }}>Open modal for @getbootstrap</button>
                  </div>
                </CardBody>
              </Card>
            </Col>

            <Col lg={6}>
              <Card>
                <CardHeader>
                  <h4 className="card-title">Toggle between modals</h4>
                  <p className="card-title-desc">Toggle between multiple modals with some clever placement of the <code>data-bs-target</code> and <code>data-bs-toggle</code> attributes.</p>
                </CardHeader>

                <CardBody>
                  <div>
                    <button type="button" className="btn btn-primary waves-light" onClick={() => { tog_togFirst() }}>Open First Modal</button>
                  </div>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>

      {/* Standard Modal */}

      <Modal id="myModal"
        isOpen={modal_standard}
        toggle={() => {
          tog_standard();
        }}
      >
        <div className="modal-header">
          <h5
            className="modal-title"
            id="myModalLabel"
          >
            Default Modal Heading
          </h5>
          <button
            type="button"
            className="btn-close"
            onClick={() => {
              setmodal_standard(false);
            }}
            aria-label="Close"

          >

          </button>
        </div>
        <div className="modal-body">
          <h5>Overflowing text to show scroll behavior</h5>
          <p>Cras mattis consectetur purus sit amet fermentum.
            Cras justo odio, dapibus ac facilisis in,
            egestas eget quam. Morbi leo risus, porta ac
            consectetur ac, vestibulum at eros.</p>
          <p>Praesent commodo cursus magna, vel scelerisque
            nisl consectetur et. Vivamus sagittis lacus vel
            augue laoreet rutrum faucibus dolor auctor.</p>
          <p>Aenean lacinia bibendum nulla sed consectetur.
            Praesent commodo cursus magna, vel scelerisque
            nisl consectetur et. Donec sed odio dui. Donec
            ullamcorper nulla non metus auctor
            fringilla.</p>
          <p>Cras mattis consectetur purus sit amet fermentum.
            Cras justo odio, dapibus ac facilisis in,
            egestas eget quam. Morbi leo risus, porta ac
            consectetur ac, vestibulum at eros.</p>
          <p>Praesent commodo cursus magna, vel scelerisque
            nisl consectetur et. Vivamus sagittis lacus vel
            augue laoreet rutrum faucibus dolor auctor.</p>
          <p>Aenean lacinia bibendum nulla sed consectetur.
            Praesent commodo cursus magna, vel scelerisque
            nisl consectetur et. Donec sed odio dui. Donec
            ullamcorper nulla non metus auctor
            fringilla.</p>
          <p>Cras mattis consectetur purus sit amet fermentum.
            Cras justo odio, dapibus ac facilisis in,
            egestas eget quam. Morbi leo risus, porta ac
            consectetur ac, vestibulum at eros.</p>
        </div>
        <div className="modal-footer">
          <button
            type="button"
            onClick={() => {
              tog_standard();
            }}
            className="btn btn-secondary "
          >
            Close
          </button>
          <button
            type="button"
            className="btn btn-primary "
          >
            Save changes
          </button>
        </div>
      </Modal>


      {/* Full Screen Modal */}

      <Modal
        size="xl"
        isOpen={modal_fullscreen}
        toggle={() => {
          tog_fullscreen();
        }}
        className="modal-fullscreen"
        id="exampleModalFullscreen"
      >
        <div className="modal-header">
          <h5
            className="modal-title"
            id="exampleModalFullscreenLabel"
          >
            Fullscreen Modal
          </h5>
          <button
            onClick={() => {
              setmodal_fullscreen(false);
            }}
            type="button"
            className="btn-close"
            aria-label="Close"
          >

          </button>
        </div>
        <div className="modal-body">
          <h5>Overflowing text to show scroll behavior</h5>
          <p>Cras mattis consectetur purus sit amet fermentum.
            Cras justo odio, dapibus ac facilisis in,
            egestas eget quam. Morbi leo risus, porta ac
            consectetur ac, vestibulum at eros.</p>
          <p>Praesent commodo cursus magna, vel scelerisque
            nisl consectetur et. Vivamus sagittis lacus vel
            augue laoreet rutrum faucibus dolor auctor.</p>
          <p>Aenean lacinia bibendum nulla sed consectetur.
            Praesent commodo cursus magna, vel scelerisque
            nisl consectetur et. Donec sed odio dui. Donec
            ullamcorper nulla non metus auctor
            fringilla.</p>
          <p>Cras mattis consectetur purus sit amet fermentum.
            Cras justo odio, dapibus ac facilisis in,
            egestas eget quam. Morbi leo risus, porta ac
            consectetur ac, vestibulum at eros.</p>
          <p>Praesent commodo cursus magna, vel scelerisque
            nisl consectetur et. Vivamus sagittis lacus vel
            augue laoreet rutrum faucibus dolor auctor.</p>
          <p>Aenean lacinia bibendum nulla sed consectetur.
            Praesent commodo cursus magna, vel scelerisque
            nisl consectetur et. Donec sed odio dui. Donec
            ullamcorper nulla non metus auctor
            fringilla.</p>
          <p>Cras mattis consectetur purus sit amet fermentum.
            Cras justo odio, dapibus ac facilisis in,
            egestas eget quam. Morbi leo risus, porta ac
            consectetur ac, vestibulum at eros.</p>
        </div>
        <div className="modal-footer">
          <button
            type="button"
            onClick={() => {
              tog_fullscreen();
            }}
            className="btn btn-secondary"
            data-dismiss="modal"
          >
            Close
          </button>
          <button
            type="button"
            className="btn btn-primary "
          >
            Save changes
          </button>
        </div>
      </Modal>

      {/* Extra Large Modal */}

      <Modal
        size="xl"
        isOpen={modal_xlarge}
        toggle={() => {
          tog_xlarge();
        }}
      >
        <div className="modal-header">
          <h5
            className="modal-title"
            id="myExtraLargeModalLabel"
          >
            Extra large modal
          </h5>
          <button
            onClick={() => {
              setmodal_xlarge(false);
            }}
            type="button"
            className="btn-close"
            aria-label="Close"
          >

          </button>
        </div>
        <div className="modal-body">
          <p>Cras mattis consectetur purus sit amet fermentum.
            Cras justo odio, dapibus ac facilisis in,
            egestas eget quam. Morbi leo risus, porta ac
            consectetur ac, vestibulum at eros.</p>
          <p>Praesent commodo cursus magna, vel scelerisque
            nisl consectetur et. Vivamus sagittis lacus vel
            augue laoreet rutrum faucibus dolor auctor.</p>
          <p className="mb-0">Aenean lacinia bibendum nulla sed consectetur.
            Praesent commodo cursus magna, vel scelerisque
            nisl consectetur et. Donec sed odio dui. Donec
            ullamcorper nulla non metus auctor
            fringilla.</p>
        </div>
      </Modal>


      {/* Large Modal */}

      <Modal
        size="lg"
        isOpen={modal_large}
        toggle={() => {
          tog_large();
        }}
      >
        <div className="modal-header">
          <h5
            className="modal-title"
            id="myLargeModalLabel"
          >
            Large Modal
          </h5>
          <button
            onClick={() => {
              setmodal_large(false);
            }}
            type="button"
            className="btn-close"
            data-dismiss="modal"
            aria-label="Close"
          >

          </button>
        </div>
        <div className="modal-body">
          <p>Cras mattis consectetur purus sit amet fermentum.
            Cras justo odio, dapibus ac facilisis in,
            egestas eget quam. Morbi leo risus, porta ac
            consectetur ac, vestibulum at eros.</p>
          <p>Praesent commodo cursus magna, vel scelerisque
            nisl consectetur et. Vivamus sagittis lacus vel
            augue laoreet rutrum faucibus dolor auctor.</p>
          <p className="mb-0">Aenean lacinia bibendum nulla sed consectetur.
            Praesent commodo cursus magna, vel scelerisque
            nisl consectetur et. Donec sed odio dui. Donec
            ullamcorper nulla non metus auctor
            fringilla.</p>
        </div>
      </Modal>

      {/* Small Modal */}

      <Modal
        size="sm"
        isOpen={modal_small}
        toggle={() => {
          tog_small();
        }}
      >
        <div className="modal-header">
          <h5
            className="modal-title"
            id="mySmallModalLabel"
          >
            Small Modal
          </h5>
          <button
            onClick={() => {
              setmodal_small(false);
            }}
            type="button"
            className="btn-close"
            data-dismiss="modal"
            aria-label="Close"
          >

          </button>
        </div>
        <div className="modal-body">
          <p>Cras mattis consectetur purus sit amet fermentum.
            Cras justo odio, dapibus ac facilisis in,
            egestas eget quam. Morbi leo risus, porta ac
            consectetur ac, vestibulum at eros.</p>
          <p>Praesent commodo cursus magna, vel scelerisque
            nisl consectetur et. Vivamus sagittis lacus vel
            augue laoreet rutrum faucibus dolor auctor.</p>
          <p className="mb-0">Aenean lacinia bibendum nulla sed consectetur.
            Praesent commodo cursus magna, vel scelerisque
            nisl consectetur et. Donec sed odio dui. Donec
            ullamcorper nulla non metus auctor
            fringilla.</p>
        </div>
      </Modal>


      {/* Vertically Centered */}

      <Modal
        isOpen={modal_center}
        toggle={() => {
          tog_center();
        }}
        centered
      >
        <div className="modal-header">
          <h5 className="modal-title">
            Center Modal
          </h5>
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
          <p>Cras mattis consectetur purus sit amet fermentum.
            Cras justo odio, dapibus ac facilisis in,
            egestas eget quam. Morbi leo risus, porta ac
            consectetur ac, vestibulum at eros.</p>
          <p>Praesent commodo cursus magna, vel scelerisque
            nisl consectetur et. Vivamus sagittis lacus vel
            augue laoreet rutrum faucibus dolor auctor.</p>
          <p className="mb-0">Aenean lacinia bibendum nulla sed consectetur.
            Praesent commodo cursus magna, vel scelerisque
            nisl consectetur et. Donec sed odio dui. Donec
            ullamcorper nulla non metus auctor
            fringilla.</p>
        </div>
      </Modal>


      {/* Long Scrollable Modal */}

      <Modal
        isOpen={modal_lgscroll}
        toggle={() => {
          tog_lgscroll();
        }}
        id="exampleModalLongScrollable"
      >
        <div className="modal-header">
          <h5 className="modal-title" id="exampleModalLongScrollableTitle">
            Long Scrollable modal
          </h5>
          <button
            type="button"
            onClick={() => setmodal_lgscroll(false)}
            className="btn-close"
            data-dismiss="modal"
            aria-label="Close"
          >

          </button>
        </div>
        <div className="modal-body">
          <p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis
            in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>
          <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis
            lacus vel augue laoreet rutrum faucibus dolor auctor.</p>
          <p>Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel
            scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus
            auctor fringilla.</p>
          <p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis
            in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>
          <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis
            lacus vel augue laoreet rutrum faucibus dolor auctor.</p>
          <p>Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel
            scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus
            auctor fringilla.</p>
          <p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis
            in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>
          <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis
            lacus vel augue laoreet rutrum faucibus dolor auctor.</p>
          <p>Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel
            scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus
            auctor fringilla.</p>
          <p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis
            in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>
          <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis
            lacus vel augue laoreet rutrum faucibus dolor auctor.</p>
          <p>Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel
            scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus
            auctor fringilla.</p>
          <p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis
            in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>
          <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis
            lacus vel augue laoreet rutrum faucibus dolor auctor.</p>
          <p>Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel
            scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus
            auctor fringilla.</p>
          <p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis
            in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>
          <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis
            lacus vel augue laoreet rutrum faucibus dolor auctor.</p>
          <p>Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel
            scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus
            auctor fringilla.</p>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-light"
              onClick={() => setmodal_lgscroll(false)}
            >
              Close
            </button>
            <button
              type="button"
              className="btn btn-primary"
            >
              Save changes
            </button>
          </div>
        </div>
      </Modal>


      {/* Scrollable Modal  */}

      <Modal
        isOpen={modal_scroll}
        toggle={() => {
          tog_scroll();
        }}
        scrollable={true}
        id="exampleModalScrollable"
      >
        <div className="modal-header">
          <h5 className="modal-title" id="exampleModalScrollableTitle">
            Scrollable modal
          </h5>
          <button
            type="button"
            onClick={() => setmodal_scroll(false)}
            className="btn-close"
            data-dismiss="modal"
            aria-label="Close"
          >

          </button>
        </div>
        <div className="modal-body">
          <p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis
            in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>
          <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis
            lacus vel augue laoreet rutrum faucibus dolor auctor.</p>
          <p>Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel
            scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus
            auctor fringilla.</p>
          <p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis
            in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>
          <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis
            lacus vel augue laoreet rutrum faucibus dolor auctor.</p>
          <p>Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel
            scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus
            auctor fringilla.</p>
          <p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis
            in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>
          <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis
            lacus vel augue laoreet rutrum faucibus dolor auctor.</p>
          <p>Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel
            scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus
            auctor fringilla.</p>
          <p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis
            in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>
          <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis
            lacus vel augue laoreet rutrum faucibus dolor auctor.</p>
          <p>Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel
            scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus
            auctor fringilla.</p>
          <p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis
            in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>
          <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis
            lacus vel augue laoreet rutrum faucibus dolor auctor.</p>
          <p>Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel
            scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus
            auctor fringilla.</p>
          <p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis
            in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>
          <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis
            lacus vel augue laoreet rutrum faucibus dolor auctor.</p>
          <p>Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel
            scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus
            auctor fringilla.</p>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-light"
              onClick={() => setmodal_scroll(false)}
            >
              Close
            </button>
            <button
              type="button"
              className="btn btn-primary"
            >
              Save changes
            </button>
          </div>
        </div>
      </Modal>


      {/* Static Backdrop */}

      <Modal
        isOpen={modal_backdrop}
        toggle={() => {
          tog_backdrop();
        }}
        backdrop={'static'}
        id="staticBackdrop"
        centered
      >
        <div className="modal-header">
          <h5 className="modal-title" id="staticBackdropLabel">Modal title</h5>
          <button type="button" className="btn-close"
            onClick={() => {
              setmodal_backdrop(false);
            }} aria-label="Close"></button>
        </div>
        <div className="modal-body">
          <p>I will not close if you click outside me. Don't even try to press escape key.</p>
        </div>
        <div className="modal-footer">
          <button type="button" className="btn btn-light" onClick={() => {
            setmodal_backdrop(false);
          }}>Close</button>
          <button type="button" className="btn btn-primary">Understood</button>
        </div>
      </Modal>

      {/* modal for @mdo */}

      <Modal
        isOpen={modal_mdo}
        toggle={() => {
          tog_mdo();
        }}
        id="exampleModal"
      >
        <div className="modal-header">
          <h5 className="modal-title" id="exampleModalLabel">New message to @mdo</h5>
          <button
            type="button"
            className="btn-close"
            onClick={() => {
              setmodal_mdo(false);
            }}
            aria-label="Close"
          ></button>
        </div>
        <div className="modal-body">
          <form>
            <div className="mb-3">
              <label
                htmlFor="recipient-name"
                className="col-form-label"
              >
                Recipient:
              </label>
              <input
                type="text"
                className="form-control"
                id="recipient-name"
                defaultValue="@mdo"
              />
            </div>
            <div className="mb-3">
              <label
                htmlFor="message-text"
                className="col-form-label"
              >
                Message:
              </label>
              <textarea
                className="form-control"
                id="message-text"
              ></textarea>
            </div>
          </form>
        </div>
        <div className="modal-footer">
          <button
            type="button"
            className="btn btn-secondary"
            data-bs-dismiss="modal"
            onClick={() => {
              setmodal_mdo(false);
            }}
          >
            Close
          </button>
          <button type="button" className="btn btn-primary">
            Send message
          </button>
        </div>
      </Modal>

      {/* modal for @fat */}

      <Modal
        isOpen={modal_fat}
        toggle={() => {
          tog_fat();
        }}

      >
        <div className="modal-header">
          <h5 className="modal-title">New message to @fat</h5>
          <button
            type="button"
            className="btn-close"
            onClick={() => {
              setmodal_fat(false);
            }}
            aria-label="Close"
          ></button>
        </div>
        <div className="modal-body">
          <form>
            <div className="mb-3">
              <label
                htmlFor="recipient-name"
                className="col-form-label"
              >
                Recipient:
              </label>
              <input
                type="text"
                className="form-control"
                id="recipient-name"
                defaultValue="@fat"
              />
            </div>
            <div className="mb-3">
              <label
                htmlFor="message-text"
                className="col-form-label"
              >
                Message:
              </label>
              <textarea
                className="form-control"
                id="message-text"
              ></textarea>
            </div>
          </form>
        </div>
        <div className="modal-footer">
          <button
            type="button"
            className="btn btn-secondary"
            data-bs-dismiss="modal"
            onClick={() => {
              setmodal_fat(false);
            }}
          >
            Close
          </button>
          <button type="button" className="btn btn-primary">
            Send message
          </button>
        </div>
      </Modal>


      {/* modal for @getbootstrap */}

      <Modal
        isOpen={modal_getbootstrap}
        toggle={() => {
          tog_getbootstrap();
        }}

      >
        <div className="modal-header">
          <h5 className="modal-title">
            New message to @getbootstrap
          </h5>
          <button
            type="button"
            className="btn-close"
            onClick={() => {
              setmodal_getbootstrap(false);
            }}
            aria-label="Close"
          ></button>
        </div>
        <div className="modal-body">
          <form>
            <div className="mb-3">
              <label
                htmlFor="recipient-name"
                className="col-form-label"
              >
                Recipient:
              </label>
              <input
                type="text"
                className="form-control"
                id="recipient-name"
                defaultValue="@getbootstrap"
              />
            </div>
            <div className="mb-3">
              <label
                htmlFor="message-text"
                className="col-form-label"
              >
                Message:
              </label>
              <textarea
                className="form-control"
                id="message-text"
              ></textarea>
            </div>
          </form>
        </div>
        <div className="modal-footer">
          <button
            type="button"
            className="btn btn-secondary"
            data-bs-dismiss="modal"
            onClick={() => {
              setmodal_getbootstrap(false);
            }}
          >
            Close
          </button>
          <button type="button" className="btn btn-primary">
            Send message
          </button>
        </div>
      </Modal>

      {/* Toggle Between Modal */}

      <Modal
        isOpen={modal_togFirst}
        toggle={() => {
          tog_togFirst();
        }}
        id="firstmodal"
        centered
      >
        <div className="modal-header">
          <h5 className="modal-title" id="exampleModalToggleLabel">
            Modal 1
          </h5>
          <button
            type="button"
            className="btn-close"
            onClick={() => {
              setmodal_togFirst(false);
            }}
            aria-label="Close"

          >

          </button>
        </div>
        <div className="modal-body">
          <p>
            Show a second modal and hide this one with
            the button below.
          </p>
        </div>
        <div className="modal-footer">

          <button
            type="button"
            className="btn btn-primary"
            onClick={() => {
              tog_togSecond();
              tog_togFirst(false);
            }}
          >
            Open Second Modal
          </button>
        </div>
      </Modal>

      <Modal
        isOpen={modal_togSecond}
        toggle={() => {
          tog_togSecond();
        }}
        id="secondmodal"
        centered
      >
        <div className="modal-header">
          <h5 className="modal-title" id="exampleModalToggleLabel2">Modal 2</h5>
          <button
            type="button"
            className="btn-close"
            onClick={() => {
              setmodal_togSecond(false);
            }}
            aria-label="Close"
          ></button>
        </div>
        <div className="modal-body">
          <p>
            Hide this modal and show the first with the
            button below.
          </p>
        </div>
        <div className="modal-footer">

          <button
            type="button"
            className="btn btn-primary"
            onClick={() => {
              tog_togFirst();
              tog_togSecond(false);
            }}
          >
            Back to First
          </button>
        </div>
      </Modal>

    </React.Fragment>
  )
}

export default UiModals;