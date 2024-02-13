import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  Row,
  Col,
  Container,
  Modal,
  TabContent,
  TabPane,
  Tooltip,
  Card,
  CardBody,
  UncontrolledDropdown,
  DropdownMenu,
  DropdownItem,
  DropdownToggle,
  Input,
  CloseButton,
  Spinner,
} from "reactstrap";

// Import Flatepicker
import "flatpickr/dist/themes/material_blue.css";
import Flatpickr from "react-flatpickr";

// Breadcrumb
// import Breadcrumbs from "../../../components/Common/Breadcrumb";
// import CourseListTable from "./CourseTable/courseListTable";
import { useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";
import { Loader } from "rsuite";
import Breadcrumbs from "../../components/Common/Breadcrumb";
import CourseListTable from "../Courses/CoursesList/CourseTable/courseListTable";
import QuestionTableList from "./QuestionExamList/QuestionTableList";


const ExamQuestion = () => {
    document.title = "Courses | Matary - React Admin & Dashboard Template";

    const location=useLocation();
    const {examdata}=location.state;
    // console.log(examdata)

    const navigate = useNavigate();

    const [Courses, setCourses] = useState(false)
    const [loading, setLoading] = useState(false);

    const [isModalOpen,setIsModalOpen]=useState(false);

    const [questions,setquestions]=useState([]);

    const [answerlist,setanswerlist]=useState([
      {id:0,answer:'',checked:false}
    ])

    const [videos,setvideos]=useState([]);

    const [image,setimage]=useState(null);
    const [help_pdf,sethelp_pdf]=useState(null);
    const [answersArray,setanswersArray]=useState([]);
    const [addquestiondata,setaddquestiondata]=useState({
      question_text:'',
      // help_text:'',
      // help_pdf:'',
      // help_video:'',
      valid_answer:'',
      unit_id:'0',
    })

    const getCourses = async () => {
        setLoading(true);
        const courses = await axios.get("https://elmatary.com/El_Matary_Platform/platform/admin/courses/select_courses.php");
        console.log(courses);
        setCourses([...courses]);
        setLoading(false);
    }

    const showHideCourse = async (send_data) => {
        console.log(send_data)
        const courses = await axios.post("https://elmatary.com/El_Matary_Platform/platform/admin/courses/show_hide_course.php", JSON.stringify(send_data));
        console.log(courses);
        if (courses.status == 'success') {
            toast.success(courses.message);
            getCourses();
            console.log("getCourses");
        }
        else if (courses.status == 'error') {
            toast.error(courses.message);
        }
        else {
            toast.error("Something Went Error");
        }

    }
    const handlesavetxt = (e, i) => {
      // console.log(i)
      // console.log(txt)
      // console.log(e);
      const list = [...answerlist];
      list[i]['answer'] = e.target.value;
      setanswersArray(list);
    }



    const getexamQuestion=()=>{
      const data_send={
        exam_id:examdata.exam_id,
      }
      axios.post("https://elmatary.com/El_Matary_Platform/platform/admin/Exams/select_question.php",JSON.stringify(data_send))
      .then((res)=>{
        console.log(res);
        setquestions(res.message);
      })
    }

    const getVideos=()=>{
      axios.get("https://elmatary.com/El_Matary_Platform/platform/admin/videos/select_videos.php")
      .then((res)=>{
        console.log(res)
        setvideos(res);
        setaddquestiondata(res[0].video_id);
      })
    }


    const handleaddquestion=()=>{
      let answerslistarr=[...answerlist]
      console.log(answerslistarr)
      let answers="";
      let valid_answer="";
      for(let i=0;i<answerslistarr.length;i++){
        if(i==0){
          answers+=answerslistarr[i].answer;
        }
        else{
          answers+="******matary***"+answerslistarr[i].answer
        }
        if(answerslistarr[i].checked){
          valid_answer=answerslistarr[i].answer
        }
      }
      console.log(answers);
      const data_send={
        unit_id:0,
        question_text:addquestiondata.question_text,
        answers,
        valid_answer,
        exam_id:examdata.exam_id,
        course_id:examdata.course_id,
        question_image_url:'',
        help_text:'',
        help_pdf:'',
        help_video:'',
      }
      console.log(data_send);
      axios.post("https://elmatary.com/El_Matary_Platform/platform/admin/Exams/insert_question.php",JSON.stringify(data_send))
      .then((res)=>{
        if(res.status=='success'){
          getexamQuestion();
          toast.success("Question has added successfully");
        }
        else if(res.status=="error"){
          toast.error("Question has not added");
        }
        else {
          toast.error("Something Went Error");
        }
      }).catch(err=>console.log(err))
    }

    useEffect(() => {
        getCourses();
        getexamQuestion();
        getVideos()
    }, [])

    return (
        <React.Fragment>
            <div className="page-content">
                <Container fluid={true}>
                    <Breadcrumbs title="Courses" breadcrumbItem="Course List" />
                    <Row>
                        <Col lg={12}>
                            <Card>
                                <CardBody>
                                    <div className="position-relative">
                                        <div className="modal-button mt-2">
                                            <Row className="align-items-start">
                                                <Col className="col-sm">
                                                    <div>
                                                        <button type="button" className="btn btn-success mb-4" data-bs-toggle="modal" data-bs-target="#addCourseModal"
                                                            onClick={
                                                                () => {
                                                                  setIsModalOpen(true);
                                                                    // navigate("add-course")
                                                                }
                                                            }>
                                                            <i className="mdi mdi-plus me-1"></i>
                                                            Add Question
                                                        </button>
                                                    </div>
                                                </Col>

                                            </Row>
                                        </div>
                                    </div>
                                    <div id="table-invoices-list">
                                        {loading ? <Loader /> :
                                            <QuestionTableList updatemcq={()=>{
                                              getexamQuestion()
                                            }} Questions={questions}
                                                showHideCourse={showHideCourse}
                                                getCourses={getCourses}
                                            />
                                        }</div>

                                </CardBody>
                            </Card>
                        </Col>
                    </Row>
                </Container>
                <ToastContainer />
            </div>
            <Modal title="add question" isOpen={isModalOpen}>
          <form
            action="#"
            style={{
              padding: "15px",
              display: "flex",
              flexDirection: "column",
              gap: "13px",
            }}
            onSubmit={(e) => {
              e.preventDefault();
              handleaddquestion()
              setIsModalOpen(false)
            }}
          >
            <CloseButton
              onClick={() => setIsModalOpen(false)}
              style={{ marginLeft: "auto" }}
            />

            <div className="inputField withtext">
              <label htmlFor="exam_name">Question Text</label>
              <Input
                style={{
                  width: "100%",
                  padding: "10px",
                  borderRadius: "4px",
                }}
                type="text"
                name="exam_name"
                id="exam_name"
                placeholder="question text"
                required
                onChange={(e)=>{
                  setaddquestiondata({...addquestiondata, question_text:e.target.value})
                }}
              />
            </div>


            {/* <div className="inputField withtext">
              <label htmlFor="help_text">Help Video</label>
              <select className="form-control" onChange={(e)=>{
                setaddquestiondata({...addquestiondata,help_video:e.target.value})
              }} value={addquestiondata.help_video} name="" id="">
                {
                  videos.map((item,index)=>{
                    return(
                      <option value={item.video_id}>{item.video_title}</option>
                    )
                  })
                }
              </select>
            </div> */}

            <div className="add_answer_question">
              <label style={{ display:'flex',alignItems:'center',justifyContent:'space-between' }}>
                <span>Add Answer</span>
                <span onClick={()=>{
                  setanswerlist([...answerlist,{id:answerlist.length,answer:''}])
                }} style={{ cursor:'pointer',fontSize:'26px' }}>+</span>
              </label>
              {
                answerlist.map((item,index)=>{
                  return(
                    <div style={{ display:'flex',alignItems:'center',justifyContent:'space-between' }}>
                      <textarea onChange={(e)=>{
                      handlesavetxt(e,index)
                    }} style={{ marginBottom:'10px',width:'90%' }} className="form-control"></textarea>
                    <input onClick={()=>{
                      // setanswerlist([...ans]);
                      let answerarr=[...answerlist];
                      setanswerlist(answerarr.map((it,index)=>{
                        if(item.id==it.id){
                          return {...it,checked:true}
                        }
                        else return {...it,checked:false}
                      }));
                      // for(let i=0;i<answerarr.length;i++){
                      //   if()
                      // }
                        setaddquestiondata({...addquestiondata,valid_answer:item.answer})
                    }} checked={item.checked} type="checkbox" name="" id="" />
                    </div>
                  )
                })
              }
            </div>

            <button
              onClick={()=>{
                // console.log("es")
                // setIsModalOpen(true);
              }}
              className="btn btn-success"
              style={{ margin: "10px 0 0 auto" }}
            >
              {" "}
              Add Question{" "}
            </button>
          </form>
            </Modal>
        </React.Fragment>
    );
};

export default ExamQuestion;
