import React, { useState } from "react";
import {
  CloseButton,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Input,
  Modal,
  Spinner,
  UncontrolledDropdown,
} from "reactstrap";
// import TableContainer from "./../../../../components/Common/TableContainer";
// import { CourseData } from "../../../../CommonData/Data/Course";
import { useNavigate } from "react-router-dom";
import TableContainer from "../../../components/Common/TableContainer";
import { ExamData } from "../../../CommonData/Data/questions";
import moment from "moment";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
// import { CloseButton } from "react-toastify/dist/components";

const LiveQuestionTable = ({ questions,handleupdate }) => {
  const navigate = useNavigate();
  const [allanswers,setallanswers]=useState([]);
  const [isModalOpen,setIsModalOpen]=useState(false);
  const [rowdata,setrowdata]=useState({});
  const columns = [
    {
      Header: "Question ID",
      accessor: "question_id",
      Filter: false,
    },
    {
      Header: "Question Title",
      accessor: "qustion_text",
      //   Filter: false,
    },
    {
      Header: "Answers",
      accessor: "timer",
      Filter: false,
      Cell: (cell) => {
        // console.log(cell.cell.row.original.arrAns)
        return (
          <ul>
            {
              cell.cell.row.original.arrAns.map((item,index)=>{
                return(
                  <li>{item.answer_text}</li>
                )
              })
            }
          </ul>
        );
      },
    },
    {
      Header: "Action",
      Cell: (cell) => {
        return (
          <>
            <UncontrolledDropdown>
              <DropdownToggle
                className="btn btn-light btn-sm"
                tag="button"
                data-bs-toggle="dropdown"
                direction="start"
              >
                <i className="bx bx-dots-horizontal-rounded"></i>
              </DropdownToggle>
              <DropdownMenu className="dropdown-menu-end">
                <DropdownItem>
                <button
                  onClick={()=>{
                    setrowdata({...cell.cell.row.original});
                    setIsModalOpen(true);
                    let alldatapushed=[];
                    // setallanswers([...cell.cell.row.original.arrAns]);
                    for(let i=0 ;i<cell.cell.row.original?.arrAns?.length;i++){
                  let obj={
                    id:i+1,
                    answer:cell.cell.row.original?.arrAns[i].answer_text,
                    checked:cell.cell.row.original?.arrAns[i]?.answer_score=="true"?true:false,
                  }
                  alldatapushed.push(obj)
                  // console.log(alldatapushed)
                  // console.log(obj)
                  setallanswers([...alldatapushed]);
                }
                  }}
                className='' style={{ width:'100%',backgroundColor:'transparent' }}>Update</button>
                </DropdownItem>
              
              </DropdownMenu>
            </UncontrolledDropdown>
          </>
        );
      },
    },
  ];
  const handleeditques=()=>{
    let answers='';
    for(let i=0;i<allanswers?.length;i++){
      if(i==0){
        answers+=allanswers[i].answer;
      }
      else {
        answers+="***matary***"+allanswers[i].answer;
      }
    }
    const data_send={
      question_id:rowdata.question_id,
      question_text:rowdata.qustion_text,
      answers
    }
    // console.log(rowdata)
    // console.log(data_send)
    axios.post("https://elmatary.com/El_Matary_Platform/platform/admin/live_poll/update_live_poll_question.php",JSON.stringify(data_send))
    .then((res)=>{
      if(res.status=='success'){
        handleupdate()
        toast.success("Question Has Uptaded Successfully");
      }
      else if(res.status=='error'){
        toast.error("Opps Question Has not Uptaded");
      }
    }).catch(err=>console.log(err))
  }
  const handlesavetxt = (e, i,id) => {
    const list = [...allanswers];
    list[i]['answer'] = e.target.value;
    setallanswers(list);
  }
  return (
    <React.Fragment>
      <TableContainer
        columns={columns}
        data={questions}
        isGlobalFilter={true}
        customPageSize={10}
        className="Invoice table"
      />
        <Modal title="Edit question" isOpen={isModalOpen}>
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
              // handleaddquestion()
              handleeditques()
              setIsModalOpen(false)
            }}
          >
            <CloseButton
              onClick={() => setIsModalOpen(false)}
              style={{ marginLeft: "auto" }}
            />

            <div className="inputField withtext">
              <label htmlFor="exam_name">Question Title</label>
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
                // required
                value={rowdata.qustion_text}
                onChange={(e)=>{
                  setrowdata({...rowdata,qustion_text:e.target.value})
                  // setexamdata({...examdata,exam_name:e.target.value})
                }}
              />
            </div>
            <div className="inputField withtext">
              <label style={{
                display:'flex',
                alignItems:'center',
                justifyContent:'space-between'
               }} htmlFor="exam_name">
                <span>Add new Answer</span>
                <span

                  style={{
                    fontSize:'30px',
                    cursor:'pointer'
                   }}
                  onClick={()=>{
                    setallanswers([...allanswers,{
                      id:allanswers.length+1,
                      checked:false,
                      answer_value:''
                    }])
                  }}
                >+</span>
              </label>
              {
                allanswers?.map((item,index)=>{
                  return(
                    <div style={{ display:'flex',alignItems:'center',justifyContent:'space-between' }}>
                      <textarea value={item.answer} onChange={(e)=>{
                      handlesavetxt(e,index)
                    }} style={{ marginBottom:'10px',width:'100%' }} className="form-control"></textarea>
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
              Edit Question{" "}
            </button>
          </form>
            </Modal>
            <ToastContainer/>
    </React.Fragment>
  );
};

export default LiveQuestionTable;
