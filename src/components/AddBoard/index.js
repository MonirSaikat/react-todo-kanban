import Input from "components/Input";
import useBoards from "hooks/use-boards";
import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";

const AddBoard = ({ closeAdding }) => {
  const { addBoard } = useBoards();
  const [data, setData] = useState({
    color: "",
    title: "",
    items: [],
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    addBoard(data.title, data.color);
    setData({
      color: '',
      title: '',
     });
    closeAdding(true);
  };

  const handleInput = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Input
        value={data.title}
        name="title"
        onChange={handleInput}
        placeholder="Title"
      />
      <Input
        value={data.color}
        name="color"
        onChange={handleInput}
        placeholder="Color"
        className="mt-2"
      />
      <Button type="submit" className="mt-2 btn-full">
        Add Board
      </Button>
    </Form>
  );
};

export default AddBoard;
