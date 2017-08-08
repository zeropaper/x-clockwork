var hoursNeedleElement = document.querySelector('.clock--analog__needle--hours');
var minutesNeedleElement = document.querySelector('.clock--analog__needle--minutes');
var secondsNeedleElement = document.querySelector('.clock--analog__needle--seconds');

setInterval(function() {
  var now = new Date();
  var hours = now.getHours();
  hoursNeedleElement.style.transform = `rotate(${((360 / 12) * hours)}deg)`;
  var minutes = now.getMinutes();
  minutesNeedleElement.style.transform = `rotate(${((360 / 60) * minutes)}deg)`;
  var seconds = now.getSeconds();
  secondsNeedleElement.style.transform = `rotate(${((360 / 60) * seconds)}deg)`;
}, 1000);