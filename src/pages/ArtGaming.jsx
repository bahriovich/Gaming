import React from 'react'
import Navbar from '../components/Navbar'
import Intro from '../components/Intro'
import TrendingGames from '../components/TrendingGames'
import AboutUs from '../components/AboutUs'
import FeaturedGames from '../components/FeaturedGames'
import ContactUs from '../components/ContactUs'

const ArtGaming = () => {
  return (
    <div>
      <Navbar />
      <Intro />
      <TrendingGames />
      <AboutUs />
      <FeaturedGames />
      <ContactUs />
    </div>
  )
}

export default ArtGaming
