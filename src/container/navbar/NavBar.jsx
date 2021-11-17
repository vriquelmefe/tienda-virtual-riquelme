import React from 'react'
import './navbar.css'
import CardWidget from '../../components/Cardwidget/CardWidget.jsx'
import Swal from 'sweetalert2'


const NavBar = () => {
  const cart = () => {
    console.log('hola funciona')
    Swal.fire('Click carrito funciona')
  } 
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-pink">
      <a className="navbar-brand" href="#"><img src="../../logo192.png" width="50px"></img></a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse my-2" id="navbarNav">
        <ul className="navbar-nav mx-auto">
          <li className="nav-item active">
            <a className="nav-link bg-rounded px-4" href="#">Inicio <span class="sr-only">(current)</span></a>
          </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Nosotros</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Productos</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Contacto</a>
            </li>
          <li className="nav-item">
            <a className="nav-link bg-rounded px-4" href="#">Login</a>
          </li>
        </ul>
        <CardWidget callShow={cart}/>
      
      </div>
    </nav>
  )
}

export default NavBar
