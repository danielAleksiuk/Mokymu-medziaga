console.log('================================');
console.log('====   masyvai 4 dalis uzduotys      ====');
console.log('====   1 uzduotis:          ====');
let patiekalai = ['kotletas', 'lazanija', 'pica'];
console.log(patiekalai);
console.log('------------------')

//Pridedam-----------------
patiekalai.push('brokolis'); // pridedama į masyvo galą
console.log(patiekalai);
console.log('------------------')
patiekalai.unshift('ledai'); //pridedam į masyvo priekį
console.log(patiekalai);
console.log('------------------')
patiekalai.splice(1, 0, 'cukinija'); //pridedam į vidurį
console.log(patiekalai);

//Trinam----------------- 
console.log('---trinam is tokio---------------')
console.log(patiekalai);
console.log('------------------')
patiekalai.pop(); // trinam iš masyvo galo
console.log(patiekalai);
console.log('------------------')
patiekalai.shift(); //trinam iš masyvo priekio
console.log(patiekalai);
console.log('------------------')
patiekalai.splice(2, 1); //trinam iš vidurio

console.log(patiekalai);

console.log('====   2 uzduotis:          ====');

let skaiciaiUzd2 = [23, 67, 4, 89, 34, 12, 58, 90, 17, 56, 73, 21, 38, 84, 45];
console.log('Ar masyve yra 8:', skaiciaiUzd2.includes(8));

console.log('====   3 uzduotis:          ====');

let zodziai = [
    'moon',
    'echo',
    'jungle',
    'spice',
    'craft',
    'whisper',
    'glow'
];

console.log(zodziai.join());
console.log(zodziai.join(''));
console.log(zodziai.join('.'));
console.log(zodziai.join(' '));
console.log(zodziai.join(', '));
console.log(zodziai.join('-'));

console.log('====   4 uzduotis:          ====');

let pazymiai = [3, 7, 1, 9, 4, 2, 8, 5, 6];
let surikiuotiPazymiai = pazymiai.slice().sort();
console.log('pirmi trys didziausi', surikiuotiPazymiai.slice(-3));

console.log('====   5 uzduotis:          ====');

let biologijosStudentai = [
    'Emma',
    'Liam',
    'Olivia',
    'Noah',
    'Ava',
    'Ethan',
    'Sophia',
    'Mason'
]
let = matematikosStudentai = [
    'Chloe',
    'Liam',
    'Jackson',
    'Mia',
    'Benjamin',
    'Emma',
    'Sophia',
    'Aiden'
]
let visiStudentai = [...biologijosStudentai, ...matematikosStudentai];

console.log('====   6 uzduotis:          ====');

let pirmoTemos = [
    'Dirbtinis intelektas ir jo poveikis visuomenei',
    'Genų inžinerija ir etiniai klausimai',
    'Visatos kilmė ir didysis sprogimas',
    'Klimato kaita ir jos padariniai',
    'Šiuolaikinės meno tendencijos',
    'Kriptovaliutos ir jų ekonominis poveikis',
    'Psichologijos pagrindai ir žmogaus elgesys',
    'Technologinės inovacijos ir ateities darbo vietos',
    'Tarptautinė politika ir globalizacija',
    'Kūrybinio rašymo technikos',
    '---------'
]

let antroTemos = [
    'Nanotechnologijos ir jų taikymas',
    'Veganizmas ir augalinis maistas',
    'Internetinės saugos iššūkiai',
    'Ekologinis dizainas ir tvarumas',
    'Socialinė teisingumas ir lygybė'
]
let bendrosTemos = [...pirmoTemos,...antroTemos];
console.log(bendrosTemos)

console.log('====   7 uzduotis:          ====');

let spalvos = [
    'Raudona',
    'Žalia',
    'Mėlyna',
    'Geltona',
    'Pilkas'
];

let spalvosKopija = spalvos.slice();
spalvos = [];

console.log(spalvos);
console.log(spalvosKopija);

console.log('====   8 uzduotis:          ====');
let miestai = [
    'Vln',
    'Kns',
    'Klp'
];
let miestas = 'Kns';

if (miestai.indexOf(miestas) === -1 ) {
    console.log(miestas + ' miesto sarase nera');
} else {
    console.log(miestas + ' miestas yra')
}

console.log('====   9 uzduotis:          ====');
let skaiciai = [1, 2, 7 , 4, 2];
let yraDuplikatu = false;

// 1 budas - lastOfIndex
for(let skaicius of skaiciai ) {
    if (skaiciai.indexOf(skaicius) !== skaiciai.lastIndexOf(skaicius)) {
        yraDuplikatu = true;
        break;
    }
}
if (yraDuplikatu) {
    console.log('masyve yra dupplikatu');
} else {
    console.log('duplikatu nera');
}

// 2 budas 
yraDuplikatu = false;
skaiciai.sort((a,b) =>  a - b );

for (let i = 0; i < skaiciai.length - 1; i++) {
    if (skaiciai[i] === skaiciai[i + 1]) {
        yraDuplikatu = true;
        break;
    }
}

if (yraDuplikatu) {
    console.log('masyve yra dupplikatu');
} else {
    console.log('duplikatu nera');
}

console.log('====   10 uzduotis:          ====');
let senasMasyvas = [1, 2, 3, 4, 5 ,6];
let naujasMasyvas = [];
let chunkSize = 2;
let naujoMasyvoKiekis = Math.ceil(senasMasyvas.length / chunkSize );

for (let i = 0; i< senasMasyvas.length; i += chunkSize) {
    naujasMasyvas.push(
        senasMasyvas.slice(i, i + chunkSize)
    );
}

console.log(naujasMasyvas);

console.log('====   11 uzduotis:          ====');

let pirmasMasyvas = [1, 2, 3, 4];
let antrasMasyvas = [1, 2,8, 3, 4, 5, 6];
let treciasMasyvas = [];

treciasMasyvas = [...pirmasMasyvas];

for (let skaicius of antrasMasyvas) {
    if (!pirmasMasyvas.includes(skaicius)) {
        treciasMasyvas.push(skaicius);
    }
}

treciasMasyvas.sort();
console.log(treciasMasyvas);

console.log('====   12 uzduotis:          ====');

let skaiciai1 = [53, 28, 14, 67, 39, 82, 45, 19, 76, 31, 4, 6, 13];
let skaiciai2 = [42, 19, 31, 36, 83, 14, 61, 67, 98, 6]
let pasikartojantysSkaiciai = [];

for (let skaicius of skaiciai1) {
    if (skaiciai2.includes(skaicius)) {
        pasikartojantysSkaiciai.push(skaicius);
    }
}

console.log(pasikartojantysSkaiciai);

console.log('====   13 uzduotis:          ====');
let skaiciaiUzd13 = [1, 8, 4, 7, 2, 6, 9, 5];
let minTeigiamas = 1;

while (skaiciaiUzd13.includes(minTeigiamas)) {
    minTeigiamas++;
}

console.log("Mažiausias neegzistuojantis teigiamas skaičius:", minTeigiamas);

console.log('====   14 uzduotis:          ====');

let skaiciaiUzd14 = [1, 2, 3, 4, 5, 6, 7];

console.log(skaiciaiUzd14.slice().reverse());

console.log('================================');