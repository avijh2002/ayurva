import React from 'react'
import Footer from '../components/Footer'
import Service from "../components/Service";
import Homeinfo from '../components/Homeinfo';

const Home = () => {
  return (
    <div>
      <Homeinfo/>
      <Service/>
      <Footer/>
    </div>
  )
}

export default Home