import React from "react";
import "./ProjectContent.css";


function ProjectContent(props) {

    return (

        <div className="col-sm-4 offset-sm-1">
            <div className="card-deck">
                <div className="card cardContainer" id={props.id}>
                    <img className="card-img-top img-fluid imageBox" src={props.image} alt={props.title} />
                    <div className="card-body">
                        <h4 className="card-title">{props.title}</h4>
                        <p className="card-text">{props.caption}</p>
                        <a href={props.url} target="blank"
                            className="btn btn-rita stretched-link">Check it out</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProjectContent;