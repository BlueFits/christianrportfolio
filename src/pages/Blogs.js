import React, { useState } from "react";

//Blogs
import Card1 from "./blogs/Card1";

const Blogs = ({ blogState }) => {

    const blogs = [
        <Card1 
            blogState={blogState}
        />,
    ];

    const [blogIndex, setBlogIndex] = useState(0);

    return (
        <section className="blog_section">
            {blogs[blogIndex]}
        </section>
    );
};

export default Blogs;