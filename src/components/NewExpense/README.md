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
