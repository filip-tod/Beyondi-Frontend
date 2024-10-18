import React, { useEffect } from 'react';
import { ModalProps } from '../../interfaces/ModalProps.ts';

export const NavModal: React.FC<ModalProps> = ({ isOpen }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.classList.add('overflow-hidden');
    } else {
      document.body.classList.remove('overflow-hidden');
    }

    return () => {
      document.body.classList.remove('overflow-hidden');
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <>
      {/* Overlay za pozadinu */}
      <div className="fixed inset-0 bg-white z-10 opacity-90"></div>

      {/* Sadržaj modala */}
      <div className="absolute w-full border-t border-b border-gray-200 z-20">
        <div className="bg-white w-full p-4">
          <ul className="space-y-4">
            <li>
              <a href="#" className="text-gray-900 text-base font-semibold no-underline">Home</a>
            </li>

            <div className="flex flex-col gap-6 font-semibold">
              <select>
                <option>Products</option>
                <option>Sitemap</option>
                <option>Cookies</option>
              </select>

              <select>
                <option>Resources</option>
                <option>Sitemap</option>
                <option>Cookies</option>
              </select>
            </div>

            <li>
              <a href="#" className="text-gray-900 text-base no-underline font-semibold">Pricing</a>
            </li>
          </ul>
        </div>

        <div className="py-5 bg-white border-t border-gray-200 flex justify-between">
          <div className="flex flex-col gap-6 px-4 w-full">
            <a href="#" className="text-gray-500 text-base font-medium no-underline">About us</a>
            <a href="#" className="text-gray-500 text-base font-medium no-underline">Press</a>
            <a href="#" className="text-gray-500 text-base font-medium no-underline">Careers</a>
            <a href="#" className="text-gray-500 text-base font-medium no-underline">Legal</a>
          </div>

          <div className="flex flex-col gap-6 px-4 w-full">
            <a href="#" className="text-gray-500 text-base font-medium no-underline">Support</a>
            <a href="#" className="text-gray-500 text-base font-medium no-underline">Contact</a>
            <a href="#" className="text-gray-500 text-base font-medium no-underline">Sitemap</a>
            <a href="#" className="text-gray-500 text-base font-medium no-underline">Cookie settings</a>
          </div>
        </div>

        <div className="flex flex-col gap-4 bg-white px-4 pb-6 shadow-lg">
          <button className="text-base font-medium">Sign Up</button>
          <button className="bg-white text-gray-900 border border-gray-300 font-medium text-base">
            Log in
          </button>
        </div>

      </div>
    </>
  );
};
