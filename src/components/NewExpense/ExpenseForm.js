import React from "react";
import "./ExpenseForm.css";

function ExpenseForm() {
  const titleChangeHandler = event => {
    console.log(event);
  };

  return (
    <form>
      {/* 모든 입력값을 갖는 div */}
      <div className="new-expense__controls">
        {/* 단일 입력값을 갖는 div */}
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" onChange={titleChangeHandler} />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input type="number" min="100" step="100" />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
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
