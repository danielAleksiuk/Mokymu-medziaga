import Preke from './Preke';

const Parduotuve = () => {
    let prekes = [
        {id: 1, pavadinimas: 'obuoliai', kaina: 10, kiekis: 100},
        {id: 2, pavadinimas: 'kriausies', kaina: 1, kiekis: 1000},
        {id: 3, pavadinimas: 'agurkai', kaina: 100, kiekis: 10000}
    ]

    return (
        <div>
            <h1>Parduotuve</h1>

            {
                prekes.map((item) => 
                    <Preke
                        key={item.id}
                        pavadinimas={item.pavadinimas}
                        kaina={item.kaina}
                        kiekis={item.kiekis}/>
                    )
            }
        </div>
    )
};

export default Parduotuve;