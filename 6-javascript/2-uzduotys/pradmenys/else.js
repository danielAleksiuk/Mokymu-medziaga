
console.log('================================');
console.log('====   else uzduotys      ====');
console.log('====   1 uzduotis:          ====');
let x = 9;

if (x % 2 === 0) {
    console.log(`Skaičius ${x} yra lyginis.`);
} else {
    console.log(`Skaičius ${x} yra nelyginis.`)
}
console.log('====   2 uzduotis:          ====');
let y = 49;

if (y % 7 === 0) {
    console.log(`Skaičius ${y} dalinasi iš 7.`);
} else {
    console.log(`Skaičius ${y} iš 7 nesidalina`)
}
console.log('====   3 uzduotis:          ====');
let failas = '7-else/uzduotys/3uzduotis.js';

if (failas.endsWith('.js')) {
    console.log('JavaScript failas');
} else {
    console.log('Kitokio formato failas');
}
console.log('================================');