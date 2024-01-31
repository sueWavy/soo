// React.memo로 컴포넌트 재사용 기능을 사용 (고차 컴포넌트)

import React, { useEffect, useState } from "react";

// React.memo로 text가 변경될 때만 랜더링이 일어난다.
const TextView = React.memo(({ text }) => {
  useEffect(() => {
    console.log(`Update Text : ${text}`);
  });
  return <div>{text}</div>;
});

// 위와 같이 이제 count만 변경되도 text 랜더링 및 콘솔이 함께 되지 않고 count 부분만 작동한다.
const CountView = React.memo(({ count }) => {
  useEffect(() => {
    console.log(`Update Count : ${count}`);
  });
  return <div>{count}</div>;
});

const OptimizeTest = () => {
  const [count, setCount] = useState(1);
  const [text, setText] = useState("");

  return (
    <div style={{ padding: 50 }}>
      <div>
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
      </div>
    </div>
  );
};

export default OptimizeTest;
