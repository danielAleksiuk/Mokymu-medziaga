
let mygtukas = document.querySelector('button');
let visasKontentas = document.querySelector('body');

mygtukas.addEventListener('click', () => {
    if (visasKontentas.classList.contains('isdidinti')) {
        visasKontentas.classList.remove('isdidinti');
        mygtukas.textContent = 'Viską išdidinti';
    } else {
        visasKontentas.classList.add('isdidinti');
        mygtukas.textContent = 'Viską grąžinti atgal';
    }
});