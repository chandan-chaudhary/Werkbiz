import React from 'react'
import Header from './components/navigation/Header.tsx';
import LandingPage from "./components/landingPage/LandingPage.tsx";
import BrandPartners from "./components/landingPage/BrandPartners.tsx";
import WerkbizEnterprise from "./components/landingPage/WerkbizEnterprise.tsx";
import ServicesWorldwide from "./components/landingPage/ServicesWorldwide.tsx";
import PrivacyConcern from "./components/landingPage/PrivacyConcern.tsx";
import OurMotive from "./components/landingPage/OurMotive.tsx";
import Footer from "./components/footer/Footer.tsx";
import FormData from "./components/form/FormData.tsx";

const  App :React.FC = () => {
  return (
    <div className={'bg-white'}>
         <Header />
        <FormData />
        {/* <LandingPage />*/}
        {/* <BrandPartners />*/}
        {/*<WerkbizEnterprise />*/}
        {/*<ServicesWorldwide />*/}
        {/*<PrivacyConcern />*/}
        {/*<OurMotive />*/}
        {/*<Footer />*/}
    </div>
  )
}

export default App;
