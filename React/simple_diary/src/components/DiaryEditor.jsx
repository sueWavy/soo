import React, { useState } from "react";

export default function DiaryEditor() {
  const [info, setInfo] = useState({
    author: "",
    content: "",
    emotion: 1,
  });

  const handleChange = (e) => {
    setInfo({
      ...info,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = () => {
    console.log(info);
    alert("저장 성공");
  };

  return (
    <div className="DiaryEditor">
      <h2>오늘의 일기</h2>
      <div>
        <input
          name="author"
          type="text"
          value={info.author}
          onChange={handleChange}
        />
      </div>
      <div>
        <textarea name="content" value={info.content} onChange={handleChange} />
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
