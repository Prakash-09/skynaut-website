import React, { Component } from 'react';
import './privacy.css';
import data from '../../JsonData/PrivacyAndTermsData';
import { Row, Col } from 'react-bootstrap';
import { Link } from "react-router-dom";

export class Privacy extends Component {
    render() {
        return (
            <div className="privacy">
                <h3>Privacy Policy</h3>
                <Row xs="1" md="1">
                    {data.PRIVACY_DATA.map((privacy, privacyIdx) =>
                        <div key={privacyIdx}>
                            {privacy.mainPara &&
                                <Col>
                                    <h5>{privacy.category}</h5>
                                    <em>{privacy.lastUpdate}</em>
                                    <p className="mt-2 mb-0">{privacy.descriptio_p1n}</p>
                                    <p className="mt-2 mb-0">{privacy.description} <Link to="Terms"><u className="terms_service">{privacy.terms}</u></Link></p>
                                    <p className="mt-2 mb-0">{privacy.description_p2}</p>
                                </Col>
                            }
                            {!privacy.mainPara && <Col>
                                <h6 className="my-3 font-weight-bold">{privacyIdx}. {privacy.category}</h6>
                                <p>{privacy.description}</p>
                                {privacy.children.map((child, childIdx) =>
                                    <ul key={childIdx}>
                                        <li className="font-weight-bold mr-3 or-list">{child.category}</li>
                                        <span>{child.description}</span>
                                    </ul>
                                )}
                            </Col>
                            }
                        </div>
                    )}
                </Row>
                <h5>Thank you !</h5>
            </div>
        )
    }
}

export default Privacy
