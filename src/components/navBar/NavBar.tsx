import Logo from '../../assets/icons/LogomarkMutna.svg';
import BurgerIcon from '../../assets/icons/NavBarMobile.svg';


export const NavBar = () => {
return(
  <nav className="flex justify-between w-full p-4 items-center">
    <div className="flex items-center gap-2 font-bold">
      <div>
      <img
        src={Logo}
        className={'LogoImage'}
        alt={'Logo'}
      />
      </div>
      <h1 className={'text-xs'}>Untitled UI</h1>
    </div>

    <div className={'p-2'}>
      <img
        src={BurgerIcon}
        className={'BurgerIcon'}
        alt="BurgerIcon"
      />
    </div>
  </nav>
);
}
