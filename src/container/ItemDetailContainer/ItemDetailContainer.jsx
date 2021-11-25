import React, { useState, useEffect } from 'react'
import ItemDetail from '../../components/ItemDetail/ItemDetail';
import Loading from '../../components/Loading/Loading'

const ItemDetailContainer = ({ todosLosProductosLista }) => {
  const [items, setItems] = useState([])
  const [loading, setLoading] = useState(false);

  const promesa = new Promise((resolve, reject) => {
    
    setTimeout(() =>
    // setLoading(true),
    resolve(todosLosProductosLista[0]), 2000)
  });
  
  useEffect(() => {
    // eslint-disable-next-line react-hooks/exhaustive-deps
    promesa
    .then(data => setItems(data))
    .catch(err => err)
    // setLoading(false)
    
  }, [])

  if (loading) {
    return <Loading />;
  }

  return (
    <div className="container">

      <ItemDetail props={items} />
    </div>
  )
}

export default ItemDetailContainer
