import Image from "next/image";
import cdBox from "../../../public/assets/images/cdBox.png";
import s from "./TopAuthor.module.scss";

export default function TopAuthor() {
  return (
    <section className={s.topAuthor}>
      <div className={s.topAuthorWrapper}>
        <div className={s.topAuthorHead}>
          <p className={s.topAuthorHeadText}>
            TOP AUTHOR<br />OF MONTH
          </p>
          <h1 className={s.topAuthorHeadName}>DENFSA</h1>
        </div>
        <div className={s.topAuthorCover}>
          <Image
            className={s.topAuthorCoverImage}
            src={cdBox}
            alt="CD cover for DENFSA"
            priority
            width={230}
            height={230}
          />
        </div>
      </div>
    </section>
  );
}