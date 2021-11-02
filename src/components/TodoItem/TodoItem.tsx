import { useContext } from "react"
import { TodoContext } from "../context/TodoContext"
import { useToDos } from "../hooks/useTodos"
import { Todo } from "../interfaces/interfaces"

//creo una interface para la prop que va a ser de tipo Todo
interface Props{
    todo: Todo
}

//todo es de tipo Props
export const TodoItem = ({todo }: Props)=>{
   // const {toggleTodo} = useContext(TodoContext)
    const {toggleTodo} = useToDos()
   
   
    return(
        <li style={{
            cursor:'pointer',
            textDecoration: todo.completed ?'line-through' : ''
        }}
        onDoubleClick={()=>toggleTodo(todo.id)}>
{todo.desc}
        </li>
    )
}