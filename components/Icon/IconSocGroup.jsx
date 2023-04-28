import styles from "./iconsSoc.module.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faYoutube,
  faLinkedinIn,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

const IconSocGroup = () => {
  return (
    <>
      <div
        style={{
          display: "flex",
          gap: "25px",
        }}
      >
        <FontAwesomeIcon icon={faFacebook} className={styles.icon} />
        <FontAwesomeIcon icon={faTwitter} className={styles.icon} />
        <FontAwesomeIcon icon={faYoutube} className={styles.icon} />
        <FontAwesomeIcon icon={faLinkedinIn} className={styles.icon} />
      </div>
    </>
  );
};

export default IconSocGroup;
