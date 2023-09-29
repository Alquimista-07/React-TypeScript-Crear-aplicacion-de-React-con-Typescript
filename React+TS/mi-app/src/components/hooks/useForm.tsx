// Este es nuestro CustomHook para el manejo del formulario2.
// Un Custom Hook no es más que una función como un funcional 
// component. Y este hook puede tener también estados o otros
// hooks propios de react o inclusive otros Custom Hooks

import { ChangeEvent, useState } from "react";

// NOTA: Yo necesito reutilizar este formulario en muchos lugares por consecuencia el argumento que tenemos en el useState
//       no va a ser implicitamente los campos del formulario como por ejemplo el email y el nombre porque puede ser que otro
//       formulario no los tenga. Entonces lo que podemos hacer es recibirlo como argumento (props) del useForm pero hay que 
//       tener en cuenta que debemos asignar a fuerza el tipo ya que no podemos dejarlo any ya que podría traernos problemas a 
//       futuro y no es una buen práctica. Entonces para recibir el tipo que proviene del Formulario2 lo especificamos que se
//       va a recibir como un genérico (T) y ya con esto dentro va a saber que es lo que se espera y nos va a dar la ayuda 
//       TypeScript. Una forma de pasar el tipo genético usando una función tradicional se haría de la siguiente forma:
//
//              export function useForm<T>( initialState: T ){}. 
//
//       Y la otra forma para pasar el tipo genérico usando una función de flecha podemos pasar un tipo Object o el que necesitemos
//       pero generalmente es un Object. Adicionalmente podemos pasar uno solo tipo, o dos usando el pipe | y sería de la siguiente
//       forma:
//
//              export const useForm = <T extends Object | T extends Array>( initState: T ) => {}
//
export const useForm = <T extends Object>( initState: T ) => {

    const [formulario, setFormulario] = useState( initState );

    // Esta función va a ser llamada cuando un input cambie y a su ve esta va a llamar el setFormulario
    // para actualizar el estado del formulario y vamos a suponer que siempre tiene el name y el value. 
    // En este caso como estamos usando el onChange el tipo es ChangeEvent que a su vez no lo podemos dejar
    // genérico por lo tanto tenemos que indicarle de que tipo es ya que puede ser un input, un select, un 
    // radio o cualquier objeto html. También teniendo en cuenta que lo que se recibe es un evento podemos 
    // desestructurar para obtener solo lo que nos interesa que en este caso es el target y este ya podemos 
    // extraer el name y value
    const handleChange = ( { target } : ChangeEvent<HTMLInputElement> ) => {
       const { name, value } = target;
       
       // Ahora vamos a usar el setFormulario para actualizar el estado y capturar los valores. Adicionalmente 
       // el formulario podría tener un montón de cambios por lo tanto se recomienda romper la relación con el 
       // spred y cambiar unicamente la propiedad que esta cambiando en este caso el email
       setFormulario({
        ...formulario,
        // Para obtener el valor computamos entre llaves [] y le asignamos su valor que es value
        [ name ]: value
       })
    }

    // Ahora que es lo que vamos a retornar acá y esto es importante. Entonces voy a retornar un objeto
    // con todo lo que necesite y es lo que queremos exponer en el Custom Hook, es decir, exportamos los
    // lo que necesitemos.
    return {
        formulario,
        handleChange,
        //...formulario
    }

}