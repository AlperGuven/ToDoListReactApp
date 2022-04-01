import * as actionTypes from './actionTypes';
import {v4 as uuidv4} from "uuid";

const initialState = {
    todoTasks: [{id: 1, task: "Watch Inception, Read SPQR", complete: false}],
}

const todoTaskReducer = (state, action) => {
    // (state = initialState, action) şeklinde de yapabilirdik beacsue of ES6
    if(typeof state === 'undefined') {
        return initialState;
    }
    switch(action.type) {
        case actionTypes.ADD_TODO_TASK:
            const newAddedTask = {
                id: uuidv4(),
                task: action.payload,
                complete: false
            }
            const addedTodoTask = [...state.todoTasks, newAddedTask];
            return {
                ...state,
                todoTasks: addedTodoTask,
            }
        case actionTypes.COMPLETED_TASK:
            const toggledTasks = state.todoTasks.map((todoTask) => {
                return todoTask.id === action.payload.id
                ? {...action.payload, complete: !action.payload.complete}
                : todoTask
            })
            return {
                ...state,
                todoTasks: toggledTasks,
            };
        case actionTypes.REMOVE_TODO_TASK:
            const latestVersionOfTasks = state.todoTasks.filter((todoTask) => todoTask.id !== action.payload.id);
            return {
                ...state,
                todoTasks: latestVersionOfTasks,
            };
        case actionTypes.REMOVE_ALREADY_DONE_TASK:
            const tasksNotComplete = state.todoTasks.filter((todoTask) => !todoTask.complete);
            return {
                ...state,
                todoTasks: tasksNotComplete,
            };
        default: 
            return state;
    }
}

export default todoTaskReducer;