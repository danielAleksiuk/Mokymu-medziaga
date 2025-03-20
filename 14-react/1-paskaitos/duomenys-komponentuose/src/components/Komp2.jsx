const Komp2 = () => {
    let pazymiai = [10, 8, 7, 5,8, 10];

    const pazymiuVidurkis = (masyvas) => {
        let suma = 0;
        masyvas.forEach(element =>  suma += element);

        return suma / masyvas.length;
    }

    return (
        <div>
           <h2>Komp2</h2>
           <p>{ pazymiai.join('-')}</p>
           <p>{ pazymiai[2] } </p>
           <p>pazymiu skaicius yra: {pazymiai.length} </p>
           <p>pazymiu vidurkis yra: {pazymiuVidurkis(pazymiai)}</p>
        </div>
    )
};

export default Komp2;