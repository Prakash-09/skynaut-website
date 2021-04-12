import React, { Component } from 'react';
import './Terms.css';
// import { Link } from 'react-router-dom';
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
                                    <p className="my-2">{term.info}</p>
                                </Col>
                            }
                            {!term.mainPara &&
                                <Col>
                                    <h3 className="my-3">{term.category}</h3>
                                    <p>{term.description_p1}</p>
                                    <p>{term.description_p2}</p>
                                    <p>{term.description_p3}</p>
                                    <p>{term.description_p4}</p>
                                    <p>{term.description_p5}</p>

                                    {term.child &&
                                        term.children.map((child, childIdx) =>
                                            <div key={childIdx}>
                                                <h5 className="font-weight-bold">{child.title}</h5>
                                                <p>{child.description_p1}</p>
                                                {child.description_p1_child &&
                                                    child.description_p1_children.map((descChild, descChildIdx) =>
                                                        <ul key={descChildIdx}>
                                                            <li className="font-weight-bold mr-2 or-list">{descChild.subTitle}</li>
                                                            <span>{descChild.description}</span>
                                                        </ul>
                                                    )
                                                }
                                                <p>{child.description_p2}</p>
                                                {child.description_p2_child &&
                                                    child.description_p2_children.map((descChild, descChildIdx) =>
                                                        <ul key={descChildIdx}>
                                                            <li className="font-weight-bold mr-2 or-list">{descChild.subTitle}</li>
                                                            <span>{descChild.description}</span>
                                                        </ul>
                                                    )
                                                }
                                                <p>{child.description_p3}</p>
                                                {child.description_p3_child &&
                                                    child.description_p1_children.map((descChild, descChildIdx) =>
                                                        <ul key={descChildIdx}>
                                                            <li className="font-weight-bold mr-2 or-list">{descChild.subTitle}</li>
                                                            <span>{descChild.description}</span>
                                                        </ul>
                                                    )
                                                }
                                                <p>{child.description_p4}</p>
                                                {child.description_p4_child &&
                                                    child.description_p1_children.map((descChild, descChildIdx) =>
                                                        <ul key={descChildIdx}>
                                                            <li className="font-weight-bold mr-2 or-list">{descChild.subTitle}</li>
                                                            <span>{descChild.description}</span>
                                                        </ul>
                                                    )
                                                }
                                            </div>
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