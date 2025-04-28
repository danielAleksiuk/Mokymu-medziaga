import { useState } from "react";
import { useEffect } from "react";
import { MAP_API_KEY } from "../utils/constants";

import './Home.css';

import Map, {Marker}  from 'react-map-gl/mapbox';
import 'mapbox-gl/dist/mapbox-gl.css';
// latitude: 54.6876
// longitude: 25.2806

const Home = () => {
    const [ipDetails, setIpDetails] = useState();
    const [coordinates, setCoordinates] = useState({
      latitude: 55.261909,
      longitude: 24.034855
    });
    const [viewPort, setViewPort] = useState({
      latitude: coordinates.latitude,
      longitude: coordinates.longitude,
      zoom: 5,
      width: '100%',
      height: '100%'
    });

    // const [lat, setLat] = useState();
    // const [lon, setLon] = useState();
    
  useEffect(() => {
    fetch('https://ipapi.co/json/')
      .then(response => response.json())
      .then(data => {
        console.log(data);
        setIpDetails(data);
        setCoordinates({
          latitude: data.latitude,
          longitude: data.longitude
        });

        // setLat(data.latitude);
        // setLon(data.longitude)
      })
  }, []);

  useEffect(() => {
    console.log('coordinates is here')
    console.log(coordinates)
  }, [coordinates])

    return (
        <div>
            <h1>IP address finder</h1>
            <p>What is my IP address?</p>
            <p>{ipDetails?.ip}</p>
            <p>location</p>
            <p>{ipDetails && ipDetails.country_name},{ipDetails?.region} </p>
            <p>internet provider</p>
            <p>{ipDetails?.org}</p>

            <div className="mapContainer">
                <Map
                  mapboxAccessToken={MAP_API_KEY}
                  {...viewPort}
                  mapStyle="mapbox://styles/mapbox/streets-v9">

                </Map>
            </div>
        </div>
    )
};

export default Home;