let clock = document.getElementById("clock");
let hour = document.getElementById("hour");
let minute =  document.getElementById("minute");
let second =  document.getElementById("second");
let start = document.getElementById("start");
let stop = document.getElementById("stop");

let dHour = document.getElementById("dHour");
let dMin = document.getElementById("dMin");
let dSec = document.getElementById("dSec");
let startDigi = document.getElementById("DigiStart");
let stopDigi = document.getElementById("DigiStop");


//Add Numbers
for (let i = 1; i <= 12; i++) {
  const num = document.createElement("div");
  num.classList.add("number");

  const angle = i * 30 ; //angle into hour

  num.style.transform = `
    rotate(${angle}deg)
    translateY(-110px)
    rotate(-${angle}deg)
  `;

  num.innerText = i;

  clock.appendChild(num);
}


function currentTime(){

 
    let now = new Date();

    let h = now.getHours();
    let m = now.getMinutes();
    let s = now.getSeconds();

    //time to deg
    let secDeg = s * 6;              //360/60 = 6                 eg: 10sec = 10 *6 = 60 deg
    let minDeg = m * 6;
    let hourDeg = (h % 12) * 30 + m * 0.5 

    console.log(h,m,s)
    console.log(secDeg,minDeg,hourDeg)

    hour.style.transform = `rotate(${hourDeg}deg)`;
    minute.style.transform = `rotate(${minDeg}deg)`;
    second.style.transform = `rotate(${secDeg}deg)`;

}



let t ;
function startClock(){
  
  if(t) return;
    console.log("clicked start")
    currentTime();
    t = setInterval(currentTime, 1000);
}


function stopClock(){
    console.log("clicked stop")
    clearInterval(t);
    t = null;
}

start.addEventListener("click",startClock);
stop.addEventListener("click",stopClock);

// digital clock

dHour.textContent = `00`;
dMin.textContent = `00`;
dSec.textContent = `00`;

function format(num){
  return num < 10 ? "0" + num : num;
}

function formatHour(num){
   if(num>12){
    num = num%12;
  }

  return num < 10 ? "0" + num : num;

}

function DigiCurrentTime(){
   let now = new Date();

    let h = now.getHours();
    let m = now.getMinutes();
    let s = now.getSeconds();

    console.log(h,m,s);

   dHour.textContent = formatHour(h);
   dMin.textContent = format(m);
   dSec.textContent = format(s);

}


let d;
startDigi.addEventListener("click",()=>{
  console.log("button clicked");
  if(d) return;
   DigiCurrentTime();
  d = setInterval(DigiCurrentTime,1000);

})

stopDigi.addEventListener("click",()=>{
  console.log("button clicked");
  clearInterval(d);
  d=null;

})

// stop watch 

let TimerHour = document.getElementById("THour");
let TimerMIn = document.getElementById("TMin");
let TimerSec = document.getElementById("TSec");

let sbtn = document.getElementById("TimerStart");
let srst = document.getElementById("TimeReset");
let spbtn = document.getElementById("TimerStop");


let seconds= 0;
let minutes =0;
let hours =0;
let interval = null;

function stopWatch(){
  seconds++;
    if(seconds === 60){
      seconds =0;
      minutes++;
    }
    if(minutes===60){
      minutes=0;
      hours++;
    }
    if(hours === 24){
      hours = 0;
    }

    TimerHour.textContent = hours.toString().padStart(2, "0");
    TimerMIn.textContent = minutes.toString().padStart(2, "0");
    TimerSec.textContent = seconds.toString().padStart(2, "0");

}

sbtn.addEventListener("click",() => {
  console.log("button clicked");
  if (interval) return; 
  stopWatch();
 interval = setInterval(stopWatch,1000)
});

spbtn.addEventListener("click", () => {
  clearInterval(interval);
  interval = null; 
});


srst.addEventListener("click",()=>{
   clearInterval(interval);  
   interval = null;

   seconds= 0;
   minutes =0;
   hours =0;

    TimerHour.textContent = hours.toString().padStart(2, "0");
    TimerMIn.textContent = minutes.toString().padStart(2, "0");
    TimerSec.textContent = seconds.toString().padStart(2, "0");

})
// count down timer
// inside analog add digital same functionality 