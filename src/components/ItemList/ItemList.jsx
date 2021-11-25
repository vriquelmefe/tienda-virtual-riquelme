import React from 'react'
import './ItemList.css'

import ItemProducto from '../ItemProducto/ItemProducto'


const ItemList = ({ listproducto }) => {
  return (
    
    <div className="row d-flex justify-content-between">
      {
      listproducto.map(producto => 
        <ItemProducto  id={producto.id } name={producto.name} price={producto.price} imagen={producto.imagen} stock={producto.stock} size={producto.size}  description={producto.description} key={producto.name}/>
      )
      }

    </div>

  )
}

export default ItemList
