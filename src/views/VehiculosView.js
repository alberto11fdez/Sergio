import React from 'react'
import Navbar from "../Componentes/Navbar"
import Footer from "../Componentes/Footer"
import "../Stylesheets/VehiculosView.css"

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