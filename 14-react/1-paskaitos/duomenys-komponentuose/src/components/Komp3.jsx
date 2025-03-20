const Komp3 = () => {
    let studentas = {
        vardas: 'Petras',
        amzius: 20,
        miestas: 'Vilnius',
        adresas: {
            gatve: 'Vilniaus',
            numeris: 1
        },
        bedarbis: false,
        pazymiai: [10, 5, 7, 8]
    };

    const ArBedarbis = (bedarbis) => {
        // 1 budas
        // if (bedarbis) {
        //     return 'Taip';
        // }

        // return 'Ne';

        // 2 budas
        return bedarbis ? 'Taip' : 'Ne';
    }

    return (
        <>
            <h2>Studento informacija:</h2>
            <p>
                Studento vardas: <strong>{studentas.vardas}</strong>,
                Amzius: {studentas.amzius}
            </p>

            <p>Ar bedarbis? { ArBedarbis(studentas.bedarbis) }</p>
            <p>
                Miestas: <strong>{studentas.miestas}</strong>,
                Gatve: <strong>{studentas.adresas.gatve} - {studentas.adresas.numeris}</strong>,

            </p>
            <p>Pazymiai: {studentas.pazymiai.join(';')}</p>
        </>
    )
};

export default Komp3;