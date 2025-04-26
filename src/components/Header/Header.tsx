import Image from 'next/image';
import s from './Header.module.scss';
import { ReactNode } from 'react';
import Link from 'next/link';
import burgerBlack from '../../../public/assets/icons/burgerBlack.svg';
import userBlack from '../../../public/assets/icons/userBlack.svg';
import bLogoBlack from '../../../public/assets/icons/bLogoBlack.svg';
import burgerWhite from '../../../public/assets/icons/burgerWhite.svg';
import userWhite from '../../../public/assets/icons/userWhite.svg';
import bLogoWhite from '../../../public/assets/icons/bLogoWhite.svg';

interface HeaderProps {
  hero?: ReactNode;
  headerHeight?: number;
  white?: boolean; 
}

enum Icons {
  Burger,
  BLogo,
  User
}

export function Header({ hero, headerHeight = 700, white = false}: HeaderProps) {

  const handleIconsColor = (iconType: Icons) => {
    switch(iconType) {
      case Icons.Burger:
        return white ? burgerWhite : burgerBlack;
      case Icons.BLogo:
        return white ? bLogoWhite : bLogoBlack;
      case Icons.User:
        return white ? userWhite : userBlack;
      default:
        return white ? bLogoWhite : bLogoBlack;
    }
  }


  return (
    <header
      className={s.header}
      style={
        {
          height: headerHeight,
        }
      }
    >
      <nav className={s.nav}>
        <Link href="#" className={`${s.icon} ${s.iconBurger} ${s.left}`}>
          <Image src={handleIconsColor(Icons.Burger)} alt="Pause" width={30} height={30} />
        </Link>

        <div className={s.navLinks}>
          <Link style={{ color: white ? 'white' : 'black' }} href="">Groups</Link>
          <Link href="/music" style={{ color: white ? 'white' : 'black' }}>Music</Link>
          <Link href="/" className={s.navLinksLink}>
            <Image className={s.navLogo} src={handleIconsColor(Icons.BLogo)} alt="Logo" width={100} height={100} />
          </Link>
          <Link href="#" style={{ color: white ? 'white' : 'black' }}>Events</Link>
          <Link href="#" style={{ color: white ? 'white' : 'black' }}>Media</Link>
        </div>

        <Link href="#" className={`${s.icon} ${s.iconUser} ${s.right}`}>
          <Image className={`${s.navLogoUser} ${s.navLogo}`} src={handleIconsColor(Icons.User)} alt="User" width={50} height={50} />
        </Link>
      </nav>

      <div className={s.heroWrapper}>
        {hero}
      </div>

      <div className={s.shadow} />
    </header>
  );
}

