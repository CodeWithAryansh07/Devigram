// import React from 'react'

import Footer from "../components/Footer"
import GetInTouch from "../components/GetInTouch"
import Hero from "../components/Hero"
import Mentors from "../components/Mentors"
import Navbar from "../components/Navbar"
import Sections from "../components/Sections"
import Testimonial from "../components/Testimonial"
import WhyChoose from "../components/WhyChoose"

const Landing = () => {
    return (
        <>
            <div className='w-full h-full bg-gradient-to-br from-purple-600 via-purple-900 to-indigo-900'>
                <Navbar />
                <Hero />
            </div>
            <Sections />
            <WhyChoose />
            <Testimonial />
            <Mentors />
            <GetInTouch />
            <Footer />
        </>
    )
}

export default Landing
