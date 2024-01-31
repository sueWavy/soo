// React.memo로 컴포넌트 재사용 기능을 사용 (고차 컴포넌트)

import React, { useEffect, useState } from "react";

// // React.memo로 text가 변경될 때만 랜더링이 일어난다.
// const TextView = React.memo(({ text }) => {
//   useEffect(() => {
//     console.log(`Update Text : ${text}`);
//   });
//   return <div>{text}</div>;
// });

// // 위와 같이 이제 count만 변경되도 text 랜더링 및 콘솔이 함께 되지 않고 count 부분만 작동한다.
// const CountView = React.memo(({ count }) => {
//   useEffect(() => {
//     console.log(`Update Count : ${count}`);
//   });
//   return <div>{count}</div>;
// });

// 값이 1 그대로 이기 때문에 1이 1이 되는것은 변한다고 할 수 있는가? -> X (아무일도 일어나지 않음)
const CounterA = React.memo(({ count }) => {
  useEffect(() => {
    console.log(`CounterA Update / count : ${count}`);
  });
  return <div>{count}</div>;
});

// 위와 같을 것 같지만 count는 obj.count로 똑같아서 아무일이 일어나지 않을 것 같다 -> 업데이트 됨 (리랜더링 및 콘솔출력)
// 고장난 것인가? No 정확하게 동작한 것이다. prop인 obj가 객체이기 때문. JS에서 객체를 비교할 때는 얕은 비교를 하기 때문이다. (주소 비교)
// const CounterB = React.memo(({ obj }) => {
//   useEffect(() => {
//     console.log(`CounterB Update / count : ${obj.count}`);
//   });
//   return <div>{obj.count}</div>;
// });

// areEqual을 이용해 확실하게 최적화를 해보자!
const CounterB = ({ obj }) => {
  useEffect(() => {
    console.log(`CounterB Update / count : ${obj.count}`);
  });
  return <div>{obj.count}</div>;
};

const areEqual = (prevProps, nextProps) => {
  // return true : 이전 props와 현재 props가 같다 -> 리랜더링을 일으키지 않는다.
  // return false : 이전과 현재가 다르다 -> 리랜더링을 일으킨다.
  if (prevProps.obj.count === nextProps.obj.count) {
    return true;
  }
  return false;
};

const MemoizedCounterB = React.memo(CounterB, areEqual);

const OptimizeTest = () => {
  const [count, setCount] = useState(1);
  const [obj, setObj] = useState({
    count: 1,
  });
  //   const [text, setText] = useState("");

  return (
    <div style={{ padding: 50 }}>
      <div>
        <h2>Counter A</h2>
        <CounterA count={count} />
        <button onClick={() => setCount(count)}>A Button</button>
      </div>

      <div>
        <h2>Counter B</h2>
        {/* <CounterB obj={obj} /> */}
        <MemoizedCounterB obj={obj} />
        <button
          onClick={() =>
            setObj({
              count: obj.count,
            })
          }
        >
          B Button
        </button>
      </div>

      {/* <div>
        <h2>count</h2>
        <CountView count={count} />
        <button onClick={() => setCount(count + 1)}>+</button>
      </div>
      <div>
        <h2>text</h2>
        <TextView text={text} />
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </div> */}
    </div>
  );
};

export default OptimizeTest;
