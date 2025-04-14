import React, { useEffect } from "react";
import Routes from "./Routes";
import "react-toastify/dist/ReactToastify.css";
import "rsuite/dist/rsuite.min.css";

// Import Scss
import "./assets/scss/theme.scss";

// Fake Backend
import fakeBackend from "./helpers/AuthType/fakeBackend";
import { ToastContainer } from "react-toastify";
import { useLocation, useNavigate } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
fakeBackend();

function App() {
  const navigate = useNavigate();
  const location = useLocation();
  let localdata = localStorage.getItem("elmatary_admin");

  useEffect(() => {
    let adminData = localdata && JSON.parse(localdata);
    axios
      .post(
        "https://camp-coding.online/Teacher_App_2025/elnaira_jor/admin/auth/get_my_token.php",
        {
          admin_id: adminData?.admin_id,
        }
      )
      .then((res) => {
        console.log(res, adminData);
        if (res?.status == "success") {
          localStorage.setItem(
            "elmatary_admin",
            JSON.stringify({
              admin_id: adminData?.admin_id,
              access_token: res?.message?.token_value,
              email: adminData?.email,
            })
          );
        }
      });
  }, [location?.pathname]);
  useEffect(() => {
    if (!localdata) {
      navigate("/login");
    }
  }, []);
  return (
    <React.Fragment>
      <Routes />
      <ToastContainer />
    </React.Fragment>
  );
}

export default App;
