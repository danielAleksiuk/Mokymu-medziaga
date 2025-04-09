const VisosPrekes = (props) => {
    let prekes = props.data;

    return (
        <div>
            <h2>Turimos Prekes:</h2>
            {
                prekes.length > 0 && (
                    <div>
                        {
                            prekes.map(preke => {
                                return (
                                    <div key={preke.id}>
                                        <h4>{preke.pavadinimas}</h4>
                                        <p>kiekis: {preke.kiekis}, kaina: <strong>
                                            {preke.kaina}</strong></p>
                                        <hr/>
                                    </div>
                                )
                            })
                        }
                    </div>
                )
            }
            {
                prekes.length === 0 && (
                    <p>prekiu nera</p>
                )
            }
        </div>
    )
}

export default VisosPrekes;