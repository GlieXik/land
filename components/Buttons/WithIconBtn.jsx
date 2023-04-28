import styles from "./buttons.module.css";
import Image from "next/image";

const WithIconBtn = ({ text }) => {
  return (
    <>
      <a href="#" className={styles.btn}>
        <Image
          src="/images/gallery/next.svg"
          alt="next"
          width="9"
          height="18"
          style={{ marginRight: "8px" }}
        />
        <span className={styles.btn__text}>{text}</span>
      </a>
    </>
  );
};

export default WithIconBtn;
