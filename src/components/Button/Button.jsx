import React from 'react'
import './Button.css'

const Button = ({children, callShow}) => {
    return (
        <button className="agregar" onClick={callShow}>{children}</button>
    )
}

export default Button
