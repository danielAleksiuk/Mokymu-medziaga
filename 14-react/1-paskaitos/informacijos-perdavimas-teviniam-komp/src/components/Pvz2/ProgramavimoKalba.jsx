const ProgramavimoKalba = (props) => {

    const onClick = (language) => {
        props.kalbosPasirinkimas(language)
    }

    return (
        <div>
            <button onClick={() => onClick('Javascript')}>Javascript</button>
            <button onClick={() => onClick('PHP')}>PHP</button>
            <button onClick={() => onClick('C#')}>C#</button>
            <button onClick={() => onClick('nePasirinkta')}>nePasirinkta</button>
        </div>
    )
}

export default ProgramavimoKalba;
