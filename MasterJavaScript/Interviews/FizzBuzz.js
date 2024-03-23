/*

Escribir un programa que muestre en pantalla los números del 1 al 100, sustituyendo 
los múltiplos de 3 por la palabra “fizz”, los múltiplos de 5 por “buzz” y los 
múltiplos de ambos, es decir, los múltiplos de 3 y 5 (o de 15), por la palabra 
“fizzbuzz”.

*/

function FizzBuzz (){

    for(let i = 1; i <= 100; i++){
        
        if(i % 15 == 0){
            console.log("FizzBuzz");
        }
        else
        if(i % 5 == 0){
            console.log("Buzz");
        }
        else
        if(i % 3 == 0){
            console.log("Fizz");
        }
        else{
            console.log(i)
        }
    }
}

console.log(FizzBuzz())