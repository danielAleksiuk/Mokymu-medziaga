import { useState } from "react";
import ProgramavimoKalba from "./ProgramavimoKalba";

const Renkames = () => {
    const [kalba, setKalba] = useState('nepasirinkta');

    const gautaKalba = (kalba) => {
        setKalba(kalba);
    } 

    const kalbosIvertinimas = () =>{
        switch(kalba) {
            case 'Javascript': 
                return 'panasu, kad moki react';
            case 'PHP':
                return 'tiketina moki symfony';
            case 'C#': 
                return 'manau, megsti MS produktus'
            default:
                return 'nepasirinkai kalbos, negaliu ivertinti'
        }

    }

    return (
        <div>
            <h2>renkames kalba</h2>
            <p>Jus pasirinkote kalba: <strong>{kalba}</strong></p>
            <ProgramavimoKalba
                kalbosPasirinkimas={gautaKalba}/>
            
            <p>{kalbosIvertinimas()}</p>
        </div>
    )
}

export default Renkames;