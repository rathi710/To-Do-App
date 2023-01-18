import { Task } from "./Task";
import { useState } from "react";

import './App.css';

function App() {
  const [list, setList] = useState([]); //to save all the tasks and map through all at last when we click add task btn
  const [task, setTask] = useState(""); //to keep track of input

  const handleChange = () => {
    const obj = {
      id: list.length === 0 ? 1 : list[list.length - 1].id + 1,
      taskName: task,
    };
    setList([...list, obj]); //spread operator is used here(add task to existing list)
  };  


  const handleDelete = (taskId) => {
    setList(
      list.filter((task) => {
        return task.id !== taskId;
      })
    );
  };

  return (
    <div className="App">
      <div className="addTask">
      <h2 >My To Do List</h2>
        <input
          onChange={(event) => {  
            setTask(event.target.value);
          }} placeholder="Title..."
        />
        <button className="addBtn" onClick={handleChange}>Add</button>
      </div>

      <div>
        {list.map((task) => {
          return (
            <Task
              taskName={task.taskName}
              id={task.id}
              handleDelete={handleDelete}
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;
