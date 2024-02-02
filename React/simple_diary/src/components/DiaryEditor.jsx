import React, { useContext, useEffect, useRef, useState } from "react";
import { DiaryDispatchContext } from "../App";

const DiaryEditor = () => {
  // useContext 로 onCreate 비구조화할당으로 받아오기
  const { onCreate } = useContext(DiaryDispatchContext);

  useEffect(() => {
    console.log("DiaryEditor render");
  });

  /** 일기 작성 form 데이터 state */
  const [info, setInfo] = useState({
    author: "",
    content: "",
    emotion: 1,
  });

  const authorInput = useRef();
  const contentInput = useRef();

  /** change 이벤트 처리 (입력) */
  const handleChange = (e) => {
    setInfo({
      ...info,
      [e.target.name]: e.target.value,
    });
  };

  /** submit 이벤트 처리 (등록) */
  const handleSubmit = () => {
    if (info.author.length < 1) {
      authorInput.current.focus();
      return;
    }

    if (info.content.length < 5) {
      contentInput.current.focus();
      return;
    }

    onCreate(info.author, info.content, info.emotion);
    setInfo({
      author: "",
      content: "",
      emotion: 1,
    });
  };

  return (
    <div className="DiaryEditor">
      <h2>오늘의 일기</h2>
      <div>
        <input
          ref={authorInput}
          name="author"
          type="text"
          value={info.author}
          onChange={handleChange}
          placeholder="작성자"
        />
      </div>
      <div>
        <textarea
          ref={contentInput}
          name="content"
          value={info.content}
          onChange={handleChange}
          placeholder="내용을 작성해주세요"
        />
      </div>
      <div>
        <span>오늘의 컨디션 점수 : </span>
        <select name="emotion" value={info.emotion} onChange={handleChange}>
          <option value={1}>1</option>
          <option value={2}>2</option>
          <option value={3}>3</option>
          <option value={4}>4</option>
          <option value={5}>5</option>
        </select>
      </div>
      <div>
        <button onClick={handleSubmit}>일기 작성하기</button>
      </div>
    </div>
  );
};

export default React.memo(DiaryEditor);
