import s from "./Footer.module.scss";

export default function Footer() {
  return (
    <div className={s.footer}>
      <div className={s.footerContent}>
        <p className={s.footerText}>© 2025 Denfsa. All rights reserved.</p>
      </div>
    </div>
  );
}