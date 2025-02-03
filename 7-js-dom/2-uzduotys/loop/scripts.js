let skaicius = document.querySelector('.skaicius');
let mygtukasPirmyn = document.querySelector('.pirmyn');
let mygtukasAtgal = document.querySelector('.atgal');

mygtukasPirmyn.addEventListener('click', () => {
    let naujas = parseInt(skaicius.textContent) + 1;
    if (naujas > 5) {
        naujas = 1;
    }
    skaicius.textContent = naujas;
});

mygtukasAtgal.addEventListener('click', () => {
    let naujas = parseInt(skaicius.textContent) - 1;
    if (naujas < 1) {
        naujas = 5;
    }
    skaicius.textContent = naujas;
});