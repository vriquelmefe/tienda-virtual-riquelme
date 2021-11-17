import React from 'react'
import ItemList from '../../components/ItemList/ItemList.jsx'
import camisa from '../../img/camisa.jpeg'
import './ItemListContainer.css'

const ItemListContainer = ({ greeting }) => {

  return (
    <div className="container">
      <h2 className="titulo-greeting my-4">{greeting}</h2>
      <div className="card">
        <div className="card-body">
          <ItemList imagen={camisa} name="Camisa" size="s" price="$5.000" stock="5" />
        </div>
      </div>
    </div>
  )
}

export default ItemListContainer
