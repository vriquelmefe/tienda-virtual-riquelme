import React from 'react'
import './ItemList.css'


const ItemList = ({imagen, name, price, size}) => {
    return (
        <div>
            <li className="list"><img src={imagen} className="imagen"/>{name} <span className="size">Talla: {size}</span> <b>{price}</b></li>
        </div>
    )
}

export default ItemList
