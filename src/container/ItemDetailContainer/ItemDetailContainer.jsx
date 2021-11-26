import React, { useState, useEffect } from 'react'
import ItemDetail from '../../components/ItemDetail/ItemDetail';
import Loading from '../../components/Loading/Loading'
import {  useParams} from 'react-router-dom'
import { pedirDatos } from '../../services/pedirDatos';
// import { useParams } from 'react-router-dom'

const ItemDetailContainer = () => {
  const [items, setItems] = useState({})
  const [loading, setLoading] = useState(false);
  const {prodId} = useParams()
  useEffect(() => {
    setLoading(true)
    // eslint-disable-next-line react-hooks/exhaustive-deps
    pedirDatos()
      .then(data => setItems(data.find(item => item.id === prodId)))
      .catch(err => err)
      .finally(() => {
        setLoading(false)
      })
  }, [prodId])

  // if (loading) {
  //   return <Loading />;
  // }

  return (
    <div className="container">
      {
        loading ? <Loading /> :  <ItemDetail {...items} />

      }

    </div>
  )
}

export default ItemDetailContainer
