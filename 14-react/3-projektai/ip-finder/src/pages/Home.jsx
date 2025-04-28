import { useState } from "react";
import { useEffect } from "react";
import './Home.css';
import MapContainer from "../components/MapContainer";
import LabelWithTitle from "../components/LabelWithTitle";


// latitude: 54.6876
// longitude: 25.2806

const Home = () => {
    const [ipDetails, setIpDetails] = useState({
      ip: null,
      city: null,
      org: null,
      country_name: null
    });
    const [coordinates, setCoordinates] = useState({
      latitude: 55.261909,
      longitude: 24.034855
    });
    
    // useFetch
    // api path

  useEffect(() => {
    fetch('https://ipapi.co/json/')
      .then(response => response.json())
      .then(data => {
        console.log(data);
        setIpDetails({
          ip: data.ip,
          city: data.region,
          org: data.org,
          country_name: data.country_name
        });
        setCoordinates({
          latitude: data.latitude,
          longitude: data.longitude
        });
      })
      .catch(() => {
        // fake data 
        setIpDetails({
          ip: '78.60.184.222',
          city: 'Random city',
          org: 'TEO',
          country_name: 'Random Country'
        });
        setCoordinates({
          latitude: 19.932344,
          longitude: 78.254511
        });
      })
  }, []);

 

    return (
      <>
        <LabelWithTitle 
          title='IP address finder'
          type="primary"
          align="center"
        />

        <LabelWithTitle 
          title='What is my IP address?'
          type="secondary"
          body={ipDetails.ip}
          align="left"
        />
        
        <LabelWithTitle
          title='Location'
          type="default"
          body={ `${ipDetails.country_name}, ${ipDetails.city}` }
          align="left"
        />

        <LabelWithTitle 
          title='Internet provider'
          type="default"
          body={ipDetails.org}
          align="right"
        />

        <div className="mapContainer">
          <MapContainer
            latitude={coordinates.latitude}
            longitude={coordinates.longitude}/>
        </div>
      </>
    )
};

export default Home;