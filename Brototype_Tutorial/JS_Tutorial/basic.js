//1. variables

//var - can be redeclared | can be reassigned
var number1 =1;
var number2 =6;
console.log(number1+number2);

var number1 = 5;
console.log(number1);

//let - can be reassigned | cannot be redeclared
let place = 'Chennai';
place = 'cbe';
console.log(place);

//const - cannot be reassigned | cannot be 
const pi = 22.7;

console.log(pi);

//-----------------------------------------------------

//2. Data types
//object, string, number, boolean, null, undefined, symbols

//-----------------------------------------------------

//3. Function example

var milk = 20;
var snacks = 10;
var fruits = 60;


console.log(calculate(milk,snacks,fruits));


function calculate(a,b,c)
{
var result = a+b+c;
return result;
}

//-----------------------------------------------------

//4. for loop

for(var person = 0;person<100;person++)
{
    if(person === 5)
        console.log(person);
}

//-----------------------------------------------------