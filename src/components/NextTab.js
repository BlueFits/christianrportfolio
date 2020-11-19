import React from "react";

const NextTab = ({ text, color, onClick }) => {
    return (
        <div onClick={onClick} style={{ backgroundColor: color }} className="next_tab">
            <p style={{ color: "#fff" }}><strong>{text}</strong></p>
        </div>
    );
};

export default NextTab;