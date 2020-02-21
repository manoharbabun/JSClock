
const hourHand = document.getElementById('hhand');
const minuteHand = document.getElementById('mhand');
console.log(hourHand)
const secondHand = document.getElementById('shand');

function setClock() {
  const currentDate = new Date();
  const secondsRatio = currentDate.getSeconds() / 60;
  const minutesRatio = (secondsRatio + currentDate.getMinutes()) / 60;
  const hoursRatio = (minutesRatio + currentDate.getHours()) / 12;
  setRotation(secondHand, secondsRatio);
  setRotation(minuteHand, minutesRatio);
  setRotation(hourHand, hoursRatio);
}

function setRotation(element, rotationRatio) {
  console.log(element);
  element.style.setProperty("--rotation", rotationRatio * 360);
}
setInterval(setClock, 1000);
setClock();
