// 1 
// if (salyga) {
//     veiksmas arba veiksmai
// } 

// 2 
// if (salyga) {
//     veiksmas arba veiksmai
// } else {
//     veiksmas arba veiksmai
// }
// 3 
// if (salyga) {
//     veiksmas arba veiksmai
// } else if (salyga) { // else if n kartu
//     veiksmas arba veiksmai
// } else {
//     veiksmas arba veiksmai
// }

console.log('================================');
console.log('====   else - if uzduotys   ====');
console.log('====   1 uzduotis:          ====');
let a = 2, b = 5, c = 8;

if (a > b) {
    console.log('pirmas skaicius yra didesnis uz antra');
} else if (b > c ) {
    console.log('antras skaicius didesnis uz trecia');
} else if (c > a) {
    console.log('trecias skaicius yra didesnis uz pirma');
}

if (a === b) {
    console.log('pirmu du skaiciai yra lygus');
} else if (b === c){
    console.log('paskutiniai du skaiciai yra lygus');
} else if (a === 0) {
    console.log('pirmas skaicius yra lygus 0');
}

if (b < 0) {
    console.log('antras skaicius yra neigiamas');
} else if (c > 0) {
    console.log('trecias skaicius yra teigiamas');
}

console.log('====   2 uzduotis:          ====');

let mark = 5

if (mark === 10) {
    console.log ('puiku')
} else if (mark >= 9) {
    console.log ('labai gerai')
} else if (mark >= 7) {
    console.log ('gerai')
} else if (mark >= 5) {
    console.log ('patenkinamai')
} else if (mark < 5) {
    console.log ('egzaminas neišlaikytas')
};

console.log('================================');