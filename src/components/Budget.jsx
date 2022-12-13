import styled from "styled-components";
import { useContext, useState } from "react";
import { AppContext } from "../context/AppContext";
import { GrEdit } from "react-icons/gr";
import EditBudget from "./EditBudget";

export default function Budget() {
  const { budget, dispatch } = useContext(AppContext);
  const [editingMode, setEditingMode] = useState(false);

  function handleEdit() {
    setEditingMode(true);
  }

  function handleSave(value) {
    dispatch({
      type: "EDIT_BUDGET",
      payload: value,
    });
    setEditingMode(false);
  }

  return (
    <>
      {editingMode ? (
        <EditBudget budget={budget} handleSave={handleSave} />
      ) : (
        <Container>
          <Badge>
            Budget: <b>${budget}</b>
          </Badge>
          <EditButton type="button" onClick={handleEdit}>
            <GrEdit />
          </EditButton>
        </Container>
      )}
    </>
  );
}

const Container = styled.div`
  padding: 16px;
  font-size: 20px;
  display: flex;
  justify-content: space-between;
  border: 2px solid var(--secondary-color);
  border-radius: 8px;
`;

const Badge = styled.span`
  font-family: "Roboto Serif", serif;
  font-weight: bold;
`;

const EditButton = styled.button`
  outline: none;
  border: none;
  background-color: white;
  font-size: 16px;
  cursor: pointer;
  transition: 0.3s ease;

  &:hover {
    transform: scale(1.2);
  }
`;
