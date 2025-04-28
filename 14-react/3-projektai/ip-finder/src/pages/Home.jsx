import { useState } from "react";
import { useEffect } from "react";
import { GiAbstract005 } from "react-icons/gi";

// latitude: 54.6876
// longitude: 25.2806

const Home = () => {
    const [ipDetails, setIpDetails] = useState();
    
  useEffect(() => {
    fetch('https://ipapi.co/json/')
      .then(response => response.json())
      .then(data => {
        console.log(data);
        setIpDetails(data);
      })
  }, []);

    return (
        <div>
            <h1>IP address finder</h1>
            <p>What is my IP address?</p>
            <p>{ipDetails?.ip}</p>
            <p>location</p>
            <p>{ipDetails && ipDetails.country_name},{ipDetails?.region} </p>
            <p>internet provider</p>
            <p>{ipDetails?.org}</p>
        </div>
    )
};

export default Home;