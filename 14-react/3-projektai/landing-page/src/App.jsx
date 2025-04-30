import { useEffect, useState } from 'react';
import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import JsonData from './data/data.json';
import Navigation from './components/navigation/Navigation';

function App() {
  const [landingPageData, setLandingPageData] = useState(null);

  useEffect(() => {
    setLandingPageData(JsonData);
  }, [])


  return (
    <>
      {
        landingPageData && (
          <>
            <Navigation 
              title={landingPageData.navigation.title}
              navItems={landingPageData.navigation.navigationItems}
            />
          </>
        )
      }
    </>
  )
}

export default App
