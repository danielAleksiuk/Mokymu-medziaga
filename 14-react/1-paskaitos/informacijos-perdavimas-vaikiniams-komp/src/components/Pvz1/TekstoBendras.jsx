import TekstoVaik from "./TekstoVaik";

const TekstoBendras = () => {
    let manoKintamasis = 'tekstas is kintamojo';
    let tekstai = [
        'labas',
        'labas labas',
        '',
        '',
        '',
        'labas labas labas',
        'labas labas labas labas',
        'labas labas labas labas labas',
    ];

    return (
        <div>
            Teksto dalykai
            <div>
                <TekstoVaik tekstas="labas"/>
                <TekstoVaik tekstas="antras vaikas"/>
                <TekstoVaik tekstas="dar vienas vaikas su tekstu"/>
                <TekstoVaik tekstas="lorem lorem lorem"/>
                <TekstoVaik tekstas={manoKintamasis}/>
                <TekstoVaik />

                {
                    tekstai.map((item, key) => <TekstoVaik key={key} tekstas={item}/>)
                }
            </div>
        </div>
    )
};
export default TekstoBendras;