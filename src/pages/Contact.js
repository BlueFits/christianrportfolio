import React from "react";
import SmallHeader from "../components/SmallHeader";

import Colors from "../constants/Colors";

import transitionImage from "../assets/images/blueTransitional.svg";

const Contact = () => {
    return (
        <section className="contact_section">
            <div className="contact_form_container soft_shadow">
                <div className="contact_header">
                    <SmallHeader
                        text="Say hello"
                        color={Colors.darkgrey}
                    />
                    <h1>Let's Work together.</h1>
                    <div className="contact_header_desc">
                        <p>
                            I’d love to meet up with you to discuss your venture,
                            and potential collaborations.
                        </p>
                    </div>
                </div>

                <div className="contact_body">
                    <div className="contact_info">
                        <div>
                            <img/>
                            <p>hello@sample.com</p>
                        </div>
                        <div>
                            <img/>
                            <p>9 Queen St. Toronto, Ontario.</p>
                        </div>
                        <div>
                            <img/>
                            <p>+1-647-345-7876</p>
                        </div>
                    </div>

                    <form className="contact_form" action="" method="get">
                        <input placeholder="Email"/>
                        <input placeholder="Subject"/>
                        <textarea placeholder="Message"></textarea>
                        <button className="contact_cta">Send</button>
                    </form>
                </div>

                <div className="contact_socials">
                    <p>Instagram</p>
                    <p>Instagram</p>
                    <p>Instagram</p>
                </div>
            </div>

            <div className="contact_transition" />
        </section>
    );
};

export default Contact;