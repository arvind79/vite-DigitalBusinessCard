import React from "react"

import ProfilePicture from "../assets/Profile-Picture.png"
import EmailLogo from "../assets/Email-logo.png"
import LinkedinLogo from "../assets/Linkedin-logo.png"

import "./Info.css"

function Info() {
    return (
        <div className="info">
            <header className="info-header">
                <img className="profile-pic" src={ProfilePicture} alt="pfp" />
            </header>
            <div className="info-bio">
                <h1 className="info-name">Jane Bishnoi</h1>
                <p className="info-title">Frontend Developer</p>
                <p className="info-small">(website coming soon)</p>
            </div>
            <div className="info-contacts">
                <a href="#" className="info-links info-email">
                    <img src={EmailLogo} className="info-icons" alt="Email logo" />
                    Email
                </a>
                <a href="#" className="info-links info-linkedin">
                    <img src={LinkedinLogo} className="info-icons" alt="LinkedIn Logo" />
                    LinkedIn
                </a>
            </div>
        </div>
    )
}

export default Info