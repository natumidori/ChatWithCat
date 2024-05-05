window.onload = function(){
    
    displayDay()
    
    var img = document.getElementById("cat");
    img.src = "neko1.png";

    displayTime();
    setInterval(displayTime,1000);
    
    document.getElementById("btnA").addEventListener('click', btnAClick);
    document.getElementById("btnB").addEventListener('click', btnBClick);
    document.getElementById("char_area_1").addEventListener('click', onCharArea1Clicked);
    /*
    var b = false;
    console.log("b: " + b);
    console.log("!b: " + !b);
    if (!b) {
        console.log("b is false");
    }
    */

    var a = false;
    var b = false;
}

function onCharArea1Clicked() {
    //console.log('onCharArea1Clicked');
    kaiwa1();
}

function kaiwa1(){
    var msg1 ="今日の気分は？";
    document.getElementById("msg").textContent =msg1;
    btnA.textContent="良い";
    btnB.textContent="悪い";
    var msg2="";
    if (a) {
        msg2 = "いいね";
        a=false;
        document.getElementById("msg").textContent =msg2;
        stopPropagation
    }
    if(b){
        msg3 ="無理しないで";
        b=false;
        document.getElementById("msg").textContent =msg3;
    }
    
    
}

function displayTime(){
    const now =new Date();
    const hour = now.getHours();
    const minute = now.getMinutes();
    const second = now.getSeconds(); 
    var currentTime="";
    if(minute<10){
        currentTime = `${hour}:0${minute}`;
    }else{
        currentTime = `${hour}:${minute}`;
    }
    
    document.querySelector(".clock").textContent = currentTime;
    
}

function displayDay(){
    var str ="";
    var day =new Date().getDay();
    switch(day){
        case 0:
            str ="日";break;
        case 1:
            str ="月";break;
        case 2:
            str ="火";break; 
        case 3:
            str ="水";break; 
        case 4:
            str ="木";break; 
        case 5:
            str ="金";break; 
        case 6:
            str ="土";break; 
    }

    //document.getElementById("dayofweek").textContent =`(${str})`;

    var day1 = new Date().getDate();
    var mon1 = new Date().getMonth();
    var today = `${mon1}/${day1}`;
    document.getElementById(".today").textContent = today+`(${str})`;
}

function btnAClick() {
    a=true;
    kaiwa1();
}

function btnBClick() {
    b=true;
    kaiwa1();
}




