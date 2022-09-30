import React from "react";

function CreateTodoButton(props) {
    const onClickButton = () =>{
        props.setOpenModal(true)
    }

    return(
        
        <div>  
            {/* <span>Crear nueva Tarea</span> */}
            <button onClick={onClickButton}>
                Nueva Tarea
            </button>
        </div>
    )
}

export  {CreateTodoButton}