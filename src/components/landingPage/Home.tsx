

import React from 'react';
import LandingPage from "./LandingPage.tsx";
import BrandPartners from "./BrandPartners.tsx";
import WerkbizEnterprise from "./WerkbizEnterprise.tsx";
import ServicesWorldwide from "./ServicesWorldwide.tsx";
import PrivacyConcern from "./PrivacyConcern.tsx";
import OurMotive from "./OurMotive.tsx";
import Footer from "../footer/Footer.tsx";

const Home:React.FC =()=>{
    return(
       <div className={'bg-white'}>
            <LandingPage />
            <BrandPartners />
            <WerkbizEnterprise />
            <ServicesWorldwide />
            <PrivacyConcern />
            <OurMotive />
            <Footer />
        </div>
    )
};
export default Home;