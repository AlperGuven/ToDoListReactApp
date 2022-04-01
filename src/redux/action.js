import * as actionTypes from './actionTypes';

export const addTodoTask = (todoTask) => ({
    type: actionTypes.ADD_TODO_TASK,
    payload: todoTask,
});

export const todoTaskComplete = (todoTask) => ({
    type: actionTypes.COMPLETED_TASK,
    payload: todoTask,
});

export const removeTodoTask = (todoTask) => ({
    type: actionTypes.REMOVE_TODO_TASK,
    payload: todoTask,
});

export const removeAlreadyDoneTask = (todoTasks) => ({
    type: actionTypes.REMOVE_ALREADY_DONE_TASK,
    payload: todoTasks,
});

