import React, { useEffect } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { HiMenuAlt4 } from "react-icons/hi";
import TextLoop from "react-text-loop";

import ParallaxEffect from "../effects/ParallaxEvent";

import SmallHeader from "../components/SmallHeader";

import CompSci from "../assets/images/CompSci.svg";

const Home = ({ navHandler }) => {

    useEffect(() => ParallaxEffect("home", "home_parallax", 0.35), [ParallaxEffect]);

    useEffect(() => {
        const handleScroll = () => {
            const offset = document.getElementById("home").scrollTop;
            const centerTop = document.getElementById("center_text_top_id");
            const centerBody1 = document.getElementById("center_text_body1_id");
            const centerBody2 = document.getElementById("center_text_body2_id");
            const centerConclusion = document.getElementById("center_text_conclusion_id");

            console.log(offset);

            if (offset >= 420) {
                centerTop.style.opacity = "1";
                centerTop.style.transform = "translateY(0)";
            } else {
                centerTop.style.opacity = "0";
                centerTop.style.transform = "translateX(-10px)";
            }
            
            if (offset >= 1450) {
                centerBody1.style.opacity = "1";
                centerBody1.style.transform = "translateY(0)";
            } else {
                centerBody1.style.opacity = "0";
                centerBody1.style.transform = "translateX(10px)";
            }

            if (offset >= 1500) {
                centerBody2.style.opacity = "1";
                centerBody2.style.transform = "translateY(0)";
            } else {
                centerBody2.style.opacity = "0";
                centerBody2.style.transform = "translateX(-10px)";
            }

            if (offset >= 1550) {
                centerConclusion.style.opacity = "1";
                centerConclusion.style.transform = "translateY(0)";
            } else {
                centerConclusion.style.opacity = "0";
                centerConclusion.style.transform = "translateX(10px)";
            }
        };
        
        document.getElementById("home").addEventListener("scroll", handleScroll);

        return () => document.getElementById("home").removeEventListener("scroll", handleScroll);
    });

    return (
        <section id="home_parallax" className="home_section">
            <nav>
                <ul className="nav_li_container">
                    <li><AnchorLink className="anchorLink_style" herf="#">Christian Rojas</AnchorLink></li>
                    <li><a className="link_styles" target="_blank" rel="noreferrer" href="https://www.facebook.com/profile.php?id=100047736457748">Facebook</a></li>
                    <li><a className="link_styles"  target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/christian-rojas-16194a186">LinkedIn</a></li>
                </ul>
                <div onClick={navHandler} unselectable="on">
                    <HiMenuAlt4 size={28} className="nav_button"/>
                </div>
            </nav>
            <header>
                <div className="header_elems_container">
                    <div className="img_header_container">
                        <img height="100%" src={CompSci} alt="compSci.svg"/>
                    </div>
                    <div className="header_text">
                        <h1>
                            Hello, my name's Christian. I am a &nbsp;
                            <TextLoop>
                                <span>software engineer</span>
                                <span>Web Developer</span>
                                <span>Backend Developer</span>
                            </TextLoop>
                            .
                        </h1>
                    </div>
                </div>
            </header>
            <div className="home_about">
                <SmallHeader text="What I Do"/>
                <div className="center_text">
                    <p id="center_text_top_id" style={{ ...styles.transitionStyle, opacity: 0 }}>
                        Hi there! I'm Christian, a 21 year old from Toronto, Canada. Coding has been a hobby of mine ever since 
                        I was a kid. What started from playing around with java, doing simple applications, developed in to a 
                        love for programming.
                    </p>

                    <img className="profile_photo" src="https://i.imgur.com/I4dMFbH.jpg" alt="profile-photo"/>

                    <p id="center_text_body1_id" style={{ ...styles.transitionStyle }}>Today I am able to develop computer and mobile applications with languages like java and c++.</p>
                    <p id="center_text_body2_id" style={styles.transitionStyle}>
                        Web development is also one of my passions. I love the whole process, from designing, 
                        all the way to development. Creating unique and pleasant website experiences is what I'm all about.
                    </p>
                    <p id="center_text_conclusion_id" style={styles.transitionStyle}>For a complete summary of all my skills refer to my portfolio.</p>
                </div>
            </div>
        </section>
    );
};

const styles = {
    transitionStyle: {
        transition: "0.3s ease-in-out"
    }
};

export default Home;