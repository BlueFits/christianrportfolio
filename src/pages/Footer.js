import React from "react";

const Footer = () => {
    return (
        <footer>
            <div className="footer_contents">
                <div className="footer_header">
                    <h1>You only have one chance to make a first impression.</h1>
                    <p><strong>Let's make it an amazing one.</strong></p>
                </div>
                <ul className="footer_nav">
                    <li>Home</li>
                    <li>Blogs</li>
                    <li>Work</li>
                    <li>Contact</li>
                    <li><a target="_blank" rel="noreferrer" href="https://www.facebook.com/profile.php?id=100047736457748">Facebook</a></li>
                    <li><a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/christian-rojas-16194a186">LinkedIn</a></li>
                </ul>
            </div>
            <div className="footer_disclaimer">
                <p>© Christian Rojas/2020/All Rights Reserved</p>
            </div>
        </footer>
    );
};

export default Footer;