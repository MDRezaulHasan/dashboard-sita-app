import "./Navbar.css"
import { NotificationsNone, Language, Settings } from '@material-ui/icons';
import React from 'react'
import ProfileImage from "../../images/mern.jpg"

function Navbar() {
    return (
        <div className="navbar">
            <div className="navbar-wrapper">
                <div className="navbar-left">
                    <span>Dashboard</span>
                </div>
                <div className="navbar-right">
                    <div className="navbar-container">
                        <NotificationsNone />
                        <span className="navIconBadge">2</span>
                    </div>
                    <div className="navbar-container">
                        <Language />
                        <span className="navIconBadge">2</span>

                    </div>
                    <div className="navbar-container">
                        <Settings />
                    </div>
                    <img src={ProfileImage} alt="" className="image-pro" />
                </div>


            </div>

        </div>
    )
}

export default Navbar
