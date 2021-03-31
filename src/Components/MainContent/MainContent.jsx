import React, { Component } from 'react'
import {Row, Col } from 'react-bootstrap'
import Appstore from '../../assets/images/Appstore.svg'
import phone from '../../assets/images/phone.png'
import img1 from '../../assets/images/img1.jpg';
import img2 from '../../assets/images/img2.jpg';
import img3 from '../../assets/images/img3.jpg';

export class MainContent extends Component {
    constructor(props){
        super(props)
        this.state={
            currentSlide:1,
        }
    }
    changeSlide = (value) => {
        this.setState({currentSlide:value})
    }
    incrementSlide = (slide) => {
        if(slide <= 3){
        this.setState({currentSlide:slide+1})
        }else{
            this.setState({currentSlide:1})
        }
    }
    render() {
        const {currentSlide} = this.state;
        return (
            <div className="mb-2">
                <Row className="p-0 m-0" xs="1" md="2">
                    <Col className="pb-0">
                        <div className="heading-2">Waveme</div>
                        <div className="content">
                        <p className="intro-sub">A Social and Ad marketplace platform that offers un-paralleled user experiences with secure communication, digital data footprint and e-commerce.</p>
                        <div className="mt-4"><span className="font-weight-bold sub-heading">Express Freely:</span>
                        <p>Re-imagine your personal touchpoints with a different messaging experience. </p></div>
                        <div><span className="font-weight-bold sub-heading">Control Data Footprint:</span>
                        <p>Share your data as time capsules setting expiry limits based on your preferences.</p> </div> 
                        <div><span className="font-weight-bold sub-heading">Get Together with Groups:</span>
                        <p> Group chats focus on sharing the moments that matter with the people who matter to you - friends, family, and colleagues. </p></div>

                        <p className=""> A Refreshing model to share data every day without insecurity.
                            Privacy is baked into every aspect of communication.</p>
                        <p className="">Explore and see yourself why Waveme is a simple, powerful, and secure messenger.</p>    
                        </div>
                    </Col>
                    <Col className="text-center mt-4 pb-0">
                        <img src={phone}  className="text-center top-card phone-img-1" alt="phone-img-1" />
                    </Col>
                </Row>
                <Row xs="1" md="1" className="p-0 m-0 mt-2">
                    <Col className="appStore">
                        <a href="www.applestore.com" ><img src={Appstore} alt="Appstore" /></a>
                    </Col>
                </Row>
                <hr className="pagebreak"></hr>
                {/* <Row className="p-0 m-0 mt-2" md="1" xs="1"><Col className="text-left"><a href="#"><img src={Appstore} alt="Appstore" /></a></Col></Row> */}
                <Row className="p-0 m-0 text-center" xs="1" md="1">
                    <Col>
                        <p className="text-center featureHeading">SOME OF THE FEATURES</p>
                        <p className="text-center heading-2"> What it does.</p>
                    </Col>
                </Row>
                <Row className="p-0 m-0 text-center" xs="1" md="3">
                    <Col className="mt-2 overflow-auto">
                        <p><b>COLLABORATION</b></p>
                        <p className="description">Secure sharing networks.</p>
                        <img className="img-1 cards mt-4" src={img1} alt="img-1" width="100%" height="100%" />
                    </Col>
                    <Col className="mt-2 overflow-auto">
                        <p><b>AD MARKETPLACE</b></p>
                        <p className="description">On-demand Ad pull with Crypto Monetized viewership.</p>
                        <img className="img-2 cards" src={img2} alt="img-2" width="100%" height="100%" />
                    </Col>
                    <Col className="mt-2 overflow-auto">
                        <p><b>DATA SECURITY</b></p>
                        <p className="description">User controlled digital footprint.</p>
                        <img className="img-3 cards mt-4" src={img3} alt="img-3" width="100%" height="100%" />
                    </Col>
                </Row>
                <Row className="m-0 p-0 text-center bottom-card-container" xs="1" md="2">
                    <Col className="mt-2 overflow-auto">
                        <p><b>GAMIFICATION</b></p>
                        <p className="description">Immersive experience.</p>
                        <img className="img-4 cards bottom-card" src={img1} alt="img-4" width="100%" height="100%" />
                    </Col>
                    <Col className="mt-2 overflow-auto">
                        <p><b>E-COMMERCE</b></p>
                        <p className="description">Crypto enabled marketplace.</p>
                        <img className="img-2 cards bottom-card" src={img2} alt="img-2" width="100%" height="100%" />
                    </Col>
                </Row>
                <hr className="pagebreak2"></hr>
                {/* <Row className="p-0 m-0 mt-4">
                    <Col><div className="text-center differentiator"></div></Col></Row> */}
                    <p className="text-center differentiator">DIFFERENTIATORS</p>
                <Row className="p-0 m-0 mb-2 text-center" md="2" xs="1">
                    <Col>
                    <div className="heading-3 invisible hidden-content">Why use it.</div>
                    <span className="carosel-container d-inline-block text-dark text-left px-4 pt-4">
                        {currentSlide === 1 && 
                        <div>
                            <p className="card-content">“My data shared on Social Media Platforms remains perpetually.
                                I need more control over my personal data leakage.”</p>
                            <p className="name">Mark Kent, Freshmen, Texas</p>
                            <p className="reviewer">Waveme Survey 2020.</p>
                        </div>
                        }
                        {currentSlide === 2 && 
                        <div>
                            <p className="card-content">“I don't have an easy way to share data that gets delivered to my friends without being stored on a messaging platform cloud”</p>
                            <p className="name">John Wayne, Grade 12, Atlanta</p>
                            <p className="reviewer">Waveme Survey 2020.</p>
                        </div>
                        }
                        {
                            currentSlide === 3 && 
                            <div>
                                <p className="card-content">“My data on all social platforms are being sold anonymously. I am used as a commodity by social platforms.”</p>
                                <p className="name">Jason Thomas, Senior, Chicago</p>
                                <p className="reviewer">Waveme Survey 2020.</p>
                        </div>
                        }
                        {currentSlide === 4 && 
                        <div>
                            <p className="card-content">“I don't have the means of removing the data I once shared with my fan base. My Intellectual Property is leaked.”</p>
                            <p className="name"> Social Video Platform Influencer, Newyork</p>
                            <p className="reviewer">Waveme Survey 2020.</p>
                        </div>
                        }
                    </span>
                    <div>
                    <span className="slide-1 d-inline-block mx-2" onClick={() => this.changeSlide(1)}></span>
                    <span className="slide-2 d-inline-block mx-2" onClick={() => this.changeSlide(2)}></span>
                    <span className="slide-3 d-inline-block mx-2" onClick={() => this.changeSlide(3)}></span>
                    <span className="slide-4 d-inline-block mx-2" onClick={() => this.changeSlide(4)}></span>
                    <span className="incrementer d-inline-block mx-2" onClick={() => this.incrementSlide(this.state.currentSlide)}
                    >&rarr;</span>  
                    </div>
                    </Col>
                    <Col className="text-left" >
                    <div className="heading-3">Why use it.</div>
                        <ul className="text-left list mt-2">
                            <li>Easy onboarding and campaign management</li>
                            <li>Crowd sourced entry for Ad Creation</li>
                            <li>Monetization managed as Platform underpinning</li>

                            <li>Focused Influencer and Micro-Influencer targeting</li>
                            <li>Wave tokens to Crypto to E-commerce Unification</li>
                            <li>Accelerated campaign launch for small businesses</li>
                        </ul>
                    </Col>
                </Row>
            </div>
        )
    }
}

export default MainContent
