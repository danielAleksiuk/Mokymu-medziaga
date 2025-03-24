import Diena from './Diena';
const Savaite = () => {
    let temperaturos = [14, 16, 15, 17, 20, 30, -25];

    return (
        <div>
            savaite
            {
                temperaturos.map((temperatura, i) => 
                    <Diena key={i} temp={temperatura}/>
                )
            }
        </div>
    )
};

export default Savaite;