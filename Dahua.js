// Create your global variables below:
var timechosen = 0;
var pm = 2;
var timechanged = 0;
var time;
var options = {year: 'numeric', month: '2-digit', day: 'numeric', hour: '2-digit', minute: '2-digit' };

function secondsToMs(d) {
    d = Number(d);

    var min = Math.floor(d / 60);
    var sec = Math.floor(d % 60);

    return `0${min}`.slice(-1) + ":" + `00${sec}`.slice(-2);
}

function changed(){
    timechanged = 1;
    checkIfComplete();
}

function choosetime1(){
    reset();
    document.getElementById("time-button-1").style.backgroundColor = "rgb(243, 102, 114, 0.726)";
    timechosen = 1;
    checkIfComplete();
}

function choosetime2(){
    reset();
    document.getElementById("time-button-2").style.backgroundColor = "rgb(243, 102, 114, 0.726)";
    timechosen = 2;
    checkIfComplete();
}

function choosetime3(){
    reset();
    document.getElementById("time-button-3").style.backgroundColor = "rgb(243, 102, 114, 0.726)";
    timechosen = 3;
    checkIfComplete();
}

function choosetime4(){
    reset();
    document.getElementById("time-button-4").style.backgroundColor = "rgb(243, 102, 114, 0.726)";
    timechosen = 4;
    checkIfComplete();
}

function choosetime5(){
    reset();
    document.getElementById("time-button-5").style.backgroundColor = "rgb(243, 102, 114, 0.726)";
    timechosen = 5;
    checkIfComplete();
}

function choosetime6(){
    reset();
    document.getElementById("time-button-6").style.backgroundColor = "rgb(243, 102, 114, 0.726)";
    timechosen = 6;
    checkIfComplete();
}

function choosetime7(){
    reset();
    document.getElementById("time-button-7").style.backgroundColor = "rgb(243, 102, 114, 0.726)";
    timechosen = 7;
    checkIfComplete();
}


function choosetime8(){
    reset();
    document.getElementById("time-button-8").style.backgroundColor = "rgb(243, 102, 114, 0.726)";
    timechosen = 8;
    checkIfComplete();
}

function choosetime9(){
    reset();
    document.getElementById("time-button-9").style.backgroundColor = "rgb(243, 102, 114, 0.726)";
    timechosen = 9;
    checkIfComplete();
}

function choosetime10(){
    reset();
    document.getElementById("time-button-10").style.backgroundColor = "rgb(243, 102, 114, 0.726)";
    timechosen = 10;
    checkIfComplete();
}


function choosetime11(){
    reset();
    document.getElementById("time-button-11").style.backgroundColor = "rgb(243, 102, 114, 0.726)";
    timechosen = 11;
    checkIfComplete();
}

function choosetime12(){
    reset();
    document.getElementById("time-button-12").style.backgroundColor = "rgb(243, 102, 114, 0.726)";
    timechosen = 12;
    checkIfComplete();
}

function reset(){
    document.getElementById("time-button-1").style.backgroundColor = "pink";
    document.getElementById("time-button-2").style.backgroundColor = "pink";
    document.getElementById("time-button-3").style.backgroundColor = "pink";
    document.getElementById("time-button-4").style.backgroundColor = "pink";
    document.getElementById("time-button-5").style.backgroundColor = "pink";
    document.getElementById("time-button-6").style.backgroundColor = "pink";
    document.getElementById("time-button-7").style.backgroundColor = "pink";
    document.getElementById("time-button-8").style.backgroundColor = "pink";
    document.getElementById("time-button-9").style.backgroundColor = "pink";
    document.getElementById("time-button-10").style.backgroundColor = "pink";
    document.getElementById("time-button-11").style.backgroundColor = "pink";
    document.getElementById("time-button-12").style.backgroundColor = "pink";
}

function checkIfComplete(){
    if ((pm != 2) & (timechosen != 0) & (timechanged != 0)){
        var timee = document.getElementById("settime").value;
        plchd = new Date(timee);
        timee = plchd.getTime() + timechosen * 3600 * 1000 + pm * 12 * 3600 * 1000 - 8 * 3600 * 1000;
        time = new Date(timee);
        document.getElementById("inviteetime").innerHTML = time.toLocaleDateString("en-US", options);
    }
}

function timeam(){
    pm = 0;
    document.getElementById("time-range-button-am").style.backgroundColor = "rgb(243, 102, 114, 0.726)";
    document.getElementById("time-range-button-pm").style.backgroundColor = "pink";
    checkIfComplete();
}

function timepm(){
    document.getElementById("time-range-button-pm").style.backgroundColor = "rgb(243, 102, 114, 0.726)";
    document.getElementById("time-range-button-am").style.backgroundColor = "pink";
    pm = 1;
    checkIfComplete();
}

function storetime(){
    if (1 == 1){
        currentchosen = localStorage.getItem("inputJSON5");
        obj = JSON.parse(currentchosen).chosen;
        console.log(obj);
        if (obj == 1){
            inputJSON = JSON.stringify({timed: time.toLocaleDateString("en-US", options)});
            localStorage.setItem("inputJSON3", inputJSON);
        } else if (obj == 2){
            inputJSON = JSON.stringify({timed: time.toLocaleDateString("en-US", options)});
            localStorage.setItem("inputJSON4", inputJSON);
        }
    }
}
