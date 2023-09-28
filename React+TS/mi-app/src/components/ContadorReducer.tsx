// El objetivo de useReducer es idéntico al useState que es mantener el estado de la aplicación,
// y usualmente el useReducer se usa para mantener un estado un poco más complejo.

import { useReducer } from "react";

// Estado inicial que inicializa el contador en cero, adicionalmente lo definimos como un objeto ya 
// que dentro de este podríamos tener otro montón de propiedades. Y este initialState no se va a 
// modificar jamás, directamente aquí no se va a modificar jamás, es solo el estado inicial, para modificar
// el state realmente nunca va a suceder eso tampoco nunca vamos a modificar el state realmente lo que se va
// a hacer es crear un nuevo state y para hacer eso se usa una función que usualmente se le conoce como un
// reducer
const initialState = {
    contador: 10
}

// Adicionalmente tenemos que definir todas las acciones (action) que el reducer va a poder manejar y se pueden definir tantas acciones (action)
// como sea necesario. Adicionalmente hay que decir porque no se usa una interface en vez de un type y esto es basicamente porque en la documentación
// lo encontramos de esta forma y generalmente se usa así.
type ActionType = 
    // Este type nos lo estamos inventado, es un nombre de una propiedad común y corriente y la llamamos así pero bien se podría llamar de otra forma.
    // Adicionalmente con | podemos decirle que es de este tipo o de este otro tipo y así sucesivamente.
    | { type: 'incrementar' }
    | { type: 'decrementar' }
    // Como queremos crear una acción que establezca el state en 100 que en este caso llamamos custom pero adicionalmente necesitamos el payload, es decir
    // que argumento le voy a mandar que en este caso indicamos que es de tipo number, pero podemos recibir cualquier cosa, un objeto, un string, etc.
    | { type: 'custon', payload: number };

// Por lo tanto esta función reducer es la que básicamente va a cambiar el estado y el nombre que se le de es indiferente,
// ya que es una función común y corriente y la podríamos llamar por ejemplo cambiarContador, pero la diferencia
// es que esta función (contadorReducer) va a recibir dos argumentos por lo menos, uno que es el state, es decir,
// el estado como se encuentra actualmente y luego como segundo parámetro recibiríamos el action y este action
// es lo que nosotros vamos a usar para retornar un nuevo state. 

// Por ejemplo voy a decile mediante una action hey incrementa en 1 entonces el contador se va a incrementar en 1 o decirle 
// hey decrementa en 1 entonces el contador va a decrementar en 1, o va a haber una action que se llame custom entonces yo 
// le voy a mandar mediante un payload o un argumento le voy a establecer manualmente el valor al contador y eso es todo, 
// entonces tenemos que estar evaluando las posibles acciones.

// Adicionalmente una forma de inferir el tipo del state es inidcando que el type of es de initialState
const contadorReducer = ( state: typeof initialState, action: ActionType ) => {

     // Adicionalmente un reducer siempre va a retornar un state nuevo. Adicionalmente nunca se deben hacer modificaciones al state,
    // es decir, nunca vamos a mutar el objeto initialState, ni tampoco esta función de reducer debe recibir información que no 
    // sean los argumentos que esta recibiendo, por lo tanto el reducer debe retornar un nuevo state con la información que recibe
    // en los argumentos, no debe disparar efectos secundarios, no debe grabar en localstorage, no debe de hacer nada más.

    // Usualmente los reducer trabajan con un switch, se podrían hacer con un if pero el switch es un poco más eficiente
    switch ( action.type ) {
        case 'incrementar':
            return {
                // Rompemos la referencia con el operador spred el state para extraer sus propiedades y no modificarlo para esparcirlo y no mantener la referencia
                // debido a lo que se mencinó anteriormente.
                ...state,
                // Modificamos lo que necesitamos modificar
                contador: state.contador + 1
            }

        case 'decrementar':
            return {
                // Rompemos la referencia con el operador spred el state para extraer sus propiedades y no modificarlo para esparcirlo y no mantener la referencia
                // debido a lo que se mencinó anteriormente.
                ...state,
                // Modificamos lo que necesitamos modificar
                contador: state.contador - 1
            }

        // Creamos la acción custom que recibe el payload para establecer el state a 100
        case 'custon':
            return {
                // Rompemos la referencia con el operador spred el state para extraer sus propiedades y no modificarlo para esparcirlo y no mantener la referencia
                // debido a lo que se mencinó anteriormente.
                ...state,
                // Y acá necesito el payload y donde tenemos el payload en el action
                contador: action.payload
            }
    
        default:
            // Ahora en caso de que se mande una action que no este definida, o no se haga ninguna modificación entonces siempre hay que retornar el state
            return state;
    }

}

export const ContadorReducer = () => {

    // Entonces acá vamos a user el hook, el cual es un arreglo que como primer valor tiene el state que le podemos colocar el nombre que queramos darle
    // y ahí va a venir el estado como se encuentre, luego tenemos el dispatch que es una función que va a ser usada para disparar acciones que para el 
    // ejemplo definimos del tipo ActionType.
    // Y luego viene con el useReducer que pide como primer argumento el reducer que como sabemos el reducer es la función que creamos para retornar siempre 
    // un nuevo state en este caso del ejemplo contadorReducer, el segundo argumento que recibe es el initialState y un tercer argumento es un init que 
    // usualmente se usa para inicializarlo, pero en este caso tenemos el mismo initialState por lo tanto obviamos ese tercer argumento. Dicho init es útil
    // si tenemos que generar un estado un poco más procesado que no puede ser tan rápido.
    // Otra cosa es que el state (contadorState) podemos desestructurarlo para simplificar un poco más el código pero para efectos de la explicación
    // no lo voy a hacer pero hay que tener en cuenta que eso se puede hacer.
    const [ contadorState , dispatch] = useReducer(contadorReducer, initialState);

  return (
    <div className="mt-5">
        <h3>Contador: useState</h3>
        <h4>Contador: { contadorState.contador }</h4>

        {/* Para llamar usamos el dispatch que recibe ActionType y si damos Ctrl + espacio nos va a sugerir el valor o valores que tenemos definidos */}
        <button onClick={() => dispatch({type: 'incrementar'}) } className="btn btn-outline-primary">
            +1
        </button>

        <button onClick={() => dispatch({type: 'decrementar'}) } className="btn btn-outline-primary">
            -1
        </button>

        {/* Ahora que pasaría si necesito crear un botón que ejecute una acción que establezca el state en 100, entonces vamos a tener un tipo que llamamos custom y va a mandar un payload */}
        <button onClick={() => dispatch({type: 'custon', payload: 100}) } className="btn btn-outline-danger">
            Establecer 100
        </button>

    </div>
  )
}
