var salario=980000;
var comision=170000;
var venta=0.05;
var autovendidos,totalventa=0,ganancias=0;
autovendidos=prompt("diigte la cantidad de autos vendidos");
if (autovendidos<=0||autovendidos>=0) {
if(isNaN(autovendidos)){
    var totalcomi=comision*parseInt(autovendidos);
    for (let index = 1; index <= autovendidos; index++) {
        var auto=prompt("digite el valor del auto N° "+index);
        if (auto<=0||auto>=0) {
           if(isNaN(auto)){
            console.log("auto"+index+":"+auto);
            var venta=parseInt(auto)*0.05;
            ganancias=ganancias+venta;
            totalventa=totalventa+parseInt(auto);
           }else{
            console.log("el campo no debe ser vacio");
           }
        } else {
            console.log("solo son validos datos numericos");
        }
        
    }
    var salariototal=salario+totalcomi+ganancias;
    console.log("total de la venta: "+ totalventa);
    var l=confirm("quiere ver su salario total del mes");
    if(l==true){
    console.log("salario mensual: "+salario);
    console.log("total de comision: "+totalcomi);
    console.log("ganancias de las ventas: "+ganancias);
    console.log("SALARIO TOTAL: "+salariototal);
    }
}else{
    console.log("el campo no debe ser vacio");
}
} else {
    console.log("solo son validos datos numericos");
}
