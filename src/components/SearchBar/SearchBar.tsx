import { useRef } from 'react';
import s from './SearchBar.module.scss';
import bSearch from '@/../public/assets/icons/bSearch.svg';
import Image from 'next/image';

export default function SearchBar() {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleIconClick = () => {
    inputRef.current?.focus();
  };

  return (
    <div className={s.searchBar}>
      <input
        ref={inputRef}
        type="text"
        className={s.searchBarInput}
        placeholder="Search for songs, artists, or albums..."
      />
      <button className={s.searchBarButton} onClick={handleIconClick}>
        <Image
          src={bSearch}
          alt="Search"
          width={24}
          height={24}
          className={s.searchBarIcon}
        />
        {/* <span className={s.searchBarText}>Search</span> */}
      </button>
    </div>
  );
}