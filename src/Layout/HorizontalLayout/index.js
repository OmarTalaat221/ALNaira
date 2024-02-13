import React, { useEffect, useState, useCallback } from "react";
import PropTypes from "prop-types";
import withRouter from "../../components/Common/withRouter";

//actions
import {
  changeLayout,
  changeTopbarTheme,
  changeLayoutWidth,
  showRightSidebarAction,
  changeTheme
} from "../../store/actions";

//redux
import { useSelector, useDispatch } from "react-redux";

//components
import Navbar from "./Navbar";
import Footer from "./Footer";
import RightSidebar from "../../components/Common/RightSideBar";

const Layout = (props) => {
  const dispatch = useDispatch();

  const { topbarTheme, layoutWidth, showRightSidebar, themeMode } =
    useSelector((state) => ({
      topbarTheme: state.Layout.topbarTheme,
      layoutWidth: state.Layout.layoutWidth,
      showRightSidebar: state.Layout.showRightSidebar,
      themeMode: state.Layout.themeMode,
    }));


  /*
  document title
  */
  useEffect(() => {
    const title = props.router.location.pathname;
    let currentage = title.charAt(1).toUpperCase() + title.slice(2);

    document.title = currentage + " | Matary - React Admin & Dashboard Template";
  }, [props.router.location.pathname]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);


  //hides right sidebar on body click
  const hideRightbar = useCallback(
    (event) => {
      var rightbar = document.getElementById("right-bar");
      var rightbartoggle = document.getElementById("right-bar-toggle");
      //if clicked in inside right bar, then do nothing
      if ((rightbar && rightbar.contains(event.target)) || rightbartoggle) {
        return
      } else {
        //if clicked in outside of rightbar then fire action for hide rightbar
        dispatch(showRightSidebarAction(false));

      }
    },
    [dispatch]
  );

  useEffect(() => {
    //init body click event fot toggle rightbar
    document.body.addEventListener("click", hideRightbar, true);
  }, [hideRightbar]);

  useEffect(() => {
    if (layoutWidth) {
      dispatch(changeLayoutWidth(layoutWidth));
    }
  }, [dispatch, layoutWidth]);

  useEffect(() => {
    if (themeMode) {
      dispatch(changeTheme(themeMode));
    }
  }, [dispatch, themeMode]);

  /*
  layout settings
  */
  useEffect(() => {
    dispatch(changeLayout("horizontal"));
  }, [dispatch]);

  useEffect(() => {
    if (topbarTheme) {
      dispatch(changeTopbarTheme(topbarTheme));
    }
  }, [dispatch, topbarTheme]);



  const [isMenuOpened, setIsMenuOpened] = useState(false);
  const openMenu = () => {
    setIsMenuOpened(!isMenuOpened);
  };

  return (
    <React.Fragment>

      <div id="layout-wrapper">
        <Navbar
          theme={topbarTheme}
          isMenuOpened={isMenuOpened}
          openLeftMenuCallBack={openMenu}
        />

        <div className="main-content">{props.children}</div>
        <Footer />
      </div>

      {showRightSidebar ? <RightSidebar /> : <RightSidebar />}

    </React.Fragment>
  );
};

Layout.propTypes = {
  changeLayout: PropTypes.func,
  changeLayoutWidth: PropTypes.func,
  changeTopbarTheme: PropTypes.func,
  children: PropTypes.object,
  layoutWidth: PropTypes.any,
  location: PropTypes.object,
  showRightSidebar: PropTypes.any,
  topbarTheme: PropTypes.any,
};

export default withRouter(Layout);
