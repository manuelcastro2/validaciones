var mate, fisi, quimi;
var Mmatematicas = [];
var Mfsica = [];
var Mquimica = [];
var promM = 0, proF = 0, proQ = 0;
do {
    var opcion = prompt("1.MATEMATICAS\n2.FISICA\n3.QUIMICA\n0.CERRAR PROGRAMA");
    if (opcion >= 0 || opcion <= 0) {

        switch (parseInt(opcion)) {
            case 1:
                mate = prompt("DIIGTE LA CALIFICACION DEL EXAMEN DE MATEMATICAS");
                if (mate >= 0 || mate <= 0) {
                    mate = mate * 0.9;
                    console.log(mate);
                } else {
                    console.log("DEBE DIIGTAR UN NUMERO NO SON VALIDOS LECTRAS");
                }

                for (let index = 0; index < 3; index++) {
                    var k = prompt("DIGITE LA TAREA NUMERO " + index);
                    if (k >= 0 || k <= 0) {
                        Mmatematicas.push(k);
                        console.log(Mmatematicas[index]);
                        promM = promM + parseInt(Mmatematicas[index]);
                    } else {
                        console.log("DEBE DIIGTAR UN NUMERO NO SON VALIDOS LECTRAS");
                    }

                }
                promM = (promM * 0.1) / 3;
                var total = promM + mate;
                console.log("EL PROMEDIO DE MATEMATICAS: " + total);
                break;

            case 2:
                fisi = prompt("DIIGTE LA CALIFICACION DEL EXAMEN DE MATEMATICAS");
                if (fisi >= 0 || fisi <= 0) {
                    fisi = fisi * 0.8;
                    console.log(fisi);
                } else {
                    console.log("DEBE DIIGTAR UN NUMERO NO SON VALIDOS LECTRAS");
                }

                for (let index = 0; index < 2; index++) {
                    var k = prompt("DIGITE LA TAREA NUMERO " + index);
                    if (k >= 0 || k <= 0) {
                        Mfsica.push(k);
                        console.log(Mfsica[index]);
                        proF = proF + parseInt(Mfsica[index]);
                    } else {
                        console.log("DEBE DIIGTAR UN NUMERO NO SON VALIDOS LECTRAS");
                    }

                }
                proF = (proF * 0.2) / 2;
                var total = proF + fisi;
                console.log("EL PROMEDIO DE MATEMATICAS: " + total);
                break;
            case 3:
                quimi = prompt("DIIGTE LA CALIFICACION DEL EXAMEN DE MATEMATICAS");
                if (quimi >= 0 || quimi <= 0) {
                    quimi = quimi * 0.85;
                    console.log(quimi);
                } else {
                    console.log("DEBE DIIGTAR UN NUMERO NO SON VALIDOS LECTRAS");
                }

                for (let index = 0; index < 2; index++) {
                    var k = prompt("DIGITE LA TAREA NUMERO " + index);
                    if (k >= 0 || k <= 0) {
                        Mquimica.push(k);
                        console.log(Mquimica[index]);
                        proQ = proQ + parseInt(Mquimica[index]);
                    } else {
                        console.log("DEBE DIIGTAR UN NUMERO NO SON VALIDOS LECTRAS");
                    }

                }
                proF = (proQ * 0.15) / 2;
                var total = proQ + quimi;
                console.log("EL PROMEDIO DE MATEMATICAS: " + total);
                break;

                break;
        }

    } else {
        console.log("solo se reciben datos numericos");
    }



} while (opcion != 0);