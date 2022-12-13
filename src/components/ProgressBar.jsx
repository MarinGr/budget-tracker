import styled from "styled-components";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { AppContext } from "../context/AppContext";
import { useContext } from "react";

export default function ProgressBar() {
  const { budget, expenses } = useContext(AppContext);
  const totalExpenses = expenses.reduce((total, item) => {
    return (total = total + item.cost);
  }, 0);
  const remaining = budget - totalExpenses;

  const percentage = ((remaining / budget) * 100).toFixed();

  return (
    <Container style={{ width: 120, height: 120, fontWeight: "bold" }}>
      <CircularProgressbar
        value={percentage}
        text={`${percentage}%`}
        styles={buildStyles({
          pathColor: "#105ec4",
          textColor: "#0b3d80",
          trailColor: "#dae7f8",
          backgroundColor: "#105ec4",
        })}
      />
      <Desc>Money left</Desc>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 8px;
`;

const Desc = styled.p`
  font-size: 12px;
  color: var(--secondary-text-color);
`;
