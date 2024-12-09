
import React, { useState } from "react";
import TrendingServices from "../../components/homepage/TrendingServices";
import Services from "../../components/homepage/Serviecs";
import Banner from "../../components/homepage/Banner";
import Pledge from "../../components/homepage/Pledge";

const contentStyle = {
  height: '160px',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  background: '#364d79',
}

const HomePage = () => {

  return (
    <div className='w-full '>
      <Banner />
      <TrendingServices />
      <Services />
      <Pledge />
      
    </div>
  )
}
export default HomePage