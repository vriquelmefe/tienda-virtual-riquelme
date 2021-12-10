import React, { useState, useEffect } from 'react'
import {  useParams } from 'react-router-dom'
import { pedirDatos } from '../../services/pedirDatos';
import Loading from '../../components/Loading/Loading'
import ItemDetail from '../../components/ItemDetail/ItemDetail';
import { db } from '../../firebase/config'
import { doc, getDoc } from 'firebase/firestore/lite'
// import { useParams } from 'react-router-dom'

const ItemDetailContainer = () => {
  const [item, setItem] = useState({})
  const [loading, setLoading] = useState(false);
  const {prodId} = useParams()
  useEffect(() => {
    setLoading(true)
    // eslint-disable-next-line react-hooks/exhaustive-deps
    const docRef = doc(db, "productos", prodId)
    getDoc(docRef)
    .then((doc) => {
        setItem( {
            id: doc.id,
            ...doc.data()
        } )
    })
    .finally(() => {
        setLoading(false)
    })
}, [])

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
