import React, { useState } from "react";

//SimpleBar
import SimpleBar from "simplebar-react";

import {
  Card,
  CardBody,
  CardHeader,
  Col,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";

import { OrderActivityData } from "../../CommonData/Data/index";

const OrderActivity = () => {
  const [btn, setbtn] = useState(false);

  return (
    <React.Fragment>
      <Col lg={5}>
        <Card>
          <CardHeader>
            <div className="d-flex flex-wrap align-items-center">
              <h5 className="card-title mb-0">Order Activity</h5>
              <div className="ms-auto">
                <Dropdown isOpen={btn} toggle={() => setbtn(!btn)}>
                  <DropdownToggle
                    className="font-size-16 text-muted"
                    data-toggle="dropdown"
                    tag="a"
                  >
                    <i className="mdi mdi-dots-horizontal"></i>
                  </DropdownToggle>

                  <DropdownMenu>
                    <DropdownItem>Action</DropdownItem>
                    <DropdownItem>Another action</DropdownItem>
                    <DropdownItem>Something else here</DropdownItem>
                  </DropdownMenu>
                </Dropdown>
              </div>
            </div>
          </CardHeader>
          <CardBody className="px-0">
            <SimpleBar style={{ maxHeight: "377px" }}>
              <ol
                className="activity-feed mb-0 px-4"
                data-simplebar
                style={{ maxHeight: "377px" }}
              >
                {OrderActivityData.map((item, key) => (
                  <li className="feed-item" key={key}>
                    <div className="d-flex justify-content-between feed-item-list">
                      <div>
                        <h5 className="font-size-15 mb-1">{item.title}</h5>
                        <p className="text-muted mt-0 mb-0">{item.label}</p>
                      </div>
                      <div>
                        <p className="text-muted mb-0">{item.time}</p>
                      </div>
                    </div>
                  </li>
                ))}
              </ol>
            </SimpleBar>
          </CardBody>
        </Card>
      </Col>
    </React.Fragment>
  );
};
export default OrderActivity;
