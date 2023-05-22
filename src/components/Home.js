import React from 'react'
import { Outlet } from 'react-router-dom';
import Carousel123 from './Carousel123';
import Topbuttons from './Topbuttons';
import Slider123 from './Slider123';
import Legoslider from './Legoslider';
import Bookmarkslider from './Bookmarkslider';
import Bagslider from './Bagslider';

function Home() {
  return (
    <div>
      <Outlet/>
      <Outlet/>
      <Carousel123/>
      <Topbuttons/>
      <Slider123/>
      <Legoslider/>
     <Bookmarkslider/>
      <Bagslider/>     
    <Outlet/>
    
    </div>
  )
}

export default Home
