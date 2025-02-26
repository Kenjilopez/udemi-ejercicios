'use strict'
// condicional IF

var edad = 19;
var nombre = 'david suarez';

if(edad >= 18){
    console.log(nombre+" tiene " + edad + " años ");

    if(edad <= 33 ){
        console.log('todavia eres milenial');
    }else if(edad >= 70){
        console.log('eres anciano');    
    }else{
        console.log('ya no eres milenial');
    }

}else{
    console.log(nombre+" tiene " + edad + " años, es menor de edad ");
}

//operadores logicos
/*
AND(Y): &&
OR (O): ||
NEGACION : !
*/
var year = 2028;

if(year >= 2000 && year <= 2020 && year != 2018){ 
    console.log('estamos en la rea actual');
}else{
    console.log('estamos en la era postmoderna');
}

//or

if(year == 2008 || (year ==2018 && year == 2028)){
    console.log('el año aca en 8')
}else{
    console.log('año no registrado');
}