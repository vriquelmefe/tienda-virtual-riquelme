import React from 'react'
import './ItemProducto.css'
import { useHistory } from 'react-router-dom'

const ItemProducto = ({ id, name, imagen, category, description }) => {
  const history =useHistory()
  return (
    <div className="col-lg-5 col-md-6 col-sm-12">
      <div className="card mb-4 p-3">

        <div>
          <img
            src={imagen}
            className="imagen card-img-top"
            alt="Camisa" />
          <h3>{name}</h3>
          <p><b>Descripción:</b> {description}</p>
        </div>
        <hr></hr>
        <button className="boton-detalle" onClick={() =>history.push(`/category/${category}/${id}`)}>Ver más detalle</button>
       

      </div>
    </div>
  )
}

export default ItemProducto
