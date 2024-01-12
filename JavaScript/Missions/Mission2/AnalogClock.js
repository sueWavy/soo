const AnalogClock = ($container) => {
  // 시침, 분침, 초침을 요소 생성
  const hourHand = document.createElement("div");
  const minuteHand = document.createElement("div");
  const secondHand = document.createElement("div");

  // 시침, 분침, 초침에 해당 CSS 클래스 추가
  hourHand.classList.add("hand", "hour");
  minuteHand.classList.add("hand", "minute");
  secondHand.classList.add("hand", "second");

  // 시침, 분침, 초침을 컨테이너에 추가
  $container.appendChild(hourHand);
  $container.appendChild(minuteHand);
  $container.appendChild(secondHand);

  // 시계 업데이트 함수 만들기
  const updateClock = () => {
    // 현재 시간 뽑아오기
    const now = new Date();

    // now에서 시간 단위로 가져오기
    const hour = now.getHours();
    const minute = now.getMinutes();
    const second = now.getSeconds();

    // 시계 바늘 각도 계산
    const degHour = (hour % 12) * (360 / 12) + minute * (360 / 12 / 60);
    const degMinute = minute * (360 / 60);
    const degSecond = second * (360 / 60);

    // 시계 바늘에 각도 적용
    hourHand.style.transform = `rotate(${degHour}deg)`;
    minuteHand.style.transform = `rotate(${degMinute}deg)`;
    secondHand.style.transform = `rotate(${degSecond}deg)`;
  };

  updateClock();

  // 1초마다 시계 업데이트 ( 새로고침 없이 계속 불러오기 )
  setInterval(updateClock, 1000);
};

export default AnalogClock;
