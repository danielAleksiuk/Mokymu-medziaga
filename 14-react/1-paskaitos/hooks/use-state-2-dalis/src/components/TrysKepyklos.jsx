import { useState } from "react"

const TrysKepyklos = () => {

    const [dienos, setDienos] = useState('')
    const [kepyklos, setKepyklos] = useState([
        {   
            id: 0,
            pavadinimas: 'kepyklaVienas',
            klientoPavadinimas: 'Pirma kepykla',
            reiksme: 0
        }, 
        {
            id: 1,
            pavadinimas: 'kepyklaDu',
            klientoPavadinimas: 'antra kepykla',
            reiksme: 0
        }, 
        {
            id: 2,
            pavadinimas: 'kepyklaTrys',
            klientoPavadinimas: 'Trecia kepykla',
            reiksme: 0
        }, 
    ]);

    const dienosHandler = (e) => {
        setDienos(e.target.value)
    }

    const kepyklaHandler = (event, id) => {
        setKepyklos(
            kepyklos.map((kepykla) => {
                return kepykla.id === id 
                    ? {
                        id: kepykla.id,
                        pavadinimas: kepykla.pavadinimas,
                        klientoPavadinimas: kepykla.klientoPavadinimas,
                        reiksme: event.target.value
                    }
                    : kepykla;
            }
        ));
        // const newValue = kepyklos[id];
        // newValue.reiksme = event.target.value;

        // kepyklos.splice(id, 1);
        // kepyklos.splice(id, 1, newValue);
        
        // setKepyklos([...kepyklos]);
    }

    const resetHandler = () => {
        setKepyklos(
            kepyklos.map((kepykla) => {
                return  {
                        id: kepykla.id,
                        pavadinimas: kepykla.pavadinimas,
                        klientoPavadinimas: kepykla.klientoPavadinimas,
                        reiksme: 0
                    }
            }
        ));
    }

    const uzsakymuVykdymas = () => {
        let pajegus = 0;
        kepyklos.forEach(kepykla => pajegus += Number(kepykla.reiksme));
        const skirtumas = pajegus - dienos
        if (skirtumas >= 0) {
            return 'Kepyklos uzsakymus padarys, uzsakinekit daugiau'
        } else {
            return `truksta jegu, truks ${Math.abs(skirtumas)} kepiniu`
        }
    }

    return (
        <div>
          <h2>Kepyklų užsakymų vertinimas</h2>
      
          <label htmlFor="dienosUzsakymai">Uzsakymu kiekis</label>
          <input onChange={dienosHandler} type="number" id="dienosUzsakymai" />
      
          {/* <label htmlFor="kepyklaVienas">Pirma kepykla :</label>
          <input onChange={pirmaHandler} type="number" id="kepyklaVienas"/>
      
          <label htmlFor="kepyklaDu">Antra kepykla:</label>
          <input onChange={antraHandler} type="number" id="kepyklaDu"/>
      
          <label htmlFor="kepyklaTrys">Trecia kepykla:</label>
          <input onChange={treciaHandler} type="number" id="kepyklaTrys"/> */}

          {
            kepyklos.map((kepykla, index) => {
                return (
                    <div key={index}>
                        <p>{kepykla.reiksme}</p>
                        <label htmlFor={kepykla.pavadinimas}>{kepykla.klientoPavadinimas}:</label>
                        <input onChange={(event) => kepyklaHandler(event, kepykla.id)} type="number" id={kepykla.pavadinimas}/>
        
                    </div>
                )
            })
          }
      
          <p>{uzsakymuVykdymas()}</p>
          <p>
            <button onClick={resetHandler}>reset</button>
          </p>
        </div>
      );
      
}

export default TrysKepyklos