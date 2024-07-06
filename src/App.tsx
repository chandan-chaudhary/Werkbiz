import React from 'react'

import FormData from "./components/form/FormData.tsx";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./components/landingPage/Home.tsx";
import Header from "./components/navigation/Header.tsx";
import ERP from "./components/products/ERP.tsx";
import U_chat from "./components/products/U_chat.tsx";
import WorkFolio from "./components/products/WorkFolio.tsx";

const  App :React.FC = () => {
  return (
      <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/"  element={<Home />} />
            <Route path={'/erp'} element={<ERP />} />
            <Route path={'/u-chat'} element={<U_chat />} />
              <Route path={'/workfolio'} element={<WorkFolio />} />
            <Route path='/contact-us' element={<FormData />} />
          </Routes>
      </BrowserRouter>
  )
}

export default App;
