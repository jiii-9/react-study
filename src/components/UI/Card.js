import "./Card.css";

function Card(props) {
  const classes = "card " + props.className;

  return <div className={classes}>{props.children}</div>;
}

// 컴포넌트를 합성할 때 props.children이 중요한데 wrapper 컴포넌트를 생성하는 특별한 컴포넌트 이다.

export default Card;
