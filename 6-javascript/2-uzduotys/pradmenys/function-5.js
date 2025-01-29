console.log('================================');
console.log('====   funkcijos 5 dalis uzduotys      ====');
console.log('====   1 uzduotis:          ====');
function skaiciusuma(masyvas) {
    let suma = 0;

    for(let i = 0; i < masyvas.length; i++) {
        suma += masyvas[i];
    }

    return suma;
}


let masyvas1 = [1, 8, 13, 2, 3];
let masyvas2 = [6, 7, 1, 4, 5];


let suma1 = skaiciusuma(masyvas1);
console.log("Pirmo masyvo suma: " + suma1);

let suma2 = skaiciusuma(masyvas2);
console.log("Antro masyvo suma: " + suma2);


if (suma1 > suma2) {
    console.log("Pirmo masyvo suma yra didesnė.");
} else if (suma2 > suma1) {
    console.log("Antro masyvo suma yra didesnė.");
} else {
    console.log("Abi sumos yra lygios.");
}
console.log('====   2 uzduotis:          ====');

function findilgiausiasZodis(masyvas) {

    let ilgiausiasZodis = [0];

    for(let i = 0; i < masyvas.length; i++) {
        if(masyvas[i].length > ilgiausiasZodis.length) {
            ilgiausiasZodis = masyvas[i];
        }
    }

    return ilgiausiasZodis;
}

let masyvas1 = ['musėt', 'guzikai', 'unaravas', 'čečkavot', 'kaštavot', 'besikiškiakopūsteliaudavomes'];

let ilgiausiasZodis = findilgiausiasZodis(masyvas1);

console.log('Ilgiausias žodis masyve: ' + ilgiausiasZodis);

console.log('Ilgiausio žodžio ilgis: ' + ilgiausiasZodis.length);
console.log('====   3 uzduotis:          ====');


function arPazymiaiTeigiami(masyvas) {
    for(let i = 0; i < masyvas.length; i++) {
        if(masyvas[i] <= 4) {
            return false;
        }
    }
    return true;
}

function atsakymasTekstu(rezultatas) {
    if(rezultatas == true) {
        console.log('Visi studento pažymiai teigiami');
    } else {
        console.log('Studentas turi bent vieną neigiamą pažymį');
    }
}

let masyvas1 = [10, 3, 9, 7, 4];
let masyvas2 = [7, 8, 2, 7, 6];


let rezultatas1 = arPazymiaiTeigiami(masyvas1);
atsakymasTekstu(rezultatas1);


let rezultatas2 = arPazymiaiTeigiami(masyvas2);
atsakymasTekstu(rezultatas2);
console.log('================================');