import React, { useState } from 'react';
import Logo from '../../assets/icons/LogomarkMutna.svg';
import BurgerIcon from '../../assets/icons/Burger.svg';
import Xicon from '../../assets/icons/x.svg'; // Import X ikonice
import { NavModal } from './NavModal.tsx';

export const NavBar: React.FC = () => {
  const [isModalOpen, setModalOpen] = useState<boolean>(false);

  const toggleModal = () => setModalOpen((prev) => !prev); // Toggling funkcija

  return (
    <>
      <nav className="flex  justify-between w-full md:w-screen p-4 items-center">
        {/* Logo i naziv */}
        <div className="flex items-center gap-2 font-bold">
          <div>
            <img src={Logo} className="LogoImage" alt="Logo" />
          </div>
          <h1 className="text-gray-900 font-bold text-lg">Untitled UI</h1>

          {/* Opcije za desktop */}
          <div className="ml-5 md:flex items-center gap-2 font-bold hidden">
            <span className="text-gray-500 text-base font-medium">Home</span>
            <select className="text-gray-500 text-base font-medium">
              <option value="docs">Resources</option>
              <option value="tutorials">Tutorials</option>
              <option value="community">Community</option>
              <option value="support">Support</option>
            </select>
            <span className="text-gray-500 text-base font-medium">Pricing</span>
          </div>
        </div>

        {/* Uslovna ikona za mobilni prikaz */}
        <div className="p-2 md:hidden z-20">
          <img
            src={isModalOpen ? Xicon : BurgerIcon} // Uslovno renderovanje
            className="BurgerIcon cursor-pointer"
            alt={isModalOpen ? "Close" : "Menu"}
            onClick={toggleModal} // Otvaranje/zatvaranje modala
          />
        </div>

        {/* Login i Sign up dugmad */}
        <div className="hidden md:flex p-2 gap-2">
          <button className="bg-primary-50 text-gray-500 text-base px-5 py-3">
            Login
          </button>
          <button className="text-base px-5 py-3 bg-primary-600">
            Sign up
          </button>
        </div>
      </nav>

      {/* Modal prozor */}
      <NavModal isOpen={isModalOpen} onClose={toggleModal} />
    </>
  );
};
