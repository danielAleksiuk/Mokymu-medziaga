
console.log('================================');
console.log('====   ciklas for uzduotys      ====');
console.log('====   1 uzduotis:          ====');


for (let i = 0; i<= 10; i++) {
    console.log(i);
}

console.log('====   2 uzduotis:          ====');

for (let j = 0; j <= 15; j += 2) {
    console.log(j);
}

console.log('====   3 uzduotis:          ====');

for (let i = 1; i <= 20; i += 3) {
    console.log(`[${i}]`);
}

console.log('====   4 uzduotis:          ====');

for (let i = 1; i <= 20; i++) {
    if (i % 4 === 0) {
        console.log(i);
    }
}

console.log('====   5 uzduotis:          ====');

let pradzia = 1;
let pabaiga = 9;

if (pradzia < pabaiga) {
    for(i = pradzia; i < pabaiga; i++) {
        console.log(i, Math.pow(i, 2));
    }
} else {
    console.log('Pradzios skaicius didesnis nei pabaigos')
}

console.log('====   6 uzduotis:          ====');

let start = 1;
let end = 20;

if (start < end) {
    for(i = start; i < end; i++) {
        if (i % 2 !== 0 || i % 8 === 0) {
            console.log(i);
        }
    }
} else {
    console.log('Pradzios skaicius didesnis nei pabaigos');
}

console.log('====   7 uzduotis:          ====');

let skaicius = 5, n = 4;
// 1 , 2 , ... , n
// 1 , 2 , 3 , 4 
// 0 , 1 , 2 ,3 ,4 

//  5 * 4 = 20
//  5 + 5 + 5 + 5 = 20
let rezultatas = 0; 

for (let i = 1; i <= n; i++) {
    rezultatas += skaicius;
    // rezultatas = rezultatas + skaicius;
    // rezultatas = 0 + 5;
    // rezultatas = 5 + 5;
    // rezultatas = 10 + 5
    // rezultatas = 15 + 5; 
}

console.log(rezultatas);

console.log('================================');

