import useWindowSize from "../hooks/useWindowSize";

const Komp2 = () => {
    const displaySize = useWindowSize();

    return (
        <div>
            <h3>ekrano dydzio pvz</h3>
            <p>
                height: {displaySize.height} px
            </p>
            <p>
                width: {displaySize.width} px
            </p>
        </div>
    )
};

export default Komp2;