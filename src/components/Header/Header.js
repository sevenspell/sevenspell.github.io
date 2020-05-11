import React from "react";
import "./Header.css"

function Header(props) {
    return (
        <div className="jumbotron jumbotron-fluid" id="headerWrapper">
            <div className="container">
                <h1 className="display-4 headerFont" id="headerFont">{props.h1}</h1>
                <p className="lead headerFont" id="headerPFont">{props.p}</p>
            </div>
        </div>
    )
}

export default Header;