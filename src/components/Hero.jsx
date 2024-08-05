import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import {heroVideo,smallHeroVideo} from '../utils'
import { useEffect, useState } from "react"


const Hero = () => {
  const [videoSrc,setvideoSrc] = useState(window.innerWidth < 760 ? smallHeroVideo : heroVideo)
  const handleVideoSrcset=()=>{
    if(window.innerWidth < 760){
      setvideoSrc(smallHeroVideo)
    }
    else
    {
      setvideoSrc(heroVideo)
    }
  }
  useEffect(()=>{
    window.addEventListener('Resize', handleVideoSrcset)
    return ()=>{
      window.removeEventListener('Resize' , handleVideoSrcset)
    }
  },[])
useGSAP(()=>{
  gsap.to('#hero',{
    opacity:1,
    delay:2,

  })

gsap.to('#cta',{
  opacity:1,
  y:-50,
  delay:2,

})
},[])


  return (
    <section className='w-full bg-black relative nav-height'>
      <div className='h-5/6 w-full flex-center flex-col'>

      <p id="hero" className='hero-title'>Iphone 15pro Max</p>
      <div className="md:w-10/12 w-9/12">
      <video className="pointer-events-none" autoPlay muted playsInline={true} key={videoSrc}>
        <source src={videoSrc} type="video/mp4" />
      </video>
      </div>
      </div>
      <div id="cta" className="flex flex-col items-center opacity-0 translate-y-20">
        <a href="#highlights" className="btn">Buy Now</a>
        <p className="font-normal text-xl">From $199/Month or$999</p>
        </div>
    </section>
  )
}

export default Hero
