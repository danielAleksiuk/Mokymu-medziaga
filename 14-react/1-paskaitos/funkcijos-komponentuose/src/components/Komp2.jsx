import {averageArray} from '../utils/calculator';

const Komp2 = () => {
    let skaiciai = [
        10, 
        120,
        2,
        45
    ];

    const didziausiasSk = (mas) => {
        //  ciklas  begam per masyva ir ieskom didziausia
        return Math.max(...mas)
    };

    const maziausiasSk = (mas) => {
        return Math.min(...mas);
    }


    return (
        <div>
            komp2
            <p>{skaiciai.join(',')}</p>
            <p>didziausias skaicius yra: <strong>{didziausiasSk(skaiciai)}</strong></p>
            <p>maziausias skaicius yra: <strong>{maziausiasSk(skaiciai)}</strong></p>
            <p>vidurkis yra: {averageArray(skaiciai)}</p>
        </div>
    )
};


export default Komp2;