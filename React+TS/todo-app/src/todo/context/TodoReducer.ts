import { Todo, TodoState } from "../interfaces/interfaces";

type TodoAction = 
    | { type: 'addTodo', payload: Todo }
    | { type: 'toggleTodo', payload: { id: string } };

export const todoReducer = ( state: TodoState, action: TodoAction ): TodoState => {

    console.log(action);

    switch ( action.type ) {
        case 'addTodo':
            return {
                // Recordemos que simpre hay que devolver un nuevo estado sin modificar el anterior
                ...state,
                // Devolvemos el nuevo todo en el cual mando todos los todos anteriores y añadimos el payload
                todos: [ ...state.todos, action.payload ]
            }
        
        case 'toggleTodo':
            return {
                ...state,
                // Como ej JS los objetos se pasan por referencia esparcimos todas las propiedades
                // ({...todo}) para asegurarme de que estoy creando uno nuevo 
                todos: state.todos.map( ({ ...todo }) => {
                    if( todo.id === action.payload.id ){
                        todo.completed = !todo.completed;
                    }
                    return todo;
                })
            }
    
        default:
            return state;
    }

}