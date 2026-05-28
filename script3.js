let timeElement=document.getElementById("time");
let dateElement=document.getElementById("date");
let is24Hour=false;
let toggleBtn=document.getElementById("toggle-btn");
function updateTime(){
    const now=new Date()
    let hours=now.getHours()
    let minutes=now.getMinutes()
    let seconds=now.getSeconds()

    minutes=String(minutes).padStart(2,"0")
    seconds=String(seconds).padStart(2,"0")

    let ampm="";
    if(!is24Hour){
        ampm=hours>=12?"PM":"AM";
        hours=hours%12;
        if(hours===0){
            hours=12;
        }
    }
 timeElement.innerText=hours+":"+minutes+":"+seconds+ampm;
let day=String(now.getDate()).padStart(2,"0")
 let month=String(now.getMonth()).padStart(2,"0")
   let year=now.getFullYear();
dateElement.innerText=day+":"+month+":"+year
}
toggleBtn.addEventListener("click",function(){
    is24Hour=!is24Hour;
    if(is24Hour){
        toggleBtn.innerText="Switch to 12-hour format";
    }else{
        toggleBtn.innerText="Switch to 24-hour format"
    }
    updateTime();
})
setInterval(updateTime,1000)
updateTime();