import { useState, memo } from "react";
import "./TodoItem.css";

function TodoItem({ todo, onToggle, onEdit, onDelete }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(todo.text);

  const handleEdit = () => {
    setIsEditing(true);
    setEditText(todo.text);
  };

  const handleSave = () => {
    onEdit(editText);
    setIsEditing(false);
  };

  const handleCancel = () => {
    setEditText(todo.text);
    setIsEditing(false);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSave();
    } else if (e.key === "Escape") {
      handleCancel();
    }
  };

  return (
    <div className={`todo-item ${todo.completed ? "completed" : ""}`}>
      <div className='todo-content'>
        <input
          type='checkbox'
          checked={todo.completed}
          onChange={onToggle}
          className='todo-checkbox'
        />

        {isEditing ? (
          <div className='edit-input-group'>
            <textarea
              value={editText}
              onChange={(e) => setEditText(e.target.value)}
              onKeyDown={handleKeyPress}
              className='edit-input'
              autoFocus
              maxLength={500}
              rows='2'
            />
            <div className='edit-buttons'>
              <button onClick={handleSave} className='save-btn'>
                Save
              </button>
              <button onClick={handleCancel} className='cancel-btn'>
                Cancel
              </button>
            </div>
          </div>
        ) : (
          <span className='todo-text' onDoubleClick={handleEdit}>
            {todo.text}
          </span>
        )}
      </div>

      {!isEditing && (
        <div className='todo-actions'>
          <button onClick={handleEdit} className='edit-btn'>
            Edit
          </button>
          <button onClick={onDelete} className='delete-btn'>
            Delete
          </button>
        </div>
      )}
    </div>
  );
}

// Use memo to prevent unnecessary re-renders
export default memo(TodoItem);
