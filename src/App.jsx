import React, { useRef } from "react";
import Navbar from './components/Navbar'
import Home from './pages/home.jsx'
import About from './pages/about'
import Dates from './pages/dates'
import DelegateStats from './components/DelegateStats'
import Foot from './components/Foot'
// import InternationalCardsContainer from './components/InternationalCardsContainer'
import DeligatesCountries from './components/DeligatesCountries';
// import NationalCardComponent from './components/NationalCard'
import PersonList from './components/NationalCard.jsx'
import OrganizingAgenciesComp from './components/OrganizingAgenciesComp.jsx'
import Contact from './components/Contact.jsx'

const App = () => {
  const aboutRef = useRef(null);

  const handleScrollToAbout = () => {
    if (aboutRef.current) {
      aboutRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    
    <div>
      <Navbar onAboutClick={handleScrollToAbout} />
      <Home />
      <About ref={aboutRef} />
     <Dates />
     
     <DelegateStats/>
     <DeligatesCountries />
    <OrganizingAgenciesComp/>
    <Contact />
     <Foot/>
      </div>
  
  )
}

export default App