import React from 'react'
import Footer from '../components/Footer'
import Service from "../components/Service";
import Homeinfo from '../components/Homeinfo';
import HeroSection from '../components/HeroSection';
import Reviews from '../components/Reviews';

const Home = () => {
  return (
    <div>
      <HeroSection/>
      <Homeinfo/>
      <Reviews/>
      <Service/>
      <Footer/>
    </div>
  )
}

export default Home