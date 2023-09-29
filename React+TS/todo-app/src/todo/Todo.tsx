import { Title } from "./components/Title"
import { TodoList } from "./components/TodoList"
import { TodoProvider } from "./context/TodoProvider"

export const Todo = () => {
  return (
    // Por lo tanto ya con el Context y el Provider creados procedemos a asignarlo en el componente root y la razón es porque
    // desde este punto en adelante todo los componentes y todo lo que coloquemos acá adentro va a requerir la información que
    // el provider va a proveer
    <TodoProvider>
        
        <Title/>

        <TodoList/>
    
    </TodoProvider>
  )
}
