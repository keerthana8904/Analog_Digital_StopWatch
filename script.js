let clock = document.getElementById("clock");
let hour = document.getElementById("hour");
let minute =  document.getElementById("minute");
let second =  document.getElementById("second");
let start = document.getElementById("start");
let stop = document.getElementById("stop");

//Add Numbers
for (let i = 1; i <= 12; i++) {
  const num = document.createElement("div");
  num.classList.add("number");

  const angle = i * 30; //angle into hour

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
    console.log("clicked start")
    t = setInterval(currentTime, 1000);
}


function stopClock(){
    console.log("clicked stop")
    clearInterval(t);
}

start.addEventListener("click",startClock);
stop.addEventListener("click",stopClock);





