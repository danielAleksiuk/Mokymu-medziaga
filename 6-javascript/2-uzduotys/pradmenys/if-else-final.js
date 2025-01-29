
console.log('================================');
console.log('====   if else final uzduotys   ====');
console.log('====   1 uzduotis:          ====');

let number = 7;
if (number % 2 === 0) {
    console.log ('skaičius yra lyginis')
} else if (number % 5 === 0) {
    console.log ('skaicius dalinasi iš penkiu')
} else if (number === 3) {
    console.log ('skaicius yra lygus trims')
} else {
    console.log ('error')
}

console.log('====   2 uzduotis:          ====');

let numberOne = 5;
let numberTwo = 2;
let numberThree = 4;
if (numberOne === numberTwo) {
    console.log ('pirmi du skaičiai lygūs')
} else if (numberOne === numberThree) {
    console.log ('pirmas ir trečias skaičiai lygūs')
} else if (numberThree > numberOne) {
    console.log ('trečias skaičius didesnis už pirmą')
} else if (numberTwo === (numberThree * 2)) {
    console.log ('antras skaičius lygus dvigubai trečio skaičiaus reikšmei')
} else if (numberOne % 3 === 0) {
    console.log ('pirmas skaičius dalinasi iš 3')
} else {
    console.log ('error')
}

console.log('================================');