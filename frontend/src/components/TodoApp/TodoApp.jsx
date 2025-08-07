import { useState, useEffect, useCallback, memo } from "react";
import TodoForm from "../TodoForm/TodoForm";
import TodoList from "../TodoList/TodoList";
import LoadingSpinner from "../LoadingSpinner/LoadingSpinner";
import "./TodoApp.css";
import { notesAPI } from "../../APIService.js";
import toast from "react-hot-toast";

function TodoApp({ onRateLimited }) {
  const [todos, setTodos] = useState([]);
  const [filter, setFilter] = useState("all");
  const [loading, setLoading] = useState(true);
  const [isRateLimited, setIsRateLimited] = useState(false);

  // Notify parent component about rate limiting
  useEffect(() => {
    if (onRateLimited) {
      onRateLimited(isRateLimited);
    }
  }, [isRateLimited, onRateLimited]);

  // Load todos when component mounts
  useEffect(() => {
    loadTodos();
  }, []);

  const loadTodos = useCallback(async () => {
    try {
      setLoading(true);
      const todosData = await notesAPI.getAllTodos();
      setTodos(todosData);
      setIsRateLimited(false);
    } catch (error) {
      if (error.message === "RATE_LIMITED") {
        setIsRateLimited(true);
      } else {
        toast.error(error.message);
      }
    } finally {
      setLoading(false);
    }
  }, []);

  // Create - Add a new todo
  const addTodo = useCallback(async (text) => {
    if (text.trim() === "") return;

    try {
      const newTodo = await notesAPI.createTodo(text.trim());
      setTodos((prevTodos) => [newTodo, ...prevTodos]);
      toast.success("Task added successfully!");
    } catch (error) {
      if (error.message === "RATE_LIMITED") {
        setIsRateLimited(true);
      } else {
        toast.error(error.message);
      }
    }
  }, []);

  // Update - Toggle completion status
  const toggleTodo = useCallback(
    async (id) => {
      const todo = todos.find((t) => t.id === id);
      if (!todo) return;

      try {
        const updatedTodo = await notesAPI.updateTodo(id, {
          text: todo.text,
          completed: !todo.completed,
        });

        setTodos((prevTodos) =>
          prevTodos.map((todo) => (todo.id === id ? updatedTodo : todo))
        );
      } catch (error) {
        if (error.message === "RATE_LIMITED") {
          setIsRateLimited(true);
        } else {
          toast.error(error.message);
        }
      }
    },
    [todos]
  );

  // Update - Edit todo text
  const editTodo = useCallback(
    async (id, newText) => {
      if (newText.trim() === "") return;

      const todo = todos.find((t) => t.id === id);
      if (!todo) return;

      try {
        const updatedTodo = await notesAPI.updateTodo(id, {
          text: newText.trim(),
          completed: todo.completed,
        });

        setTodos((prevTodos) =>
          prevTodos.map((todo) => (todo.id === id ? updatedTodo : todo))
        );
        toast.success("Task updated successfully!");
      } catch (error) {
        if (error.message === "RATE_LIMITED") {
          setIsRateLimited(true);
        } else {
          toast.error(error.message);
        }
      }
    },
    [todos]
  );

  // Delete - Remove a todo
  const deleteTodo = useCallback(async (id) => {
    try {
      await notesAPI.deleteTodo(id);
      setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
      toast.success("Task deleted successfully!");
    } catch (error) {
      if (error.message === "RATE_LIMITED") {
        setIsRateLimited(true);
      } else {
        toast.error(error.message);
      }
    }
  }, []);

  // Clear all completed todos
  const clearCompleted = async () => {
    const completedTodos = todos.filter((todo) => todo.completed);

    try {
      await Promise.all(
        completedTodos.map((todo) => notesAPI.deleteTodo(todo.id))
      );
      setTodos(todos.filter((todo) => !todo.completed));
      toast.success("Completed tasks cleared!");
    } catch (error) {
      if (error.message === "RATE_LIMITED") {
        setIsRateLimited(true);
      } else {
        toast.error("Failed to clear completed tasks");
      }
    }
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

  // Return rate limited component if needed
  if (isRateLimited) {
    return (
      <div className='todo-app'>
        <header className='todo-header'>
          <h1>Task Manager</h1>
          <p>Rate limit reached. Please wait a moment.</p>
        </header>
        <div style={{ textAlign: "center", padding: "40px" }}>
          <button
            className='filter-btn'
            onClick={loadTodos}
            style={{ marginTop: "20px" }}
          >
            Try Again
          </button>
        </div>
      </div>
    );
  }

  // Import LoadingSpinner at the top of the file
  if (loading) {
    return (
      <div className='todo-app'>
        <header className='todo-header'>
          <h1>Task Manager</h1>
        </header>
        <div className='loading-wrapper'>
          <LoadingSpinner text='Loading your tasks...' />
        </div>
      </div>
    );
  }

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
