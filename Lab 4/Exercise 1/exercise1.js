window.onload=function(){
var i=1;
document.getElementById("but").addEventListener("click",function(event){
	var p= document.getElementById("p");
	p.innerHTML=("Vous avez cliqué sur le bouton "+ i+ " fois.");
	i++;
});
};