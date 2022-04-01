import React, { useEffect } from 'react';
import { useState } from 'react';

const ToDoInputItem = (props) => {
    const { addNewTodo, clearAfterRemove } = props;
    const [todoTask, setTodoTask] = useState("");
    const [inputError, setInputError] = useState(false);

    useEffect(() => {
        if(clearAfterRemove) {
            handleReset();
        }
    },[clearAfterRemove]);

    const handleSubmitTask = () => {
        if(!validationForInput()) {
            addNewTodo(todoTask);
            handleReset();
        }
    };

    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            if(!validationForInput()) {
                addNewTodo(todoTask);
                handleReset();
            }
        }
    };

    const validationForInput = () => {
        if(!todoTask || todoTask.length < 3) {
            console.log("error");
            setInputError(true);
            return true;
        } else { 
            setInputError(false);
            return false;
        }
    };

    const handleReset = () => {
        Array.from(document.querySelectorAll("input")).forEach(
          input => (input.value = "")
        );
        setTodoTask("");
    };

    return (
        <div className="InputWrapper">
            <label className="input">
                <input 
                    className="input__field"
                    id="todoTask"
                    name="todoTask"
                    type="text"
                    placeholder=" "
                    onChange={(e) => setTodoTask(e.target.value)}
                    onKeyDown={handleKeyDown}
                />
                <span className="input__label">Enter ToDo Task</span>
                {inputError && 
                <span className='input__error'>3 characters at least!</span>}

            </label>
            <div class="button-group">
                <button type="button" class="btn btn--primary btn--inside uppercase" onClick={handleSubmitTask}>Add Task</button>
            </div>
        </div>
    );
}

export default ToDoInputItem;