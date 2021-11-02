import { useContext } from "react"
import { TodoContext } from "../context/TodoContext"
import { useTodos } from "../hooks/useTodos"
import { TodoItem } from "../TodoItem/TodoItem";
import { useToDos } from "../hooks/useTodos"

export const TodoList = ()=>{

    //para traer el estado debo usar el useContext
//    const {todoState} =useContext(TodoContext);
//    const {todos} = todoState;

const { todos } = useToDos();

    return (
        <ul>
            {todos.map(todo=><TodoItem todo={todo} ket={todo.id} />)}
        </ul>
    )
}