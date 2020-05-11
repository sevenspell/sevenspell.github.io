import React from "react";
import Header from "../components/Header/Header";
import "./Contact.css";

function Contact() {
    return (
        <div>
            <Header h1="Contact Me" p="Reach out to me - I'm friendly!" />
            <div className="container">
                <div className="form-group row">
                    <div className="col-sm-10 offset-sm-1">
                        <form action="https://formspree.io/xrgpqjnl" method="POST">
                            <div>
                                <label for="formGroup" className="formtext">Name</label>
                                <br />
                                <input className="formtextbox" type="text" name="name" placeholder="Your Name" />
                                <br />
                                <br />
                            </div>
                            <div>
                                <label for="formGroup" className="formtext">Email</label>
                                <br />
                                <input className="formtextbox" type="email" name="_replyto" placeholder="example@email.com" />
                                <br />
                                <br />
                            </div>
                            <div>
                                <label for="comment" className="formtext">Message</label>
                                <br />
                                <textarea className="form-control formmessagebox" name="message" rows='5' id='comment'
                                    placeholder="Write your message here."></textarea>
                                <br />
                            </div>
                            <div>
                                <input className="btn btn-rita my-2 my-sm-0" type="submit" value="Send" />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <div className="form-group">
                &nbsp;
            </div>
            <div className="form-group">
                &nbsp;
            </div>
            <div className="form-group">
                &nbsp;
            </div>
        </div>
    )
}

export default Contact;