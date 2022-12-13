import { useState } from "react";
import styled from "styled-components";

export default function EditBudget(props) {
  const [value, setValue] = useState(props.budget);

  return (
    <Container>
      <Input
        required="required"
        autoFocus
        type="number"
        className="input-class"
        id="name"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <SaveButton type="button" onClick={() => props.handleSave(value)}>
        Save
      </SaveButton>
    </Container>
  );
}

const Container = styled.div`
  padding: 16px;
  display: flex;
  justify-content: space-between;
  border: 2px solid var(--secondary-color);
  border-radius: 8px;
`;

const SaveButton = styled.button`
  background-color: var(--primary-color);
  color: white;
  outline: none;
  border: none;
  border-radius: 4px;
  padding: 0 12px;
  cursor: pointer;
  transition: 0.3s ease;

  &:hover {
    background-color: var(--primary-color-hover);
  }
`;

const Input = styled.input`
  outline: none;
  border: none;
  border-radius: 5px;
  padding: 4px;
  font-family: "Roboto", sans-serif;
  font-size: 14px;
`;
