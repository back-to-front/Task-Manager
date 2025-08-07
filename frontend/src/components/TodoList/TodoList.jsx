import { memo } from "react";
import TodoItem from "../TodoItem/TodoItem";
import "./TodoList.css";

function TodoList({ todos, onToggleTodo, onEditTodo, onDeleteTodo }) {
  // Ensure todos is always an array
  const safeTodos = Array.isArray(todos) ? todos : [];

  return (
    <div className='todo-list'>
      {safeTodos
        .filter((todo) => todo && todo.id)
        .map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            onToggle={() => onToggleTodo(todo.id)}
            onEdit={(newText) => onEditTodo(todo.id, newText)}
            onDelete={() => onDeleteTodo(todo.id)}
          />
        ))}
    </div>
  );
}

// Memoize the component to prevent unnecessary re-renders
export default memo(TodoList);
