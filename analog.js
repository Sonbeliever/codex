const secondHand = document.getElementById('second-hand');
const minuteHand = document.getElementById('minute-hand');
const hourHand = document.getElementById('hour-hand');

function updateClock() {
  const now = new Date();

  const seconds = (now.getSeconds() + now.getMilliseconds() / 1000) / 60;
  const minutes = (now.getMinutes() + seconds) / 60;
  const hours = (now.getHours() % 12 + minutes) / 12;

  rotateClockHand(secondHand, seconds);
  rotateClockHand(minuteHand, minutes);
  rotateClockHand(hourHand, hours);

  requestAnimationFrame(updateClock); // smooth update
}

function rotateClockHand(element, rotation) {
  element.style.setProperty('--rotate', rotation * 360);
}

updateClock(); // start immediately
