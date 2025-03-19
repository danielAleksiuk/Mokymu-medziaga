// 1 uzduotis

function apskritimoPlotas(r) {
    return Math.PI * Math.pow(r, 2);
}

// 2 uzduotis

function palindrome(str) {
    const cleanStr = str.replace(/[\W_]/g, '').toLowerCase()
    const reverseStr = cleanStr.split('').reverse().join('')
    return cleanStr === reverseStr
}

// 3 uzduotis

function rastiMax(skaciai) {
    if (!Array.isArray(skaciai) ||!skaciai.length) {
        throw new Error('neteisingai ivestas parametras skaiciai');
    }
    //1 budas su for ciklu
    // let didziausias = skaciai[0];
    // for(let i = 1; i< skaciai.length; i++){
    //     if (skaciai[i] > didziausias) {
    //         didziausias = skaciai[i];
    //     }
    // }
    // return didziausias;
    // 2 budas su math pagalba
    return Math.max(...skaciai);
}

// 4 uzduotis
function pridetiKaina(objektas) {
    if (objektas.hasOwnProperty('kaina')) {
        return 'Objektas jau turi kaina!';
    }

    objektas.kaina = 50;
    return objektas;
}

// 5 uzduotis
function uzdelsimas(delay) {
    return new Promise((resolve, reject) => {
        if (delay > 1000) {
            reject(new Error('Klaida: uzdelsimas ilgiau nei 1 sek'));
        } else {
            setTimeout(() => { resolve('uzdelsimas mazesnis nei 1 sek')}, delay)
        }
    });
}

// 6 uzduotis
function grazinaNull() {
    return null;
}

module.exports = [
    apskritimoPlotas,
    palindrome,
    rastiMax,
    pridetiKaina,
    uzdelsimas,
    grazinaNull
];
