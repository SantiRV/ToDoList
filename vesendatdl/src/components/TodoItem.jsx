import React, { useState } from 'react';
import { ListGroup, Button, Form } from 'react-bootstrap';
import { FaEdit, FaTrash, FaSave, FaTimes } from 'react-icons/fa';
import '../styles/TodoItem.css';

const TodoItem = ({ todo, toggleTodo, removeTodo, editTodo }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [newText, setNewText] = useState(todo.text);

  const handleSave = () => {
    editTodo(todo.id, newText);
    setIsEditing(false);
  };

  return (
    <ListGroup.Item
      className={`d-flex justify-content-between align-items-center ${todo.completed ? 'bg-success' : ''}`}
    >
      <div>
        {isEditing ? (
          <Form.Control
            type="text"
            value={newText}
            onChange={(e) => setNewText(e.target.value)}
          />
        ) : (
          <span
            style={{ textDecoration: todo.completed ? 'line-through' : 'none', cursor: 'pointer' }}
            onClick={() => toggleTodo(todo.id)}
          >
            {todo.text}
          </span>
        )}
      </div>

      <div>
        {isEditing ? (
          <>
            <Button variant="success" size="sm" className="me-2" onClick={handleSave}>
              <FaSave /> Save
            </Button>
            <Button variant="secondary" size="sm" onClick={() => setIsEditing(false)}>
              <FaTimes /> Cancel
            </Button>
          </>
        ) : (
          <>
            <Button variant="warning" size="sm" className="me-2" onClick={() => setIsEditing(true)}>
              <FaEdit /> Edit
            </Button>
            <Button variant="danger" size="sm" onClick={() => removeTodo(todo.id)}>
              <FaTrash /> Delete
            </Button>
          </>
        )}
      </div>
    </ListGroup.Item>
  );
};

export default TodoItem;

