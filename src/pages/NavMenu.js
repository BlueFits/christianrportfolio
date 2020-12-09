import React, { useState } from "react";
import { AiFillCloseCircle } from "react-icons/ai";
import { HiOutlineMail } from "react-icons/hi";
import { GrLocation } from "react-icons/gr";
import { MdPhoneAndroid } from "react-icons/md"; 

import Colors from "../constants/Colors";

const NavMenu = ({ onClick, navStatus, textStatus }) => {
    return (
        <div className={`nav_menu ${navStatus}`}>
            <div className="nav_illustration"></div>
            <div className="nav_content">
                <AiFillCloseCircle onClick={onClick} className="nav_menu_close" color={Colors.primary} size={65} />
                <div className="nav_inner">
                    <div className="nav_info">
                        <div className="nav_personal_info">
                            <div>
                                <HiOutlineMail size={28} color={Colors.primary} /> 
                                <p>hello@ui8.net</p>
                            </div>
                            <div>
                                <GrLocation size={28} color={Colors.primary}/>
                                <p>9 Coronation Dr. ON M1E2H2</p>
                            </div>
                            <div>
                                <MdPhoneAndroid size={28} color={Colors.primary} />
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
                        <li><a className={`nav_menu_options ${textStatus[0]}`} href="#"><h1>About</h1></a></li>
                        <li><a className={`nav_menu_options ${textStatus[1]}`} href="#"><h1>Work</h1></a></li>
                        <li><a className={`nav_menu_options ${textStatus[1]}`} href="#"><h1 className={`nav_menu_options ${textStatus[2]}`}>Services</h1></a></li>
                        <li><a className={`nav_menu_options ${textStatus[1]}`} href="#"><h1 className={`nav_menu_options ${textStatus[3]}`}>Contact</h1></a></li>
                    </ul>
                </div>
            </div>
        </div>
    )
};

export default NavMenu;