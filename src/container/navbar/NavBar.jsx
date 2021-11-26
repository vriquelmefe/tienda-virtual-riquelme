import React from 'react'
import './navbar.css'
import CardWidget from '../../components/Cardwidget/CardWidget.jsx'
import Logo from '../../assets/img/logo.png'
import Swal from 'sweetalert2'
import { Link } from 'react-router-dom';


const NavBar = () => {
  const cart = () => {
    console.log('hola funciona')
    Swal.fire('Click carrito funciona')
  } 
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-pink">
      <a className="navbar-brand" href="/"><img src={Logo} width="50px" alt="logo" className="imagen-logo"></img></a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse my-2" id="navbarNav">
        <ul className="navbar-nav ml-auto middle">
          <li className="nav-item">
            <Link className="nav-link" to="/">Inicio <span className="sr-only">(current)</span></Link>
          </li>
          <ul>
            <li className="nav-item">
            <Link className="nav-link" to="/category/ropa">Ropa</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to='/category/manualidades'>Manualidades</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to='/category/accesorios'>Accesorios</Link>
            </li>

          </ul>
            <li className="nav-item">
              <a className="nav-link" href="/">Contacto</a>
            </li>
          <li className="nav-item mr-2">
            <a className="nav-link bg-rounded px-3" href="/">Login</a>
          </li>
          <CardWidget callShow={cart}/>
        </ul>
      
      </div>
    </nav>
  )
}

export default NavBar
