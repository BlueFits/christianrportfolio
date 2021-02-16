import React from "react";

const NextTab = ({ text, color, onClick, textColor }) => {

    //Anim only works for first page due to Id

    const mouseOverHandler = () => {
        document.getElementById("nextTabTextId").style.transform = "scale(1.1)";
    };

    const mouseOutHandler = () => {
        document.getElementById("nextTabTextId").style.transform = "scale(1)";
    };

    return (
        <div onMouseOver={mouseOverHandler}  onMouseOut={mouseOutHandler} onClick={onClick} style={{ backgroundColor: color }} className="next_tab">
            <p  id="nextTabTextId" style={{ color: textColor, transition: "0.4s ease-in-out" }}><strong>{text}</strong></p>
        </div>
    );
};

export default NextTab;