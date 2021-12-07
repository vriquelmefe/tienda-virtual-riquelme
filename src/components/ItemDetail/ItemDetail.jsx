import React, {useState, useContext} from 'react'
import CounterDisplay from '../CounterDisplay/CounterDisplay'
import './ItemDetail.css'
//  import Swal from 'sweetalert2'
 import { useHistory } from 'react-router-dom'
 import { CartContext } from '../../Context/CartContext.js'
const ItemDetail = ({ item }) => {
  const [quantity, setQuantity] = useState(0)
  const [comprar, setComprar] = useState(false)
  const history = useHistory()
  const {addItem, agregarCantidad} = useContext(CartContext)
  
  const onAdd = (qty) => {
    setQuantity(qty)
    setComprar(true)
  }
  const handlePurchase = () => {
    addItem(item, quantity)
    agregarCantidad(quantity)
    history.push(`/cart`)
  }
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
            {
              comprar ? <button className="btn btn-success rounded-fill" onClick={handlePurchase}>Ir al Carrito</button> : <CounterDisplay stock={item.stock} onAdd={(qty) => onAdd(qty)} quantity={quantity}  initial={1}/>
            }
            
            <h6 className="mt-3">Stock disponible: {item.stock}</h6>
          </div>
        </div>
      </div>
    </div>

    </div>
  )
}

export default ItemDetail
