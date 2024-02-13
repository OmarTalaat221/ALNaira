import React, { useEffect, useState } from "react";
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
  ModalHeader,
  ModalBody,
  Form,
  Label,
  Input,
  FormFeedback,
  CloseButton,
} from "reactstrap";
import Breadcrumbs from "../../components/Common/Breadcrumb";
import "flatpickr/dist/themes/material_blue.css";
import Flatpickr from "react-flatpickr";
import LessonsTableList from "../Lessons/LessonsTabel/LessonsTableList";
import { useCallback } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import QuestionsTableList from "../Lessons/LessonsTabel/QuestionsTableList";
import { AiOutlinePlus } from "react-icons/ai";
import { Button, Loader } from "rsuite";
import ReactQuill from "react-quill";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import Confirm from "../../components/ConfComp/Confirm";
import { MenuItem, Select } from "@mui/material";
const WrittenQuestions = ({ CourseId, allunitdata, unitId, cd }) => {
  const [type, setType] = useState(false);
  const [videoLink, setVideoLink] = useState(false);
  const [showconf, setshowconf] = useState(false);
  const [rowdata, setrowdata] = useState({});
  // console.log(data)
  const [modal, setModal] = useState(false);
  const toggle = useCallback(() => {
    if (modal) {
      setModal(false);
    } else {
      setModal(true);
    }
  }, [modal]);

  const addQuestion = async (e) => {
    const questions = [...questionslist];
    // console.log(tweets)
    let questionstxt = '';
    for (let i = 0; i < questions.length; i++) {
      if (i == 0) {
        questionstxt += questions[i]?.wq_value;
      }
      else {
        questionstxt += '//camp//' + questions[i]?.wq_value + '//camp//';
      }
    }

    const en = (questionstxt.split("</p>").join("").replace(/<\/p><p>/g, '//camp//').replace(/<p>/g, '').replace(/<\/p>/g, '').replace(/<br>/g, '').replace(/<p>/g, '').replace(/<strong>/g, '<B>').replace(/<\/strong>/g, '</B>'));
    // </p><p>
    console.log(en)
    // console.log("original after : ", en.replace(/\/\/camp\/\//g, '<p><br></p>').replace(/<B>/g, '<strong>').replace(/<\/B>/g, '</strong>'));

    const data_send = {
      "wq_value": en,
      "wq_title": e.currentTarget.question_title.value,
      "course_id": CourseId,
      "unit_id": unitId
    }
    console.log("Edit", data_send)
    const add = await axios.post("https://elmatary.com/El_Matary_Platform/platform/admin/wqs/insert_wqs.php", data_send);
    if (add.status == "success") {
      toast.success("Added")
      getQuestions()
      setModal(false);
    } else {
      toast.error(add.message)
    }
  }

  const showHideQuestion = async (row) => {
    const data_send = {
      "hidden_value": row.hidden == "no" ? "yes" : "no",
      "wq_id": row.wq_id,
    }
    const add = await axios.post("https://elmatary.com/El_Matary_Platform/platform/admin/wqs/update_wqs_hidden.php", data_send);
    if (add.status == "success") {
      toast.success(add.message);
      getQuestions()
    } else {
      toast.error(add.message)
    }
  }

  const [wq_data, setWqData] = useState(false);
  const [edit, setEdit] = useState(false);
  const [questions, setQuestions] = useState(false);
  const [item, setItem] = useState(false);
  const [questionslist, setquestionslist] = useState([
    { id: '0', wq_value: '' }
  ])
  const [editedwritten, seteditedwritten] = useState([]);
  const [itemLoader, setItemLoader] = useState(false);
  const getQuestions = async () => {
    setItemLoader(true)
    const data_send = {
      "course_id": CourseId,
      "unit_id": unitId
    }
    const get = await axios.post("https://elmatary.com/El_Matary_Platform/platform/admin/wqs/select_question.php", data_send)
    setQuestions(get.message);
    setItemLoader(false)
  }
  const showHideQuestions = async (send_data) => {
    const questions_1 = await axios.post("https://elmatary.com/El_Matary_Platform/platform/admin/wqs/update_wqs_hidden.php", send_data);
    if (questions_1.status == "success") {
      toast.success(questions_1.message);
      await getQuestions();
      setEdit(false)
    } else {
      toast.error(questions_1.message);
    }
  }

  const editQuestion = async (e) => {

    const questions = [...editedwritten];
    let questionstxt = '';
    for (let i = 0; i < questions.length; i++) {
      if (i == 0) {
        questionstxt += questions[i]?.wq_value;
      }
      else {
        questionstxt += '//camp//' + questions[i]?.wq_value + '//camp//';
      }
    }

    const en = (questionstxt.split("</p>").join("").replace(/<\/p><p>/g, '//camp//').replace(/<p>/g, '').replace(/<\/p>/g, '').replace(/<br>/g, '').replace(/<p>/g, '').replace(/<strong>/g, '<B>').replace(/<\/strong>/g, '</B>'));
    const data_send = {
      "course_id": CourseId,
      "unit_id": unitId,
      "wq_value": en ? en : item.wq_value,
      "wq_title": e.currentTarget.question_title.value ? e.currentTarget.question_title.value : item.wq_title,
      "wq_id": item.wq_id
    }
    const edit = await axios.post("https://elmatary.com/El_Matary_Platform/platform/admin/wqs/update_wqs_info.php", data_send)

    if (edit.status == "success") {
      toast.success(edit.message);
      await getQuestions();
      setEdit(false);
    } else {
      toast.error(edit.message);
    }
  }

  const [Courses, setCourses] = useState(false);
  const [showCopy, setsetShowCopy] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState(false);
  const [selectedUnit, setSelectedUnit] = useState(false);
  const [selectedFlashCard, setFlashCard] = useState(false);
  const [Units, setUnits] = useState(false);
  const getCourses = async () => {
    const courses = await axios.get("https://elmatary.com/El_Matary_Platform/platform/admin/courses/select_courses.php");
    setCourses([...courses])
  }
  useEffect(() => {
    getCourses()
  }, []);
  const getUnits = async () => {
    const send_data = {
      course_id: selectedCourse
    };
    try {
      const units = await axios.post("https://elmatary.com/El_Matary_Platform/platform/admin/courses/select_course_units.php", send_data);
      setUnits([...units]);
    } catch (err) {
      console.log(err);
    }
  }
  useEffect(() => {
    getUnits();
  }, [selectedCourse])

  const [view, setView] = useState(false)
  useEffect(() => { getQuestions() }, [])
  const columns =
    [
      {
        Header: "No",
        Cell: (cell) => {
          return (
            <b>
              {cell.cell.row.index + 1}
            </b>
          )
        }
      },
      {
        Header: 'Question title',
        accessor: 'wq_title',
      },
      {
        Header: 'Question Answer',
        Cell: (cell) => {
          return <p>
            {cell.cell.row.original.wq_value?.split("//camp//")?.map((item, index) => {
              if (index < 4) {
                return (
                  <p dangerouslySetInnerHTML={{ __html: item }}></p>
                )
              }
              else return null
            })}
          </p>
        }
      },
      {
        Header: 'view',
        Cell: (cell) => {
          return <button className="btn btn-primary" onClick={() => { setView(true); setItem(cell.cell.row.original) }}>
            View
          </button>
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
                <Visibility className="shown" />
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
        Header: 'Action',
        Cell: (cell) => {
          return (
            <>
              <UncontrolledDropdown>
                <DropdownToggle className="btn btn-light btn-sm" tag="button" data-bs-toggle="dropdown" direction="start">
                  <i className="bx bx-dots-horizontal-rounded"></i>
                </DropdownToggle>
                <DropdownMenu className="dropdown-menu-end">
                  <DropdownItem onClick={() => {
                    setEdit(true);
                    setItem(cell.cell.row.original);
                    let push1 = [];
                    let pusharr = [];

                    let tweetslist = cell.cell.row.original.wq_value.split('//camp//');
                    for (let k = 0; k < tweetslist.length; k++) {
                      if (tweetslist[k] !== "") {
                        push1.push(tweetslist[k])
                      }
                    }

                    for (let i = 0; i < push1.length; i++) {
                      let obj = {
                        id: i,
                        wq_value: push1[i]
                      }
                      pusharr = [...pusharr, obj]
                      if (obj.id !== "") {
                        seteditedwritten([...editedwritten, obj]);
                      }
                    }
                    seteditedwritten(pusharr);

                  }}>Edit</DropdownItem>

                  <DropdownItem onClick={() => {
                    setsetShowCopy(true)
                    setFlashCard(cell.cell.row.original.wq_id);
                  }
                  }>Copy</DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </>
          )
        }
      },
    ]

  const handlecopyitem = (data) => {
    const data_send = {
      wq_id: selectedFlashCard,
      course_id: selectedCourse,
      unit_id: selectedUnit,
    }
    console.log(data_send)
    axios.post("https://elmatary.com/El_Matary_Platform/platform/admin/wqs/make_copy_from_wqs.php", JSON.stringify(data_send))
      .then((res) => {
        if (res.status == 'success') {
          toast.success(res.message);
          getQuestions();
        }
        else if (res.status == 'error') {
          toast.error(res.message);
        }
        else {
          toast.error("Something Went Error");
        }
      })
  }
  const handlesavetxt = (e, i, txt) => {
    console.log(i)
    console.log(e)
    // console.log(i)
    // console.log(txt)
    // console.log(e);
    const list = [...questionslist];
    list[i][txt] = e;
    setquestionslist(list);
    // console.log(list)
  }
  const handlesavetxtedit = (e, i, txt) => {
    console.log(i)
    console.log(e)
    // console.log(i)
    // console.log(txt)
    // console.log(e);
    const list = [...editedwritten];
    list[i][txt] = e;
    setquestionslist(list);
    // console.log(list)
  }
  return (
    <React.Fragment>
      <Container fluid={true}>
        <Breadcrumbs title={cd.course_name} breadcrumbItem={allunitdata.unit_name + " > questions List"} />

        <Row>
          <Col lg={12}>
            <Card>
              <CardBody>
                <div className="position-relative">
                  <div className="modal-button mt-2">
                    <Row className="align-items-start">
                      <Col className="col-sm">
                        <div>
                          <button
                            type="button"
                            className="btn btn-success mb-4"
                            data-bs-toggle="modal"
                            data-bs-target="#addCourseModal"
                            onClick={() => {
                              // showModal()
                              setModal(true);
                            }}
                          >
                            <i
                              onClick={() => {
                                setModal(true);
                              }}
                              className="mdi mdi-plus me-1"
                            ></i>{" "}
                            Add Written Question
                          </button>
                        </div>
                      </Col>

                    </Row>
                  </div>
                </div>
                <div id="table-invoices-list">

                  {itemLoader ? <Loader /> : <>
                    {questions && questions.length ? <QuestionsTableList showHideQuestion={showHideQuestion} data={questions} columns={columns} /> : <h4>No Questions</h4>}
                  </>}

                </div>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle} tag="h4">
          Add New Written Question
        </ModalHeader>
        <ModalBody>
          <Form
            onSubmit={(e) => {
              e.preventDefault();
              addQuestion(e)
              return false;
            }}
          >
            <Row>
              <Col md={12}>
                <div className="mb-3">
                  <Label className="form-label">Question Title</Label>
                  <Input type="text" name="question_title" />
                </div>
                <div className="mb-3">
                  <div className="add_newanstwee">
                    <Label className="form-label">Answer</Label>
                    <AiOutlinePlus
                      onClick={() => {
                        setquestionslist([...questionslist, { id: questionslist.length, wq_value: "" }])
                      }}
                    />
                  </div>
                  {
                    questionslist.map((item, index) => {
                      return (
                        <div className="tweet_ans">
                          <ReactQuill
                            theme='snow'
                            value={item.wq_value}
                            onChange={(e) => {
                              // console.log(item.id);
                              handlesavetxt(e, index, 'wq_value');
                            }}
                          />
                          {index !== 0 ?
                            (<Button onClick={() => {
                              // console.log(item.id)
                              setquestionslist(questionslist.filter((it) => item.id !== it.id))
                            }} color="red" appearance="primary">
                              Delete
                            </Button>)
                            :
                            (null)
                          }
                        </div>
                      )
                    })
                  }
                </div>
              </Col>
            </Row>
            <Row>
              <Col>
                <div className="text-end">
                  <button type="submit" className="btn btn-success save-user">
                    Save
                  </button>
                </div>
              </Col>
            </Row>
          </Form>
        </ModalBody>
      </Modal>


      <Modal isOpen={edit} toggle={() => setEdit(false)}>
        <ModalHeader toggle={() => setEdit(false)} tag="h4">
          Edit Written Question
        </ModalHeader>
        <ModalBody>
          <Form
            onSubmit={(e) => {
              e.preventDefault();
              editQuestion(e)
              return false;
            }}
          >
            <Row>
              <Col md={12}>
                <div className="mb-3">
                  <Label className="form-label">Question Title</Label>
                  <Input type="text" name="question_title" defaultValue={item?.wq_title} />
                </div>
                <div className="mb-3">
                  <div className="add_newanstwee">
                    <Label className="form-label">Answer</Label>
                    <AiOutlinePlus
                      onClick={() => {
                        seteditedwritten([...editedwritten, { id: editedwritten.length, wq_value: "" }])
                      }}
                    />
                  </div>
                  {
                    editedwritten.map((item, index) => {
                      return (
                        <div className="tweet_ans">
                          {console.log(item, "Ererer")}
                          <ReactQuill
                            theme='snow'
                            value={item.wq_value}
                            onChange={(e) => {
                              // console.log(item.id);
                              handlesavetxtedit(e, index, 'wq_value');
                            }}
                            style={{ minHeight: '300px' }}
                          />
                          {index !== 0 ?
                            (<Button onClick={() => {
                              // console.log(item.id)
                              seteditedwritten(editedwritten.filter((it) => item.id !== it.id))
                            }} color="red" appearance="primary">
                              Delete
                            </Button>)
                            :
                            (null)
                          }
                        </div>
                      )
                    })
                  }
                </div>
              </Col>
            </Row>
            <Row>
              <Col>
                <div className="text-end">
                  <button type="submit" className="btn btn-success save-user">
                    Save
                  </button>
                </div>
              </Col>
            </Row>
          </Form>
        </ModalBody>
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
                wq_id: rowdata.wq_id
              }
              showHideQuestions(send_data)
              setshowconf(false);
            }}
            status={rowdata.hidden == 'no' ? 'hide' : 'show'}
            comp={'unit'} />
        ) : (null)
      }
      <Modal isOpen={showCopy}>
        <ModalHeader
          tag="h4">
          <div style={{ display: "flex", justifyContent: "space-between", width: "100%", alignItems: "center" }}>
            <h4>  Copy Written Question To Unit </h4>
            <CloseButton onClick={
              () => {
                setsetShowCopy(false);
                setSelectedCourse(false)
                setUnits(false);
              }
            }
              style={
                { marginLeft: "auto" }
              } />
          </div>
        </ModalHeader>
        <ModalBody>

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
                handlecopyitem(e);
              }
            }>

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
            </div>
            {
              selectedCourse && Units && Units.length ? <div className="input_Field">
                <Select style={
                  {
                    width: "100%",
                    borderRadius: "4px",
                    margin: "10px 0"
                  }
                }
                  type="text"
                  name="unit_id"
                  id="unit_id"
                  placeholder="Choose Unit"
                  onChange={(e) => setSelectedUnit(e.target.value)}
                  required>
                  {
                    Units.map((item, index) => {
                      return <MenuItem value={item.unit_id} key={index}>{item.unit_name}</MenuItem>
                    })
                  }
                </Select>
              </div> : <h3>No Units In Course</h3>}
            <button className="btn btn-success"
              style={
                { margin: "10px 0 0 auto" }
              }>
              {" "}
              Assign To Unit{" "} </button>
          </form>

        </ModalBody>
      </Modal>

      <Modal isOpen={view} toggle={() => setView(false)}>
        <ModalHeader toggle={() => setView(false)} tag="h4">
          Written Question
        </ModalHeader>
        <ModalBody>
          <Form
            onSubmit={(e) => {
              e.preventDefault();
            }}
          >
            <Row>

              <Col md={12}>
                <div>
                  <div>
                    <h3> {item?.wq_title} </h3>
                    <p>
                      {item?.wq_value?.split("//camp//")?.map((item, index) => {
                        if (index < 4) {
                          return (
                            <p dangerouslySetInnerHTML={{ __html: item }}></p>
                          )
                        }
                        else return null
                      })}
                    </p>
                  </div>
                </div>

              </Col>
            </Row>
          </Form>
        </ModalBody>
      </Modal>
    </React.Fragment>
  );
};

export default WrittenQuestions;
