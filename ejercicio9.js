var base = prompt("digite el sueldo base");
var comision = 0.1;
var ventas = 3;
var comisionn=0;
if(base<=0||base>=0){
    if(isNaN(base)){
        for(i=1;i<=3;i++){
            var venta = prompt("digite el valor de cada venta"+i);
            if(venta>=0||venta<=0){
                if(isNaN(venta)){
        comisionn=comisionn +parseInt(venta)*comision;
                }else{
                    console.log("el campo no debe ser vacio");
                }
            }else{
                console.log("los valores deben ser numericos");
            }
        }
        var sueldototal=base+comisionn;
        console.log("su comision: "+comisionn);
        console.log("el sueldo total:"+sueldototal);
    }else{
        console.log("el campo no debe ser vacio");
    }
}else{
    console.log("los valores deben ser numericos");
}
