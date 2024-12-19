import React from 'react';
import { ButtonGroup, Button, Card } from 'react-bootstrap';
import '../styles/TodoStats.css';

const TodoStats = ({ totalTasks, completedTasks, pendingTasks, filter, setFilter }) => {
  return (
    <>
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
    </>
  );
};

export default TodoStats;
