import React, { useState, useEffect } from 'react'
import ItemList from '../../components/ItemList/ItemList.jsx'
import './ItemListContainer.css'
import todosLosProductos from '../../productos.js'


const ItemListContainer = ({ greeting }) => {
  const [productos, setProductos] = useState([])

  
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => resolve(todosLosProductos), 2000);
  });

  useEffect(() => {
    // eslint-disable-next-line react-hooks/exhaustive-deps
    promise.then(productosResponse =>
      setProductos(productosResponse))
  }, [])

  return (
    <div className="container">
      <h2 className="titulo-greeting my-4 text-white">{greeting}</h2>
      
      <ItemList className="container-fluid" listproducto={productos} />
    </div>
  )
}

export default ItemListContainer
