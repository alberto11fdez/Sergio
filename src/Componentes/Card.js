import React from "react";
import "../Stylesheets/Card.css"
import { Link } from "react-router-dom";

function Card({title, descripcion, imagen}){
    return(
        <div className="card">
            <img src={imagen} alt="" className="imagen"/>
            <div className="card-body">
                <Link to={title}><h4 className="card-title">{title}</h4></Link>
                <p className="card-text text-secondary">{descripcion}</p>
            </div>
        </div>
    )
}

export default Card