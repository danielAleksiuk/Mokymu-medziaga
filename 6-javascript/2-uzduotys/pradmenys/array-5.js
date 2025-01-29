console.log('================================');
console.log('====   masyvai 5 dalis uzduotys      ====');
console.log('====   1 uzduotis:          ====');

let skaiciai = [3, 7, 2, 9, 6, 4];
let lyginis = skaiciai.find(skaicius => skaicius % 2 === 0)

console.log(lyginis)

console.log('====   2 uzduotis:          ====');

let skaiciai2 = [-3, 0, 5, -8, 2, 7];
let teigiamas = skaiciai2.find(skaicius => {
    return skaicius > 0;
})

console.log(teigiamas);

console.log('====   3 uzduotis:          ====');

let numbers = [0,  4, -7, 2, 7, -3, 8, -9]
console.log(numbers.findIndex((n) => n < 0))

console.log('====   4 uzduotis:          ====');

let skaiciai4 = [0,  4, -7, 66, 7, -3, 8, -9]
console.log(skaiciai4.findIndex((n) => n >= 10))

console.log('====   5 uzduotis:          ====');

let skaiciai5 = [7, 33, 19, 56, 12, 84, 25, 40, 68, 91, 15, 22, 49, 88, 36];
let tinkamasSkaicius = skaiciai5.find(skaicius => skaicius % 3 == 0 && skaicius > 10);
console.log('Pirmas skaičius kuris dalinasi iš 3 ir yra didesnis nei 10:', tinkamasSkaicius);

console.log('====   6 uzduotis:          ====');

let skaiciai6 = [9, -27, 63, -18, 45, -81, 36, -72, 54, -20, 90, -15, 33, -66, 30];
let tinkamasSkaicius6 = skaiciai6.find(skaicius => skaicius < 0 && skaicius % 2 == 0);
console.log('Pirmas neigiamas ir lyginis skaičius:', tinkamasSkaicius6);

console.log('====   7 uzduotis:          ====');

let skaiciai7 = [-5, 12, -7, 19, -23, 8, -11, 15, -3, 9, -14, 6, -20, 17, -10];

let teigiami = skaiciai7.every(skaicius => skaicius > 0);
console.log('Ar visi skaičiai yra teigiami?', teigiami);

console.log('====   8 uzduotis:          ====');

let skaiciai8 = [23, 10, 45, 37, 56, 81, 29, 64, 38, 50, 19, 72, 14, 33, 92];
let arLyginiai = skaiciai8.every(skaicius => skaicius % 2 == 0);

console.log('Ar visi skaičiai yra lyginiai?', arLyginiai);

console.log('====   9 uzduotis:          ====');

let skaiciai9 = [17, 33, 49, 62, 28, 91, 55, 37, 84, 19, 76, 29, 51, 6, 98];
let mazesnisNei5 = skaiciai9.some(skaicius => skaicius < 5 );
console.log('Masyve yra mažesnis nei 5 skaičius:', mazesnisNei5);

console.log('====   10 uzduotis:          ====');

let skaiciai10 = [-8, 17, -33, 49, -62, 28, -91, 55, -37, 84, -19, 76, -29, 51, -6];
let yraTeigiamas = skaiciai10.some(skaicius => skaicius > 0);
console.log('Masyve yra teigiamas skaičius:', yraTeigiamas);

console.log('====   11 uzduotis:          ====')

let skaiciai11 = [42, -15, 63, -28, 37, -56, 89, -24, 75, -13, 58, -32, 97, -46, 21];
let arTinka = skaiciai11.every(s => s > 0) && skaiciai11.some(s => s % 2 == 0);
console.log('Ar masyve visi skaičiai yra teigiami ir ar bent vienas yra lyginis?', arTinka);

console.log('====   12 uzduotis:          ====');

let skaiciai12 = [14, -7, 53, -29, 32, -41, 76, -18, 67, -25, 48, -34, 85, -50, 23];
let teigiami12 = skaiciai12.filter(skaicius => skaicius > 0);
console.log(teigiami12);

console.log('====   13 uzduotis:          ====');

let reitingai = [3, 1, 4, 5, 2, 1, 3, 4, 2, 5, 1, 2, 3, 5, 4];
let filtruoti = reitingai.filter(reitingas => reitingas == 1 || reitingas == 2);
console.log('Reitingai lygus 1 ir 2:', filtruoti);

console.log('====   14 uzduotis:          ====');

let skaiciai14 = [3, -1, 4, -5, 2, -2, 3, -4, 2, 5, -1, 2, -3, 5, -4];
let filtruoti14 = skaiciai14.filter(skaicius => skaicius > 0 && skaicius % 2 == 0);
console.log('Teigiami lyginiai skaičiai:', filtruoti14);

console.log('====   15 uzduotis:          ====');

let skaiciai15 = [1, 3, 5, 7, 9, 2, 4, 6, 8, 10];
let padvigubinti = skaiciai15.filter(skaicius => skaicius % 2 == 0).map(skaicius => skaicius * 2);
console.log('Padvigubinti lyginiai skaičiai:', padvigubinti);

console.log('====   16 uzduotis:          ====');
let pazymiai = [7, 8, 10, 6, 5, 9];

let geriPazymiai = pazymiai.filter(item => item >= 8);

console.log('geri pazymiai: ' + geriPazymiai);
console.log('geru pazymiu kiekis: ' + geriPazymiai.length);

console.log('====   17 uzduotis:          ====');
let fib = [];
let n = 9;

for(let i = 0; i < n; i++) {
    if (i > 1) {
        fib.push(
            fib[i - 1] + fib[i - 2]
        );
    } else {
        fib[i] = i;
    }
}
console.log(fib);

console.log('================================');