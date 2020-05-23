import React from "react";
import "./Footer.css"

function Footer() {
    return (
        <div>
            <p id="detailslink" className="fixed-bottom col-sm-12">
                Click on the icons for my LinkedIn, Github and Resume.
            </p>
            <nav className="navbar fixed-bottom navbar-dark bg-dark" id="navbar">
                <div id="footerfont">&copy; Rita Pang 2020</div>
            </nav>
        </div>
    )
}

export default Footer;