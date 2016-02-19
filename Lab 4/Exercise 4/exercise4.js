window.onload=function(){
var positionX = document.getElementById("paraX");
var positionY = document.getElementById("paraY");

document.addEventListener('mousemove',function(e)
{
	positionX.innerHTML="Position de la souris en X : ["+e.clientX+"]";
	positionY.innerHTML="Position de la souris en y : ["+e.clientY+"]";
},false);
};