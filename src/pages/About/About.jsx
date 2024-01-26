import React from 'react'
import AboutBanner from '../../components/About/AboutBanner'
import Sketches from '../../components/About/Sketches'
import Photography from '../../components/About/Photography'
import Certification from '../../components/About/Certification'
import GetInTouch from '../../components/About/GetInTouch'

const About = () => {
  return (
    <div className='max-w-screen-xl text-white lg:mx-auto mx-[24px]'>
      <AboutBanner />
      <Sketches />
      <Photography />
      <Certification />
      <GetInTouch />
    </div>
  )
}

export default About