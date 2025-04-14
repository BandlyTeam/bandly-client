import Image from 'next/image';
import s from './Header.module.scss';
import { ReactNode } from 'react';

import pauseImg from '../../../public/assets/icons/pause.png';
import userImg from '../../../public/assets/icons/user.svg';
import logoImg from '../../../public/assets/icons/logo.png';

interface HeaderProps {
  hero?: ReactNode;
}

export function Header({ hero }: HeaderProps) {
  return (
    <header className={s.header}>
      <nav className={s.nav}>
        <a href="#" className={`${s.icon} ${s.left}`}>
          <Image src={pauseImg} alt="Pause" width={30} height={30} />
        </a>

        <div className={s.navLinks}>
          <a href="#">Groups</a>
          <a href="#">Music</a>
          <a href="#" className={s.logo}>
            <Image src={logoImg} alt="Logo" width={40} height={40} />
          </a>
          <a href="#">Events</a>
          <a href="#">Social Media</a>
        </div>

        <a href="#" className={`${s.icon} ${s.right}`}>
          <Image src={userImg} alt="User" width={30} height={30} />
        </a>
      </nav>
      {hero}

      <div className={s.shadow} />
    </header>
  );
}

