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

  const submitHandler = event => {
    event.preventDefault(); // 폼을 제출했을 때 기본 요청이 보내지는 것을 막아준다.

    const expenseData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate),
    };
    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate("");
    console.log(expenseData);
  };

  return (
    <form onSubmit={submitHandler}>
      {/* 모든 입력값을 갖는 div */}
      <div className="new-expense__controls">
        {/* 단일 입력값을 갖는 div */}
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={enteredTitle} // 양방향 바인딩: 폼으로 작성할 때 아주 유용하다. => 폼 전송에 따라 사용자의 입력을 모으거나 변경할 수 있게 해준다.
            onChange={titleChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="100"
            step="100"
            value={enteredAmount}
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2020-01-01"
            max="2023-12-31"
            value={enteredDate}
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
