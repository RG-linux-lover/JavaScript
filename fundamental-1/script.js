let js = "amazing";
if (js === "amazing") alert("welcome to this page"); // === strict equality
console.log(10 + 20);  // this is shown in developer console 


// Mutable variables bolte hai inko jo change ho jate hai 
// how to name variables in javascript , standard way to Write 
let firstName = 'Ritik';
let first_Name = 'ritiks';
let myFirstJob = 'redhat';
console.log(firstName);
console.log(myFirstJob);     // firsst is in small and all other will be in capital 
console.log(first_Name);
// letter , underscore and $ this are allow in variable names
// don't use reserved javascript keywords like new , function if you used it then used as this - $function example below
// name is also a reserved javascript keywords but it works but better not to use it 
// and not use variable name with starting of capital letter like this - Person because this type is used in OOPs 
let $function = 'function wala';
alert($function);   // this alert message shows in second time after the first appear
let PI = 3.1415;
console.log(PI);

/* multi line comment  */
console.log(true)

// value is show data type so we can change variable with different values and that values shows data type

let javaScriptIsFun = true;
console.log(javaScriptIsFun);


console.log(typeof true);                  // boolean
console.log(typeof javaScriptIsFun);       // boolean
console.log(typeof 'javaScriptIsFun');     // string
console.log(typeof 'ritik');              // string
console.log(typeof 234);                  // number 

// dynamic typing - if we declare variable in previous then we not need to write let again

javaScriptIsFun = "ritik is enjoying dynamic typing of javascript";
console.log(typeof javaScriptIsFun);   // now the tpye is string phle boolean tha ab string ho gya hai

// undefined variable 

let kuchnhi;
console.log(kuchnhi);                    // answer undefined 
console.log(typeof kuchnhi);             // type is undefined 

kuchnhi = 'ritik kuch nhi';
console.log(typeof kuchnhi);             // answer is string 

// null 

console.log(typeof null);    // answer is object but it is bug in javascript 

// empty 
let year;
year = 2021;
console.log(year);


// const is used when a variable never be change and we can not make empty const variable
// immutable variable jo change nhi hote hai 

const birthYear = 2000;

// old way is var 
var job = 'teaching';
job = 'student';

// operator basically allows us to transform values or combine multiple values and really do all kinds of works with values 

// mathametical or arthmetical operators 

const ageRitik = 2050 - 2000;
const ageRani = 2050 - 2000;
console.log(ageRitik);
console.log(ageRitik, ageRani);

// we can also do this make variable if using same 
const oldYear = 2050;
const ageTitik = oldYear - 2000;
const ageRanu = oldYear - 2000;
console.log(ageTitik, ageRanu);

console.log(ageRitik * 2, ageRani / 10, 3 ** 2);
// 3 **2 means 3 ki power 2 = 9 

// **  right-to-left chlta hai 

const fName = 'Ritik';
const lName = 'Gupta';
console.log(fName + lName);  // RitikGupta



console.log(fName + ' ' + lName);  // Ritik Gupta


// const fName = 'Ritik';
// const lName = ' Gupta';
// console.log(fName + lName);  // Ritik Gupta


// Assignment  operators

let x = 2 + 3;
x += 5; // x = x + 5
x *= 5;
x++;  // x = x + 1
x--;  // x = x - 1
x--;
console.log(x);

// comparison operators  - o/p in boolean form true and false 
const c1 = 3;
const c2 = 2;
console.log(c1 > c2);  // true 
console.log(c1 < c2);  // false 
console.log(c1 >= 2);  // true 

console.log(c1 - 2 >= c2 - 1); // true

// search for mdn operator precednece (morizlla developer network )
// and see the table

let y;
x = y = 2 + 3 - 3; // because + - has higher precednece  or phir ho jayega x = y = 2 to ye chlta hai right to left to phle y=2 hoga or y ki value x me jayegi 
console.log(x, y);


// Question - 

let marks_Mass = 78;
let john_Mass = 92;
let marks_Height = 1.69;
let john_Height = 1.95;

bmiMark = marks_Mass / (marks_Height ** 2);
console.log(bmiMark);
bmiJohn = john_Mass / (john_Height ** 2);
console.log(bmiJohn);

let markHigherBMI = bmiMark > bmiJohn;

console.log(bmiMark, bmiJohn, markHigherBMI);

// const job = 'teacher';
// const year = 2021
// const birthYear = 2000;

const ritik = "I'm " + firstName + job + (year - birthYear) + ' !';
console.log(ritik);

// in above we problems in putting space in string so we uses
// template literal - we can write a string in more normal way and then basically insert the variable directly into string and then they simply be replaced 
// template also use in multline string
// `` this is called backticks 

const newritik = `I'm ${firstName} ${job} ${year - birthYear}!`;
console.log(newritik);
console.log(`Just a regular string...`);

// multiple line with javascript bug 
console.log('this is \n\ multiple \n\ line');

// template also use in multline string
console.log(`this is 
multiple
line`);

// if also run when it is true means it take boolean value

// const raniAge = 19;
// const isOldEnough = raniAge >= 18;

// if (isOldEnough) {
//     console.log("Ranu can start driving 🚗  ");
// }

// const raniAge = 17;
// if (raniAge>=18) {
//     console.log("ranu can drive the car 🏎️");
// } else {
//     const yearLeft = 18 - raniAge;
//     console.log(`Ranu is too young.Wait another ${yearLeft} years .`);
// }

// const birthYears = 2012;
// if (birthYears <= 2000 ) {
//     let century = 20;
// } else {
    
//     let century =  20; 
// }
// console.log(century);  // print empty because century is not defined so - 


const birthYears = 2012;
let century
if (birthYears <= 2000 ) {
   century = 19;
} else {
    
   century =  16; 
}
console.log(century);  // print empty because century is not defined so - 

// Q2 - 

const johnBmi = 23.9;
const markBmi = 28.3;

if(johnBmi>markBmi){
    console.log("John has higher BMI than Marks");
}else{
    console.log("Marks has higher BMI than John");
}

console.log(`"Mark's BMI ${markBmi} is higher than John's ${johnBmi}!"`); // "Mark's BMI 28.3 is higher than John's 23.9!"
 

// type conversion means when we manually converts from one type to another 
// and  coercion means when JavaScript automatically converts types behind the scenes for us .so that's necessary in some situtaion but it happens implicity , completely hidden from us  

const bbYear = 2000;
console.log(bbYear+19);  // 2019 

const bbbYear = '2000';
console.log(bbbYear+19);  // 20019

const bbbbYear = '2000';
console.log(Number(bbbbYear), bbbbYear);  // 2000 '2000'
console.log(Number(bbbbYear) +19);  // 2019

console.log(Number('Ritik'));   // NaN not a number 
console.log(typeof NaN);   // answer is Number - so NaN means invaild number 

console.log(String(23),23);  // 23 23 first 23 is string and second is number 

// type coercion 

console.log('I am' + 23 + 'years old');  //I am23years old because + operator converts number into string and this 23 is a string 
console.log('23'-'10'-3);  // 10 // - operator converts string into number therefore we get 10 
console.log('23' * '2');  // 46 because this is only way * works that means it converts string into number 
console.log('23'/'2');   // 11.5 
console.log('23'>'22'); // true because it converts string into number 


// guess the number 

let n = '1' + 1;  // '11' 11 string 
n = n - 1;        // - se string is converted into number 
console.log(n);

// answer 10 

// test this in console 3+3+'3' =  "63" as a string 
// 6-3-'2' = 1   // 6 - 3 = 3 -2 = 1 as a number 
// '2' - '2' + 1 // "1" phle convert number me ho rha tha pr + operator se string me ho gya

// 5 falsy values : 0 , '' , undefined , null , NaN 
// false is also false so we not include it 
// falsy value when we attempt to convert it to boolean then it become false 
// truely value remaning all if we convert into boolean thne it become true

console.log(Boolean(0));          // false
console.log(Boolean(undefined));  // false
console.log(Boolean());          // false
console.log(Boolean('Ritik'));  // true
console.log(Boolean({}));  // empty object true
console.log(Boolean(''));   // false

// one use case of falsy and trusly
let money = 0;
if(money){
    console.log("You have money");
} else {
    console.log("you don't have any money in wallet");
}

// another use case is that variable is defined or not 

let ritikkiheight;
if(ritikkiheight){
    console.log("(ritik ki height has value in it means) ritikkiheight is Defined");
} else {
    console.log("Height is Undefined");
}
// but this is wrong some time because if we have zero value then it runs else part so to overcome we uses logical operators 
let ritikkiheights=0;
if(ritikkiheights){
    console.log("(ritik ki height has value in it means) ritikkiheight is Defined");
} else {
    console.log("Height is Undefined");
}

// if only one line is present then we not need {} this cruly braces 

const ageItik = 21;
if (ageItik === 21) console.log("You are now adult 👍 ");

// === is strick equal it does not do type coercion  , but == it do type coercion
// '18' === 18 is false but the '18' == 18 is true because it is loose 

if (ageItik === '21') console.log("You are now adult 👍 from stick equality "); // this will not print
 
if (ageItik == 21) console.log("You are now adult 👍  from loose ");    // this will print

// best way is to use === , good practice is this 


// Promt 


const favourite = prompt("What's your favourite number?")    // prompt will apear 
console.log(favourite);
console.log(typeof favourite);

if (favourite == 23) {   // '23' = 23 so this console anwser 
    console.log("Cool 23 is an amzaing number ");
}

if (favourite === 23) {   // '23' = 23 so this is wrong  
    console.log("Cool 23 is an amzaing number strickty ");
}

const favourites = Number(prompt("What's your favourite number?"))
if (favourites===7){
    console.log("7 is run");
} else if (favourites === 10 ){
    console.log("10");
} else{
    console.log("Nor 7 or 10");
}

// if (favourites != 23) loose , but better not to use it

if(favourites!==23) console.log("Why not 23")  // agar 23 nhi hoga to ye chlega



const hasDrivingLincense = true;
const hasGoodVision = true;
console.log(hasDrivingLincense && hasGoodVision);   // true
console.log(hasDrivingLincense || hasGoodVision);   // true  yd rkhna ki 0 or 0 = 0 or sab pr true hai 
console.log(!hasDrivingLincense);   // false

const shouldDrive = hasDrivingLincense && hasGoodVision;

if (shouldDrive){                    // kyoki if consition boolean use krte hai
    console.log("Ritik can drive the car");
} else {
    console.log("Ritik can not drive the car");
}

// we can also use like this

if(hasDrivingLincense && hasGoodVision){
    console.log("Ritik can drive the car");
} else {
    console.log("Ritik can not drive the car");
}

const isTried = false;
console.log(hasDrivingLincense && hasGoodVision && isTried);

// good question 

if (hasDrivingLincense && hasGoodVision && !isTried){          // sab true hona chiye !istried agar false hoga to ye true ho jayega phle fir puri contidion true
    console.log("Ritik can now drive");
} else{
    console.log("Ritik can not drive because some thing is false");
}


// Question 

let dolphins = ( 96 + 108 + 89 )/3;
console.log(dolphins);
let koalas = (88+91+110)/3;
console.log(koalas);
if (dolphins>koalas){
    console.log("dolphins has highest average");
} else if(koalas>dolphins){
    console.log("Koalas has highest average");
} else {
    console.log("Both has same average score");
}

// or ye bhi krskte the else if (dolphins === koalas){}

// greater than or equals to  100 points
dolphins = ( 97 + 112 + 101 )/3;
koalas = ( 109 + 95 + 123 )/3;
console.log(koalas,dolphins);
if (dolphins>koalas && dolphins >= 100 ){
    console.log("dolphins has highest average");
} else if(koalas>dolphins && koalas >= 100 ){
    console.log("Koalas has highest average");
} else {
    console.log("Both has same average score");
}

// BOuns 2 dono agar equal hote hai to bhi tbhi jetege jab 100 ho ya usse jata

dolphins = ( 97 + 112 + 101 )/3;
koalas = ( 109 + 95 + 106 )/3;
console.log(koalas,dolphins);
if (dolphins>koalas && dolphins >= 100 ){
    console.log("dolphins has highest average");
} else if(koalas>dolphins && koalas >= 100 ){
    console.log("Koalas has highest average");
} else if(koalas === dolphins && koalas >= 100 && dolphins >=100 ) {      // answer
    console.log("Both wins the trophy ");
} else{
    console.log("NO one wins the trophy");
}


const day = 'monday';
switch (day){
    case 'monday':              // day === 'monday'
        console.log("this is monday");
        console.log("this is again monday");
        break;                   // if break statement not here then if this condition is true an break is not present then this run and top on bottom whhere break statement is present
    case 'tuesday':
    case 'wednesday':
        console.log("two days");        
    default:
        console.log("default no a vaild day");
}
// if else se 

if(day === 'monday'){                 // ===
    console.log("this is monday");
    console.log("this is again monday");
} else if (day === 'tuesday' || day ==='wednesday'){
    console.log("two days");        
}

// expression mtlb - const day='monday'; mtlb wo value provide pre
// if else ye sab statement hote hai 
// template literate me apan statment nhi use kr skte hai
// console.log(`i m ${day}`);  yha pr day expression hai

// conditional operator / ternary operator but this is in one line 

const oneLineage = 18;
oneLineage >= 18 ? console.log("if wala block") : console.log("else wala"); // dhyan rkhna ki phle wale me ; ye nhi aayega

// using as expresion

const drink = oneLineage >= 19 ? 'wine' : 'water';
console.log(drink);

// helpful because when we do it with if it is big 

let drink2;
if (oneLineage>=18){
    drink2 = 'wine';
} else {
    drink2 = 'water';
}
console.log(drink2);


// *************** we can use ternary operator in template literate also

console.log(`I like to drink ${oneLineage >= 18 ? 'wine' : 'water'}`);

// ******************************************************************

// question - 

// const bill = prompt("Enter bill amount");
// const finalbill = 50 <= bill <= 300 ? bill * 0.15 : bill * 0.20;
// console.log(finalbill);
// but above is wrong

const bill = 275;
const tip = bill <= 300 && bill >= 50 ? bill * 0.15 : bill * .20;
console.log(`thie bill was ${bill},the tip was ${tip},and the total value ${bill+tip}`);
