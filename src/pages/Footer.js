import React, { useEffect } from "react";

const Footer = ({ pageHandler }) => {

    useEffect(() => {
        const footerElement = document.getElementById("footer");
        const footerHeaderText1 = document.getElementById("footer_header_text1");
        const footerHeaderText2 = document.getElementById("footer_header_text2");

        const handleScroll = () => {
            const offset = footerElement.scrollTop;

            if (offset >= 800) {
                footerHeaderText1.style.transform = "translateX(0)";
                footerHeaderText1.style.opacity = "1";

                setTimeout(() => {
                    footerHeaderText2.style.transform = "translateX(0)";
                    footerHeaderText2.style.opacity = "1";
                }, 300);
            } else {
                footerHeaderText1.style.transform = "translateX(-100px)";
                footerHeaderText1.style.opacity = "0";

                footerHeaderText2.style.transform = "translateX(-100px)";
                footerHeaderText2.style.opacity = "0"
            }
        };

        footerElement.addEventListener("scroll", handleScroll);
        return () => footerElement.removeEventListener("scroll", handleScroll);
    });

    return (
        <footer>
            <div className="footer_contents">
                <div className="footer_header">
                    <h1 id="footer_header_text1">You only have one chance to make a first impression.</h1>
                    <p id="footer_header_text2"><strong>Let's make it an amazing one.</strong></p>
                </div>
                <ul className="footer_nav">
                    <li onClick={pageHandler.bind(this, "home")}>Home</li>
                    <li onClick={pageHandler.bind(this, "blogs", "blogs")}>Blogs</li>
                    <li onClick={pageHandler.bind(this, "projects", "projects")}>Work</li>
                    <li><a target="_blank" rel="noreferrer" href="https://www.facebook.com/profile.php?id=100047736457748">Facebook</a></li>
                    <li><a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/christian-rojas-16194a186">LinkedIn</a></li>
                </ul>
            </div>
            <div className="footer_disclaimer">
                <p>© Christian Rojas/2021/All Rights Reserved</p>
            </div>
        </footer>
    );
};

export default Footer;