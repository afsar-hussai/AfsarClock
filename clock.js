let currentTheme="light-mode";
let toggleBtn=document.getElementById('toggleTheme');
let container=document.querySelector(".container");
let currentBorder="green-border";

let body=document.body;
let currentTimeDateColor="red";
let currenTGBgColor="black";
let currentTGColor="white";
let nowTime=new Date();
let Hour=nowTime.getHours();
let Hour1=Hour%12||12;
Hour1=Hour1.toLocaleString().padStart(2,'0')
let ampm=Hour>12?"PM":"AM";
let nowDate=new Date();
let currentDate=nowDate.toDateString();
console.log(currentDate);



let displayTime=document.querySelector('.displayTime');
displayTime.textContent=new Date().getMilliseconds();
let displayDate=document.querySelector('.displayDate');
displayDate.textContent=currentDate;




setInterval(() => {

    
    let newMinuteSecond=new Date();
    let Minute=newMinuteSecond.getMinutes().toLocaleString().padStart(2,'0');
    let seconds=newMinuteSecond.getSeconds().toLocaleString().padStart(2,'0');
    let timeString=Hour1+":"+Minute+":"+seconds+" "+ampm;
    displayTime.textContent=timeString;
  
    
}, 1000);


toggleBtn.addEventListener('click',()=>{
    let newTheme=currentTheme==='dark-mode'?"light-mode":"dark-mode";
    let newColor=currentTimeDateColor==="green"?"red":"green";
    let newborder=currentBorder==="red-border"?"green-border":"red-border";
    let newTGBgColor=currenTGBgColor==="white"?"black":"white";
    let newTGColor=currentTGColor==="black"?"white":"black";
    
    
    displayTime.className="displayTime "+newColor;
    displayDate.className="displayDate "+newColor;
    
    currentTimeDateColor=newColor;
    currentTheme=newTheme;
    currentBorder=newborder;
    currenTGBgColor=newTGBgColor;
    currentTGColor=newTGColor;

    toggleBtn.style.color=currentTGColor;
    toggleBtn.style.backgroundColor=currenTGBgColor;
    container.className="container "+newTheme+" " +newborder;
    body.className=newTheme;
})



