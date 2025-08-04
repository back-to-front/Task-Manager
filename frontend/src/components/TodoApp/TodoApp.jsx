import { useState } from "react";
import TodoForm from "../TodoForm/TodoForm";
import TodoList from "../TodoList/TodoList";
import "./TodoApp.css";

function TodoApp() {
  const [todos, setTodos] = useState([]);
  const [nextId, setNextId] = useState(1);
  const [filter, setFilter] = useState("all");

  // Create - Add a new todo
  const addTodo = (text) => {
    if (text.trim() === "") return;

    const newTodo = {
      id: nextId,
      text: text.trim(),
      completed: false,
      createdAt: new Date().toISOString(),
    };

    setTodos([...todos, newTodo]);
    setNextId(nextId + 1);
  };

  // Update - Toggle completion status
  const toggleTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  // Update - Edit todo text
  const editTodo = (id, newText) => {
    if (newText.trim() === "") return;

    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, text: newText.trim() } : todo
      )
    );
  };

  // Delete - Remove a todo
  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  // Clear all completed todos
  const clearCompleted = () => {
    setTodos(todos.filter((todo) => !todo.completed));
  };

  const completedCount = todos.filter((todo) => todo.completed).length;
  const activeCount = todos.length - completedCount;

  // Filter todos based on the current filter selection
  const getFilteredTodos = () => {
    switch (filter) {
      case "completed":
        return todos.filter((todo) => todo.completed);
      case "active":
        return todos.filter((todo) => !todo.completed);
      case "all":
      default:
        return todos;
    }
  };

  // Get filtered todos
  const filteredTodos = getFilteredTodos();

  return (
    <div className='todo-app'>
      <header className='todo-header'>
        <h1>Task Manager</h1>
        <p>A simple todo list app</p>
      </header>

      <main className='todo-main'>
        <TodoForm onAddTodo={addTodo} />

        <div className='todo-stats'>
          <span className='stat'>
            Total: <strong>{todos.length}</strong>
          </span>
          <span className='stat'>
            Active: <strong>{activeCount}</strong>
          </span>
          <span className='stat'>
            Completed: <strong>{completedCount}</strong>
          </span>
          {completedCount > 0 && (
            <button className='clear-completed-btn' onClick={clearCompleted}>
              Clear Completed
            </button>
          )}
        </div>

        <div className='todo-filters'>
          <button
            className={`filter-btn ${filter === "all" ? "active" : ""}`}
            onClick={() => setFilter("all")}
          >
            All
          </button>
          <button
            className={`filter-btn ${filter === "active" ? "active" : ""}`}
            onClick={() => setFilter("active")}
          >
            Incomplete
          </button>
          <button
            className={`filter-btn ${filter === "completed" ? "active" : ""}`}
            onClick={() => setFilter("completed")}
          >
            Completed
          </button>
        </div>

        <TodoList
          todos={filteredTodos}
          onToggleTodo={toggleTodo}
          onEditTodo={editTodo}
          onDeleteTodo={deleteTodo}
        />

        {filteredTodos.length === 0 && (
          <div className='empty-state'>
            {todos.length === 0 ? (
              <p>No tasks yet. Add one above to get started!</p>
            ) : filter === "active" ? (
              <p>No incomplete tasks. Good job!</p>
            ) : filter === "completed" ? (
              <p>No completed tasks yet.</p>
            ) : (
              <p>No tasks found.</p>
            )}
          </div>
        )}
      </main>
    </div>
  );
}

export default TodoApp;
