import TodoItem from "./TodoItem";
import "./TodoList.css";

function TodoList({ todos, onToggleTodo, onEditTodo, onDeleteTodo }) {
  return (
    <div className='todo-list'>
      {todos.map((todo) => (
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

export default TodoList;
