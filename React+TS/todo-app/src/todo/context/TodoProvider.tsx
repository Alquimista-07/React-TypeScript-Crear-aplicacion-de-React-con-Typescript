import { useReducer } from 'react';
import { TodoState } from '../interfaces/interfaces';
import { TodoContext } from './TodoContext';
import { todoReducer } from './TodoReducer';

// Vamos a crearnos una interface es como queremos que luzca el estado inicial.
// Y va a ser del tipo de la interface que definimos y que indica como quiero que
// luzca el todo
const INITIAL_STATE: TodoState = {
    todoCount: 2,
    todos: [
        {
            id: '1',
            description: 'Recolectar las piedras del infinito',
            completed: false
        },
        {
            id: '2',
            description: 'Piedra del alma',
            completed: false
        }
    ],
    completed: 0,
    pending: 2
}

interface props {
    // Y los children es un componente JSX y básicamente eso es lo que se tiene que definirle
    children: JSX.Element | JSX.Element[]
}

// Para crear el provider o proveedor de información necesitamos importar el context en este caso el TodoContext,
// y pasale por los props los children, pero para no escribir props.children lo podemos desestructurar
// y como estamos trabajando con typescript le indicamos el tipo el cual podemos decirle como queremos 
// que luzcan por ejemplo usando una interface. Y este provider lo vamos a colocar en el componente principal o root
// que es donde estamos renderizando la información, en este caso el Todo.tsx
export const TodoProvider = ( { children }: props ) => {
    
    // Todo lo que yo defina en el value (<TodoContext.Provider value={{}}>) del va a ser posible obtenerlo afuera utilizando el context.
    // Pero para crear algo un poco más apegado a la realidad ya que usualmente cuando nosotro trabajamos con un provider mantenemos un 
    // estado acá ya sea por ejemplo todo el estado (INITIAL_STATE) o mantenemos variables o creamos funciones, que esas funciones van a 
    // ser compartidas a lo largo de todos los componentes a través del provider entonces vamos a hacer algo más apegado a la realidad 
    // creandonos un reducer para manejar todo el estado (INITIAL_STATE) y así poder mandar acciones y demás cosas que vimos en el tutorial 
    // del useReducer. Y este lo creamos dentro de context y lo llamamos TodoReducer.ts, por lo tanto ya con él creado lo usamos.
    const [todoState, dispatch] = useReducer( todoReducer , INITIAL_STATE );

    // Esta función es la que queiro que se ejecute cuando haga doble click sobre el item para cambiar el estado, y como se mencionó anteriormente
    // en el value podemos mandarla para que pueda ser usada afuera.
    const toggleTodo = ( id: string ) => {
        dispatch( { type: 'toggleTodo', payload: { id } } )
    }


  return (

    // Y ya con el reducer creado y todo lo demás podemos retornar todo el estado en el provider. Y esto va a permitir que cualquier hijo dentro del
    // TodoProvider que llamamos en el root (Todo.tsx) va a tener acceso a la información.
    <TodoContext.Provider value={{
        todoState,
        toggleTodo
    }}>
        {
        /*Detro del proveedor esto va a ser conocido como un high order component que no es más que un componente que en sus props
          va a recibir el children o hijos que van a ser renderizados acá adentro
        */}
        { children }
    </TodoContext.Provider>
  )
}
