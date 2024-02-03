import React from "react";
import hi from "../images/hi.jpg";

export default function Wellcome({ firstName, lastName, withImg }) {
  // 구조분해 할당으로 가져와서 더 깔끔하게
  return (
    <>
      {withImg && <img src={hi} alt="Well Come Hi" height="200" />}
      <div>
        <span>Hello, </span>
        <span>
          {firstName}
          {lastName}
        </span>
      </div>
    </>
  );
}
