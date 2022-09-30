import React from "react";
import { AppUI } from "./AppUI";
import { TodoProvider } from "../ToDoContext";
import './App.css';



/*************
    APP
****************** */

function App(props) {
  



  return (
    <TodoProvider>
      <AppUI/>
    </TodoProvider>
  );
}

export default App;
