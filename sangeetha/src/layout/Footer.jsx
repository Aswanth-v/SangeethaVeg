import React from "react";

const Footer = () => {
  return (
    <footer className="bg-cream text-white px-6 sm:px-10 md:px-16 py-12">
      
      {/* GRID */}
      <div className="max-w-7xl mx-auto grid gap-8 grid-cols-2 md:grid-cols-4">
        
        {/* ABOUT */}
        <div>
          <h3 className="text-gold font-semibold mb-4 text-base sm:text-lg">About</h3>
          <ul className="space-y-2 text-xs sm:text-sm text-white/70">
            <li className="hover:text-gold cursor-pointer">About Us</li>
            <li className="hover:text-gold cursor-pointer">Blog</li>
            <li className="hover:text-gold cursor-pointer">FAQs</li>
          </ul>
        </div>

        {/* SERVICES */}
        <div>
          <h3 className="text-gold font-semibold mb-4 text-base sm:text-lg">Services</h3>
          <ul className="space-y-2 text-xs sm:text-sm text-white/70">
            <li className="hover:text-gold cursor-pointer">Order Directly</li>
            <li className="hover:text-gold cursor-pointer">
              Corporates & Parties
            </li>
            <li className="hover:text-gold cursor-pointer">Franchise</li>
          </ul>
        </div>

        {/* LOCATIONS */}
        <div>
          <h3 className="text-gold font-semibold mb-4 text-base sm:text-lg">Locations</h3>
          <ul className="space-y-2 text-xs sm:text-sm text-white/70">
            <li className="hover:text-gold cursor-pointer">Chennai</li>
            <li className="hover:text-gold cursor-pointer">Overseas</li>
            <li className="hover:text-gold cursor-pointer">Branches</li>
          </ul>
        </div>

        {/* CONNECT */}
        <div>
          <h3 className="text-gold font-semibold mb-4 text-base sm:text-lg">Connect</h3>
          <ul className="space-y-2 text-xs sm:text-sm text-white/70">
            <li
              className="hover:text-gold cursor-pointer"
              onClick={() => window.open("https://instagram.com", "_blank")}
            >
              Instagram
            </li>
            <li
              className="hover:text-gold cursor-pointer"
              onClick={() => window.open("https://facebook.com", "_blank")}
            >
              Facebook
            </li>
            <li className="hover:text-gold cursor-pointer">Contact</li>
          </ul>
        </div>

      </div>

      {/* DIVIDER */}
      <div className="border-t border-white/20 mt-10"></div>

      {/* BOTTOM */}
      <div className="text-center text-xs text-white/50 mt-6">
        ©2026 Sangeetha Veg. Crafted with care.
      </div>

    </footer>
  );
};

export default Footer;