import React from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

function NewExpense({ onAddExpense }) {
  const saveExpenseDataHandler = enteredExpenseData => {
    const expenseData = {
      ...enteredExpenseData, // ExpenseForm.js 에서 받은 파라미터를 뿌려준다.
      id: Math.random().toString,
    };
    onAddExpense(expenseData); // App.js로 데이터를 보내준다.
  };

  return (
    <div className="new-expense">
      <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
    </div>
  );
}

export default NewExpense;
