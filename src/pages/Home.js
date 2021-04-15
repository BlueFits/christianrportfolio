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

const Home = ({ navHandler, nextOnClick }) => {

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

            if (offset >= 1450) {
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
                </ul>
                <div onClick={navHandler} unselectable="on" className="nav_button_container">
                    <HiMenuAlt4 size={35} className="nav_button"/>
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

                    <img className="profile_photo" src="https://i.imgur.com/I4dMFbH.jpg" alt="me_with_guitar"/>

                    <p id="center_text_body1_id" style={{ ...styles.transitionStyle }}>Today I am able to develop computer and mobile applications with languages like java and c++.</p>
                    <p id="center_text_body2_id" style={styles.transitionStyle}>
                        Web development is also one of my passions. I love the whole process, from designing, 
                        all the way to development. Creating unique and pleasant website experiences is what I'm all about.
                    </p>
                    <p id="center_text_conclusion_id" style={styles.transitionStyle}>For a complete summary of all my skills refer to my portfolio.</p>
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