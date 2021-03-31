import React, { Component } from 'react'
import appLogo from '../../assets/images/new-logo.png';
import { Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import './Header.css';

const NAV_DATA = [
    { to: "/Features", id: "FEATURES", label: "Features" },
    { to: "/Security", id: "SECURITY", label: "Security" },
    { to: "/Privacy", id: "PRIVACY", label: "Privacy" },
    { to: "/About", id: "ABOUT", label: "About" },
    { to: "/Contact", id: "CONTACT", label: "Contact" },
]


export class header extends Component {
    constructor(props) {
        super(props);

        this.state = {
            location: document.location.pathname,
            activeNav: '',
        }
    }
    componentDidMount() {
        const location = this.state.location
        this.setState({
            activeNav: location.slice(1).toLowerCase()
        })
    }
    handleLogoClick() {
        this.setState({
            activeNav: ''
        })
    }
    handleNav(nav) {
        this.setState({
            activeNav: nav.label.toLowerCase()
        })
    }
    render() {
        return (
            <Row className="p-0 m-0 mt-4 header" xs="1" md="2">
                <Col className="p-0">
                    <Link to="/" className="logo-main-container">
                        <Row className="m-0 p-0">
                            <Col xs="auto">
                                <h5 onClick={this.handleLogoClick.bind(this)} className="logo-container m-0">
                                    <img className="logo " src={appLogo} alt="applogo" />
                                </h5>
                            </Col>
                            <Col className="pl-1">
                                <h4 className="waveme-label " onClick={this.handleLogoClick.bind(this)} > Waveme</h4>
                            </Col>
                        </Row>
                    </Link>
                </Col>
                <Col className="p-0">
                    <div className="link-container">
                        {NAV_DATA.map((nav, navIdx) =>
                            <Link key={navIdx}
                                to={nav.to}
                                className="font-weight-bold d-inline-block mx-2 navigation-tab-content"
                            >
                                <p onClick={this.handleNav.bind(this, nav)} className={`${this.state.activeNav === nav.label.toLowerCase() ? 'm-0 p-1 activeNavigation-tab' : 'm-0 p-1 navigation-tabs'}`} >
                                    {nav.label}
                                </p>
                            </Link>
                        )}
                    </div>
                </Col>
            </Row>
        )
    }
}

export default header
