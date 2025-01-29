console.log('================================');
console.log('====   objektai 2 dalis uzduotys      ====');
console.log('====   1 uzduotis:          ====');
let knygynas = {
    pavadinimas: 'mano knygynas',
    adresas: 'mano adresas',
    plotas: 20,
    knyguSkaicus: 4,
    darboValandos: {
        nuo: 8.00,
        iki: 17.00
    },
    arAtidarytas: true
};

for (let property in knygynas) {
    console.log('savybe:' + property + ' reiksme: ' + knygynas[property]);

    if (typeof knygynas[property] !== 'string') {
        console.log('not string : ' + property);
    }
}
console.log('====   2 uzduotis:          ====');
let student1 = {
    vardas: 'name',
    pavarde: 'surname',
    studijuProgramosPavadinimas: 'matematika',
    pazymiai: [1, 2 , 5 , 8]
};

let student2 = {
    vardas: 'name2',
    pavarde: 'surname2',
    studijuProgramosPavadinimas: 'chemija',
    pazymiai: [1, 2 , 5 , 9, 10, 4]
};

let suma = 0;
for (let pazymis of student1.pazymiai) {
    suma += pazymis;
}

student1.pazVidurkis = (suma / student1.pazymiai.length).toFixed(2);
console.log(student1);

suma = 0;
for (let pazymis of student2.pazymiai) {
    suma += pazymis;
}

student2.pazVidurkis = (suma / student2.pazymiai.length).toFixed(2);
console.log(student2);

if (student1.pazVidurkis > student2.pazVidurkis) {
    console.log(student1.vardas);
    console.log(student1.pavarde);
} else {
    console.log(student2.vardas);
    console.log(student2.pavarde);
}

console.log('================================');