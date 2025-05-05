import { useEffect, useState } from 'react';
import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import JsonData from './data/data.json';
import Navigation from './components/navigation/Navigation';
import Header from './pages/header/Header';
import Features from './pages/features/Features';

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
            <Header 
              title={landingPageData.header.title}
              subtitle={landingPageData.header.subtitle}
              button={landingPageData.header.button}/>
            <Features
              title={landingPageData.features.title}
              featuresItems={landingPageData.features.featuresItems}/>
          </>
        )
      }
    </>
  )
}

export default App
