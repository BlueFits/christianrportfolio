import React, { useState, useRef } from "react";
import { animated, useSpring, useChain, config } from "react-spring";

import CogSvg from "../assets/images/Cog.svg";


const Splash = () => {

    const splashRef = useRef();
    const splashAnim = useSpring({
        transform: "translateY(-100%)",
        from: {
          transform: "translateY(0%)",
        },
        ref: splashRef,
    });

    const cogSpring = useSpring({
        from: {
            transform: "rotate(0deg)"
        },
        to: async next => {
            for (let i = 0; i < 4; i++) {
                await next({ transform: "rotate(360deg)" });
                await next({ transform: "rotate(720deg)" });
            }
        },
        config: config.slow,
    });

    const progressRef = useRef();
    const progressSpring = useSpring({
        from: { width: "0%", number: 0 },
        to: { width: "100%", number: 100 },
        config: { ...config.slow, duration: 3000 },
        ref: progressRef,
    });

    const elementRef = useRef();
    const elementSpring = useSpring({
        from: { opacity: 1},
        to: { opacity: 0 },
        ref: elementRef,
    });

    useChain([progressRef, elementRef, splashRef], [2, 6, 6.5]);
    return(      
        <animated.div style={{ ...splashAnim, overflowY: "hidden" }} className='splash_styles'>
            <animated.div style={elementSpring} className="splash_elements_container">
                <div className="cog_loading_container">
                    <animated.div style={cogSpring} className="splash_cog">
                        <img height="100%" src={CogSvg} alt="cog.svg"/>
                    </animated.div>
                    <animated.div style={cogSpring} className="splash_cog">
                        <img height="100%" src={CogSvg} alt="cog.svg"/>
                    </animated.div>
                </div>
                <div className="progress_container">
                    <div style={{ display: "flex", justifyContent: "center" }}>
                        <animated.span className="progress_label">{progressSpring.number.interpolate(x => x.toFixed(0))}</animated.span><p style={{ color: "#fff" }}>%</p>
                    </div>
                    <animated.div style={progressSpring} className="progress_bar"></animated.div>
                </div>
                <div className="splash_texts_container">
                    <div className="splash_header">
                        <h1 style={{ color: "#fff" }}>Welcome</h1>
                        <h1>to my website.</h1>
                    </div>
                    <p>Thanks for dropping by, in here is where my imagination manifests. I hope you enjoy your stay.</p>
                </div>
            </animated.div>
        </animated.div>
    );
};

export default Splash;