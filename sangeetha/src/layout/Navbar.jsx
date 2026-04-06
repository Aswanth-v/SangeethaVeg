import { useState, useRef, useEffect } from "react";
import logo from "../assets/sangeetha.webp";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [moreOpen, setMoreOpen] = useState(false);
  const [desktopMore, setDesktopMore] = useState(false);
  const timeoutRef = useRef(null);

  useEffect(() => {
    return () => clearTimeout(timeoutRef.current);
  }, []);

  const handleEnter = () => {
    clearTimeout(timeoutRef.current);
    setDesktopMore(true);
  };

  const handleLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setDesktopMore(false);
    }, 300);
  };

  return (
    <nav className="w-full fixed top-0 left-0 z-50 bg-black/40 backdrop-blur-sm shadow-sm">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo + Name */}
        <div className="flex items-center gap-3">
          <img
            src={logo}
            alt="Sangeetha restaurant logo"
            width="40"
            height="40"
            loading="eager"
            decoding="async"
            className="h-10 w-10 rounded-md object-cover"
          />
          <h1 className="text-xl md:text-2xl font-bold text-text">Sangeetha</h1>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 text-text font-medium">
          <li className="cursor-pointer hover:text-primary transition duration-300">
            Home
          </li>
          <li className="cursor-pointer hover:text-primary transition duration-300">
            Order Directly
          </li>
          <li className="cursor-pointer hover:text-primary transition duration-300">
            40-year Anniversary
          </li>

          {/* Dropdown */}
          <li
            className="relative cursor-pointer"
            onMouseEnter={handleEnter}
            onMouseLeave={handleLeave}
          >
            <span className="hover:text-primary transition duration-300">
              More
            </span>

            <ul
              className={`absolute left-0 mt-2 w-40 bg-white shadow-lg rounded-md transition-all duration-200 ${
                desktopMore ? "opacity-100 visible" : "opacity-0 invisible"
              }`}
            >
              <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-accent">
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

        {/* Mobile Toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-2xl text-white"
        >
          {open ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile Menu (Render ONLY when open) */}
      {open && (
        <div className="fixed top-0 left-0 h-full w-64 bg-black/80 backdrop-blur-sm shadow-lg md:hidden">
          <div className="p-6 flex flex-col gap-6 text-accent text-lg mt-10">
            <span className="cursor-pointer hover:text-primary">Home</span>
            <span className="cursor-pointer hover:text-primary">
              Order Directly
            </span>
            <span className="cursor-pointer hover:text-primary">
              40-year Anniversary
            </span>

            <div>
              <span
                onClick={() => setMoreOpen(!moreOpen)}
                className="cursor-pointer flex justify-between items-center"
              >
                More
                <span>{moreOpen ? "▲" : "▼"}</span>
              </span>

              {moreOpen && (
                <div className="flex flex-col gap-3 ml-4 mt-2">
                  <span className="cursor-pointer">About Us</span>
                  <span className="cursor-pointer">Contact</span>
                </div>
              )}
            </div>

            <button className="mt-4 bg-gold text-black px-4 py-2 rounded-lg">
              Book Table
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
