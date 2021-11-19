import React from 'react'
import './ItemList.css'

import ItemProducto from '../ItemProducto/ItemProducto'


const ItemList = ({ listproducto }) => {
  return (
    <ul className="d-flex">
      {
      listproducto.map(producto => 
        <ItemProducto name={producto.name} price={producto.price} imagen={producto.imagen} stock={producto.stock} size={producto.size} key={producto.name}/>
      )
      }
    </ul>

  )
}

export default ItemList
