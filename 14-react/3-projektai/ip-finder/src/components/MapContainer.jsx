import Map , { Marker}  from 'react-map-gl/mapbox';
import 'mapbox-gl/dist/mapbox-gl.css';
import { useState } from "react";
import { useEffect } from "react";
import { MAP_API_KEY } from "../utils/constants";

const MapContainer = (props) => {
    const [viewPort, setViewPort] = useState({
        latitude: props.latitude,
        longitude: props.longitude,
        zoom: 5,
        width: '100%',
        height: '100%'
    });

    useEffect(() => {
        const tmpViewport = {...viewPort};
        tmpViewport.latitude = props.latitude;
        tmpViewport.longitude = props.longitude;
        tmpViewport.zoom = 14;
    
        setViewPort(tmpViewport);
    }, [props])

    return (
        <>
           <Map
                mapboxAccessToken={MAP_API_KEY}
                {...viewPort}
                mapStyle="mapbox://styles/mapbox/streets-v9"
                onViewportChange={(viewPort) => setViewPort(viewPort)}>
                    {/* MARKER */}
            </Map>
        </>
    )
};

export default MapContainer;