console.log('================================');
console.log('====   objektai 3 dalis uzduotys      ====');
console.log('====   1 uzduotis:          ====');
let knygos = [
    {
        pav: 'knyga1',
        psl: 120,
        kaina: 10.00
    },
    {
        pav: 'knyga2',
        psl: 1200,
        kaina: 1000.00
    },
    {
        pav: 'knyga3',
        psl: 10,
        kaina: 100.00
    }
];

console.log(knygos);
console.log(knygos[0]);
console.log(knygos[1].kaina);

console.log('====   2 uzduotis:          ====');
let prekes = [
    {
        pav: 'knyga3',
        gamyba: 'vokietija',
        kaina: 100.00
    },
    {
        pav: 'knyga5',
        gamyba: 'vokietija',
        kaina: 100.00
    },
    {
        pav: 'knyga6',
        gamyba: 'vokietija',
        kaina: 100.00
    }
];

for(let preke of prekes) {
    console.log(preke.pav);
    console.log(preke.kaina);
    console.log(preke.gamyba);
}

console.log('====   3 uzduotis:          ====');

let automobiliai = [
    {
        marke: "Toyota",
        modelis: "Corolla",
        metai: 2020,
        spalva: "Raudona"
    },
    {
        marke: "Honda",
        modelis: "Civic",
        metai: 2018,
        spalva: "Melyna"
    },
    {
        marke: "Ford",
        modelis: "Mustang",
        metai: 2021,
        spalva: "Juoda"
    },
    {
        marke: "Chevrolet",
        modelis: "Camaro",
        metai: 2019,
        spalva: "Geltona"
    },
    {
        marke: "Tesla",
        modelis: "Model 3",
        metai: 2022,
        spalva: "Balta"
    }
];

for (const automobilis of automobiliai) {
    console.log('Pavadinimas:', automobilis.marke, automobilis.modelis, 'Metai:', automobilis.metai, 'Amzius:', (new Date(Date.now()).getFullYear()) - automobilis.metai, 'm.');
}

console.log('================================');
