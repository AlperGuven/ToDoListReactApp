import React, {useState} from "react";
import { CSSTransition, TransitionGroup} from "react-transition-group";

// fuction component
const TodoItem = (props) => {
  const { changeToDoTask, removeTask, task, complete, id } = props;
  const [buttonDisablityControl, setButtonDisablityControl] = useState(false);
  const [checked, setChecked] = useState(false); 

  const changeToDoTaskAfter = (taskParam) => {
    changeToDoTask(taskParam);
    setButtonDisablityControl(!buttonDisablityControl);
    setChecked(!checked);
  }

  return (
    <TransitionGroup className={complete ? "todo-wrapper task-completed" : "todo-wrapper"} onClick={() => changeToDoTaskAfter(task)}>
      <CSSTransition timeout={500} key="normal" className="todo-task-item">
        <li className="todo-task-item__list-item" >
            <input type="checkbox" className="todo-task-item__list-item__styled-checkbox" checked={checked}/>
            <label>{task}</label>
        </li>
      </CSSTransition>
      <div className="todo-wrapper__button-part">
        <button type="button" className={buttonDisablityControl ?
         "btn btn--trash btn--inside btn--disable" : "btn btn--trash btn--inside"} 
         onClick={removeTask} disabled={buttonDisablityControl}>
           <svg style={{width:20 + 'px', height: 20 + 'px'}} viewBox="0 0 24 24">
              <path fill="#FA0000" d="M19,4H15.5L14.5,3H9.5L8.5,4H5V6H19M6,19A2,2 0 0,0 8,21H16A2,2 0 0,0 18,19V7H6V19Z" />
          </svg>
         </button>
      </div>
    </TransitionGroup>
  );
}

export default TodoItem;
