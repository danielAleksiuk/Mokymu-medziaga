import Studentas from "./Studentas";

const Grupe = () => {
    let studentas = {
        vardas: 'Jonas',
        pavarde: 'Jonaitis',
        amzius: 25,
        pazymiai: [1,2,3]
    };

    return (
        <div>
            <h2>grupe</h2>
            <Studentas studentas={studentas}/>
        </div>
    );
}



export default Grupe;