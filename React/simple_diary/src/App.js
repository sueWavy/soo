import "./App.css";
import DiaryEditor from "./components/DiaryEditor";
import DiaryList from "./components/DiaryList";

function App() {
  const dummyList = [
    {
      id: 1,
      author: "이수광",
      content: "안녕하쇼~",
      emotion: 5,
      created: new Date().getTime(),
    },
    {
      id: 2,
      author: "이숙끄앙",
      content: "안녕하쇼~2",
      emotion: 4,
      created: new Date().getTime(),
    },
    {
      id: 3,
      author: "이슈강",
      content: "안녕하쇼~3",
      emotion: 2,
      created: new Date().getTime(),
    },
    {
      id: 4,
      author: "이수팡",
      content: "안녕하쇼~4",
      emotion: 1,
      created: new Date().getTime(),
    },
  ];

  return (
    <div className="App">
      <DiaryEditor />
      <DiaryList diaryList={dummyList} />
    </div>
  );
}

export default App;
