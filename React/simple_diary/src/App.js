import { useEffect, useMemo, useRef, useState } from "react";
import "./App.css";
import DiaryEditor from "./components/DiaryEditor";
import DiaryList from "./components/DiaryList";
import OptimizeTest from "./OptimizeTest";

function App() {
  // 일기 데이터 state 상태관리
  const [data, setData] = useState([]);

  const dataId = useRef(0);

  const getData = async () => {
    const res = await fetch(
      "https://jsonplaceholder.typicode.com/comments"
    ).then((res) => res.json());

    const initData = res.slice(0, 20).map((it) => {
      return {
        author: it.email,
        content: it.body,
        emotion: Math.floor(Math.random() * 5) + 1,
        created_date: new Date().getTime(),
        id: dataId.current++,
      };
    });
    setData(initData);
  };

  useEffect(() => {
    getData();
  }, []);

  /** 일기 생성 기능 */
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

  /** 일기 삭제 기능 */
  const onDelete = (targetId) => {
    const newDiaryList = data.filter((it) => it.id !== targetId);
    setData(newDiaryList);
  };

  /** 일기 수정 기능 */
  const onEdit = (targetId, newContent) => {
    setData(
      data.map((it) =>
        it.id === targetId ? { ...it, content: newContent } : it
      )
    );
  };

  /** useMemo : 최적화 기능 (답을 기억했다가 바로 적는다 = 같은 답일 경우 리랜더링 X) */
  const getDiaryAnalysis = useMemo(() => {
    const goodCount = data.filter((it) => it.emotion >= 3).length;
    const badCount = data.length - goodCount;
    const goodRatio = Math.round((goodCount / data.length) * 100);
    return { goodCount, badCount, goodRatio };
  }, [data.length]);

  const { goodCount, badCount, goodRatio } = getDiaryAnalysis;

  return (
    <div className="App">
      <OptimizeTest />
      <DiaryEditor onCreate={onCreate} />
      <div style={{ textAlign: "center" }}>
        <br />
        <div>전체 일기 : {data.length}개</div>
        <div>좋은 일기 : {goodCount}개</div>
        <div>나쁜 일기 : {badCount}개</div>
        <div>좋은 비율 : {goodRatio}%</div>
      </div>
      <DiaryList diaryList={data} onDelete={onDelete} onEdit={onEdit} />
    </div>
  );
}

export default App;
