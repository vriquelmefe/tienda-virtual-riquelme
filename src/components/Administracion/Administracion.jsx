import React from 'react'
import './Administracion.css'
import fondoAdmin from '../../assets/img/fondo-admin.png'

const Administracion = () => {
    return (
        <div className='container text-center'>
            <h2 className='font-weight-bold my-4'>Página administración</h2>
            <img src={fondoAdmin} alt="imagen fondo" />
        </div>
    )
}

export default Administracion
