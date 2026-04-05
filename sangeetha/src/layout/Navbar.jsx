import { useState, useRef } from "react";
import logo from "../assets/sangeetha.jpg";

const Navbar = () => {
  const [open, setOpen] = useState(false); // mobile menu
  const [moreOpen, setMoreOpen] = useState(false); // mobile dropdown
  const [desktopMore, setDesktopMore] = useState(false); // desktop dropdown
  const timeoutRef = useRef(null);

  // Desktop hover handlers (with 3s delay)
  const handleEnter = () => {
    clearTimeout(timeoutRef.current);
    setDesktopMore(true);
  };

  const handleLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setDesktopMore(false);
    }, 1000);
  };

  return (
    <nav className="w-full fixed top-0 left-0 z-50 bg-transparent/50 backdrop-blur-lg shadow-sm">
      
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">

        {/* Logo + Name */}
        <div className="flex items-center gap-3">
         <img 
  src={logo} 
  alt="Sangeetha Logo" 
  className="h-10 w-10 rounded-md object-cover"
/>
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
            Order Directly
          </li>
          <li className="cursor-pointer hover:text-primary transition duration-300">
            40-year Anniversary
          </li>

          {/* Desktop Dropdown */}
          <li
            className="relative cursor-pointer"
            onMouseEnter={handleEnter}
            onMouseLeave={handleLeave}
          >
            <span className="hover:text-primary transition duration-300">
              More
            </span>

            <ul
              className={`absolute left-0 mt-2 w-40 bg-white shadow-lg rounded-md transition-all duration-300 will-change-transform ${
                desktopMore
                  ? "opacity-100 visible translate-y-0"
                  : "opacity-0 invisible translate-y-2"
              }`}
            >
              <li className="px-4 py-2 hover:bg-gray-100  cursor-pointer text-accent">
                About Us
              </li>
              <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-accent">
                Contact
              </li>
            </ul>
          </li>
        </ul>

        {/* Desktop Button */}
        <button className="hidden md:block bg-gold text-black px-5 py-2 rounded-lg hover:scale-105 hover:shadow-md transition duration-300">
          Book Table
        </button>

        {/* Mobile Button */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-2xl text-white"
        >
          {open ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 left-0 h-full w-64 will-change-transform   backdrop-blur-lg shadow-lg transform transition-transform duration-300 md:hidden ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className=" bg-black/50 p-6 flex flex-col gap-6 text-accent text-lg mt-10">
          <span className="cursor-pointer hover:text-primary">Home</span>
          <span className="cursor-pointer hover:text-primary">Order Directly</span>
          <span className="cursor-pointer hover:text-primary"> 40-year Anniversary</span>
          <div>
            <span
              onClick={() => setMoreOpen(!moreOpen)}
              className="cursor-pointer hover:text-primary flex justify-between items-center"
            >
              More
              <span>{moreOpen ? "▲" : "▼"}</span>
            </span>

            <div
              className={`flex flex-col gap-3 ml-4 mt-2 transition-all duration-300 ${
                moreOpen
                  ? "max-h-40 opacity-100"
                  : "max-h-0 opacity-0 overflow-hidden"
              }`}
            >
              <span className="cursor-pointer hover:text-primary">
                40-year Anniversary
              </span>
              <span className="cursor-pointer hover:text-primary">
                Contact
              </span>
            </div>
          </div>

          <button className="mt-4 bg-gold text-black px-4 py-2 rounded-lg">
            Book Table
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;