import Hero from "@/components/Hero/Hero";
import s from "./page.module.scss";
import { Header } from "@/components/Header/Header";
import Image from "next/image";
import cdBox from "../../public/assets/images/cdBox.png";
import Footer from "@/components/Footer/Footer";
import heartIcon from "../../public/assets/icons/heart.svg";
import SongsList from "@/app/SongsList";

export default function Home() {
  return (
    <div className={s.page}>
      <Header hero={<Hero />} />
      <div className={s.shadow} />
      <div className={s.main}>
        <div className={s.mainTopAuthor}>
          <div className={s.mainTopAuthorHead}>
            <p className={s.mainTopAuthorHeadText}>top author<br/> of the month</p>
            <p className={s.mainTopAuthorHeadName}>DENFSA</p>
          </div>
          <div className={s.mainTopAuthorCover}>
            <Image className={s.mainTopAuthorCoverImage} src={cdBox} alt="denfsa" width={400} height={200} />
          </div>
        </div>
        <div className={s.mainTopSongs}>
          <div className={s.topSongsHeader}>
            <h2 className={s.topSongsBackground}>TOP</h2>
            <p className={s.topSongsTitle}>SONGS</p>
          </div>
          <SongsList heartIcon={heartIcon} />
        </div>
      </div>
      <Footer />
    </div>
  );
}