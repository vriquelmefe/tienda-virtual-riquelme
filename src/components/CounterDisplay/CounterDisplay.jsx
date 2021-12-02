import React from 'react'
import { useState } from 'react';
import './CounterDisplay.css'
import Button from '../Button/Button'
import Swal from 'sweetalert2'


const CounterDisplay = ({ stock, initial ,onAdd}) => {
  const [counter, setCounter] = useState(initial);


  const onIncrement = () => {
    if(stock > counter) {
      setCounter(counter + 1)
    }else {
      Swal.fire('Sobrepasa el stock disponible')
    }
  }
  const onDecrement = () => {
    if(counter > initial){
      setCounter(counter - 1)
    }else {
      Swal.fire('No puede ser menos de 1')
    }
  }
  
  return (
    <div className="border-counter mx-auto">
      <button className="button-restar" onClick={ () => onDecrement() } >-</button>
      <span className="contador">{counter}</span>
      <button className="button-sumar" onClick={ () => onIncrement() } >+</button>
      <div>
      <Button callShow={() => onAdd(counter)}>
        Agregar al carro
      </Button>

      </div>
    </div>
  )
}

export default CounterDisplay
