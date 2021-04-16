import React from "react";
import { AiFillCloseCircle } from "react-icons/ai";
import { HiOutlineMail } from "react-icons/hi";
import { GrLocation } from "react-icons/gr";
import { MdPhoneAndroid } from "react-icons/md"; 

import Colors from "../constants/Colors";

const NavMenu = ({ onClick, navStatus, textStatus, navClick }) => {
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
                                <p>rojas.christian@outlook.com</p>
                            </div>
                            <div>
                                <GrLocation size={28} color={Colors.primary}/>
                                <p>Toronto, ON Canada</p>
                            </div>
                            <div>
                                <MdPhoneAndroid size={28} color={Colors.primary} />
                                <p>+1 647 465 5315</p>
                            </div>
                        </div>

                        <div className="nav_menu_socials">
                            <div>
                                {/* <img/> */}
                                <a href="https://www.facebook.com/profile.php?id=100047736457748" target="_blank" rel="noreferrer" className="menu_socials_text">Facebook</a>
                            </div>
                            <div>
                                {/* <img/> */}
                                <a href="https://www.linkedin.com/in/christian-rojas-16194a186" target="_blank" rel="noreferrer" className="menu_socials_text">LinkedIn</a>
                            </div>
                            <div>
                                {/* <img/> */}
                                <a href="https://github.com/BlueFits" target="_blank" rel="noreferrer" className="menu_socials_text">Github</a>
                            </div>
                        </div>
                    </div>
                    <ul>
                        <li 
                            onClick={() => {
                                onClick();
                                setTimeout(() => {
                                    navClick("home");
                                },500);
                            }}
                        ><span className={`nav_menu_options ${textStatus[0]}`}><h1>About</h1></span></li>
                        <li
                            onClick={() => {
                                onClick();
                                setTimeout(() => {
                                    navClick("blogs", "blogs");
                                },500);
                            }}
                        ><span className={`nav_menu_options ${textStatus[1]}`}><h1>Blogs</h1></span></li>
                        <li
                            onClick={() => {
                                onClick();
                                setTimeout(() => {
                                    navClick("projects", "projects");
                                },500);
                            }}
                        ><span className={`nav_menu_options ${textStatus[2]}`}><h1>Work</h1></span></li>
                        <li
                            onClick={() => {
                                onClick();
                                setTimeout(() => {
                                    navClick("contact");
                                },500);
                            }}                        
                        ><span className={`nav_menu_options ${textStatus[3]}`}><h1>Contact</h1></span></li>
                    </ul>
                </div>
            </div>
        </div>
    )
};

export default NavMenu;