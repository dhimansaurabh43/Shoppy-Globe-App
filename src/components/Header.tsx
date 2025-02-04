import { useState } from "react";
import { CiMenuFries } from "react-icons/ci";
import { AiOutlineClose } from "react-icons/ai";
import { FaShoppingCart } from "react-icons/fa";
import { MdPeople } from "react-icons/md";
import { IoMdContact } from "react-icons/io";
import { RiSearch2Fill } from "react-icons/ri";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { Link } from "react-router-dom";

const Header = (): JSX.Element => {
  const [isMenuOpen, setIsMenuOpen] = useState(false); //for mobile device to toggle menu

  const cartItemCount = useSelector(
    (state: RootState) => state.cart.cart.length //count cart item 
  );

  const greeting = (): string => {  //conditional greeting
    const currHour = new Date().getHours();
    if (currHour < 12) return "Good Morning,";
    if (currHour < 16) return "Good Afternoon,";
    return "Good Evening,";
  };

  const toggleMenu = () => {     //toggle menu
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <header>
      <nav className="flex justify-between items-center px-4 py-3 font-semibold bg-[#1d3557] text-zinc-50 shadow-md">
        <div className="">
          {/* added link for header to home page */}
          <Link to="/">
            <h1 className="text-3xl font-bold">
              Shoppy <span className="text-zinc-900 font-normal">Globe</span>
            </h1>
          </Link>
        </div>
        {/* displayed link to get various routes */}
        <div className="hidden sm:flex items-center gap-6">
          <ul className="flex gap-6">
            <Link to="/about">
              <li>About</li>
            </Link>
            <Link to="/contact">
              <li>Contact Us</li>
            </Link>
            <Link to="/login">
              <li>Login</li>
            </Link>
          </ul>
          <Link to={"/cart"} className="flex gap-1 items-center">
            <FaShoppingCart /> Cart ({cartItemCount})
          </Link>
        </div>
        {/* added only for mobile nav */}
        <div className="sm:hidden">
          <button onClick={toggleMenu}>
            {isMenuOpen ? (
              <AiOutlineClose size={24} />
            ) : (
              <CiMenuFries size={24} />
            )}
          </button>
        </div>
      </nav>
      <div
        className={`fixed top-12 left-0 h-full w-64 z-50 bg-[#1995AD] text-zinc-100 transition-all duration-300 ease-in-out ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <ul className="flex flex-col items-start gap-6 px-6 py-3">
          <Link to="/about">
            <li className="border-b w-[80%] pb-1 border-zinc-400 flex items-center gap-2">
              <RiSearch2Fill className="text-zinc-600" /> About
            </li>
          </Link>
          <Link to="/contact">
            <li className="border-b w-[80%] pb-1 border-zinc-400 flex items-center gap-2">
              <IoMdContact className="text-zinc-600" /> Contact Us
            </li>
          </Link>
          <Link to="login">
            {" "}
            <li className="border-b w-[80%] pb-1 border-zinc-400 flex items-center gap-2">
              <MdPeople className="text-zinc-600" /> Login
            </li>
          </Link>
          <Link to={"/cart"} className="flex items-center gap-2">
            <FaShoppingCart className="text-zinc-600" />
            Cart ({cartItemCount})
          </Link>
        </ul>
      </div>
      {/* displayed greeting message */}
      <div className="text-center mt-2 hidden sm:block">
        <h1 className="sm:text-2xl md:text-3xl font-semibold text-zinc-600">
          {greeting()} Welcome to Shoppy Globe
        </h1>
        <p className="text-center text-sm text-zinc-400">
          ~An E-Commerce platform to buy your wishlist
        </p>
      </div>
    </header>
  );
};

export default Header;