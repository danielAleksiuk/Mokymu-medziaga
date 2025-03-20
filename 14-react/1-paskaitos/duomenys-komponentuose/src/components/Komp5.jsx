const Komp5 = () => {
    let automobiliai = [
        'Audi',
        'Bmw',
        'Volvo',
        'VW',
        'Mazda',
        'Toyota'
    ];
    let title = 'Mano automobiliai:';


    return (
        <div>
            <h1>{title}</h1>
            <ul>
            { automobiliai.map((automobilis, index) => <li key={index}>{automobilis}</li>) }
            </ul>
            
        </div>
    )
};

export default Komp5;