import React, { Fragment, useEffect, useState } from 'react';
import { CloseButton, DropdownItem, DropdownMenu, DropdownToggle, Input, Modal, ModalBody, ModalHeader, UncontrolledDropdown } from 'reactstrap';
import TableContainer from "../../../../components/Common/TableContainer";
import { CourseData } from "../../../../CommonData/Data/Course";
import { useNavigate } from 'react-router-dom';
import axios from "axios";
import { toast } from 'react-toastify';
import Select from "react-select";
import './courselist.css'
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai';
import { BiEdit } from 'react-icons/bi';
import { Visibility, VisibilityOff } from '@mui/icons-material';
const CourseListTable = ({ Courses, showHideCourse, getCourses }) => {
  const navigate = useNavigate();
  const [showcourseedit, setshowcourseedit] = useState(false);
  const [rowdata, setrowdata] = useState({});
  const [image, setimage] = useState(false);

  const handleupdatecourse = () => {
    const formdata = new FormData();
    formdata.append("image", image);
    console.log(rowdata);
    for (var pair of formdata.entries()) {
      console.log(pair[0] + ', ' + pair[1]);
    }
    axios.post("https://elmatary.com/El_Matary_Platform/platform/admin/image_uplouder.php", formdata)
      .then((res) => {
        console.log(res)

        const data_send = {
          course_name: rowdata.course_name,
          course_price: rowdata.course_price,
          course_content: rowdata.course_content,
          course_photo_url: !image ? rowdata.course_photo_url : res,
          course_id: rowdata.course_id,
          grade_id: rowdata.university_id,
          university_id: rowdata.grade_id,
        }
        axios.post("https://elmatary.com/El_Matary_Platform/platform/admin/courses/edit_course.php", JSON.stringify(data_send))
          .then((res) => {
            console.log(res)
            if (res.status == 'success') {
              setshowcourseedit(false);
              toast.success(res.message);
              setrowdata(false);
              getCourses();
            }
            else if (res.status == 'error') {
              toast.error(res.message);
            }
            else {
              toast.error("Something Went Error");
            }
          }).catch(err => toast.error(err))

      }).catch(err => toast.error(err))

  }
  const [item, setItem] = useState(false)
  const [copyCourse, setCopyCourse] = useState(false);

  const columns = [
    {
      accessor: 'course_name',
      Cell: (cell) => {
        return (<>
          <div>
            <div onClick={
              () => {
                console.log(cell.cell.row.original);
                navigate("/ReportsLessons", {
                  state: {
                    coursedata: cell.cell.row.original
                  }
                })
              }
            } style={{
              display: 'flex',
              alignItems: 'center',
              width: '100%',
              cursor: 'pointer',
              justifyContent: 'center'
            }}>
              <span id='id' style={{ display: "none" }}>{JSON.stringify(cell.cell.row.original)}</span>
              {
                cell.cell.row.original.course_photo_url ? (
                  <img style={{ height: "150px" }} src={cell.cell.row.original.course_photo_url} alt="" />
                ) : (
                  <img style={{ height: "150px" }} src={require("../../../../assets/images/noimage.png")} alt="" />
                )
              }
            </div>
            <div onClick={
              () => {
                console.log(cell.cell.row.original);
                navigate("/ReportsLessons", {
                  state: {
                    coursedata: cell.cell.row.original
                  }
                })
              }
            } style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              borderBottom: '1px solid #ccc',
              flexDirection: "column",
              cursor: 'pointer',
              padding: '10px 0px',
              gap: '4px'
            }} className='course_name'>
              <span style={{
                fontSize: '20px',
                fontWeight: '700'
              }}>{cell.cell.row.original.course_name || "No Name"}</span>
              <span style={{
                fontSize: '16px',
                fontWeight: '500',
                display: "block"
              }}>{cell.cell.row.original?.university_name || "No University"}/{cell.cell.row.original?.grade_name || "No Grade"}</span>
            </div>
          </div>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-around',
            margin: "20px 0"
          }}>


            <button onClick={
              () => {
                // console.log(cell.cell.row.original);
                navigate("/ReportsLessons", {
                  state: {
                    coursedata: cell.cell.row.original
                  }
                })
              }
            } className='btn btn-primary'>View Reports</button>

            {/* <button onClick={
              () => {
                console.log(cell.cell.row.original);
                setrowdata(cell.cell.row.original);
                setCopyCourse(true)
              }
            } className='btn btn-primary'>Duplicate Course</button>
            <UncontrolledDropdown className="DropVidUn">
              <DropdownToggle className="btn btn-light btn-sm" tag="button" data-bs-toggle="dropdown" direction="start">
                <i className="bx bx-dots-horizontal-rounded"></i>
              </DropdownToggle>
              <DropdownMenu className="dropdown-menu-end">
                <DropdownItem>
                  <span onClick={
                    () => {
                      setshowcourseedit(true);
                      setrowdata(cell.cell.row.original);
                      console.log(cell.cell.row.original)
                    }
                  }>
                    <button className='btn btn-primary' style={{ width: "100%" }}>Edit</button>
                  </span>
                </DropdownItem>
                <DropdownItem>
                  {
                    cell.cell.row.original.hidden == 'no' ?
                      (

                        <span style={{
                          width: '25px',
                          cursor: 'pointer'
                        }} onClick={
                          () => {
                            const item = cell.cell.row.original;
                            console.log(item)
                            const send_data = {
                              status: "yes",
                              course_id: item.course_id
                            }
                            showHideCourse(send_data);

                          }
                        }>
                          <button className='btn btn-danger' style={{ width: "100%" }}>Hide</button>
                        </span>
                      )
                      :
                      (
                        <span style={{
                          width: '25px',
                          cursor: 'pointer'
                        }} onClick={
                          () => {
                            const item = cell.cell.row.original;
                            console.log(item)
                            const send_data = {
                              status: "no",
                              course_id: item.course_id
                            }
                            showHideCourse(send_data);

                          }
                        }>
                          <button className='btn btn-success' style={{ width: "100%" }}>Show</button>
                        </span>
                      )
                  }
                </DropdownItem>
                <DropdownItem>
                  <span onClick={
                    () => {
                      setshowcourseedit(true);
                      setrowdata(cell.cell.row.original);
                      console.log(cell.cell.row.original)
                    }
                  }>
                  </span>
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown >
            */}

          </div >

        </>
        )
      }
    },

  ]
  const [universities, setuniversities] = useState([])
  const [grades, setgrades] = useState([])

  const getuniversities = () => {
    axios.get("https://elmatary.com/El_Matary_Platform/platform/admin/universities/select_universities_grade.php")
      .then((res) => {
        setuniversities(res.message)
      })
      .catch(err => console.log(err));
  }


  const getgrades = () => {
    setgrades(universities.filter(item => item.university_id == rowdata?.university_id)[0]?.grades);
  }

  useEffect(() => {
    getuniversities()
  }, [])

  useEffect(() => {
    getgrades();
  }, [rowdata?.university_id])

  const duplicateCourse = (e) => {
    const data_send = {
      course_id: rowdata.course_id,
      grade_id: rowdata.university_id,
      university_id: rowdata.grade_id,
    }
    console.log(data_send);
    axios.post("https://elmatary.com/El_Matary_Platform/platform/admin/courses/make_copy_from_course.php", JSON.stringify(data_send))
      .then((res) => {
        console.log(res)
        if (res.status == 'success') {
          setshowcourseedit(false);
          toast.success(res.message);
          setrowdata(false);
          getCourses()
        }
        else if (res.status == 'error') {
          toast.error(res.message);
        }
        else {
          toast.error("Something Went Error");
        }
      }).catch(err => console.log(err))
  }

  return (
    <React.Fragment>

      {Courses ? <TableContainer columns={columns}
        data={Courses}
        isGlobalFilter={true}
        customPageSize={10}
        className="Invoice table course_table" /> : <Fragment />}
      <Modal isOpen={showcourseedit}>
        <ModalHeader
          tag="h4">
          <div style={{ display: "flex", justifyContent: "space-between", width: "100%", alignItems: "center" }}>
            <h4>Update Course Data</h4>
            <CloseButton onClick={
              () => {
                setshowcourseedit(false);
              }
            }
              style={
                { marginLeft: "auto" }
              } />
          </div>
        </ModalHeader>
        <ModalBody>

          <form
            style={
              {
                padding: "15px",
                display: "flex",
                flexDirection: "column"
              }
            }
            onSubmit={
              (e) => {
                e.preventDefault();
                // AssignVideo(e)
                handleupdatecourse()
              }
            }>
            <div className="input_Field">
              <label htmlFor="">Title</label>
              <Input style={
                {
                  width: "100%",
                  borderRadius: "4px",
                  margin: "10px 0"
                }
              }
                onChange={(e) => {
                  setrowdata({ ...rowdata, course_name: e.target.value })
                }}
                value={rowdata.course_name}
                type="text"
                name="new_title"
                id="new_title"
                placeholder="Enter Course Title"
              />

            </div>


            <div className="input_Field">
              <label htmlFor="">Course Price</label>
              <Input style={
                {
                  width: "100%",
                  borderRadius: "4px",
                  margin: "10px 0"
                }
              }
                onChange={(e) => {
                  setrowdata({ ...rowdata, course_price: e.target.value })
                }}
                value={rowdata.course_price}
                type="text"
                name="new_title"
                id="new_title"
                placeholder="Enter Course Price"
              />

            </div>

            <div className="input_Field">
              <label htmlFor="">Course URL</label>
              <Input style={
                {
                  width: "100%",
                  borderRadius: "4px",
                  margin: "10px 0"
                }
              }
                onChange={(e) => {
                  setimage(e.target.files[0]);
                  // setrowdata({...rowdata,course_photo_url:e.target.files[0]})
                }}
                type="file"
                name="new_title"
                id="new_title"
                placeholder="Enter new_title"
              />

            </div>

            <div className="input_Field">
              <label htmlFor="">University</label>
              <select onChange={(e) => {
                setrowdata({ ...rowdata, university_id: e.target.value })
              }} className="form-control" value={rowdata?.university_id} data-trigger name="choices-single-category" id="" >
                {
                  universities.map((item, index) => {
                    return (
                      <option value={item.university_id}>{item.university_name}</option>
                    )
                  })
                }
              </select>

            </div>

            <div className="input_Field">
              <label htmlFor="">Grade</label>
              <select onChange={(e) => {
                setrowdata({ ...rowdata, grade_id: e.target.value })
              }} className="form-control" value={rowdata?.grade_id} data-trigger name="choices-single-category" id="" >
                {
                  grades && grades.length ? grades.map((item, index) => {
                    return (
                      <option value={item.grade_id}>{item.grade_name}</option>
                    )
                  }) : null
                }
              </select>

            </div>

            <div className="input_Field">
              <label htmlFor="">Course Content</label>
              <textarea style={
                {
                  width: "100%",
                  borderRadius: "4px",
                  margin: "10px 0"
                }
              }
                onChange={(e) => {
                  setrowdata({ ...rowdata, course_content: e.target.value })
                }}
                value={rowdata.course_content}
                type="text"
                name="new_title"
                id="new_title"
                placeholder="Enter Course Content"
              />

            </div>




            <button className="btn btn-success"
              style={
                { margin: "10px 0 0 auto" }
              }>
              {" "}
              Update {" "}
            </button>
          </form>


        </ModalBody>
      </Modal>

      <Modal isOpen={copyCourse}>
        <ModalHeader
          tag="h4">
          <div style={{ display: "flex", justifyContent: "space-between", width: "100%", alignItems: "center" }}>
            <h4>Duplicate</h4>
            <CloseButton onClick={
              () => {
                setCopyCourse(false);
              }
            }
              style={
                { marginLeft: "auto" }
              } />
          </div>
        </ModalHeader>
        <ModalBody>

          <form
            style={
              {
                padding: "15px",
                display: "flex",
                flexDirection: "column"
              }
            }
            onSubmit={
              (e) => {
                e.preventDefault();
                // AssignVideo(e)
                duplicateCourse(e)
              }
            }>

            <div className="input_Field">
              <label htmlFor="">University</label>
              <select onChange={(e) => {
                setrowdata({ ...rowdata, university_id: e.target.value })
              }} className="form-control" value={rowdata?.university_id} data-trigger name="choices-single-category" id="" >
                {
                  universities.map((item, index) => {
                    return (
                      <option value={item.university_id}>{item.university_name}</option>
                    )
                  })
                }
              </select>

            </div>

            <div className="input_Field">
              <label htmlFor="">Grade</label>
              <select onChange={(e) => {
                setrowdata({ ...rowdata, grade_id: e.target.value })
              }} className="form-control" value={rowdata?.grade_id} data-trigger name="choices-single-category" id="" >
                {
                  grades && grades.length ? grades.map((item, index) => {
                    return (
                      <option value={item.grade_id}>{item.grade_name}</option>
                    )
                  }) : null
                }
              </select>

            </div>


            <button className="btn btn-success"
              style={
                { margin: "10px 0 0 auto" }
              }>
              {" "}
              Duplicate {" "}
            </button>
          </form>


        </ModalBody>
      </Modal>
    </React.Fragment>
  )
}

export default CourseListTable;
