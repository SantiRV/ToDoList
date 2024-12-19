import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import '../styles/TodoForm.css';

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
    <Form onSubmit={handleSubmit} className="todo-form">
      <Form.Group controlId="formTodo" className="mb-0 flex-grow-1">
        <Form.Control 
          type="text" 
          value={text} 
          onChange={(e) => setText(e.target.value)} 
          placeholder="Add a task"
        />
      </Form.Group>
      <Button variant="primary" type="submit" className="add-button">
      Add
      </Button>
    </Form>
  );
};

export default TodoForm;
