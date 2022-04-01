import {combineReducers} from "redux";
import todoTaskReducer from "./reducer";

const reducerRoot = combineReducers({
    todoTasks: todoTaskReducer
});

export default reducerRoot;