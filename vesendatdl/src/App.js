import './App.css';
import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';
import TodoStats from './components/TodoStats';
import useTodos from './logica/useTodos';

const App = () => {
  const {
    todos,
    addTodo,
    toggleTodo,
    removeTodo,
    editTodo,
    filter,
    setFilter,
    totalTasks,
    completedTasks,
    pendingTasks
  } = useTodos();

  return (
    <Container className="app-container mt-5">
      <Row>
        <Col>
          <Card className="card-container">
            <Card.Body>
              <Card.Title className="text-center mb-4">To-Do List</Card.Title>
              <TodoStats 
                totalTasks={totalTasks}
                completedTasks={completedTasks}
                pendingTasks={pendingTasks}
                filter={filter}
                setFilter={setFilter}
              />
              <TodoForm addTodo={addTodo} />
              <TodoList 
                todos={todos} 
                toggleTodo={toggleTodo} 
                removeTodo={removeTodo} 
                editTodo={editTodo} 
              />
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default App;
