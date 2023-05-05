var edad=prompt("diigte su edad");
if (edad<=0||edad>=0) {
if(isNaN(edad)){
    var npulsaciones=(220-edad)/10;
    console.log(npulsaciones);
}else{
console.log("el campo no puede estar vacio");
}
} else {
    console.log("digite un numero");
}