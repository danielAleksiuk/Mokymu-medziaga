// 1 uzduotis

// 1 budas
function callHelloLater(callback) {
    setTimeout(callback, 2000);
}

function sayHello() {
    console.log('hello');
}

callHelloLater(sayHello)


// 2 budas
function manoPirmasTimeout(callback) {
    setTimeout(callback, 2000);
}

manoPirmasTimeout( () => { console.log('2 sek') })

// 2 uzduotis

const people = async () => {
    const response = await fetch('https://api.tvmaze.com/people');

    if (response.status !== 200) {
        throw new Error('nepavyko gauti people duomenu')
    }

    return response.json();
}

people()
    .then(data => console.log(data))
    .catch(error => console.log(error));

// 3 uzduotis

function arLyginiai(mas, callback) {
    for (let item of mas) {
        callback(item);
    }
}

function patikrinkLyginisArNe(skaicius) {
    if (skaicius % 2 === 0) {
        console.log('lyginis')
    } else {
        console.log('nelyginis')
    };
}

let masyvas = [1 , 5 ,7, 8 ,45 ,78, 11];

arLyginiai(masyvas, patikrinkLyginisArNe)

// 4 uzduotis

function patikrinkZodzioIlgi(masyvas, callbackFunkcija) {
    masyvas.forEach(item => callbackFunkcija(item));
}

function koksIlgis(string) {
    console.log(
        `zodzio ${string} ilgis yra - ${string.length}`
    )
}

let zodziai = ['labas', 'labas rytas', 'labas vakaras'];

patikrinkZodzioIlgi(zodziai, koksIlgis)

// 5 uzduotis
function pvz(masyvas, callbackFunkcija) {
    masyvas.forEach(item => callbackFunkcija(item));
}

function naujasObjektas(item) {
    console.log(
        {
            marke: item.marke,
            modelis: item.modelis
        }
    )
}

let auto = [
    {marke: 'audi', modelis: 'a7', kaina: 123, rida: 156},
    {marke: 'audi', modelis: 'a6', kaina: 1023, rida: 478555},
    {marke: 'audi', modelis: 'a5', kaina: 12003, rida: 15006}
];

pvz(auto, naujasObjektas)

// 6 uzduotis

function checkUserLogin(isUserLogedIn) {
    return new Promise((resolve, reject) => {
        if (isUserLogedIn) {
            resolve('user loged');
        } else {
            reject('user loged out')
        }
    })
}

checkUserLogin(true)
.then(message => console.log(message))
.catch(error => console.log(error));


checkUserLogin(false)
.then(message => console.log(message))
.catch(error => console.log(error));



// 7 uzduotis

if (age === undefined) null undefined

    if (!age || typeof age === 'number') {
        
    } 