import React from 'react'
import './ItemProducto.css'
import { NavLink } from 'react-router-dom';

const ItemProducto = ({ producto }) => {
  console.log(producto.category);
  return (
    <div className="col-12 col-md-6 col-lg-4">
      <div className="card border-card mb-4 text-left" key={producto.id}>
          <img className="imagen-producto img-fluid" src={producto.imagen} alt={producto.name} />
        <div className="card-body">
          <h5 className="card-title mt-3">{producto.name}</h5>
          <p className="card-text mb-2"><b>Precio:</b> ${producto.price.toLocaleString()}</p>
          <p className="card-text mb-2 text-truncate"><b>Descripción:</b> {producto.description} </p>
          <NavLink 
            className="boton-detalle d-block rounded-pill mt-3" 
            to={`/item/${producto.id}`}
          >
            Ver más detalle
          </NavLink> 
        </div>
      </div>
    </div>
  )
}

export default ItemProducto
