import React, { useState } from "react";
import FeatherIcon from 'feather-icons-react';

//SimpleBar
import SimpleBar from "simplebar-react";

import {
    Dropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    UncontrolledDropdown,
    Card,
    CardBody,
    CardHeader
} from "reactstrap";

import { TopUserData } from "../../CommonData/Data/index";

const TopUser = () => {
    const [btn, setbtn] = useState(false);

    return (
        <React.Fragment>
            <div className="col-lg-7">
                <Card>
                    <CardHeader>
                        <div className="align-items-center d-flex">
                            <h4 className="card-title mb-0 flex-grow-1">Top Users</h4>
                            <div className="flex-shrink-0">

                                <Dropdown isOpen={btn} toggle={() => setbtn(!btn)} direction="start">
                                    <DropdownToggle
                                        data-toggle="dropdown"
                                        tag="a"
                                    >
                                        <span className="text-muted">All Members<i className="mdi mdi-chevron-down ms-1"></i></span>
                                    </DropdownToggle>

                                    <DropdownMenu className="dropdown-menu-end">
                                        <DropdownItem>Members</DropdownItem>
                                        <DropdownItem>New Members</DropdownItem>
                                        <DropdownItem>Old Members</DropdownItem>
                                    </DropdownMenu>
                                </Dropdown>
                            </div>
                        </div>
                    </CardHeader>

                    <CardBody className="px-0 pt-2">
                        <SimpleBar className="table-responsive px-3" style={{ maxHeight: "393px" }}>
                            <table className="table table-borderless table-centered align-middle table-nowrap mb-0">
                                <tbody>


                                    {TopUserData.map((item, key) => (<tr key={key}>
                                        <td style={{ width: "20px" }}>
                                            <img src={item.img} className="avatar-sm rounded-circle " alt="..." />
                                        </td>
                                        <td>
                                            <h6 className="font-size-15 mb-1">{item.name}</h6>
                                            <p className="text-muted font-size-13 mb-0"><i className="mdi mdi-map-marker"></i>{item.location}</p>
                                        </td>
                                        <td className="text-muted">
                                            <FeatherIcon icon={item.icon} className={"icon-xs icon me-2 text-" + item.iconColor} />

                                            ${item.income}</td>
                                        <td><span className={"badge font-size-12 badge-soft-" + item.badgeColor}>{item.badgeLabel}</span></td>
                                        <td>

                                            <UncontrolledDropdown>
                                                <DropdownToggle className="font-size-20 text-muted" tag="a" data-bs-toggle="dropdown" direction="start">
                                                    <i className="mdi mdi-dots-vertical"></i>
                                                </DropdownToggle>
                                                <DropdownMenu className="dropdown-menu-end">
                                                    <DropdownItem>Action</DropdownItem>
                                                    <DropdownItem>Another action</DropdownItem>
                                                    <DropdownItem>Something else here</DropdownItem>
                                                    <DropdownItem divider />
                                                    <DropdownItem>Separated link</DropdownItem>
                                                </DropdownMenu>
                                            </UncontrolledDropdown>

                                        </td>
                                    </tr>))}
                                </tbody>
                            </table>
                        </SimpleBar>
                    </CardBody>
                </Card>
            </div>
        </React.Fragment>
    );
};
export default TopUser;
