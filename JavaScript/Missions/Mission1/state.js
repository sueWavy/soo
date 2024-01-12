const KEY = "state";

export const saveState = (state) => {
  if (typeof state !== "object") {
    throw new TypeError();
  }
  const serializedState = JSON.stringify(state);
  localStorage.setItem(KEY, serializedState);
};

export const loadState = () => {
  const serializedState = localStorage.getItem(KEY);
  return JSON.parse(serializedState);
};
