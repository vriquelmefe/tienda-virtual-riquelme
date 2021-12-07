 
import React , {createContext, useState} from 'react'
import Swal from 'sweetalert2'

export const CartContext = createContext()

const CartContextProvider = ({children}) => {

  const [cart, setCart ] = useState([])
  const[cantidad, setCantidad] = useState(0)

  const agregarCantidad = (quantity)=> {
    setCantidad(cantidad + quantity)
  }
  const addItem = (item, quantity) => {
    if(isInCart(item.id)){
      Swal.fire('el producto ya esta en el carrito')
    } else {
      item.cantidad += quantity
      setCart([...cart, item])
    }
  }
  const isInCart = (id) => {
    return cart.some( prod => prod.id === id )
  }

  return (
    <CartContext.Provider value={{cart, addItem,agregarCantidad}}>
      {children}
    </CartContext.Provider>
  )
}

export default CartContextProvider