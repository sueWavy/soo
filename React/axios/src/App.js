import axios from "axios";
import React, { useState } from "react";
import "./App.css";

function App() {
  // data 받아올 state
  const [data, setData] = useState([]);

  // fetch
  async function getData() {
    await fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        console.log(data);
      });
  }

  // axios
  async function getData2() {
    await axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((res) => {
        setData(res.data);
        console.log(res);
      });
  }

  // axios2
  const getData3 = async () => {
    const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
    setData(res.data);
    console.log(res);
    // 의문점 -> .then((res)=>res.json()) 필요없지만 res.data로 설정해줘야 하는가?
    // 위의 방법이 필요없이 전체 응답 객체를 상태로 직접 설정하려는 경우 위와 같이 헤더 및 기타 속성을 포함한 전체 Axios 응답 개체를 상태로 설정
    // 데이터만 필요한 경우 명확성을 높이기 위해 setData(res.data)를 사용하는 것이 좋다. (axios가 간편하지만 무조건 좋은건 아니다)
  };

  const handleFetch = () => {
    getData();
  };

  const handleAxios = () => {
    getData2();
  };

  const handleAxios2 = () => {
    getData3();
  };

  const handleReset = () => {
    setData([]);
  };

  return (
    <div className="App">
      <h1>Fetch vs Axios</h1>
      <button onClick={handleFetch}>Fetch Data</button>
      <button onClick={handleAxios}>Axios Data 1</button>
      <button onClick={handleAxios2}>Axios Data 2</button>
      <button onClick={handleReset}>초기화</button>
      <br />
      {data.map((it) => (
        <p key={it.id}>{it.title}</p>
      ))}
    </div>
  );
}

export default App;

/**
 * Axios
 * axios는 json을 자동으로 적용해서 response 객체를 바로 전달.
 * yarn add axios, npm i axios 등 설치 후 import 해줘야한다.
 */

/**
 * Fetch
 * 라이브러리를 설치 import 하지 않아도 사용 가능.
 * 네트워크 에러 발생시 계속 대기 -> 응답 시간 초과 등의 기능이 없음.
 * Catch에 걸릴 경우 .then() ~~ 으로 실행하지만 axios는 console.log 창에 해당 에러로그를 보여준다.
 * fetch는 promise 자체를 반환하기에 json으로 한 번더 가공해줘야 한다.
 * fetch는 body로 json.stringify()를 통해 서버가 이해할 수 있도록 문자열 파싱을 해야한다.
 */

// fetch
// async function data() {
//   try {
//     const res = await fetch("https://jsonplaceholder.typicode.com/posts");
//     if (!res.ok) {
//       throw new Error("에러 발생");
//     }
//     const data = await res.json();
//     setData(data);
//     console.log(data);
//   } catch (error) {
//     console.error(error);
//   }
// }

// // axios
// const data2 = async () => {
//   try {
//     const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
//     setData(res.data);
//     console.log(res);
//   } catch (error) {
//     console.error(error);
//   }
// };
