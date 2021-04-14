import React, { useState, useEffect } from "react";

import NextTab from "../components/NextTab";

import Colors from "../constants/Colors";

import ScrollPageEvent from "../effects/ScrollPageEvent";

//Blogs
import Card1 from "./blogs/Card1";

const Blogs = ({ blogState, nextOnClick, blogNextHidden, prev }) => {

    useEffect(ScrollPageEvent.bind(this, "blogs", nextOnClick, prev), [ScrollPageEvent]);

    const blogs = [
        <Card1 
            blogState={blogState}
        />,
    ];

    const [blogIndex, setBlogIndex] = useState(0);

    return (
        <section className="blog_section">
            {blogs[blogIndex]}

            {/* <div className={`blog_next_container ${blogNextHidden}`}>
                <NextTab 
                    text="Next: Projects"
                    color={Colors.lightgrey}
                    textColor={Colors.darkgrey}
                    onClick={ nextOnClick }
                />
            </div> */}
        </section>
    );
};

export default Blogs;