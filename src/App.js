import React from "react";
import NavbarPage from "./port-components/Navbar";
import ReviewPage from "./port-components/Reviews";
import HomePage from "./port-components/Home";
import FooterPage from "./port-components/Footer";
import ContactPage from "./port-components/Contact";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoadingPage from "./port-components/Loading";
import ServicePage from "./port-components/Service";
import ProjectPage from "./port-components/Project";
const App = () => {
  return(
    <>
    <Router>
      <Routes>
      <Route path="/">
      <Route index element={<LoadingPage/>}/>
      <Route path="/Navbar" element={<NavbarPage/>}/>
      <Route path="/Home" element={<HomePage/>}/>
      <Route path="/Contact" element={<ContactPage/>}/>
      <Route path="/Reviews" element={<ReviewPage/>}/>
      <Route path="/Footer" element={<FooterPage/>}/>
      <Route path="/Service" element={<ServicePage/>}/>
      <Route path="/Project" element={<ProjectPage/>}/>
      <Route/>
      </Route>
      </Routes>
    </Router>
    </>
  )
};

export default App;
