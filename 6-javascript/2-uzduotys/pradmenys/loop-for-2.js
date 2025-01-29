
console.log('================================');
console.log('====   ciklas for 2 dalis uzduotys      ====');
console.log('====   1 uzduotis:          ====');
let suma = 0;

for (let skaicius = 1; skaicius <= 100; skaicius++) {
    suma += skaicius;
}
console.log('skaiciu 1-100 suma yra', suma);

console.log('====   2 uzduotis:          ====');

let sumaLyginiu = 0;

for (let i = 20; i <= 50; i++) {
    if (i % 2 === 0) {
        sumaLyginiu += i;
    }
}

console.log('skaiciu intervale tarp 20 ir 50, visų lyginių skaičių suma yra', sumaLyginiu);

console.log('====   3 uzduotis:          ====');

let sumaNeLyginiu = 0;

for (let i = 30; i <= 60; i++) {
    if (i % 2 !== 0) {
        sumaNeLyginiu += i;
    }
}

console.log('skaiciu intervale tarp 30 ir 60, visų nelyginių skaičių suma yra', sumaNeLyginiu);

console.log('====   4 uzduotis:          ====');

suma = 0;
for (let i = 0; i < 1000; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
        suma += i;
    }
}
console.log('Skaičių, žemesnių už 1000 ir kurie dalinasi iš 3 arba 5 suma yra', suma);

console.log('====   5 uzduotis:          ====');

for (let i = 1; i <= 100; i++) {
    if (i % 3 == 0 && i % 5 == 0) {
        console.log('FizzBuzz');
    } else if (i % 3 == 0) {
        console.log('Fizz');
    } else if (i % 5 == 0){
        console.log('Buzz');
    } else (
        console.log(i)
    )
}

let fizzBuzzTest = new Array(100)
    .fill(0)
    .map((item, index) => index + 1 )
    .map((item) => (item % 3 === 0 ? 'Fizz' : '') + (item % 5 === 0 ? 'Buzz' : '') || item)
    .join('-');

console.log(fizzBuzzTest);


console.log('====   6 uzduotis:          ====');

let skaicius1 = 1;
let skaicius2 = 1;
let fibValue = 0;
let n = 20;

console.log(skaicius1);
console.log(skaicius2);

for (i = 2; i < n; i++) {
    fibValue = skaicius1 + skaicius2;
    skaicius1 = skaicius2;
    skaicius2 = fibValue;
    console.log(fibValue);
}
console.log('================================');