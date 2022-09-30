import React from "react";
import { TodoContext } from "../../ToDoContext";
import "./form.css"

function TodoForm(props) {
    const [newTodoValue, setNewTodoValues] = React.useState('')

    const {
        addTodo,
    } = React.useContext(TodoContext)

    const onChange = (event) =>{
        //
        console.log(event.target.value)
        setNewTodoValues(event.target.value)
    }
    const onCancel = () =>{
        //
        props.setOpenModal(false)
    }
    const onSubmit = (event) =>{
        //
        event.preventDefault()
        console.log(newTodoValue)
        addTodo(newTodoValue)
        props.setOpenModal(false)
        setNewTodoValues('')
    }

    return(
        <form onSubmit={onSubmit}>
            <label>New To-Do</label>
            <textarea 
                placeholder="Escribe tu nueva Tarea"
                value={newTodoValue}
                onChange = {onChange}
                ></textarea>
            <div>
                <button className="boton_Cancel" type="button" onClick={onCancel}>Cancelar</button>
                <button className="boton_Add" type="submit" >Añadir</button>
            </div>
        </form>
    )
}

export {TodoForm}