import { TodoItem } from './TodoItem';
import { useTodos } from "../hooks/useTodos";

export const TodoList = () => {

    // Por lo tanto este sería un componente hijo y el cual va a acceder a cada uno de los todos o elementos que tenemos detro del estate
    // y para ello necesitamos usar el useContext el cual lo tenemos en nuestro Custom Hook
    const { todos } = useTodos();

  return (
    <ul>
        {
            todos.map( todo => <TodoItem todo={ todo } key={ todo.id }/> )
        }
    </ul>
    
  )
}
