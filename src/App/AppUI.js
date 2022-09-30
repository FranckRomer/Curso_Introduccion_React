import React from "react";
import { TodoContext } from "../ToDoContext";
import { TodoCounter } from "../components/TodoCounter"
import { TodoSearch } from "../components/TodoSearch"
import { TodoList } from "../components/TodoList"
import { TodoItem } from "../components/TodoItem"
import { CreateTodoButton } from "../components/CreateTodoButton"
import { Modal } from "../Modal"
import { TodoForm } from "./TodoForm";

function AppUI() {
    const {
        error,
        loading,
        searchedTodos,
        completeTodo,
        deleteTodo,
        openModal,
        setOpenModal,
    } = React.useContext(TodoContext)

    return (
        <>
            <section className="App">
                {/* header */}
                <header>
                    <h2>To Do Maching</h2>
                </header>
                {/* main */}
                <main>
                    <div className="container">
                        {/* secction 1 */}
                        <section className="section-img">
                            <img src="https://guiauniversitaria.mx/wp-content/uploads/2020/04/apps-para-listas-de-tareas.jpg"></img>
                            <div className="todo-button">
                                <CreateTodoButton
                                    setOpenModal = {setOpenModal}
                                >
                                    
                                </CreateTodoButton>
                            </div>
                        </section>

                        {/* section 2 */}
                        <section className="section-todo">

                            <div className="todo-counter">
                                <TodoCounter />
                            </div>

                            <div className="todo-search">
                                <TodoSearch />
                                {/* <input placeholder="Cebolla"></input> */}
                            </div>

                            <div className="todo-list">


                                <TodoList>
                                    {error && <p>Desesperate, Hubo un ERROR</p>}
                                    {loading && <p>Estamos cargando, no se desespere ...</p>}
                                    {(!loading && !searchedTodos.length) && <p>Crea tu primer To Do!!!</p>}

                                    {searchedTodos.map(todo => (
                                        <TodoItem
                                            key={todo.text}
                                            text={todo.text}
                                            completed={todo.completed}
                                            onComplete={() => completeTodo(todo.text)}
                                            onDelete={() => deleteTodo(todo.text)}
                                        />
                                    ))}
                                </TodoList>

                                {/* <TodoList>
                                    {error && <p>Desesperate, Hubo un ERROR</p>}
                                    {loading && <p>Estamos cargando, no se desespere ...</p>}
                                    {(!loading && !searchedTodos.length) && <p>Crea tu primer To Do!!!</p>}

                                    {searchedTodos.map(todo => (
                                        <TodoItem
                                            key={todo.text}
                                            text={todo.text}
                                            completed={todo.completed}
                                            onComplete={() => completeTodo(todo.text)}
                                            onDelete={() => deleteTodo(todo.text)}
                                        />
                                    ))}
                                </TodoList> */}
                            </div>
                        </section>
                    </div>

                </main>

                {!!openModal && (
                    <Modal>
                        <TodoForm setOpenModal = {setOpenModal}></TodoForm>
                    </Modal>
                )}


            </section>
        </>
    )
}

export { AppUI }