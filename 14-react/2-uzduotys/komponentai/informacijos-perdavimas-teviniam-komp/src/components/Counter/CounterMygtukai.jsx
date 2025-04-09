const CounterMygtukai = (props) => {

    const onButtonClick = (value) => {
        props.addValue(value)
    }

    return (
        <div>
            <h3>mygtukai</h3>
            {/* <button onClick={() => onButtonClick(1)}>+1</button>
            <button onClick={() => onButtonClick(2)}>+2</button>
            <button onClick={() => onButtonClick(5)}>+5</button> */}
        </div>
    )
}

export default CounterMygtukai;