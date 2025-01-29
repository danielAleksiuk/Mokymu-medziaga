console.log('================================');
console.log('====   objektai 1 dalis uzduotys      ====');
console.log('====   1 uzduotis:          ====');

let studentas = {
    vardas: "Jonas",
    pavarde: "Jonaitis",
    amzius: 20,
    studiju_programa: "Informatika",
    atsiskaitytu_kreditu_skaicius: 120,
    pazymiai: [9, 8, 10, 7],
    ugis: 180,
    kursas: 3,
    mokykla: "Vilniaus Universitetas"
};

console.log(studentas);
console.log('Stdijų programa:', studentas.studiju_programa);
console.log('Studento ūgis:', studentas.ugis);
console.log('Mokykla:', studentas.mokykla);

console.log('====   2 uzduotis:          ====');

let filmas = {
    pavadinimas: 'Donnie Darko',
    rezisierius: 'Richard Kelly',
    biudzetas: 4500000,
    uzdarbis: 517375,
    zanras: 'Mystery',
    trukmė: 113,
    metai: 2001,
    aktoriai: ['Jake Gyllenhaal', 'Maggie Gyllenhaal', 'Jena Malone']
};
console.log(filmas);

if (filmas.uzdarbis - filmas.biudzetas >= 0) {
    console.log('Filmo pelnas:', filmas.uzdarbis - filmas.biudzetas, '$');
} else {
    console.log('Filmo nuostolis:', filmas.uzdarbis - filmas.biudzetas, '$');
}

console.log('Filme dalyvavusių aktorių skaičius:', filmas.aktoriai.length);
console.log('Filmui yra:', new Date(Date.now()).getFullYear() - filmas.metai, 'metai');

console.log('====   3 uzduotis:          ====');

let knyga1 = {
    pavadinimas: 'Maras',
    autorius: 'Albert Camus',
    zanras: 'Filosofinė proza',
    kaina: 12.99,
    puslapiuKiekis: 320,
    skyriuSarasas: ['Pradžia', 'Plėtra', 'Atsinaujinimas'],
    isleidimoMetai: 1947,
    arKnygynuose: true
};

console.log(knyga1);

let knyga2 = {
    pavadinimas: 'Suvokimo durys',
    autorius: 'Aldous Huxley',
    zanras: 'Autobiografinė eseistika',
    kaina: 9.75,
    puslapiuKiekis: 208,
    skyriuSarasas: ['Atsivėrimas', 'Kelionė į vidų', 'Išvada'],
    isleidimoMetai: 1954,
    arKnygynuose: true
};

console.log(knyga2);

if (knyga1.puslapiuKiekis > knyga2.puslapiuKiekis) {
  console.log(knyga2.pavadinimas, 'turi mažiau puslapių.');
} else if (knyga1.puslapiuKiekis < knyga2.puslapiuKiekis) {
  console.log(knyga1.pavadinimas, 'turi mažiau puslapių.');
} else {
  console.log('Knygų puslapių skaičius vienodas');
}

if (knyga1.skyriuSarasas.length < knyga2.skyriuSarasas.length) {
  console.log(knyga2.pavadinimas, 'turi daugiau skyrių.');
} else if (knyga1.skyriuSarasas.length > knyga2.skyriuSarasas.length) {
  console.log(knyga1.pavadinimas, 'turi daugiau skyrių.');
} else {
  console.log('Knygų skyrių skaičius vienodas');
}

let pigesneKnyga = null;
let brangesneKnyga = null;

if (knyga1.kaina < knyga2.kaina) {
  pigesneKnyga = knyga1;
  brangesneKnyga = knyga2;
} else if (knyga1.kaina > knyga2.kaina) {
  pigesneKnyga = knyga2;
  brangesneKnyga = knyga1;
} else {
  console.log('Knygų kainos lygios');
}

if (pigesneKnyga != null) {
  console.log(`Pigesnė prekė yra: ${pigesneKnyga.pavadinimas}. Jos kaina: ${pigesneKnyga.kaina}.`);
}

if ((pigesneKnyga.kaina * 2) > brangesneKnyga.kaina) {
  console.log(`Dviguba pigesnės kainos vertė ${pigesneKnyga.kaina * 2} yra daugiau nei brangesnės knygos kaina ${brangesneKnyga.kaina}`);
} else if ((pigesneKnyga.kaina * 2) < brangesneKnyga.kaina) {
  console.log(`Dviguba pigesnės kainos vertė ${pigesneKnyga.kaina * 2} yra mažiau nei brangesnės knygos kaina ${brangesneKnyga.kaina}`);
} else {
  console.log('Knygų kaina sutampa');
}

console.log('====   4 uzduotis:          ====');


const produktas1 = {
    pavadinimas: 'Telefonas',
    kaina: 500,
    savikaina: 300,
    kodas: 'P123',
    kiekisSandelyje: 50,
    matmenys: {
      x: 10,
      y: 5,
      z: 1
    }
  };
  

const produktas2 = {
    pavadinimas: 'Televizorius',
    kaina: 800,
    savikaina: 500,
    kodas: 'T456',
    kiekisSandelyje: 30,
    matmenys: {
        x: 30,
        y: 20,
        z: 5
    }
};

const produktas3 = {
    pavadinimas: 'Planšetė',
    kaina: 300,
    savikaina: 200,
    kodas: 'P789',
    kiekisSandelyje: 40,
    matmenys: {
        x: 8,
        y: 6,
        z: 0.5
    }
};

console.log(produktas1, produktas2, produktas3);
console.log(`Pirma prekė kainuoja - ${produktas1.kaina}Eur, antra prekė kainuoja - ${produktas2.kaina}Eur, trečia prekė kainuoja - ${produktas3.kaina}Eur.`);

let brangiausiasProduktas = null;

if (produktas1.kaina > produktas2.kaina && produktas1.kaina > produktas3.kaina) {
  brangiausiasProduktas = produktas1;
} else if (produktas2.kaina > produktas1.kaina && produktas2.kaina > produktas3.kaina) {
  brangiausiasProduktas = produktas2;
} else if (produktas3.kaina > produktas1.kaina && produktas2.kaina > produktas2.kaina) {
  brangiausiasProduktas = produktas3;
} else {
  console.log('Yra sutampančių kainų. Patikrinkite vertę.');
}

console.log('Brangiausiais produktas yra:', brangiausiasProduktas.pavadinimas, 'Jo vertė:', brangiausiasProduktas.kaina, 'Eur.');

let turis1 = produktas1.matmenys.x * produktas1.matmenys.y * produktas1.matmenys.z;
let turis2 = produktas2.matmenys.x * produktas2.matmenys.y * produktas2.matmenys.z;
let turis3 = produktas3.matmenys.x * produktas3.matmenys.y * produktas3.matmenys.z;

console.log('Pirmo produkto dėžės tūris:', turis1, 'cm³');
console.log('Antro produkto dėžės tūris:', turis2, 'cm³');
console.log('Trečio produkto dėžės tūris:', turis3, 'cm³');

let pelningumas1 = (produktas1.kaina - produktas1.savikaina) * produktas1.kiekisSandelyje;
let pelningumas2 = (produktas2.kaina - produktas2.savikaina) * produktas2.kiekisSandelyje;
let pelningumas3 = (produktas3.kaina - produktas3.savikaina) * produktas3.kiekisSandelyje;

console.log('Pirmo produkto pelningumas:', pelningumas1, 'Eur');
console.log('Antro produkto pelningumas:', pelningumas2, 'Eur');
console.log('Trečio produkto pelningumas:', pelningumas3, 'Eur');

console.log('====   5 uzduotis:          ====');
let automobilis = {}

automobilis.marke = 'porshe';
automobilis.modelis = '911';
automobilis.rida = 10000;
automobilis.metai = 2010;
automobilis.spalva = 'salotine';
automobilis.turis = 2.0;
automobilis.arDauzta = false;
automobilis.arParduodama = true;

console.log(automobilis);

let dabartiniaiMetai =  new Date(Date.now()).getFullYear();
let metuSkirtumas = dabartiniaiMetai - automobilis.metai

console.log('automobiliui yra: ' + metuSkirtumas + ' metu');

if (metuSkirtumas > 0) {
    console.log(
        'per metus nuvaziuoja: ' + 
        (automobilis.rida / metuSkirtumas).toFixed(2) +
        ' km'
    );
} else {
    console.log(automobilis.rida.toFixed(2));
}

console.log('================================');