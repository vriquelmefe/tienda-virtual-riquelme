import React, { useState, useEffect } from 'react'
import Loading from '../../components/Loading/Loading'
import ItemList from '../../components/ItemList/ItemList.jsx'
import './ItemListContainer.css'
import { pedirDatos } from '../../services/pedirDatos'
import { useParams } from 'react-router'

const ItemListContainer = ({ greeting }) => {
  const [productos, setProductos] = useState([])
  const [loading, setLoading] = useState(false);
  const { catId } = useParams()

  useEffect(() => {
    // eslint-disable-next-line react-hooks/exhaustive-deps
    setLoading(true)
    pedirDatos(catId)
    .then(productosResponse =>{
      if(!catId){
        setProductos(productosResponse)
      }else{
        setProductos(productosResponse.filter(producto => producto.category === catId))
      }
    })
    .catch(err => console.log(err))
    .finally(() => setLoading(false))
  }, [catId])

  if (loading) {
    return <Loading />;
  }
  return (
    <div className="container">
      <h2 className="titulo-greeting my-4 text-white">{greeting}</h2>
      
      <ItemList className="container-fluid" listproducto={productos} />
    </div>
  )
}


export default ItemListContainer
