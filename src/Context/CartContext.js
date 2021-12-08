 
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
      setCart([...cart, {cantidad: quantity, ...item}])
    }
  }
  const totalProductosCarrito = () => {
    return cart.reduce((acc, prod) => acc + prod.cantidad, 0)
  }
  const removerDelCarrito = (id) => {
    setCart( cart.filter(prod => prod.id !== id ) )
  }

  const vaciarCarrito = () => {
    setCart([])
  }
  const totalCompra = () => {
    return cart.reduce((acc, prod) => acc + prod.precio * prod.cantidad, 0)
}
  const isInCart = (id) => {
    return cart.some( prod => prod.id === id )
  }

  return (
    <CartContext.Provider value={{cart, addItem,agregarCantidad,removerDelCarrito,vaciarCarrito,totalCompra,totalProductosCarrito}}>
      {children}
    </CartContext.Provider>
  )
}

export default CartContextProvider