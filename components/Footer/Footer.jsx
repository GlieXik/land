import IconSocGroup from "../Icon/IconSocGroup";
import styles from "./footer.module.css";

const Footer = () => {
  return (
    <>
      <footer className={styles.footer}>
        <IconSocGroup />
        <span className={styles.footer__copyright}>
          Copyright © 2021 - FinanceLedger
        </span>
      </footer>
    </>
  );
};

export default Footer;
