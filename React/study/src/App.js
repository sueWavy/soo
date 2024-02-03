import logo from "./logo.svg";
import "./App.css";
import Wellcome from "./components/Wellcome";

function App() {
  // 객체로 만들어서 보낼 props 정리하기
  const info = {
    firstName: "Soo",
    lastName: "Lee",
    withImg: true,
  };

  return (
    <div className="App">
      <header className="App-header">
        <Wellcome {...info} />
        {/* 구조분해 할당으로 코드 더 간결하게 props 보내기 */}

        {/* <Wellcome firstName={"리"} lastName={"수"} withImg={true} /> */}
        {/* whithImg={ }로 빈값을 넘기면 true로 받기 때문에 이미지가 나옴 */}
      </header>
    </div>
  );
}

export default App;
