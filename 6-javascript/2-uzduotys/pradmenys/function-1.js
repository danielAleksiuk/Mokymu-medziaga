console.log('================================');
console.log('====   funkcijos 1 dalis uzduotys      ====');
console.log('====   1 uzduotis:          ====');

function manoInfo() {
    console.log(`Aš esu Danielius ir esu lektorius.`);
}

manoInfo();
manoInfo();
manoInfo();

console.log('====   2 uzduotis:          ====');

function eilerastis() {
    console.log('opa');
    console.log('opa');
    console.log('opa');
    console.log('opa');
    console.log('opa');
}

eilerastis();
eilerastis();
eilerastis();
eilerastis();
eilerastis();

console.log('====   3 uzduotis:          ====');

function pirmasTekstas() {
    console.log(`labas`);
}

function antrasTekstas() {
    console.log(`rytas`);
}

function treciasTekstas() {
    console.log(`drauge`);
}

pirmasTekstas();
antrasTekstas();
treciasTekstas();

console.log('====   4 uzduotis:          ====');

function pirmaEilute() {
    console.log(`labas`);
}

function antraEilute() {
    console.log(`vakaras`);
}

function iskvietimas() {
    pirmaEilute();
    antraEilute();
}

iskvietimas();

console.log('====   5 uzduotis:          ====');

function skaiciuSuma() {
    let sk1 = Math.ceil(Math.random() * 10);
    let sk2 = Math.ceil(Math.random() * 10);

    console.log(`${sk1} + ${sk2} = ${sk1 + sk2}`);
}

skaiciuSuma();

console.log('====   6 uzduotis:          ====');

function spausdintiPolicininkoInformacija() {
    let vardas = 'Jonas';
    let pavarde = 'Petraitis';
    let amzius = 35;
    let alga = 1500;
    let etatas = 'Pilnas etatas';
    let specializacija = 'Tyrėjas';

    console.log('Policininko informacija:');
    console.log(`Vardas: ${vardas}`);
    console.log(`Pavardė: ${pavarde}`);
    console.log(`Amžius: ${amzius} metai`);
    console.log(`Alga: ${alga} EUR`);
    console.log(`Etatas: ${etatas}`);
    console.log(`Specializacija: ${specializacija}`);
}

spausdintiPolicininkoInformacija();

console.log('====   7 uzduotis:          ====');

function randomSkaiciai() {

    let numbers = [];

    for (let i = 0; i < 10; i++) {
        numbers.push(Math.ceil(Math.random() * 10));
    }
    
    console.log(numbers.join(' '));
    
}

randomSkaiciai();
randomSkaiciai();
randomSkaiciai();
randomSkaiciai();
randomSkaiciai();

console.log('====   8 uzduotis:          ====');

function randomSkaicius() {
    console.log(Math.ceil(Math.random() * 10)); 
}

for (let i = 0; i < 10; i++) {
randomSkaicius();
}

console.log('================================');