import './App.css';
import React from 'react';
import { Container, Row, Col, Card, Button, ButtonGroup } from 'react-bootstrap';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';
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
              <Card.Text className="card-text text-center mb-4">
                Total: <strong className="total">{totalTasks}</strong> | 
                Completed: <strong className="completed">{completedTasks}</strong> | 
                Pending: <strong className="pending">{pendingTasks}</strong>
              </Card.Text>
              <ButtonGroup className="mb-3 d-flex justify-content-center">
                <Button 
                  variant={filter === 'all' ? 'primary' : 'secondary'} 
                  onClick={() => setFilter('all')}
                >
                  All
                </Button>
                <Button 
                  variant={filter === 'completed' ? 'primary' : 'secondary'} 
                  onClick={() => setFilter('completed')}
                >
                  Completed
                </Button>
                <Button 
                  variant={filter === 'pending' ? 'primary' : 'secondary'} 
                  onClick={() => setFilter('pending')}
                >
                  Pending
                </Button>
              </ButtonGroup>
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
