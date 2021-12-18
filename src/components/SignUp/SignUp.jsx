import React, { useState } from 'react'
import { useContext } from 'react/cjs/react.development';
import login from '../../assets/img/login2.gif'
import { UserContext } from '../../Context/UserContext';

const SignUp = () => {
    const {signup} = useContext(UserContext);

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSignup = () => {
        signup(email, password)
    }

  return (
      <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <img src={login} alt="login" height="150px" id="exampleModalLabel" className="modal-title mx-auto" />
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
                    <button onClick={handleSignup} className="btn btn-primary">Enviar</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  )
}

export default SignUp

