import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-[#1e4d36] text-white">
      <div className="container mx-auto py-4 px-4 md:px-6 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="text-green-400">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M12 2a10 10 0 1 0 10 10 4 4 0 0 1-5-5 4 4 0 0 1-5-5"></path>
              <path d="M8.5 8.5v.01"></path>
              <path d="M16 12v.01"></path>
              <path d="M12 16v.01"></path>
              <path d="M11 3v.01"></path>
            </svg>
          </div>
          <h1 className="text-xl font-bold">Gardener</h1>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <a href="#services" className="text-white hover:text-green-300 text-sm uppercase">
            Services
          </a>
          <a href="#about" className="text-white hover:text-green-300 text-sm uppercase">
            About Us
          </a>
          <a href="#projects" className="text-white hover:text-green-300 text-sm uppercase">
            Projects
          </a>
        </nav>

        {/* Contact Button */}
        <button className="bg-yellow-500 hover:bg-yellow-600 text-black text-sm px-4 py-2 rounded-md">
          Contact
        </button>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-[#1e4d36] text-white py-4 px-6 flex flex-col items-center space-y-4">
          <a href="#services" className="text-white hover:text-green-300 text-sm uppercase">
            Services
          </a>
          <a href="#about" className="text-white hover:text-green-300 text-sm uppercase">
            About Us
          </a>
          <a href="#projects" className="text-white hover:text-green-300 text-sm uppercase">
            Projects
          </a>
        </div>
      )}
    </header>
  );
};

export default Navbar;
