let currDate = new Date();
let currMonth = currDate.getMonth();
let currYear = currDate.getFullYear();
let clicked = false;

const monthNames = [
  "January 1월",
  "February 2월",
  "March 3월",
  "April 4월",
  "May 5월",
  "June 6월",
  "July 7월",
  "August 8월",
  "September 9월",
  "October 10월",
  "November 11월",
  "December 12월",
];

const $calendar = document.querySelector(".calendar");
const $calendarNav = document.querySelector(".calendar-nav");
const $dateInput = document.querySelector(".select-date");
const $calendarBox = document.querySelector(".calendar-box");

const displayCalendar = (year, month) => {
  const firstDay = new Date(year, month, 1).getDay();
  const lastDate = new Date(year, month + 1, 0).getDate();
  const lastDay = new Date(year, month, lastDate).getDay();
  const lastDayOfLastMonth = new Date(year, month, 0).getDate();
  const $navMonth = document.querySelector(".nav-month");
  const $navYear = document.querySelector(".nav-year");

  $navMonth.innerText = monthNames[month];
  $navYear.innerText = year;

  const $calendarBody = document.querySelector(".calendar-body");
  $calendarBody.innerHTML = "";

  // 이전 달
  for (let i = firstDay; i > 0; i--) {
    const $day = document.createElement("li");
    $day.classList.add("notCurrDay");
    $day.innerText = lastDayOfLastMonth - i + 1;
    $calendarBody.append($day);
  }

  // 현재 달
  for (let i = 1; i <= lastDate; i++) {
    const $day = document.createElement("li");
    $day.innerText = i;
    $calendarBody.append($day);

    // 현재
    if (
      i - firstDay + 1 === currDate.getDate() &&
      month === currDate.getMonth()
    ) {
      $day.classList.add("today");
    }
  }

  // 다음 달
  for (let i = lastDay; i < 6; i++) {
    const $day = document.createElement("li");
    $day.classList.add("notCurrDay");
    $day.innerText = i - lastDay + 1;
    $calendarBody.append($day);
  }

  onSelectDate(year, month, $calendarBody);
};

// 받아오기
const onUpdateDate = (e) => {
  if (e.target.tagName !== "BUTTON") return;
  e.target.id === "prev" ? currMonth-- : currMonth++;

  if (currMonth < 0 || currMonth > 11) {
    currDate = new Date(currYear, currMonth);
    currYear = currDate.getFullYear();
    currMonth = currDate.getMonth();
  } else {
    currDate = new Date();
  }
  displayCalendar(currYear, currMonth);
};

// 업로드
const onSelectDate = (year, month, $calendarBody) => {
  $calendarBody.addEventListener("click", (e) => {
    if (e.target.matches(".notCurrDay") || e.target === $calendarBody) return;

    const days = [...$calendarBody.children];
    days.forEach((day) => day.classList?.remove("select"));
    e.target.classList.add("select");

    const day = e.target.innerText;
    $dateInput.value = `${year}년 ${month + 1}월 ${day}일`;
  });
};

// 달력 on/off
const onShowCalendar = () => {
  if (clicked) {
    $calendarBox.classList.add("hide");
  } else {
    $calendarBox.classList.remove("hide");
  }
  clicked = !clicked;
};

// 끄기
const onHideCalendar = (e) => {
  if (e.target.id !== "datePicker") {
    const targetBox = e.target.closest(".calendar-box");
    if (!targetBox) {
      $calendarBox.classList.add("hide");
    }
  }
  clicked = false;
};

const dataPicker = () => {
  displayCalendar(currYear, currMonth);
  $calendarNav.addEventListener("click", onUpdateDate);
  $dateInput.addEventListener("click", onShowCalendar);
  document.addEventListener("click", onHideCalendar);
};

dataPicker();
