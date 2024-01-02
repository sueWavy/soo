import React, { useRef, useState } from "react";

export default function DiaryEditor() {
  const [info, setInfo] = useState({
    author: "",
    content: "",
    emotion: 1,
  });

  const authorInput = useRef();
  const contentInput = useRef();

  const handleChange = (e) => {
    setInfo({
      ...info,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = () => {
    if (info.author.length < 1) {
      authorInput.current.focus();
      return;
    }

    if (info.content.length < 5) {
      contentInput.current.focus();
      return;
    }

    console.log(info);
    alert("저장 성공");
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
}
