import React, { useEffect, useState } from "react";

const Parallax = ({ children, id, percentage }) => {

    const [offsetY, setOffsetY] = useState(0);

    useEffect(() => {
        const handleScroll = () => setOffsetY(document.getElementById(id).scrollTop);
        document.getElementById(id).addEventListener("scroll", handleScroll);
        return () => document.getElementById(id).removeEventListener("scroll", handleScroll);
    }, [offsetY]);

    return (
        <div style={{ transform: `translateY(${offsetY * percentage}px)`, border: "1px solid red" }}>
            {children}
        </div>
    );
};

export default Parallax;