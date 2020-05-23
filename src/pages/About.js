import React from "react";
import Header from "../components/Header/Header";
import "./About.css";

function About() {
    return (
        <div>
            <Header h1="About Me" p="A Full-Stack Developer with previous banking experience" />

            <div className="container">
                <div className="row">
                    <div className="col-sm-4 offset-sm-1 justify-content-center">
                        <img id="bio-image" alt="myimage" src="./RPYY.jpg" align="left"
                            className="img-fluid" />
                    </div>
                    <div className="col-sm-6 justify-content-center">
                        <div className="container">
                            <div className="row overflow-auto" id="introtext">
                                <p>
                                    I'm from Singapore, and I moved to Sydney, Australia in 2019.
                                </p>

                                <p>
                                    My background is in the banking industry, and in my previous worklife, I used to work closely with our in-house IT teams. What they do behind the scenes intrigued me so I finally signed up for the coding bootcamp to find out for myself the intricacies of coding. I have since graduated from the bootcamp, and am now a full-fledged Full Stack Developer.
                                </p>
                                <p>
                                    In the short term, I'd love to be able to combine my work experience and the knowledge I'm gaining in full stack development today in a role that allows me to utilise my organizational experience, technical skills and creativity. In the long run, I want to be part of a business that serves a need in the society, working with great people and enjoying every moment of my work.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <br/>
                <div className="row sm-4 justify-content-center">
                    <div className="col-sm-6" id="pebbstext">
                        <p>
                            I have a Chihuahua dog called Pebbles, and she is the sweetest pup I could ever ask for. She's
                            ferocious with other people and dogs, but that's only because she's terrified of the world and
                            how much bigger everything else seems to be!
                        </p>
                        <p>
                            We love going on long walks in the park with Pebbles. She has a lot of fun running
                            in the open field, at times trailing at our feet and at other times, sprinting faster than we ever
                            could.
                        </p>
                        <p>
                            She loves being in her own little world with us, and we love her to bits. ❤
                        </p>
                    </div>
                    <div className="col-sm-4">
                        <img alt="pebbsimage" src="./pebbs2.jpg" id="pebbsimg" className="img-fluid" height="250"
                            width="300" />
                    </div>
                </div>
                <br />
                <br />
                {/* <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-sm-11">
                            <h5 id="detailslink">More details on my profile below:</h5>
                        </div>
                        <br/>
                        <br/>
                        <div className="col-sm-3 offset-sm-1">
                            <a href="https://www.linkedin.com/in/ritayypang/" target="blank"
                                className="btn btn-ritaprofile stretched-link" id="linkedin"><i className="fa fa-linkedin fa_custom fa-2x"></i>
                            </a>
                        </div>
                        <br/>
                        <div className="col-sm-3 offset-sm-1">
                            <a href="https://drive.google.com/file/d/1Rq8UkzMdDsikn2C3PIL4oPhJ0u671T-f/view?usp=sharing"
                                target="blank" className="btn btn-ritaprofile stretched-link" id="resume"><i
                                    className="fa fa-file-pdf-o fa_custom fa-2x"></i></a>
                        </div>
                        <br/>
                        <div className="col-sm-3 offset-sm-1">
                            <a href="https://github.com/sevenspell" target="blank" className="btn btn-ritaprofile stretched-link" id="github"><i
                                className="fa fa-github fa_custom fa-2x"></i>
                            </a>
                        </div>
                        <br/>
                    </div>
                </div> */}
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

export default About;