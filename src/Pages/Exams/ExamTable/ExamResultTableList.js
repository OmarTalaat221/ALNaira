import React, { useEffect, useState } from "react";
import {
  Card,
  CardBody,
  Col,
  Container,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Row,
  UncontrolledDropdown
} from "reactstrap";
// import TableContainer from "./../../../../components/Common/TableContainer";
// import { CourseData } from "../../../../CommonData/Data/Course";
import { useLocation, useNavigate } from "react-router-dom";
import TableContainer from "../../../components/Common/TableContainer";
import { ExamData } from "../../../CommonData/Data/Exams";
import moment from "moment";
import axios from "axios";
import Breadcrumbs from "../../../components/Common/Breadcrumb";

const ResultExamListTable = () => {
  const navigate = useNavigate();
  const [exams, setExams] = useState(false);
  const [tabs, setTabs] = useState([
    { id: 1, label: "Examined Students" },
    { id: 2, label: "Not Examined Student" }
  ]);
  const location = useLocation();
  const getExams = () => {
    // "Examined Students"
    axios
      .post(
        selected_tab == "Examined Students"
          ? "https://elmatary.com/El_Matary_Platform/platform/admin/Exams/select_exam_degrees.php"
          : "https://elmatary.com/El_Matary_Platform/platform/admin/Exams/select_exam_unsolved_students.php",
        {
          course_id: location?.state?.course_id,
          exam_id: location?.state?.course_id
        }
      )
      .then((res) => {
        console.log(res, {
          course_id: location?.state?.course_id,
          exam_id: location?.state?.course_id
        });
        setExams(res.message);
      })
      .catch((err) => console.log(err));
  };

  const [selected_tab, setSelectedTab] = useState("Examined Students");

  useEffect(() => {
    getExams();
  }, [selected_tab]);
  // location?.state?.exam_id
  const ex_columns = [
    {
      Header: "Student ID",
      accessor: "student_id",
      Filter: false
    },
    {
      Header: "student_name",
      accessor: "student_name"
      //   Filter: false,
    },
    {
      Header: "student_image",
      Cell: (cell) => {
        return (
          <span>
            <img src={cell.cell.row.original.student_avater_url} alt="" />
          </span>
        );
      },
      Filter: false
    },
    {
      Header: "student_phone",
      accessor: "phone"
      //   Filter: false,
    },

    {
      Header: "date",
      accessor: "date",
      Filter: false
    },
    {
      Header: "Score",
      accessor: "score",
      Filter: false
    },
  ];

  const columns = [
    {
      Header: "Student ID",
      accessor: "student_id",
      Filter: false
    },
    {
      Header: "student_image",
      Cell: (cell) => {
        return (
          <span>
            <img src={cell.cell.row.original?.student_avater_url} alt="" />
          </span>
        );
      },
      Filter: false
    },
    {
      Header: "student_name",
      accessor: "student_name"
      //   Filter: false,
    },
    {
      Header: "student_phone",
      accessor: "phone"
      //   Filter: false,
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
                <DropdownItem>Edit</DropdownItem>
                <DropdownItem
                  onClick={() => {
                    console.log(cell.cell.row.original);
                    const examdata = { ...cell.cell.row.original };
                    navigate("/examquestion", {
                      state: { examdata }
                    });
                  }}
                >
                  Show
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </>
        );
      }
    }
  ];

  return (
    <>
      <>
        <div className="page-content">
          <Container fluid={true}>
            <Breadcrumbs title="Results" breadcrumbItem="Results List" />
            <div className="tabs">
              {tabs.map((item, index) => {
                return (
                  <button
                    className={
                      item.label == selected_tab ? "btn btn-success" : "btn"
                    }
                    onClick={() => setSelectedTab(item.label)}
                  >
                    {item.label}
                  </button>
                );
              })}
            </div>
            <Row>
              <Col lg={12}>
                <Card>
                  <CardBody>
                    <div id="table-invoices-list">
                      {selected_tab == "Examined Students" ? (
                        <>
                          {" "}
                          {exams && exams.length ? (
                            <TableContainer
                              columns={ex_columns}
                              data={exams}
                              isGlobalFilter={true}
                              customPageSize={10}
                              className="Invoice table"
                            />
                          ) : null}
                        </>
                      ) : selected_tab == "Not Examined Student" ? (
                        <>
                          {exams && exams.length ? (
                            <TableContainer
                              columns={columns}
                              data={exams}
                              isGlobalFilter={true}
                              customPageSize={10}
                              className="Invoice table"
                            />
                          ) : null}
                        </>
                      ) : null}
                    </div>
                  </CardBody>
                </Card>
              </Col>
            </Row>
          </Container>
        </div>
      </>
    </>
  );
};

export default ResultExamListTable;
