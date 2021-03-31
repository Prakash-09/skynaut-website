import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';
import './contact.css';

export class Contact extends Component {
    constructor(props) {
        super(props)
        this.state = {
            properties: {
                email: '',
                reason: '',
                platform: '',
                description: '',
                attachment: '',
            }
        }
    }
    handleChange(e) {
        let name = e.target.name;
        let val = e.target.value;

        this.setState({
            properties: {
                ...this.state.properties,
                [name]: val
            }
        })
    }
    handleSubmit(e) {
        e.preventDefault();
        console.log(this.state.properties)

        this.setState({
            properties: {
                ...this.state.properties,
                email: '',
                reason: '',
                platform: '',
                description: '',
                attachment: '',
            }
        })
    }
    render() {
        const { email, reason, platform, description, attachment } = this.state.properties;
        return (
            <div>
                <Row className="m-0 p-0 contact">
                    <Col>
                        <h3 className="mb-3">Waveme Support</h3>
                        <h6 className="mb-5">Submit your request</h6>
                        <form onSubmit={this.handleSubmit.bind(this)}>
                            <p className="m-0 mb-2">Your email address..</p>
                            <input type="text" name="email" value={email} onChange={this.handleChange.bind(this)} className="input-field" />

                            <p className="m-0 mt-4 mb-2">What can we help you with..</p>
                            <select name="reason" value={reason} onChange={this.handleChange.bind(this)} className="input-field">
                                <option></option>
                                <option>Feature support</option>
                                <option>Troubleshoot a issue</option>
                                <option>Provide feedback</option>
                            </select>

                            <p className="m-0 mt-4 mb-2">What platform is this for ?</p>
                            <select name="platform" value={platform} onChange={this.handleChange.bind(this)} className="input-field">
                                <option></option>
                                <option>Waveme IOS</option>
                            </select>

                            <p className="m-0 mt-4 mb-2">Description..</p>
                            <p><textarea name="description" rows="4" value={description} onChange={this.handleChange.bind(this)} className="input-field" /></p>

                            <span className="m-0 mt-4 mb-2 mr-5">Attachment</span>
                            <span className="ml-5"><input type="file" name="attachment" value={attachment} onChange={this.handleChange.bind(this)} className="input-field" /></span>

                            <p className="m-0 mt-4 mb-2">
                                <button type="submit" className="btn submit-button" disabled={((email.length > 0) && (reason.length > 0) && (platform.length > 0) && (description.length > 0)) ? false : true}>SUBMIT</button>
                            </p>
                        </form>
                    </Col>
                </Row>
            </div>
        )
    }
}

export default Contact
