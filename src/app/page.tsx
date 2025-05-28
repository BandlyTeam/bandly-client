import Hero from "@/components/Hero/Hero";
import s from "./page.module.scss";
import Header from "@/components/Header/Header";
import heartIcon from "../../public/assets/icons/heart.svg";
import SongsList from "@/components/SongsList/SongsList";
import TopAuthor from "@/components/TopAuthor/TopAuthor";
import MusicPlayer from "@/components/MusicPlayer/MusicPlayer";

export default function Home() {
  return (
    <div className={s.page}>
      <Header hero={<Hero />} />
      <div className={s.shadow} />
      <main className={s.main}>
        <TopAuthor />
        <div className={s.divider}></div>
        <div className={s.topSongsSection}>
          <div className={s.topSongsHeader}>
            <h2 className={s.topTitle}>TOP</h2>
            <h2 className={s.topText}>SONGS</h2>
          </div>          <SongsList heartIcon={heartIcon} limit={8} />        </div>
      </main>
    </div>
  );
}