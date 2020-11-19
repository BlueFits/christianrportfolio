import React from "react";

const SmallHeader = ({ text }) => {
    return (
        <div className="small_header">
            <div className="thin_line" />
                <h2 className="small_header_text">{text}</h2>
            <div className="thin_line" />
        </div>
    );
};

export default SmallHeader;