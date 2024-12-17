import React, { useState } from 'react';
import { ListGroup, Button, Form } from 'react-bootstrap';

const TodoItem = ({ todo, toggleTodo, removeTodo, editTodo }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [newText, setNewText] = useState(todo.text);

  const handleSave = () => {
    editTodo(todo.id, newText); // Llama a la función para actualizar el texto
    setIsEditing(false);
  };

  return (
    <ListGroup.Item
      className={`d-flex justify-content-between align-items-center ${todo.completed ? 'bg-success text-white' : ''}`}
    >
      <div>
        {/* Modo edición */}
        {isEditing ? (
          <Form.Control
            type="text"
            value={newText}
            onChange={(e) => setNewText(e.target.value)}
          />
        ) : (
          // Modo visualización
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
              Guardar
            </Button>
            <Button variant="secondary" size="sm" onClick={() => setIsEditing(false)}>
              Cancelar
            </Button>
          </>
        ) : (
          <>
            <Button variant="warning" size="sm" className="me-2" onClick={() => setIsEditing(true)}>
              Editar
            </Button>
            <Button variant="danger" size="sm" onClick={() => removeTodo(todo.id)}>
              Eliminar
            </Button>
          </>
        )}
      </div>
    </ListGroup.Item>
  );
};

export default TodoItem;

