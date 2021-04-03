import React, { useEffect, useState } from "react";
import SmallHeader from "../components/SmallHeader";

import Colors from "../constants/Colors";

import ScrollPageEvent from "../effects/ScrollPageEvent";

const Contact = ({ prev }) => {

    useEffect(ScrollPageEvent.bind(this, "footer", false, prev), [ScrollPageEvent]);

    const [email, setEmail] = useState("");
    const [subject, setSubject] = useState("");
    const [message, setMessage] = useState("");

    const submitHandler = (e) => {
        e.preventDefault();
        alert(`Contact not working yet, you can reach me @rojas.christian@outlook.com`);
        console.log("Process this in a backend");
    }

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
                            {/* <img/> */}
                            <p>rojas.christian@outlook.com</p>
                        </div>
                        <div>
                            {/* <img/> */}
                            <p>Toronto, ON Canada</p>
                        </div>
                        <div>
                            {/* <img/> */}
                            <p>+1-647-465-5315</p>
                        </div>
                    </div>

                    <form className="contact_form" onSubmit={submitHandler}>
                        <input placeholder="Email" value={email} onChange={e => setEmail(e.target.value)}/>
                        <input placeholder="Subject" value={subject} onChange={e => setSubject(e.target.value)}/>
                        <textarea placeholder="Message" value={message} onChange={e => setMessage(e.target.value)}></textarea>
                        <button className="contact_cta">Send</button>
                    </form>
                </div>

                <div className="contact_socials">
                    {/* <p>Instagram</p> */}
                    <a target="_blank" rel="noreferrer" href="https://www.facebook.com/profile.php?id=100047736457748">Facebook</a>
                    <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/christian-rojas-16194a186">LinkedIn</a>
                </div>
            </div>

            <div className="contact_transition" />
        </section>
    );
};

export default Contact;