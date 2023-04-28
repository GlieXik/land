import styles from "./buttons.module.css";

const OutlineBtn = ({ text, variant }) => {
  return (
    <>
      <a href="#" className={styles[variant]}>
        <span className={styles.btn__text}>{text}</span>
      </a>
    </>
  );
};

export default OutlineBtn;
