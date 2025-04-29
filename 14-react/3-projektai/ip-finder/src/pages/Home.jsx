import { useState } from "react";
import { useEffect } from "react";
import './Home.css';
import MapContainer from "../components/MapContainer";
import LabelWithTitle from "../components/LabelWithTitle";
import useFetch from "../hooks/useFetch";


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
  const {data, loading, makeApiCall} = useFetch('https://ipapi.co/json/');

  useEffect(() => {
      const getIpData = async () => {
        await makeApiCall();  
      }
      
      getIpData();
  }, []);

  useEffect(() => {
    if (data) {
      const {ip, city, org, country_name, latitude, longitude } = data;
      setCoordinates({latitude, longitude});
      setIpDetails({ip, city, org, country_name});
    }
  }, [data])

    return (
      <>
        { 
          loading && (
            <>
              <LabelWithTitle 
                title='Data is loading'
                type="primary"
                align="center"
              />
              <div className="loader"></div>
            </>
          )
        }
        {
          !loading && (
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
        }
       
      </>
    )
};

export default Home;