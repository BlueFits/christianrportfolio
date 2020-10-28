import React from "react";

//Constants
import Colors from "../constants/Colors";

const Contruction = () => {
    return (
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column", backgroundColor: Colors.primary }}>
            <h1 style={{ color: "#fff" }}>This site is under construction :(</h1>
                <p style={{ color: "#fff", margin: "10px 0" }}>You can still reach me at:</p>
            <ul style={{ listStyle: "none", display: "flex", alignItems: "center"}}>
                <li style={{ marginRight: 10 }}><p style={{ color: "#fff" }}>rojas.christian@outlook.com</p></li>
                <li style={{ marginRight: 10 }}><p style={{ color: "#fff" }}>|</p></li>
                <li><a style={{ textDecoration: "none", color: "#fff" }} href="https://www.linkedin.com/feed/"><p>LinkedIn</p></a></li>
            </ul>
        </div>
    );
};

export default Contruction;