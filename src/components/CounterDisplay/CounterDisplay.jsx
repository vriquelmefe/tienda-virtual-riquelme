import React from 'react'
import { useState } from 'react';
import './CounterDisplay.css'
import Button from '../Button/Button'
import Swal from 'sweetalert2'


const CounterDisplay = ({ stock, initial }) => {
  const [counter, setCounter] = useState(initial);


  const onIncrement = () => {
    setCounter(counter + 1)
  }
  const onDecrement = () => {
    setCounter(counter - 1)
  }
  const onAdd = () => {
    Swal.fire('Click agregar al carrito funciona')
  }
  return (
    <div className="border-counter">
      <button className="button-restar" onClick={onDecrement} disabled={counter === 1}>-</button>
      <span className="contador">{counter}</span>
      <button className="button-sumar" onClick={onIncrement} disabled={counter === stock}>+</button>
      <div>
      <Button callShow={onAdd}>
        Agregar al carro
      </Button>

      </div>
    </div>
  )
}

export default CounterDisplay
