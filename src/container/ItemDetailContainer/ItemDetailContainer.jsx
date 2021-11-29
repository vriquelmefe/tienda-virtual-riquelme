import React, { useState, useEffect } from 'react'
import {  useParams } from 'react-router-dom'
import { pedirDatos } from '../../services/pedirDatos';
import Loading from '../../components/Loading/Loading'
import ItemDetail from '../../components/ItemDetail/ItemDetail';
// import { useParams } from 'react-router-dom'

const ItemDetailContainer = () => {
  const [item, setItem] = useState({})
  const [loading, setLoading] = useState(false);
  const {prodId} = useParams()
  useEffect(() => {
    setLoading(true)
    // eslint-disable-next-line react-hooks/exhaustive-deps
    pedirDatos(prodId)
      .then(data => data.find(item => item.id === prodId))
      .then(resp => setItem(resp))
      .catch(err => err)
      .finally(() => {
        setLoading(false)
      })
  }, [prodId])

  // if (loading) {
  //   return <Loading />;
  // }

  return (
    <div className="container text-center">
      {
        loading ? <Loading /> :  <ItemDetail item={item} />

      }

    </div>
  )
}

export default ItemDetailContainer
