
console.log('================================');
console.log('====   aritmetiniai operatoriai uzduotys      ====');
console.log('====   1 uzduotis:          ====');

let numberA = 2;
console.log('Kvadratu: ' + numberA ** 2);
console.log('Kubu: ' + numberA ** 3);

console.log('====   2 uzduotis:          ====');

let numberOne = 2
let numberTwo = 3
let numberThree = 4

console.log('Suma: ' + numberOne + '+' + numberTwo + '+' + numberThree + '=' + (numberOne + numberTwo + numberThree));
console.log('Sandauga: '+ numberOne + '*' + numberTwo + '*' + numberThree + '=' + (numberOne * numberTwo * numberThree));

console.log('====   3 uzduotis:          ====');

let a = 4;
let b = 2;

console.log('Suma:', a + '+' + b + "=" + (a + b));
console.log('Skirtumas:', a + '-' + b + "=" + (a - b));

let sum = (a + b) * (a - b);
console.log('Sumos ir skirtumo sandauga:', '(' + a + '+' + b + ')' + '*' + '(' + a + '-' + b + ')' + '=' + sum);

let div = (a + b) / (a - b);
console.log('Sumos ir skirtumo dalmuo:', '(' + a + '+' + b + ')' + '/' + '(' + a + '-' + b + ')' + '=' + div);

console.log('====   4 uzduotis:          ====');

let c = 2, d = 4, e = 5, f = 5;
console.log('Vidurkis:' + ((c + d + e + f ) / 4 ));

console.log('====   5 uzduotis:          ====');

let skaiciusOne = 4
let skaiciusTwo = 2

console.log('Suma:', skaiciusOne + '+' + skaiciusTwo + '=' + (skaiciusOne + skaiciusTwo));
console.log('Skirtumas:', skaiciusOne + '-' + skaiciusTwo+ '=' + (skaiciusOne - skaiciusTwo));
console.log('Sandauga:', skaiciusOne + '*' + skaiciusTwo + '=' + (skaiciusOne * skaiciusTwo));
console.log('Dalmuo:', skaiciusOne + '/' + skaiciusTwo + '=' + (skaiciusOne / skaiciusTwo));

console.log('====   6 uzduotis:          ====');

let firstOne = -1;
let firstTwo = 4;
let firstThree = 6;
console.log(firstOne, '+', firstTwo, '*', firstThree, '=', (firstOne + firstTwo * firstThree));

let secondOne = 35;
let secondTwo = 5;
let secondThree = 7;
console.log('('+ (secondOne), '+', (secondTwo)+ ')', '%', (secondThree), '=', ((secondOne + secondTwo) % secondThree));

let thirdOne = 14;
let thirdTwo = -4;
let thirdThree = 6;
let thirdFour = 12;
console.log(thirdOne, '+', thirdTwo, "*", thirdThree, '/', thirdFour, '=', (thirdOne + thirdTwo * thirdThree / thirdFour));

let fourthOne = 2;
let fourthTwo = 15;
let fourthThree = 6;
let fourthFour = 1;
let fourthFive = 7;
let fourthSix = 2;
console.log(fourthOne, '+', fourthTwo, '/', fourthThree, '*', fourthFour, '-', fourthFive, '%', fourthSix, '=', (fourthOne + fourthTwo / fourthThree * fourthFour - fourthFive % fourthSix));

console.log('====   7 uzduotis:          ====');

let number = 2;

console.log(number, '*', 1, '=',  (number * 1));
console.log(number, '*', 2, '=',  (number * 2));
console.log(number, '*', 3, '=',  (number * 3));
console.log(number, '*', 4, '=',  (number * 4));
console.log(number, '*', 5, '=',  (number * 5));
console.log(number, '*', 6, '=',  (number * 6));
console.log(number, '*', 7, '=',  (number * 7));
console.log(number, '*', 8, '=',  (number * 8));
console.log(number, '*', 9, '=',  (number * 9));
console.log(number, '*', 10, '=',  (number * 10));

console.log('====   8 uzduotis:          ====');

let skaicius = 55;
console.log('5', '+', '5', '=', Math.floor(skaicius / 10) + skaicius % 10);
console.log('5', '+', '5', '=', Math.ceil(skaicius / 11) + skaicius % 10);

console.log('================================');