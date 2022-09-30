import React from "react";
import { TodoContext } from "../ToDoContext";

function TodoSearch() {
    const {searchValue, setSearchValue} = React.useContext(TodoContext)
    // const [searchValue, setSearchValue] = React.useState('');

    const onSearchValueChange = (event) => {
        console.log(event.target.value)
        setSearchValue(event.target.value)
    }


    return (
        
        <>
            {/* <input className="TodoSearch" placeholder="Buscar"></input> */}
            <input 
                type="input" className="form__field" placeholder="Buscar" name="name" id='name' required 
                value={searchValue}
                onChange={onSearchValueChange}
            />
            <label htmlFor="name" className="form__label">Buscar</label>
            
        </>
    )
}

export { TodoSearch }