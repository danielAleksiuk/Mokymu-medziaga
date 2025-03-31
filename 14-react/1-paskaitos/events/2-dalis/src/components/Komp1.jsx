const Komp1 = () => {
    const tekstoHandler = (event) => {
        // console.log(event);
        // console.log(event.target);
        // console.log(event.target.value);
        let tekstas = event.target.value;

        if ( tekstas.length > 6) {
            console.log('tekstas didejaaaaa')
        }
    }


    return (
        <div>
            <h2>komp1</h2>
            <input type="text" onInput={tekstoHandler}/>
        </div>
    )
}

export default Komp1;



// const Komp1 = () => {
//     return (
//         <div>
//             komp1
//         </div>
//     )
// }

// export default Komp1;