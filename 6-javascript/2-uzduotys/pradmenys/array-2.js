
console.log('================================');
console.log('====   masyvai 2 dalis uzduotys      ====');
console.log('====   1 uzduotis:          ====');
let studijuProgramos = [
    'Muzikos teorija ir kritika',
    'Klasikinis fortepijonas',
    'Jazz fortepijonas',
    'Vargonai',
    'Dirigavimas',
]

for (let i = 0; i < studijuProgramos.length; i++) {
	console.log(studijuProgramos[i]);
}

console.log('====   2 uzduotis:          ====');
let salys = [
    'Kuba',
    'Čilė',
    'Brazilija',
    'Argentina',
    'Meksika',
];

for (let i = 0; i < salys.length; i++) {
	console.log(`Šalis: ${salys[i]}`);
}

console.log('====   3 uzduotis:          ====');
let projektai = [
    'Svogūnų parduotuvė',
    'Pažinčių svetainė',
    'Hamsterdam miesto svetainė',
    'Šokių projektas',
    'Galerija',
];

for (let i = 0; i < projektai.length; i++) {
	console.log(`Projektas nr ${i+1}: ${projektai[i]}`);
}

console.log('====   4 uzduotis:          ====');
let skaiciai = [1, 3, 78, 16, 5, 4, 10, 9, 28];

for (let i = 0; i < skaiciai.length; i++) {
    if (skaiciai[i] > 5) {
        console.log(skaiciai[i]);
    }
}
console.log('====   5 uzduotis:          ====');
skaiciai = [];

let length = Math.floor(Math.random() * 10) + 1;

let suma = 0;

for (let i = 0; i < length; i++) {
  skaiciai.push(Math.floor(Math.random() * 100) + 1);
  if (skaiciai[i] % 4 == 0) {
    console.log(skaiciai[i], 'dalinasi iš 4');
    suma += skaiciai[i];
  } else {
    console.log(skaiciai[i]);
  }
}
console.log(suma);

console.log('====   6 uzduotis:          ====');
let pazymiai = [];
let kiekPazymiu = Math.floor(Math.random() * 10) + 1;
suma = 0;
console.log('Pažymiai:')

for (let i = 0; i < kiekPazymiu; i++) {
    pazymiai.push(Math.floor(Math.random() * 10) + 1);
    console.log(pazymiai[i]);
    suma += pazymiai[i];
}
let vidurkis = suma / kiekPazymiu;
console.log('Pažymių vidurkis:', vidurkis);

console.log('====   7 uzduotis:          ====');
pazymiai = [];
kiekPazymiu = Math.floor(Math.random() * 10) + 1;
suma = 0;

console.log('Visi pažymiai:')
for (let i = 0; i < kiekPazymiu; i++) {
    pazymiai.push(Math.floor(Math.random() * 10) + 1);
    suma += pazymiai[i];
    console.log(pazymiai[i]);
}

vidurkis = suma / kiekPazymiu;

console.log('--------');
console.log('Vidurkis:', vidurkis);
console.log('--------');
console.log('Skaičiai didesni už vidurkį:');

for (let i = 0; i < kiekPazymiu; i++) {
    if (pazymiai[i] > vidurkis) {
        console.log(pazymiai[i]);
    }
}

console.log('====   8 uzduotis:          ====');
skaiciai = [87, 23, 56, 42, 79, 15, 68, 34, 91, 7];

for (let i = 0; i < skaiciai.length; i++) {
    if (skaiciai[i] % 2 == 0) {
        console.log('Lyginis:',skaiciai[i], 'Jo kvadratas:', skaiciai[i] ** 2);
    } else {
        console.log(skaiciai[i]);
    }
}

console.log('====   9 uzduotis:          ====');
pazymiai = [];
kiekPazymiu = Math.floor(Math.random() * 10) + 1;

for (let i = 0; i < kiekPazymiu; i++) {
    pazymiai.push(Math.floor(Math.random() * 10) + 1);
    if (pazymiai[i] >= 5) {
        console.log(`Pažymys ${pazymiai[i]} yra teigiamas`);
    } else {
        console.log(`Pažymys ${pazymiai[i]} yra neigiamas. Iki teigiamo trūko ${5 - pazymiai[i]} bal.`);
    }
}

console.log('====   10 uzduotis:          ====');
skaiciai = [48, 73, 19, 64, 25, 82, 37, 90, 14, 56, 33, 88, 21, 67, 5];
suma = 0;
let dalinasIsTriju = 0;

for (let i = 0; i < skaiciai.length; i++) {
    if (skaiciai[i] % 3 === 0) {
        console.log(`Skaičius ${skaiciai[i]} dalinasi iš 3.`)
        suma += skaiciai[i];
        dalinasIsTriju++;
    }
}
console.log(`Skaičių kurie dalijasi iš 3 suma: ${suma}`);

vidurkis = suma / dalinasIsTriju;
console.log(`Iš trijų viso dalinasi ${dalinasIsTriju} skaičiai. Vidurkis gaunasi: ${vidurkis}`);

console.log('================================');