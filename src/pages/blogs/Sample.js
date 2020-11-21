import React from "react";

import SmallHeader from "../../components/SmallHeader";

import sampleImage from "../../assets/images/sample.JPG";

const Sample = () => {
    return (
        <div className="blog_container" style={{ backgroundImage: `url(${sampleImage})`  }}>
            <div className="black_overlay" />
            <div className="blog_content">
                <SmallHeader text="Blog #1"/>
                <div className="blog_texts_container">
                    <h1>Sample</h1>
                    <p>
                        Back to the nature. Only my second time experiencing true wilderness
                        hiking, this time at the Algonquin highland trail.
                    </p>
                </div>

                <div className="cta_1">
                    <p>Read More</p>
                </div>
            </div>
        </div>
    );
};

export default Sample;