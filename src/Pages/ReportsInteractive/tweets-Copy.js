// import RichTextEditor from 'react-richtext';
import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "./tweets.css";
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
import axios from "axios";
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
    { id: "0", tweet_value: "" },
  ]);
  const [edittweets, setedittweets] = useState([]);
  const [writelist, settwritelist] = useState([{ id: "0", tweet_value: "" }]);
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
  const [itemLoader, setItemLoader] = useState(false);
  const [itemReport, setItemReport] = useState(false);
  const getTweets = async () => {
    setItemLoader(true);
    const data_send = {
      course_id: CourseId,
      unit_id: unitId,
    };
    const get = await axios.post(
      "https://camp-coding.online/Teacher_App_2025/elnaira_jor/admin/tweets/select_tweets.php",
      data_send
    );
    setTweets(get.message);
    setItemLoader(false);
  };
  const addTweet = async (e) => {
    // console.log(tweetanswerlist);
    const tweets = [...tweetanswerlist];
    // console.log(tweets)
    let tweetstxt = "";
    for (let i = 0; i < tweets.length; i++) {
      if (i == 0) {
        tweetstxt += tweets[i]?.tweet_value;
      } else {
        tweetstxt += "//camp//" + tweets[i]?.tweet_value + "//camp//";
      }
    }
    const en = tweetstxt
      .split("</p>")
      .join("")
      .replace(/<p>/g, "//camp//")
      .replace(/<\/p><p>/g, "")
      .replace(/<br>/g, "")
      .replace(/<p>/g, "")
      .replace(/<\/p>/g, "//camp//")
      .replace(/<strong>/g, "<B>")
      .replace(/<\/strong>/g, "</B>");
    const data_send = {
      tweet_value: en,
      tweet_title: e.currentTarget.tweet_title.value,
      course_id: CourseId,
      unit_id: unitId,
    };
    // console.log(data_send);
    console.log(data_send);
    const add = await axios.post(
      "https://camp-coding.online/Teacher_App_2025/elnaira_jor/admin/tweets/insert_tweets.php",
      data_send
    );
    console.log(add);
    if (add.status == "success") {
      toast.success("Added");
      await getTweets();
      setmodal(false);
    } else {
      toast.error(add.message);
    }
  };
  const showHideTweets = async (send_data) => {
    const tweets_1 = await axios.post(
      "https://camp-coding.online/Teacher_App_2025/elnaira_jor/admin/tweets/update_tweets_hidden.php",
      send_data
    );
    console.log(send_data);
    if (tweets_1.status == "success") {
      toast.success(tweets_1.message);
      await getTweets();
      setEdit(false);
    } else {
      toast.error(tweets_1.message);
    }
  };
  const [convertedText, setConvertedText] = useState("");

  const editTweet = async (e) => {
    const tweets = [...edittweets];
    // console.log(tweets)
    let tweetstxt = "";
    for (let i = 0; i < tweets.length; i++) {
      if (i == 0) {
        tweetstxt += tweets[i]?.tweet_value;
      } else {
        tweetstxt += "//camp//" + tweets[i]?.tweet_value + "//camp//";
      }
    }
    const en = tweetstxt
      .split("</p>")
      .join("")
      .replace(/<p>/g, "//camp//")
      .replace(/<\/p><p>/g, "")
      .replace(/<br>/g, "")
      .replace(/<p>/g, "")
      .replace(/<\/p>/g, "//camp//")
      .replace(/<strong>/g, "<B>")
      .replace(/<\/strong>/g, "</B>");
    const data_send = {
      course_id: CourseId,
      unit_id: unitId,
      tweet_value: en ? en : item.tweet_value,
      tweet_title: e.currentTarget.tweet_title.value
        ? e.currentTarget.tweet_title.value
        : item.tweet_title,
      tweet_id: item.tweet_id,
    };

    const edit = await axios.post(
      "https://camp-coding.online/Teacher_App_2025/elnaira_jor/admin/tweets/update_tweet_info.php",
      data_send
    );

    if (edit.status == "success") {
      toast.success(edit.message);
      await getTweets();
      setEdit(false);
    } else {
      toast.error(edit.message);
    }
  };
  useEffect(() => {
    getTweets();
  }, []);
  const [Courses, setCourses] = useState(false);
  const [showCopy, setsetShowCopy] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState(false);
  const [selectedUnit, setSelectedUnit] = useState(false);
  const [selectedFlashCard, setFlashCard] = useState(false);
  const [Units, setUnits] = useState(false);
  const getReports = async () => {
    setItemLoader(true);
    const reports = await axios.post(
      "https://camp-coding.online/Teacher_App_2025/elnaira_jor/admin/reports/select_reports.php",
      {
        report_for: "tweets",
      }
    );
    console.log(CourseId);
    setItemReport(reports?.message);
    setItemLoader(false);
  };
  useEffect(() => {
    getReports();
  }, []);
  const getCourses = async () => {
    const courses = await axios.get(
      "https://camp-coding.online/Teacher_App_2025/elnaira_jor/admin/courses/select_courses.php"
    );
    setCourses([...courses]);
  };
  useEffect(() => {
    getCourses();
  }, []);
  const getUnits = async () => {
    const send_data = {
      course_id: selectedCourse,
    };
    try {
      const units = await axios.post(
        "https://camp-coding.online/Teacher_App_2025/elnaira_jor/admin/courses/select_course_units.php",
        send_data
      );
      setUnits([...units]);
    } catch (err) {
      console.log(err);
    }
  };
  const getTweet = (selectedCourseId) => {};
  useEffect(() => {
    getUnits();
    getTweet();
  }, [selectedCourse]);
  const [view, setView] = useState(false);
  const [showSolve, setShowSolve] = useState(false);

  const handleSolveReport = () => {
    axios
      .post(
        "https://camp-coding.online/Teacher_App_2025/elnaira_jor/admin/reports/update_report_status.php",
        { report_id: item.report_id }
      )
      .then((res) => {
        if (res.status == "success") {
          toast.success("Solved");
        } else {
          toast.error(res.message);
        }
      })
      .catch((err) => {
        toast.error(err.message);
      });
  };
  const columns = [
    {
      Header: "No",
      Cell: (cell) => {
        return <b>{cell.cell.row.index + 1}</b>;
      },
    },
    {
      Header: "Report Type",
      accessor: "report_type",
    },
    {
      Header: "View Student",
      Cell: (cell) => {
        return (
          <button
            className="btn btn-primary"
            onClick={() => {
              setView(true);
              setItem(cell.cell.row.original);
            }}
          >
            View
          </button>
        );
      },
    },
    {
      Header: "Status",
      Cell: (cell) => {
        switch (cell.cell.row.original.hidden) {
          case "pending":
            return <div style={{ cursor: "pointer" }}>Pending</div>;
          case "solved":
            return <div style={{ cursor: "pointer" }}>Solved</div>;

          default:
            return (
              <span className="badge badge-pill badge-soft-success font-size-12">
                {cell.cell.row.original.status}
              </span>
            );
        }
      },
    },
    {
      Header: "Concat With Student",
      Cell: (cell) => {
        return (
          <a
            href={
              "https://wa.me/+2" +
              cell?.cell?.row?.original?.student_data?.phone
            }
            target="_blanck"
            style={{
              color: "green",
              display: "block",
              width: "100%",
              textAlign: "center",
              fontSize: "22px",
              height: "100%",
            }}
          >
            <WhatsApp />
          </a>
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
                <DropdownItem
                  onClick={() => {
                    setShowSolve(true);
                    setItem(cell.cell.row.original);
                  }}
                >
                  Set As Solved
                </DropdownItem>
                <DropdownItem
                  onClick={() => {
                    setEdit(true);
                    setItem(cell.cell.row.original);
                    // console.log(cell.cell.row.original)
                    // let tweet_value=cell.cell.row.original.tweet_value;
                    let push1 = [];
                    let pusharr = [];
                    let tweetslist =
                      cell.cell.row.original.tweet_value.split("//camp//");
                    for (let k = 0; k < tweetslist.length; k++) {
                      if (tweetslist[k] !== "") {
                        push1.push(tweetslist[k]);
                      }
                    }
                    for (let i = 0; i < push1.length; i++) {
                      let obj = {
                        id: i,
                        tweet_value: push1[i],
                      };
                      console.log(obj);
                      pusharr = [...pusharr, obj];
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
        );
      },
    },
  ];
  const handlecopyitem = (data) => {
    const data_send = {
      tweet_id: selectedFlashCard,
      course_id: selectedCourse,
      unit_id: selectedUnit,
    };
    console.log(data_send);
    axios
      .post(
        "https://camp-coding.online/Teacher_App_2025/elnaira_jor/admin/tweets/make_copy_from_tweets.php",
        JSON.stringify(data_send)
      )
      .then((res) => {
        if (res.status == "success") {
          toast.success("Copied");
          getTweets();
        } else if (res.status == "error") {
          toast.error(res.message);
        } else {
          toast.error("Something Went Error");
        }
      });
  };
  const handlesavetxt = (e, i, txt) => {
    // console.log(i)
    // console.log(txt)
    // console.log(e);
    const list = [...tweetanswerlist];
    list[i][txt] = e;
    settweetanswerlist(list);
  };
  const handlesavetxtedit = (e, i, txt) => {
    // console.log(i)
    // console.log(txt)
    // console.log(e);
    const list = [...edittweets];
    list[i][txt] = e;
    setedittweets(list);
  };
  return (
    <React.Fragment>
      <Container fluid={true}>
        <Row>
          <Col lg={12}>
            <Card>
              <CardBody>
                <div className="position-relative">
                  <div className="modal-button mt-2">
                    <Row className="align-items-start"></Row>
                  </div>
                </div>
                <div id="table-invoices-list">
                  {itemLoader ? (
                    <Loader />
                  ) : (
                    <>
                      {itemReport && itemReport.length ? (
                        <TweetsTableList
                          showHideTweet={showHideTweets}
                          data={itemReport}
                          columns={columns}
                        />
                      ) : (
                        <h4>No Reports</h4>
                      )}
                    </>
                  )}
                </div>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>

      <Modal isOpen={view} toggle={() => setView(false)}>
        <ModalHeader toggle={() => setView(false)} tag="h4">
          Tweet Report
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
                    <h3
                      style={{
                        width: "fit-content",
                        padding: "10px 18px 10px 0",
                        borderBottom: ".4px solid #80808054",
                      }}
                    >
                      Report Type : {item?.report_type}
                    </h3>
                  </div>
                  <div>
                    <h5
                      style={{
                        width: "fit-content",
                        padding: "10px 18px 10px 0",
                        borderBottom: ".4px solid #80808054",
                      }}
                    >
                      Tweet Details{" "}
                    </h5>
                    <h3> {item?.tweet_title} </h3>
                    <p>
                      {item?.tweet_value
                        ?.split("//camp//")
                        ?.map((item, index) => {
                          if (index < 4) {
                            return (
                              <p dangerouslySetInnerHTML={{ __html: item }}></p>
                            );
                          } else return null;
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
        <ModalHeader tag="h4">
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              width: "100%",
              alignItems: "center",
            }}
          >
            <h4> Solve Reports </h4>
            <CloseButton
              onClick={() => {
                setShowSolve(false);
              }}
              style={{ marginLeft: "auto" }}
            />
          </div>
        </ModalHeader>
        <ModalBody>
          <form
            action="#"
            style={{
              padding: "15px",
              display: "flex",
              flexDirection: "column",
            }}
            onSubmit={(e) => {
              e.preventDefault();
              handleSolveReport(e);
            }}
          >
            <h3 style={{ textAlign: "center" }}>
              {" "}
              Are You sure Solve This Report ?{" "}
            </h3>

            <button
              className="btn btn-success"
              style={{ margin: "10px 0 0 auto" }}
            >
              {" "}
              Set As Solved{" "}
            </button>
          </form>
        </ModalBody>
      </Modal>
    </React.Fragment>
  );
};

export default Tweets;
