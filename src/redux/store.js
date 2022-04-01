import { createStore } from "redux";
import reducerRoot from "./reducerRoot";

const store = createStore(reducerRoot);

export default store;