import React, { useState } from 'react';
import Logo from '../../assets/icons/LogomarkMutna.svg';
import BurgerIcon from '../../assets/icons/Burger.svg';
import Xicon from '../../assets/icons/x.svg';
import Down from '../../assets/icons/chevron-down.svg';
import Up from '../../assets/icons/chevron-up.svg';
import { NavModal } from './NavModal.tsx';
import { NavDescModal } from './NavDescModal.tsx';
import {useUserStore} from "../../store/useUserStore.ts";
import {useNavigate} from "react-router-dom";
import {logOut} from "../../services/firebaseFunctions.ts";

export const NavBar: React.FC = () => {
  const [isMobileModalOpen, setMobileModalOpen] = useState<boolean>(false);
  const [isDesktopModalOpen, setDesktopModalOpen] = useState<boolean>(false);
  const { user, clearUser } = useUserStore();
  const navigate = useNavigate();

  const toggleMobileModal = () => setMobileModalOpen((prev) => !prev);
  const toggleDesktopModal = () => setDesktopModalOpen((prev) => !prev);

  const handleLogout = async () => {
    try {
      await logOut();
      clearUser();
      navigate('/');
    } catch (error) {
      console.error('Error during logout:', error);
    }
  };
  return (
    <>
      <nav className="flex justify-between w-full md:w-screen md:px-20 p-4 items-center md:mx-auto">
        {/* Logo i naziv */}
        <div className="flex items-center gap-2 font-bold">
          <div
            onClick={() => navigate('/landing')}
            className={'flex items-center justify-between gap-2 cursor-pointer'}
          >
            <img src={Logo} className="LogoImage" alt="Logo"/>
            <h1 className="text-gray-900 font-bold text-lg">Untitled UI</h1>
          </div>


          {/* Opcije za desktop */}
          <div className="ml-5 md:flex items-center gap-6  hidden">
            <span onClick={()=>navigate('/landing')} className="text-gray-500 hover:text-primary-900 font-bold cursor-pointer text-base">Home</span>
            <div
              onClick={toggleDesktopModal}
              className="flex gap-1 items-center cursor-pointer"
            >
              <span className="text-gray-500 cursor-pointer hover:text-primary-900 font-bold text-base">Resources</span>
              { !isDesktopModalOpen ? (
                <img src={Down} alt="Chevron down" />
              ) : (
                <img src={Up} alt="Chevron up" />
              )}
            </div>
            <span className="text-gray-500 cursor-pointer  hover:text-primary-900 text-base font-bold">Pricing</span>
          </div>
        </div>

        <div className="p-2 md:hidden z-20">
          <img
            src={isMobileModalOpen ? Xicon : BurgerIcon}
            className="BurgerIcon cursor-pointer"
            alt={isMobileModalOpen ? "Close" : "Menu"}
            onClick={toggleMobileModal}
          />
        </div>

        <div className="hidden md:flex p-2 gap-2">
          {user ? (
           <div>
            <button
              onClick={handleLogout}
              className="bg-primary-50 text-gray-500 text-base px-5 py-3"
            >
              Logout
            </button>
           </div>
          ) : (
            <div>

            <button
              onClick={() => navigate('/')}
              className="bg-primary-50 text-gray-500 text-base px-5 py-3"
            >
              Login
            </button>
            </div>

          )}
          <button
            onClick={()=> navigate('/sign-up')}
            className="text-base px-5 py-3 bg-primary-600">Sign up</button>
        </div>
      </nav>

      {/* Mobile modal */}
      <NavModal isOpen={isMobileModalOpen} onClose={toggleMobileModal}/>

      {/* Desktop modal */}
      {isDesktopModalOpen && <NavDescModal/>} {/* Uslovno renderovanje desktop modala */}
    </>
  );
};
