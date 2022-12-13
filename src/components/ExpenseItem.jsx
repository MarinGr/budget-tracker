import styled from "styled-components";
import { RiDeleteBinLine } from "react-icons/ri";
import { useContext } from "react";
import { AppContext } from "../context/AppContext";

export default function ExpenseItem(props) {
  const { dispatch } = useContext(AppContext);

  function deleteExpense() {
    dispatch({
      type: "DELETE_EXPENSE",
      payload: props.id,
    });
  }

  return (
    <Item>
      {props.name}
      <PriceTag>
        <Cost>${props.cost}</Cost>
        <DeleteButton onClick={deleteExpense}></DeleteButton>
      </PriceTag>
    </Item>
  );
}

const Item = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px;
  border-bottom: 1px solid var(--secondary-color);
`;

const PriceTag = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;

const Cost = styled.span`
  font-weight: bold;
`;

const DeleteButton = styled(RiDeleteBinLine)`
  font-size: 20px;
  cursor: pointer;
  transition: 0.3s ease;

  &:hover {
    transform: scale(1.2);
  }
`;
