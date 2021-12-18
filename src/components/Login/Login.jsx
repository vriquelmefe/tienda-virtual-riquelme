import React, { useState } from 'react'
import { useContext } from 'react/cjs/react.development';
import { UserContext } from '../../Context/UserContext';
import imagenLogin from '../../assets/img/login2.gif';
import './Login.css'

const Login = () => {
  const {login} = useContext(UserContext);

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

  return (
      <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <img src={imagenLogin} alt="login" height="150px" id="exampleModalLabel" className="modal-title imagenModalLogin" />
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <div >
                <div className="form-group row">
                  <label for="inputEmail3" className="col-sm-2 col-form-label" >Email</label>
                  <div className="col-sm-10">
                    <input type="email" className="form-control" id="inputEmail3" onChange={(e) => setEmail(e.target.value)}/>
                  </div>
                </div>
                <div className="form-group row">
                  <label for="inputPassword3" className="col-sm-2 col-form-label" >Contraseña</label>
                  <div className="col-sm-9 ml-4">
                    <input type="password" className="form-control" id="inputPassword3" onChange={(e) => setPassword(e.target.value)}/>
                  </div>
                </div>
                <div className="form-group row">
                  <div className="col-sm-10">
                    <button onClick={()=> login(email, password)} className="btn btn-primary">Enviar</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  )
}

export default Login
