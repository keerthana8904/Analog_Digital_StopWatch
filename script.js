let hour = document.getElementById("hour");
let minute =  document.getElementById("minute");
let second =  document.getElementById("second");

function currentTime(){
    let now = new Date();

    let h = now.getHours();
    let m = now.getMinutes();
    let s = now.getSeconds();

    //convert time to roataional angel
    let secDeg =s * 6; //360/60 = 6                         eg 10sec = 10 *6 = 60 deg
    let minDeg = m * 6;
    let hourDeg = (h % 12) * 30 + m * 0.5

    console.log(h,m,s)

    hour.style.transform = `rotate(${hourDeg}deg)`;
    minute.style.transform = `rotate(${minDeg}deg)`;
    second.style.transform = `rotate(${secDeg}deg)`;


    setInterval(currentTime, 1000);


}

currentTime();
