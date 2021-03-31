import React, { Component } from 'react'
import { Row, Col, Card } from 'react-bootstrap';
import imageTeam from '../../assets/images/about-team.jpg'
import './about.css';
import data from '../../JsonData/AboutData';

const RULES_IMGS = {
    'consumability': { label: 'consumability', image: require('../../assets/images/consumability.svg') },
    'trust_simplicity': { label: 'trust_simplicity', image: require('../../assets/images/trust_simplicity.svg') },
    'integral_learners': { label: 'integral_learners', image: require('../../assets/images/intigral_learners.svg') },
}
const TEAM_IMGS = {
    'tanav_ke': { label: 'tanav_ke', image: require('../../assets/images/Tanav.jpeg') },
    'dhanush_si': { label: 'dhanush_si', image: require('../../assets/images/Dhanush.jpeg') },
    'rahul_ra': { label: 'rahul_ra', image: require('../../assets/images/Rahul.jpg') },
}
const ADVISOR_IMGS = {
    'praveen_ke': { label: 'praveen_ke', image: require('../../assets/images/Praveen.jpeg') },
    'murali_na': { label: 'murali_na', image: require('../../assets/images/Murali.jpeg') },
    'abdul_al': { label: 'abdul_al', image: require('../../assets/images/Aleem.jpeg') },
    'venkat_do': { label: 'venkat_do', image: require('../../assets/images/Venkat.jpeg') },
    'swaroop_du': { label: 'swaroop_du', image: require('../../assets/images/Swaroop.jpeg') },
    'srikanth_ma': { label: 'srikanth_ma', image: require('../../assets/images/Srikanth.jpeg') },
    'srinivas_ch': { label: 'srinivas_ch', image: require('../../assets/images/Srinivas.jpeg') },
}

export class About extends Component {
    render() {
        return (
            <div>

                <Row xs="1" md="2" className="m-0 p-0 about">
                    <Col className="pb-0 pt-4">
                        <h4 className="dots">. .</h4>
                        <h4 className="dots">. .</h4>
                        <h5 className="mt-4">
                            Our mission is to offer a trustworthy social platform that offers secure communication, capsuled content sharing
                            with hyper local services.
                        </h5>
                    </Col>
                    <Col>
                        <img src={imageTeam} alt="teamimage" className="team-image" />
                    </Col>
                </Row>
                <Row className="m-0 mt-5 p-0">
                    <Col xs="3" className="our-story-col">
                        <h4>Our story & values </h4>
                    </Col>
                    <Col>
                        <p>
                            Trust is a fundamental part of humanity, but with the rise of the social platforms over the last couple of decades, we’ve seen a plethora of trust issues and where people are treated as a commodity.
                        </p>
                        <p>
                            We started WaveMe because we believe there is a need for a new kind of Trustworthy Social Platform that enables people to get ahead of these trust issues and overcome digital tralil lekage.
                        </p>
                        <p>
                            We focus on privacy of your digital footprint, pull based hyper local services, combined with all of the messaging features you expect.
                        </p>
                    </Col>
                </Row>
                <Row xs="1" md="3" className="m-0 mt-5 p-0">
                    {data.THREE_RULES.map((rule, ruleIdx) =>
                        <Col key={ruleIdx}>
                            <p className="mb-2"><img className="rules-img" src={(RULES_IMGS[rule.key].image.default)} alt={(RULES_IMGS[rule.key].label)} height="10%" width="10%" /></p>
                            <h4 className="mb-3">{rule.type}</h4>
                            <p>{rule.description}</p>
                        </Col>
                    )}
                </Row>
                <Row xs="1" md="1" className="m-0 mt-5 p-0">
                    <Col className="text-center">
                        <h3 className="mb-4">Our Team</h3>
                        <p className="mb-5">We are young college graduates studying in Arizona State University, with deep passion towards technology and want to help make the world we live in a better place.</p>
                        <Row xs="1" md="2" >
                            {data.OUR_TEAM_DATA.map((team, teamIdx) =>
                                <Col key={teamIdx} >
                                    <Card className="team-card-container mb-4 m-0 p-0">
                                        <Card.Body className="p-3">
                                            <Row className="m-0 p-0">
                                                <Col className="m-0 p-0 team-image-col">
                                                    <img className="team-mem-img" src={(TEAM_IMGS[team.key.toLowerCase()].image.default)} alt={(TEAM_IMGS[team.key.toLowerCase()].label)} />
                                                </Col>
                                                <Col className="m-0 p-0 text-left team-data-col">
                                                    <h6 className="mb-2">{team.name}</h6>
                                                    <p className="mb-3">{team.designation}</p>
                                                    <p className="p-0 m-0 descrition-on-about-card">{team.description}</p>
                                                </Col>
                                            </Row>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            )}
                        </Row>
                    </Col>
                </Row>
                <Row xs="1" md="1" className="m-0 mt-4 p-0">
                    <Col className="text-center">
                        <h3 className="mb-4">Our Advisors</h3>
                        <p className="mb-5">We’ve partnered with a group of dynamic industry veterans who mentor us on our journey.</p>
                        {data.OUR_ADVISORS.length % 2 === 0 ?
                            <Row xs="1" md="2">
                                {data.OUR_ADVISORS.map((advisor, advisorIdx) =>
                                    <Col key={advisorIdx} >
                                        <Card className="advisor-card-container mb-4 m-0">
                                            <Card.Body className="p-3">
                                                <Row className="m-0 p-0">
                                                    <Col className="m-0 p-0 pt-2 advisor-img-col">
                                                        <p><img className="advisors-mem-img" src={(ADVISOR_IMGS[advisor.key].image.default)} alt={(ADVISOR_IMGS[advisor.key].label)} /></p>
                                                        <h6 className="mb-2">{advisor.name}</h6>
                                                        <p className="mb-1">{advisor.designation}</p>
                                                        <p className="mb-1">{advisor.area}</p>
                                                    </Col>
                                                    <Col className="m-0 p-0 pt-2 px-1 text-left">
                                                        <p className="m-0 p-0 descrition-on-about-card">{advisor.description}</p>
                                                    </Col>
                                                </Row>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                )}
                            </Row>
                            :
                            <>
                                <Row xs="1" md="2">
                                    {data.OUR_ADVISORS.map((advisor, advisorIdx) =>
                                        <Col key={advisorIdx} >
                                            {data.OUR_ADVISORS.length - 1 !== advisorIdx &&
                                                <Card className="advisor-card-container mb-3 m-0">
                                                    <Card.Body className="p-3">
                                                        <Row className="m-0 p-0">
                                                            <Col className="m-0 p-0 pt-2 advisor-img-col">
                                                                <p><img className="advisors-mem-img" src={(ADVISOR_IMGS[advisor.key].image.default)} alt={(ADVISOR_IMGS[advisor.key].label)} /></p>
                                                                <h6 className="mb-2">{advisor.name}</h6>
                                                                <p className="mb-1">{advisor.designation}</p>
                                                                <p className="mb-1">{advisor.area}</p>
                                                            </Col>
                                                            <Col className="m-0 p-0 pt-2 px-3 text-left">
                                                                <p className="m-0 p-0 descrition-on-about-card">{advisor.description}</p>
                                                            </Col>
                                                        </Row>
                                                    </Card.Body>
                                                </Card>
                                            }
                                        </Col>
                                    )}
                                </Row>
                                <Row xs="1" md="1" className="text-center">
                                    {data.OUR_ADVISORS.map((advisor, advisorIdx) =>
                                        <Col key={advisorIdx} className="last-card-col">
                                            {data.OUR_ADVISORS.length - 1 === advisorIdx &&
                                                <Card className="advisor-card-container last-card mb-4 m-0">
                                                    <Card.Body className="p-3">
                                                        <Row className="m-0 p-0">
                                                            <Col className="m-0 p-0 pt-2 advisor-img-col">
                                                                <p><img className="advisors-mem-img" src={(ADVISOR_IMGS[advisor.key].image.default)} alt={(ADVISOR_IMGS[advisor.key].label)} /></p>
                                                                <h6 className="mb-2">{advisor.name}</h6>
                                                                <p className="mb-1">{advisor.designation}</p>
                                                                <p className="mb-1">{advisor.area}</p>
                                                            </Col>
                                                            <Col className="m-0 p-0 pt-2 px-1 text-left">
                                                                <p className="m-0 p-0 descrition-on-about-card">{advisor.description}</p>
                                                            </Col>
                                                        </Row>
                                                    </Card.Body>
                                                </Card>
                                            }
                                        </Col>
                                    )}
                                </Row>
                            </>
                        }
                    </Col>
                </Row>

            </div>
        )
    }
}

export default About
