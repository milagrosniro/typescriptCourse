import { useToDos } from "../hooks/useTodos"

export const Title = () =>{
    const{pendingTodos} = useToDos()
    
    return(
        <h1>Todo: {pendingTodos}</h1>
    )
}