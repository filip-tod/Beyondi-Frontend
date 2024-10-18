import Apple from '../../assets/footer/app-store.png';
import Google from '../../assets/footer/google-store.png';
import Icon from '../../assets/icons/LogomarkMutna.svg';

import {Divider} from "../divider/Divider.tsx";

const footerLinks = [
  {
    title: "Product",
    links: ["Overview", "Features", "Solutions", "Tutorials", "Pricing", "Releases"],
  },
  {
    title: "Company",
    links: ["About us", "Careers", "Press", "News", "Media kit", "Contact"],
  },
  {
    title: "Resources",
    links: ["Blog", "Newsletter", "Events", "Help centre", "Tutorials", "Support"],
  },
  {
    title: "Social",
    links: ["Twitter", "LinkedIn", "Facebook", "GitHub", "AngelList", "Dribbble"],
  },
  {
    title: "Legal",
    links: ["Terms", "Privacy", "Cookies", "Licenses", "Settings", "Contact"],
  },
];


export const Footer = () => {
  return (
    <footer>
      <div className={'px-4 flex flex-col gap-4'}>
        <h2 className={'text-sm font-semibold text-gray-900'}>Get The app</h2>
        <div className={'flex gap-4'}>
          <div>
            <img src={Apple} alt={'apple store'}/>
          </div>
          <div>
            <img src={Google} alt={'google play'}/>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-5 gap-8 px-4 py-10">
        {footerLinks.map((section, index) => (
          <div key={index}>
            <h3 className="font-semibold text-gray-900 mb-4 text-sm">{section.title}</h3>
            <ul className="space-y-2">
              {section.links.map((link, linkIndex) => (
                <li key={linkIndex}>
                  <a
                    href="#"
                    className="text-primary-600 no-underline hover:text-primary-800 transition-colors font-medium text-base"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <Divider/>

      <div className={'px-4 py-8 flex items-center gap-2'}>

        <img
          src={Icon}
        />
        <p className={'text-gray-900 font-bold text-lg'}>Untitled UI</p>
      </div>
      <div className={'px-4 pb-10'}>
        <p className={'text-gray-400 text-base font-normal'}>© 2077 Untitled UI. All rights reserved.</p>
      </div>
    </footer>
  );
}