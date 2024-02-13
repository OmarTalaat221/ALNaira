import React from "react";
import { Row, Col, Card, CardBody, Container, CardHeader } from "reactstrap";

// Import grid
import { Grid } from "gridjs-react";

// Breadcrumb
import Breadcrumbs from "../../components/Common/Breadcrumb";

// Import Table Data
import { data, columns } from "./advanceTdata";

const DynamicTable = ({ data, columns, title, tableHeaderTitle }) => {
  document.title = title + " | Matary - React Admin & Dashboard Template";

  return (
    <React.Fragment>
      <div className="page-content">
        <Container fluid={true}>
          <Breadcrumbs title={title} breadcrumbItem={title} />
          <Row>
            <Col lg={12}>
              <Card>
                <CardHeader>
                  <h4 className="card-title mb-0">{tableHeaderTitle}</h4>
                </CardHeader>
                <CardBody>
                  <div id="table-gridjs">
                    <Grid
                      data={data}
                      columns={columns}
                      search={true}
                      sort={true}
                      pagination={{ enabled: true, limit: 5 }}
                    />
                  </div>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </React.Fragment>
  );
};

export default DynamicTable;
