import { useEffect, useState } from 'react';
import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import JsonData from './data/data.json';
import Navigation from './components/navigation/Navigation';
import Header from './pages/header/Header';
import Features from './pages/features/Features';
import About from './pages/about/About';
import OurServices from './pages/services/OurServices';
import Gallery from './pages/gallery/Gallery';
import Contacts from './pages/contacts/Contacts';

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
            <About
              title={landingPageData.about.title}
              description={landingPageData.about.description}
              whyChoouseUsTitle={landingPageData.about.whyChoouseUsTitle}
              whyChoouseUsItems={landingPageData.about.whyChoouseUsItems}/>
            <OurServices
              title={landingPageData.services.title}
              subtitle={landingPageData.services.description} servicesItems={landingPageData.services.serviceItems}/>
            <Gallery
              title={landingPageData.gallery.title}
              description={landingPageData.gallery.description}
              images={landingPageData.gallery.images}/>
            <Contacts
              title={landingPageData.contacts.title}
              description={landingPageData.contacts.description}
              contactInfoTitle={landingPageData.contacts.contactInfoTitle}
              contactInfoItems={landingPageData.contacts.contactInfoItems}
              form={landingPageData.contacts.form}
              socialIcons={landingPageData.contacts.socialIcons}
              />
          </>
        )
      }
    </>
  )
}

export default App
