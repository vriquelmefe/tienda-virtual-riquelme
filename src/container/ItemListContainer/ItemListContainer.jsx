import React from 'react'
import ItemList from '../../components/ItemList/ItemList.jsx'
import camisa from'../../img/camisa.jpeg'

const ItemListContainer = (props) => {
    
    return (
        <div className="container">
            <h2 className="titulo-greeting my-4">{props.greeting}</h2>
            <ul>
                <ItemList imagen={camisa} name="Camisa" size="s" price="$5.000"/>
            </ul>
        </div>
    )
}

export default ItemListContainer
