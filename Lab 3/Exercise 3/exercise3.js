var fin=false;
var random=Math.floor((Math.random()*20)+1);

do{
	var choix=prompt();
	if(choix>random){
		alert("le Nombre est plus petit");
		fin=false;
	}else if(choix<random){
		alert("Le nombre est plus grand!");
		fin=false;
	}else{
		alert("Bravo! vous avez trouver le nombre!");
		fin=true;
	}
}while(fin==false);



