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
  const navigate=useNavigate()
  let localdata=localStorage.getItem("elmatary_admin");
  console.log(localdata)
  let adminData=localdata&& JSON.parse(localdata)
  console.log(adminData)
  if(!localdata){
    console.log('e1');
    navigate('/login',{replace:true})
  }
  useEffect(()=>{
    if(!localdata){
    console.log('e1');
      navigate('/login',{replace:true})
    }
  },[])
  document.title = "Dashboard | Matary - React Admin & Dashboard Template";
  return (
    <React.Fragment>
      <div className="page-content">
        <Container fluid={true}>
          {/* <Breadcrumbs title="Matary" breadcrumbItem="Welcome !" /> */}
          <div
            style={{
              display:'flex',
              flexDirection:'column',
              height:'80vh',
              alignItems:'center',
              justifyContent:'center'
            }}
          >
            <img src={require("../../assets/images/log.png")} alt="" />
            <h5 style={{color:'#ee4168',fontSize:'30px',fontWeight:'600'}}>Welcome To You </h5>
          </div>
        </Container>
      </div>
    </React.Fragment>
  );
};

export default Dashboard;
