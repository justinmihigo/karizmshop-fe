import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';
import { LuShoppingCart } from 'react-icons/lu';
import { FiHeart } from 'react-icons/fi';
import { FaAngleDown } from 'react-icons/fa6';
import { RxHamburgerMenu } from 'react-icons/rx';
import HSButton from './form/HSButton';
import Profile from "../assets/profile.jpg"

function Navbar() {
  const location = useLocation();
  const [toggleMenu, setToggleMenu] = useState(false);
  const [toggleProfileMenu, setToggleProfileMenu] = useState(false);

  return (
    <div className="relative flex items-center justify-between w-full h-16 shadow-sm">
      <RxHamburgerMenu
        title="hamburger"
        size="20"
        color="#424856"
        className="lg:hidden ml-8"
        onClick={() => setToggleMenu(!toggleMenu)}
      />
      <div className="flex items-center gap-2 md:ml-8">
        {/* <img src={KariLogo} alt="logo" className='w-200 h-100 object-contain'/> */}
        <h2 className="text-textBlack font-bold">Kari-shop</h2>
      </div>
      <nav className="xs:hidden lg:flex items-center h-full">
        <Link
          to="/"
          className={`${location.pathname === '/' ? 'border-b-[2px] border-primary text-primary' : 'text-grey'} h-full flex items-center justify-center pl-4 pr-8`}
        >
          Home
        </Link>
        <Link
          to="/shop"
          className={`${location.pathname === '/shop' ? 'border-b-[2px] border-primary text-primary' : 'text-grey'} h-full flex items-center justify-center pl-4 pr-8`}
        >
          Shop
        </Link>
        <Link
          to="/about"
          className={`${location.pathname === '/about' ? 'border-b-[2px] border-primary text-primary' : 'text-grey'} h-full flex items-center justify-center pl-4 pr-8`}
        >
          About Us
        </Link>
        <div
          className={`${location.pathname === '/contact' ? 'border-b-[2px] border-primary text-primary' : 'text-grey'} flex items-center gap-2 h-full pl-4 pr-8`}
        >
          <Link
            to="/contact"
            className="h-full flex items-center justify-center"
          >
            Contact
          </Link>
          <FaAngleDown size="15" color="#424856" title="contact" />
        </div>
      </nav>
      <div className="flex items-center gap-8 mr-8">
        <div className="flex items-center gap-4">
          <div className="relative">
            <LuShoppingCart size="20" color="#424856" title="cart" />
            <div className="flex items-center justify-center w-4 h-4 rounded-full bg-red-700 text-white absolute right-[-0.3rem] top-[-0.2rem] text-sm">
              5
            </div>
          </div>
          <FiHeart color="#424856" size="20" title="wishlist" />
        </div>
          <div className="xs:hidden lg:flex items-center gap-2">
            <div className="w-8 h-8 rounded-full overflow-hidden">
              <img
               src={Profile}
                className="w-full h-full object-cover"
                alt="profile"
              />
            </div>
            <h2 className="text-textBlack">Account</h2>
            <FaAngleDown
              size="15"
              color="#424856"
              title="toggleProfile"
              onClick={() => setToggleProfileMenu(!toggleProfileMenu)}
            />
          </div>
          <HSButton path="/signIn" title="Login" styles="xs:hidden lg:flex" />
      </div>
    </div>
  );
}

export default Navbar;