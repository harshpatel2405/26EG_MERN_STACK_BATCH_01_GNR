import React from "react";
import ComponentDemo1 from "./components/ComponentDemo1";
import ComponentDemo2 from "./components/ComponentDemo2";
import ComponentDemo3 from "./components/ComponentDemo3";
import MapDemo1 from "./components/map/MapDemo1";
import MapDemo2 from "./components/map/MapDemo2";
import MapDemo3 from "./components/map/MapDemo3";
import MapDemo4 from "./components/map/MapDemo4";
import MapDemo5 from "./components/map/MapDemo5";
import MapDemo6 from "./components/map/MapDemo6";
import CrDemo1 from "./components/Conditional Rendering/CrDemo1";
import CrDemo2 from "./components/Conditional Rendering/CrDemo2";
import CrDemo3 from "./components/Conditional Rendering/CrDemo3";
import DemoNavbar from "./components/Conditional Rendering/DemoNavbar";
import NotificationCR from "./components/Conditional Rendering/NotificationCR";
import { Route, Routes } from "react-router-dom";
import RoutingDemo1 from "./components/Routing/RoutingDemo1";
import Navbar from "./components/Routing/Navbar";
import Home from "./components/Routing/Home";
import Contact from "./components/Routing/Contact";


const App = () => {
  return (
    <div>
      {/* <h1>App Component called....</h1> */}
      {/* <ComponentDemo1></ComponentDemo1> */}
      {/* <ComponentDemo1 /> */}

      {/* <ComponentDemo2></ComponentDemo2> */}
      {/* <ComponentDemo3/> */}
    
      {/* <MapDemo1/> */}
      {/* <MapDemo2/> */}
      {/* <MapDemo3/> */}
    {/* <MapDemo4/> */}
    {/* <MapDemo5/> */}
    {/* <MapDemo6/> */}

    {/* <CrDemo1/> */}
    {/* <DemoNavbar/>
    <CrDemo2/>
    <CrDemo3/> */}

    {/* <NotificationCR/> */}

      <Navbar/>
    <Routes>
      <Route path="/routingDemo1" element={<RoutingDemo1/>}></Route>
      <Route path="/home" element={<Home/>}></Route>
      <Route path="/contact" element={<Contact/>}></Route>
    </Routes>
    </div>
  );
};

export default App;
