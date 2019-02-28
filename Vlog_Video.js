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
	console.log(time);

	document.getElementById("timezone1").innerHTML = "Beijing Time: " + time.toLocaleDateString("en-US" , options);

}
