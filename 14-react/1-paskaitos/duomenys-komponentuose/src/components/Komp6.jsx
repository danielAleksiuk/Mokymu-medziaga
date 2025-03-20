const Komp6 = () => {
    let skaiciai1 = [1, 5, 8, 78, 98];
    let skaiciai2 = [];
    let antraste = 'Masyvai su Skaiciais su if salyga:'
    let arPrisijunges = false;

    return (
        <div>
            <h1>{antraste}</h1>
            <h3>skaiciai1 :</h3>
            {
                skaiciai1.length > 0 
                    ? <ul>{skaiciai1.map((skaicius, i) => 
                        <li key={i}>
                            {skaicius} - { skaicius % 2 === 0 ? 'lyginis' : 'nelyginis'}
                        </li>)}
                    </ul>
                    : <p>masyvas 'skaiciai1' tuscias</p>
            }

            <h3>skaiciai2 :</h3>

            {
                skaiciai2.length > 0 
                    ? <ul>{skaiciai2.map((skaicius, i) => 
                        <li key={i}>
                            {skaicius}
                        </li>)}
                    </ul>
                    : <p>masyvas 'skaiciai2' tuscias</p>
            }

            <h3>ar prisijunges?</h3>
             {
                arPrisijunges ? 'taip' : 'prisijunk'
             }
        </div>
    )
};

export default Komp6;


// skaicius - lyginis arba nelyginis


// salyga 
//     ? veiksmas arba reiksme kada true
//     : veiksmas arba reiksme kada false
