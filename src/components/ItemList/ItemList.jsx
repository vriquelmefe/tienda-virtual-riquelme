import React from 'react'
import './ItemList.css'
import CounterDisplay from '../CounterDisplay/CounterDisplay'


const ItemList = ({ imagen, name, price, size }) => {
    return (
        <div>
            <li className="list">
                <img src={imagen} className="imagen" alt="Camisa" />
                {name} <span className="size">Talla: {size}</span>
                <b>{price}</b>
                <CounterDisplay initial={1} stock={5}/>
            </li>
        </div>
    )
}

export default ItemList
