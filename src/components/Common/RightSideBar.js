import React, { useEffect } from 'react';

import FeatherIcon from 'feather-icons-react';

import PropTypes from "prop-types";

import { connect } from "react-redux";
import {
  changeLayout,
  changeLayoutWidth,
  changeSidebarTheme,
  changeSidebarType,
  changeTopbarTheme,
  showRightSidebarAction,
  changeTheme,
  changeLayoutPosition,
} from "../../store/actions";

//SimpleBar
import SimpleBar from "simplebar-react";

import { Link } from "react-router-dom";

//constants
import {
  layoutTypes,
  layoutWidthTypes,
  topBarThemeTypes,
  leftSidebarTypes,
  leftSideBarThemeTypes,
  themeModeTypes,
  layoutPositionTypes,
} from "../../constants/layout";

const RightSidebar = (props) => {
  useEffect(() => {
    //init body click event fot toggle rightbar
    document.body.addEventListener("click", function (e) {
      if (e.target.id !== "right-bar") {
        // console.log("clicked outside rightbar1111");
        // dispatch(showRightSidebarAction(false));
      } else {
        console.log("clicked inside rightbar");
      }
    });
  }, []);

  return (
    <React.Fragment>
      <Link
        to="#"
        className="right-bar-toggle layout-setting-btn"
        id="right-bar-toggle"
        onClick={(e) => {
          props.showRightSidebarAction(true);
        }}
      >
        <FeatherIcon icon="settings" className="icon-sm mb-2" />

        <span className="align-middle"> Settings</span>
      </Link>
      <div className="right-bar" id="right-bar">
        <SimpleBar className="h-100">
          <div className="rightbar-title d-flex align-items-center bg-primary p-3">
            <h5 className="m-0 me-2 text-white">Settings</h5>
            <Link
              to="/"
              onClick={e => {
                e.preventDefault();
                props.showRightSidebarAction(false);
              }}
              className="right-bar-toggle-close ms-auto"
            >
              <i className="mdi mdi-close noti-icon" />
            </Link>
          </div>

          <hr className="m-0" />

          <div className="p-4">
            <h6 className="mb-3">Choose Layout</h6>
            <div className="form-check form-check-inline">
              <input type="radio" name="layout" id="layout-vertical" className="form-check-input"
                value={layoutTypes.VERTICAL}
                checked={props.layoutType === layoutTypes.VERTICAL}
                onChange={e => {
                  if (e.target.checked) { props.changeLayout(e.target.value); }
                }} />

              <label className="form-check-label" htmlFor="layout-vertical">Vertical</label>
            </div>
            <div className="form-check form-check-inline">
              <input className="form-check-input" type="radio" name="layout"
                id="layout-horizontal" value={layoutTypes.HORIZONTAL}
                checked={props.layoutType === layoutTypes.HORIZONTAL}
                onChange={e => { if (e.target.checked) { props.changeLayout(e.target.value); } }} />
              <label className="form-check-label" htmlFor="layout-horizontal">Horizontal</label>
            </div>

            <h6 className="mt-4 mb-3 pt-2">Theme Mode</h6>
            <div className="form-check form-check-inline">
              <input className="form-check-input" type="radio" name="layout-mode"
                id="layout-mode-light" value={themeModeTypes.LIGHT}
                checked={props.themeMode === themeModeTypes.LIGHT}
                onChange={e => { if (e.target.checked) { props.changeTheme(e.target.value); } }}
              />
              <label className="form-check-label" htmlFor="layout-mode-light">Light</label>
            </div>
            <div className="form-check form-check-inline">
              <input className="form-check-input" type="radio" name="layout-mode"
                id="layout-mode-dark" value={themeModeTypes.DARK}
                checked={props.themeMode === themeModeTypes.DARK}
                onChange={e => { if (e.target.checked) { props.changeTheme(e.target.value); } }}
              />
              <label className="form-check-label" htmlFor="layout-mode-dark">Dark</label>
            </div>

            <h6 className="mt-4 mb-3">Layout Width</h6>

            <div className="form-check form-check-inline">
              <input className="form-check-input" type="radio" name="layout-width"
                id="layout-width-fluid" value={layoutWidthTypes.FLUID} checked={props.layoutWidth === layoutWidthTypes.FLUID}
                onChange={e => { if (e.target.checked) { props.changeLayoutWidth(e.target.value); } }}
              />
              <label className="form-check-label" htmlFor="layout-width-fluid">Fluid</label>
            </div>
            <div className="form-check form-check-inline">
              <input className="form-check-input" type="radio" name="layout-width"
                id="layout-width-boxed" value={layoutWidthTypes.BOXED}
                checked={props.layoutWidth === layoutWidthTypes.BOXED}
                onChange={e => {
                  if (e.target.checked) {
                    props.changeLayoutWidth(e.target.value);
                  }
                }}
              />
              <label className="form-check-label" htmlFor="layout-width-boxed">Boxed</label>
            </div>

            <h6 className="mt-4 mb-3">Layout Position</h6>

            <div className="form-check form-check-inline">
              <input className="form-check-input" type="radio" name="layout-position"
                id="layout-position-fixed"
                value={layoutPositionTypes.FIXED}
                checked={props.layoutPosition === layoutPositionTypes.FIXED}
                onChange={e => { if (e.target.checked) { props.changeLayoutPosition(e.target.value); } }}
              />
              <label className="form-check-label" htmlFor="layout-position-fixed">Fixed</label>
            </div>
            <div className="form-check form-check-inline">
              <input className="form-check-input" type="radio" name="layout-position"
                id="layout-position-scrollable"
                value={layoutPositionTypes.SCROLLABLE}
                checked={props.layoutPosition === layoutPositionTypes.SCROLLABLE}
                onChange={e => { if (e.target.checked) { props.changeLayoutPosition(e.target.value); } }}
              />
              <label className="form-check-label" htmlFor="layout-position-scrollable">Scrollable</label>
            </div>

            <h6 className="mt-4 mb-3">Topbar Color</h6>

            <div className="form-check form-check-inline">
              <input className="form-check-input" type="radio" name="topbar-color"
                id="topbar-color-light" value={topBarThemeTypes.LIGHT}
                checked={props.topbarTheme === topBarThemeTypes.LIGHT}
                onChange={e => {
                  if (e.target.checked) {
                    props.changeTopbarTheme(e.target.value);
                  }
                }}
              />
              <label className="form-check-label" htmlFor="topbar-color-light">Light</label>
            </div>
            <div className="form-check form-check-inline">
              <input className="form-check-input" type="radio" name="topbar-color"
                id="topbar-color-dark" value={topBarThemeTypes.DARK}
                checked={props.topbarTheme === topBarThemeTypes.DARK}
                onChange={e => {
                  if (e.target.checked) {
                    props.changeTopbarTheme(e.target.value);
                  }
                }}
              />
              <label className="form-check-label" htmlFor="topbar-color-dark">Dark</label>
            </div>

            {props.layoutType === "vertical" ? (<div id="sidebar-setting">
              <h6 className="mt-4 mb-3 sidebar-setting">Sidebar Size</h6>

              <div className="form-check sidebar-setting form-check-inline">
                <input className="form-check-input" type="radio" name="sidebar-size"
                  id="sidebar-size-default" value={leftSidebarTypes.DEFAULT}
                  checked={props.leftSideBarType === leftSidebarTypes.DEFAULT}
                  onChange={e => {
                    if (e.target.checked) {
                      props.changeSidebarType(e.target.value);
                    }
                  }}
                />
                <label className="form-check-label" htmlFor="sidebar-size-default">Default</label>
              </div>
              <div className="form-check sidebar-setting">
                <input className="form-check-input" type="radio" name="sidebar-size"
                  id="sidebar-size-compact" value={leftSidebarTypes.COMPACT}
                  checked={props.leftSideBarType === leftSidebarTypes.COMPACT}
                  onChange={e => {
                    if (e.target.checked) {
                      props.changeSidebarType(e.target.value);
                    }
                  }}
                />
                <label className="form-check-label" htmlFor="sidebar-size-compact">Compact</label>
              </div>
              <div className="form-check sidebar-setting">
                <input className="form-check-input" type="radio" name="sidebar-size"
                  id="sidebar-size-small" value={leftSidebarTypes.ICON}
                  checked={props.leftSideBarType === leftSidebarTypes.ICON}
                  onChange={e => {
                    if (e.target.checked) {
                      props.changeSidebarType(e.target.value);
                    }
                  }}
                />
                <label className="form-check-label" htmlFor="sidebar-size-small">Small (Icon View)</label>
              </div>

              <h6 className="mt-4 mb-3 sidebar-setting">Sidebar Color</h6>

              <div className="form-check sidebar-setting">
                <input className="form-check-input"
                  type="radio"
                  name="sidebar-color"
                  id="sidebar-color-light"
                  value={leftSideBarThemeTypes.LIGHT}
                  checked={props.leftSideBarTheme === leftSideBarThemeTypes.LIGHT}
                  onChange={e => {
                    if (e.target.checked) {
                      props.changeSidebarTheme(e.target.value);
                    }
                  }}
                />
                <label className="form-check-label" htmlFor="sidebar-color-light">Light</label>
              </div>
              <div className="form-check sidebar-setting">
                <input className="form-check-input" type="radio" name="sidebar-color"
                  id="sidebar-color-dark"
                  value={leftSideBarThemeTypes.DARK}
                  checked={props.leftSideBarTheme === leftSideBarThemeTypes.DARK}
                  onChange={e => {
                    if (e.target.checked) {
                      props.changeSidebarTheme(e.target.value);
                    }
                  }}
                />
                <label className="form-check-label" htmlFor="sidebar-color-dark">Dark</label>
              </div>
              <div className="form-check sidebar-setting">
                <input className="form-check-input" type="radio" name="sidebar-color"
                  id="sidebar-color-brand"
                  value={leftSideBarThemeTypes.BRAND}
                  checked={props.leftSideBarTheme === leftSideBarThemeTypes.BRAND}
                  onChange={e => {
                    if (e.target.checked) {
                      props.changeSidebarTheme(e.target.value);
                    }
                  }}
                />
                <label className="form-check-label" htmlFor="sidebar-color-brand">Brand</label>
              </div>
            </div>) : null}
          </div>

        </SimpleBar>
      </div>
      <div className="rightbar-overlay"></div>
    </React.Fragment>
  );
};

RightSidebar.propTypes = {
  changeLayout: PropTypes.func,
  changeTheme: PropTypes.func,
  changeLayoutPosition: PropTypes.func,
  changeLayoutWidth: PropTypes.func,
  changeSidebarTheme: PropTypes.func,
  changeSidebarType: PropTypes.func,
  changeTopbarTheme: PropTypes.func,
  layoutType: PropTypes.any,
  layoutWidth: PropTypes.any,
  leftSideBarTheme: PropTypes.any,
  leftSideBarType: PropTypes.any,
  showRightSidebarAction: PropTypes.func,
  topbarTheme: PropTypes.any,
  onClose: PropTypes.func,
};

const mapStateToProps = state => {
  return { ...state.Layout };
};

export default connect(mapStateToProps, {
  changeLayout,
  changeTheme,
  changeLayoutPosition,
  changeSidebarTheme,
  changeSidebarType,
  changeLayoutWidth,
  changeTopbarTheme,
  showRightSidebarAction,
})(RightSidebar);

