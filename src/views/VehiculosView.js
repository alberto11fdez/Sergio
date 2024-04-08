import React from 'react'
import Navbar from "../componentes/Navbar"
import Footer from "../componentes/Footer"
import "../stylesheets/VehiculosView.css"

function VehiculosView({vehiculo}) {
  return (
    <div>
      <Navbar/>
        <div className='container'>
        <img src={vehiculo.imagen} alt={vehiculo.titulo + " imagen "} />
        <h1>{vehiculo.titulo}</h1>
        <h2>{vehiculo.descripcion}</h2>      
        </div>
      <Footer/>
    </div>
  )
}

export default VehiculosView