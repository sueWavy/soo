import React from "react";

export default function DiaryItem({ author, content, created, emotion, id }) {
  return (
    <div className="DiaryItem">
      <div className="info">
        <span>
          작성자 : {author} | 점수 : {emotion}
        </span>
        <br />
        <span className="date">{new Date(created).toLocaleString()}</span>
      </div>
      <div className="content">{content}</div>
    </div>
  );
}
