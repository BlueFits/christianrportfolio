/*
    id - id of element that has the offset
    percetage - speed of parallax
*/
import React, { useEffect, useState } from "react";

const Parallax = ({ children, offsetId, percentage }) => {

    const [offsetY, setOffsetY] = useState(0);

    useEffect(() => {
        const handleScroll = () => setOffsetY(document.getElementById(offsetId).scrollTop);
        document.getElementById(offsetId).addEventListener("scroll", handleScroll);
        return () => document.getElementById(offsetId).removeEventListener("scroll", handleScroll);
    }, [offsetY]);

    return (
        <div style={{ transform: `translateY(${offsetY * percentage}px)`}}>
            {children}
        </div>
    );
};

export default Parallax;