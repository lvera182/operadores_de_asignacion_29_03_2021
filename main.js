
// let x = "1";
// let y = "2";
// let z = "Vera"
// let result;
// console.warn(x);
// console.warn(y);
// console.warn(z);
// result += x;
// result += y;
// result += z;
// x += y;
// x += z;
// console.log(x);


// let x1 = '10';
// let y1 = 2;
// console.warn(x1);
// console.warn(y1);
// x1 -= y1;
// console.warn(x1);

function operadorDeExponenciacion(x, y){
    console.warn(`Parametros iniciales`);
    console.log(`Parametro x : ${x}`);
    console.log(`Parametro y : ${y}`);
    x **= y; 
    
    console.warn(`Operador exponenciacion`);
    console.log(`Parametro x : ${x} RESULTADO`);
    console.log(`Parametro y : ${y}`);
}
function operadorDeModulo(x, y){
    console.warn(`Parametros iniciales`);
    console.log(`Parametro x : ${x}`);
    console.log(`Parametro y : ${y}`);
    x %= y; 

    console.warn(`Operador Modulo`);
    console.log(`Parametro x : ${x} RESULTADO`);
    console.log(`Parametro y : ${y}`);
}
function operadorDeDivision(x, y){
    console.warn(`Parametros iniciales`);
    console.log(`Parametro x : ${x}`);
    console.log(`Parametro y : ${y}`);
    x /= y; 

    console.warn(`Operador Division`);
    console.log(`Parametro x : ${x} RESULTADO`);
    console.log(`Parametro y : ${y}`);
}
function operadorDeMultiplicacion(x, y){
    console.warn(`Parametros iniciales`);
    console.log(`Parametro x : ${x}`);
    console.log(`Parametro y : ${y}`);
    x *= y; 

    console.warn(`Operador Multiplicacion`);
    console.log(`Parametro x : ${x} RESULTADO`);
    console.log(`Parametro y : ${y}`);
}
function operadorDeSustracion(x, y){
    console.warn(`Parametros iniciales`);
    console.log(`Parametro x : ${x}`);
    console.log(`Parametro y : ${y}`);
    x -= y; 

    console.warn(`Operador Sustracion`);
    console.log(`Parametro x : ${x} RESULTADO`);
    console.log(`Parametro y : ${y}`);
}
function operadorDeAdicion(x, y){
    console.warn(`Parametros iniciales`);
    console.log(`Parametro x : ${x}`);
    console.log(`Parametro y : ${y}`);
    x += y; 

    console.warn(`Operador Adicion`);
    console.log(`Parametro x : ${x} RESULTADO`);
    console.log(`Parametro y : ${y}`);
}
function operadorDeAsignacion(x, y){
    console.warn(`Parametros iniciales`);
    console.log(`Parametro x : ${x}`);
    console.log(`Parametro y : ${y}`);
    x = y; 
    
    console.warn(`Operador Asignacion`);
    console.log(`Parametro x : ${x} RESULTADO`);
    console.log(`Parametro y : ${y}`);
}
let x = '5';
let y = 2;
operadorDeAsignacion(x,y);
operadorDeAdicion(x,y);
operadorDeSustracion(x,y);
operadorDeMultiplicacion(x,y);
operadorDeDivision(x,y);
operadorDeModulo(x,y);
operadorDeExponenciacion(x,y);