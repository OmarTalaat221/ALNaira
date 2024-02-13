import React, { useEffect, useState } from "react";
import { subdata, subcolumns } from "../Tables/advanceTdata";
import DynamicTable from "../Tables/dynamicTable";
import axios from "axios";
import TableContainer from "../../components/Common/TableContainer";
import { Loader } from "rsuite";
import Breadcrumbs from "../../components/Common/Breadcrumb";
import { Card, CardBody, Col, Container, Row } from "reactstrap";
function Subscription() {
  const [subses, setSubses] = useState(false)
  const [pageLoading,setPageLoading]=useState(false);
  const getSubs = async () => {
    setPageLoading(true)
    const subs = await axios.get("https://elmatary.com/El_Matary_Platform/platform/admin/subscription/select_finished_sub.php")
    .finally(()=>{
      setPageLoading(false)
    })
    console.log(subs)
    setSubses(subs.message);
  }

  useEffect(() => {
    getSubs()
  }, [])

  const columns = [
    {
      Header: "No",
      Cell: (cell) => {
        return (
          <b>
            {console.log(cell.cell.row)}
            {cell.cell.row.index + 1}
          </b>
        )
      }
    },
    {
      Header: 'Student Name',
      accessor: 'stu_name',
      Filter: false
    },

    {
      Header: 'Student Email',
      accessor: 'stu_email',
      Filter: false
    },

    {
      Header: 'Student Phone',
      accessor: 'stu_phone',
      Filter: false
    },

    {
      Header: 'Subscription Start Date',
      accessor: 'day',
      Filter: false
    },
    {
      Header: 'Subscription End Date',
      accessor: 'subscription_end_date',
      Filter: false
    },

    {
      Header: 'Canceled Notes',
      accessor: 'cancel_reason',
      Filter: false
    },

    // subscription_end_date

  ]

  return (
    <>
      <div className="page-content">
        <Container fluid={true}>
          {/* breadcrumbItem={loation?.state?.coursedata?.course_name + " Unit List"} */}
          <Breadcrumbs title="Subscription" breadcrumbItem={"Subscription List"} />
          <Row>
            <Col lg={12}>
              <Card>
                <CardBody>
                  {
                    pageLoading?(
                      <Loader/>
                    ):(
                      subses && subses.length ?
                    <TableContainer columns={columns}
                      data={subses}
                      isGlobalFilter={true}
                      customPageSize={10}
                      className="Invoice table" /> : !subses.length ? <h2>No Subscriptions</h2> : <Loader />
                    )
                  }
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default Subscription;
