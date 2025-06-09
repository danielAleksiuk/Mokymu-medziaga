
import './App.css'
import { CSVWriter } from './csvWriter'

function App() {
  const writer = new CSVWriter(['id','suma', 'gavejas', 'paskirtis']);
  writer.pridetEilute([
    {id: 1, suma: 1, gavejas: 'vienetas', paskirtis: 'vienetui'},
    {id: 2, suma: 2, gavejas: 'vienetas', paskirtis: 'vienetui'},
  ]);

   writer.save('mano-pirmas-ts-csv-failiukas.csv'); 
  return (
    <>
 
    </>
  )
}

export default App
