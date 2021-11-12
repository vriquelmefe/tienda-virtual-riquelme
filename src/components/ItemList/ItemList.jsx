import React from 'react'
import './ItemList.css'


const ItemList = (props) => {
    return (
        <div>
            <li className="list"><img src={props.imagen} className="imagen"/>{props.name} <span className="size">Talla: {props.size}</span> <b>{props.price}</b></li>
        </div>
    )
}

export default ItemList
