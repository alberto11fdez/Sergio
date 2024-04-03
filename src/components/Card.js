import React from "react";
import "../stylesheets/Card.css"
import subasta from '../Image/subasta.png'

function Card({title, descripcion, imagen}){
    return(
        <div className="card">
            <img src={imagen} alt="" className="imagen"/>
            <div className="card-body">
                <h4 className="card-title">{title}</h4>
                <p className="card-text text-secondary">{descripcion}</p>
            </div>
        </div>
    )
}

export default Card