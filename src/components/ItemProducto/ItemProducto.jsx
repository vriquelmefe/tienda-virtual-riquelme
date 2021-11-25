import React from 'react'
import CounterDisplay from '../CounterDisplay/CounterDisplay'
import './ItemProducto.css'
import Swal from 'sweetalert2'

const ItemProducto = ({ id, name, price, imagen, size, stock, description }) => {
  const detalle = (id) => {
    Swal.fire('Aun no esta habilitada la descripción, intente en un par de clases más adelante 😅')
  }
  return (
    <div className="col-lg-5 col-md-6 col-sm-12">
      <div className="card mb-4 p-3">

        <div>
          <img
            src={imagen}
            className="imagen card-img-top"
            alt="Camisa" />
          <p><b>Descripción:</b> {description}</p>
        </div>
        <button className="boton-detalle" onClick={detalle(id)}>Ver más detalle</button>
        <hr></hr>
        {/* <div className="card-body text-center">
          <h5 className="card-title">{name}</h5>
          <h6 className=" mb-2 text-muted ">Talla: <span className="size">{size}</span></h6>
          <h6 className="card-subtitle mb-2">Precio: <span className="font-weight-bold size">{price}</span></h6>
          <hr></hr>


          <CounterDisplay initial={1} stock={stock} />
          <h6 className="mt-2">Stock disponible: {stock}</h6>
        </div> */}

      </div>
    </div>
  )
}

export default ItemProducto
