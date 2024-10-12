import React from 'react'
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import Carousel from '../Components/Carousel'
import ImagesCollection from '../Components/ImagesCollection'

const HomePage = () => {
  return (
    <div>
        <Header></Header>
        <Carousel/>
        <ImagesCollection></ImagesCollection>
        <Footer></Footer>
    </div>
  )
}

export default HomePage