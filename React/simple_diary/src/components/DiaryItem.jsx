import React, { useEffect, useRef, useState } from "react";

// 부모에게 다이어리 데이터 el 및 기능들 props로 받아오기 (구조분해할당)
const DiaryItem = ({
  author,
  content,
  created,
  emotion,
  id,
  onDelete,
  onEdit,
}) => {
  useEffect(() => {
    console.log(`${id}번 째 아이템 랜더링`);
  }, []);

  /** 수정 기능 on/off 토글 상태 및 변경 기능 */
  const [isEdit, setIsEdit] = useState(false);
  const toggleIsEdit = () => setIsEdit(!isEdit);

  const [localContent, setLocalContent] = useState(content);

  /** 수정 화면 나갈 경우 exit 기능 */
  const handleQuitEdit = () => {
    setIsEdit(false);
    setLocalContent(content);
  };

  const localContentInput = useRef();

  /** 수정 이벤트 처리 */
  const handleEdit = () => {
    if (localContent.length < 5) {
      localContentInput.current.focus();
      return;
    }

    if (window.confirm(`${id}번 일기를 수정합니까?`)) {
      onEdit(id, localContent);
      toggleIsEdit();
    }
  };

  /** 삭제 이벤트 처리 */
  const handleDelete = () => {
    if (window.confirm(`${id}번쟤 일기를 삭제합니까?`)) {
      onDelete(id);
    }
  };

  return (
    <div className="DiaryItem">
      <div className="info">
        <span>
          작성자 : {author} | 점수 : {emotion}
        </span>
        <br />
        <span className="date">{new Date(created).toLocaleString()}</span>
      </div>
      <div className="content">
        {isEdit ? (
          <>
            <textarea
              ref={localContentInput}
              value={localContent}
              onChange={(e) => setLocalContent(e.target.value)}
            ></textarea>
          </>
        ) : (
          <>{content}</>
        )}
      </div>
      {isEdit ? (
        <>
          <button onClick={handleQuitEdit}>돌아가기</button>
          <button onClick={handleEdit}>수정완료</button>
        </>
      ) : (
        <>
          <button onClick={handleDelete}>삭제하기</button>
          <button onClick={toggleIsEdit}>수정하기</button>
        </>
      )}
    </div>
  );
};

export default React.memo(DiaryItem);
