import React, { Component } from 'react';
import { Row, Col, Card } from 'react-bootstrap';
import banner from '../../assets/images/security-banner.jpg';
import './Security.css';
import data from '../../JsonData/SecurityData';

const CARD_IMGS = {
    'data_security': { label: 'data_security', image: require('../../assets/images/data_security.svg') },
    'data_privacy': { label: 'data_privacy', image: require('../../assets/images/data_privacy.svg') },
    'speak_privately': { label: 'speak_privately', image: require('../../assets/images/speak_privately.svg') },
    'data_storage': { label: 'data_storage', image: require('../../assets/images/data_storage.svg') },
    'time_capsule': { label: 'time_capsule', image: require('../../assets/images/time_capsule.svg') },
    'contact_handling': { label: 'contact_handling', image: require('../../assets/images/contact_handling.svg') },
    'cerified_by': { label: 'cerified_by', image: require('../../assets/images/certified_by.svg') },
    'no_trackers': { label: 'no_trackers', image: require('../../assets/images/no_ads.svg') },
}

export class Security extends Component {
    render() {
        return (
            <div>
                <Row className="m-0 p-0 security" xs="1" md="1">
                    <Col className="text-center pb-0">
                        <img src={banner} alt="sec-banner" className="secBanner" height="90%" width="100%" />
                    </Col>
                    <Col className="text-left pt-0">
                        <h3 className="dots">. .</h3>
                        <h3 className="dots">. .</h3>
                        <h3 className="mt-4 mb-2">Data Privacy and Security</h3>
                        <p>Highest priority is given to your data security and digital footprint management. We allow you to control your digital trail by using time capsule based sharing approach.
                                We use a very unique "Certified by me feature" to help eradicate fake news even before it gets generated. </p>
                    </Col>
                </Row>
                <Row xs="1" md="2" className="m-0 p-0 mt-3">
                    {data.SECURITY_DATA.map((security, secIdx) =>
                        <Col key={secIdx}>
                            <Card className="security-cards mt-4 m-0 p-2">
                                <Card.Body className="m-0 p-0 ">
                                    <img src={(CARD_IMGS[security.key].image.default)} alt={CARD_IMGS[security.key].label} height="30%" />
                                    <h4 className="mt-3">{security.name}</h4>
                                    <p className="m-0 p-0">{security.description}</p>
                                </Card.Body>
                            </Card>
                        </Col>
                    )}
                </Row>
                <Row xs="1" md="1" className="m-0 p-0 mt-5">
                    {data.SECURITY_ADVISORY.map((advisory, advisoryIdx) => 
                        <Col key={advisoryIdx}>
                            <h4>{advisory.title}</h4>
                            <p className="pt-3">{advisory.descriptionOne}</p>
                            <p>{advisory.descriptionTwo}</p>
                            <p>{advisory.descriptionThree}</p>
                        </Col>
                    )}
                </Row>
                <Row xs="1" md="1" className="m-0 p-0 mt-2">
                    <Col><h4>Disclosuers</h4></Col>
                    {data.SECURITY_DISCLOSUERS.map((disclosuer, disclosuersIdx) => 
                        <Col key={disclosuersIdx}>
                            <h5 className="mt-3">{disclosuer.title}</h5>
                            <p>{disclosuer.updateYearAt}</p>
                            {/* <em>{disclosuer.updateMonthAt}</em>
                            <h5 className="mt-2">{disclosuer.yearFromTo}</h5> */}
                            <p>{disclosuer.description}</p>
                        </Col>
                    )}
                </Row>
            </div>
        )
    }
}

export default Security