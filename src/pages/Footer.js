import React from "react";

const Footer = () => {
    return (
        <footer>
            <div className="footer_contents">
                <div className="footer_header">
                    <h1>You only have one chance to make a first impression.</h1>
                    <p>Let's make it an amazing one.</p>
                </div>
                <ul className="footer_nav">
                    <li>About Me</li>
                    <li>Blogs</li>
                    <li>Projects</li>
                    <li>Contact</li>
                    <li>Instagram</li>
                    <li>LinkedIn</li>
                </ul>
            </div>
            <div className="footer_disclaimer">
                <p>© Christian Rojas/2020/All Rights Reserved</p>
            </div>
        </footer>
    );
};

export default Footer;