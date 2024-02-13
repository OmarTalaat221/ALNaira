import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardBody, Col } from 'reactstrap';

import { WelcomeBoardData } from '../../CommonData/Data';

const WelcomeBoard = () => {
    return (
        <React.Fragment>
            <Col xl={4}>
                <Card className="bg-primary">
                    <CardBody>
                        <div className="text-center py-3">
                            <ul className="bg-bubbles ps-0">

                                {WelcomeBoardData.map((item, key) => (<li key={key}><i className={item.icon + " font-size-24"}></i></li>))}

                            </ul>
                            <div className="main-wid position-relative">
                                <h3 className="text-white">Matary Dashboard</h3>

                                <h3 className="text-white mb-0"> Welcome Back, Peter Kelsey!</h3>

                                <p className="text-white-50 px-4 mt-4">Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien libero tincidunt.</p>

                                <div className="mt-4 pt-2 mb-2">
                                    <Link to="#" className="btn btn-success">View Profile <i className="mdi mdi-arrow-right ms-1"></i></Link>
                                </div>
                            </div>
                        </div>
                    </CardBody>
                </Card>
            </Col>
        </React.Fragment>
    );
};

export default WelcomeBoard;
