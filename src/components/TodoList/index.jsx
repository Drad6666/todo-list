import {useState} from "react";

import './index.css'

export const TodoList = () => {
  const [inputValue, setInputValue] = useState()
  const [listTasks, setListTasks] = useState()

  return (
    <div>
      <input className="todo-list__input" type="text" />
      <button>Add task</button>
    </div>
  )
}

