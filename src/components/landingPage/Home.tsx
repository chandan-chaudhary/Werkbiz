

import React from 'react';

// *** COMPONENTS
import LandingPage from "./LandingPage.tsx";
import BrandPartners from "../brands/BrandPartners.tsx";
import WerkbizEnterprise from "./WerkbizEnterprise.tsx";
import ServicesWorldwide from "./ServicesWorldwide.tsx";
import PrivacyConcern from "./PrivacyConcern.tsx";
import OurMotive from "./OurMotive.tsx";
// import Footer from "../footer/Footer.tsx";



const Home:React.FC =()=>{
    // const ourCreedUsRef = useRef<HTMLDivElement>(null);
    // const ourPresenceRef = useRef<HTMLAnchorElement>(null);
    // const aboutUsRef = useRef<HTMLDivElement | null>(null);

    // const aboutUsRef = localStorage.getItem('aboutRef');
    // console.log(aboutUsRef)
    // const sectionref  =
    //     {ref:aboutUsRef},
    //     {ref:ourCreedUsRef},
    //     {ref: ourPresenceRef}
    // ]


    return(
       <div className={'bg-green'}>

            <LandingPage />
            <BrandPartners />
            <WerkbizEnterprise />
            <ServicesWorldwide />
            <PrivacyConcern />
            <OurMotive />
        </div>
    )
};
export default Home;