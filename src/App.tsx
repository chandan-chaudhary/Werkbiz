import React from 'react'

import FormData from "./components/form/FormData.tsx";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./components/landingPage/Home.tsx";
import Header from "./components/navigation/Header.tsx";

const  App :React.FC = () => {
  return (
      <BrowserRouter>
          <Header />
          <Routes>
                <Route path="/"  element={<Home />} />
              <Route path='/contact-us' element={<FormData />} />
          </Routes>
      </BrowserRouter>
  )
}

export default App;
