import React from 'react'
import {BrowserRouter, Routes, Route} from "react-router-dom";
import ScrollToTop from './components/ScrollToTopView.tsx';
import ScrollToHashElement from "@cascadia-code/scroll-to-hash-element";

// COMPONENTS
import ConnectUs from "./components/form/ConnectUs.tsx";
import Home from "./components/landingPage/Home.tsx";
import Header from "./components/navigation/Header.tsx";
import EduWerkz from "./components/products/EduWerkz.tsx";
import OfiWerkz from "./components/products/OfiWerkz.tsx";
import HR_management from "./components/services/HR_management.tsx";
import Software_Solution from "./components/services/Software_Solution.tsx";
import SalesMarketing from "./components/services/Sales_Marketing.tsx";
import Footer from "./components/footer/Footer.tsx";

const  App :React.FC = () => {

  return (
      <BrowserRouter>
        <ScrollToTop  />
       <ScrollToHashElement  behavior='smooth' inline='start' block="start"/>
          <Header />
          <Routes>
            <Route path="/"  element={<Home />} />
            <Route path={'/eduWerkz'} element={<EduWerkz />} />
            <Route path={'/ofiWerkz'} element={<OfiWerkz />} />
            <Route path={'/hr-management'} element={<HR_management />} />
            <Route path={'/digital-edge'} element={<Software_Solution />} />
            <Route path={'/sales-marketing'} element={<SalesMarketing />} />
            <Route path='/connect-us' element={<ConnectUs />} />
          </Routes>
          <Footer />

      </BrowserRouter>
  )
}

export default App;
