/** El Provider se coloca en el componente que se renderiza en la API*/

import { TodoProvider } from "./context/TodoProvider"
import { useToDos } from "./hooks/useTodos"
import { TodoList } from "./TodoList/TodoList";
import { Title } from "./Title/Title";


export const Todo=()=>{

    //si lo hago asi tira err pq estoy queriando entrar el TodoProvider antes de estar dentro de el
    // const {pendingTodos} = useToDos()
    // return(
    //    <TodoProvider>

    //    <h1>Todo: {pendingTodos} </h1>
    //    <TodoList/>
       
    //    </TodoProvider>
    // )

    //  const {pendingTodos} = useToDos()
    return(
       <TodoProvider>

     <Title />
       <TodoList/>
       
       </TodoProvider>
    )
}