'use strict';
/*jshint browser: true*/

var dayNameDigitalElement = document.querySelector('.clock--digital__day-name');
var dayDigitalElement = document.querySelector('.clock--digital__day');
var monthDigitalElement = document.querySelector('.clock--digital__month');
var yearDigitalElement = document.querySelector('.clock--digital__year');
var hoursDigitalElement = document.querySelector('.clock--digital__hours');
var minutesDigitalElement = document.querySelector('.clock--digital__minutes');
var secondsDigitalElement = document.querySelector('.clock--digital__seconds');

var monthNames = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec'
];

var dayNames = [
  'Sun',
  'Mon',
  'Tue',
  'Wed',
  'Thu',
  'Fri',
  'Sat'
];


var st = [1, 21, 31];
var nd = [2, 22];
var rd = [3, 23];
function dayNumSuffix(dayNum) {
  if (st.indexOf(dayNum) > -1) {
    return 'st';
  }

  if (nd.indexOf(dayNum) > -1) {
    return 'nd';
  }

  if (rd.indexOf(dayNum) > -1) {
    return 'rd';
  }

  return 'th';
}

function updateDigitalClock(now) {
  dayNameDigitalElement.textContent = dayNames[now.getDay()];

  var dateNum = now.getDate();
  dayDigitalElement.textContent = dateNum + dayNumSuffix(dateNum);
  monthDigitalElement.textContent = monthNames[now.getMonth()];
  yearDigitalElement.textContent = now.getFullYear();

  var hoursString = ''+ now.getHours();
  if (hoursString.length === 1) {
    hoursString = '0' + hoursString;
  }
  hoursDigitalElement.textContent = hoursString;

  var minutesString = ''+ now.getMinutes();
  if (minutesString.length === 1) {
    minutesString = '0' + minutesString;
  }
  minutesDigitalElement.textContent = minutesString;

  var secondsString = ''+ now.getSeconds();
  if (secondsString.length === 1) {
    secondsString = '0' + secondsString;
  }
  secondsDigitalElement.textContent = secondsString;
}





var hoursNeedleElement = document.querySelector('.clock--analog__needle--hours');
var minutesNeedleElement = document.querySelector('.clock--analog__needle--minutes');
var secondsNeedleElement = document.querySelector('.clock--analog__needle--seconds');

function updateAnalogClock(now) {
  var hours = now.getHours();
  hoursNeedleElement.style.transform = `rotate(${((360 / 12) * hours)}deg)`;
  var minutes = now.getMinutes();
  minutesNeedleElement.style.transform = `rotate(${((360 / 60) * minutes)}deg)`;
  var seconds = now.getSeconds();
  secondsNeedleElement.style.transform = `rotate(${((360 / 60) * seconds)}deg)`;
}

var now = new Date(2017, 1, 2);
function updateClocks() {
  updateAnalogClock(now);
  updateDigitalClock(now);
}

setInterval(updateClocks, 1000);