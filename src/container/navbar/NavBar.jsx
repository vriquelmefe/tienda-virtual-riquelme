import React from 'react'
import './navbar.css'
import CardWidget from '../../components/Cardwidget/CardWidget.jsx'
import Logo from '../../assets/img/logo.png'
// import Swal from 'sweetalert2'
import { NavLink } from 'react-router-dom';
import { CartContext } from "../../Context/CartContext";
import { useContext } from "react";


const NavBar = () => {
  
  const {cart} = useContext(CartContext);
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-pink">
      <NavLink className="navbar-brand" to="/"><img src={Logo} width="50px" alt="logo" className="imagen-logo"></img></NavLink>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse my-2" id="navbarNavDropdown">
        <ul className="navbar-nav ml-auto middle">
          <li className="nav-item">
            <NavLink className="nav-link" to="/">Inicio <span className="sr-only">(current)</span></NavLink>
          </li>
          <li className="nav-item dropdown">
            <NavLink className="nav-link dropdown-toggle" to="/" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-expanded="false">
              Categorías
            </NavLink>
            <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
              <NavLink className="dropdown-item" to="/category/ropa">Ropa</NavLink>
              <NavLink className="dropdown-item" to='/category/manualidades'>Manualidades</NavLink>
              <NavLink className="dropdown-item" to='/category/accesorios'>Accesorios</NavLink>


            </ul>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/contacto">Contacto</NavLink>
          </li>
          <li className="nav-item mr-2">
            <NavLink className="nav-link bg-rounded-login px-3" to="/login">Login</NavLink>
          </li>
          <NavLink to="/cart">
          <CardWidget/>
          <span style={{
            color: 'black'
          }}>{cart.length}</span>

          </NavLink>
        </ul>

      </div>
    </nav>
  )
}

export default NavBar
