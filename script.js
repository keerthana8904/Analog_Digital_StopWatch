let clock = document.getElementById("clock");

let start = document.getElementById("start");
let stop = document.getElementById("stop");

//display Numbers on clock
for (let i = 1; i <= 12; i++) {
  const num = document.createElement("div");
  num.classList.add("number");

  const angle = i * 30; 12*30 // 360deg so 12 @ top

  num.style.transform = `
    rotate(${angle}deg)
    translateY(-110px)
    rotate(-${angle}deg)
  `;

  num.innerText = i;
  clock.appendChild(num);
}

function format(num) {
  return num < 10 ? "0" + num : num;
}

function formatHour(num) {
  if (num > 12) num = num % 12;
  return num < 10 ? "0" + num : num;
}

function currentTime() {
  let dHour = document.getElementById("dHour");
  let dMin = document.getElementById("dMin");
  let dSec = document.getElementById("dSec");

  let hour = document.getElementById("hour");
  let minute = document.getElementById("minute");
  let second = document.getElementById("second");

  let now = new Date();

  let h = now.getHours();
  let m = now.getMinutes();
  let s = now.getSeconds();

  let secDeg = s * 6;
  let minDeg = m * 6;
  let hourDeg = (h % 12) * 30 + m * 0.5;

  hour.style.transform = `rotate(${hourDeg}deg)`;
  minute.style.transform = `rotate(${minDeg}deg)`;
  second.style.transform = `rotate(${secDeg}deg)`;

  dHour.textContent = formatHour(h);
  dMin.textContent = format(m);
  dSec.textContent = format(s);
}

let t;
function startClock() {
  if (t) return;
  currentTime();
  t = setInterval(currentTime, 1000);
}

function stopClock() {
  clearInterval(t);
  t = null;
}

start.addEventListener("click", startClock);
stop.addEventListener("click", stopClock);

// ================= STOPWATCH =================

let TimerHour = document.getElementById("THour");
let TimerMIn = document.getElementById("TMin");
let TimerSec = document.getElementById("TSec");

let sbtn = document.getElementById("TimerStart");
let srst = document.getElementById("TimeReset");
let spbtn = document.getElementById("TimerStop");

let seconds = 0;
let minutes = 0;
let hours = 0;
let interval = null;

function stopWatch() {
  seconds++;

  if (seconds === 60) {
    seconds = 0;
    minutes++;
  }

  if (minutes === 60) {
    minutes = 0;
    hours++;
  }

  if (hours === 24) {
    hours = 0;
  }

  TimerHour.textContent = hours.toString().padStart(2, "0");
  TimerMIn.textContent = minutes.toString().padStart(2, "0");
  TimerSec.textContent = seconds.toString().padStart(2, "0");
}

sbtn.addEventListener("click", () => {
  if (interval) return;
  stopWatch();
  interval = setInterval(stopWatch, 1000);
});


spbtn.addEventListener("click", () => {
  clearInterval(interval);
  interval = null;
});


srst.addEventListener("click", () => {
  clearInterval(interval);
  interval = null;

  //reset the variables 
  seconds = 0;
  minutes = 0;
  hours = 0;

 TimerHour.textContent = hours.toString().padStart(2, "0");
  TimerMIn.textContent = minutes.toString().padStart(2, "0");
  TimerSec.textContent = seconds.toString().padStart(2, "0");
});


// Count down

let InHour = document.getElementById("Hourtimer");
let InMin = document.getElementById("Mintimer");

let CHour = document.getElementById("CHour");
let CMin = document.getElementById("CMin");
let CSec = document.getElementById("CSec");

let CountdownStart = document.getElementById("CountdownStart");
let CountdownStop = document.getElementById("CountdownStop");
let CountdownReset = document.getElementById("CountdownReset");

let hourValue = 0;
let minValue = 0;
let secValue = 0;

let intervalTimer = null;
let isRunning = false;


InHour.addEventListener("input", (e) => {
  hourValue = Number(e.target.value) || 0;
});

InMin.addEventListener("input", (e) => {
  minValue = Number(e.target.value) || 5;
});

function displayTimer() {

  CHour.textContent = String(hourValue).padStart(2, "0");
  CMin.textContent = String(minValue).padStart(2, "0");
  CSec.textContent = String(secValue).padStart(2, "0");

  if (hourValue === 0 && minValue === 0 && secValue === 0) {
    clearInterval(intervalTimer);
    isRunning = false;
    return;
  }

  secValue--;

  if (secValue < 0) {
    secValue = 59;
    minValue--;
  }


  if (minValue < 0) {
    minValue = 59;
    hourValue--;
  }
}

CountdownStart.addEventListener("click", () => {
  if (isRunning) return; 
  isRunning = true;
  displayTimer();
  intervalTimer = setInterval(displayTimer, 1000);
});

CountdownStop.addEventListener("click", () => {
  clearInterval(intervalTimer);
  isRunning = false;
});

CountdownReset.addEventListener("click", () => {
  clearInterval(intervalTimer);
  isRunning = false;

  // reset values
  hourValue = 0;
  minValue = 0;
  secValue = 0;

  CHour.textContent = String(hourValue).padStart(2, "0");
  CMin.textContent = String(minValue).padStart(2, "0");
  CSec.textContent = String(secValue).padStart(2, "0");

  InHour.value = "";
  InMin.value = "";
});