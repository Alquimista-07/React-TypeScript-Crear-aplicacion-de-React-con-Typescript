// Esta interface es como queremos que luzca el todo
// o lista de tareas.
export interface Todo {
    id: string;
    description: string;
    completed: boolean;
}

// Adicionalmente voy a ocupar como quiero que luzca el estado inicial (INITIAL_STATE)
export interface TodoState {
    todoCount: number;
    todos: Todo[],
    completed: number;
    pending: number;
}