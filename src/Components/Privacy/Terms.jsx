import React, { Component } from 'react';
import './Terms.css';
import { Link } from 'react-router-dom';
import data from '../../JsonData/PrivacyAndTermsData';
import { Row, Col } from 'react-bootstrap';

class Terms extends Component {
    render() {
        return (
            <div className="terms">
                <h3>Terms of service</h3>
                <Row xs="1" md="1">
                    {data.TERMS_DATA.map((term, termIdx) =>
                        <div key={termIdx}>
                            {term.mainPara &&
                                <Col>
                                    <h5>{term.category}</h5>
                                    <em>{term.lastUpdate}</em>
                                    <p className="privacy-para p-2 my-2">{term.descriptionOne} <Link to="/Privacy"><u className="privacy-policy">{term.privacy}</u></Link></p>
                                    <p>{term.descriptionTwo}</p>
                                </Col>
                            }
                            {!term.mainPara &&
                                <Col>
                                    <h5 className="my-3 font-weight-bold">{term.category}</h5>
                                    <p>{term.description}</p>
                                    {term.children.map((child, childIdx) =>
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
            </div>
        );
    }
}
export default Terms