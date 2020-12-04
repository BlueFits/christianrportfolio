import React from "react";
import { AiFillCloseCircle } from "react-icons/ai";

import Colors from "../constants/Colors";

const NavMenu = ({ onClick, navStatus }) => {
    return (
        <div className={`nav_menu ${navStatus}`}>
            <div className="nav_illustration"></div>
            <div className="nav_content">
                <AiFillCloseCircle onClick={onClick} className="nav_menu_close" color={Colors.primary} size={65} />
                <div className="nav_inner">
                    <div className="nav_info">
                        <div className="nav_personal_info">
                            <div>
                                <img/> 
                                <p>hello@ui8.net</p>
                            </div>
                            <div>
                                <img/> 
                                <p>9 Coronation Dr. ON M1E2H2</p>
                            </div>
                            <div>
                                <img/> 
                                <p>+1 123 456 1234</p>
                            </div>
                        </div>

                        <div className="nav_menu_socials">
                            <div>
                                <img/>
                                <a href="#" className="menu_socials_text">Dribbble</a>
                            </div>
                            <div>
                                <img/>
                                <a href="#" className="menu_socials_text">Instagram</a>
                            </div>
                        </div>
                    </div>
                    <ul>
                        <li><h1>About</h1></li>
                        <li><h1>Work</h1></li>
                        <li><h1>Services</h1></li>
                        <li><h1>Contact</h1></li>
                    </ul>
                </div>
            </div>
        </div>
    )
};

export default NavMenu;