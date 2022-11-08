import React, { useState } from "react";

import ExpenseAmount from "./ExpenseAmount";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import "./ExpenseItem.css";

function ExpenseItem(props) {
  // useState() 함수 밖에서 호출하면 안됨
  // 중첩된 함수 안에서 호출할 수 없음
  // 컴포넌트 함수 안에서 직접적으로 호출되어야 함
  const [title, setTitle] = useState(props.title);

  const clickHandler = () => {
    setTitle("Updated!");
    console.log(title);
  };

  return (
    // 컴포넌트 합성
    // 컴포넌트를 결합할 때마다 합성을 이용
    // <Card> 사이에 있는 내용들이 Card 컴포넌트의 children

    // <div>태그에서는 className이 class명이 되지만 <Card>는 직접 정의한 사용자 지정 컴포넌트이기 때문에
    // className은 props로 전달되게 된다.

    // <button>은 클릭했을 때 clickHandler가 실행되는 것이 아니라 JSX코드가 평가될 때 실행되는 것이다.
    // {clickHandler}는 onClick을 위한 값으로 전달한 함수

    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <ExpenseAmount amount={props.amount} />
      </div>

      <button onClick={clickHandler}>Change Title</button>
    </Card>
  );
}
export default ExpenseItem;
