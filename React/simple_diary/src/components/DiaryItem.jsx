import React from "react";

export default function DiaryItem({
  author,
  content,
  created,
  emotion,
  id,
  onDelete,
}) {
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
      <button
        onClick={() => {
          if (window.confirm(`${id}번쟤 일기를 삭제합니까?`)) {
            onDelete(id);
          }
        }}
      >
        삭제하기
      </button>
    </div>
  );
}
