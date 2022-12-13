import { useState, useContext } from "react";
import styled from "styled-components";
import { AppContext } from "../context/AppContext";
import { v4 as uuidv4 } from "uuid";

export default function AddExpenseForm() {
  const { dispatch } = useContext(AppContext);

  const [name, setName] = useState("");
  const [cost, setCost] = useState("");

  function onSubmit(e) {
    e.preventDefault();

    const expense = {
      id: uuidv4(),
      name: name,
      cost: parseInt(cost),
    };

    dispatch({
      type: "ADD_EXPENSE",
      payload: expense,
    });

    clearInputs();
  }

  function clearInputs() {
    setName("");
    setCost("");
  }

  return (
    <Form onSubmit={onSubmit}>
      <InputGroup>
        <Label htmlFor="name">Name</Label>
        <Input
          required="required"
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        ></Input>
      </InputGroup>
      <InputGroup>
        <Label htmlFor="cost">Cost</Label>
        <Input
          required="required"
          type="number"
          id="cost"
          value={cost}
          onChange={(e) => setCost(e.target.value)}
        ></Input>
      </InputGroup>
      <SaveButton type="submit">Save</SaveButton>
    </Form>
  );
}

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const InputGroup = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 12px;
`;

const Label = styled.label``;

const Input = styled.input`
  outline: none;
  border: 1px solid var(--secondary-color);
  border-radius: 5px;
  flex: 1;
  padding: 6px 12px;
`;

const SaveButton = styled.button`
  background-color: var(--primary-color);
  color: white;
  outline: none;
  border: none;
  border-radius: 5px;
  width: 100%;
  padding: 8px;
  font-weight: bold;
  cursor: pointer;
  transition: 0.3s ease;

  &:hover {
    background-color: var(--primary-color-hover);
  }
`;
