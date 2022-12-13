import "./App.css";
import styled from "styled-components";
import Budget from "./components/Budget";
import Remaining from "./components/Remaining";
import Spent from "./components/Spent";
import ExpenseList from "./components/ExpenseList";
import AddExpenseForm from "./components/AddExpenseForm";
import { AppProvider } from "./context/AppContext";
import ProgressBar from "./components/ProgressBar";

export default function App() {
  return (
    <AppProvider>
      <Container>
        <Header>Budget Tracker</Header>
        <BudgetDetails>
          <Categories>
            <Budget />
            <Spent />
            <Remaining />
          </Categories>
          <ProgressBar />
        </BudgetDetails>
        <Expenses>
          <Title>Expenses</Title>
          <ExpenseList />
        </Expenses>
        <AddForm>
          <Title>Add expense</Title>
          <AddExpenseForm />
        </AddForm>
      </Container>
    </AppProvider>
  );
}

const Container = styled.div`
  min-height: 100vh;
  padding-bottom: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Header = styled.h1`
  background-color: var(--primary-color);
  color: white;
  width: 100%;
  text-align: center;
  padding: 20px;
  margin-bottom: 40px;
  font-family: "Roboto Serif", serif;
`;

const BudgetDetails = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
  min-width: 400px;
  margin-bottom: 20px;

  @media (max-width: 400px) {
    min-width: 360px;
  }
`;

const Categories = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 14px;
  flex: 1;
`;

const Expenses = styled.div`
  padding: 20px;
  min-width: 400px;
  margin-bottom: 20px;

  @media (max-width: 400px) {
    min-width: 360px;
  }
`;

const Title = styled.h3`
  text-align: center;
  padding: 10px;
  margin-bottom: 10px;
  font-family: "Roboto Serif", serif;
`;

const AddForm = styled.div`
  padding: 20px;
  min-width: 400px;

  @media (max-width: 400px) {
    min-width: 360px;
  }
`;
