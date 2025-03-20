const Komp6 = () => {
    let skaiciai1 = [1, 5, 8, 78, 98];
    let skaiciai2 = [];
    let antraste = 'Masyvai su Skaiciais su if salyga:'

    return (
        <div>
            <h1>{antraste}</h1>
            <h3>skaiciai1 :</h3>
            {
                skaiciai1.length > 0 
                    ? <ul>{skaiciai1.map((skaicius, i) => <li key={i}>{skaicius}</li>)}</ul>
                    : <p>masyvas 'skaiciai1' tuscias</p>
            }
        </div>
    )
};

export default Komp6;


// skaicius - lyginis arba nelyginis


// salyga 
//     ? veiksmas arba reiksme kada true
//     : veiksmas arba reiksme kada false
