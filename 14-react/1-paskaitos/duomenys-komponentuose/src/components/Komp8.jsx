const Komp8 = () => {
    let antraste = 'Prekiu sarasas';
    let prekes = [
        {id: 1, pavadinimas: 'tusinukas', kaina: 2.55, kiekis: 233},
        {id: 2, pavadinimas: 'pienas', kaina: 200.55, kiekis: 23},
        {id: 3, pavadinimas: 'duona', kaina: 9.55, kiekis: 33},
        {id: 4, pavadinimas: 'vanduo', kaina: 70.55, kiekis: 3},
        {id: 5, pavadinimas: 'popierius', kaina: 4.55, kiekis: 74}
    ]

    return (
        <div>
            <h1>{antraste}</h1>
            {
                prekes.length > 0 
                ? prekes.map((preke) => {
                    return (
                        <div key={preke.id}>
                            <h4>{preke.pavadinimas}</h4>
                            <p>Kaina: {preke.kaina}, Kiekis: {preke.kiekis}</p>
                        </div>
                    )
                })
                : <p>prekiu nera</p>
            }

        </div>
    )
};

export default Komp8;