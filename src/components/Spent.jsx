import styled from "styled-components";
import { useContext } from "react";
import { AppContext } from "../context/AppContext";

export default function Spent() {
  const { expenses } = useContext(AppContext);

  const totalExpenses = expenses.reduce((total, item) => {
    return (total = total + item.cost);
  }, 0);

  return (
    <Container>
      <span>
        Spent: <b>${totalExpenses}</b>
      </span>
    </Container>
  );
}

const Container = styled.div`
  background-color: var(--secondary-color);
  padding: 16px;
  display: flex;
  border-radius: 8px;
`;
