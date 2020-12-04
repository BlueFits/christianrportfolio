import React from "react";
import { GrClose } from "react-icons/gr";

const NavMenu = ({ onClick }) => {
    return (
        <div className="nav_menu">
            <div className="nav_illustration"></div>
            <div className="nav_content">
                <GrClose onClick={onClick} className="nav_menu_close" color="#000" size={28} />
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
                                <p>Dribbble</p>
                            </div>
                            <div>
                                <img/>
                                <p>Instagram</p>
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