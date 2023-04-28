import Image from "next/image";
import styles from "./header.module.css";

const Logo = () => {
  return (
    <>
      <div className={styles.logo_wrapper}>
        <Image
          src={"/images/logo.svg"}
          alt="Logo"
          width={"40"}
          height={"30"}
          className={styles.logo__icon}
        />
        <span className={styles.logo__text}>
          Finance <span style={{ color: "var(--text_white)" }}>Ledger</span>
        </span>
      </div>
    </>
  );
};

export default Logo;
