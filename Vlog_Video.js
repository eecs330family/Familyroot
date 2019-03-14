// Create your global variables below:
var like = 0;

function fav(){
	if (like ==0){
		document.getElementById("attempt").innerHTML = "favorite";
		like = 1;
	}
	else if (like ==1){
		document.getElementById("attempt").innerHTML = "favorite_border";
		like = 0;
	}
}

function myFunction() {
  var popup = document.getElementById("myPopup");
  popup.classList.toggle("show");
}


function timezoneFunc() {
	var options = {year: 'numeric', month: '2-digit', day: 'numeric', hour: '2-digit', minute: '2-digit' };
	var timee = document.getElementById("timezone").value;
	timee = timee + ":00";
	plchd = new Date(timee);
	timee = plchd.getTime() + 8 * 3600 * 1000;
	var time = new Date(timee);
	document.getElementById("timezone1").innerHTML = "Beijing Time: " + time.toLocaleDateString("en-US" , options);
}

function timezoneFunc2() {
	var options = {year: 'numeric', month: '2-digit', day: 'numeric', hour: '2-digit', minute: '2-digit' };
	var timee = document.getElementById("timezone0").value;
	timee = timee + ":00";
	plchd = new Date(timee);
	timee = plchd.getTime() + 8 * 3600 * 1000;
	var time = new Date(timee);
	document.getElementById("timezone2").innerHTML = "Beijing Time: " + time.toLocaleDateString("en-US" , options);
}

function init(){
	time1 = localStorage.getItem("inputJSON3");
	obj = JSON.parse(time1);
	if (obj){
		document.getElementById("1st").innerHTML = "<b>" + obj.timed + "</b>";
	}
	time2 = localStorage.getItem("inputJSON4");
	obj = JSON.parse(time2);
	if (obj){
		document.getElementById("2nd").innerHTML = "<b>" + obj.timed + "</b>";
	}
}

function storefirst(){
	inputJSON = JSON.stringify({chosen: 1});
	localStorage.setItem("inputJSON5", inputJSON);
}

function storesecond(){
	inputJSON = JSON.stringify({chosen: 2});
	localStorage.setItem("inputJSON5", inputJSON);
}
