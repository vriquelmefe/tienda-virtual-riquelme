import React from 'react'
import CounterDisplay from '../CounterDisplay/CounterDisplay'
import Swal from 'sweetalert2'

const ItemProducto = ({ name, price, imagen, size, stock,description }) => {
  const detalle = () => {
    Swal.fire('Aun no esta habilitada la descripción, intente en un par de clases mas adelante 😅')
  }
  return (
    <div className="mx-4">

      <li className="card p-3" >
        <div>
        <img
          src={imagen}
          className="imagen card-img-top"
          alt="Camisa" />
          <p><b>Descripción:</b> { description }</p>


        </div>
        <hr></hr>

        <h5 class="card-title">{name}</h5>

        <h6 className=" mb-2 text-muted ">Talla: <span className="size">{size}</span></h6>

        <h6 class="card-subtitle mb-2">Precio: <span className="font-weight-bold size">{price}</span></h6>
        <hr></hr>
        <div className="card-body">
          <h6>Stock disponible: {stock}</h6>
        </div>

        <button onClick={detalle}>Ver más detalle</button>

        <CounterDisplay initial={1} stock={stock} />
      </li>
    </div>
  )
}

export default ItemProducto
