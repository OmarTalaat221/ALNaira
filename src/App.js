import React, { useEffect } from 'react';
import Routes from "./Routes";
import 'react-toastify/dist/ReactToastify.css';
import 'rsuite/dist/rsuite.min.css';

// Import Scss
import './assets/scss/theme.scss';

// Fake Backend
import fakeBackend from "./helpers/AuthType/fakeBackend";
import { ToastContainer } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
fakeBackend();



function App() {
  const navigate=useNavigate()
  let localdata=localStorage.getItem("elmatary_admin");
  // let adminData=
  useEffect(()=>{
    if(!localdata){
      console.log('empty')
      navigate('/login')
    }
  },[])
  return (
    <React.Fragment>
      <Routes />
      <ToastContainer/>
    </React.Fragment>
  );
}

export default App;
