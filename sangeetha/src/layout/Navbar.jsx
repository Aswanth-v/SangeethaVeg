import { useState } from "react";
import logo from "../assets/sangeetha.jpg";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="w-full fixed top-0 left-0 z-50 bg-transparent/50 5backdrop-blur-lg shadow-sm">
      
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">

        {/* Logo + Name */}
        <div className="flex items-center gap-3">
          <img src={logo} alt="Sangeetha Logo" className="h-10 w-auto rounded-md" />
          <h1 className="text-xl md:text-2xl font-bold text-cream">
            Sangeetha
          </h1>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 text-cream font-medium">
          <li className="cursor-pointer hover:text-primary transition duration-300">
            Home
          </li>
          <li className="cursor-pointer hover:text-primary transition duration-300">
            Menu
          </li>
          <li className="cursor-pointer hover:text-primary transition duration-300">
            About
          </li>
          <li className="cursor-pointer hover:text-primary transition duration-300">
            Contact
          </li>
        </ul>

        {/* Desktop Button */}
        <button className="hidden md:block bg-gold text-black px-5 py-2 rounded-lg hover:scale-105 hover:shadow-md transition duration-300">
          Book Table
        </button>

        {/* Mobile Button */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-2xl text-text"
        >
          {open ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-white/90 backdrop-blur-lg shadow-lg transform transition-transform duration-300 md:hidden ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="p-6 flex flex-col gap-6 text-text text-lg mt-10">
          <span className="cursor-pointer hover:text-primary">Home</span>
          <span className="cursor-pointer hover:text-primary">Menu</span>
          <span className="cursor-pointer hover:text-primary">About</span>
          <span className="cursor-pointer hover:text-primary">Contact</span>

          <button className="mt-4 bg-gold text-black px-4 py-2 rounded-lg">
            Book Table
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;