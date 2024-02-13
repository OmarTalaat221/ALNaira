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
    CloseButton
} from "reactstrap";

// Import Flatepicker
import "flatpickr/dist/themes/material_blue.css";
import Flatpickr from "react-flatpickr";

// Breadcrumb
import Breadcrumbs from "../../components/Common/Breadcrumb";
// import UnitListTable from "./UnitTable/UnitTableList";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import { useEffect } from "react";
import Confirm from "../../components/ConfComp/Confirm";
import { MenuItem, Select } from "@mui/material";
import { Loader } from "rsuite";
import UniqQuestionTableList from "./UnitQustionList/UnitQuestionTableList";

const UniqQuestion = ({unitdata}) => {
    console.log(unitdata)
    document.title = "Courses | Matary - React Admin & Dashboard Template";
    const navigate = useNavigate();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [Units, setUnits] = useState(false)
    const location = useLocation();
    const [itemLoader, setItemLoader] = useState(false)
    const [MCQQuestinos,setMCQQuestions]=useState([]);
    const [answersArray,setanswersArray]=useState([]);
    const [answerlist,setanswerlist]=useState([
      {id:0,answer:'',checked:false}
    ])
    const [addquestiondata,setaddquestiondata]=useState({
      question_text:'',
      // help_text:'',
      // help_pdf:'',
      // help_video:'',
      valid_answer:'',
      unit_id:'0',
    })

    const getUnits = async () => {
        setItemLoader(true)
        const send_data = {
            course_id: location?.state?.coursedata?.course_id
        };
        try {
            const units = await axios.post("https://elmatary.com/El_Matary_Platform/platform/admin/courses/select_course_units.php", send_data);
            console.log(units);
            setUnits([...units]);
            setItemLoader(false);
        } catch (err) {
            console.log(err);
            setItemLoader(false);
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

    const getUnitQuestion=()=>{
      const data_send={};
      axios.post("")
      .then((res)=>{
        console.log(res);
        setMCQQuestions(res.message);
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
        exam_id:location.unitdata.exam_id,
        course_id:location.unitdata.course_id,
        question_image_url:'',
        help_text:'',
        help_pdf:'',
        help_video:'',
      }
      console.log(data_send);
      axios.post("https://elmatary.com/El_Matary_Platform/platform/admin/Exams/insert_question.php",JSON.stringify(data_send))
      .then((res)=>{
        if(res.status=='success'){
          // getexamQuestion();
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

    const showModal = () => {
        setIsModalOpen(true);
    };
    const handleOk = async (e) => {
        const send_data = {
            course_id: location.state.coursedata.course_id,
            unit_name: e.currentTarget.unit_name.value
        };
        const units = await axios.post("https://elmatary.com/El_Matary_Platform/platform/admin/courses/add_unit.php", send_data);
        console.log(units);
        if (units.status) {
            toast.success("Added");
            await getUnits();
        } else {
            toast.error(units.message);
        }
        setIsModalOpen(false);
    };
    useEffect(() => {
        getUnits();
    }, []);

    const [showconf, setshowconf] = useState(false);
    const [rowdata, setrowdata] = useState({});
    const showHideUnit = async (send_data) => {
        const units = await axios.post("https://elmatary.com/El_Matary_Platform/platform/admin/courses/show_hide_unit.php", JSON.stringify(send_data));
        if (units.status) {
            toast.success(units.message);
            await getUnits();
        } else {
            toast.error(units.message);
        }
    }


    if (!location.state) {
        return navigate("/courses-list");
    }
    console.log(location.state);
    return (
        <React.Fragment>
            <div className="page-content">
                <Container fluid={true}>
                    {/* breadcrumbItem={loation?.state?.coursedata?.course_name + " Unit List"} */}
                    <Breadcrumbs title={location?.state?.coursedata?.course_name} breadcrumbItem={"Unit List"} />

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
                                                                    showModal();
                                                                }
                                                            }>
                                                            <i className="mdi mdi-plus me-1"></i>
                                                            Add Mcq Question
                                                        </button>
                                                    </div>
                                                </Col>
                                            </Row>
                                        </div>
                                    </div>
                                    <div id="table-invoices-list">

                                        {itemLoader ? <Loader /> :
                                            <>
                                                <UniqQuestionTableList  Units={Units}
                                                    setshowconf={setshowconf}
                                                    setrowdata={setrowdata}
                                                    courseData={
                                                        location.state.coursedata
                                                    } />
                                            </>
                                        }
                                    </div>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>
                </Container>

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
                  setaddquestiondata({...addquestiondata,question_text:e.target.value})
                  // setexamdata({...examdata,exam_name:e.target.value})
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
                <ToastContainer />
                {
                    showconf ? (
                        <Confirm
                            id={rowdata.number}
                            cancleoper={() => {
                                setshowconf(false)
                            }}
                            confirmoper={() => {
                                const send_data = {
                                    status: rowdata.status == "no" ? "yes" : "no",
                                    unit_id: rowdata.unit_id
                                }
                                showHideUnit(send_data);
                                setshowconf(false);
                            }}
                            status={rowdata.status == 'no' ? 'hide' : 'show'}
                            comp={'unit'} />
                    ) : (null)
                }

            </div>
        </React.Fragment>
    );
};

export default UniqQuestion;
