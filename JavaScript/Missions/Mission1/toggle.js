const KEY = "toggle";

// 상태 저장
export const saveToggle = (toggle) => {
  if (typeof toggle !== "object") {
    throw new TypeError();
  }
  const isToggle = JSON.stringify(toggle);
  localStorage.setItem(KEY, isToggle);
};

export const loadToggle = () => {
  const isToggle = localStorage.getItem(KEY);
  return isToggle ? JSON.parse(isToggle) : null;
};
