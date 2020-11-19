import React, { useEffect, useState } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { HiMenuAlt4 } from "react-icons/hi";

import Parallax from "../components/Parallax";

import CompSci from "../assets/images/CompSci.svg";

const Home = () => {
    //Modularize this
    useEffect(() => {
        const handleScroll = () => {
            const offset = document.getElementById("home").scrollTop;
            document.getElementById("parallax").style.backgroundPositionY = (offset * -0.1) + "px";
        };
        document.getElementById("home").addEventListener("scroll", handleScroll);
        return () => document.getElementById("home").removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <section id="parallax" className="home_section">
            <nav>
                <ul className="nav_li_container">
                    <li><AnchorLink className="anchorLink_style" herf="#">Christian Rojas</AnchorLink></li>
                    <li><a className="link_styles" href="#">Instagram</a></li>
                    <li><a className="link_styles" href="#">LinkedIn</a></li>
                </ul>
                <div>
                    <HiMenuAlt4 size={28}/>
                </div>
            </nav>
            <header>
                <div className="header_elems_container">
                    <div className="img_header_container">
                        <img height="100%" src={CompSci} alt="compSci.svg"/>
                    </div>
                    <div className="header_text">
                        <h1>Hello, my name's Christian. I am a software engineer</h1>
                    </div>
                </div>
            </header>
            <div className="home_about">
                {/* <Parallax id="home" percentage={0.2}>
                    <h1>Salut</h1>
                </Parallax> */}
                <h1>Salut</h1>
            </div>
        </section>
    );
};

export default Home;