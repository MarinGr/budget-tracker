import styled from "styled-components";
import { useContext } from "react";
import { AppContext } from "../context/AppContext";

export default function Remaining() {
  const { expenses, budget } = useContext(AppContext);
  const totalExpenses = expenses.reduce((total, item) => {
    return (total = total + item.cost);
  }, 0);

  const remaining = budget - totalExpenses;

  const budgetBalance = remaining > 0 ? "#c9f3c0" : "#f3c0cd";

  return (
    <Container backgroundColor={budgetBalance}>
      <span>
        Remaining: <b>${remaining}</b>
      </span>
    </Container>
  );
}

const Container = styled.div`
  padding: 16px;
  display: flex;
  gap: 20px;
  border-radius: 8px;
  background-color: ${(props) => props.backgroundColor};
`;
