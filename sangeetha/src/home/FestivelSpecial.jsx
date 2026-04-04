import React from 'react'
import food from "../assets/food.jpg"

const FestivelSpecial = () => {
  return (
    <div
      className="relative min-h-screen bg-cover bg-center bg-fixed flex flex-col md:flex-row"
      style={{ backgroundImage: `url(${food})` }}
    >
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Left - Content */}
      <div className="relative z-10 w-full md:w-1/2 flex items-center justify-center p-10">
        <div className="text-center md:text-left">
          <h2 className="text-3xl font-bold text-white">
            Order Festive Specials & Classic
          </h2>

          <p className="mt-4 text-lg text-white/80">
           🍛 Sangeetha Specials directly from our kitchen 
          </p>
          

          <button className="mt-6 bg-gold text-black px-6 py-3 rounded-lg hover:scale-105 transition">
            Scan for Order
          </button>
        </div>
      </div>

      {/* Right - Image / Content */}
      <div className="relative z-10 w-full md:w-1/2 flex items-center justify-center">
        <h1 className="text-white text-4xl font-bold">hi</h1>
      </div>

    </div>
  )
}

export default FestivelSpecial