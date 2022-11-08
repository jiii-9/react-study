# 사용자 입력 값 받아오는 방법

```
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
      </div>
    </form>
  )
}
```

- event를 받아와 변경 이벤트가 발생했을 때 이벤트 객체를 얻을 수 있도록 해준다.

- event 안에는 여러가지 객체가 있는데 이 중 target 필드가 존재한다.

- 이 target은 이벤트가 일어나는 DOM 객체를 가리킨다. => 여기서는 input

- input 안에는 value라는 속성이 있는데 이 value는 이벤트가 벌여졌을 시점의 현재 입력값을 갖는다.

## 입력값을 확인해보려면

```
console.log(event.target.value)
```

로 확인해볼 수 있다.
<br />
<br />

# state에 값 저장하기

1. 개별 state에 값을 저장하는 방법

```
const [enteredTitle, setEnteredTitle] = useState("");
const [enteredAmount, setEnteredAmount] = useState("");
const [enteredDate, setEnteredDate] = useState("");
```

```
const titleChangeHandler = event => {
  setEnteredTitle(event.target.value);
}

const amountChangeHandler = event => {
  setEnteredAmount(event.target.value);
}

const dateChangeHandler = event => {
  setEnteredDate(event.target.value);
}
```

- 개별 state에 저장하게 되면 변경함수도 각각 사용한다.
  <br />
  <br />

2. 하나의 객체로 묶어서 저장하기

```
const [userInput, setUserInput] = useState({
  enteredTitle: "",
  enteredAmount: "",
  enteredDate: "",
});
```

```
const titleChangeHandler = event => {
  setUserInput({
    ...userInput,
    enteredTitle: event.target.value,
  });
};

const amountChangeHandler = event => {
  setUserInput({
    ...userInput,
    enteredAmount: event.target.value,
  });
};

const dateChangeHandler = event => {
  setUserInput({
    ...userInput,
    enteredDate: event.target.value,
  });
};
```

- 변경되는 부분만 변경함수에 적게되면 다른 값들은 사라져버린다.<br />
  (새롭게 덮어씌워지게 되기 때문)
- 기존 값을 가지면서 변경되는 값을 덮어씌우려면 변경되지 않는 값은 복사해줘야 한다. <br />
  스프레드 연산자(...)를 이용한다. <br />
  <br/>
  <strong>하지만 2번 방식은 특정 사례에서는 실패할 가능성이 있기 때문에 좋은 방법은 아니다.</strong>

### ✔️ 어떤 문제?

- 이전 state에 의존하고 있는데 세 개의 상태로 접근하는 것이 아니라 하나로 접근하는 방식을 사용하기 때문에 기존 값을 잃어버리지 않도록 해야한다.
- 업데이트 할 때마다 기존 값을 복사해야하는 번거로움이 크고 잊지 않도록 해야하는 중요한 규칙이 있다.

### ✔️ 새로운 방법

```
const titleChangeHandler = event => {
  setUserInput((prevState) => {
    return {...prevState, enteredTitle: event.target.value}
  })
};
```

- setUserInput 안에 있는 함수에서 prevState 의 값이 가장 최신의 값이라는 것과 항상 계획된 상태 업데이트를 염두해 두고 있다는 걸 보장한다.
- 항상 최신 상태의 값에서 작업하도록 하는 2번보다 좀 더 안전한 방법이다.
- <strong>상태 업데이트가 이전 상태에 의존하고 있다면 이 함수를 사용하면 된다.</strong>
