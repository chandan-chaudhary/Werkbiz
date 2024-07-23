import React, {useRef} from 'react'
import {BrowserRouter, Routes, Route} from "react-router-dom";

// COMPONENTS
import ConnectUs from "./components/form/ConnectUs.tsx";
import Home from "./components/landingPage/Home.tsx";
import Header from "./components/navigation/Header.tsx";
import EduWerkz from "./components/products/EduWerkz.tsx";
import OfiWerkz from "./components/products/OfiWerkz.tsx";
import HR_management from "./components/services/HR_management.tsx";
import Software_Solution from "./components/services/Software_Solution.tsx";
import SalesMarketing from "./components/services/Sales_Marketing.tsx";
import OurMotive from "./components/landingPage/OurMotive.tsx";
import ServicesWorldwide from "./components/landingPage/ServicesWorldwide.tsx";
import Footer from "./components/footer/Footer.tsx";
import WerkbizEnterprise from "./components/landingPage/WerkbizEnterprise.tsx";

const  App :React.FC = () => {
    // const ourCreedUsRef = useRef<HTMLDivElement | null>(null);
    // const ourPresenceRef = useRef<HTMLAnchorElement>(null);
    const aboutUsRef = useRef<HTMLDivElement >(null);

  return (
      <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/"  element={<Home />} />
            <Route path={'/eduWerkz'} element={<EduWerkz />} />
            <Route path={'/ofiWerkz'} element={<OfiWerkz />} />
            <Route path={'/hr-management'} element={<HR_management />} />
            <Route path={'/software-solution'} element={<Software_Solution />} />
            <Route path={'/sales-marketing'} element={<SalesMarketing />} />
            <Route path='/connect-us' element={<ConnectUs />} />
            <Route path={'/about-us'} element={<WerkbizEnterprise ref={aboutUsRef}/>} />
            <Route path={'/our-creed'} element={<OurMotive />} />
            <Route path={'/our-presence'} element={<ServicesWorldwide />} />
          </Routes>
          <Footer  />
          {/* ref={aboutUsRef}  */}

      </BrowserRouter>
  )
}

export default App;
