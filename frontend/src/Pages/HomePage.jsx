import React from 'react'
import { HomeHeading } from '../Component/HomeHeading/HomeHeading'
import { WhyExam } from '../Component/WhyExam/WhyExam'
import { Footer } from '../Component/Footer/Footer'

export const HomePage = () => {
  return (
    <div>
        <HomeHeading/>
        <WhyExam/>
        <Footer/>
    </div>
  )
}

