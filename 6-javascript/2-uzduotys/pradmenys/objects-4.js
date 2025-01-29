console.log('================================');
console.log('====   objektai 4 dalis uzduotys      ====');
console.log('====   1 uzduotis:          ====');

let imones = [
    {
      pavadinimas: "Technologijų Inovacijos",
      adresas: "Gluosnių g. 123, Vilnius, Lietuva",
      pramonėsSektorius: "Technologijos",
      darbuotojuSkaicius: 200,
      islaidos: 1500000,
      pajamos: 5000000,
      ikurimoMetai: 2022
    },
    {
      pavadinimas: "Žaliosios Energijos Sprendimai",
      adresas: "Ąžuolų g. 567, Kaunas, Lietuva",
      pramonėsSektorius: "Energija",
      darbuotojuSkaicius: 150,
      islaidos: 100000,
      pajamos: 3000000,
      ikurimoMetai: 1995
    },
    {
      pavadinimas: "Pirmoji Sveikata",
      adresas: "Pušų g. 910, Klaipėda, Lietuva",
      pramonėsSektorius: "Sveikatos Priežiūra",
      darbuotojuSkaicius: 100,
      islaidos: 180000,
      pajamos: 2000000,
      ikurimoMetai: 2002
    }
];

let bendrasDarbuotojuSkaicius = 0;
let bendrosIslaidos = 0;
let bendrosPajamos = 0;
let imonesAmziausSuma = 0;

for (const imone of imones) {
    console.log('Įmonės pavadinimas:', imone.pavadinimas);
    console.log('Įmonės adresas:', imone.adresas);
    console.log('Įmonės sektorius:', imone.pramonėsSektorius);
    console.log('Įmonės darbuotojų skaičius:', imone.darbuotojuSkaicius, 'žmonių');
    console.log('Įmonės pajamos:', imone.pajamos, 'Eur');
    console.log('Įmonės ikurimo metai:', imone.ikurimoMetai, 'm.');
    console.log('Įmonės amžius:', ((new Date(Date.now()).getFullYear()) - imone.ikurimoMetai), 'metai.');
    console.log('----------------------');
    bendrasDarbuotojuSkaicius += imone.darbuotojuSkaicius;
    bendrosIslaidos += imone.islaidos;
    bendrosPajamos += imone.pajamos;
    imonesAmziausSuma += ((new Date(Date.now()).getFullYear()) - imone.ikurimoMetai);
}

console.log('Bendras darbuotojų skaičius visose įmonėse:', bendrasDarbuotojuSkaicius);
console.log('Bendros islaidos visose įmonėse:', bendrosIslaidos, 'Eur');
console.log('Bendros pajamos visose įmonėse:', bendrosPajamos, 'Eur');
console.log('Bendras pelnas:', bendrosPajamos - bendrosIslaidos, 'Eur');
console.log('Įmonių amžiaus vidurkis:', Math.ceil(imonesAmziausSuma / imones.length));

console.log('====   2 uzduotis:          ====');

let ligonines = [
    {
        pavadinimas: "Vilniaus universitetinės ligoninės Santariškių klinikos",
        adresas: "Santariškių g. 2, Vilnius",
        telefonas: "+370 5 236 5111",
        skyriai: ["Chirurgijos skyrius", "Vidinės ligų skyrius", "Kardiologijos skyrius"],
        lankytojai: 1500,
        darbuotojai: 600
    },
    {
        pavadinimas: "Kauno klinikinės ligoninės",
        adresas: "Eivenių g. 2, Kaunas",
        telefonas: "+370 37 326 214",
        skyriai: ["Traumatologijos skyrius", "Neurologijos skyrius", "Pediatrijos skyrius"],
        lankytojai: 1200,
        darbuotojai: 500
    },
    {
        pavadinimas: "Klaipėdos universitetinės ligoninės",
        adresas: "Liepojos g. 1, Klaipėda",
        telefonas: "+370 46 310 945",
        skyriai: ["Gydytojų konsultacijų skyrius", "Operacinės skyrius", "Vaikų ligų skyrius"],
        lankytojai: 900,
        darbuotojai: 400
    }
];


for (const ligonine of ligonines) {
    console.log('Ligoninės pavadinimas:', ligonine.pavadinimas);
    console.log('Adresas:', ligonine.adresas);
    console.log('-------------------------');
}

let lankytojai = ligonines.map(ligonine => ligonine.lankytojai);
let bendrasLankytojuKiekis = 0;

for (const item of lankytojai) {
    bendrasLankytojuKiekis += item;
}

console.log('Bendras lankytojų kiekis:', bendrasLankytojuKiekis);
console.log('Bendras darbuotojų skaičius:', ligonines.reduce((total, ligonine) => total + ligonine.darbuotojai, 0));

let darbuotojuVidurkis = ligonines.reduce((total, ligonine) => total + ligonine.darbuotojai, 0) / ligonines.length;

console.log('Vidutinis darbuotojų skaičius:', Math.ceil(darbuotojuVidurkis));

console.log('================================');