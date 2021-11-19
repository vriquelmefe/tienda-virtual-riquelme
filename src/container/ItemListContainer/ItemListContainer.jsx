import React, { useState, useEffect } from 'react'
import ItemList from '../../components/ItemList/ItemList.jsx'
import camisa from '../../img/camisa.jpeg'
import tarjetero from '../../img/tarjetero.jpeg'
import timbre from '../../img/timbre.jpeg'
import './ItemListContainer.css'


const ItemListContainer = ({ greeting }) => {
  const [productos, setProductos] = useState([])

  const todosLosProductos = [
    { name: 'Camisa', imagen: camisa, size: 'S', price: 10000, stock: 5 },
    { name: 'Timbres', imagen: timbre, size: 'M', price: 5000, stock: 10 },
    { name: 'Tarjetero', imagen: tarjetero, size: 'Simple', price: 2000, stock: 10 }
  ]
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => resolve(todosLosProductos), 2000);
  });

  useEffect(() => {
    promise.then(productosResponse =>
      setProductos(productosResponse))
  }, [])

  return (
    <div className="container">
      <h2 className="titulo-greeting my-4">{greeting}</h2>
      <ItemList listproducto={productos} />
    </div>
  )
}

export default ItemListContainer
