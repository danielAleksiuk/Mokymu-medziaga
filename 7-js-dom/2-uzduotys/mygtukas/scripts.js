let skaicius = 1;
let mygtukas = document.querySelector('button');
let tekstas = document.querySelector('p span');
let info = '';

mygtukas.addEventListener('click', () => {
    skaicius++;
    tekstas.innerHTML = skaicius;

    info.classList.add('orange');
    info.style.color = 'orange';
});

0 - 10 -> dar tik pradzia
10 - 20 -> pasiekta 10
20 + -> virsija 20