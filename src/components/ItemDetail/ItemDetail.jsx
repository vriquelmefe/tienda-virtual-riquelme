import React from 'react'
import CounterDisplay from '../CounterDisplay/CounterDisplay'

const ItemDetail = ({id, name, imagen, description, price, size, stock}) => {
    return (
      <div className="col-12 col-lg-4 mt-4">
        <div className="card mb-4 p-3"  key={id}>
        <div>
          <img
            src={imagen}
            className="imagen card-img-top"
            alt="Camisa" />
        </div>
        <hr></hr>
        <div className="card-body text-center">
          <h5 className="card-title">{name}</h5>
          <p><b>Descripción:</b> {description}</p>
          <h6 className=" mb-2 text-muted ">Talla: <span className="size">{size}</span></h6>
          <h6 className="card-subtitle mb-2">Precio: <span className="font-weight-bold size">{price}</span></h6>
          <hr></hr>

          <CounterDisplay initial={1} stock={stock} />
          <h6 className="mt-2">Stock disponible: {stock}</h6>
        </div>

      </div>

      </div>
    )
}

export default ItemDetail
