import React, { Component } from 'react'
import appLogo from '../../assets/images/new-logo.png';

export class Footer extends Component {
    render() {
        return (
            <div className="mt-4">
                <div className="text-center"><img className="footer-logo" src={appLogo} alt="footer-logo" /></div>
                <p className="text-center footer-desc mt-2">Ride the Wave!</p>
                <p className="text-center copyright mb-4">© 2020 All rights reserved.</p>
            </div>
        )
    }
}

export default Footer
