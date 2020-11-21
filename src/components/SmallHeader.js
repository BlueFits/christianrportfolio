import React from "react";

const SmallHeader = ({ text, color }) => {
    return (
        <div className="small_header">
            <div style={{ borderColor: color }} className="thin_line" />
                <h2 style={{ color: color }} className="small_header_text">{text}</h2>
            <div style={{ borderColor: color }} className="thin_line" />
        </div>
    );
};

export default SmallHeader;