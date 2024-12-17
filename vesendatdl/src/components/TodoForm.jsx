import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';

const TodoForm = ({ addTodo }) => {
  const [text, setText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim()) {
      addTodo({
        id: Date.now(),
        text,
        completed: false
      });
      setText('');
    }
  };

  return (
    <Form onSubmit={handleSubmit} className="mb-4">
      <Form.Group controlId="formTodo">
        <Form.Control 
          type="text" 
          value={text} 
          onChange={(e) => setText(e.target.value)} 
          placeholder="Agregar una tarea"
        />
      </Form.Group>
      <Button variant="primary" type="submit">Agregar</Button>
    </Form>
  );
};

export default TodoForm;
