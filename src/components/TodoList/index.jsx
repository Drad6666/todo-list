import { useState } from "react";
import "./index.css";
import { TasksList } from "../TasksList";

export const TodoList = () => {
  const [inputValue, setInputValue] = useState("");
  const [listTasks, setListTasks] = useState([]);

  const handleChange = (e) => setInputValue(e.target.value);
  
  const handleClick = () => {
    const updatedList = listTasks.concat([
      {
        id: `${Math.floor(Math.random() * 100).toString()}-task`,
        name: inputValue,
      },
    ]);

    if (inputValue !== "") {
      setListTasks(updatedList);
      setInputValue("");
    }
  };

  return (
    <div>
      <input
        value={inputValue}
        onChange={(e) => handleChange(e)}
        className="todo-list__input"
        type="text"
      />
      <button onClick={handleClick}>Add task</button>
      {listTasks.length > 0 && <TasksList list={listTasks} />}
    </div>
  );
};
