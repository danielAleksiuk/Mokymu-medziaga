console.log('================================');
console.log('====   string uzduotys      ====');
console.log('====   1 uzduotis:          ====');
let eilute = 'labas';
let newEilute = '';

for(let i = eilute.length - 1; i >= 0; i--) {
    newEilute += eilute[i];
}

console.log(eilute);
console.log(newEilute);

console.log('====   2 uzduotis:          ====');
let sakinys = 'JAV analitikai: BTC kainuos 1 mln usd';
let zodis = 'kainuos';

console.log(sakinys);
console.log(zodis);

if (sakinys.includes(zodis)) {
    console.log('yra');
} else {
    console.log('ne');
}

console.log('================================');