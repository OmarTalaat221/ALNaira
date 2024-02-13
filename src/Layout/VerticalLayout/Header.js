import React from 'react';
import { Link } from 'react-router-dom';
import FeatherIcon from 'feather-icons-react';

import LanguageDropdown from '../../components/Common/TopbarDropdown/LanguageDropdown';
import NotificationDropdown from '../../components/Common/TopbarDropdown/VerticalNotificationDropdown';

//redux
import { useDispatch } from "react-redux";
import { changeTheme, changeSidebarType } from '../../store/actions';
import { themeModeTypes, leftSidebarTypes } from '../../constants/layout';

// import Img
import logo from "../../assets/images/logo-sm.svg";
import ProfileMenu from '../../components/Common/TopbarDropdown/ProfileMenu';


const Header = (props) => {

    const dispatch = useDispatch();

    function tToggle() {
        document.body.classList.toggle("sm-body")
        var body = document.body;
        if (window.screen.width <= 998) {
            body.classList.toggle("sidebar-enable");
        } else {
            body.classList.toggle("sidebar-enable");
            body.classList.toggle("vertical-collpsed");
            dispatch(changeSidebarType(leftSidebarTypes.DEFAULT))
        }
    }

    return (
        <React.Fragment>
            <header id="page-topbar" className="isvertical-topbar">
                <div className="navbar-header">
                    <div className="d-flex">
                        <div className="navbar-brand-box">

                            <Link to="/" className="logo logo-dark">
                                <span className="logo-sm">
                                    <img src={logo} alt="" height="22" />
                                </span>
                                <span className="logo-lg">
                                    <img src={logo} alt="" height="22" /> <span className="logo-txt">Matary</span>
                                </span>
                            </Link>

                            <Link to="/" className="logo logo-light">
                                <span className="logo-sm">
                                    <img src={logo} alt="" height="22" />
                                </span>
                                <span className="logo-lg">
                                    <img src={logo} alt="" height="22" /> <span className="logo-txt">Matary</span>
                                </span>
                            </Link>

                        </div>

                        <button type="button" className="btn btn-sm px-3 font-size-16 header-item vertical-menu-btn"
                            onClick={() => {
                                tToggle()
                            }}
                        >
                            <i className="fa fa-fw fa-bars"></i>
                        </button>

                        <form className="app-search d-none d-lg-block">
                            <div className="position-relative">
                                <input type="text" className="form-control" placeholder="Search..." />
                                <span className="bx bx-search"></span>
                            </div>
                        </form>

                    </div>

                    <div className="d-flex">


                

                        <div className="dropdown d-none d-sm-inline-block">

                            <button type="button" className="btn header-item light-dark" id="mode-setting-btn">
                                <FeatherIcon icon="moon" className="icon-sm layout-mode-dark" onClick={() => dispatch(changeTheme(themeModeTypes.DARK))} />
                                <FeatherIcon icon="sun" className="icon-sm layout-mode-light" onClick={() => dispatch(changeTheme(themeModeTypes.LIGHT))} />
                            </button>
                        </div>
                        <ProfileMenu />
                    </div>
                </div>
            </header>
        </React.Fragment>
    )
}

export default Header;




