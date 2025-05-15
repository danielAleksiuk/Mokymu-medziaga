function App() {
    return (
        <div className="App">
            <h1>Wordle</h1>
        </div>
    )
}

export default App

/*
ką reiks atlikti?

1. spėjamas žodis:
    - paimti atsitiktinį žodį susidedantį iš penkių raidžių:
        - trys variantai:
            - JSON Server failas
            - API
            - Mūsų pačių duomenų bazė (Mongo DB)
    - Iš pradžių su JSON Server, paskui pajungsime API, o po Mongo DB paskaitų, galėsite patys pabandyti
    - gausime tik vieną žodį per dieną
2. buvusieji spėjimai:
    - masyvas talpinantis buvusius spėjimus
    - kiekvienas buvęs spėjimas yra masyvas, kurį sudaro raidžių objektai [{}, {}, {}, {}, {}]
    - kiekvienas objektas yra skirtas raidei žodyje {letter: 'a', color: 'yellow'}
3. dabartinis spėjimas:
    - žodis, kurį vartotojas dabar suveda, pvz. 'hello'
4. klaviatūra:
    - masyvas, kurį sudaro raidžių objektai [{key: 'a', color: 'green'}, {}, {} ...]
5. spėjimų skaičius:
    - sveikas skaičius nuo 0 iki 6

žaidimo procesas
1. žodžių įvedimas:
    - parenkama raidė ir laukelis užsipildo ta raide
    - kai vartotojas spaudžia Delete, ištrinama prieš tai buvusi raidė
    - kai vartotojas spaudžia Enter, priduodamas žodis
        - jei ne visi laukeliai užpildyti, tuomet žodis nesiunčiamas
        - jei tas žodis jau buvo panaudotas, tuomet žodis nesiunčiamas
2. žodžių patikrinimas:
    - kiekviena raidė palyginama su spėjamu žodžiu
    - kiekvienai raidei priskiriame spalvą priklausomai nuo atitikimo spėjamam žodžiui:
        - teisingas spėjimas (teisinga raidės pozicija žodyje) - žalia spalva
        - dalinis spėjimas (teisinga raidė, bet neteisinga pozicija) - geltona spalva
        - neteisingas spėjimas (raidės nėra žodyje) - pilka spalva
    - spėjimas pridedamas į grid'ą su atitinkamomis spalvomis
    - dabartinis spėjimas pereina į sekančią eilutę
    - klaviatūros raidės atsinaujina (pridedamos atitinkamos spalvos) 
3. žaidimo pabaiga:
    - kai spėjimas visiškai sutampa su spėjamu žodžiu
        - parodome modal'ą su sveikinimu
    - kai nesėkmingai išnaudoti visi galimi spėjimai
        - parodome modal'ą su rezultatu
*/