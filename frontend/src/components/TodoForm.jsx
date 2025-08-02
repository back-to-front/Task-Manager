import { useState } from "react";
import "./TodoForm.css";

function TodoForm({ onAddTodo }) {
  const [inputValue, setInputValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddTodo(inputValue);
    setInputValue("");
  };

  return (
    <form className='todo-form' onSubmit={handleSubmit}>
      <div className='input-group'>
        <input
          type='text'
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder='Add a new task...'
          className='todo-input'
          maxLength={200}
        />
        <button
          type='submit'
          className='add-btn'
          disabled={inputValue.trim() === ""}
        >
          Add Task
        </button>
      </div>
    </form>
  );
}

export default TodoForm;
