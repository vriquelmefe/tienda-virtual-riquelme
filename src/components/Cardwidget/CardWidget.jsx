import React, {useContext} from 'react'
import './CardWidget.css'
import { FaCartArrowDown } from 'react-icons/fa';
import { NavLink } from 'react-router-dom'
import { CartContext } from '../../Context/CartContext'

const CardWidget = () => {
    const {totalProductosCarrito, cart} = useContext(CartContext)

    return (
        <NavLink  className="icon-cart" to="/cart"  
            style={{
                visibility: cart.length === 0 ? 'hidden' : 'visible'
            }}
        >
            <FaCartArrowDown className="cartWidget" size="30px"/>
            <span className="cantidad">{totalProductosCarrito()}</span>
        </NavLink>
    )
}

export default CardWidget

