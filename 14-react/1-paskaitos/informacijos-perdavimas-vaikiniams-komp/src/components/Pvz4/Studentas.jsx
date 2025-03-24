import Anukas from "./Anukas";

const Studentas = (props) => {
    console.log(props);


    return (
        <div>
            <h4>{props.studentas.vardas} {props.studentas.pavarde}</h4>
            <p>yra {props.studentas.amzius} m. amziaus</p>
       
                <Anukas anukas="studentoVaikas" stud={props.studentas}/>
       

        </div>
    )
};

export default Studentas;