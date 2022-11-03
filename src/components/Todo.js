import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle, faEdit, faTrashAlt } from "@fortawesome/free-solid-svg-icons";


function Todo({todos, completeTodo, removeTodo, handleEdit}) {

    return todos.map((todo, index) => (
        <div className="col bg-todo" key={index}>
            <div className={todo.isComplete ? 'is-complete' : ''} key={todo.id}>
                <span className="text-todo">{todo.text}</span>
            </div>
            <div className="icons-action">
                <span>
                    <FontAwesomeIcon icon={faCheckCircle} onClick={() => completeTodo (todo.id)} className="icon-check"/>
                </span>

                {
                    todo.isComplete ? '' : (
                        <span>
                            <FontAwesomeIcon icon={faEdit} onClick={() => handleEdit (todo.id)} className="icon-edit"/>
                        </span>
                    )
                }

                <span>
                    <FontAwesomeIcon icon={faTrashAlt} onClick={() => removeTodo (todo.id)} className="icon-delete"/>
                </span>
            </div>
        </div>
    ));
}

export default Todo
