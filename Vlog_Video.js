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
