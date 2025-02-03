let skaicius = 1;
let mygtukas = document.querySelector('button');
let tekstas = document.querySelector('p span');
let infoJuostele = document.querySelector('.info');

mygtukas.addEventListener('click', () => {
    skaicius++;
    tekstas.innerHTML = skaicius;

    if (skaicius >= 40) {
        infoJuostele.innerHTML = 'Kur tu eini? Daugiau lygių nebėra';
    } else if (skaicius >= 30) {
        infoJuostele.innerHTML = 'Jau pasiekėm 30!';
        infoJuostele.classList.add('red')
        infoJuostele.classList.remove('redOrange')
    } else if (skaicius >= 20) {
        infoJuostele.innerHTML = 'Jau pasiekėm 20!';
        infoJuostele.classList.add('redOrange')
        infoJuostele.classList.remove('orange')
    } else if (skaicius >= 10) {
        infoJuostele.innerHTML = 'Jau pasiekėm 10!';
        infoJuostele.classList.add('orange')
    } else {
        infoJuostele.innerHTML = 'Dar tik pradžia...';
    }
});
