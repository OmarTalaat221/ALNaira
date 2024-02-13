import React, { useState, useEffect } from "react";

import FeatherIcon from "feather-icons-react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import withRouter from "../../components/Common/withRouter";

//i18n
import { withTranslation } from "react-i18next";

// Redux Store
import {
  toggleLeftmenu,
} from "../../store/actions";

// Import Img
import logo from "../../assets/images/logo-sm.svg";

// Import Dropdown
import ProfileMenu from "../../components/Common/TopbarDropdown/ProfileMenu";
import NotificationDropdown from "../../components/Common/TopbarDropdown/HorizontalNotiDropdown";
import LanguageDropdown from "../../components/Common/TopbarDropdown/LanguageDropdown";
import SearchDropdown from "./SearchDropdown";

import { Collapse, Row, Col } from "reactstrap";

//redux
import { useDispatch } from "react-redux";
import { changeTheme } from '../../store/actions';
import { themeModeTypes } from '../../constants/layout';
import classname from "classnames";


const Navbar = (props) => {

  const dispatch = useDispatch();

  const [bootstrap, setbootstrap] = useState(false);
  const [app, setapp] = useState(false);
  const [email, setemail] = useState(false);
  const [ecommerce, setecommerce] = useState(false);
  const [invoices, setinvoices] = useState(false);
  const [contact, setcontact] = useState(false);
  const [extended, setextended] = useState(false);
  const [component, setcomponent] = useState(false);
  const [form, setform] = useState(false);
  const [table, settable] = useState(false);
  const [chart, setchart] = useState(false);
  const [icon, seticon] = useState(false);
  const [map, setmap] = useState(false);
  const [page, setpage] = useState(false);
  const [auth, setauth] = useState(false);
  const [utility, setutility] = useState(false);

  useEffect(() => {
    var matchingMenuItem = null;
    var ul = document.getElementById("navigation");
    var items = ul.getElementsByTagName("a");
    removeActivation(items);
    for (var i = 0; i < items.length; ++i) {
      if (props.router.location.pathname === items[i].pathname) {
        matchingMenuItem = items[i];
        break;
      }
    }
    if (matchingMenuItem) {
      activateParentDropdown(matchingMenuItem);
    }
  });

  const removeActivation = items => {
    for (var i = 0; i < items.length; ++i) {
      var item = items[i];
      const parent = items[i].parentElement;
      if (item && item.classList.contains("active")) {
        item.classList.remove("active");
      }
      if (parent) {
        if (parent.classList.contains("active")) {
          parent.classList.remove("active");
        }
      }
    }
  };

  function activateParentDropdown(item) {
    item.classList.add("active");
    const parent = item.parentElement;
    if (parent) {
      parent.classList.add("active"); // li
      const parent2 = parent.parentElement;
      parent2.classList.add("active"); // li
      const parent3 = parent2.parentElement;
      if (parent3) {
        parent3.classList.add("active"); // li
        const parent4 = parent3.parentElement;
        if (parent4) {
          parent4.classList.add("active"); // li
          const parent5 = parent4.parentElement;
          if (parent5) {
            parent5.classList.add("active"); // li
            const parent6 = parent5.parentElement;
            if (parent6) {
              parent6.classList.add("active"); // li
            }
          }
        }
      }
    }
    return false;
  }

  return (
    <React.Fragment>
      <header id="page-topbar" className="ishorizontal-topbar">
        <div className="navbar-header">
          <div className="d-flex">
            <div className="navbar-brand-box">
              <Link to="/" className="logo logo-dark">
                <span className="logo-sm">
                  <img src={logo} alt="" height="22" />
                </span>
                <span className="logo-lg">
                  <img src={logo} alt="" height="22" />{" "}
                  <span className="logo-txt">Matary</span>
                </span>
              </Link>

              <Link to="/" className="logo logo-light">
                <span className="logo-sm">
                  <img src={logo} alt="" height="22" />
                </span>
                <span className="logo-lg">
                  <img src={logo} alt="" height="22" />{" "}
                  <span className="logo-txt">Matary</span>
                </span>
              </Link>
            </div>

            <button
              type="button"
              className="btn btn-sm px-3 font-size-16 d-lg-none header-item"
              data-bs-toggle="collapse"
              data-bs-target="#topnav-menu-content"
              onClick={() => {
                props.toggleLeftmenu(!props.leftMenu);
              }}
            >
              <i className="fa fa-fw fa-bars"></i>
            </button>
            <div className="topnav">
              <nav
                className="navbar navbar-light navbar-expand-lg topnav-menu"
                id="navigation"
              >
                <Collapse
                  isOpen={props.leftMenu}
                  className="navbar-collapse"
                  id="topnav-menu-content"
                >
                  <ul className="navbar-nav">
                    <li className="nav-item">
                      <Link
                        className="nav-link dropdown-toggle arrow-none"
                        role="button"
                        id="topnav-dashboard"

                        to="/dashboard"
                      >
                        <i className="bx bx-tachometer me-2"></i>
                        {props.t("Dashboard")}
                      </Link>
                    </li>

                    <li className="nav-item dropdown">
                      <Link
                        to="/#"
                        onClick={(e) => {
                          e.preventDefault();
                          setapp(!app);
                        }}
                        className="nav-link dropdown-toggle arrow-none"
                        id="topnav-pages"
                        role="button"
                      >
                        <i className="bx bx-grid-alt"></i>
                        {props.t("Apps")} <div className="arrow-down"></div>
                      </Link>
                      <div
                        className={classname("dropdown-menu", { show: app })}
                      >
                        <Link to="/apps-calendar" className="dropdown-item">
                          {props.t("Calendar")}
                        </Link>
                        <Link to="/apps-chat" className="dropdown-item">
                          {props.t("Chat")}
                        </Link>

                        <div className="dropdown">
                          <Link
                            to="/#"
                            className="dropdown-item dropdown-toggle arrow-none"
                            onClick={(e) => {
                              e.preventDefault();
                              setemail(!email);
                            }}
                          >
                            {props.t("Email")}{" "}
                            <div className="arrow-down"></div>
                          </Link>
                          <div
                            className={classname("dropdown-menu", {
                              show: email,
                            })}
                          >
                            <Link to="/email-inbox" className="dropdown-item">
                              {props.t("Inbox")}
                            </Link>
                            <Link to="/email-read" className="dropdown-item">
                              {props.t("Read Email")}
                            </Link>
                          </div>
                        </div>
                        <div className="dropdown">
                          <Link
                            to="/#"
                            className="dropdown-item dropdown-toggle arrow-none"
                            id="topnav-ecommerce"
                            role="button"
                            onClick={(e) => {
                              e.preventDefault();
                              setecommerce(!ecommerce);
                            }}
                          >
                            {props.t("Ecommerce")}{" "}
                            <div className="arrow-down"></div>
                          </Link>
                          <div
                            className={classname("dropdown-menu", {
                              show: ecommerce,
                            })}
                          >
                            <Link
                              to="/ecommerce-products"
                              className="dropdown-item"
                            >
                              {props.t("Products")}
                            </Link>
                            <Link
                              to="/ecommerce-product-detail/1"
                              className="dropdown-item"
                            >
                              {props.t("Product Detail")}
                            </Link>
                            <Link
                              to="/ecommerce-orders"
                              className="dropdown-item"
                            >
                              {props.t("Orders")}
                            </Link>
                            <Link
                              to="/ecommerce-customers"
                              className="dropdown-item"
                            >
                              {props.t("Customers")}
                            </Link>
                            <Link
                              to="/ecommerce-cart"
                              className="dropdown-item"
                            >
                              {props.t("Cart")}
                            </Link>
                            <Link
                              to="/ecommerce-checkout"
                              className="dropdown-item"
                            >
                              {props.t("Checkout")}
                            </Link>
                            <Link
                              to="/ecommerce-shops"
                              className="dropdown-item"
                            >
                              {props.t("Shops")}
                            </Link>
                            <Link
                              to="/ecommerce-add-product"
                              className="dropdown-item"
                            >
                              {props.t("Add Product")}
                            </Link>
                          </div>
                        </div>

                        <div className="dropdown">
                          <Link
                            to="/#"
                            className="dropdown-item dropdown-toggle arrow-none"
                            id="topnav-invoice"
                            role="button"
                            onClick={(e) => {
                              e.preventDefault();
                              setinvoices(!invoices);
                            }}
                          >
                            {props.t("Invoices")}{" "}
                            <div className="arrow-down"></div>
                          </Link>
                          <div
                            className={classname("dropdown-menu", {
                              show: invoices,
                            })}
                          >
                            <Link to="/invoices-list" className="dropdown-item">
                              {props.t("Invoice List")}
                            </Link>
                            <Link
                              to="/invoices-detail"
                              className="dropdown-item"
                            >
                              {props.t("Invoice Detail")}
                            </Link>
                          </div>
                        </div>

                        <div className="dropdown">
                          <Link
                            to="/#"
                            className="dropdown-item dropdown-toggle arrow-none"
                            id="topnav-contact"
                            role="button"
                            onClick={(e) => {
                              e.preventDefault();
                              setcontact(!contact);
                            }}
                          >
                            {props.t("Contacts")}{" "}
                            <div className="arrow-down"></div>
                          </Link>
                          <div
                            className={classname("dropdown-menu", {
                              show: contact,
                            })}
                          >
                            <Link to="/contacts-grid" className="dropdown-item">
                              {props.t("User Grid")}
                            </Link>
                            <Link to="/contacts-list" className="dropdown-item">
                              {props.t("User List")}
                            </Link>
                            <Link
                              to="/contacts-profile"
                              className="dropdown-item"
                            >
                              {props.t("User Profile")}
                            </Link>
                          </div>
                        </div>
                      </div>
                    </li>

                    <li className="nav-item dropdown">
                      <Link
                        to="/#"
                        onClick={(e) => {
                          e.preventDefault();
                          setbootstrap(!bootstrap);
                        }}
                        className="nav-link dropdown-toggle arrow-none"
                        id="topnav-uielement"
                        role="button"
                      >
                        <i className="bx bxl-bootstrap"></i>
                        {props.t("Bootstrap")}{" "}
                        <div className="arrow-down"></div>
                      </Link>

                      <div
                        className={classname(
                          "dropdown-menu mega-dropdown-menu px-2 dropdown-mega-menu-xl",
                          { show: bootstrap }
                        )}
                      >
                        <div className="ps-2 p-lg-0">
                          <Row>
                            <div className="col-lg-12">
                              <div>
                                <div className="menu-title">Elements</div>
                                <div className="row g-0">
                                  <Col lg={4}>
                                    <div>
                                      <Link
                                        to="/ui-alerts"
                                        className="dropdown-item"
                                      >
                                        {props.t("Alerts")}
                                      </Link>
                                      <Link
                                        to="/ui-buttons"
                                        className="dropdown-item"
                                      >
                                        {props.t("Buttons")}
                                      </Link>
                                      <Link
                                        to="/ui-cards"
                                        className="dropdown-item"
                                      >
                                        {props.t("Cards")}
                                      </Link>
                                      <Link
                                        to="/ui-carousel"
                                        className="dropdown-item"
                                      >
                                        {props.t("Carousel")}
                                      </Link>
                                      <Link
                                        to="/ui-dropdowns"
                                        className="dropdown-item"
                                      >
                                        {props.t("Dropdowns")}
                                      </Link>
                                      <Link
                                        to="/ui-grid"
                                        className="dropdown-item"
                                      >
                                        {props.t("Grid")}
                                      </Link>
                                    </div>
                                  </Col>
                                  <Col lg={4}>
                                    <div>
                                      <Link
                                        to="/ui-images"
                                        className="dropdown-item"
                                      >
                                        {props.t("Images")}
                                      </Link>
                                      <Link
                                        to="/ui-modals"
                                        className="dropdown-item"
                                      >
                                        {props.t("Modals")}
                                      </Link>
                                      <Link
                                        to="/ui-offcanvas"
                                        className="dropdown-item"
                                      >
                                        {props.t("Offcanvas")}
                                      </Link>
                                      <Link
                                        to="/ui-placeholders"
                                        className="dropdown-item"
                                      >
                                        {props.t("Placeholders")}
                                      </Link>
                                      <Link
                                        to="/ui-progressbars"
                                        className="dropdown-item"
                                      >
                                        {props.t("Progress Bars")}
                                      </Link>
                                      <Link
                                        to="/ui-tabs-accordions"
                                        className="dropdown-item"
                                      >
                                        {props.t("Tabs & Accordions")}
                                      </Link>
                                    </div>
                                  </Col>
                                  <Col lg={4}>
                                    <div>
                                      <Link
                                        to="/ui-typography"
                                        className="dropdown-item"
                                      >
                                        {props.t("Typography")}
                                      </Link>

                                      <Link
                                        to="/ui-video"
                                        className="dropdown-item"
                                      >
                                        {props.t("Video")}
                                      </Link>
                                      <Link
                                        to="/ui-general"
                                        className="dropdown-item"
                                      >
                                        {props.t("General")}
                                      </Link>
                                      <Link
                                        to="/ui-colors"
                                        className="dropdown-item"
                                      >
                                        {props.t("Colors")}
                                      </Link>
                                    </div>
                                  </Col>
                                </div>
                              </div>
                            </div>
                          </Row>
                        </div>
                      </div>
                    </li>

                    <li className="nav-item dropdown">
                      <Link
                        to="/#"
                        className="nav-link dropdown-toggle arrow-none"
                        id="topnav-components"
                        role="button"
                        onClick={(e) => {
                          e.preventDefault();
                          setcomponent(!component);
                        }}
                      >
                        <i className="bx bx-layer"></i>
                        {props.t("Components")}{" "}
                        <div className="arrow-down"></div>
                      </Link>
                      <div
                        className={classname("dropdown-menu", {
                          show: component,
                        })}
                      >
                        <div className="dropdown">
                          <Link
                            to="/#"
                            className="dropdown-item dropdown-toggle arrow-none"
                            id="topnav-extended"
                            role="button"
                            onClick={(e) => {
                              e.preventDefault();
                              setextended(!extended);
                            }}
                          >
                            {props.t("Extended")}{" "}
                            <div className="arrow-down"></div>
                          </Link>
                          <div
                            className={classname("dropdown-menu", {
                              show: extended,
                            })}
                          >
                            <Link
                              to="/extended-lightbox"
                              className="dropdown-item"
                            >
                              {props.t("Lightbox")}
                            </Link>
                            <Link
                              to="/extended-rangeslider"
                              className="dropdown-item"
                            >
                              {props.t("Range Slider")}
                            </Link>
                            <Link
                              to="/extended-rating"
                              className="dropdown-item"
                            >
                              {props.t("Rating")}
                            </Link>
                            <Link
                              to="/extended-notifications"
                              className="dropdown-item"
                            >
                              {props.t("Notifications")}
                            </Link>
                          </div>
                        </div>

                        <div className="dropdown">
                          <Link
                            to="/#"
                            className="dropdown-item dropdown-toggle arrow-none"
                            id="topnav-form"
                            role="button"
                            onClick={(e) => {
                              e.preventDefault();
                              setform(!form);
                            }}
                          >
                            {props.t("Forms")}{" "}
                            <div className="arrow-down"></div>
                          </Link>
                          <div
                            className={classname("dropdown-menu", {
                              show: form,
                            })}
                          >
                            <Link to="/form-elements" className="dropdown-item">
                              {props.t("Basic Elements")}
                            </Link>

                            <Link
                              to="/form-validation"
                              className="dropdown-item"
                            >
                              {props.t("Validation")}
                            </Link>
                            <Link to="/form-advanced" className="dropdown-item">
                              {props.t("Advanced Plugins")}
                            </Link>
                            <Link to="/form-uploads" className="dropdown-item">
                              {props.t("File Upload")}{" "}
                            </Link>

                            <Link to="/form-wizard" className="dropdown-item">
                              {props.t("Wizard")}
                            </Link>
                            <Link to="/form-mask" className="dropdown-item">
                              {props.t("Mask")}
                            </Link>
                          </div>
                        </div>
                        <div className="dropdown">
                          <Link
                            to="/#"
                            className="dropdown-item dropdown-toggle arrow-none"
                            onClick={(e) => {
                              e.preventDefault();
                              settable(!table);
                            }}
                          >
                            {props.t("Tables")}{" "}
                            <div className="arrow-down"></div>
                          </Link>
                          <div
                            className={classname("dropdown-menu", {
                              show: table,
                            })}
                          >
                            <Link to="/tables-basic" className="dropdown-item">
                              {props.t("Bootstrap Basic")}
                            </Link>
                          </div>
                        </div>
                        <div className="dropdown">
                          <Link
                            to="/#"
                            className="dropdown-item dropdown-toggle arrow-none"
                            onClick={(e) => {
                              e.preventDefault();
                              setchart(!chart);
                            }}
                          >
                            {props.t("Charts")}{" "}
                            <div className="arrow-down"></div>
                          </Link>
                          <div
                            className={classname("dropdown-menu", {
                              show: chart,
                            })}
                          >
                            <Link to="/charts-apex" className="dropdown-item">
                              {" "}
                              {props.t("Apex Charts")}
                            </Link>
                            <Link
                              to="/charts-chartjs"
                              className="dropdown-item"
                            >
                              {" "}
                              {props.t("Chartjs")}
                            </Link>
                          </div>
                        </div>
                        <div className="dropdown">
                          <Link
                            to="/#"
                            className="dropdown-item dropdown-toggle arrow-none"
                            id="topnav-icons"
                            role="button"
                            onClick={(e) => {
                              e.preventDefault();
                              seticon(!icon);
                            }}
                          >
                            {props.t("Icons")}{" "}
                            <div className="arrow-down"></div>
                          </Link>
                          <div
                            className={classname("dropdown-menu", {
                              show: icon,
                            })}
                          >
                            <Link to="/icons-feather" className="dropdown-item">
                              {props.t("Feather")}
                            </Link>
                            <Link
                              to="/icons-boxicons"
                              className="dropdown-item"
                            >
                              {props.t("Boxicons")}
                            </Link>
                            <Link
                              to="/icons-materialdesign"
                              className="dropdown-item"
                            >
                              {props.t("Material Design")}
                            </Link>
                            <Link
                              to="/icons-dripicons"
                              className="dropdown-item"
                            >
                              {props.t("Dripicons")}
                            </Link>
                            <Link
                              to="/icons-fontawesome"
                              className="dropdown-item"
                            >
                              {props.t("Font awesome")}{" "}
                            </Link>
                          </div>
                        </div>
                        <div className="dropdown">
                          <Link
                            to="/#"
                            className="dropdown-item dropdown-toggle arrow-none"
                            id="topnav-map"
                            role="button"
                            onClick={(e) => {
                              e.preventDefault();
                              setmap(!map);
                            }}
                          >
                            {props.t("Maps")} <div className="arrow-down"></div>
                          </Link>
                          <div
                            className={classname("dropdown-menu", {
                              show: map,
                            })}
                          >
                            <Link to="/maps-google" className="dropdown-item">
                              {props.t("Google")}{" "}
                            </Link>
                            <Link to="/maps-vector" className="dropdown-item">
                              {props.t("Vector")}{" "}
                            </Link>
                            <Link to="/maps-leaflet" className="dropdown-item">
                              {props.t("Leaflet")}{" "}
                            </Link>
                          </div>
                        </div>
                      </div>
                    </li>

                    <li className="nav-item dropdown">
                      <Link
                        className="nav-link dropdown-toggle arrow-none"
                        id="topnav-more"
                        role="button"
                        to="/#"
                        onClick={(e) => {
                          e.preventDefault();
                          setpage(!page);
                        }}
                      >
                        <i className="bx bx-file"></i>
                        {props.t("Pages")} <div className="arrow-down"></div>
                      </Link>
                      <div
                        className={classname("dropdown-menu", { show: page })}
                      >
                        <div className="dropdown">
                          <Link
                            to="/#"
                            className="dropdown-item dropdown-toggle arrow-none"
                            id="topnav-auth"
                            role="button"
                            onClick={(e) => {
                              e.preventDefault();
                              setauth(!auth);
                            }}
                          >
                            {props.t("Authentication")}{" "}
                            <div className="arrow-down"></div>
                          </Link>
                          <div
                            className={classname("dropdown-menu", {
                              show: auth,
                            })}
                          >
                            <Link to="/auth-login" className="dropdown-item">
                              {props.t("Login")}
                            </Link>
                            <Link to="/auth-register" className="dropdown-item">
                              {props.t("Register")}
                            </Link>
                            <Link
                              to="/auth-recoverpw"
                              className="dropdown-item"
                            >
                              {props.t("Recover Password")}
                            </Link>
                            <Link
                              to="/auth-lock-screen"
                              className="dropdown-item"
                            >
                              {props.t("Lock Screen")}
                            </Link>
                            <Link to="/auth-logout" className="dropdown-item">
                              {props.t("Log Out")}
                            </Link>
                            <Link
                              to="/auth-confirm-mail"
                              className="dropdown-item"
                            >
                              {props.t("Confirm Mail")}
                            </Link>
                            <Link
                              to="/auth-email-verification"
                              className="dropdown-item"
                            >
                              {props.t("Email Verification")}
                            </Link>
                            <Link
                              to="/auth-two-step-verification"
                              className="dropdown-item"
                            >
                              {props.t("Two Step Verification")}
                            </Link>
                          </div>
                        </div>

                        <div className="dropdown">
                          <Link
                            className="dropdown-item dropdown-toggle arrow-none"
                            id="topnav-utility"
                            role="button"
                            to="/#"
                            onClick={(e) => {
                              e.preventDefault();
                              setutility(!utility);
                            }}
                          >
                            {props.t("Utility")}{" "}
                            <div className="arrow-down"></div>
                          </Link>
                          <div
                            className={classname("dropdown-menu", {
                              show: utility,
                            })}
                          >
                            <Link to="/pages-starter" className="dropdown-item">
                              {props.t("Starter Page")}
                            </Link>
                            <Link
                              to="/pages-maintenance"
                              className="dropdown-item"
                            >
                              {props.t("Maintenance")}
                            </Link>
                            <Link
                              to="/pages-comingsoon"
                              className="dropdown-item"
                            >
                              {props.t("Coming Soon")}
                            </Link>
                            <Link
                              to="/pages-timeline"
                              className="dropdown-item"
                            >
                              {props.t("Timeline")}
                            </Link>
                            <Link to="/pages-faqs" className="dropdown-item">
                              {props.t("FAQs")}
                            </Link>
                            <Link to="/pages-pricing" className="dropdown-item">
                              {props.t("Pricing")}
                            </Link>
                            <Link to="/pages-404" className="dropdown-item">
                              {props.t("Error 404")}
                            </Link>
                            <Link to="/pages-500" className="dropdown-item">
                              {props.t("Error 500")}
                            </Link>
                          </div>
                        </div>
                      </div>
                    </li>
                  </ul>
                </Collapse>
              </nav>
            </div>
          </div>
          <div className="d-flex">
            <SearchDropdown />

            <LanguageDropdown />

            <NotificationDropdown />

            <div className="dropdown d-none d-sm-inline-block">
              <button
                type="button"
                className="btn header-item light-dark"
                id="mode-setting-btn"
              >
                <FeatherIcon icon="moon" className="icon-sm layout-mode-dark" onClick={() => dispatch(changeTheme(themeModeTypes.DARK))} />
                <FeatherIcon icon="sun" className="icon-sm layout-mode-light" onClick={() => dispatch(changeTheme(themeModeTypes.LIGHT))} />
              </button>
            </div>

            <ProfileMenu />
          </div>
        </div>
      </header>
    </React.Fragment>
  );
};

const mapStatetoProps = (state) => {
  const { leftMenu } = state.Layout;
  return { leftMenu };
};

export default withRouter(
  connect(mapStatetoProps, { toggleLeftmenu })(withTranslation()(Navbar))
);
