console.log('================================');
console.log('====   funkcijos 4 dalis uzduotys      ====');
console.log('====   1 uzduotis:          ====');

function sakinys() {
    return 'I JUST WANT TO LIE ON THE BEACH AND EAT HOT DOGS.'
}

console.log(sakinys());

console.log('====   2 uzduotis:          ====');

function randomSkaicius() {
    let skaicius = Math.floor(Math.random() * 90) + 10;
    return skaicius;
}

console.log(`Atsitiktinis skaičius 1: ${randomSkaicius()}`);
console.log(`Atsitiktinis skaičius 2: ${randomSkaicius()}`);
console.log(`Atsitiktinis skaičius 3: ${randomSkaicius()}`);

console.log('----------------------');

for (let index = 0; index < 3; index++) {
    console.log(`Atsitiktinis skaičius: ${randomSkaicius()}`);
}

console.log('----------------------');

let trysSkaiciai = [];

for (let index = 0; index < 3; index++) {
    trysSkaiciai.push(randomSkaicius());
}

console.log(`Atsitiktiniai skaičiai: ${trysSkaiciai.join(', ')}`);

console.log('====   3 uzduotis:          ====');

function studentas(vardas, vidurkis) {
    return `Studentas ${vardas} turi vidurkį ${vidurkis}`;
}

console.log(studentas('Tomas', 8.7));
console.log(studentas('Linas', 6.3));


console.log('====   4 uzduotis:          ====');

function maziausiasDaliklis(skaicius) {
    for(let i = 2; i<= skaicius; i++){
        if (skaicius % i === 0) {
            return i;
        }
    }
    return skaicius;
}

for (let i = 10; i <= 30; i++) {
    console.log(`
        ${i} skaiciaus maziaus daliklis yra:
         ${maziausiasDaliklis(i)}
    `);
}


console.log('====   5 uzduotis:          ====');

function arSkaiciusPirminis (skaicius) {
    // 1 budas
    for(let i = 2; i < skaicius; i++) {
        if (skaicius % i === 0) {
            return false;
        }
    }
    return true;

    // 2 budas 
    // kiek dalikliu turi skaicius - pvz jei 2 td pirminis jei dauigua nei
}


for(let i = 2; i <= 15; i++) {
    console.log('skaicius ' + i + arSkaiciusPirminis(i));
}


console.log('====   6 uzduotis:          ====');

function suma(a, b) {
    return `${a} + ${b} = ${a + b}`;
}

function skirtumas(a, b) {
    return `${a} - ${b} = ${a - b}`;
}

function sandauga(a, b) {
    return `${a} * ${b} = ${a * b}`;
}

function dalyba(a, b) {
    if (b === 0) {
        return "Dalyba iš nulio negalima.";
    } else {
        return `${a} / ${b} = ${(a / b).toFixed(2)}`;
    }
}

function skaiciavimai(kiekis) {

    for (let i = 0; i < kiekis; i++) {

        let skaicius1 = Math.floor(Math.random() * 10);
        let skaicius2 = Math.floor(Math.random() * 10);

        console.log(suma(skaicius1, skaicius2));
        console.log(skirtumas(skaicius1, skaicius2));
        console.log(sandauga(skaicius1, skaicius2));
        console.log(dalyba(skaicius1, skaicius2));
        console.log('----------------');
    }

}


skaiciavimai(4);
console.log('================================');