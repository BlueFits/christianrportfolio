import React, { useState } from "react";

//Blogs
import SampleBlog from "../pages/blogs/Sample";

const blogs = [
    <SampleBlog />,
];

const Blogs = () => {

    const [blogIndex, setBlogIndex] = useState(0);

    return (
        <section className="blog_section">
            {blogs[blogIndex]}
        </section>
    );
};

export default Blogs;