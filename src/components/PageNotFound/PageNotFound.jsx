import React from 'react'
import notFound from  '../../assets/img/notFound.gif'

const PageNotFound = () => {
    return (
        <div className="container text-center">
            <img src={notFound} alt="Pagina no encontrada" />
        </div>
    )
}

export default PageNotFound
