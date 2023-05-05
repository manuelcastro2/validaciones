alert("area de un triangulo");
var n1 = prompt("digite la altura");
var n2 = prompt("digite la base");
if (n1 <= 0 || n1 >= 0 || n2 <= 0 || n2 >= 0) {
    if(isNaN(n1)||isNaN(n2)){
        var area = (parseInt(n1) * parseInt(n2)) / 2;
    console.log( 'El area de un triangulo es: ' + area);
    }
} else {
   console.log("debe ingresar un numero");
}