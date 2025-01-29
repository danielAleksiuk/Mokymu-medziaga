console.log('================================');
console.log('====   if uzduotys   ====');
console.log('====   1 uzduotis:          ====');

let x = 4;
let y = 15;
let z = 8;

if (x === y) {
    console.log(x, 'ir', y, 'yra vienodi')
}

if (y === z) {
    console.log(y, 'ir', z, 'yra vienodi')
}

if (x > y) {
    console.log('Pirmas skaičius', x, 'yra didesnis už antrąjį', y)
}

if (y > (z * 2)) {
    console.log('Antras skaičius', y, 'yra didesnis už trečiojo', z, 'dvigubą reikšmę', z * 2)
}

if (x % 2 === 0) {
    console.log(`Pirmas skaičius (${x}) yra lyginis`)
}

if (y % 2 !== 0) {
    console.log(`Antras skaičius (${y}) yra nelyginis`)
}

if (z > 0) {
    console.log(`Trečias skaičius (${z}) yra teigiamas`)
}

if (x < 1) {
    console.log(`Pirmas skaičius (${x}) yra neigiamas`)
}

if (y % 4 === 0) {
    console.log(`Antras skaičius (${y}) dalinasi iš 4`)
}

if (z % 8 === 0) {
    console.log(`Trečias skaičius (${z}) dalinasi iš 8.`)
}

console.log('====   2 uzduotis:          ====');

let vartotojoAmzius = 16;

if (vartotojoAmzius >= 18){
    console.log('Jūs galite balsuoti')
} else {
    console.log('Palaukite X metu')
}

console.log('====   3 uzduotis:          ====');

let pazymys1 = 8;
let pazymys2 = 2;
let pazymys3 = 9;
let pazymys4 = 5;

let vidurkis = (pazymys1+pazymys2+pazymys3+pazymys4) / 4;

if (vidurkis >= 5) {
    console.log(`Vidurkis (${vidurkis}) yra teigiamas`)
}

console.log('====   4 uzduotis:          ====');

let a = 6;

if (a % 5 === 0) {
    let b = 1;
    console.log((a * b++), (a * b++), (a * b++), (a * b++), (a * b++))
} 

if (a % 2 === 0) {
    console.log(`Skaičius (${a}), jo kvadratas: ${a ** 2}, skaičius padalintas iš 2: ${a / 2})`)
} 

if (a % 7 !== 0) {
    let c = 3;
    console.log(`Skaičius (${a}) nesidalina iš 7. Antras kintamasis: ${c}. 
        Jų suma: ${a} + ${c} = ${a + c}, 
        skirtumas: ${a} - ${c} = ${a - c}, 
        sandauga: ${a} * ${c} = ${a * c}, 
        dalmuo: ${a} / ${c} = ${a / c}`)
} 

console.log('================================');