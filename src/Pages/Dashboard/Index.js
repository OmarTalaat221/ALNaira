import React, { useEffect } from "react";

import { Container, Row, Col } from "reactstrap";

import Breadcrumbs from "../../components/Common/Breadcrumb";

import SalesStatistics from "./salesStatistics";
import SalesByCategory from "./salesByCategory";
import ManageOrder from "./manageOrder";
import TopCountries from "./topCountries";
import TopUser from "./topUsers";
import OrderActivity from "./orderActivity";
import BestProduct from "./bestProduct";
import WelcomeBoard from "./welcomeBoard";
import LineCharts from "./lineCharts";
import EarningByItem from "./earningByItem";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();
  let localdata = localStorage.getItem("elmatary_admin");
  console.log(localdata);
  let adminData = localdata && JSON.parse(localdata);
  console.log(adminData);
  if (!localdata) {
    console.log("e1");
    navigate("/login", { replace: true });
  }
  useEffect(() => {
    if (!localdata) {
      console.log("e1");
      navigate("/login", { replace: true });
    }
  }, []);
  document.title = "Dashboard | ALNaierh  ";
  return (
    <React.Fragment>
      <div className="page-content">
        <Container fluid={true}>
          {/* <Breadcrumbs title="Matary" breadcrumbItem="Welcome !" /> */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              height: "80vh",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <img
              className="w-[500px] h-[500px] "
              src={
                "https://res.cloudinary.com/dkc5klynm/image/upload/v1744534696/logo_alnaireh-01_doesvn.png"
              }
              alt=""
            />
          </div>
        </Container>
      </div>
    </React.Fragment>
  );
};

export default Dashboard;
