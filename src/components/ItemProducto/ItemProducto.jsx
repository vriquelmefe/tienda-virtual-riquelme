import React from 'react'
import './ItemProducto.css'
import { NavLink } from 'react-router-dom';

const ItemProducto = ({ producto }) => {
  console.log(producto.category);
  return (
    <div className="col-lg-3 col-md-5 col-sm-12 mx-2 border-card">
      <div className="card-deck mb-4" key={producto.id}>
        <div className="card m-0">
            <img
              src={producto.imagen}
              className="imagen img-fluid"
              alt="Camisa" />
          <div className="card-body">
            <h3>{producto.name}</h3>
            <div>

            <p><b>Descripción:</b> {producto.description}</p>
            </div>
            <NavLink className="boton-detalle" to={`/item/${producto.id}`}>Ver más detalle</NavLink>

          </div>
        </div>
      </div>
    </div>
  )
}

export default ItemProducto
