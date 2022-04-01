import { useSelector } from "react-redux";
import TodoItemList from "./components/ToDoItemList";

// function component
function App() {
    const state = useSelector((state) => ({...state}));
    console.log(state);
    return (
        <div className="App">
           <TodoItemList />
        </div>
    );
}

export default App;