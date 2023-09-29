import { Todo } from "../interfaces/interfaces"
import { useTodos } from "../hooks/useTodos"

interface TodoItemProps {
    todo: Todo
}

export const TodoItem = ( { todo } : TodoItemProps ) => {

  // Al hacer doble click obtenemos la información del contexto y mandamos a llamar la función toggleTodo
  // que definimos en el Provider y como tenemos un Custom Hook que nos permite usar el Context entonces lo 
  // usamos y de esta forma simplificamos y evitamos tantas importaciones.
  const { toggleTodo } = useTodos();

    const handelDblClick = () => {
      toggleTodo( todo.id );
    }

  return (
    <li style={{
      cursor: 'pointer',
      textDecoration: todo.completed ? 'line-through': ''
    }}
        onDoubleClick={ handelDblClick }>
          { todo.description }
    </li>
  )
}
