import React, { useEffect } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { HiMenuAlt4 } from "react-icons/hi";

import ParallaxEffect from "../effects/ParallaxEvent";

import SmallHeader from "../components/SmallHeader";

import CompSci from "../assets/images/CompSci.svg";

const Home = () => {

    useEffect(() => ParallaxEffect("home", "home_parallax", 0.1), [ParallaxEffect]);

    return (
        <section id="home_parallax" className="home_section">
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
                <SmallHeader text="What I Do"/>
                <div className="center_text">
                    <p>
                        Hi there! I'm Christian, a 21 year old from Toronto, Canada. Coding has been a hobby of mine ever since 
                        I was a kid. What started from playing around with java, doing simple applications, developed in to a 
                        love for programming.
                    </p>

                    <img alt="profile-photo"/>

                    <p>Today I am able to develop computer and mobile applications with languages like java and c++.</p>
                    <p>
                        Web development is also one of my passions. I love the whole process, from designing, 
                        all the way to development. Creating unique and pleasant website experiences is what I'm all about.
                    </p>
                    <p>For a complete summary of all my skills refer to my portfolio.</p>
                </div>
            </div>
        </section>
    );
};

export default Home;