
onload=function (){

document.getElementById("menu").onclick=function (){
var x = document.getElementsByClassName("gridmenu");
    x[0].style.display="block";
document.getElementById("menu").style.display="none";

	document.getElementById("x").style.display="block";
	

}
document.getElementById("x").onclick=function v(){
var x = document.getElementsByClassName("gridmenu");
    x[0].style.display="none";
document.getElementById("menu").style.display="block";

document.getElementById("x").style.display="none";

}

window.onresize=function(){
	if(window.innerWidth>1000)
    document.getElementById("menu").reload();
	var x = document.getElementsByClassName("gridmenu");
    x[0].style.display="block";
document.getElementById("menu").style.display="none";

document.getElementById("x").style.display="none";
else
var x = document.getElementsByClassName("gridmenu");
    x[0].style.display="none";
document.getElementById("menu").style.display="block";

document.getElementById("x").style.display="none";
}

}