import { useState, useEffect, useRef } from "react";

/*
El hook useEfect sirve cuando nosotros vamos a tener cambios la interfaz, por ejemplo 
cuando tipeo algo en un input quiero que vaya mostrando en o otro mensaje por consola 
lo que voy tipeando. Es decir por ejemplo que vamos a ejecutar una función cada vez 
que el valor del input cambie.
  
En este caso el use efect va a estar pendiente del componente donde se esta usando,
adicionalmente si no especificamos el arreglo vacío [], es decir:

    useEffect( () => {
      console.log('render');
    });

Va a estar siempre pendiente y en este caso cada vez que el input cambie va a mostrar el 
consol.log('rencer'), pero si no queremos dicho comportamiento y que se ejecute un sola 
vez cuando se crea el componente especificamos el arreglo vacío antes mencionado.

Por lo tanto su primer parámetro sería una función normal o una arrow function y en caso de que 
solo lo queremos ejecutar la primera vez que se crea el componente especificariamos como segundo 
argumento el arreglo vacío. 

Ejemplo:

      useEffect( () => {
        console.log('render');
      }, [ ]);

      
También si por ejemplo si quiero que el useEffect se ejecute cuando un por ejemplo counter cambie, es decir, cuando se vaya
incrementando no cuando el input cambie, entonces para ello lo podemos especificar en el arreglo 

      useEffect( () => {
        console.log('render');
      }, [ counter ]);
*/

type TimerArgs = {
    milisegundos: number
}


export const Timer = ( { milisegundos }: TimerArgs ) => {

    const [segundos, setSegundos] = useState(0);

    // El useRef crea una referencia que no importa cuantas veces se reconstruya el componente, siempre va a ser el mismo 
    // puntero en memoria.
    const ref = useRef<NodeJS.Timeout>();

    // El useEffect tiene internamente un callback
    useEffect( () => {

        // Ahora lo que hacemos es revisar si el ref.current existe va a ejecutar el clearInterval
        // Por lo tanto cada vez que cambie el argumento en el useEffect se va a limpiar el intervalo
        ref.current && clearInterval( ref.current );

      ref.current = setInterval( () => setSegundos( s => s + 1) , milisegundos );

    // y luego una serie de dependencias las cuales sirven para saber cuando tengo que volver a disparar el useEffect
    }, [ milisegundos ])
    

  return (
    <>
        <h4>Timer: <small>{ segundos }</small></h4>
    </>
  )
}
