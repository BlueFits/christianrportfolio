import React from "react";

const NextTab = ({ text, color, onClick, textColor }) => {
    return (
        <div onClick={onClick} style={{ backgroundColor: color }} className="next_tab">
            <p style={{ color: textColor }}><strong>{text}</strong></p>
        </div>
    );
};

export default NextTab;