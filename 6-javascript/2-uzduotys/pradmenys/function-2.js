console.log('================================');
console.log('====   funkcijos 2 dalis uzduotys      ====');
console.log('====   1 uzduotis:          ====');

function pasisveikink(vardas) {
    console.log('welcome ' + vardas);
}

function atisveikink(vardas) {
    console.log('bye ' + vardas);
}

let vardas = 'Petras';

pasisveikink(vardas);
atisveikink(vardas);

console.log('====   2 uzduotis:          ====');

function skaiciuPalyginimas(a, b) {
    if (a > b) {
        console.log(`Skaičius ${a} didesnis už skaičių ${b}`);
    } else if (b > a) {
        console.log(`Skaičius ${b} didesnis už skaičių ${a}`);
    } else {
        console.log(`Skaičiai ${a} ir ${b} sutampa`);
    }
}

skaiciuPalyginimas(9,7);
skaiciuPalyginimas(4,7);
skaiciuPalyginimas(6,6);

console.log('====   3 uzduotis:          ====');

function automobilioDuomenys(marke, modelis, gamybMetai, darbTuris) {
    console.log(`Automobilis: ${marke} ${modelis}. Pagamintas: ${gamybMetai} metais. Automobiolio darbinis tūris: ${darbTuris}l.`);
}

automobilioDuomenys('Toyota', 'Corolla', 2018, 1.8);
automobilioDuomenys('BMW', '320d', 2020, 2.0);

console.log('====   4 uzduotis:          ====');

function sudetis(a, b) {
    console.log(`${a} + ${b} = ${a + b}`);
};

function atimtis(a, b) {
    console.log(`${a} - ${b} = ${a - b}`);
};

function sandauga(a, b) {
    console.log(`${a} * ${b} = ${a * b}`);
};

function dalmuo(a, b) {
    if (b !== 0) {
        console.log(`${a} / ${b} = ${(a / b).toFixed(2)}`);
    } else {
        console.log("Dalyba iš nulio negalima");
    }
};

function skaiciavimai() {

    let a = Math.floor(Math.random() * 10);
    let b = Math.floor(Math.random() * 10);
    
    sudetis(a, b);
    atimtis(a, b);
    sandauga(a, b);
    dalmuo(a, b);
}

skaiciavimai();
console.log('----------------');
skaiciavimai();
console.log('----------------');
skaiciavimai();

console.log('================================');