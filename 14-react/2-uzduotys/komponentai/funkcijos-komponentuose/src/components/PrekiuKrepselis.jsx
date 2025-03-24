const PrekiuKrepselis = () => {
    const prekes = [
        { id: 1, pavadinimas: "Saldytuvas", kaina: 800, kiekis: 3, nuolaida: 20 },
        { id: 2, pavadinimas: "TV", kaina: 1820, kiekis: 7, nuolaida: 33 },
        { id: 3, pavadinimas: "Telefonas", kaina: 1200, kiekis: 4, nuolaida: 30 },
        { id: 4, pavadinimas: "Svarstykles", kaina: 25, kiekis: 2, nuolaida: 2 }
    ];

    const prekiuLentele = (items) => {
        return (
            <table border="1">
                 <thead>
                     <tr>
                        <th>ID</th>
                        <th>Pavadinimas</th>
                        <th>Kaina Eu</th>
                        <th>Kiekis</th>
                        <th>Nuolaida %</th>
                     </tr>
                 </thead>
                 <tbody>
                       
                        {items.map(item => (
                         <tr key={item.id}>
                            <td>{item.id}</td> 
                            <td>{item.pavadinimas}</td>
                            <td>{item.kaina}</td>
                            <td>{item.kiekis}</td>
                            <td>{item.nuolaida}</td>
                       </tr>
                        ))}
                        </tbody>
            </table>
        );
    };

    const kainaSuNuolaida = (array) => {
        return array.reduce((suma, preke) => {
            const nuolaidaVienam = preke.kaina * (preke.nuolaida / 100);
            return suma + nuolaidaVienam * preke.kiekis;
        }, 0);
    }

    const krepselioKaina = () => {
        let suma = 0;
        for (const preke of prekes) {
            suma += (preke.kaina * preke.kiekis - preke.nuolaida);
        }
        return suma;
    };

    const atrinktiPagalKaina = (riba) => {
        return prekes.filter(preke => preke.kaina > riba) 
              ;
    };

    return (
        <div>
            <h1>Prekiu Krepselis:</h1>

            {prekiuLentele(prekes)}

            <div>
                {kainaSuNuolaida(prekes)}
            </div>
        
            <div>
                {krepselioKaina()}
            </div>
      
            <div>
                { prekiuLentele(atrinktiPagalKaina(500)) }
            </div>
        </div>
    )
};

export default PrekiuKrepselis;