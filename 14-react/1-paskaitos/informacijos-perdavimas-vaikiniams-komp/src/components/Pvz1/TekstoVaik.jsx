const TekstoVaik = (props) => {
    console.log(props)

    const patikrinimas = () => {
        if (props.tekstas && props.tekstas.split('').filter(r => r === 'a').length > 0) {
            return 'tekste yra "a" raide';
        } else {
            return 'tekste nera a raidziu'
        }
    }
    return (
        <div>
            <p>Gautas tekstas:
                {/* {
                    props.tekstas ?
                        <strong>    
                            ilgis: {props.tekstas.length} - 
                            reiksme: {props.tekstas}
                        </strong>
                    : ''
                } */}


                {
                    props.tekstas
                }
                {
                    props.tekstas?.length
                }
                <p>
                    {
                        patikrinimas()
                    }
                </p>
                
            </p>
        </div>
    )
};

export default TekstoVaik;