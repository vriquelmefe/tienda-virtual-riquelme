import React, { useContext } from 'react'
// import './Cart.css'
import { CartContext } from '../../Context/CartContext'

const Cart = ({ name, price, imagen, cantidad, id }) => {
    const { removerDelCarrito } = useContext(CartContext)

    return (

        <div className="card mb-3" max-width="540px">
            <div className="row no-gutters">
                <div className="col-md-4">
                    <img src={imagen} width="200px" height="200px" alt={name}/>
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="card-title">{name}</h5>
                        <p className="card-text">Precio: ${price}</p>
                        <p className="card-text">Cantidad: {cantidad}</p>

                    <button
                        className="btn btn-danger"
                        onClick={() => { removerDelCarrito(id) }}
                    >
                        ELIMINAR
                    </button>
                    </div>
                </div>
            </div>
        </div>


    )

}

export default Cart
