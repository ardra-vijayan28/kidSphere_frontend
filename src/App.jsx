// // import React from "react";
// import { BrowserRouter, Routes, Route } from 'react-router'
// import './index.css'
// import Login from './components/login/Login'
// import Dashboard from './components/dashboard/Dashboard'
// import Indoor from './components/play_areas/Indoor'
// function App() {
//   return(
//     <>
//       <BrowserRouter>
//       <Routes>
//         <Route path='/'element={<Login/>}></Route>
//         <Route path='dashboard' element={<Dashboard/>}>
//         {/* <Route path='/indoor'element={<Indoor/>}></Route> */}
//         </Route>
//         <Route path='/indoor'element={<Indoor/>}></Route>
//         </Routes>
//         </BrowserRouter>
//     </>

//   )
// // 

// export default App
import './index.css'
import { BrowserRouter, Routes, Route } from "react-router";
import Login from "./components/login/Login";
import Dashboard from "./components/dashboard/Dashboard";
import Indoor from "./components/play_areas/Indoor";
import Outdoor from "./components/play_areas/Outdoor";
import WaterPark from "./components/play_areas/WaterPark";
import AdventurePark from "./components/play_areas/AdventurePark";
import Layout from "./components/layout/Layout";
import Chart2 from './components/chart/Chart2';
import Create_Playarea from './components/play_areas/Create_Playarea';
import ListOfPlayAreas from './components/play_areas/ListOfPlayAreas';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Login Page without Sidebar */}
        <Route path="/" element={<Login />} />

        {/* Routes with Sidebar */}
        <Route element={<Layout />}>
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="indoor" element={<Indoor />} />
          <Route path="outdoor" element={<Outdoor />} />
          <Route path="waterpark" element={<WaterPark />} />
          <Route path="adventurepark" element={<AdventurePark />} />
          <Route path="chart" element={<Chart2/>} />
          <Route path="create" element={<Create_Playarea/>} />
          <Route path="listofplayareas" element={<ListOfPlayAreas/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
