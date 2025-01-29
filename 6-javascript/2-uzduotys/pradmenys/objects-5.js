console.log('================================');
console.log('====   objektai 5 dalis uzduotys      ====');
console.log('====   1 uzduotis:          ====');

let studentai = [
    {
        'vardas': 'Jonas',
        'pavarde': 'Jonaitis',
        'amzius': 20,
        'pazymiai': [8, 7, 9, 10],
        'studijuPrograma': 'Informatika',
        'kursas': 2
    },
    {
        'vardas': 'Laura',
        'pavarde': 'Lauraitė',
        'amzius': 21,
        'pazymiai': [9, 8, 7, 9],
        'studijuPrograma': 'Ekonomika',
        'kursas': 3
    },
    {
        'vardas': 'Marius',
        'pavarde': 'Mariūnas',
        'amzius': 19,
        'pazymiai': [7, 6, 8, 9],
        'studijuPrograma': 'Matematika',
        'kursas': 1
    }
]

let bendraSuma = 0;
let bendrasPazymiuSkaicius = 0;

for (const stud of studentai) {
    console.log(`Studento vardas ir pavardė: ${stud.vardas} ${stud.pavarde}. Studento amžius: ${stud.amzius}. Studijų programa: ${stud.studijuPrograma}. Kursas: ${stud.kursas}`);
    console.log(`Studento pažymiai: ${stud.pazymiai}`);
    let suma = stud.pazymiai.reduce((total, pazymys) => total + pazymys, 0);
    let vidurkis = suma / stud.pazymiai.length;
    console.log(stud.vardas, 'vidurkis yra', vidurkis);
    bendraSuma += suma;
    bendrasPazymiuSkaicius += stud.pazymiai.length;
}
let bendrasPazymiuVidurkis = bendraSuma / bendrasPazymiuSkaicius;

console.log(`Bendras visų studentų pažymių vidurkis: ${bendrasPazymiuVidurkis.toFixed(2)}`);

console.log('====   2 uzduotis:          ====');

let parduotuve = {
    'pavadinimas': 'Maxima',
    'adresas': 'Kauno g. 27, Vilnius',
    'darbuotojuKiekis': 15,
    'prekes': [
        {
            'pavadinimas': 'Pienas',
            'kodas': '123456',
            'kaina': 1.5,
            'savikaina': 0.8,
            'kiekis': 100
        },
        {
            'pavadinimas': 'Duona',
            'kodas': '654321',
            'kaina': 1.2,
            'savikaina': 0.6,
            'kiekis': 150
        },
        {
            'pavadinimas': 'Kefyras',
            'kodas': '987654',
            'kaina': 2.0,
            'savikaina': 1.2,
            'kiekis': 80
        }
    ]
}

let prekiuSuma = 0;

let maxPrekiu = parduotuve.prekes[0];
let minPrekiu = parduotuve.prekes[0];


console.log(`Parduotuvės pavadinimas: ${parduotuve.pavadinimas}. Adresas: ${parduotuve.adresas}. Darbuotojų kiekis: ${parduotuve.darbuotojuKiekis}`);
console.log('Prekės:');

for (const preke of parduotuve.prekes) {
    console.log(`${preke.pavadinimas}. Kaina: ${preke.kaina}. Kiekis: ${preke.kiekis}`);
    prekiuSuma += preke.kiekis;

    if (preke.kiekis > maxPrekiu.kiekis) {
        maxPrekiu = preke;
    } 
    
    if (preke.kiekis < minPrekiu.kiekis) {
        minPrekiu = preke;
    }
}

console.log(`Iš viso prekių yra: ${prekiuSuma}`);

console.log(`Didžiausias prekių kiekis: ${maxPrekiu.pavadinimas} (${maxPrekiu.kiekis} vnt.)`);
console.log(`Mažiausias prekių kiekis: ${minPrekiu.pavadinimas} (${minPrekiu.kiekis} vnt.)`);

console.log('================================');