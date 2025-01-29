
console.log('================================');
console.log('====   masyvai 1 dalis uzduotys      ====');
console.log('====   1 uzduotis:          ====');
let skaiciai = [1, 8, 9, 15, 65, 78, 3, 16];

console.log(`
    Pirmas: ${skaiciai[0]}. 
    Paskutinis: ${skaiciai[skaiciai.length-1]}. 
    Du iы vidurio: ${skaiciai[4]}, ${skaiciai[6]}. 
    Masyve nariг yra: ${skaiciai.length}`
);
console.log('====   2 uzduotis:          ====');
let fruits = [
    'bananas',
    'obuolys',
    'kriause',
    'melionas',
    'vynuoges',
]

console.log('1 variantas:', fruits)

fruits[0] = 'ananasas'
fruits[2] = 'avietes'
fruits[fruits.length - 1] = 'melynes'

console.log('2 variantas:', fruits)
console.log('====   3 uzduotis:          ====');
let bestMichaelScottCharacters = [];
bestMichaelScottCharacters.push('Prison Mike', 'Michael Scarn', 'Date Mike', 'Mykonos', 'Michael Klump');

console.log(bestMichaelScottCharacters);

console.log('====   4 uzduotis:          ====');

skaiciai = [];
let length = Math.floor(Math.random() * 10) + 1;

for (let i = 0; i < length; i++) {
  skaiciai.push(Math.floor(Math.random() * 10) + 1); 
}

console.log(skaiciai);

console.log('====   5 uzduotis:          ====');
let pirmasStudentas = [8, 4, 6, 10, 8, 7, 10, 10, 10];

let antrasStudentas = [];
antrasStudentas.push(4, 8, 6, 10, 10, 10, 10, 2);

let sumaPirmasStudentas = 0;
for (let i = 0; i < pirmasStudentas.length; i++) {
    sumaPirmasStudentas += pirmasStudentas[i];
}

let sumaAntrasStudentas = 0;
for (let i = 0; i < antrasStudentas.length; i++) {
    sumaAntrasStudentas += antrasStudentas[i];
}

let vidurkisPirmo = sumaPirmasStudentas / pirmasStudentas.length;
let vidurkisAntro = sumaAntrasStudentas / antrasStudentas.length;

if (vidurkisPirmo > vidurkisAntro) {
    console.log('Primo studento vidurkis', vidurkisPirmo.toFixed(2), 'Yra didesnis uz antro studento vidurki:', vidurkisAntro.toFixed(2));
} else if (vidurkisPirmo < vidurkisAntro) {
    console.log('Antro studento vidurkis', vidurkisAntro.toFixed(2), 'Yra didesnis uz pirmo studento vidurki:', vidurkisPirmo.toFixed(2));
} else {
    console.log('Vidurkiai lygus');
}

console.log('================================');