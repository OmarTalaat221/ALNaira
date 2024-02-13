import React, { useState, useEffect } from "react";
import classnames from "classnames";
import "./style.css";
import { Container, Row, Col, Card, Collapse, Form, Modal } from "reactstrap";
import { Link, useNavigate } from "react-router-dom";
import Dropzone from "react-dropzone";

// Breadcrumb
import Breadcrumbs from "../../components/Common/Breadcrumb";
import { useRef } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import { DatePicker, Loader } from "rsuite";
import { base_url } from "../../constants";

const AddCopoun = () => {
  document.title = "Add Copoun | Matary - ";
  const localdata=localStorage.getItem('elmatary_admin');
  let adminData=localdata&&JSON.parse(localdata);
  const [col1, setcol1] = useState(true);
  const [col2, setcol2] = useState(false);
  const [col3, setcol3] = useState(false);

  const t_col1 = () => {
    setcol1(!col1);
    setcol2(false);
    setcol3(false);
  };

  const [modal, setmodal] = useState(false);

  function tog_mod() {
    setmodal(!modal);
  }

  const [subjects, setSubjects] = useState([
    {
      id: 1,
      name: "Math",
      selected: false,
    },
    {
      id: 2,
      name: "Math2",
      selected: false,
    },
    {
      id: 3,
      name: "Math3",
      selected: false,
    },
  ]);
  const [Courses, setCourses] = useState(false);

  const getCourses = async () => {
    const data_send={
      admin_id:adminData.admin_id,
      access_token:adminData.access_token,
    }
    const courses = await axios.post(
      base_url+"/admin/courses/select_courses.php",JSON.stringify(data_send)
    );

    const co = courses.message.map((item) => {
      // console.log("Course", item);
      return {
        id: item.course_id,
        name: item.course_name,
        univ_name: item?.university_name,
        grade_name: item?.grade_name,
        university_id: item?.university_id,
        grade_id: item?.grade_id,

        selected: false,
      };
    });

    setCourses([...co]);
    setFilteredCourses([...co]);
  };
  useEffect(() => {
    getCourses();
  }, []);

  const copounDate = useRef();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [addLoading,setAddLoading]=useState(false)
  const addCopoun = async (e) => {
    setLoading(true);
    setAddLoading(true)
    e.preventDefault();
    // alert("Submitted")
    const data_send = {
      copoun_name: copounDate.current.copoun_name.value,
      copoun_quantity: copounDate.current.copoun_quantity.value,
      subjects:
        Courses && Courses.length
          ? Courses.filter((item) => item.selected)
              .map((item) => item.id)
              .join("*")
          : null,
      phone_number: copounDate.current.phone_number.value,
      end_date: copounDate.current.end_date.value,
      admin_id:adminData.admin_id,
      access_token:adminData.access_token,
    };
    console.log(data_send)

    const allPropertiesNotEmpty = Object.values(data_send).every(
      (value) => value !== null && value !== undefined && value !== ""
    );

    if (allPropertiesNotEmpty) {
    const link =base_url+`/admin/subscription/new_create_cources_cards.php?courses_ids=${data_send.subjects}&card_count=${data_send.copoun_quantity}&title=${data_send.copoun_name}&support_no=${data_send.phone_number}&end_date=${data_send.end_date}`

      const url = await axios.post(base_url+"/admin/subscription/new_create_cources_cards.php",JSON.stringify(data_send))
      .then((res)=>{
        // console.log(link)
        // window.open(link);
        window.open(link, "_blank");
        // window.open(link?.split("king_mo_reda")[1]?.split(".xlsx")[0] + ".xlsx");
      }).finally(()=>{
        setAddLoading(false)
      })
      // if(url.status=='success'){
      //   // console.log(link)
      //   window.open(link?.split("king_mo_reda")[1]?.split(".xlsx")[0] + ".xlsx");
      //   // window.open(link, "_blank");
      //   // setLoading(!loading)
      // }
      // console.log(url)
      setAddLoading(false)

    } else {
      toast.error("Add All Card Data");
    }
    setLoading(false);
    setAddLoading(false)
  };

  const [univs, setUnivs] = useState([]);
  const [filteredCourses, setFilteredCourses] = useState();
  const getUnivs = async () => {
    const data_send={
      admin_id:adminData.admin_id,
      access_token:adminData.access_token,
    }
    const selct_univs = await axios.post(
      base_url+"/admin/universities/select_universities_grade.php",JSON.stringify(data_send)
      );
      if(selct_univs.message=='Session Expired'){
        localStorage.removeItem('elmatary_admin');
        navigate('/login',{replace:true})
      }
      console.log(selct_univs)
    setUnivs(selct_univs.message);
  };

  const [selectedUnivs, setSelectedUnivs] = useState(false);

  useEffect(() => {
    getCourses();
    getUnivs();
  }, []);
  const [filterGrades, setFilterGrades] = useState(false);
  const [selectGrades, setSelectGrades] = useState(false);
  const getFilterGrades = () => {
    setFilterGrades(
      univs?.filter((item) => item.university_id == selectedUnivs)[0]?.grades
    );
  };
  useEffect(() => {
    let arr = [];
    if (filteredCourses && filteredCourses.length)
      arr = filteredCourses.filter(
        (item) => item?.university_id == selectedUnivs
      );
    setCourses([...arr]);
    if (selectedUnivs) {
      getFilterGrades();
    } else {
      setCourses(filteredCourses);
      setFilterGrades(false);
    }
  }, [selectedUnivs]);

  useEffect(() => {
    let arr = [];
    if (filteredCourses && filteredCourses.length) {
      if (selectGrades) {
        arr = filteredCourses.filter((item) => item?.grade_id == selectGrades);
        setCourses([...arr]);
      } else {
        arr = filteredCourses.filter(
          (item) => item?.university_id == selectedUnivs
        );

        setCourses([...arr]);
      }
    }
    console.log(selectGrades);
  }, [selectGrades]);
  return (
    <React.Fragment>
      <div className="page-content">
        <Container fluid={true}>
          <Breadcrumbs title="Copun" breadcrumbItem="Add Copun" />
          <Row>
            <Col lg={12}>
              <div className="custom-accordion" id="addcopoun-accordion">
                <Card>
                  <Link
                    to="#addcopoun-copouninfo-collapse"
                    className={classnames("text-dark", {
                      collapsed: !col1,
                    })}
                    type="button"
                    onClick={t_col1}
                    style={{ cursor: "pointer" }}
                  >
                    <div className="p-4">
                      <div className="d-flex align-items-center">
                        <div className="flex-shrink-0 me-3">
                          <div className="avatar-sm">
                            <div className="avatar-title rounded-circle bg-soft-primary text-primary">
                              01
                            </div>
                          </div>
                        </div>
                        <div className="flex-grow-1 overflow-hidden">
                          <h5 className="font-size-16 mb-1">Copoun Info</h5>
                          <p className="text-muted text-truncate mb-0">
                            Fill all information below
                          </p>
                        </div>
                        <div className="flex-shrink-0">
                          <i className="mdi mdi-chevron-up accor-down-icon font-size-24"></i>
                        </div>
                      </div>
                    </div>
                  </Link>
                  <Collapse isOpen={col1} id="checkout-billinginfo-collapse">
                    <div className="p-4 border-top">
                      <form
                        ref={copounDate}
                        autocomplete="on"
                        onSubmit={(e) => {
                          e.preventDefault();
                          // addCopoun(e);
                        }}
                      >
                        <div className="mb-3">
                          <label className="form-label" htmlFor="copoun_name">
                            Copoun Name
                          </label>
                          <input
                            id="copoun_name"
                            name="copoun_name"
                            placeholder="Enter Copoun Name"
                            type="text"
                            className="form-control"
                          />
                        </div>
                        <div className="mb-3">
                          <label className="form-label" htmlFor="end_date">
                            Copoun End Date
                          </label>
                          {/* <input id="end_date" name="end_date" placeholder="Enter Copoun End Date" type="date" className="form-control" /> */}
                          <DatePicker id="end_date" name="end_date" />
                        </div>
                        <Row>
                          <Col lg={4} style={{ width: "100%" }}>
                            <div className="mb-3">
                              <label
                                className="form-label"
                                htmlFor="copoun_quantity"
                              >
                                Copoun Quantity
                              </label>
                              <input
                                id="copoun_quantity"
                                name="copoun_quantity"
                                placeholder="Enter Quantity"
                                type="number"
                                style={{ width: "100%" }}
                                className="form-control"
                              />
                            </div>
                          </Col>
                        </Row>

                        <div className="mb-0">
                          <label className="form-label" htmlFor="phone_number">
                            Support phone number
                          </label>
                          <input
                            className="form-control"
                            name="phone_number"
                            id="phone_number"
                            placeholder="Enter Copoun Phone Number"
                          ></input>
                        </div>
                        <div className="univs">
                          {univs && univs.length
                            ? univs.map((item, index) => {
                                return (
                                  <span
                                    className={
                                      selectedUnivs &&
                                      selectedUnivs.length &&
                                      selectedUnivs == item?.university_id
                                        ? "active"
                                        : ""
                                    }
                                    onClick={() =>
                                      selectedUnivs == item?.university_id
                                        ? setSelectedUnivs(false)
                                        : setSelectedUnivs(item?.university_id)
                                    }
                                  >
                                    {item?.university_name}
                                  </span>
                                );
                              })
                            : null}
                        </div>

                        <div className="univs">
                          {filterGrades && filterGrades.length
                            ? filterGrades.map((item, index) => {
                                return (
                                  <span
                                    className={
                                      selectGrades &&
                                      selectGrades.length &&
                                      selectGrades == item?.grade_id
                                        ? "active"
                                        : ""
                                    }
                                    onClick={() =>
                                      selectGrades == item?.grade_id
                                        ? setSelectGrades(false)
                                        : setSelectGrades(item?.grade_id)
                                    }
                                  >
                                    {item?.grade_name}
                                  </span>
                                );
                              })
                            : null}
                        </div>
                        <div className="mb-0">
                          <label className="form-label" htmlFor="phone_number">
                            Select Copoun Subjects
                          </label>
                          <ul
                            className="subjects_av"
                            style={{ overflow: "auto" }}
                          >
                            {Courses && Courses.length ? (
                              Courses.map((item, index) => {
                                // console.log("item", item)
                                return (
                                  <li
                                    key={index}
                                    className={
                                      item.selected ? "btn btn-success" : "btn"
                                    }
                                    onClick={() => {
                                      Courses.map((s_item, index) =>
                                        s_item.id == item.id
                                          ? (s_item.selected = !s_item.selected)
                                          : item
                                      );
                                      setCourses([...Courses]);
                                    }}
                                  >
                                    {item.name} - {item?.univ_name} -{" "}
                                    {item?.grade_name}
                                  </li>
                                );
                              })
                            ) : (
                              <h2 style={{ textAlign: "center" }}>
                                No Subjects Found
                              </h2>
                            )}{" "}
                          </ul>
                        </div>
                        <Row className="mb-4">
                          <Col className="col text-end">
                            <Link to="#" className="btn btn-danger me-1">
                              {" "}
                              <i className="bx bx-x me-1"></i>
                              Cancel{" "}
                            </Link>
                            {!addLoading ? (
                              <button
                                to="#"
                                className="btn btn-success"
                                data-bs-toggle="modal"
                                data-bs-target="#success-btn"
                                onClick={(e) => {
                                  addCopoun(e);
                                }}
                              >
                                {" "}
                                <>
                                  <i className=" bx bx-file me-1"></i>
                                  Save{" "}
                                </>{" "}
                              </button>
                            ) : (
                              <Loader size="sm" />
                            )}
                          </Col>
                        </Row>
                      </form>
                    </div>
                  </Collapse>
                </Card>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <Modal
        isOpen={modal}
        toggle={() => {
          tog_mod();
        }}
        id="success-btn"
        centered
      >
        <div className="modal-content">
          <div className="modal-body">
            <div className="text-center">
              <i className="bx bx-check-circle display-1 text-success"></i>
              <h3 className="mt-3">Copoun Added Successfully</h3>
            </div>
          </div>
        </div>
      </Modal>
      <ToastContainer />
    </React.Fragment>
  );
};

export default AddCopoun;
