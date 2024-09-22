import { useState } from "react";
import logo from "../assets/logo.png";
import { RiCloseFill } from "react-icons/ri";
import { RiMenu3Line } from "react-icons/ri";

const Nav = () => {
  const [isOpen, setisOpen] = useState(false);

  const toggleMenu = () => {
    setisOpen(!isOpen);
  };

  return (
    <nav className="fixed top-4 left-0 right-0 z-50 m-2">
      <div
        className="text-neutral-500 bg-black/70 backdrop-blur-md max-w-7xl 
        mx-auto px-4 py-3 flex justify-between items-center rounded-xl border border-neutral-800"
      >
        <a href="/">
          <img src={logo} alt="" width={130} />
        </a>

        <div className="hidden md:flex space-x-6">
          <a href="/" className="hover:text-neutral-200">
            How It Works
          </a>
          <a href="/" className="hover:text-neutral-200">
            Get a Demo
          </a>
          <a href="/" className="hover:text-neutral-200">
            Start Free Trail
          </a>
        </div>

        <div className="hidden md:flex space-x-4 items-center">
          <a href="/" className="hover:text-neutral-200">
            Login
          </a>
          <a
            href="/"
            className="border border-neutral-700 text-white py-2 px-4 rounded-lg hover:text-neutral-700 transition"
          >
            Get a Demo
          </a>
          <a
            href="/"
            className="bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-500 transition"
          >
            Start Free Trail
          </a>
        </div>

        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-white focus:outline-none text-3xl"
            aria-label={isOpen ? "Close Menu" : "Open Menu"}
          >
            {isOpen ? <RiCloseFill /> : <RiMenu3Line />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-neutral-900/60 backdrop-blur-md border border-neutral-800 p-4 rounded-xl mt-2">
          <div className="flex flex-col space-y-4">
            <a href="/" className="hover:text-neutral-200">
              Product
            </a>
            <a href="/" className="hover:text-neutral-200">
              Pricing
            </a>
            <a href="/" className="hover:text-neutral-200">
              Recourses
            </a>
            <a href="/" className="hover:text-white">
              Login
            </a>
            <a
              href="/"
              className="border border-neutral-700 text-white py-2 px-4 rounded-lg hover:text-neutral-700 transition"
            >
              Get a Demo
            </a>
            <a
              href="/"
              className="bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-500 transition"
            >
              Start Free Trail
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Nav;
