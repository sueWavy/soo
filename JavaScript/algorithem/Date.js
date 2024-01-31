/*
Date : 표준 빌트인 객체로써 날짜와 시간을 위한 속성값과 메서드를 제공하는 객체
Date 객체 생성자 : new Date()
현재 시간 기준 문자열 : Date()
날짜 정보 얻기 (년/월/일) : Date.getFullYear(), Date.getMonth(), Date.getDate()
날짜 정보 얻기 (시/분/초) : Date.getHours(), Date.getMinutes(), Date.getSeconds()
날짜 정보 설정 (년/월/일) : Date.setFullYear(), Date.setMonth(), Date.setDate()
날짜 정보 설정 (시/분/초) : Date.setHours(), Date.setMonth(), Date.setDate()
그 외 날짜 정보 얻기 : Date.getDay(), Date.getTime(), Date.getTimezoneOffset()
그 외 날짜 정보 설정 : Date.parse(string)
 */

// 1. Default
let date_now = new Date();
let date_now_str = Date();

console.log(date_now);
console.log(date_now_str);
console.log(typeof date_now);
console.log(typeof date_now_str);

console.log("----------------------------");

// 2. milliseconds (1/1000)sec
let date_ms_1 = new Date(0);
let date_ms_2 = new Date(24 * 3600 * 1000);

console.log(date_ms_1);
console.log(date_ms_2);

let date_string = new Date("2024-01-01");
console.log(date_string);

console.log("----------------------------");

// month : 1월(0) ~ 12월(11)
let date_params_1 = new Date(2021, 0, 1);
let date_params_2 = new Date(Date.UTC(2021, 0, 1));
console.log(date_params_1);
console.log(date_params_2);

console.log("----------------------------");

// 날짜 정보 얻기

let date2 = new Date();
console.log(date2);

// 1. year, month, day : 0(sun) ~ 6(sat)
console.log(date2.getFullYear());
console.log(date2.getMonth());
console.log(date2.getDay());

// 2. hours
console.log(date2.getHours());
console.log(date2.getUTCHours());

// 3. getTime : (now - date(0)) milliseconds
//    getTimezoneOffset : (UTC+0 - currentZone) minutes
console.log(date2.getTime());
console.log(date2.getTimezoneOffset());

console.log("----------------------------");

// 날짜 정보 설정 (년/월/일) , (시/분/초)
let date3 = new Date();
console.log("date3 : ", date3);

// 1. set year
let ms_year = date3.setFullYear(2020, 3, 15);
console.log("set date3 : ", date3);
console.log("ms_year : ", new Date(ms_year));

// 2. set date
date3.setDate(1);
console.log("set date(1) : ", date3);
date3.setDate(0);
console.log("set date(0) : ", date3);

// 3. set hours
date3.setHours(date3.getHours() + 2);
console.log("get hours : ", date3);
