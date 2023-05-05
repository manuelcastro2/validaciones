var plata=prompt("DIGITE SU CANTIDAD DE INVERSION");
if(plata>=0||plata<=0){
    var pl=isNaN(plata);
if(pl!=true){
var calculo=parseInt(plata)*0.012;
var totaldeinversion=calculo+parseInt(plata);
console.log("total de inversion :"+totaldeinversion);
}else{
    console.log("no debe ser vacio el campo");
}

}else{
console.log("debe digitar un numero");
}