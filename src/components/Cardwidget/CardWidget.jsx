import React from 'react'
import './carditem.css'
import { FaCartArrowDown } from 'react-icons/fa';

const CardItem = ({callShow}) => {
    
    return (
        <div class="icon-cart mt-1">
            <FaCartArrowDown  size="30px" onClick={callShow}/><span>0</span>
        </div>
    )
}

export default CardItem
