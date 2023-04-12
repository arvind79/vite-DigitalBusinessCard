import React from "react";

import GithubLogo from "../assets/Github-logo.png"
import TwitterLogo from "../assets/Twitter-logo.png"

import "./Footer.css"

function Footer() {
    return (
        <footer className="footer">
            <div className="footer-socialmedia">
                <a href="#">
                    <img src={GithubLogo} alt="Github Logo" className="footer-links" />
                </a>
                <a href="#">
                    <img src={TwitterLogo} alt="Twitter Logo" className="footer-links" />
                </a>
            </div>
        </footer>
    )
}

export default Footer