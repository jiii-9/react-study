import ExpenseAmount from "./ExpenseAmount";
import ExpenseDate from "./ExpenseDate";
import Card from "./Card";
import "./ExpenseItem.css";

function ExpenseItem(props) {
  return (
    // 컴포넌트 합성
    // 컴포넌트를 결합할 때마다 합성을 이용
    // <Card> 사이에 있는 내용들이 Card 컴포넌트의 children

    // <div>태그에서는 className이 class명이 되지만 <Card>는 직접 정의한 사용자 지정 컴포넌트이기 때문에
    // className은 props로 전달되게 된다.
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <ExpenseAmount amount={props.amount} />
      </div>
    </Card>
  );
}
export default ExpenseItem;
