import React from "react";
import { Card, CardBody, CardHeader, Col, Container, Row } from "reactstrap";

//Import Breadcrumb
import Breadcrumbs from "../../components/Common/Breadcrumb";

const UiVideo = () => {
  document.title = "Video | Matary - React Admin & Dashboard Template";

  return (
    <React.Fragment>
      <div className="page-content">
        <Container fluid={true}>
          <Breadcrumbs title="UI Elements" breadcrumbItem="Video" />
          <Row>
            <Col xl={6}>
              <Card>
                <CardHeader>
                  <h4 className="card-title">Ratio video 16:9</h4>
                  <p className="card-title-desc">Aspect ratios can be customized with modifier classes.</p>
                </CardHeader>

                <CardBody>
                  <div className="ratio ratio-16x9">
                    <iframe src="https://www.youtube.com/embed/1y_kfWUCFDQ" title="YouTube video" allowFullScreen></iframe>
                  </div>
                </CardBody>
              </Card>
            </Col>

            <Col xl={6}>
              <Card>
                <CardHeader>
                  <h4 className="card-title">Ratio video 21:9</h4>
                  <p className="card-title-desc">Aspect ratios can be customized with modifier classes.</p>
                </CardHeader>
                <CardBody>
                  <div className="ratio ratio-21x9">
                    <iframe src="https://www.youtube.com/embed/1y_kfWUCFDQ" title="YouTube video" allowFullScreen></iframe>
                  </div>
                </CardBody>
              </Card>
            </Col>
          </Row>

          <Row>
            <Col xl={6}>
              <Card>
                <CardHeader>
                  <h4 className="card-title">Ratio video 4:3</h4>
                  <p className="card-title-desc">Aspect ratios can be customized with modifier classes.</p>
                </CardHeader>

                <CardBody>
                  <div className="ratio ratio-4x3">
                    <iframe src="https://www.youtube.com/embed/1y_kfWUCFDQ" title="YouTube video" allowFullScreen></iframe>
                  </div>
                </CardBody>
              </Card>
            </Col>

            <Col xl={6}>
              <Card>
                <CardHeader>
                  <h4 className="card-title">Ratio video 1:1</h4>
                  <p className="card-title-desc">Aspect ratios can be customized with modifier classes.</p>
                </CardHeader>

                <CardBody>
                  <div className="ratio ratio-1x1">
                    <iframe src="https://www.youtube.com/embed/1y_kfWUCFDQ" title="YouTube video" allowFullScreen></iframe>
                  </div>
                </CardBody>
              </Card>
            </Col>
          </Row>

        </Container>
      </div>

    </React.Fragment>
  )
}

export default UiVideo;