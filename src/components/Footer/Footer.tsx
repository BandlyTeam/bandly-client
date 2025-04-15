import s from "./Footer.module.scss";
import { FaFacebookF, FaInstagram, FaXTwitter, FaYoutube } from "react-icons/fa6";
import { IoArrowForward } from "react-icons/io5";

export default function Footer() {
  return (
    <div className={s.footer}>
      <div className={s.footerContent}>
        <div className={s.subscribeSection}>
          <p className={s.title}>SUBSCRIBE TO OUR EMAILS</p>
          <div className={s.inputWrapper}>
            <input type="email" placeholder="EMAIL" />
            <button>
              <IoArrowForward />
            </button>
          </div>
        </div>
        <div className={s.socials}>
          <FaFacebookF />
          <FaInstagram />
          <FaXTwitter />
          <FaYoutube />
        </div>
      </div>
      <p className={s.footerText}>© 2025 BANDY TEAM. All rights reserved.</p>
    </div>
  );
}
