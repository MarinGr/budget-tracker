import { createContext, useEffect, useReducer } from "react";
import { v4 as uuidv4 } from "uuid";

const AppReducer = (state, action) => {
  switch (action.type) {
    case "ADD_EXPENSE":
      return {
        ...state,
        expenses: [...state.expenses, action.payload],
      };
    case "DELETE_EXPENSE":
      return {
        ...state,
        expenses: state.expenses.filter(
          (expense) => expense.id !== action.payload
        ),
      };
    case "EDIT_BUDGET":
      return {
        ...state,
        budget: action.payload,
      };
    default:
      return state;
  }
};

function getInitialState() {
  const budgetData = localStorage.getItem("budgetData");
  return budgetData
    ? JSON.parse(budgetData)
    : {
        budget: 1500,
        expenses: [
          { id: uuidv4(), name: "Coffee", cost: 5 },
          { id: uuidv4(), name: "Holiday", cost: 600 },
        ],
      };
}

const initialState = getInitialState();

export const AppContext = createContext();

export const AppProvider = (props) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  useEffect(() => {
    localStorage.setItem("budgetData", JSON.stringify(state));
  }, [state]);

  return (
    <AppContext.Provider
      value={{
        budget: state.budget,
        expenses: state.expenses,
        dispatch,
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};
