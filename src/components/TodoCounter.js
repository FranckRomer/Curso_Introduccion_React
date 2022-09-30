import React from "react";
import {TodoContext} from "../ToDoContext"

function TodoCounter() {
    const {totalTodos, completedTodos} = React.useContext(TodoContext)


    return(
        <h2>
            Has completado {completedTodos} de {totalTodos} ToDo's
        </h2>
    )
}

export  {TodoCounter}