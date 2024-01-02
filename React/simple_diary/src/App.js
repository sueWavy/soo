import { useRef, useState } from "react";
import "./App.css";
import DiaryEditor from "./components/DiaryEditor";
import DiaryList from "./components/DiaryList";

function App() {
  const [data, setData] = useState([]);

  const dataId = useRef(0);

  const onCreate = (author, content, emotion) => {
    const created = new Date().getTime();
    const newItem = {
      author,
      content,
      emotion,
      created,
      id: dataId.current,
    };
    dataId.current += 1;
    setData([newItem, ...data]);
  };

  return (
    <div className="App">
      <DiaryEditor onCreate={onCreate} />
      <DiaryList diaryList={data} />
    </div>
  );
}

export default App;
