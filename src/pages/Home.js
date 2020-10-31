import React from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { HiMenuAlt4 } from "react-icons/hi";

import CompSci from "../assets/images/CompSci.svg";

const Home = () => {
    return (
        <section className="home_section">
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
        </section>
    );
};

export default Home