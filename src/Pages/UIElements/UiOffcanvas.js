import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Col,
  Row,
  Container,
  Card,
  CardBody,
  Offcanvas,
  OffcanvasHeader,
  OffcanvasBody,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  CardHeader
} from "reactstrap";
//Import Breadcrumb
import Breadcrumbs from "../../components/Common/Breadcrumb";

const UiOffcanvas = () => {
  document.title = "Offcanvas | Matary - React Admin & Dashboard Template";

  const [open, setOpen] = useState(false);
  const [isTop, setIsTop] = useState(false);
  const [isRight, setIsRight] = useState(false);
  const [isBottom, setIsBottom] = useState(false);
  const [isEnableScroll, setIsEnableScroll] = useState(false);
  const [isBackdrop, setIsBackdrop] = useState(false);
  const [isScrollBackDrop, setIsScrollBackDrop] = useState(false);

  const toggleLeftCanvas = () => {
    setOpen(!open);
  };

  const toggleTopCanvas = () => {
    setIsTop(!isTop);
  };
  const toggleRightCanvas = () => {
    setIsRight(!isRight);
  };
  const toggleBottomCanvas = () => {
    setIsBottom(!isBottom);
  };

  const toggleEnableScroll = () => {
    setIsEnableScroll(!isEnableScroll);
  };
  const toggleBackdrop = () => {
    setIsBackdrop(!isBackdrop);
  };
  const toggleScrollBackDrop = () => {
    setIsScrollBackDrop(!isScrollBackDrop);
  };
  return (
    <React.Fragment>
      <div className="page-content">
        <Container fluid={true}>
          <Breadcrumbs title="Ui Elements" breadcrumbItem="Offcanvas" />

          <Row>
            <Col lg={6}>
              <Card>
                <CardHeader>
                  <h5 className="card-title">Demo</h5>
                  <p className="card-title-desc">Use the buttons below to show and hide an offcanvas element via JavaScript that toggles the <code>.show</code> class on an element with the <code>.offcanvas</code> class.</p>
                </CardHeader>

                <CardBody>
                  <div className="d-flex flex-wrap gap-2">
                    <Link className="btn btn-primary" to="#offcanvasExample" role="button"
                      onClick={toggleLeftCanvas}>
                      Link with href
                    </Link>
                    <button className="btn btn-primary" type="button"
                      onClick={toggleLeftCanvas}>
                      Button with data-bs-target
                    </button>
                  </div>
                </CardBody>
              </Card>
            </Col>

            <Col lg={6}>
              <Card>
                <CardHeader>
                  <h5 className="card-title">Placement</h5>
                  <p className="card-title-desc">Offcanvas Diffrent Placement Example: Left, Right & Bottom</p>
                </CardHeader>

                <CardBody>
                  <div className="d-flex flex-wrap gap-2">
                    <button className="btn btn-primary" type="button" onClick={toggleTopCanvas}>Toggle top offcanvas</button>

                    <button className="btn btn-primary" type="button" onClick={toggleRightCanvas}>Toggle right offcanvas</button>

                    <button className="btn btn-primary" type="button" onClick={toggleBottomCanvas}>Toggle bottom offcanvas</button>
                  </div>
                </CardBody>
              </Card>
            </Col>
          </Row>

          <Row>
            <Col lg={12}>
              <Card>
                <CardHeader>
                  <h5 className="card-title">Backdrop</h5>
                  <p className="card-title-desc">Scrolling the <code>&lt;body&gt;</code> element is disabled when an offcanvas and its backdrop are visible. Use the <code>data-bs-scroll</code> attribute to toggle <code>&lt;body&gt;</code> scrolling and <code>data-bs-backdrop</code> to toggle the backdrop.</p>
                </CardHeader>

                <CardBody>
                  <div className="d-flex flex-wrap gap-2">
                    <button className="btn btn-primary" type="button" onClick={toggleEnableScroll}>Enable body scrolling</button>
                    <button className="btn btn-primary" type="button" onClick={toggleBackdrop}>Enable backdrop (default)</button>
                    <button className="btn btn-primary" type="button" onClick={toggleScrollBackDrop}>Enable both scrolling & backdrop</button>
                  </div>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>

      {/* Demo Offcanvas */}
      <Offcanvas isOpen={open} toggle={toggleLeftCanvas} id="offcanvasExample">
        <OffcanvasHeader toggle={toggleLeftCanvas} id="offcanvasExampleLabel">
          Offcanvas
        </OffcanvasHeader>
        <OffcanvasBody>
          <div>
            Some text as placeholder. In real life you can have the elements you have chosen. Like, text, images, lists, etc.
          </div>
          <UncontrolledDropdown className="mt-3" id="dropdownMenuButton">
            <DropdownToggle className="btn btn-primary" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown">
              Dropdown button <i className="mdi mdi-chevron-down"></i>
            </DropdownToggle>
            <DropdownMenu>
              <li><DropdownItem>Action</DropdownItem></li>
              <li><DropdownItem>Another action</DropdownItem></li>
              <li><DropdownItem>Something else here</DropdownItem></li>
            </DropdownMenu>
          </UncontrolledDropdown>
        </OffcanvasBody>
      </Offcanvas>

      {/* Top offcanvas */}
      <Offcanvas
        isOpen={isTop}
        direction="top"
        toggle={toggleTopCanvas}
        id="offcanvasTop"
      >
        <OffcanvasHeader toggle={toggleTopCanvas} id="offcanvasTopLabel">
          Offcanvas Top
        </OffcanvasHeader>
        <OffcanvasBody>
          Some text as placeholder. In real life you can have the elements you have chosen. Like, text, images, lists, etc.
        </OffcanvasBody>
      </Offcanvas>

      {/* Right offcanvas */}
      <Offcanvas
        isOpen={isRight}
        direction="end"
        toggle={toggleRightCanvas}
        id="offcanvasRight"
      >
        <OffcanvasHeader toggle={toggleRightCanvas} id="offcanvasRightLabel">
          Offcanvas Right
        </OffcanvasHeader>
        <OffcanvasBody>
          Some text as placeholder. In real life you can have the elements you have chosen. Like, text, images, lists, etc.
        </OffcanvasBody>
      </Offcanvas>

      {/* Bottom offcanvas */}
      <Offcanvas
        isOpen={isBottom}
        direction="bottom"
        toggle={toggleBottomCanvas}
        id="offcanvasBottom"
      >
        <OffcanvasHeader toggle={toggleBottomCanvas} id="offcanvasBottomLabel">
          Offcanvas Bottom
        </OffcanvasHeader>
        <OffcanvasBody>
          Some text as placeholder. In real life you can have the elements you have chosen. Like, text, images, lists, etc.
        </OffcanvasBody>
      </Offcanvas>

      {/* Enable body scrolling */}
      <Offcanvas
        isOpen={isEnableScroll}
        scrollable
        backdrop={false}
        toggle={toggleEnableScroll}
        id="offcanvasScrolling"
      >
        <OffcanvasHeader toggle={toggleEnableScroll}
          id="offcanvasScrollingLabel"
        >
          Colored with scrolling
        </OffcanvasHeader>
        <OffcanvasBody>
          <div>
            Try scrolling the rest of the page to see this option in action.
          </div>
        </OffcanvasBody>
      </Offcanvas>

      {/* Enable backdrop (default) */}
      <Offcanvas
        isOpen={isBackdrop}
        toggle={toggleBackdrop}
        id="offcanvasWithBackdrop"
      >
        <OffcanvasHeader toggle={toggleBackdrop} id="offcanvasWithBackdropLabel">
          Offcanvas with backdrop
        </OffcanvasHeader>
        <OffcanvasBody>
          <div>
            Some text as placeholder. In real life you can have the elements you have chosen. Like, text, images, lists, etc.
          </div>
        </OffcanvasBody>
      </Offcanvas>

      {/* Enable both scrolling & backdrop */}
      <Offcanvas
        isOpen={isScrollBackDrop}
        scrollable
        toggle={toggleScrollBackDrop}
        id="offcanvasWithBothOptions"
      >
        <OffcanvasHeader toggle={toggleScrollBackDrop} id="offcanvasWithBothOptionsLabel">
          Backdroped with scrolling
        </OffcanvasHeader>
        <OffcanvasBody>
          <div>
            Try scrolling the rest of the page to see this option in action.
          </div>
        </OffcanvasBody>
      </Offcanvas>

    </React.Fragment>
  );
};

export default UiOffcanvas;