import { createContext } from "react";
import { TodoState } from "../interfaces/interfaces";

//importamos la intefaz de TodoState
export type TodoContextProps={
    todoState: TodoState;
    toggleTodo: (id: string) => void;

}
//aca se va a guardar toda la info que quiero compartir a los componentes
//tmb sirve para crear el provedor de info 
//createContext es un generico que lo que va a fluir internamente es un TodoContextProps que recibe un obj de tipo TodoContextProps 
export const TodoContext = createContext<TodoContextProps>({} as TodoContextProps);