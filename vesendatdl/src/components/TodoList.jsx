import React from 'react';
import { ListGroup } from 'react-bootstrap';
import TodoItem from './TodoItem';
import '../styles/TodoList.css';

const TodoList = ({ todos, toggleTodo, removeTodo, editTodo }) => {
  return (
    <div className="todo-list-container">
      {todos.length === 0 ? (
        <div className="list-empty">No tasks available, add one!</div>
      ) : (
        <ListGroup>
          {todos.map((todo) => (
            <TodoItem
              key={todo.id}
              todo={todo}
              toggleTodo={toggleTodo} //Cambia el estado de la tarea 
              removeTodo={removeTodo}
              editTodo={editTodo}
            />
          ))}
        </ListGroup>
      )}
    </div>
  );
};

export default TodoList;

