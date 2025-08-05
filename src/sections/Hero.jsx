
import { useGSAP } from '@gsap/react'

import Button from '../components/Button'
import gsap from 'gsap'
import AnimatedCounter from '../components/AnimatedCounter'
import { words } from '../constants'
// import HeroExperience from '../components/heroModels/HeroExperience'

const Hero = () => {
  useGSAP(() => {
    gsap.fromTo('.hero-text h1', 
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, stagger: 0.5, ease: 'power2.inOut' }
    )
  })
  return (
    <section id='hero' className='relative overflow-hidden'>
      <div className="absolute top-0 left-0 z-10">
        <img src="/images/bg.png" alt="background" />
      </div>
      <div className="hero-layout">
        <header className='flex flex-col justify-center md:w-full w-screen md:px-20 px-5'>
          <div className="flex flex-col gap-7">
            <div className="hero-text">
              <h1>Shaping
                <span className='slide'>
                  <span className='wrapper'>
                    {words.map((word) => (
                      <span key={word.text} className='flex items-center gap-2 md:gap-3 pb-2'>
                        <img src={word.imgPath} alt={word.text} className='xl:size-12 md:size-10 size-7 md:p-2 p-1 rounded-full bg-purple-600' />
                        <span className='text-purple-600'>{word.text}</span>
                      </span>
                    ))}
                  </span>
                </span>
              </h1>
              <h1>into Real Projects</h1>
              <h1>that Deliver Results</h1>
            </div>
              <p className='text-white-50 md:text-xl relative z-10'>
                Hi, I'm Antonis Papaioannou, a developer based in Greece with a passion for code.
              </p>
              <Button 
                className='md:w-80 md:h-16 w-60 h-12'
                id="counter"
                text="See My Work"
                               
              />
          </div>
        </header>
        <figure>
          <div className='hero-3d-layout'>
            <img src="/images/coding.jpg" alt="img" className='mt-15 opacity-30'/>
          </div>
        </figure>
      </div>
      <AnimatedCounter />
    </section>
  )
}

export default Hero
