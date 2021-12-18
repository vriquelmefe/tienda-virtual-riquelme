import React, { useContext } from 'react'
import { Redirect } from 'react-router-dom';
import { UserContext } from '../../Context/UserContext';
import Administracion from '../Administracion/Administracion';

const PageAdmin = ({children}) => {
    // eslint-disable-next-line
    const {logger, user} = useContext(UserContext)
    return user.email === 'vriquelmefe@gmail.com' ? 
    <>  
    <Administracion />
    
    </>
    
    : <Redirect to="/" />
}

export default PageAdmin
