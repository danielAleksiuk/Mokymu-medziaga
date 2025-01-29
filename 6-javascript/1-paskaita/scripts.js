// function manoPirmojiFunkcija() {
//     console.log('mano pirmoji JS funkcija');
// }


// manoPirmojiFunkcija();

// function eilerastis() {
//     console.log('labas rytas');
//     console.log('su peleda');
//     console.log('opa');
// }

// eilerastis();
// eilerastis();

// pasisveikinti();
// atsisveikinti();


// const pasisveikinti = () => {
//     console.log('sveiki');
// }

// const atsisveikinti = () => {
//     console.log('iki')
// }

// function pasisveikinti() {
//     console.log('sveiki');
// }

// function atsisveikinti() {
//     console.log('iki');
// }

// function isvedimas() {
//     let skaicius = 6;
//     console.log(skaicius);
// }

// let skaicius = 70;

// isvedimas();

// console.log(skaicius)

// function pasisveikinti (vardas, pavarde) {
//     console.log('labas ' + vardas + pavarde);
// }

// pasisveikinti('Jonas', 'Jonaitis')
// function skirtumas(skaicius1, skaicius2) {
//     let rezultatas = skaicius1 - skaicius2;
//     console.log('- :' + rezultatas);
// }

// function suma(skaicius1, skaicius2) {
//     let rezultatas = skaicius1 + skaicius2;

//     console.log(rezultatas);
// }
// let a = 4 , b = 80;

// suma(a, b);
// skirtumas(b, a)


// function isvedimas(vardas, amzius, role) {
//     console.log(vardas)
//     console.log(amzius)
//     console.log(role)
// }

// isvedimas()

// isvedimas('tomas', 56, 'police');
// isvedimas('toma', 6, 'child')


// function masyvoIsvedimas(mas) {
//     console.log(mas);
//     console.log('DUOMENYs', mas.join(','));
// }

// function skaiciuokSuma(masyvas) {
//     let suma = 0;
//     for (let item of masyvas) {
//         suma += item; // suma = suma + item;
//     }
//     console.log('skaiciu suma: ', suma);
// }

// function didziausioPaieskaMasyve(mas) {
//     let didziausiasSkaicius = mas[0];

//     for (let elementas of mas) {
//         if (elementas > didziausiasSkaicius){
//             didziausiasSkaicius = elementas;
//         }
//     }

//     console.log('didziausias skaicius masyve: ', didziausiasSkaicius);
// }


// let skaiciai1 = [4 ,8 , 4 ,1 ,32];
// let skaiciai2 = [9,  74, 123, 40];

// console.log(skaiciai1);
// didziausioPaieskaMasyve(skaiciai1);

// console.log(skaiciai2);
// didziausioPaieskaMasyve(skaiciai2);

// function skaicius() {
//     return 4;
// }

// function objektas() {
//     return {
//         x: 1,
//         y: 3
//     };
// }

// function logine(){
//     return false;
// }

// function tekstas() {
//     return 'kokia nors tekstine reiksem';
// }

// if (tekstas() === 'labas') {

// } else {
//     console.log('tekstas neteisiongas')
// }

// let pvz = tekstas();

// console.log(pvz)

// console.log(
//     tekstas()
// )


// function sakinys(vardas) {
//     let tekstas = 'labas rytas';

//     return tekstas + ' Lietuva ' + vardas;
// }

// console.log(sakinys('Jonui'));


// function lyginisArNe(skaicius) {
//     if (skaicius % 2 === 0) {
//         return 'Lyginis';
//     }

//     return 'Nelyginis';
// }

// let preke = {
//     pavadinimas: 'piestukas',
//     kaina: 0.99, 
//     kiekis: 478,
//     arParduodama: true,
//     nupirkoVieneta: function() {
//         this.kiekis--;
//     },
//     isvestiInformacija: function()  {
//         console.log(this);
//         console.log(this.pavadinimas)
//         this.exportas = 1.23;
//     },
//     pakeiskPrekesStatusa: function(status) {
//         this.arParduodama = status;
//     }
// };

// console.log(this)
// console.log(preke.isvestiInformacija());
// console.log(preke);
// console.log(preke.pakeiskPrekesStatusa(false));
// console.log(preke);

// console.log(preke);

// for(let i = 1; i < 54; i++) {
//     preke.nupirkoVieneta();
// }


// console.log(preke);


// function prekeFactory(pavadinimas, kaina, kiekis) {
//     return {
//        pavadinimas,
//        kaina,
//        kiekis
//     };
// }


// let preke;

// console.log(preke);

// preke = prekeFactory('lapas', 0.20, 100);


// let prekes = [
//     prekeFactory('lapas', 0.20, 100),
//     prekeFactory('lapas', 0.20, 100),
//     prekeFactory('lapas', 0.20, 100),
//     prekeFactory('lapas', 0.20, 100),
//     prekeFactory('lapas', 0.20, 100)
// ];

// for () {
//     prekes.push(
//         prekeFactory('lapas', 0.20, 100)
//     )
// }

// console.log(prekes);