import React, { useState } from 'react';
import Logo from '../../assets/icons/LogomarkMutna.svg';
import BurgerIcon from '../../assets/icons/Burger.svg';
import Xicon from '../../assets/icons/x.svg';
import Down from '../../assets/icons/chevron-down.svg';
import { NavModal } from './NavModal.tsx';
import { NavDescModal } from './NavDescModal.tsx'; // Import novog desktop modala

export const NavBar: React.FC = () => {
  const [isMobileModalOpen, setMobileModalOpen] = useState<boolean>(false);
  const [isDesktopModalOpen, setDesktopModalOpen] = useState<boolean>(false);

  const toggleMobileModal = () => setMobileModalOpen((prev) => !prev);
  const toggleDesktopModal = () => setDesktopModalOpen((prev) => !prev);

  return (
    <>
      <nav className="flex justify-between w-full md:w-screen p-4 md:px-10 items-center md:mx-auto">
        {/* Logo i naziv */}
        <div className="flex items-center gap-2 font-bold">
          <div>
            <img src={Logo} className="LogoImage" alt="Logo" />
          </div>
          <h1 className="text-gray-900 font-bold text-lg">Untitled UI</h1>

          {/* Opcije za desktop */}
          <div className="ml-5 md:flex items-center gap-6 font-bold hidden">
            <span className="text-gray-500 text-base font-medium">Home</span>
            <div
              onClick={toggleDesktopModal} // Togglanje modala na klik
              className="flex gap-1 items-center cursor-pointer"
            >
              <span className="text-gray-500 font-medium text-base">Resources</span>
              <img src={Down} alt="Chevron down" />
            </div>
            <span className="text-gray-500 text-base font-medium">Pricing</span>
          </div>
        </div>

        {/* Uslovna ikona za mobilni prikaz */}
        <div className="p-2 md:hidden z-20">
          <img
            src={isMobileModalOpen ? Xicon : BurgerIcon}
            className="BurgerIcon cursor-pointer"
            alt={isMobileModalOpen ? "Close" : "Menu"}
            onClick={toggleMobileModal}
          />
        </div>

        {/* Login i Sign up dugmad */}
        <div className="hidden md:flex p-2 gap-2">
          <div>
            <button className="bg-primary-50 text-gray-500 text-base px-5 py-3">Login</button>
          </div>
          <div>
            <button className="text-base px-5 py-3 bg-primary-600">Sign up</button>
          </div>

        </div>
      </nav>

      {/* Mobile modal */}
      <NavModal isOpen={isMobileModalOpen} onClose={toggleMobileModal} />

      {/* Desktop modal */}
      {isDesktopModalOpen && <NavDescModal />} {/* Uslovno renderovanje desktop modala */}
    </>
  );
};
