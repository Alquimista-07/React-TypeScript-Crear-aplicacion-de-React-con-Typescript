import { useContext } from "react"
import { TodoContext } from "../context/TodoContext"

// Para evitar importar el useContext cada vez que lo necesitemos y evitar crear muchas importaciones
// lo que podemos hacer es crear un Custom Hook que se encargue de esto.

export const useTodos = () => {

    const { todoState, toggleTodo } = useContext( TodoContext );

    const { todos } = todoState;

    // Exportamos lo que necesitamos usar.
    return {
        todos: todos,
        pendingTodos: todos.filter( todos => !todos.completed ).length,
        toggleTodo
    }

}