import React from "react";
import "./ExpenseForm.css";

function ExpenseForm() {
  return (
    <form>
      {/* 모든 입력값을 갖는 div */}
      <div className="new-expense__controls">
        {/* 단일 입력값을 갖는 div */}
        <div className="new-expense__control">
          <lable>Title</lable>
          <input type="text" />
        </div>
        <div className="new-expense__control">
          <lable>Amount</lable>
          <input type="number" min="100" step="100" />
        </div>
        <div className="new-expense__control">
          <lable>Date</lable>
          <input type="date" min="2020-01-01" max="2023-12-31" />
        </div>
      </div>

      {/* 폼을 넘겨줄 버튼/ */}
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
}

export default ExpenseForm;
