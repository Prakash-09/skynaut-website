import React, { Component } from 'react';
import { Row, Col, Card } from 'react-bootstrap';
import './Features.css';
import data from "../../JsonData/FeaturesData";

const CARD_IMGS = {
    'text messages': { label: 'text_messages', image: require('../../assets/images/text_message.svg') },
    'group chat': { label: 'group_chat', image: require('../../assets/images/group_chat.svg') },
    'speak freely': { label: 'speak_freely', image: require('../../assets/images/speak_freely.svg') },
    'digital footprint': { label: 'digital_footprint', image: require('../../assets/images/digital_footprint.svg') },
    'share without insecurity': { label: 'share_without_insecurity', image: require('../../assets/images/share_witout_insecurity.svg') },
    'services': { label: 'services', image: require('../../assets/images/services.svg') },
}

export class Features extends Component {
    render() {
        return (
            <div className="features">
                <Row className="m-0 p-0">
                    <Col >
                        <h3 className="dots">. .</h3>
                        <h3 className="dots">. .</h3>
                        <h3 className="mt-4 mb-2">Key Features</h3>
                        <p className="mb-5">Proven experiences are baked to build our secure and trusted communications platform.</p>
                    </Col>
                </Row>
                <Row xs="1" md="2" className="m-0 p-0">
                    {data.FEATURES_DATA.map((feature, featureIdx) =>
                        <Col key={featureIdx}>
                            <Card className="feature-card-data mb-4 p-3 text-center">
                                <Card.Body className="m-0 p-3">
                                    <p><img src={(CARD_IMGS[feature.type.toLowerCase()].image.default)} alt={CARD_IMGS[feature.type.toLowerCase()].label} height="15%" width="15%" /></p>
                                    <small>{feature.type}</small>
                                    <h5 className="my-1">{feature.name}</h5>
                                    <p className="mt-3">{feature.description}</p>
                                </Card.Body>
                            </Card>
                        </Col>
                    )}
                </Row>
            </div>
        )
    }
}

export default Features