import React from "react";

import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
  const [buttonState, setButtonState] = React.useState(true);

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
  };

  const toggleBtn = () => {
    setButtonState((prevState) => !prevState);
  };


  const formContent = buttonState ? 
  (<button onClick={toggleBtn}>Add New Expense </button>)
    :(<ExpenseForm
      onSaveExpenseData={saveExpenseDataHandler}
      toggleBtn={toggleBtn}
    />);

  return (
    <div className="new-expense">
      {formContent}
    </div>
  );
};

export default NewExpense;
