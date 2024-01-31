import React from "react";
import DiaryItem from "./DiaryItem";

// 리스트에 띄울 diaryList 데이터 및 자식에게 props로 전해줄 기능 받아오기
export default function DiaryList({ diaryList, onDelete, onEdit }) {
  return (
    <div className="DiaryList">
      <h2>일기 리스트</h2>
      <h4>{diaryList.length}개의 일기가 있습니다.</h4>
      <div>
        {diaryList.map((it) => (
          <DiaryItem key={it.id} {...it} onDelete={onDelete} onEdit={onEdit} />
        ))}
      </div>
    </div>
  );
}

DiaryList.defaultProps = {
  diaryList: [],
};
