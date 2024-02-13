import React, { useState } from "react";

import {
  Row,
  Col,
  Card,
  CardBody,
  FormGroup,
  Button,
  Label,
  Input,
  Container,
  FormFeedback,
  Form,
} from "reactstrap";
// Formik validation
import * as Yup from "yup";
import { useFormik } from "formik";

//Import Breadcrumb
import Breadcrumbs from "../../components/Common/Breadcrumb";

const FormValidations = () => {
  document.title = "Form Validation | Matary - React Admin & Dashboard Template";


  // Form validation 
  const validation = useFormik({
    // enableReinitialize : use this flag when initial values needs to be changed
    enableReinitialize: true,

    initialValues: {
      firstname: '',
      lastname: '',
      city: '',
      state: '',
      zip: '',
    },
    validationSchema: Yup.object({
      firstname: Yup.string().required("Please Enter Your First Name"),
      lastname: Yup.string().required("Please Enter Your Last Name"),
      city: Yup.string().required("Please Enter Your City"),
      state: Yup.string().required("Please Enter Your State"),
      zip: Yup.string().required("Please Enter Your Zip"),
    }),
    onSubmit: (values) => {
      console.log("values", values);
    }
  });

  const [formValidation, setValidation] = useState({
    fnm: null,
    lnm: null,
    unm: null,
    city: null,
    stateV: null,
  });

  function handleSubmit(e) {
    e.preventDefault();
    const modifiedV = { ...formValidation };
    var fnm = document.getElementById("validationTooltip01").value;
    var lnm = document.getElementById("validationTooltip02").value;
    var unm = document.getElementById("validationTooltipUsername").value;
    var city = document.getElementById("validationTooltip03").value;
    var stateV = document.getElementById("validationTooltip04").value;

    if (fnm === "") {
      modifiedV["fnm"] = false;
    } else {
      modifiedV["fnm"] = true;
    }

    if (lnm === "") {
      modifiedV["lnm"] = false;
    } else {
      modifiedV["lnm"] = true;
    }

    if (unm === "") {
      modifiedV["unm"] = false;
    } else {
      modifiedV["unm"] = true;
    }

    if (city === "") {
      modifiedV["city"] = false;
    } else {
      modifiedV["city"] = true;
    }

    if (stateV === "") {
      modifiedV["stateV"] = false;
    } else {
      modifiedV["stateV"] = true;
    }
    setValidation(modifiedV);
  }

  //for change tooltip display propery
  const onChangeValidation = (fieldName, value) => {
    const modifiedV = { ...validation };
    if (value !== "") {
      modifiedV[fieldName] = true;
    } else {
      modifiedV[fieldName] = false;
    }
    setValidation(modifiedV);
  };

  return (
    <React.Fragment>
      <div className="page-content">
        <Container fluid={true}>
          <Breadcrumbs title="Forms" breadcrumbItem="Form Validation" />
          <Row>
            <Col xl="6">
              <Card>
                <CardBody>
                  <h4 className="card-title">React Validation - Normal</h4>
                  <p className="card-title-desc">
                    Provide valuable, actionable feedback to your users with
                    HTML5 form validation–available in all our supported
                    browsers.
                  </p>
                  <Form className="needs-validation"
                    onSubmit={(e) => {
                      e.preventDefault();
                      validation.handleSubmit();
                      return false;
                    }}
                  >
                    <Row>
                      <Col md="6">
                        <FormGroup className="mb-3">
                          <Label htmlFor="validationCustom01">First name</Label>
                          <Input
                            name="firstname"
                            placeholder="First name"
                            type="text"
                            className="form-control"
                            id="validationCustom01"
                            onChange={validation.handleChange}
                            onBlur={validation.handleBlur}
                            value={validation.values.firstname || ""}
                            invalid={
                              validation.touched.firstname && validation.errors.firstname ? true : false
                            }
                          />
                          {validation.touched.firstname && validation.errors.firstname ? (
                            <FormFeedback type="invalid">{validation.errors.firstname}</FormFeedback>
                          ) : null}
                        </FormGroup>
                      </Col>
                      <Col md="6">
                        <FormGroup className="mb-3">
                          <Label htmlFor="validationCustom02">Last name</Label>
                          <Input
                            name="lastname"
                            placeholder="Last name"
                            type="text"
                            className="form-control"
                            id="validationCustom02"
                            onChange={validation.handleChange}
                            onBlur={validation.handleBlur}
                            value={validation.values.lastname || ""}
                            invalid={
                              validation.touched.lastname && validation.errors.lastname ? true : false
                            }
                          />
                          {validation.touched.lastname && validation.errors.lastname ? (
                            <FormFeedback type="invalid">{validation.errors.lastname}</FormFeedback>
                          ) : null}
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row>
                      <Col md="4">
                        <FormGroup className="mb-3">
                          <Label htmlFor="validationCustom03">City</Label>
                          <Input
                            name="city"
                            placeholder="City"
                            type="text"
                            className="form-control"
                            onChange={validation.handleChange}
                            onBlur={validation.handleBlur}
                            value={validation.values.city || ""}
                            invalid={
                              validation.touched.city && validation.errors.city ? true : false
                            }
                          />
                          {validation.touched.city && validation.errors.city ? (
                            <FormFeedback type="invalid">{validation.errors.city}</FormFeedback>
                          ) : null}
                        </FormGroup>
                      </Col>
                      <Col md="4">
                        <FormGroup className="mb-3">
                          <Label htmlFor="validationCustom04">State</Label>
                          <Input
                            name="state"
                            placeholder="State"
                            type="text"
                            className="form-control"
                            id="validationCustom04"
                            onChange={validation.handleChange}
                            onBlur={validation.handleBlur}
                            value={validation.values.state || ""}
                            invalid={
                              validation.touched.state && validation.errors.state ? true : false
                            }
                          />
                          {validation.touched.state && validation.errors.state ? (
                            <FormFeedback type="invalid">{validation.errors.state}</FormFeedback>
                          ) : null}
                        </FormGroup>
                      </Col>
                      <Col md="4">
                        <FormGroup className="mb-3">
                          <Label htmlFor="validationCustom05">Zip</Label>
                          <Input
                            name="zip"
                            placeholder="Zip Code"
                            type="text"
                            className="form-control"
                            id="validationCustom05"
                            onChange={validation.handleChange}
                            onBlur={validation.handleBlur}
                            value={validation.values.zip || ""}
                            invalid={
                              validation.touched.zip && validation.errors.zip ? true : false
                            }
                          />
                          {validation.touched.zip && validation.errors.zip ? (
                            <FormFeedback type="invalid">{validation.errors.zip}</FormFeedback>
                          ) : null}
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row>
                      <Col lg="12">
                        <FormGroup className="mb-3">
                          <div className="form-check">
                            <Input
                              type="checkbox"
                              className="form-check-input"
                              id="invalidCheck"
                            />
                            <Label
                              className="form-check-label"
                              htmlFor="invalidCheck"
                            >
                              {" "}
                              Agree to terms and conditions
                            </Label>
                          </div>
                        </FormGroup>
                      </Col>
                    </Row>
                    <Button color="primary" type="submit">
                      Submit form
                    </Button>
                  </Form>
                </CardBody>
              </Card>
            </Col>

            <Col xl="6">
              <Card>
                <CardBody>
                  <h4 className="card-title">React Validation (Tooltips)</h4>
                  <p className="card-title-desc">
                    If your form layout allows it, you can swap the
                    <code>.{"{valid | invalid-}"}feedback</code> classes for
                    <code>.{"{valid | invalid-}"}-tooltip</code> classes to
                    display validation feedback in a styled tooltip.
                  </p>
                  <form
                    className="needs-validation"
                    method="post"
                    id="tooltipForm"
                    onSubmit={e => {
                      handleSubmit(e);
                    }}
                  >
                    <Row>
                      <Col md="4">
                        <div className="mb-3 position-relative">
                          <Label htmlFor="validationTooltip01">
                            First name
                          </Label>
                          <Input
                            type="text"
                            className="form-control"
                            id="validationTooltip01"
                            placeholder="First name"
                            onChange={event => {
                              onChangeValidation("fnm", event.target.value);
                            }}
                            valid={validation["fnm"] === true}
                            invalid={
                              validation["fnm"] !== true &&
                              validation["fnm"] !== null
                            }
                          />

                          <div
                            className={
                              validation["fnm"] === true
                                ? "valid-tooltip"
                                : "invalid-tooltip"
                            }
                            name="validate"
                            id="validate1"
                          >
                            {validation["fnm"] === true
                              ? "Looks good!"
                              : "Please Enter Valid First Name"}
                          </div>
                        </div>
                      </Col>
                      <Col md="4">
                        <div className="mb-3 position-relative">
                          <Label htmlFor="validationTooltip02">Last name</Label>
                          <Input
                            type="text"
                            className="form-control"
                            id="validationTooltip02"
                            placeholder="Last name"
                            onChange={event =>
                              onChangeValidation("lnm", event.target.value)
                            }
                            valid={validation["lnm"] === true}
                            invalid={
                              validation["lnm"] !== true &&
                              validation["lnm"] !== null
                            }
                          />
                          <div
                            className={
                              validation["lnm"] === true
                                ? "valid-tooltip"
                                : "invalid-tooltip"
                            }
                            name="validate"
                            id="validate2"
                          >
                            {validation["lnm"] === true
                              ? "Looks good!"
                              : "Please Enter Valid Last Name"}
                          </div>
                        </div>
                      </Col>
                      <Col md="4">
                        <div className="mb-3 position-relative">
                          <Label htmlFor="validationTooltipUsername">
                            Username
                          </Label>
                          <div className="input-group">
                            <div className="input-group-prepend">
                              <span
                                className="input-group-text"
                                id="validationTooltipUsernamePrepend"
                              >
                                @
                              </span>
                            </div>
                            <Input
                              type="text"
                              className="form-control"
                              id="validationTooltipUsername"
                              placeholder="Username"
                              onChange={event =>
                                onChangeValidation("unm", event.target.value)
                              }
                              valid={validation["unm"] === true}
                              invalid={
                                validation["unm"] !== true &&
                                validation["unm"] !== null
                              }
                            />
                            <div
                              className={
                                validation["unm"] === true
                                  ? "valid-tooltip"
                                  : "invalid-tooltip"
                              }
                              name="validate"
                              id="validate3"
                            >
                              {validation["unm"] === true
                                ? "Looks good!"
                                : "Please choose a unique and valid username."}
                            </div>
                          </div>
                        </div>
                      </Col>
                    </Row>
                    <Row>
                      <Col md="6">
                        <div className="mb-3 position-relative">
                          <Label htmlFor="validationTooltip03">City</Label>
                          <Input
                            type="text"
                            className="form-control"
                            id="validationTooltip03"
                            placeholder="City"
                            onChange={event =>
                              onChangeValidation("city", event.target.value)
                            }
                            valid={validation["city"] === true}
                            invalid={
                              validation["city"] !== true &&
                              validation["city"] !== null
                            }
                          />
                          <div
                            className={
                              validation["city"] === true
                                ? "valid-tooltip"
                                : "invalid-tooltip"
                            }
                            name="validate"
                            id="validate4"
                          >
                            {validation["city"] === true
                              ? "Looks good!"
                              : "Please choose a unique and valid username.Please provide a valid city."}
                          </div>
                        </div>
                      </Col>
                      <Col md="6">
                        <div className="mb-3 position-relative">
                          <Label htmlFor="validationTooltip04">State</Label>
                          <Input
                            type="text"
                            className="form-control"
                            id="validationTooltip04"
                            placeholder="State"
                            onChange={event =>
                              onChangeValidation("stateV", event.target.value)
                            }
                            valid={validation["stateV"] === true}
                            invalid={
                              validation["stateV"] !== true &&
                              validation["stateV"] !== null
                            }
                          />
                          <div
                            className={
                              validation["stateV"] === true
                                ? "valid-tooltip"
                                : "invalid-tooltip"
                            }
                            name="validate"
                            id="validate5"
                          >
                            {validation["stateV"] === true
                              ? "Looks good!"
                              : "Please provide a valid state."}
                          </div>
                        </div>
                      </Col>
                    </Row>
                    <Button color="primary" type="submit">
                      Submit form
                    </Button>
                  </form>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </React.Fragment>
  );
};

export default FormValidations;
