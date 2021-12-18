import React, { useContext, useState } from 'react'
import { CartContext } from '../../Context/CartContext'
import { db } from '../../firebase/config'
import { collection, addDoc, query, where, Timestamp, getDocs, writeBatch, documentId } from 'firebase/firestore/lite'
import Swal from 'sweetalert2'
import Loading from '../Loading/Loading'

const Checkout = () => {

    const { cart, totalCompra, vaciarCarrito } = useContext(CartContext)
    // const [setOrderId] = useState(null)
    const [loading, setLoading] = useState(false)
    const [values, setValues] = useState({
        nombre: 'Vanessa',
        email: 'code@code.cl',
        telefono: '',
    })

    const handleInputChange = (e) => {

        setValues({
            ...values,
            [e.target.name]: e.target.value,
        })
    }
    const handleEnviar = async (e) => {
        e.preventDefault()

        if (values.nombre.length < 3) {
            alert("Nombre inválido")
            return
        }
        if (values.email.length < 3) {
            alert("Email inválido")
            return
        }
        if (values.tel.length < 7) {
            alert("Teléfono inválido")
            return
        }

        const order = {
            buyer: { ...values },
            items: cart,
            total: totalCompra(),
            date: Timestamp.fromDate(new Date())

        }
        console.log('buyer', order.buyer)
        console.log(order)
        
        const batch = writeBatch(db)
        const ordersRef = collection(db, "orders")
        const productosRef = collection(db, "productos")
        const q = query(productosRef, where(documentId(), 'in', cart.map(el => el.id)))
        
        const outOfStock = []
        
        const productos = await getDocs(q)
        
        setLoading(true)
        productos.docs.forEach((doc) => {
            const itemToUpdate = cart.find((prod) => prod.id === doc.id)

            if (doc.data().stock >= itemToUpdate.cantidad) {
                batch.update(doc.ref, {
                    stock: doc.data().stock - itemToUpdate.cantidad
                })
            } else {
                outOfStock.push(itemToUpdate)
            }
        })

        if (outOfStock.length === 0) {
            addDoc(ordersRef, order)
                .then((res) => {
                    batch.commit()
                    Swal.fire({
                        icon: 'success',
                        title: 'Su orden ha sido registrada',
                        text: `Su número de orden es: ${res.id}`
                    })
                    vaciarCarrito()
                    limpiarFormulario()
                })
                .finally(() => {
                        setLoading(false)
                    })
        } else {
            Swal.fire({
                icon: 'error',
                title: 'No hay stock de los siguientes productos:',
                text: outOfStock.map(el => el.name).join(', ')
            })
        }
    }
        const limpiarFormulario = () => {
            setValues({
                nombre: '',
                email: '',
                telefono: ''
            })
        }
    return (
        <div className='container mt-4'>
            {
                loading ?
                    <Loading />
                    :
                    <>
                        <h2>Checkout</h2>
                        <hr />
                        <div className='card p-4'>
                        <form onSubmit={handleEnviar}>
                            <input
                                className="form-control my-2"
                                type="text"
                                placeholder="Nombre"
                                name="nombre"
                                value={values.nombre}
                                onChange={handleInputChange}
                            />
                              {values.nombre.length === 0 && <small>Este campo es obligatorio</small>}

                            <input
                                className="form-control my-2"
                                type="email"
                                placeholder="Email"
                                name="email"
                                value={values.email}
                                onChange={handleInputChange}
                            />
                             {values.email.length === 0 && <small>Este campo es obligatorio</small>}

                            <input
                                className="form-control my-2"
                                type="tel"
                                placeholder="Teléfono"
                                name="tel"
                                value={values.tel}
                                onChange={handleInputChange}
                            />
                             {values.email.length === 0 && <small>Este campo es obligatorio</small>}
                            <br/>
                            <button className="btn btn-success" type="submit" >Finalizar</button>
                        </form>
                        </div>
                    </>
            }

        </div>
    )
}

export default Checkout
