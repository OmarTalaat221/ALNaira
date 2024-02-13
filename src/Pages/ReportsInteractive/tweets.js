// import RichTextEditor from 'react-richtext';
import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import './tweets.css'
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
import Dropzone from "react-dropzone";
import { Loader } from "rsuite";
import { toast } from "react-toastify";
import axios from "axios"
import { useEffect } from "react";
import TweetsTableList from "../Lessons/LessonsTabel/TweetsTableList";
import { Button } from "rsuite";
import { AiOutlinePlus } from "react-icons/ai";
import ReactQuill from "react-quill";
import { Visibility, VisibilityOff, WhatsApp } from "@mui/icons-material";
import Confirm from "../../components/ConfComp/Confirm";
import { MenuItem, Select } from "@mui/material";
const Tweets = ({ CourseId, unitId, allunitdata, cd }) => {
  const [type, setType] = useState(false);
  const [videoLink, setVideoLink] = useState(false);
  const [twetslistedit, settwetslistedit] = useState([]);
  const [tweetsedis, settweetsedis] = useState([]);
  // console.log(data)
  const [modal, setmodal] = useState(false);
  const [tweetanswerlist, settweetanswerlist] = useState([
    { id: '0', tweet_value: '' }
  ]);
  const [edittweets, setedittweets] = useState([]);
  const [writelist, settwritelist] = useState([
    { id: '0', tweet_value: '' }
  ]);
  /* ====================   Files   ===================*/
  const [selectedFiles, setselectedFiles] = useState([]);
  const [rowdata, setrowdata] = useState({});
  const [showconf, setshowconf] = useState(false);

  function handleAcceptedFiles(files) {
    files.map((file) =>
      Object.assign(file, {
        preview: URL.createObjectURL(file),
        formattedSize: formatBytes(file.size),
      })
    );
    setselectedFiles(files);
  }

  /**
   * Formats the size
   */
  function formatBytes(bytes, decimals = 2) {
    if (bytes === 0) return "0 Bytes";
    const k = 1024;
    const dm = decimals < 0 ? 0 : decimals;
    const sizes = ["Bytes", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"];

    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + " " + sizes[i];
  }

  function tog_mod() {
    setmodal(!modal);
  }
  /* ====================   Files   ===================*/

  const toggle = useCallback(() => {
    if (modal) {
      setmodal(false);
    } else {
      setmodal(true);
    }
  }, [modal]);

  const [tweet_data, setTweetData] = useState(false);
  const [edit, setEdit] = useState(false);
  const [tweets, setTweets] = useState(false);
  const [item, setItem] = useState(false);
  const [itemLoader, setItemLoader] = useState(false)
  const [itemReport, setItemReport] = useState(false);
  const [studata,setstudata]=useState({});
  const getTweets = async () => {
    setItemLoader(true)
    const data_send = {
      "course_id": CourseId,
      "unit_id": unitId
    }
    const get = await axios.post("https://elmatary.com/El_Matary_Platform/platform/admin/tweets/select_tweets.php", data_send)
    setTweets(get.message);
    setItemLoader(false)
  }
  const addTweet = async (e) => {
    // console.log(tweetanswerlist);
    const tweets = [...tweetanswerlist];
    // console.log(tweets)
    let tweetstxt = '';
    for (let i = 0; i < tweets.length; i++) {
      if (i == 0) {
        tweetstxt += tweets[i]?.tweet_value;
      }
      else {
        tweetstxt += '//camp//' + tweets[i]?.tweet_value + '//camp//';
      }
    }
    const en = (tweetstxt.split("</p>").join("").replace(/<p>/g, '//camp//').replace(/<\/p><p>/g, '').replace(/<br>/g, '')
    .replace(/<p>/g, '').replace(/<\/p>/g, '//camp//').replace(/<strong>/g, '<B>').replace(/<\/strong>/g, '</B>'));
    const data_send = {
      "tweet_value": en,
      "tweet_title": e.currentTarget.tweet_title.value,
      "course_id": CourseId,
      "unit_id": unitId
    }
    // console.log(data_send);
    console.log(data_send);
    const add = await axios.post("https://elmatary.com/El_Matary_Platform/platform/admin/tweets/insert_tweets.php", data_send);
    console.log(add);
    if (add.status == "success") {
      toast.success("Added");
      await getTweets();
      setmodal(false)
    } else {
      toast.error(add.message)
    }
  }
  const showHideTweets = async (send_data) => {
    const tweets_1 = await axios.post("https://elmatary.com/El_Matary_Platform/platform/admin/tweets/update_tweets_hidden.php", send_data);
    console.log(send_data);
    if (tweets_1.status == "success") {
      toast.success(tweets_1.message);
      await getTweets();
      setEdit(false)
    } else {
      toast.error(tweets_1.message);
    }
  }
  const [convertedText, setConvertedText] = useState("");

  const editTweet = async (e) => {

    const tweets = [...edittweets];
    // console.log(tweets)
    let tweetstxt = '';
    for (let i = 0; i < tweets.length; i++) {
      if (i == 0) {
        tweetstxt += tweets[i]?.tweet_value;
      }
      else {
        tweetstxt += '//camp//' + tweets[i]?.tweet_value + '//camp//';
      }
    }
    const en = (tweetstxt.split("</p>").join("").replace(/<\/p><p>/g, '//camp//').replace(/<p>/g, '').replace(/<\/p>/g, '').replace(/<br>/g, '').replace(/<p>/g, '').replace(/<strong>/g, '<B>').replace(/<\/strong>/g, '</B>'));
    const data_send = {
      "course_id": CourseId,
      "unit_id": unitId,
      "tweet_value": en ? en : item.tweet_value,
      "tweet_title": e.currentTarget.tweet_title.value ? e.currentTarget.tweet_title.value : item.tweet_title,
      "tweet_id": item.tweet_id
    }


    const edit = await axios.post("https://elmatary.com/El_Matary_Platform/platform/admin/tweets/update_tweet_info.php", data_send)

    if (edit.status == "success") {
      toast.success(edit.message);
      await getTweets();
      setEdit(false);
      getReports();
      setShowSolve(true);

    } else {
      toast.error(edit.message);
    }
  }
  useEffect(() => { getTweets() }, []);
  const [Courses, setCourses] = useState(false);
  const [showCopy, setsetShowCopy] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState(false);
  const [selectedUnit, setSelectedUnit] = useState(false);
  const [selectedFlashCard, setFlashCard] = useState(false);
  const [Units, setUnits] = useState(false);
  const [studentdata,setstudentdata]=useState({});
  const getReports = async () => {
    setItemLoader(true)
    const reports = await axios.post("https://elmatary.com/El_Matary_Platform/platform/admin/reports/select_reports.php", {
      "report_for": "tweets"
    });
    console.log(CourseId)
    console.log(reports)
    setItemReport(reports?.message?.filter(item => item?.course_id == CourseId)?.filter(item => item?.status == "pending"));
    setItemLoader(false);
  }
  useEffect(() => {
    getReports();
  }, [])
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

  const getstudentdata=(id)=>{
    const data_send={
      studnet_id:item.studnet_id
    }
    axios.post("https://elmatary.com/El_Matary_Platform/platform/admin/students/select_studnet_info.php",JSON.stringify(data_send))
    .then((res)=>{
      console.log(res);
      setstudentdata(res.message);
    }).catch(err=>console.log(err))
  }


  useEffect(() => {
    getUnits();
    // getstudentdata();
  }, [selectedCourse])
  const [view, setView] = useState(false)
  const [showSolve, setShowSolve] = useState(false);

  const handleSolveReport = () => {
    axios.post("https://elmatary.com/El_Matary_Platform/platform/admin/reports/update_report_status.php", { report_id: item.report_id }).then((res) => {
      if (res.status == "success") {
        toast.success("Solved");
        getReports();
        setShowSolve(false);

      } else {
        toast.error(res.message);
      }
    }).catch((err) => {
      toast.error(err.message)
    })
  }
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
    },
    {
      Header: 'Report Type',
      accessor: 'report_type',
    },
    {
      Header: 'View Student',
      Cell: (cell) => {
        return <button className="btn btn-primary" onClick={() => { setView(true); setItem(cell.cell.row.original);setstudata(cell.cell.row.original?.student_data);getstudentdata(cell.cell.row.original?.student_data?.student_id) }}>
          View
        </button>
      }
    },
    {
      Header: 'Status',
      Cell: (cell) => {
        switch (cell.cell.row.original.hidden) {
          case 'pending':
            return <div style={{ cursor: 'pointer' }}>
              Pending
            </div>;
          case 'solved':
            return <div style={{ cursor: 'pointer' }}>
              Solved
            </div>;

          default:
            return <span className="badge badge-pill badge-soft-success font-size-12">
              {
                cell.cell.row.original.status
              }</span>
        }
      }
    },
    {
      Header: 'Concat With Student',
      Cell: (cell) => {
        return <a href={"https://wa.me/+2" + cell?.cell?.row?.original?.student_data?.phone} target="_blanck" style={{ color: "green", display: "block", width: "100%", textAlign: "center", fontSize: "22px", height: "100%" }}><WhatsApp /></a>
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
                  setShowSolve(true);
                  setItem(cell.cell.row.original)
                }}>Set As Solved</DropdownItem>
                <DropdownItem
                  onClick={() => {
                    setEdit(true);
                    setItem(cell.cell.row.original?.report_item_data);
                    // console.log(cell.cell.row.original)
                    // let tweet_value=cell.cell.row.original.tweet_value;
                    let push1 = [];
                    let pusharr = [];
                    let tweetslist = cell.cell.row.original?.report_item_data?.tweet_value.split('//camp//');
                    for (let k = 0; k < tweetslist.length; k++) {
                      if (tweetslist[k] !== "") {
                        push1.push(tweetslist[k])
                      }
                    }
                    for (let i = 0; i < push1.length; i++) {
                      let obj = {
                        id: i,
                        tweet_value: push1[i]
                      }
                      console.log(obj)
                      pusharr = [...pusharr, obj]
                      if (obj.id !== "") {
                        setedittweets([...edittweets, obj]);
                      }
                    }
                    setedittweets(pusharr);
                    // console.log(pusharr);
                    // settwetslistedit()
                    // settwetslistedit([...pushedlist])
                  }}
                >
                  Edit
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </>
        )
      }
    },
  ];
  const handlecopyitem = (data) => {
    const data_send = {
      tweet_id: selectedFlashCard,
      course_id: selectedCourse,
      unit_id: selectedUnit,
    }
    console.log(data_send)
    axios.post("https://elmatary.com/El_Matary_Platform/platform/admin/tweets/make_copy_from_tweets.php", JSON.stringify(data_send))
      .then((res) => {
        if (res.status == 'success') {
          toast.success("Copied");
          getTweets();
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
    // console.log(i)
    // console.log(txt)
    // console.log(e);
    const list = [...tweetanswerlist];
    list[i][txt] = e;
    settweetanswerlist(list);
  }
  const handlesavetxtedit = (e, i, txt) => {
    // console.log(i)
    // console.log(txt)
    // console.log(e);
    const list = [...edittweets];
    list[i][txt] = e;
    setedittweets(list);
  }
  return (
    <React.Fragment>
      <Container fluid={true}>

        <Row>
          <Col lg={12}>
            <Card>
              <CardBody>

                <div id="table-invoices-list">

                  {itemLoader ? <Loader /> : <>
                    {itemReport && itemReport.length ? <TweetsTableList showHideTweet={showHideTweets} data={itemReport} columns={columns} /> : <h4>No Report</h4>}
                  </>}

                </div>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle} tag="h4">
          Add New Tweet
        </ModalHeader>
        <ModalBody>
          <Form
            onSubmit={(e) => {
              e.preventDefault();
              addTweet(e)
              return false;
            }}
          >
            <Row>
              <Col md={12}>
                <div className="mb-3">
                  <Label className="form-label">Tweet Title</Label>
                  <Input name="tweet_title" type="text" />
                </div>
                <div className="mb-3">
                  <div className="add_newanstwee">
                    <Label className="form-label">Answer</Label>
                    <AiOutlinePlus
                      onClick={() => {
                        settweetanswerlist([...tweetanswerlist, { id: tweetanswerlist.length, tweet_value: "" }])
                      }}
                    />
                  </div>
                  {
                    tweetanswerlist.map((item, index) => {
                      return (
                        <div className="tweet_ans">
                          <ReactQuill
                            theme='snow'
                            value={item.tweet_value}
                            onChange={(e) => {
                              // console.log(item.id);
                              handlesavetxt(e, index, 'tweet_value');
                            }}
                            style={{ minHeight: '300px' }}
                          />
                          {index !== 0 ?
                            (<Button onClick={() => {
                              // console.log(item.id)
                              settweetanswerlist(tweetanswerlist.filter((it) => item.id !== it.id))
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
          Edit Written Tweet
        </ModalHeader>
        <ModalBody>
          <Form
            onSubmit={(e) => {
              e.preventDefault();
              editTweet(e)
              return false;
            }}
          >
            <Row>
              <Col md={12}>
                <div className="mb-3">
                  <Label className="form-label">Tweet Title</Label>
                  <Input type="text" name="tweet_title" defaultValue={item?.tweet_title} />
                </div>
                <div className="mb-3">
                  <div className="add_newanstwee">
                    <Label className="form-label">Answer</Label>
                    <AiOutlinePlus
                      onClick={() => {
                        setedittweets([...edittweets, { id: edittweets.length, tweet_value: "" }])
                      }}
                    />
                  </div>
                  {/* <textarea
                    style={{ height: "100px" }}
                    id="hours"
                    name="tweet_answar"
                    placeholder="Enter Explanation"
                    type="number"
                    className="form-control"
                    defaultValue={item?.tweet_value}
                  ></textarea> */}
                  {/* {console.log(tweetsedis,"dfdf")} */}
                  {
                    edittweets.map((item, index) => {
                      return (
                        <div className="tweet_ans">
                          {console.log(item, "Ererer")}
                          <ReactQuill
                            theme='snow'
                            value={item.tweet_value}
                            onChange={(e) => {
                              // console.log(item.id);
                              handlesavetxtedit(e, index, 'tweet_value');
                            }}
                            style={{ minHeight: '300px' }}
                          />
                          {index !== 0 ?
                            (<Button onClick={() => {
                              // console.log(item.id)
                              setedittweets(edittweets.filter((it) => item.id !== it.id))
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
                tweet_id: rowdata.tweet_id
              }
              showHideTweets(send_data)
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
            <h4>  Copy Tweet To Unit </h4>
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
                    return <MenuItem value={item.course_id} key={index}>{item.course_name}  - {item.university_name} - {item.grade_name}</MenuItem>
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
                      return <MenuItem value={item.unit_id} key={index}>{item?.unit_name}</MenuItem>
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
          Tweet
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
                    <h3> {item?.tweet_title} </h3>
                    <div className="student_infoflash">
                      <img src={studentdata.student_avater_url} alt="" />
                      <div>
                        <h4>{studentdata.student_name}</h4>
                        <p>{studentdata.student_email}</p>
                        <p style={{ display:'flex',alignItems:'center' }}>{studentdata.phone}<a href={"https://wa.me/+2" + studentdata?.phone} target="_blank" style={{ color: "green", display: "block", margin:'0px',width: "100%", textAlign: "center", fontSize: "22px", height: "100%" }}><WhatsApp /></a></p>
                        {studentdata?.university_name&&studentdata?.grade_title?(
                          <p style={{ marginTop:'-4px' }}>{studentdata?.university_name}-{studentdata?.grade_title}</p>
                        ):(null)}

                      </div>
                    </div>
                    <p>
                      {item?.tweet_value?.split("//camp//")?.map((item, index) => {
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
      <Modal isOpen={showSolve}>
        <ModalHeader
          tag="h4">
          <div style={{ display: "flex", justifyContent: "space-between", width: "100%", alignItems: "center" }}>
            <h4>  Solve Reports </h4>
            <CloseButton onClick={
              () => {
                setShowSolve(false);
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
                handleSolveReport(e);
              }
            }>

            <h3 style={{ textAlign: "center" }}> Are You sure Solve This Report ? </h3>

            <button className="btn btn-success"
              style={
                { margin: "10px 0 0 auto" }
              }>
              {" "}
              Set As Solved{" "} </button>
          </form>

        </ModalBody>
      </Modal>
    </React.Fragment>
  );
};

export default Tweets;
