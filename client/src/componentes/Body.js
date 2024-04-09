import React from "react";
import Card from "./Card";
import Vehiculos from "../data/Vehiculos"
import "../stylesheets/Body.css";
import { useState } from 'react';

const ItemPorPagina = 10;

const Body=()=>{

    const listaArticulos = Vehiculos.map(v => {
        return (<Card title={v.titulo} description={v.descripcion} imagen={v.imagen} />)
    })

    const [datosFromApi, setDatosFromApi] = useState(listaArticulos);

    const [items, setItems] = useState([...listaArticulos].splice(0, ItemPorPagina))

    const [currentPage, setCurrentPage] = useState(0);
  
    const nextHandler = () => {
      const totalElementos = datosFromApi.length;

      const nextPage = currentPage + 1;
  
      const firstIndex = nextPage * ItemPorPagina;
  
      if(nextPage > totalElementos/ItemPorPagina)return;
  
      setItems([...datosFromApi].splice(firstIndex, ItemPorPagina))
  
      setCurrentPage(nextPage);
     }
    
     const prevHandler = () => {
  
        const prevPage = currentPage - 1;
    
        if(prevPage < 0)return;

        const firstIndex = prevPage * ItemPorPagina;
    
        setItems([...datosFromApi].splice(firstIndex, ItemPorPagina))
    
        setCurrentPage(prevPage);
     }
    
   


    
    return (
            <div className="body-div">
                <div className="container">
                    {items}
                </div>
                <div className="paginacion">
                        <button onClick={prevHandler}>Prev</button>
                        <button onClick={nextHandler}>Next</button>
                    </div>
            </div>

        );
}

export default Body;


