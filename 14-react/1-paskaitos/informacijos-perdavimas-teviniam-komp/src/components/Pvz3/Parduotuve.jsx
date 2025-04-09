import { useState } from "react";
import Pridejimas from "./Pridejimas";
import VisosPrekes from "./VisosPrekes";

const Parduotuove = () => {
    // const TEST_PREKES = [
    //     { id: 156, pavadinimas: 'knyga', kiekis: 5, kaina: 1059 },
    //     { id: 48, pavadinimas: 'vanduo', kiekis: 599, kaina: 1044 },
    //     { id: 1, pavadinimas: 'tv', kiekis: 50, kaina: 1667 },
    //     { id: 6, pavadinimas: 'lapas', kiekis: 7, kaina: 40 },
    //     { id: 100056, pavadinimas: 'pen', kiekis: 500, kaina: 17 },
    // ];
    const [prekes, setPrekes] = useState([]);

    const handlePrekesPridejimas = (newItem) => {
        console.log('PARDUOTUVE GAVO')
        console.log(newItem)
        setPrekes([...prekes, newItem])
    }

    return (
        <div>
            <h2>Parduotuve</h2>
            <Pridejimas
                pridetiPreke={handlePrekesPridejimas}/>
            <VisosPrekes data={prekes}/>
        </div>
    )
}

export default Parduotuove;