import { useReducer } from "react"
import { TodoState } from "../interfaces/interfaces"

import { TodoContext } from "./TodoContext"
import { todoReducer } from "./todoReducer"

const INITIAL_STATE: TodoState ={
    todoCount: 2,
    todos: [
        {
            id:"1",
            desc: "recoletar",
            completed: false
        },
        {
            id:"2",
            desc: "recoletar frutas",
            completed: false
        }
    ],
    completed: 0,
    pending: 2
}

interface props{
    // los children van a ser de elementos de jsx y puede ser uno o varios
    children: JSX.Element | JSX.Element[]
}

//definir la info que quiero compartir


export const TodoProvider = ({children}: props)=>{

    
//Traigo el useReducer que va a usar el todoReducer y el estado inicial va a ser INITAL_STATE
//y lo coloco en el value de Provider, por lo q los children van a tener acceso al todoState
    const [todoState, dispatch] =useReducer(todoReducer, INITIAL_STATE)

const toggleTodo = (id: string)=>{
dispatch({type:'toggleTodo', payload:{id}})
}
    return(
        <TodoContext.Provider value={{
            todoState, 
            toggleTodo}}>
            {children}
        </TodoContext.Provider>
    )
}