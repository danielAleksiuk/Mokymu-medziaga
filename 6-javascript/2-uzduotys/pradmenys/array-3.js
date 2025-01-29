
console.log('================================');
console.log('====   masyvai 3 dalis uzduotys      ====');
console.log('====   1 uzduotis:          ====');

let zodziai = ['ant', 'castle', 'moon', 'forest', 'dream', 'ocean', 'flame'];

for (let i in zodziai) {
    console.log(i, zodziai[i]);
}

console.log('====   2 uzduotis:          ====');
let pirkiniai = [
    'pienas',
    'duona',
    'sūris',
    'kava',
    'obuoliai',
    'morka',
    'makaronai',
    'sviestas'
];

console.log(`Masyve yra: ${pirkiniai.length} pirkiniai`);

for (const pirkinys of pirkiniai) {
    console.log(`- ${pirkinys}`);
}

console.log('====   3 uzduotis:          ====');
let pazymiai = [7, 2, 9, 4, 1, 6, 3, 8, 5, 10];

let suma = 0;

for (const paz of pazymiai) {
    suma += paz;
}

let vidurkis = suma / pazymiai.length;

console.log(`Visi pažymiai:`);

for (const pazymys of pazymiai) {
    console.log(pazymys);
}

console.log(`Pažymių vidurkis: ${vidurkis}`);

console.log('====   4 uzduotis:          ====');
let kilometrai = [263, 475, 132, 384, 97, 415, 289, 354, 209, 68];

for (const km of kilometrai) {
    if (km > 150) {
        console.log(km);
    }
}

console.log('====   5 uzduotis:          ====');
let klaidos = [
    'ui87',
    'sys12',
    'net36',
    'db105',
    'auth49'
]

for (const klaida of klaidos) {
    if (klaida === 'ui87') {
        console.log(`${klaida}: Grafinės sąsajos klaida navigacijoje`)
    } else if (klaida === 'sys12') {
        console.log(`${klaida}: Trūksta operatyviosios atminties sistemoje`);
    } else if (klaida === 'net36') {
        console.log(`${klaida}: Nepavyko prisijungti prie interneto tinklo`);
    } else if (klaida === 'db105') {
        console.log(`${klaida}: Duomenų bazės klaida: nepavyko įrašyti įrašo`);
    } else if (klaida === 'auth49') {
        console.log(`${klaida}: Autentikacijos klaida: neteisingas slaptažodis`)
    } else {
        console.log(`${klaida}: Neatpažinta klaida`);
    }
}

console.log('====   6 uzduotis:          ====');

let likuciai = [74, 54, 32];
let perDienaPerka = 5;

for(let likutis of likuciai) {
    console.log(likutis + ' vnt uzteks mazdaug tiek d: ' + Math.round(likutis/perDienaPerka));
}

console.log('====   7 uzduotis:          ====');

pazymiai = [3, 6, 9, 2, 7, 5, 8, 1, 4, 10];
suma = 0;

let teigiamiPazymiai = [];
let neigiamiPazymiai = [];

for (const paz of pazymiai) {
    suma += paz;
    if (paz <= 4) {
        neigiamiPazymiai.push(paz);
    } else {
        teigiamiPazymiai.push(paz);
    }
}

vidurkis = suma / pazymiai.length;
console.log(`Teigiami pažymiai: ${teigiamiPazymiai}`);
console.log(`Vidurkis: ${vidurkis}`);
console.log(`Iš viso neigiamų skaičių yra: ${neigiamiPazymiai.length}`)

console.log('====   8 uzduotis:          ====');
let pirmoPazymiai = [5, 8, 2, 9, 7, 7, 3, 6, 8, 10];
let sumaPirmo = 0;

for (const paz of pirmoPazymiai) {
    sumaPirmo += paz;
}

let pirmoVidurkis = sumaPirmo / pirmoPazymiai.length;

let antroPazymiai = [9, 3, 7, 2, 5, 8, 1, 3, 4, 10];
let sumaAntro = 0;

for (const paz of antroPazymiai) {
    sumaAntro += paz;
}

let antroVidurkis = sumaAntro / antroPazymiai.length;

console.log(`
    Pirmojo studento pažymiai: ${pirmoPazymiai}.
    Pirmojo studento vidurkis: ${pirmoVidurkis}.
    Antrojo studento pažymiai: ${pirmoPazymiai}.
    Antrojo studento vidurkis: ${antroVidurkis}`
);

if (pirmoVidurkis > antroVidurkis) {
    console.log(`Pirmojo studento vidurkis yra didesnis`);
} else if (pirmoVidurkis < antroVidurkis) {
    console.log(`Antrojo studento vidurkis yra didesnis`);
} else {
    console.log(`Vidurkiai sutampa`);
}

console.log('================================');