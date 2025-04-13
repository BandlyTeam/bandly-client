import Image from 'next/image';
import s from './Header.module.scss';

import pauseImg from './photos/pause.png';
import userImg from './photos/user.svg';
import logoImg from './photos/logo.png';
import heroImg from './photos/1.png';

type HeaderProps = {};

export function Header(props: HeaderProps) {
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

      <div className={s.hero}>
        <Image
          src={heroImg}
          alt="Main Art"
          width={800}
          height={600}
          className={s.heroImage}
        />
        <h1 className={s.title}>BANDY</h1>
      </div>
    </header>
  );
}

