import React, { Fragment, useEffect, useState } from "react";
import {
  CloseButton,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Input,
  Modal,
  ModalBody,
  ModalHeader,
  UncontrolledDropdown,
} from "reactstrap";
import TableContainer from "./../../../../components/Common/TableContainer";
import { CourseData } from "../../../../CommonData/Data/Course";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import Select from "react-select";
import "./courselist.css";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { BiEdit } from "react-icons/bi";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { base_url } from "../../../../constants";
const CourseListTable = ({ Courses, showHideCourse, getCourses }) => {
  const localdata = localStorage.getItem("elmatary_admin");
  let adminData = localdata && JSON.parse(localdata);
  const navigate = useNavigate();
  const [showcourseedit, setshowcourseedit] = useState(false);
  const [rowdata, setrowdata] = useState({});
  const [image, setimage] = useState(false);
  const [selectedGrade, setSelectedGrade] = useState(false);
  const [selectedUniv, setSelectedUniv] = useState(false);

  // const navigate=useNavigate();
  const [category, setCategory] = useState(false);

  // const getCategories = async () => {
  //   const data_send={
  //     admin_id:adminData.admin_id,
  //     access_token:adminData.access_token,
  //   }
  //   const getcategories = await axios.post(base_url+"/admin/courses/select_category.php",JSON.stringify(data_send));
  //   console.log(getcategories)
  //   setCategory(getcategories);
  // }
  const [selectedCategory, setSelectedCategory] = useState(false);

  // useEffect(() => {
  //   getCategories();
  // }, [])
  const handleupdatecourse = async () => {
    try {
      let uploadedImageUrl = rowdata.course_photo_url;

      if (rowdata.course_photo_url instanceof File) {
        const formData = new FormData();
        formData.append("image", rowdata.course_photo_url);

        const uploadRes = await axios.post(
          "https://camp-coding.online/Teacher_App_2025/elnaira_jor/admin/image_uploader.php",
          formData
        );

        uploadedImageUrl = uploadRes;
      }

      const dataToSend = {
        admin_id: adminData.admin_id,
        access_token: adminData.access_token,
        course_name: rowdata.course_name,
        course_price: rowdata.course_price,
        course_content: rowdata.course_content,
        course_photo_url: uploadedImageUrl || rowdata?.course_photo_url,
        course_id: rowdata.course_id,
        grade_id: selectedGrade,
        university_id: selectedUniv,
        category_id: selectedCategory,
        pdf_url: rowdata?.pdf_url,
      };

      const res = await axios.post(
        `${base_url}/admin/courses/edit_course.php`,
        JSON.stringify(dataToSend)
      );

      if (res?.message === "Session Expired") {
        localStorage.removeItem("elmatary_admin");
        navigate("/login", { replace: true });
      } else if (res?.status === "success") {
        setshowcourseedit(false);
        toast.success(res?.message);
        setrowdata(false);
        getCourses();
        setSelectedGrade(false);
        setSelectedUniv(false);
      } else {
        toast.error(res?.message || "Something went wrong");
      }
    } catch (error) {
      toast.error("Error: " + error.message);
      console.error(error);
    }
  };

  const [item, setItem] = useState(false);
  const [copyCourse, setCopyCourse] = useState(false);
  useEffect(() => {
    setSelectedGrade(rowdata.grade_id);
    setSelectedUniv(rowdata.university_id);
    setSelectedCategory(rowdata.category_id);
  }, [rowdata]);
  const columns = [
    {
      accessor: "course_photo_url",
      Cell: (cell) => {
        return (
          <>
            <div>
              <div
                onClick={() => {
                  console.log(cell.cell.row.original);
                  navigate("/units", {
                    state: {
                      coursedata: cell.cell.row.original,
                    },
                  });
                }}
                style={{
                  display: "flex",
                  alignItems: "center",
                  width: "100%",
                  cursor: "pointer",
                  justifyContent: "center",
                }}
              >
                <span id="id" style={{ display: "none" }}>
                  {JSON.stringify(cell.cell.row.original)}
                </span>
                {cell.cell.row.original.course_photo_url ? (
                  <img
                    className="h-[150px] w-[150px] object-contain"
                    src={cell.cell.row.original.course_photo_url}
                    alt=""
                  />
                ) : (
                  <img
                    className="h-[150px] w-[150px] object-contain"
                    src={require("../../../../assets/images/noimage.png")}
                    alt=""
                  />
                )}
              </div>
              <div
                onClick={() => {
                  console.log(cell.cell.row.original);
                  navigate("/units", {
                    state: {
                      coursedata: cell.cell.row.original,
                    },
                  });
                }}
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  borderBottom: "1px solid #ccc",
                  flexDirection: "column",
                  cursor: "pointer",
                  padding: "10px 0px",
                  gap: "4px",
                }}
                className="course_name"
              >
                <span
                  style={{
                    fontSize: "20px",
                    fontWeight: "700",
                  }}
                >
                  {cell.cell.row.original.course_name || "No Name"}
                </span>
                <span
                  style={{
                    fontSize: "16px",
                    fontWeight: "500",
                    display: "block",
                  }}
                >
                  {cell.cell.row.original?.university_name || "No Company"}/
                  {cell.cell.row.original?.grade_name || "No Grade"}
                </span>
              </div>
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-around",
                margin: "20px 0",
              }}
            >
              <button
                onClick={() => {
                  console.log(cell.cell.row.original);
                  navigate("/units", {
                    state: {
                      coursedata: cell.cell.row.original,
                    },
                  });
                }}
                className="btn btn-primary"
              >
                View
              </button>
              {/* <button onClick={
              () => {
                console.log(cell.cell.row.original);
                setrowdata(cell.cell.row.original);
                setCopyCourse(true)
              }
            } className='btn btn-primary'>Duplicate Course</button> */}

              <UncontrolledDropdown className="DropVidUn">
                <DropdownToggle
                  className="btn btn-light btn-sm"
                  tag="button"
                  data-bs-toggle="dropdown"
                  direction="start"
                >
                  <i className="bx bx-dots-horizontal-rounded"></i>
                </DropdownToggle>
                <DropdownMenu className="dropdown-menu-end">
                  {/* <DropdownItem>
                  <span onClick={
                    () => {
                      console.log(cell.cell.row.original.course_id);
                      navigate("/exam", { state: { course_data: cell.cell.row.original } })
                      // setshowcourseedit(true);
                      // setrowdata(cell.cell.row.original);
                      // console.log(cell.cell.row.original)
                    }
                  }>
                    <button className='btn btn-primary' style={{ width: "100%" }}>Exams</button>
                  </span>
                </DropdownItem> */}
                  <DropdownItem>
                    <span
                      onClick={() => {
                        setshowcourseedit(true);
                        setrowdata(cell.cell.row.original);
                        console.log(cell.cell.row.original);
                      }}
                    >
                      <button
                        className="btn btn-primary"
                        style={{ width: "100%" }}
                      >
                        Edit
                      </button>
                    </span>
                  </DropdownItem>
                  <DropdownItem>
                    {cell.cell.row.original.hidden == "no" ? (
                      <span
                        style={{
                          width: "25px",
                          cursor: "pointer",
                        }}
                        onClick={() => {
                          const item = cell.cell.row.original;
                          console.log(item);
                          const send_data = {
                            status: "yes",
                            course_id: item.course_id,
                          };
                          showHideCourse(send_data);
                        }}
                      >
                        <button
                          className="btn btn-danger"
                          style={{ width: "100%" }}
                        >
                          Hide
                        </button>
                      </span>
                    ) : (
                      <span
                        style={{
                          width: "25px",
                          cursor: "pointer",
                        }}
                        onClick={() => {
                          const item = cell.cell.row.original;
                          console.log(item);
                          const send_data = {
                            status: "no",
                            course_id: item.course_id,
                          };
                          showHideCourse(send_data);
                        }}
                      >
                        <button
                          className="btn btn-success"
                          style={{ width: "100%" }}
                        >
                          Show
                        </button>
                      </span>
                    )}
                  </DropdownItem>
                  <DropdownItem>
                    <span
                      onClick={() => {
                        setshowcourseedit(true);
                        setrowdata(cell.cell.row.original);
                        console.log(cell.cell.row.original);
                      }}
                    >
                      {/* <button className='btn btn-success' style={{ width: "100%" }}>Copy</button> */}
                    </span>
                  </DropdownItem>
                  <DropdownItem>
                    <span
                      onClick={() => {
                        navigate("/coursesqueries", {
                          state: { course_data: cell.cell.row.original },
                        });
                        // setshowcourseedit(true);
                        // setrowdata(cell.cell.row.original);
                        // console.log(cell.cell.row.original)
                      }}
                    >
                      <button
                        className="btn btn-warning"
                        style={{ width: "100%" }}
                      >
                        Student Questions
                      </button>
                    </span>
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </div>
          </>
        );
      },
    },
  ];
  const [universities, setuniversities] = useState([]);
  const [grades, setgrades] = useState([]);

  const getuniversities = () => {
    const data_send = {
      admin_id: adminData.admin_id,
      access_token: adminData.access_token,
    };
    axios
      .post(
        base_url + "/admin/universities/select_universities_grade.php",
        JSON.stringify(data_send)
      )
      .then((res) => {
        // console.log(res)
        if (res.message == "Session Expired") {
          localStorage.removeItem("elmatary_admin");
          navigate("/login", { replace: true });
        }
        if (res.status == "success") {
          setuniversities(res.message);
        }
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    if (!selectedUniv) {
      setgrades([]);
      return;
    }

    const selectedUniversity = universities.find(
      (item) => item.university_id === selectedUniv
    );

    setgrades(selectedUniversity?.grades || []);
  }, [selectedUniv, universities]);

  useEffect(() => {
    getuniversities();
  }, []);

  useEffect(() => {
    console.log(grades);
  }, [grades]);

  useEffect(() => {
    if (grades && grades.length) {
      setSelectedGrade(grades[0]?.grade_id);
    }
  }, [grades]);

  const duplicateCourse = (e) => {
    const data_send = {
      course_id: rowdata.course_id,
      grade_id: selectedGrade,
      university_id: selectedUniv,
      admin_id: adminData.admin_id,
      access_token: adminData.access_token,
    };
    console.log(data_send);
    axios
      .post(
        base_url + "/admin/courses/make_copy_from_course.php",
        JSON.stringify(data_send)
      )
      .then((res) => {
        console.log(res);
        if (res.message == "Session Expired") {
          // toast.error();
          localStorage.removeItem("elmatary_admin");
          navigate("/login", { replace: true });
        }
        if (res.status == "success") {
          setshowcourseedit(false);
          toast.success(res.message);
          setrowdata(false);
          getCourses();
          setSelectedGrade(false);
          setSelectedUniv(false);
        } else if (res.status == "error") {
          toast.error(res.message);
        } else {
          toast.error("Something Went Error");
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <React.Fragment>
      {Courses ? (
        <TableContainer
          columns={columns}
          data={Courses}
          isGlobalFilter={true}
          customPageSize={10}
          className="Invoice table course_table"
        />
      ) : (
        <Fragment />
      )}
      <Modal toggle={() => setshowcourseedit(false)} isOpen={showcourseedit}>
        <ModalHeader tag="h4">
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              width: "100%",
              alignItems: "center",
            }}
          >
            <h4>Update Enrollment Data</h4>
            <CloseButton
              onClick={() => {
                setshowcourseedit(false);
              }}
              style={{ marginLeft: "auto" }}
            />
          </div>
        </ModalHeader>
        <ModalBody>
          <form
            style={{
              padding: "15px",
              display: "flex",
              flexDirection: "column",
            }}
            onSubmit={(e) => {
              e.preventDefault();
              // AssignVideo(e)
              handleupdatecourse();
            }}
          >
            <div className="input_Field">
              <label htmlFor="">Title</label>
              <Input
                style={{
                  width: "100%",
                  borderRadius: "4px",
                  margin: "10px 0",
                }}
                onChange={(e) => {
                  setrowdata({ ...rowdata, course_name: e.target.value });
                }}
                value={rowdata.course_name}
                type="text"
                name="new_title"
                id="new_title"
                placeholder="Enter Enrollment Title"
              />
            </div>

            <div className="input_Field">
              <label htmlFor="">Enrollment Price</label>
              <Input
                style={{
                  width: "100%",
                  borderRadius: "4px",
                  margin: "10px 0",
                }}
                onChange={(e) => {
                  setrowdata({ ...rowdata, course_price: e.target.value });
                }}
                value={rowdata.course_price}
                type="text"
                name="new_title"
                id="new_title"
                placeholder="Enter Enrollment Price"
              />
            </div>

            <div className="input_Field">
              <label htmlFor="">Enrollment Image</label>

              {rowdata.course_photo_url ? (
                <div className="flex items-center gap-[10px] w-full">
                  <div className="w-[100px] h-[100px]">
                    <img
                      className="w-full  h-full rounded-md object-contain"
                      src={
                        rowdata?.course_photo_url instanceof File
                          ? URL.createObjectURL(rowdata?.course_photo_url)
                          : rowdata?.course_photo_url
                      }
                    />
                  </div>

                  <div>
                    <button
                      type="button"
                      className="btn btn-danger mt-0"
                      onClick={() =>
                        setrowdata({
                          ...rowdata,
                          course_photo_url: null,
                        })
                      }
                    >
                      Remove
                    </button>
                  </div>
                </div>
              ) : (
                <Input
                  style={{
                    width: "100%",
                    borderRadius: "4px",
                    margin: "10px 0",
                  }}
                  onChange={(e) => {
                    // setimage(e.target.files[0]);
                    setrowdata({
                      ...rowdata,
                      course_photo_url: e.target.files[0],
                    });
                  }}
                  type="file"
                  name="new_title"
                  id="new_title"
                  placeholder="Enter new_title"
                />
              )}
            </div>
            <div className="input_Field">
              <label htmlFor="">Books URL</label>
              <Input
                style={{
                  width: "100%",
                  borderRadius: "4px",
                  margin: "10px 0",
                }}
                onChange={(e) => {
                  setrowdata({ ...rowdata, pdf_url: e.target.value });
                }}
                value={rowdata.pdf_url}
                type="text"
                name="new_title"
                id="new_title"
                placeholder="Enter Books URL"
              />
            </div>

            <div className="input_Field">
              <label htmlFor="">Company</label>
              <select
                value={rowdata?.university_id}
                onChange={(e) => {
                  setrowdata({ ...rowdata, university_id: e.target.value });
                }}
                className="form-control"
                data-trigger
                name="choices-single-category"
                id=""
              >
                {universities.map((item, index) => {
                  return (
                    <option value={item.university_id}>
                      {item.university_name}
                    </option>
                  );
                })}
              </select>
            </div>

            <div className="input_Field">
              <label htmlFor="">Category</label>
              <select
                value={rowdata?.grade_id}
                onChange={(e) => {
                  setrowdata({ ...rowdata, grade_id: e.target.value });
                }}
                className="form-control"
                data-trigger
                name="choices-single-category"
                id=""
              >
                {grades && grades.length
                  ? grades.map((item, index) => {
                      return (
                        <option value={item.grade_id}>{item.grade_name}</option>
                      );
                    })
                  : null}
              </select>
            </div>

            <div className="input_Field">
              <label htmlFor="">Enrollment Content</label>
              <textarea
                className="!border !border-[#e2e5e8] outline-none p-[0.47rem_0.75rem]"
                style={{
                  width: "100%",
                  borderRadius: "4px",
                  margin: "5px 0",
                }}
                onChange={(e) => {
                  setrowdata({ ...rowdata, course_content: e.target.value });
                }}
                value={rowdata.course_content}
                type="text"
                name="new_title"
                id="new_title"
                placeholder="Enter Enrollment Content"
              />
            </div>

            <button
              className="btn btn-success"
              style={{ margin: "10px 0 0 auto" }}
            >
              {" "}
              Update{" "}
            </button>
          </form>
        </ModalBody>
      </Modal>

      <Modal isOpen={copyCourse}>
        <ModalHeader tag="h4">
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              width: "100%",
              alignItems: "center",
            }}
          >
            <h4>Duplicate</h4>
            <CloseButton
              onClick={() => {
                setCopyCourse(false);
              }}
              style={{ marginLeft: "auto" }}
            />
          </div>
        </ModalHeader>
        <ModalBody>
          <form
            style={{
              padding: "15px",
              display: "flex",
              flexDirection: "column",
            }}
            onSubmit={(e) => {
              e.preventDefault();
              // AssignVideo(e)
              duplicateCourse(e);
            }}
          >
            <div className="input_Field">
              <label htmlFor="">Company</label>
              <select
                onChange={(e) => {
                  // setrowdata({ ...rowdata, university_id: e.target.value })
                  setSelectedUniv(e.target.value);
                }}
                className="form-control"
                data-trigger
                name="choices-single-category"
                id=""
              >
                {universities.map((item, index) => {
                  return (
                    <option value={item.university_id}>
                      {item.university_name}
                    </option>
                  );
                })}
              </select>
            </div>

            <div className="input_Field">
              <label htmlFor="">Grade</label>
              <select
                onChange={(e) => {
                  // setrowdata({ ...rowdata, grade_id: e.target.value })
                  setSelectedGrade(e.target.value);
                }}
                className="form-control"
                data-trigger
                name="choices-single-category"
                id=""
              >
                {grades && grades.length
                  ? grades.map((item, index) => {
                      return (
                        <option value={item.grade_id}>{item.grade_name}</option>
                      );
                    })
                  : null}
              </select>
            </div>

            <button
              className="btn btn-success"
              style={{ margin: "10px 0 0 auto" }}
            >
              {" "}
              Duplicate{" "}
            </button>
          </form>
        </ModalBody>
      </Modal>
    </React.Fragment>
  );
};

export default CourseListTable;
