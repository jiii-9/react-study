import React, { useState } from "react";
import "./ExpenseForm.css";

function ExpenseForm() {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  // const [userInput, setUserInput] = useState({
  //   enteredTitle: "",
  //   enteredAmount: "",
  //   enteredDate: "",
  // });

  const titleChangeHandler = event => {
    setEnteredTitle(event.target.value);
    // setUserInput({
    //   ...userInput, // 바뀌지 않는 값은 그대로 복사해줘야한다.
    //   enteredTitle: event.target.value, // 바뀌는 부분만 새로 저장해준다.
    // });
    // setUserInput((prevState) => {
    //   return {...prevState, enteredTitle: event.target.value}
    // })
  };

  const amountChangeHandler = event => {
    setEnteredAmount(event.target.value);
    // setUserInput({
    //   ...userInput,
    //   enteredAmount: event.target.value,
    // });
  };

  const dateChangeHandler = event => {
    setEnteredDate(event.target.value);
    // setUserInput({
    // ...userInput,
    // enteredDate: event.target.value,
    // });
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
          <input
            type="number"
            min="100"
            step="100"
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2020-01-01"
            max="2023-12-31"
            onChange={dateChangeHandler}
          />
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
