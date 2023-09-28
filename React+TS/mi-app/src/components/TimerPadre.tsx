import { useState } from 'react'
import { Timer } from './Timer'

/*
El hook useRef de React es una herramienta útil para crear y manipular referencias a elementos del DOM en una aplicación de 
React. Una referencia es simplemente una forma de obtener acceso a un elemento específico en el DOM, y puede ser utilizada 
para modificar su comportamiento o estilo.

Uno de los usos más comunes de useRef es para crear una referencia a un elemento de entrada en un formulario y luego utilizar 
esa referencia para obtener el valor de ese elemento en una función de manejo de eventos.
*/
export const TimerPadre = () => {

    const [milisegundos, setMilisegundos] = useState(1000);

  return (
    <div className="mt-5">
        <h3>Timer: useEffect - useRef</h3>

        <span>Milisegundos: { milisegundos }</span>

        <br />

        <button className='btn btn-outline-success'
                onClick={ () => setMilisegundos(1000) }>
            1000
        </button>
        
        <button className='btn btn-outline-success'
                onClick={ () => setMilisegundos(2000) }>
            2000
        </button>

        <Timer milisegundos = { milisegundos }/>
    </div>
  )
}
