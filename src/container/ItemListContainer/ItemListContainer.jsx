import React, { useState, useEffect } from 'react'
import ItemList from '../../components/ItemList/ItemList.jsx'
import camisa from '../../img/camisa.jpeg'
import tarjetero from '../../img/tarjetero.jpeg'
import timbre from '../../img/timbre.jpeg'
import './ItemListContainer.css'


const ItemListContainer = ({ greeting }) => {
  const [productos, setProductos] = useState([])

  const todosLosProductos = [
    { name: 'Camisa', imagen: camisa, size: 'S', price: 10000, stock: 5 , description: 'Suave polera, con telas antitranspirante'},
    { name: 'Timbres', imagen: timbre, size: 'M', price: 5000, stock: 20, description: 'Personalizados, engomado y de larga duración' },
    { name: 'Tarjetero', imagen: tarjetero, size: 'Simple', price: 2000, stock: 10, description: 'Tarjetero de polipropileno, tamaño apropiado para tus credenciales, evitano así perderlas' }
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
