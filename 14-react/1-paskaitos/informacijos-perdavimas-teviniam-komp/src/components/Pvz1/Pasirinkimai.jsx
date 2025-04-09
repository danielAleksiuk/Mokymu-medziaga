import Mygtukai from "./Mygtukai";

const Pasirinkimai = () => {

    const apdorotiVaikoReiksme = (atejusiInfo) => {
        console.log('duomenys is vaik komponento yra: ' + atejusiInfo);
    }

    const apdorotiDeleteMeMygtuka = (info) => {
        console.log(info);
        console.log('tevo delete me veiksmas')
    }

    const apdorotiRandomButton = (data) => {
        console.log('laukti tiek ms: ' + data);
        setTimeout(()=> {
            console.log('laikas baigesi')
        }, data)
    }

    return (
        <div>
            <h2>Pasirinkimai</h2>
            <Mygtukai
                buttonText="click me"
                tevoKomponentoFunkcija={apdorotiVaikoReiksme}/>
            <Mygtukai
                buttonText="add me"
                tevoKomponentoFunkcija={apdorotiVaikoReiksme}/>
            <Mygtukai
                buttonText="delete me"
                tevoKomponentoFunkcija={apdorotiDeleteMeMygtuka}/>
            <Mygtukai
                buttonText="start timer"
                tevoKomponentoFunkcija={apdorotiRandomButton}/>
        </div>
    )
}

export default Pasirinkimai;