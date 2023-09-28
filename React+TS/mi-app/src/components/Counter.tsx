import { useState } from 'react'

export const Counter = () => {
    
  // La función llamada useState() la cual es un hook devuelve un arreglo que tiene dos parametros, donde el primero es un elemento y el segundo es una 
  // función. Adicionalmente le podemos indicar un valor inicial que queramos en este caso cero (useState(0)) y es la forma como inicializamos la variable
  // counter es decir como si hicieramos let counter = 0; solo que adicionalmente vamos a tener también una función que llamamos setCounter que va a permitir 
  // actualizarlo cuando ocurra un evento.
    const [counter, setCounter] = useState(0);

    const incrementar = ( numero: number = 1 ):void => {
        setCounter( counter + numero );
    }

  return (
    <div className="mt-5">
        <h3>Counter: useState</h3>
        <span>Valor: { counter }</span>
        <br />
        <button 
            onClick={() => incrementar(1) }
            className='btn btn-outline-primary mt-2'>
            +1
        </button>

        <button 
            onClick={() => incrementar(2) }
            className='btn btn-outline-primary mt-2'>
            +2
        </button>

        <button 
            onClick={() => setCounter(0) }
            className='btn btn-outline-danger mt-2'>
            Reset
        </button>
    </div>
  )
}
