
import { useState } from "react";

const useFetch = (url, timeout) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(null);

    // useEffect(() => {
    //     setTimeout(() => {
    //         fetch(url)
    //             .then((res) => res.json())
    //             .then((data) => {
    //                 setData(data)
    //                 setLoading(false);
    //             });
    //     }, timeout)
        
    // }, [url]);

    const makeApiCall = () => {
        setLoading(true);
        setTimeout(() => {
            fetch(url)
                .then((res) => res.json())
                .then((data) => {
                    setData(data)
                    setLoading(false);
                });
        }, timeout)
    }

    return { data, loading, makeApiCall };
}

export default useFetch;