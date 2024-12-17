import './App.css';
import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card, Button, ButtonGroup } from 'react-bootstrap';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';

const App = () => {
  const [todos, setTodos] = useState([]);
  const [filter, setFilter] = useState('all');
  const totalTasks = todos.length;
  const completedTasks = todos.filter(todo => todo.completed).length;
  const pendingTasks = totalTasks - completedTasks;


  const editTodo = (id, newText) => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, text: newText } : todo
    ));
  };
  

  // Cargar tareas desde localStorage cuando la app se monta
  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem('todos'));
    if (storedTodos) setTodos(storedTodos);
  }, []);

  // Guardar tareas en localStorage cada vez que cambien
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const addTodo = (todo) => {
    setTodos([...todos, todo]);
  };

  const toggleTodo = (id) => {
    setTodos(todos.map(todo => 
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };

  const removeTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const filteredTodos = todos.filter(todo => {
    if (filter === 'completed') return todo.completed;
    if (filter === 'pending') return !todo.completed;
    return true; // 'all'
  });

  return (
    <Container className="mt-5">
      <Row>
        <Col>
          <Card>
          <Card.Body>
            
            <Card.Title className="text-center mb-4">Lista de Tareas</Card.Title>
            
            <Card.Text className="text-center mb-4">
              Total: <strong>{totalTasks}</strong> | Completadas: <strong>{completedTasks}</strong> | Pendientes: <strong>{pendingTasks}</strong>
            </Card.Text>
            
            <ButtonGroup className="mb-3 d-flex justify-content-center">
              
              <Button variant={filter === 'all' ? 'primary' : 'secondary'} onClick={() => setFilter('all')}>
                Todas
              </Button>
              
              <Button variant={filter === 'completed' ? 'primary' : 'secondary'} onClick={() => setFilter('completed')}>
                Completadas
              </Button>
              
              <Button variant={filter === 'pending' ? 'primary' : 'secondary'} onClick={() => setFilter('pending')}>
                Pendientes
              </Button>
            
            </ButtonGroup>
            
            <TodoForm addTodo={addTodo} />
            
            <TodoList todos={filteredTodos} toggleTodo={toggleTodo} removeTodo={removeTodo} editTodo={editTodo} />
          </Card.Body>

        </Card>
      </Col>
    </Row>
  </Container>
  );
};

export default App;
