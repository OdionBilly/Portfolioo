import React from 'react'
import { Header } from '../Components/header'
import { Hero } from '../Components/Hero'
import { Skills } from '../Components/Skills'
import { Projects } from '../Components/Projects'
import { Contact } from '../Components/Contact'
import { Footer } from '../Components/Footer'

export const Home = () => {
  return (
    <div>
        <Header/>
        <Hero/>
        <Skills/>
        <Projects/>
        <Contact/>
        <Footer/>
    </div>
  )
}
