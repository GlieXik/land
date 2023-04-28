import styles from "./buttons.module.css";

const SimpleButton = ({ text, type }) => {
  return (
    <>
      <button href="#" className={styles.btn} type={type || "text"}>
        <span className={styles.btn__text}>{text}</span>
      </button>
    </>
  );
};

export default SimpleButton;
