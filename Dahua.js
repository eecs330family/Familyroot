// Create your global variables below:
var tracklist = ["All We Got", "No Problem", "Summer Friends", "D.R.A.M. Sings Special", "Blessings", "Same Drugs", "Mixtape", "Angels", "Juke Jam", "All Night"];
var song_name;
var volLevels = [];
var playing;
var timer;
var current_volume;
var timechosen1 = 0;
var timechosen2 = 0;
var timechosen3 = 0;
var timechosen4 = 0;
var timechosen5 = 0;
var timechosen6 = 0;
var timechosen7 = 0;
var timechosen8 = 0;
var timechosen9 = 0;
var timechosen10 = 0;
var timechosen11 = 0;
var timechosen12 = 0;
var am = 0;
var pm = 0;



function init() {
  var i;
  for (i=0; i<6; i++) {
    volLevels.push(document.getElementById("vl"+i));
  }
  volLevels[0].style.backgroundColor = "#cc0000";
  volLevels[1].style.backgroundColor = "#cc0000";
  volLevels[2].style.backgroundColor = "#cc0000";
  current_volume = 3;
  playing = 0; //default: not playing
  song_name = 0; //default: display first song name
};

function volUp() {
  if (current_volume < 6) {
    volLevels[current_volume].style.backgroundColor = "#cc0000";
    current_volume++;
  }
  else {
    current_volume = 5;
  }
}

function volDown() {
  if (current_volume >= 0) {
    volLevels[current_volume].style.backgroundColor = "#ffffff";
    current_volume--;
  }
  else {
    current_volume = 0;
  }
}

function switchPlay() {
  if (playing == 0) {
   document.getElementById("play-switch").innerHTML = "pause";
    playing = 1;
    //move display bar right and increment display time every second, until the song ends
    timer = setInterval(function() {
      if(document.getElementById("play-range").value < 180) {
        document.getElementById("play-range").value++;
        document.getElementById("time-elapsed").innerHTML = secondsToMs(document.getElementById("play-range").value);
      }
      else {
        nextSong();
      }
    },1000);
    timer;
  }
  else {
    document.getElementById("play-switch").innerHTML = "play_arrow";
    playing = 0;
    clearInterval(timer);
  }
}


function nextSong() {
  if (song_name<9) {
    document.getElementById("current_song").innerHTML = tracklist[song_name+1];
    song_name++;
  }
  else {
    document.getElementById("current_song").innerHTML = tracklist[0];
    song_name = 0;
  }
  document.getElementById("play-range").value = 0;
  document.getElementById("time-elapsed").innerHTML = "0:00";
}

function prevSong() {
  if (song_name>0) {
    document.getElementById("current_song").innerHTML = tracklist[song_name-1];
    song_name--;
  }
  else {
    document.getElementById("current_song").innerHTML = tracklist[9];
    song_name = 9;
  }
  document.getElementById("play-range").value = 0;
  document.getElementById("time-elapsed").innerHTML = "0:00";
}

function secondsToMs(d) {
    d = Number(d);

    var min = Math.floor(d / 60);
    var sec = Math.floor(d % 60);

    return `0${min}`.slice(-1) + ":" + `00${sec}`.slice(-2);
}

init();



function choosetime1(){
  if (timechosen1 ==0 && (timechosen1 + timechosen2 + timechosen3 + timechosen4 + timechosen5 +
    timechosen6 + timechosen7 + timechosen8 + timechosen9 + timechosen10 + timechosen11 + timechosen12) < 1){
		document.getElementById("time-button-1").style.backgroundColor = "rgb(243, 102, 114, 0.726)";
		timechosen1 = 1;
	}
	else if (timechosen1 ==1){
		document.getElementById("time-button-1").style.backgroundColor = "pink";
		timechosen1 = 0;
  }
}

function choosetime2(){
	if (timechosen2 ==0 && (timechosen1 + timechosen2 + timechosen3 + timechosen4 + timechosen5 +
    timechosen6 + timechosen7 + timechosen8 + timechosen9 + timechosen10 + timechosen11 + timechosen12) < 1){
		document.getElementById("time-button-2").style.backgroundColor = "rgb(243, 102, 114, 0.726)";
		timechosen2 = 1;
	}
	else if (timechosen2 ==1){
		document.getElementById("time-button-2").style.backgroundColor = "pink";
		timechosen2 = 0;
  }
}

function choosetime3(){
	if (timechosen3 ==0 && (timechosen1 + timechosen2 + timechosen3 + timechosen4 + timechosen5 +
    timechosen6 + timechosen7 + timechosen8 + timechosen9 + timechosen10 + timechosen11 + timechosen12) < 1){
		document.getElementById("time-button-3").style.backgroundColor = "rgb(243, 102, 114, 0.726)";
		timechosen3 = 1;
	}
	else if (timechosen3 ==1){
		document.getElementById("time-button-3").style.backgroundColor = "pink";
		timechosen3 = 0;
  }
}

function choosetime4(){
	if (timechosen4 ==0 && (timechosen1 + timechosen2 + timechosen3 + timechosen4 + timechosen5 +
    timechosen6 + timechosen7 + timechosen8 + timechosen9 + timechosen10 + timechosen11 + timechosen12) < 1){
		document.getElementById("time-button-4").style.backgroundColor = "rgb(243, 102, 114, 0.726)";
		timechosen4 = 1;
	}
	else if (timechosen4 ==1){
		document.getElementById("time-button-4").style.backgroundColor = "pink";
		timechosen4 = 0;
  }
}

function choosetime5(){
	if (timechosen5 ==0 && (timechosen1 + timechosen2 + timechosen3 + timechosen4 + timechosen5 +
    timechosen6 + timechosen7 + timechosen8 + timechosen9 + timechosen10 + timechosen11 + timechosen12) < 1){
		document.getElementById("time-button-5").style.backgroundColor = "rgb(243, 102, 114, 0.726)";
		timechosen5 = 5;
	}
	else if (timechosen5 ==1){
		document.getElementById("time-button-5").style.backgroundColor = "pink";
		timechosen5 = 0;
  }
}

function choosetime6(){
	if (timechosen6 ==0 && (timechosen1 + timechosen2 + timechosen3 + timechosen4 + timechosen5 +
    timechosen6 + timechosen7 + timechosen8 + timechosen9 + timechosen10 + timechosen11 + timechosen12) < 1){
		document.getElementById("time-button-6").style.backgroundColor = "rgb(243, 102, 114, 0.726)";
		timechosen6 = 1;
	}
	else if (timechosen6 ==1){
		document.getElementById("time-button-6").style.backgroundColor = "pink";
		timechosen6 = 0;
  }
}

function choosetime7(){
	if (timechosen7 ==0 && (timechosen1 + timechosen2 + timechosen3 + timechosen4 + timechosen5 +
    timechosen6 + timechosen7 + timechosen8 + timechosen9 + timechosen10 + timechosen11 + timechosen12) < 1){
		document.getElementById("time-button-7").style.backgroundColor = "rgb(243, 102, 114, 0.726)";
		timechosen7 = 1;
	}
	else if (timechosen7 ==1){
		document.getElementById("time-button-7").style.backgroundColor = "pink";
		timechosen7 = 0;
  }
}


function choosetime8(){
	if (timechosen8 ==0 && (timechosen1 + timechosen2 + timechosen3 + timechosen4 + timechosen5 +
    timechosen6 + timechosen7 + timechosen8 + timechosen9 + timechosen10 + timechosen11 + timechosen12) < 1){
		document.getElementById("time-button-8").style.backgroundColor = "rgb(243, 102, 114, 0.726)";
		timechosen8 = 1;
	}
	else if (timechosen8 ==1){
		document.getElementById("time-button-8").style.backgroundColor = "pink";
		timechosen8 = 0;
  }
}

function choosetime9(){
	if (timechosen9 ==0 && (timechosen1 + timechosen2 + timechosen3 + timechosen4 + timechosen5 +
    timechosen6 + timechosen7 + timechosen8 + timechosen9 + timechosen10 + timechosen11 + timechosen12) < 1){
		document.getElementById("time-button-9").style.backgroundColor = "rgb(243, 102, 114, 0.726)";
		timechosen9 = 1;
	}
	else if (timechosen9 ==1){
		document.getElementById("time-button-9").style.backgroundColor = "pink";
		timechosen8 = 0;
  }
}

function choosetime10(){
	if (timechosen10 ==0 && (timechosen1 + timechosen2 + timechosen3 + timechosen4 + timechosen5 +
    timechosen6 + timechosen7 + timechosen8 + timechosen9 + timechosen10 + timechosen11 + timechosen12) < 1){
		document.getElementById("time-button-10").style.backgroundColor = "rgb(243, 102, 114, 0.726)";
		timechosen9 = 1;
	}
	else if (timechosen10 ==1){
		document.getElementById("time-button-10").style.backgroundColor = "pink";
		timechosen10 = 0;
  }
}
  

function choosetime11(){
	if (timechosen11 ==0 && (timechosen1 + timechosen2 + timechosen3 + timechosen4 + timechosen5 +
    timechosen6 + timechosen7 + timechosen8 + timechosen9 + timechosen10 + timechosen11 + timechosen12) < 1){
		document.getElementById("time-button-11").style.backgroundColor = "rgb(243, 102, 114, 0.726)";
		timechosen11 = 1;
	}
	else if (timechosen11 ==1){
		document.getElementById("time-button-11").style.backgroundColor = "pink";
		timechosen11 = 0;
  }
}

function choosetime12(){
	if (timechosen12 ==0 && (timechosen1 + timechosen2 + timechosen3 + timechosen4 + timechosen5 +
    timechosen6 + timechosen7 + timechosen8 + timechosen9 + timechosen10 + timechosen11 + timechosen12) < 1){
		document.getElementById("time-button-12").style.backgroundColor = "rgb(243, 102, 114, 0.726)";
		timechosen12 = 1;
	}
	else if (timechosen12 ==1){
		document.getElementById("time-button-12").style.backgroundColor = "pink";
		timechosen12 = 0;
  }
}

function timeam(){
  if (am == 0 && (am + pm) < 1){
    document.getElementById("time-range-button-am").style.backgroundColor = "rgb(243, 102, 114, 0.726)";
    am = 1;
  }
  else if (am == 1){
    document.getElementById("time-range-button-am").style.backgroundColor = "pink";
    am = 0;
  }
}

function timepm(){
  if (pm == 0 && (am + pm) < 1){
    document.getElementById("time-range-button-pm").style.backgroundColor = "rgb(243, 102, 114, 0.726)";
    pm = 1;
  }
  else if (pm == 1){
    document.getElementById("time-range-button-pm").style.backgroundColor = "pink";
    pm = 0;
  }
  
}



