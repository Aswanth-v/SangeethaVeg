import React from 'react'
import food from "../assets/food.jpg"

const FestivelSpecial = () => {
  return (
    <div
      className="relative min-h-screen bg-cover bg-center bg-fixed flex items-center justify-center"
      style={{ backgroundImage: `url(${food})` }}
    >
      
      {/* Overlay for readability */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Content */}
      <div className="relative z-10 bg-white/80 backdrop-blur-lg p-10 rounded-2xl shadow-xl text-center">
        <h2 className="text-3xl font-bold text-text">
          Order Festive Specials & Classic
        </h2>
        <p className="mt-2 text-lg text-text">
          Sangeetha Specials directly from our kitchen 🍛
        </p>
      </div>

    </div>
  )
}

export default FestivelSpecial