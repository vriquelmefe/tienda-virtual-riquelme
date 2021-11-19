import React from 'react'
import CounterDisplay from '../CounterDisplay/CounterDisplay'

const ItemProducto = ({ name, price, imagen, size, stock }) => {
  return (
    <div className="mx-4">

      <li className="card p-3" >
        <img
          src={imagen}
          className="imagen card-img-top"
          alt="Camisa" />

        <h5 class="card-title">{name}</h5>

        <h6 className=" mb-2 text-muted ">Talla: <span className="size">{size}</span></h6>

        <h6 class="card-subtitle mb-2">Precio: <span className="font-weight-bold size">{price}</span></h6>
        <div className="card-body">
          <h6>Stock disponible: {stock}</h6>
        </div>

        <CounterDisplay initial={1} stock={stock} />
      </li>
    </div>
  )
}

export default ItemProducto
