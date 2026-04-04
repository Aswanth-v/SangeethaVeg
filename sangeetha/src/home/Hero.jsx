import React from 'react'
import food from "../assets/food.jpg"
const Hero = () => {
  return (
    <div
  className="h-screen bg-cover bg-center relative"
  style={{ backgroundImage: `url(${food})` }}
>
  <div className="absolute inset-0 bg-black/40"></div>

  <div className="relative z-10 flex items-center justify-center h-full">
    <h1 className="text-white text-4xl font-bold">
      Welcome to Sangeetha
    </h1>
  </div>
</div>
  )
}

export default Hero