console.log('================================');
console.log('====   funkcijos 3 dalis uzduotys      ====');
console.log('====   1 uzduotis:          ====');

function zodzioSimboliuSkaicius(mas) {
    for(let item of mas) {
        console.log(item + ' ' + item.length);
    }
}

let zodziai = [
    'pvz',
    'example',
    'Vilnius',
    'Lietuva'
];

zodzioSimboliuSkaicius(zodziai);

console.log('====   2 uzduotis:          ====');

function skaiciavimai(masyvas) {
    for (const skaicius of masyvas) {
        let kvadratas = skaicius ** 2;
        let dalybaIsDvieju = kvadratas / 2;
        console.log(`${skaicius} - Kvadratas: ${kvadratas}, Dalyba iš 2: ${dalybaIsDvieju}`);
    }
}

let masyvas1 = [1, 2, 3, 4, 5];
let masyvas2 = [10, 20, 30, 40, 50];

console.log('Pirmas masyvas:');
skaiciavimai(masyvas1);

console.log('Antras masyvas:');
skaiciavimai(masyvas2);

console.log('====   3 uzduotis:          ====');

function studentoVidurkis(studentas) {
    let suma = 0;

    for (let value of studentas.pazymiai) {
        suma += value;
    }

    let vidurkis = (suma / studentas.pazymiai.length).toFixed(2);
    console.log(`${studentas.vardas} ${studentas.pavarde} vudurkis yra: ${vidurkis}`);
};

let studentai = [
    {
        pazymiai: [1, 2 ,3],
        vardas: 'Jonas',
        pavarde: 'Jonaitis'
    },
    {
        pazymiai: [7, 9, 5, 7],
        vardas: 'Petras',
        pavarde: 'Jonaitis'
    }
];

for(let studentas of studentai) {
    studentoVidurkis(studentas);
}


console.log('====   4 uzduotis:          ====');

function rastiDidziausiaSkaiciu(skaiciai, pavadinimas) {
    let didziausiasSkaicius = skaiciai[0];
    
    for (const skaicius of skaiciai) {
        if (skaicius > didziausiasSkaicius) {
            didziausiasSkaicius = skaicius;
        }
    }

    console.log(`${pavadinimas} didžiausias skaičius: ${didziausiasSkaicius}`);
}

function atsitiktiniaiSkaiciai(masyvas, kiekis) {
    for (let i = 0; i < kiekis; i++) {
        masyvas.push(Math.floor(Math.random() * 10) + 1);
    }
}

masyvas1 = [];
masyvas2 = [];
let masyvas3 = [];

atsitiktiniaiSkaiciai(masyvas1, 5);
atsitiktiniaiSkaiciai(masyvas2, 8);
atsitiktiniaiSkaiciai(masyvas3, 4);

function isveskimMasyva(pavadinimas, masyvas) {
    console.log(`${pavadinimas}: ${masyvas.join(', ')}`);
}

isveskimMasyva('Pirmas masyvas', masyvas1);
isveskimMasyva('Antras masyvas', masyvas2);
isveskimMasyva('Trečias masyvas', masyvas3);

rastiDidziausiaSkaiciu(masyvas1, 'Pirmas masyvas');
rastiDidziausiaSkaiciu(masyvas2, 'Antras masyvas');
rastiDidziausiaSkaiciu(masyvas3, 'Trečias masyvas');

console.log('================================');