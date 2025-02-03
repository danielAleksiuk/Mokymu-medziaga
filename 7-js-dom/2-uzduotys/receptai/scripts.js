let receptai = [
    {
        id: 1,
        pavadinimas: 'Vistiena su salotom',
        aprasymas: 'Amet et at aliquam duis ut morbi turpis. Quis cursus tincidunt risus purus faucibus elit ut. Pellentesque montes.',
        imgUrl: 'img/salotos.jpg',
        receptas:  [
            {
                pavadinimas: 'vistiena',
                kiekis: 5000,
                matavimoVienetas: 'gr'
            },
            {
                pavadinimas: 'salotos',
                kiekis: 50000,
                matavimoVienetas: 'gr'
            },
            {
                pavadinimas: 'pomidorai',
                kiekis: 10,
                matavimoVienetas: 'gr'
            },
            {
                pavadinimas: 'padazas',
                kiekis: 500,
                matavimoVienetas: 'ml'
            },
        ]
    },
    {
        id: 2,
        pavadinimas: 'Tortas su menynemis',
        aprasymas: 'Amet et at aliquam duis ut morbi turpis. Quis cursus tincidunt risus purus faucibus elit ut. Pellentesque montes.',
        imgUrl: 'img/tortas.jpg',
        receptas: [
            {
                pavadinimas: 'kiauliana',
                kiekis: 1500,
                matavimoVienetas: 'gr'
            },
            {
                pavadinimas: 'salotos',
                kiekis: 700,
                matavimoVienetas: 'gr'
            },
            {
                pavadinimas: 'pomidorai',
                kiekis: 900,
                matavimoVienetas: 'gr'
            },
            {
                pavadinimas: 'padazas',
                kiekis: 500,
                matavimoVienetas: 'ml'
            },
        ]
    },
    {
        id: 3,
        pavadinimas: 'Makaronai su mesa',
        aprasymas: 'Amet et at aliquam duis ut morbi turpis. Quis cursus tincidunt risus purus faucibus elit ut. Pellentesque montes.',
        imgUrl: 'img/makaronai.jpg',
        receptas: [
            {
                pavadinimas: 'jautiena',
                kiekis: 100,
                matavimoVienetas: 'gr'
            },
            {
                pavadinimas: 'salotos',
                kiekis: 200,
                matavimoVienetas: 'gr'
            },
            {
                pavadinimas: 'pomidorai',
                kiekis: 4100,
                matavimoVienetas: 'gr'
            },
            {
                pavadinimas: 'padazas',
                kiekis: 500,
                matavimoVienetas: 'ml'
            },
        ]
    }
];
let inputReiksme = document.querySelector('.porcijos p');
let porcijuSkaicius = 1;
let pasirinktasReceptas = null;

window.addEventListener('load', () => {
    let korteliuHTML = '';

    for(let receptas of receptai) {
        korteliuHTML += `
            <div class="kortele" id="receptas-${receptas.id}" onclick="onKortelesPaspaudimas(${receptas.id})">
                <img src=${receptas.imgUrl}>
                <div class="text">
                    <h4>${receptas.pavadinimas}</h4>
                    <p>${receptas.aprasymas}</p>
                </div>
                <img id="recepto-statusas" src="img/selected.jpg" class="hide">
            </div>
        `;
    }
    document.querySelector('.korteles').innerHTML = korteliuHTML;
});

function receptoHTMLGeneravimas(id) {
    let receptas = receptai.find(el => el.id === id).receptas;
    let receptoHTML = '';

    for(let property in receptas) {
        receptoHTML += `
            <p>${receptas[property].pavadinimas}:
            <strong>${receptas[property].kiekis * porcijuSkaicius} ${receptas[property].matavimoVienetas}</strong>
            </p>
        `;
    };

    return receptoHTML;
}

function onKortelesPaspaudimas(id) {
    pasirinktasReceptas = id;
    document.getElementById('rezultatai').innerHTML = receptoHTMLGeneravimas(id);
   
    
    document.querySelectorAll('#recepto-statusas').forEach(element => {
        element.classList.remove('active');
        element.classList.add('hide');
    });
    let activeElement = document.getElementById('receptas-' + id).querySelector('#recepto-statusas');
    activeElement.classList.remove('hide');
    activeElement.classList.add('active');
}

document.querySelector('.porcijos input').addEventListener('input', (event) => {
    inputReiksme.textContent = event.target.value;
    porcijuSkaicius = event.target.value;
    if (pasirinktasReceptas !== null) {
        document.getElementById('rezultatai').innerHTML = receptoHTMLGeneravimas(pasirinktasReceptas);
    }
})