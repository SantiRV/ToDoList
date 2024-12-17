import React from 'react';
import { ListGroup } from 'react-bootstrap';
import TodoItem from './TodoItem';

const TodoList = ({ todos, toggleTodo, removeTodo, editTodo }) => {
  return (
    <ListGroup>
      {todos.map(todo => (
        <TodoItem
          key={todo.id}
          todo={todo}
          toggleTodo={toggleTodo}
          removeTodo={removeTodo}
          editTodo={editTodo}
        />
      ))}
    </ListGroup>
  );
};

export default TodoList;
