var notas;
var nota60=0;
var nota40=0;
    for (let index = 1; index <=4; index++) {
        notas=prompt("digite la nota N°"+index);
   if (notas>=0||notas<=0) {
if(isNaN(notas)){
    if(index!=3&&index!=4){
        nota40=nota40+parseInt(notas);
        
            }else{
                nota60=nota60+parseInt(notas);
            }
}else{
    console.log("el campo no debe ser vacio");
}
   } else {
    console.log("solo se valen valores numericos");
   }
    }
    nota40=(nota40*0.4)/2;
    nota60=(nota60*0.6)/2
    var notatotal=nota60+nota40;
    console.log(nota40);
    console.log(nota60);
    console.log(notatotal);