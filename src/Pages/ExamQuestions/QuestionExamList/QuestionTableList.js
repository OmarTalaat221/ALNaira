import React, { useEffect, useState } from 'react';
import { CloseButton, DropdownItem, DropdownMenu, DropdownToggle, UncontrolledDropdown, Modal, Input, Spinner, Label } from 'reactstrap';
// import TableContainer from "./../../../../components/Common/TableContainer";
// import { CourseData } from "../../../../CommonData/Data/Course";
import { useNavigate } from 'react-router-dom';
import TableContainer from '../../../components/Common/TableContainer';
import axios from 'axios';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { Loader } from 'rsuite';
import { toast } from 'react-toastify';
import { MenuItem, Select } from '@mui/material';
import Confirm from '../../../components/ConfComp/Confirm';
import { Icon } from '@iconify/react';
const QuestionTableList = ({ Questions,updatemcq}) => {
    const navigate = useNavigate();
    const [showconf,setshowconf]=useState(false);
    const [loading,setLoading]=useState(false)
    const [rowdata,setrowdata]=useState({});
    const [img,setimg]=useState(null);
    const [isModalOpen,setIsModalOpen]=useState(false);
    const [videos,setvideos]=useState([]);
    const [book, setBook] = useState(false);
    const [answerlist,setanswerlist]=useState([
      // {id:0,answer:'',checked:false}
    ])
    const [uploadloading,setuploadloading]=useState(false);
    const columns = [
        {
            Header: "No",
            Cell: (cell) => {
                return (
                    <b>
                        {cell.cell.row.index + 1}
                    </b>
                )
            }
        }, {
            Header: 'question id',
            accessor: 'question_id',
        },
        {
            Header: 'question name',
            accessor: 'question_text',
        },
        {
          Header:'question answers',
          Cell: (cell) => {
            return (
                <ul>
                    {cell?.cell?.row?.original?.answers.map((item)=>{
                      return (
                        <li style={{
                          color:item.answer_score=="true"?'green':'red'
                         }}>{item.answer_value}</li>
                      )
                    })}
                </ul>
            )
        }
        },

        {
          Header: 'Status',
          Cell: (cell) => {
            switch (cell.cell.row.original.hidden) {
              case 'no':
                return <div style={{ cursor: 'pointer' }} onClick={() => {
                  setshowconf(true);
                  setrowdata({ ...cell.cell.row.original, number: cell.cell.row.index + 1 })

                  // const item = cell.cell.row.original;
                  // const send_data = {
                  //   hidden_value: item.hidden == "no" ? "yes" : "no",
                  //   wq_id: item.wq_id
                  // }
                  // showHideQuestions(send_data)
                }}>
                  <Visibility className="shown"  />
                </div>;

              case 'yes':
                return <div style={{ cursor: 'pointer' }} onClick={() => {
                  setshowconf(true);
                  setrowdata({ ...cell.cell.row.original, number: cell.cell.row.index + 1 })
                  // const item = cell.cell.row.original;
                  // const send_data = {
                  //   hidden_value: item.hidden == "no" ? "yes" : "no",
                  //   wq_id: item.wq_id
                  // }
                  // showHideQuestions(send_data)
                }}>
                  <VisibilityOff className="hidden" />
                </div>;

              default:
                return <span className="badge badge-pill badge-soft-success font-size-12">
                  {
                    cell.cell.row.original.hidden
                  }</span>
            }
          }
        },
        {
          Header: 'Update',
          Cell: (cell) => {
            return (
              <button onClick={()=>{
                setIsModalOpen(true)
                let alldatapushed=[];
                // setrowdata();
                setrowdata(cell.cell.row.original);
                // setanswerlist(cell.cell.row.original?.answers)
                // console.log(cell.cell.row.original?.answers?.length)
                for(let i=0 ;i<cell.cell.row.original?.answers?.length;i++){
                  let obj={
                    id:i+1,
                    answer:cell.cell.row.original?.answers[i].answer_value,
                    checked:cell.cell.row.original?.answers[i].answer_score=="true"?true:false,
                  }
                  alldatapushed.push(obj)
                  // console.log(alldatapushed)
                  // console.log(obj)
                  setanswerlist([...alldatapushed]);
                }
              }} className='btn btn-primary'>update</button>
            )
          }
        },

        // {
        //   Header:'Correct answer',
        //   Cell: (cell) => {
        //     return (

        //         cell.cell.row.original.answers.filter((it)=>{
        //           if(it.answer_score=="true"){
        //             return {...it}
        //           }
        //           else return null
        //         })
        //         .map((item)=>{
        //           return(
        //             <p style={{ padding:'3px' }}>{item.answer_value}</p>
        //           )
        //         })

        //     )
        // }
        // },
        // {
        //     Header: 'Hidden',
        //     Cell: (cell) => {
        //         return <button className="btn" onClick={
        //             () => {
        //                 const item = cell.cell.row.original;
        //                 const send_data = {
        //                     status: item.hidden,
        //                     unit_id: item.unit_id
        //                 }
        //                 setshowconf(true);
        //                 setrowdata(send_data)
        //             }
        //         }>
        //             {
        //                 cell.cell.row.original.hidden == "yes" ? <VisibilityOff className="hidden" /> : <Visibility className="shown" />
        //             }
        //         </button>
        //     }
        // },
        // {
        //     Header: "View Unit",
        //     Cell: (cell) => {
        //         return (

        //             <button class="btn btn-success" onClick={
        //                 () => {
        //                     console.log(cell.cell.row.original);
        //                     navigate("/lessons", {
        //                         state: {
        //                             coursedata: courseData,
        //                             unitData: cell.cell.row.original
        //                         }
        //                     })
        //                 }
        //             }>View</button>

        //         )
        //     }
        // },

        // {
        //     Header: 'Action',
        //     Cell: (cell) => {
        //         return (
        //             <>
        //                 <button className="btn btn-primary" onClick={() =>{ setsetShowCopy(true); setSelectedUnit(cell.cell.row.original.unit_id)}}>Copy</button>
        //             </>
        //         )
        //     }
        // },
    ]
    const [answersArray,setanswersArray]=useState([]);
    const handlesavetxt = (e, i) => {
      console.log(i)
      console.log(e)
      // console.log(i)
      // console.log(txt)
      // console.log(e);
      const list = [...answerlist];
      console.log(answerlist)
      list[i]['answer'] = e.target.value;
      setanswersArray(list);
      setanswerlist(list);
    }

    const handleuploadimg=()=>{
      setuploadloading(true);
      const formdata=new FormData();
      formdata.append("image",img);
      axios.post("https://elmatary.com/El_Matary_Platform/platform/admin/image_uplouder.php",formdata)
      .then((res)=>{
        console.log(res);
        setrowdata({...rowdata,question_image_url:res})
      }).catch(err=>console.log(err))
      .finally(()=>{
        setuploadloading(false);
      })
    }
    const getvideos=()=>{
      axios.get("https://elmatary.com/El_Matary_Platform/platform/admin/videos/select_videos.php")
      .then((res)=>{
        // console.log(res);
        setvideos(res);
        // setaddquestiondata({...addquestiondata,help_video:res[0].video_id})
      })
    }
    const handlecopyitem = (data) => {
        const data_send = {
            unit_id: selectedUnit,
            course_id: selectedCourse
        }
        console.log(data_send)
        axios.post("https://elmatary.com/El_Matary_Platform/platform/admin/unit/make_copy_from_unit_and_alldata.php", JSON.stringify(data_send))
            .then((res) => {
                if (res.status == 'success') {
                    toast.success("Success");
                }
                else if (res.status == 'error') {
                    toast.error(res.message);
                }
                else {
                    toast.error("Something Went Error");
                }
            })
    }
    const [Courses, setCourses] = useState(false);
    const [showCopy, setsetShowCopy] = useState(false);
    const [numberOfPages, setNumberOfPages] = useState(false);
    const [selectedCourse, setSelectedCourse] = useState(false);
    const [selectedUnit, setSelectedUnit] = useState(false);
    const [book_url, setBookUrl] = useState(false);
    const getCourses = async () => {
        const courses = await axios.get("https://elmatary.com/El_Matary_Platform/platform/admin/courses/select_courses.php");
        setCourses([...courses])
    }
    useEffect(() => {
        getCourses()
        getvideos()
    }, []);
    // const [Questions, setUnits] = useState(false);
    // const getUnits = async () => {
    //   const send_data = {
    //     course_id: selectedCourse
    //   };
    //   try {
    //     const units = await axios.post("https://elmatary.com/El_Matary_Platform/platform/admin/courses/select_course_units.php", send_data);
    //     console.log(units);
    //     console.log(selectedCourse);
    //     setUnits([...units]);
    //   } catch (err) {
    //     console.log(err);
    //   }
    // }
    // useEffect(() => {
    //   getUnits();
    // }, [selectedCourse])
    const showHideQuestions = async (send_data) => {
      const questions_1 = await axios.post("https://elmatary.com/El_Matary_Platform/platform/admin/mcq/update_mcq_hidden.php", send_data);
      if (questions_1.status == "success") {
        toast.success(questions_1.message);
        // await getQuestions();
         updatemcq()
        // setEdit(false)
      } else {
        toast.error(questions_1.message);
      }
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
        question_text:rowdata.question_text,
        answers,
        valid_answer,
        exam_id:rowdata.exam_id,
        course_id:rowdata.course_id,
        question_image_url:'',
        help_text:'',
        help_pdf:'',
        help_video:'',
      }
      console.log(data_send);
      axios.post("https://elmatary.com/El_Matary_Platform/platform/admin/Exams/insert_question.php",JSON.stringify(data_send))
      .then((res)=>{
        if(res.status=='success'){
          updatemcq();
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

    const handleFileSelect = async (event) => {
      const file = event.target.files[0];
      if (!file) {
        // No file selected
        return;
      }
      setBook(file);
      var reader = new FileReader();
      reader.readAsBinaryString(event.target.files[0]);
      reader.onloadend = function () {
        var count = reader.result.match(/\/Type[\s]*\/Page[^s]/g)?.length;
        if (count) {
          setNumberOfPages(count);
        } else {
          setNumberOfPages(false)
        }
      }

    };


    const uploadPdf = async () => {
      setLoading(true)
      const formData = new FormData();
      if (book) {
        formData.append("file_attachment", book)
        console.log(book);
        const url = await axios.post("https://elmatary.com/El_Matary_Platform/platform/admin/uploud_pdf.php", formData);
        console.log(url);
        if (url.status == "success") {
          setBookUrl(url.message);
          setrowdata({...rowdata,help_pdf:url.message})
          toast.success("File Uploaded Successfully");
        } else {
          toast.error(url.message)
        }
      }
      setLoading(false);

    }

    return (
        <React.Fragment> {
            Questions && Questions.length ? <TableContainer columns={columns}
                data={Questions}
                isGlobalFilter={true}
                customPageSize={10}
                className="Invoice table" /> : !Questions.length ? <h2>No Questions</h2> : <Loader />
        }

            <Modal title="Copy Unit To Course"
                isOpen={showCopy}>
                <form action="#"
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
                            handlecopyitem(e)
                            setsetShowCopy(false);
                        }
                    }>
                    <CloseButton onClick={
                        () => setsetShowCopy(false)
                    }
                        style={
                            { marginLeft: "auto" }
                        } />

                    <div className="input_Field">
                        <label forHtml="course_id">Course Name</label>
                        <div className="input_Field">
                            <Select style={
                                {
                                    width: "100%",
                                    borderRadius: "4px",
                                    margin: "10px 0"
                                }
                            }
                                type="text"
                                name="course_id"
                                id="course_id"
                                placeholder="Choose Course"
                                onChange={(e) => setSelectedCourse(e.target.value)}
                                required>
                                {
                                    Courses && Courses.length ? Courses.map((item, index) => {
                                        return <MenuItem value={item.course_id} key={index}>{item.course_name}</MenuItem>
                                    }) : <h3>No Courses</h3>
                                }
                            </Select>
                        </div></div>
                    <button className="btn btn-success"
                        style={
                            { margin: "10px 0 0 auto" }
                        }>
                        {" "}
                        Copy Unit{" "} </button>
                </form>
            </Modal>
            {
              showconf ? (
                <Confirm
                  id={rowdata.number}
                  cancleoper={() => {
                    setshowconf(false)
                  }}
                  confirmoper={() => {
                    const send_data = {
                      hidden_value: rowdata.hidden == "no" ? "yes" : "no",
                      question_id: rowdata.question_id
                    }
                    showHideQuestions(send_data)
                    setshowconf(false);
                  }}
                  status={rowdata.hidden == 'no' ? 'hide' : 'show'}
                  comp={'question'} />
              ) : (null)
            }
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
                value={rowdata.question_text}
                onChange={(e)=>{
                  setrowdata({...rowdata,question_text:e.target.value})
                  // setexamdata({...examdata,exam_name:e.target.value})
                }}
              />
            </div>

            <div className="inputField withtext upimgdiv">
              <label htmlFor="exam_img">Question image</label>
              <Input
                style={{
                  width: "100%",
                  padding: "10px",
                  borderRadius: "4px",
                }}
                type="file"
                name="exam_img"
                id="exam_img"
                placeholder="question text"
                // required
                onChange={(e)=>{
                  setimg(e.target.files[0]);
                  // setaddquestiondata({...addquestiondata,question_text:e.target.value})
                  // setexamdata({...examdata,exam_name:e.target.value})
                }}
              />
              {
                uploadloading?(
                  <Spinner/>
                ):(
                  <img onClick={()=>{
                    handleuploadimg()
                  }} className="up_img" src={require("../../../assets/images/upload.png")} alt="" />
                )
              }
            </div>
            <div className="mb-3">
              <Label className="form-label">ebook file</Label>
              <div className="form-control" style={{ "display": "flex", width: "100%", justifyContent: "space-between", alignItems: "center" }}>  <input type="file" id="pdfInput" accept=".pdf" onChange={handleFileSelect} /> <span className="btn btn-primary" onClick={() => uploadPdf()}>
                {!loading ? <Icon icon="solar:upload-bold-duotone" /> : <Loader size="sm" />}
              </span></div>
              <h4>{numberOfPages ? <span>numberOfPages : {numberOfPages}</span> : null}</h4>
            </div>


            <div className="inputField withtext">
              <label htmlFor="exam_name">Help Video</label>
              <select onChange={(e)=>{
                setrowdata({...rowdata,help_video:e.target.value})
              }} value={rowdata.help_video} className="form-control">
                {
                  videos.map((item)=>{
                    return(
                      <option value={item.video_id}>{item.video_title}</option>
                    )
                  })
                }
              </select>
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
                  setanswerlist([...answerlist, {id:answerlist.length+1, answer:''}])
                }} style={{ cursor:'pointer',fontSize:'26px' }}>+</span>
              </label>
              {
                answerlist?.map((item,index)=>{
                  // console.log(item)
                  return(
                    <div style={{ display:'flex',alignItems:'center',justifyContent:'space-between' }}>
                      <textarea value={item.answer} onChange={(e)=>{
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
                        // setaddquestiondata({...addquestiondata,valid_answer:item.answer})
                    }} checked={item.checked==true?true:false} type="checkbox" name="" id="" />
                    </div>
                  )
                })
              }
            </div>

            <button
              onClick={()=>{
                // console.log("es")
                // setIsModalOpen(true);
                console.log("rowdata",rowdata)
              }}
              className="btn btn-success"
              style={{ margin: "10px 0 0 auto" }}
            >
              {" "}
              Edit Question{" "}
            </button>
          </form>
      </Modal>
        </React.Fragment>
    )
}

export default QuestionTableList;
