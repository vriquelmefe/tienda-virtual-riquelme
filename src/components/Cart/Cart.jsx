import React, { useContext } from 'react'
import './Cart.css'
import { CartContext } from '../../Context/CartContext'

const Cart = ({ name, price, imagen, cantidad, id }) => {
    const { removerDelCarrito } = useContext(CartContext)

    return (
        <div className="container text-center">

        <div className="card card-style mb-3" max-width="540px">
            <div className="row no-gutters">
                <div className="col-md-4">
                    <img src={imagen} width="200px" height="220px" alt={name}/>
                </div>
                <div className="col-md-8 px-3">
                    <div className="card-body">
                        <h5 className="card-title">{name}</h5>
                        <p className="card-text">Precio: ${price}</p>
                        <p className="card-text">Cantidad: {cantidad}</p>
                        <div>
                        <p className="card-text">Total: ${price * cantidad}</p>
                        </div>

                    <button
                        className="btn btn-danger mt-1"
                        onClick={() => { removerDelCarrito(id) }}
                    >
                        ELIMINAR
                    </button>
                    </div>
                
                </div>
            </div>

        </div>
        </div>


    )

}

export default Cart
