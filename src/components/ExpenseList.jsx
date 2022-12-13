import styled from "styled-components";
import ExpenseItem from "./ExpenseItem";
import { useContext } from "react";
import { AppContext } from "../context/AppContext";

export default function ExpenseList() {
  const { expenses } = useContext(AppContext);

  return (
    <List>
      {expenses.map((expense) => (
        <ExpenseItem
          key={expense.id}
          id={expense.id}
          name={expense.name}
          cost={expense.cost}
        />
      ))}
    </List>
  );
}

const List = styled.ul`
  list-style-type: none;
  display: flex;
  flex-direction: column;
`;
