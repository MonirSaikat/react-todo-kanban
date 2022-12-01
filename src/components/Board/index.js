import Button from 'components/CButton';
import React, { useState } from 'react';
import Input from 'components/Input';
import useBoards from 'hooks/use-boards';
import CCard from 'components/CCard';
import { Card, Form } from 'react-bootstrap';
import 'assets/Board.scss';

const Board = ({
  board
}) => {
  const {title, items, color} = board;
  const [adding, setAdding] = useState(false);
  const { addItem } = useBoards();
  const [input, setInput] = useState('');

  const handleClick = () => setAdding(!adding);
  const handleChange = e => setInput(e.target.value);

  const handleSubmit = e => {
    e.preventDefault();
    addItem(board.id, input);
    setInput('');
  };

  const renderItems = items.map((item) => {
    return (
      <CCard key={item.id} boardId={board.id} item={item} />
    );
  });

  return (
    <Card className="card board">
      <Card.Title
        style={{
          backgroundColor: color,
        }}
      >
        {title}
      </Card.Title>

      <Card.Body body>
        {renderItems}

        <Form onSubmit={handleSubmit}>
          {adding && (
            <Input
              value={input}
              onChange={handleChange}
              placeholder="Enter new task"
            />
          )}
        </Form>

        <Button
          className={`mt-2 ${adding && "btn-danger"}`}
          onClick={handleClick}
        >
          {adding ? "Cancel" : "Add task"}
        </Button>
        {adding && (
          <Button className="mt-2" onClick={handleSubmit}>
            Add Task
          </Button>
        )}
      </Card.Body>
    </Card>
  );
}

export default Board;
