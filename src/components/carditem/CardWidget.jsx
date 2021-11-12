import React from 'react'
import './carditem.css'
import { FaCartArrowDown } from 'react-icons/fa';

const CardItem = ({callShow}) => {
    
    return (
        <div>
            <span>0</span><FaCartArrowDown onClick={callShow} className="button-cart"/>
        </div>
    )
}

export default CardItem
