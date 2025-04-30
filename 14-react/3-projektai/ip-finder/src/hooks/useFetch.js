
import { useState } from "react";

const useFetch = (url, timeout = 1000) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(null);

     const makeApiCall = async () => {
        setLoading(true);
        setTimeout(async () => {
            await fetch(url)
                .then((res) => res.json())
                .then((data) => {
                    setData(data)
                })
                .catch(() => {
                    setData({
                        ip: '78.60.184.222',
                        city: 'Random city',
                        org: 'TEO',
                        country_name: 'Random Country',
                        latitude: 19.932344,
                        longitude: 78.254511
                      }
                    );
                })
                .finally(() => setLoading(false));
        }, timeout)
    }

    return { data, loading, makeApiCall };
}

export default useFetch;