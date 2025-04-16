import s from "./Footer.module.scss";
import { FaFacebookF, FaInstagram, FaXTwitter, FaYoutube } from "react-icons/fa6";
import { IoArrowForward } from "react-icons/io5";

export default function Footer() {
  return (
    <footer className={s.footer}>
      <div className={s.footerContent}>
        <div className={s.footerSubscribe}>
          <p className={s.footerSubscribeTitle}>SUBSCRIBE TO OUR EMAILS</p>
          <div className={s.footerSubscribeInput}>
            <input type="email" placeholder="EMAIL" />
            <button>
              <IoArrowForward />
            </button>
          </div>
        </div>
        <div className={s.footerSocials}>
          <FaFacebookF />
          <FaInstagram />
          <FaXTwitter />
          <FaYoutube />
        </div>
      </div>
      <p className={s.footerCopyright}>© 2025 BANDY TEAM. All rights reserved.</p>
    </footer>
  );
}
