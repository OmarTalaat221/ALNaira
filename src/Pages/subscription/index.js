import React, { useEffect, useState } from "react";
import { subdata, subcolumns } from "../Tables/advanceTdata";
import DynamicTable from "../Tables/dynamicTable";
import axios from "axios";
import TableContainer from "../../components/Common/TableContainer";
import { Loader } from "rsuite";
import Breadcrumbs from "../../components/Common/Breadcrumb";
import {
  Card,
  CardBody,
  CloseButton,
  Col,
  Container,
  Modal,
  Row,
} from "reactstrap";
import { ToastContainer, toast } from "react-toastify";
function Subscription() {
  const [pageLoading, setPageLoading] = useState(false);
  const [subses, setSubses] = useState(false);
  const getSubs = async () => {
    setPageLoading(true);
    const subs = await axios
      .get(
        "https://camp-coding.online/Teacher_App_2025/elnaira_jor/admin/subscription/select_student_sub.php"
      )
      .finally(() => {
        setPageLoading(false);
      });
    console.log(subs);
    setSubses(subs.message);
  };

  useEffect(() => {
    getSubs();
  }, []);
  const [item, setItem] = useState(false);
  const cancelSub = async (e) => {
    console.log({
      cancel_reason: e?.currentTarget?.cancel_notes?.value,
      subscription_id: item?.subscription_id,
    });
    const subStudent = await axios.post(
      "https://camp-coding.online/Teacher_App_2025/elnaira_jor/admin/subscription/cancel_student_sub.php",
      JSON.stringify({
        cancel_reason: e?.currentTarget?.cancel_notes?.value,
        subscription_id: item?.subscription_id,
      })
    );
    if (subStudent.status == "success") {
      toast.success("Canceled");
      getSubs();
    } else {
      toast.error(subStudent.message);
    }
  };
  const [isModalOpen, setIsModalOpen] = useState(false);
  const columns = [
    {
      Header: "No",
      Cell: (cell) => {
        return (
          <b>
            {console.log(cell.cell.row)}
            {cell.cell.row.index + 1}
          </b>
        );
      },
    },
    {
      Header: "Student Name",
      accessor: "stu_name",
      Filter: false,
    },

    {
      Header: "Student Email",
      accessor: "stu_email",
      Filter: false,
    },

    {
      Header: "Student Phone",
      accessor: "stu_phone",
      Filter: false,
    },

    {
      Header: "Subscription Start Date",
      accessor: "day",
      Filter: false,
    },
    {
      Header: "Subscription End Date",
      accessor: "subscription_end_date",
      Filter: false,
    },
    {
      Header: "Action",
      Cell: (cell) => {
        return (
          <button
            className="btn btn-danger"
            onClick={() => {
              setItem(cell.cell.row.original);
              setIsModalOpen(true);
            }}
          >
            {" "}
            Cancel{" "}
          </button>
        );
      },
    },

    // setItem
  ];

  return (
    <>
      <div className="page-content">
        <Container fluid={true}>
          {/* breadcrumbItem={loation?.state?.coursedata?.course_name + " Unit List"} */}
          <Breadcrumbs
            title="Subscription"
            breadcrumbItem={"Subscription List"}
          />
          <Row>
            <Col lg={12}>
              <Card>
                <CardBody>
                  {pageLoading ? (
                    <Loader />
                  ) : subses && subses.length ? (
                    <TableContainer
                      columns={columns}
                      data={subses}
                      isGlobalFilter={true}
                      customPageSize={10}
                      className="Invoice table"
                    />
                  ) : !subses.length ? (
                    <h2>No Subscriptions</h2>
                  ) : (
                    <Loader />
                  )}
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
        <Modal title="Cancel subscription" isOpen={isModalOpen}>
          <form
            action="#"
            style={{
              padding: "15px",
              display: "flex",
              flexDirection: "column",
            }}
            onSubmit={(e) => {
              e.preventDefault();
              cancelSub(e);
              setIsModalOpen(false);
            }}
          >
            <div className="modal-header">
              <h5 className="modal-title" id="orderdetailsModalLabel">
                {" "}
                Are You Sure Cancel subscription For Student{" "}
                <span style={{ fontWeight: "700", color: "red" }}>
                  ({item?.stu_name}) ?
                </span>{" "}
              </h5>
              <CloseButton
                onClick={() => setIsModalOpen(false)}
                style={{ marginLeft: "auto" }}
              />
            </div>
            <textarea
              name="cancel_notes"
              id=""
              cols="30"
              rows="10"
              placeholder="Notes"
              style={{ padding: "10px", outline: "none" }}
            ></textarea>
            <button
              className="btn btn-danger"
              style={{ margin: "10px 0 0 auto" }}
            >
              {" "}
              Cancel subscription{" "}
            </button>
          </form>
        </Modal>
        <ToastContainer />
      </div>
    </>
  );
}

export default Subscription;
