import React, { useState } from 'react';

import { Card, CardBody, CardHeader, Dropdown, DropdownToggle, DropdownMenu, DropdownItem, UncontrolledDropdown } from 'reactstrap';

import { TopCountriesData } from '../../CommonData/Data';

const TopCountries = () => {
    const [btn, setbtn] = useState(false);

    return (
        <React.Fragment>
            <Card>
                <CardHeader>
                    <div className="align-items-center d-flex">
                        <h4 className="card-title mb-0 flex-grow-1">Top Countries</h4>
                        <div className="flex-shrink-0">

                            <Dropdown isOpen={btn} toggle={() => setbtn(!btn)}>
                                <DropdownToggle
                                    data-toggle="dropdown"
                                    tag="a"
                                >
                                    <span className="text-muted">View All<i className="mdi mdi-chevron-down ms-1"></i></span>
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
                <CardBody className="pt-1">

                    <div className="table-responsive">
                        <table className="table table-centered align-middle table-nowrap mb-0">

                            <tbody>

                                {TopCountriesData.map((item, key) => (<tr key={key}>
                                    <td><img src={item.flag} alt="user" className="me-3" height="18" />{item.countryname}</td>
                                    <td>
                                        {item.number}
                                    </td>
                                    <td>
                                        <i className={item.icon}></i>
                                    </td>
                                    <td>
                                        {item.percentage}%
                                    </td>
                                    <td>
                                        <UncontrolledDropdown>
                                            <DropdownToggle className="text-muted font-size-20" tag="a" data-bs-toggle="dropdown" direction="start">
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
                                </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                </CardBody>
            </Card>
        </React.Fragment>
    )
}

export default TopCountries;