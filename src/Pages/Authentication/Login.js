import PropTypes from "prop-types";
import React, { useEffect, useState } from "react";

import { Row, Col, CardBody, Card, Alert, Container, Form, Input, FormFeedback, Label, Spinner } from "reactstrap";
import 'react-toastify/dist/ReactToastify.css';
//redux
import { useSelector, useDispatch } from "react-redux";

import { Link, useNavigate } from "react-router-dom";
import withRouter from "../../components/Common/withRouter";

// Formik validation
import * as Yup from "yup";
import { useFormik } from "formik";

//Social Media Imports
import { GoogleLogin } from "react-google-login";
// import TwitterLogin from "react-twitter-auth"
import FacebookLogin from "react-facebook-login/dist/facebook-login-render-props";

// actions
import { loginUser, socialLogin } from "../../store/actions";

// import images
import logo from "../../assets/images/logo-sm.png";

//Import config
import { facebook, google } from "../../config";
import axios from "axios";
import { base_url } from "../../constants";
import { toast } from "react-toastify";

const Login = props => {
  console.log('yes')
  document.title = "Login | Matary - React Admin & Dashboard Template";
  const navigate=useNavigate()
  const [loginData,setLoadingData]=useState({
    user_email:'',
    password:'',
  })
  const [showErrMsg,setShowErrMsg]=useState(false);
  const [errMsg,setErrMsg]=useState('');
  const [loading,setLoading]=useState(false);
  const dispatch = useDispatch();

  const validation = useFormik({
    // enableReinitialize : use this flag when initial values needs to be changed
    enableReinitialize: true,

    initialValues: {
      email: "admin@Themesdesign.com" || '',
      password: "123456" || '',
    },
    validationSchema: Yup.object({
      email: Yup.string().required("Please Enter Your Email"),
      password: Yup.string().required("Please Enter Your Password"),
    }),
    onSubmit: (values) => {
      dispatch(loginUser(values, props.router.navigate));
    }
  });

  const { error } = useSelector(state => ({
    error: state.login.error,
  }));

  // handleValidSubmit
  // const handleValidSubmit = (event, values) => {
  //   dispatch(loginUser(values, props.history));
  // };

  const signIn = (res, type) => {
    if (type === "google" && res) {
      const postData = {
        name: res.profileObj.name,
        email: res.profileObj.email,
        token: res.tokenObj.access_token,
        idToken: res.tokenId,
      };
      dispatch(socialLogin(postData, props.router.navigate, type));
    } else if (type === "facebook" && res) {
      const postData = {
        name: res.name,
        email: res.email,
        token: res.accessToken,
        idToken: res.tokenId,
      };
      dispatch(socialLogin(postData, props.router.navigate, type));
    }
  };

  //handleGoogleLoginResponse
  const googleResponse = response => {
    signIn(response, "google");
  };

  //handleTwitterLoginResponse
  // const twitterResponse = e => {}

  //handleFacebookLoginResponse
  const facebookResponse = response => {
    signIn(response, "facebook");
  };

  const handleLogin=()=>{
    if(loginData.user_email==''){
      toast.warn('Enter User Email');
      return
    }
    if(loginData.password==''){
      toast.warn('Enter Password');
      return
    }
    setLoading(true);
    const data_send={
      ...loginData
    }
    console.log(data_send)
    axios.post(base_url+"/admin/auth/admin_login.php",JSON.stringify(data_send))
    .then((res)=>{
      console.log(res)
      toast.success(res.message)
      if(res.status=='success'){
        toast.success('Login Successfully');
        localStorage.setItem('elmatary_admin',JSON.stringify(res.message));
        navigate('/dashboard',{replace:true})
      }
      else if(res.status=='faild'){
        toast.error(res.massage)
        // console.log('faild')
        // setShowErrMsg(true);
        // setErrMsg(res.massage)
      }
      else {
        toast.error('Something Went Error')
      }
    }).catch(e=>console.log(e))
    .finally(()=>{
      setLoading(false)
    })
  }

  // const navigate=useNavigate()

  useEffect(()=>{
    if(showErrMsg){
      setTimeout(() => {
        setShowErrMsg(false);
      }, 2000);
    }
  },[showErrMsg])
  let localdata=localStorage.getItem("elmatary_admin");
  // let adminData=
  if(localdata){
    console.log('y1')
    navigate('/dashboard',{replace:true})
  }
  useEffect(()=>{
    if(localdata){
    console.log('y2')
      navigate('/dashboard',{replace:true})
    }
  },[])
  return (
    <React.Fragment>
      <div className="authentication-bg min-vh-100">
        <div className="bg-overlay"></div>
        <Container>
          <div className="d-flex flex-column min-vh-100 px-3 pt-4">
            <Row className="justify-content-center my-auto">
              <Col md={8} lg={6} xl={5}>
                <div className="text-center mb-4">
                  <Link to="/">
                    <img src={require("../../assets/images/log.png")} alt="" height="22" /> <span className="logo-txt text-light" >Matary</span>
                  </Link>
                </div>
                <Card>
                  <CardBody className="p-4">
                    <div className="text-center mt-2">
                      <h5 className="text-primary">Welcome Back !</h5>
                      <p className="text-muted">Sign in to continue to Matary.</p>
                    </div>
                    <div className="p-2 mt-4">
                      <Form
                        className="form-horizontal"
                        onSubmit={(e) => {
                          e.preventDefault();
                          handleLogin()
                          // validation.handleSubmit();
                          // return false;
                        }}
                      >
                        {error ? <Alert color="danger"><div>{error}</div></Alert> : null}
                        <div className="mb-3">
                          <Label className="form-label">Email</Label>
                          <Input
                            name="email"
                            className="form-control"
                            placeholder="Enter email"
                            type="email"
                            onChange={(e)=>{
                              setLoadingData({...loginData,user_email:e.target.value});
                            }}
                            // onChange={validation.handleChange}
                            // onBlur={validation.handleBlur}
                            // value={validation.values.email || ""}
                            // invalid={
                            //   validation.touched.email && validation.errors.email ? true : false
                            // }
                          />
                          {validation.touched.email && validation.errors.email ? (
                            <FormFeedback type="invalid"><div>{validation.errors.email}</div></FormFeedback>
                          ) : null}
                        </div>

                        <div className="mb-3">
                          <Label className="form-label">Password</Label>
                          <Input
                            name="password"
                            // value={validation.values.password || ""}
                            type="password"
                            onChange={(e)=>{
                              setLoadingData({...loginData,password:e.target.value});
                            }}
                            // placeholder="Enter Password"
                            // onChange={validation.handleChange}
                            // onBlur={validation.handleBlur}
                            // invalid={
                            //   validation.touched.password && validation.errors.password ? true : false
                            // }
                          />
                          {validation.touched.password && validation.errors.password ? (
                            <FormFeedback type="invalid"><div> {validation.errors.password} </div></FormFeedback>
                          ) : null}
                        </div>

                        <div>
                          {
                            showErrMsg?
                            (
                              <p
                                style={{
                                  textAlign:'center',
                                  color:'red',
                                  fontWeight:'500',
                                  fontSize:'22px'
                                }}
                              >
                                {errMsg}
                              </p>
                            )
                            :
                            (null)
                          }
                        </div>

                        <div className="mt-3 text-end">
                          <button
                            disabled={loading}
                            className="btn btn-primary btn-block"
                            type="submit"
                          >
                            {
                              loading?<Spinner/>:'Log In'
                            }
                          </button>
                        </div>

                      </Form>
                    </div>
                  </CardBody>
                </Card>
              </Col>
            </Row>
          </div>
        </Container>
      </div>
    </React.Fragment>
  );
};

export default withRouter(Login);

Login.propTypes = {
  history: PropTypes.object,
};
