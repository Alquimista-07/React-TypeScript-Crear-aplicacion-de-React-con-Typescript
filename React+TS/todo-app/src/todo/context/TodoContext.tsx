// Acá nos vamos a crear un contexto, y la idea de crear un contexto es que este sea capaz de distribuir la información
// del estado o información que queremos que sea compartida por todos los componentes sin importar que tan anidados estén
// dentro de otros componentes. Por lo tanto el context es básicamente un contenedor o un espacio para que podamos utilizar
// y consumir información a lo largo de diferentes componetes sin necesidad de mandar todo por los props (argumentos).
// Adicionalmente este TodoContext también me sirve a mi para crear  mi proveedor de información que es el que va a servir para
// compartir toda la información en sus componenetes hijos.

import { createContext } from "react";
import { TodoState } from '../interfaces/interfaces';

export type TodoContextProps = {
    todoState: TodoState;
    toggleTodo: ( id: string ) => void;
}

// Por lo tanto indicamos el tipo dentro de <> que indica que lo que va a fluir dentro es un TodoContextProps.
// Adicionalmente como no me intereza inicializar en este punto ya que lo tengo en el provider y por lo tanto
// voy a pasar un objeto vacío una forma para evitar que typescript se queje es indicarle que ese objeto vacío
// va a ser de tido TodoContextProps usando la palabra reservada as
export const TodoContext = createContext<TodoContextProps>({} as TodoContextProps);