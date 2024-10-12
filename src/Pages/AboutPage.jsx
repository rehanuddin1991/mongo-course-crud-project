import React from 'react'
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import rehanImg from '../assets/rehan.jpg'
const AboutPage = () => {
    return (
        <div>
            <Header></Header>
            <div className="hero   min-h-screen">
                <div className="hero-content  xs:flex-col lg:flex-row-reverse md:flex-row-reverse sm:flex-row-reverse">
                    <img
                        src={rehanImg}
                        className="max-w-sm rounded-lg shadow-2xl" />
                    <div>
                        <h1 className="text-4xl font-bold">Our Honorable Manager</h1>
                        <p className="py-6 text-[indigo]">
                            Dear Valued Clients, Partners, and Team Members,

                            I want to take a moment to express my deep appreciation for your trust and continued support in our journey. At [Company Name], our commitment to delivering innovative IT solutions has always been at the core of what we do. Every challenge we overcome and every success we celebrate is a testament to the hard work and dedication of our talented team and the strong partnerships we’ve built along the way.

                            As technology continues to evolve, so do we. We are constantly exploring new ways to provide cutting-edge solutions that meet the dynamic needs of our clients. Our focus remains on creating value, driving digital transformation, and empowering businesses to thrive in this fast-paced digital world.
                        </p>
                        
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    )
}

export default AboutPage