import { useState } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="w-full fixed top-0 left-0 z-50 bg-white/30 backdrop-blur-md shadow-sm">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        
        {/* Logo */}
        <h1 className="text-2xl font-bold text-text">
          Sangeetha
        </h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 text-text font-medium">
          <li className="cursor-pointer hover:text-primary transition">
            Home
          </li>
          <li className="cursor-pointer hover:text-primary transition">
            Menu
          </li>
          <li className="cursor-pointer hover:text-primary transition">
            About
          </li>
          <li className="cursor-pointer hover:text-primary transition">
            Contact
          </li>
        </ul>

        {/* Desktop Button */}
        <button className="hidden md:block bg-gold text-black px-5 py-2 rounded-lg hover:scale-105 transition">
          Book Table
        </button>

        {/* Mobile Button */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-2xl text-text"
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-white/80 backdrop-blur-md px-6 py-4 flex flex-col gap-4 text-text">
          <span className="cursor-pointer">Home</span>
          <span className="cursor-pointer">Menu</span>
          <span className="cursor-pointer">About</span>
          <span className="cursor-pointer">Contact</span>

          <button className="mt-2 bg-gold text-black px-4 py-2 rounded-lg">
            Book Table
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;