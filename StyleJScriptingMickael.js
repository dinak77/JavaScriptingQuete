let question = prompt("Hey mon ami ! Tu aimes çà les patates ?", " oui ou non");{
if (question == 'oui'){
    	let tas = '#';
    	let i = 0;
    	for (i = 0; i < 7; i++){
		console.log(tas);
    		tas = tas +'#';
    }
}
else if (question == 'non'){
    alert("Ne me dis pas que tu préfères les champignon ! :(");
	}
else{
    alert("Je vous sens comme tiraillé !");
	}
}
