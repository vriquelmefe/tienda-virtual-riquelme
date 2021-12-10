import React, { useState, useEffect } from 'react'
import ItemList from '../../components/ItemList/ItemList.jsx'
import Loading from '../../components/Loading/Loading'
import './ItemListContainer.css'
import { useParams } from 'react-router'
import { collection, getDocs, query, where } from 'firebase/firestore/lite'
import { db } from '../../firebase/config'

const ItemListContainer = ({ greeting }) => {
  const [productos, setProductos] = useState([])
  const [loading, setLoading] = useState(false);
  const { catId } = useParams()

  useEffect(() => {
    // eslint-disable-next-line react-hooks/exhaustive-deps
    setLoading(true)
    const productosRef = collection(db, "productos")
    const q = catId ? query(productosRef, where('category', '==', catId)) : productosRef
    getDocs(q)
    .then((snapshot) => {
        const items = snapshot.docs.map((doc) => ({
                id: doc.id, 
                ...doc.data()
            })
        )
        setProductos(items)
    })
    .finally(() => {
        setLoading(false)
    })

  }, [catId])

  // if (loading) {
  //   return ;
  // }
  return (
    <div className="container">
      <h2 className="titulo-greeting my-4 text-center">{greeting}</h2>
      {
        loading ? <Loading /> : <ItemList className="container-fluid" listproducto={productos} />
      }  
    </div>
  )
}


export default ItemListContainer
