import { useEffect } from "react";

const Details = ({id, handleClose}) => {
    useEffect(() => {
        console.log(id);
    }, [id])

    return (
        <>
            details
        </>
    )
};

export default Details;