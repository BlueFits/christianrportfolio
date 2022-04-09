import React, { useEffect } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { HiMenuAlt4 } from "react-icons/hi";
import TextLoop from "react-text-loop";

import NextTab from "../components/NextTab";

import Colors from "../constants/Colors";

import ParallaxEffect from "../effects/ParallaxEvent";
import ScrollPageEvent from "../effects/ScrollPageEvent";
import Animations from "../effects/Animations";

import SmallHeader from "../components/SmallHeader";

import CompSci from "../assets/images/CompSci.svg";

const Home = ({ navHandler, nextOnClick, openProject }) => {

    useEffect(() => ParallaxEffect("home", "home_parallax", 0.35), [ParallaxEffect]);
    useEffect(() => ScrollPageEvent("home", nextOnClick), [ScrollPageEvent]);

    useEffect(() => {

        const homeElement = document.getElementById("home");
        const centerTop = document.getElementById("center_text_top_id");
        const centerBody1 = document.getElementById("center_text_body1_id");
        const centerBody2 = document.getElementById("center_text_body2_id");
        const centerConclusion = document.getElementById("center_text_conclusion_id");

        const maxPageHeight = (homeElement.scrollHeight - homeElement.clientHeight) - 1;

        const handleScroll = () => {
            const offset = homeElement.scrollTop;

            if (offset >= maxPageHeight) {
                document.getElementById("home_nextTab_Id").style.transform = "translateY(-15px)";
            } else {
                document.getElementById("home_nextTab_Id").style.transform = "translateY(100px)";
            }

            if (offset >= 250) {
                Animations.fadeAndScale.init(centerTop)
            } else {
                Animations.fadeAndScale.onAnim(centerTop);
            }
            
            if (offset >= 1350) {
                Animations.fadeAndScale.init(centerBody1);
            } else {
                Animations.fadeAndScale.onAnim(centerBody1);
            }

            if (offset >= 1400) {
                Animations.fadeAndScale.init(centerBody2);

            } else {
                Animations.fadeAndScale.onAnim(centerBody2);
            }

            if (offset >= 1420) {
                Animations.fadeAndScale.init(centerConclusion);
            } else {
                Animations.fadeAndScale.onAnim(centerConclusion);
            }
        };
        
        homeElement.addEventListener("scroll", handleScroll);

        return () => {
            homeElement.removeEventListener("scroll", handleScroll);
        }
    });

    return (
        <section id="home_parallax" className="home_section">
            <nav className="nav_home_container">
                <ul className="nav_li_container">
                    <li><AnchorLink className="anchorLink_style" herf="#">Christian Rojas</AnchorLink></li>
                    <li><a className="link_styles" target="_blank" rel="noreferrer" href="https://www.facebook.com/profile.php?id=100047736457748">Facebook</a></li>
                    <li><a className="link_styles"  target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/christian-rojas-16194a186">LinkedIn</a></li>
                    <li><a className="link_styles"  target="_blank" rel="noreferrer" href="https://github.com/BlueFits">Github</a></li>
                </ul>
                <div onClick={navHandler} unselectable="on" className="nav_button_container">
                    <HiMenuAlt4 size={35} className="nav_button"/>
                </div>
            </nav>
            <header>
                <div className="header_elems_container">
                    <div className="header_texts_container">
                        <div className="header_sub_text_container">
                            {/* <div style={{ borderColor: Colors.secondary }} className="thin_line" /> */}
                            <span className="header_sub_text">Hi, my name is</span>
                            {/* <div style={{ borderColor: Colors.secondary }} className="thin_line" /> */}
                        </div>
                        <div className="header_main_text">
                            <h1>Christian Rojas.</h1>
                            <h1 className="text_secondary">I am a software engineer.</h1>
                        </div>
                        <div className="header_description text_secondary">
                            <p>
                                I'm a Toronto-based software engineer who specializes in
                                building responsive and interactive digital experiences in
                                both mobile and computer platforms.
                            </p>
                        </div>
                        <div className="header_buttons_container">
                            <div className="about_cta" onClick={() => openProject()}>
                                <p>PROJECTS</p>
                            </div>
                            <div className="about_cta" onClick={() => window.open("https://resume.creddle.io/resume/3fbeoy5muom", '_blank').focus()}>
                                <p>DOWNLOAD CV</p>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
            <div className="home_about">
                <SmallHeader color={Colors.secondary} text="About Me"/>
                <div className="center_text text_secondary">
                    <p id="center_text_top_id" style={{ ...styles.transitionStyle, opacity: 0 }}>
                        Hi there! I'm Christian, a 21 year old from Toronto, Canada. What started from playing around with java as a kid, building simple applications for fun, developed in to a 
                        love for programming.
                    </p>

                    <img className="profile_photo" src="https://i.imgur.com/0KsBXiN.jpg" alt="me_posing"/>

                    <p id="center_text_body1_id" style={{ ...styles.transitionStyle }}>
                        Fast-forward to today, I am able to 
                        make software on both <span style={{ color: "#fff" }}>mobile and computer platforms</span> using different programming 
                        languages like JavaScript, Java, or Python. My main focus these days is building
                        responsive and interactive websites using the <span style={{ color: "#fff" }}>MERN stack.</span>
                    </p>
                    <p id="center_text_body2_id" style={styles.transitionStyle}>
                        Here are a few technologies I've been working with recently:
                    </p>
                    {/* <p id="center_text_conclusion_id" style={styles.transitionStyle}>For a complete summary of all my skills refer to my portfolio.</p> */}
                    <ul className="tech_ul_style" id="center_text_conclusion_id" style={styles.transitionStyle}>
                        <div>
                            <li>JavaScript (ES6+)</li>
                            <li>Node.js</li>
                            <li>React</li>
                        </div>
                        <div>
                            <li>React-Native</li>
                            <li>MongoDB</li>
                            <li>Express</li>
                        </div>
                    </ul>
                </div>
            </div>

            <div id="home_nextTab_Id" className="home_nextTab_container">
                <NextTab 
                    text="Scroll To Next Page"
                    // color={Colors.secondary}
                    textColor="#fff"
                    onClick={nextOnClick}
                />
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