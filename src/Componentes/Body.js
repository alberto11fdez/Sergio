import React from "react";
import Card from "./Card";
import Vehiculos from "../data/Vehiculos"
import "../Stylesheets/Body.css";


const Body=()=>{
    
    const listaArticulos = Vehiculos.map(v => {
        return (<Card title={v.titulo} description={v.descripcion} imagen={v.imagen} />)
    })
    
    return (
            <div className="body-div">
                <div className="container">
                    {listaArticulos}
                    
                </div>
            </div>

        );
}

export default Body;


