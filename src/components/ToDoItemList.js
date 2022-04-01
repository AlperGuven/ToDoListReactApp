import React from "react";
import { useState } from 'react';
import TodoInputItem from "./ToDoInputItem";
import TodoItem from "./TodoItem";
import DeleteButton from "./DeleteButton";
import AppHeader from "./AppHeader";
import { CSSTransition, TransitionGroup} from "react-transition-group";
import { useSelector, useDispatch } from "react-redux";
import { todoTaskComplete, addTodoTask, removeTodoTask, removeAlreadyDoneTask } from "../redux/action";

const TodoItemList = () => {
  let dispatch = useDispatch();
  const [resetInput, setResetInput] = useState(false);
  const state = useSelector((state) => ({ ...state.todoTasks }));

  const addNewToDoDispatch = (newTodoTask) => {
    dispatch(addTodoTask(newTodoTask));
  }

  const removeTaskAfter = (newTodoTask) => {
    dispatch(removeTodoTask(newTodoTask));
    setResetInput(true);
  }

  return (
    <div className="list-container">
      <div className="list-container__header">
        <AppHeader contentHeader={"ToDo List"}/>
      </div>
      <div className="list-container__input">
        <TodoInputItem addNewTodo={addNewToDoDispatch} clearAfterRemove={resetInput}></TodoInputItem>
      </div>
      
      <div className="list-container__list-field">
        <ul>
          <TransitionGroup className="todoTask-list">
            {state.todoTasks && 
              state.todoTasks.map((todoTask) => {
                return (
                  <CSSTransition key={todoTask.id} className="todo-task">
                    <TodoItem
                      key={todoTask.id}
                      id={todoTask.id}
                      task={todoTask.task}
                      complete={todoTask.complete}
                      changeToDoTask={ () => dispatch(todoTaskComplete(todoTask))}
                      removeTask={ () => removeTaskAfter(todoTask)}
                    />
                  </CSSTransition>
                );
            })}
          </TransitionGroup>
        </ul>
      </div>
      <div className="list-container__delete-all">
          <DeleteButton deleteUnnecessaryTask={() => dispatch(removeAlreadyDoneTask(state.todoTasks))}></DeleteButton>
      </div>
    </div>
  );
}

export default TodoItemList;