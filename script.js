
document.getElementById("menu").onclick=function (){
var x = document.getElementsByClassName("gridmenu");
    x[0].style.display="block";
document.getElementById("menu").style.display="none";

	document.getElementById("x").style.display="block";
	

}
document.getElementById("x").onclick=function (){
var x = document.getElementsByClassName("gridmenu");
    x[0].style.display="none";
document.getElementById("menu").style.display="block";

document.getElementById("x").style.display="none";

}

window.onresize=function(){
	if(window.innerWidth>800)
 location.reload();
}


