import React from 'react'
import CounterDisplay from '../CounterDisplay/CounterDisplay'
import './ItemDetail.css'

const ItemDetail = ({ item }) => {
  return (
    <div className="col-12 col-lg-8 col-xl-10 mx-auto">
    <div className="card  mb-3 mt-4" key={item.id}>
      <div className="row no-gutters">
        <div className="col-md-4">
          <img src={item.imagen} alt={item.name}  className="h-100 img-detail"/>
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title">{item.name}</h5>
            <p className="card-text">{item.description}</p>
            <h6 className=" mb-2 text-muted ">Talla: <span className="size">{item.size}</span></h6>
            <h6 className="card-subtitle mb-2">Precio: <span className="font-weight-bold size">{item.price}</span></h6>
            <hr></hr>
            <CounterDisplay initial={1} stock={item.stock} />
            <h6 className="mt-3">Stock disponible: {item.stock}</h6>
          </div>
        </div>
      </div>
    </div>

    </div>


  )
}

export default ItemDetail
