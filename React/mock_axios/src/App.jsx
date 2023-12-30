import axios from "axios";
import React, { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [data, setData] = useState([]);

  /** 서버 통신해서 바로 data 받아오기 */
  useEffect(() => {
    const getData = async () => {
      try {
        const res = await axios.get(
          "https://9041fdb3-7806-40ba-99e2-7feaf03cb3c4.mock.pstmn.io/list"
        );
        setData(res.data);
        console.log("서버 Get 통신", res);
      } catch (error) {
        console.error("서버통신 에러 발생", error);
      }
    };

    getData();
  }, []);

  /** 데이터 송출 */
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(
        "https://9041fdb3-7806-40ba-99e2-7feaf03cb3c4.mock.pstmn.io/list"
      );
      setData([...data, res.data]);
      console.log("Server Communication", res);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="App">
      <header>
        <h1>Mock Server fetch Test</h1>
        <form onSubmit={handleSubmit}>
          <button>추가하기</button>
        </form>

        {data.map((it) => (
          <ul
            key={it.id}
            style={{
              display: "flex",
              listStyle: "none",
              justifyContent: "center",
            }}
          >
            <li style={{ marginRight: "2rem" }}>{it.name}</li>
            <li>{it.job}</li>
          </ul>
        ))}
      </header>
    </div>
  );
}

export default App;
